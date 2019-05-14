const fs = require('fs');
const path = require('path')
const targz = require('targz');
const fetch = require('node-fetch');
const envs = require('../../../../envs');

const DATA_SRC = `${__dirname}\\data\\extract\\addresses.txt`;
const TAR_SRC = `${__dirname}\\data\\addresses.tar.gz`;

/**
 * TODOS:
 * - offset and fetch ammount
 */
/**
 * Main Endpoint.
 * 
 * 
 */
const getAddresses = () => async (req, res) => {
   let query = req.query;
   if (!query.type) {
      query = {
         type: 'ROOFTOP'
      };//default
   }
   try
   {
      let isFile = await makeDataAvailable(DATA_SRC);
      if (isFile !== true) {
         return res.json({
            code: 500,
            msg: 'failed',
            data: {
               msg: `cannot access address data`,
               error: isFile,
            }
         })
      }
      let data = await extractAddresses(query.type, DATA_SRC);
      data = data.filter(item => item);//remove nulls
      return res.json({
         code: 200,
         msg: 'success',
         data: data,
         size: data.length,
      })
   }
   catch(e)
   {
      return res.json({
         code: 501,
         msg: 'error',
         data: {
            error: e,
         }
      })
   }
}
/**
 * Make sure the data is extracted and available
 * 
 * @param {string} src Path to the extracted text file
 */
const makeDataAvailable = (src) => {
   return new Promise((resolve, reject) => {
      console.log('make data avail')
      try {
         fs.access(src,
            async (err) => {
               let ret = null;
               if (err) {
                  //extract file
                  ret = await extractFiledata();
               }
               else//already extracted, pass through
               {
                  ret = true;
               }
               resolve(ret);
            })
      }
      catch (e) {
         reject(e);
      }
   })
}

/**
 * Extract the tar.gz datafile to the extract directory
 */
const extractFiledata = () => {
   return new Promise((resolve, reject) => {
      targz.decompress({
         src: path.resolve(TAR_SRC),
         dest: path.resolve(`${__dirname}\\data\\extract`)
      }, (err) => {
         if (err) {
            console.log(err);
            resolve(err);//resolve with the error
         }
         else {
            resolve(true);
         }
      });
   })
}

/**
 * Extract Geocoded addresses that match the query criteria
 * 
 * @param {string} src source file path
 * @param {string} query ROOFTOP only currently allowed query param
 */
const extractAddresses = (query, src) => {
   return new Promise((resolve, reject) => {
      let data = fs.createReadStream(src, 'utf8')
      let promises = []
      data.on('data', (chunk) => {
         let lines = chunk.split('\n')
         lines.forEach(line => {
            let parts = /(.{30})(.{2})(.{40})(.{4})(.{2})(.{10})(.{6})(.{30})(.{2})/.exec(line)
            if (!parts) {
               return;
            }
            if (!parts[1] || !parts[8] || !parts[9]) {
               return;//critical parts for ROOFTOP missing
            }
            parts = formatAll(parts);
            //critical parts of the address
            let addy = `${parts[1]}`;
            if (parts[2].length > 0) {
               addy += `+${parts[2]}`;
            }
            if (parts[3].length > 0) {
               addy += `+${parts[3]}`;
            }
            if (parts[4].length > 0) {
               addy += `+${parts[4]}`;
            }
            if (parts[5].length > 0) {
               addy += `+${parts[5]}`;
            }
            //add city and state
            addy += `,+${parts[8]},+${parts[9]}`
            promises.push(fetchFromAPI(addy, query));
         })
      })
      data.on('end', () => {
         Promise.all(promises).then(pr => {
            resolve(pr);
         }).catch(reason => {
            console.log(reason)
            reject(reason)
         })
      })
   })
}
/**
 * Call Google api to get Geocoded address
 * 
 * @param {string} address formatted address extracted from data
 * @param {*} query 
 */
const fetchFromAPI = (address, query) => {
   return new Promise((resolve, reject) => {
      let api_key = envs.get('API_KEY');
      let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${api_key}`
      fetch(url)
         .then(res => res.json())
         .then(json => {
            if (json.results[0]) {
               //get results, are they good?
               if (!json.results[0].partial_match &&
                  (json.results[0].geometry && json.results[0].geometry.location_type)
                  && json.results[0].geometry.location_type === query) {
                  resolve(`${json.results[0].formatted_address}, lon:${json.results[0].geometry.location.lng}, lat:${json.results[0].geometry.location.lat}`);
               }
               else {
                  resolve();//return null
               }
            }
         })
         .catch(reason => {
            console.log(reason);
            reject(reason);
         })
   })
}

/**
 * Format the extracted values as required
 * 
 * trims and adds + in place of space
 * @param {array} ar 
 */
const formatAll = (ar) => {
   return ar.map(item => {
      item = item.trim()
      return item.replace(/\s/g, '+');
   });
}

module.exports = {
   getAddresses,
   extractFiledata,
   extractAddresses,
   formatAll,
   makeDataAvailable,
}
