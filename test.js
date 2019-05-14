import test from 'ava';
import {
    extractFiledata, 
    extractAddresses, 
    formatAll,
    makeDataAvailable,
} from './api/src/routes/geocode/index'

/**
 * Test to confirm data is extracted. 
 * 
 * If need be, delete the contents of the data/extract folder to reset
 * makeDataAvailable calls function extractFiledata
 */
test('make data available', async function (t){
    const src = `${__dirname}\\api\\src\\routes\\geocode\\data\\extract\\addresses.txt`;
    const value = await makeDataAvailable(src);
    console.log(value)
    t.true(value);
})

/**
 * Test to confirm extracting address from the API
 * using a test file (portion of addresses.txt). The
 * function fetchFromAPI is called from within.
 * 
 * Note: uses the api, API_KEY needs to be set in your envs.json
 */
test('extract address', async function (t) {
    const query = 'ROOFTOP';
    const src = `${__dirname}\\api\\src\\routes\\geocode\\data\\extract\\test.txt`;
    const value = await extractAddresses(query, src);
	t.true(Array.isArray(value) && value.length > 0);
});

/**
 * Test to make sure out formatting works
 * 
 * Should trim values and replace internal ws w/ '+'
 */
test('formatting', t =>{
    let ar = ['One', 'Two Three ', '4 5 6 '];
    ar = formatAll(ar);
    t.true(ar[1] ==='Two+Three' && ar[2] ==='4+5+6' );
})

