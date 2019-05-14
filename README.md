# Welcome to the Geocode API
This API uses the ```addresses.tar.gz``` as source data. It should be placed in the ```api/src/routes/geocode/data``` folder. Create the folder and copy the tar.gz file to it.

## Requirements
- Nodejs (This app was created with Nodejs v10.13.0)

## Endpoint
This API has a single endpoint: ```http://localhost:8080/v0/geocode```

It takes 4 optional parameters:
- type: only ```ROOFTOP``` allowed, this is the default.
- offset: line number to start at. Default is ```0```.
- size: Number of records to fetch. Default is ```10```, maximum is ```100```.
- format: The only alternate format recognized is ```geoJSON```.

Example:

http://localhost:8080/v0/geocode?limit=100&offset=29&type=ROOFTOP

Returns:
```json
{
    "code": 200,
    "msg": "success",
    "data": [
        "41305 Helen Gregg Rd, Bethesda, OH 43719, USA, lon:-81.05597399999999, lat:40.0301",
        "39871 Everett Turner Dory M Rd, Bethesda, OH 43719, USA, lon:-81.090158, lat:39.972579",
        "483 Reservoir Dr, Bethesda, OH 43719, USA, lon:-81.067836, lat:40.0169696",
        "35970 Muskrat Rd, Barnesville, OH 43713, USA, lon:-81.15754, lat:40.040749",
        "60545 W Pipe Creek Rd, Jacobsburg, OH 43933, USA, lon:-80.890052, lat:39.962432",
        "61615 Hawthorne Hill Rd, Shadyside, OH 43947, USA, lon:-80.8180117, lat:39.9749433",
        "61816 Hawthorne Hill Rd, Shadyside, OH 43947, USA, lon:-80.8193095, lat:39.9768763",
        "61585 Hawthorne Hill Rd, Shadyside, OH 43947, USA, lon:-80.816614, lat:39.973648",
        "60940 Hawthorne Hill Rd, Shadyside, OH 43947, USA, lon:-80.8056, lat:39.966436",
        "51999 Wegee Rd, Bellaire, OH 43906, USA, lon:-80.85507299999999, lat:39.972027",
        "52007 Wegee Rd, Jacobsburg, OH 43933, USA, lon:-80.854586, lat:39.972049",
        "54779 Wegee Rd, Shadyside, OH 43947, USA, lon:-80.80300799999999, lat:39.95902600000001",
        "58800 Horse Mill Hill Rd, Shadyside, OH 43947, USA, lon:-80.79888299999999, lat:39.933777",
        "252 E 39th St, Shadyside, OH 43947, USA, lon:-80.7471862, lat:39.970697",
        "205 S 7th St, Martins Ferry, OH 43935, USA, lon:-80.72797930000002, lat:40.0966107",
        "1021 Colerain Pike, Martins Ferry, OH 43935, USA, lon:-80.7276686, lat:40.1005255",
        "4252 Pine Alley, Bellaire, OH 43906, USA, lon:-80.743928, lat:40.0251108",
        "2152 1/2 Guernsey St, Bellaire, OH 43906, USA, lon:-80.7460353, lat:40.00667869999999",
        "70254 Provident Fairpoint Rd, St Clairsville, OH 43950, USA, lon:-80.92668700000002, lat:40.10524700000001",
        "67500 Clark Rd, St Clairsville, OH 43950, USA, lon:-80.8963381, lat:40.0638918",
        "69838 Jug Run Rd, St Clairsville, OH 43950, USA, lon:-80.90843799999999, lat:40.0988802",
        "66847 Pogue Rd, St Clairsville, OH 43950, USA, lon:-80.9835459, lat:40.05842579999999",
        "67540 Evensong Rd, St Clairsville, OH 43950, USA, lon:-80.9346056, lat:40.069236",
        "67520 Evensong Rd, St Clairsville, OH 43950, USA, lon:-80.9355093, lat:40.0687863",
        "67520 Evensong Rd, St Clairsville, OH 43950, USA, lon:-80.9355093, lat:40.0687863",
        "49600 Methodist Ridge Rd, St Clairsville, OH 43950, USA, lon:-80.8981, lat:40.045374",
        "66820 Willow Grove Rd, St Clairsville, OH 43950, USA, lon:-80.87146, lat:40.053143",
        "68800 Hammond Rd, St Clairsville, OH 43950, USA, lon:-80.964333, lat:40.086271",
        "69349 Lee Rd, St Clairsville, OH 43950, USA, lon:-80.94912599999999, lat:40.08975299999999",
        "69245 Cardinal Dr, St Clairsville, OH 43950, USA, lon:-80.967742, lat:40.095552",
        "45585 Singer Rd, St Clairsville, OH 43950, USA, lon:-80.96572309999999, lat:40.0922535",
        "45850 Wren Dr, St Clairsville, OH 43950, USA, lon:-80.96575, lat:40.0927",
        "69210 Bluebird Dr, St Clairsville, OH 43950, USA, lon:-80.96936339999999, lat:40.09538879999999",
        "69250 Bluebird Dr, St Clairsville, OH 43950, USA, lon:-80.9695145, lat:40.0960956",
        "69251 Bluebird Dr, St Clairsville, OH 43950, USA, lon:-80.968659, lat:40.096267",
        "69231 Bluebird Dr, St Clairsville, OH 43950, USA, lon:-80.96857399999999, lat:40.09560099999999",
        "69200 Cardinal Dr, St Clairsville, OH 43950, USA, lon:-80.96791499999999, lat:40.094223",
        "69220 Cardinal Dr, St Clairsville, OH 43950, USA, lon:-80.967675, lat:40.094921",
        "69240 Cardinal Dr, St Clairsville, OH 43950, USA, lon:-80.9677423, lat:40.0955519",
        "69260 Cardinal Dr, St Clairsville, OH 43950, USA, lon:-80.967697, lat:40.096215",
        "45851 Wren Dr, St Clairsville, OH 43950, USA, lon:-80.966155, lat:40.093451"
    ],
    "size": 41,
    "from": 29,
    "to": 129,
    "totalLines": 2953956
}
```

Minimal (uses defaults)

http://localhost:8080/v0/geocode

Returns:
```json
{
    "code": 200,
    "msg": "success",
    "data": [
        "346 Summer Ln, Maplewood, MN 55117, USA, lon:-93.085594, lat:44.9965369",
        "344 Summer Ln, Maplewood, MN 55117, USA, lon:-93.085737, lat:44.996536",
        "21 Charles Ave, St Paul, MN 55103, USA, lon:-93.1003637, lat:44.9581232",
        "25 Charles Ave, St Paul, MN 55103, USA, lon:-93.1006412, lat:44.9581169",
        "784 Cedar St, St Paul, MN 55103, USA, lon:-93.1007351, lat:44.9582263",
        "895 Evergreen Ct, Vadnais Heights, MN 55127, USA, lon:-93.06378459999999, lat:45.0747356",
        "885 Evergreen Ct, Vadnais Heights, MN 55127, USA, lon:-93.0643819, lat:45.07442750000001",
        "729 University Rd, Cleveland, OH 44113, USA, lon:-81.6868465, lat:41.4844093",
        "27364 Tillerman Ct, Olmsted Township, OH 44138, USA, lon:-81.9525474, lat:41.3590564"
    ],
    "size": 9,
    "from": 0,
    "to": 10,
    "totalLines": 2953956
}
```

geoJSON:

http://localhost:8080/v0/geocode?format=geoJSON

Returns:
```json

{
    "type": "FeatureCollection",
    "metadata": {
        "generated": 1557860027430,
        "title": "Addresses",
        "status": 200,
        "api": "1.0.0",
        "count": 9
    },
    "features": [
        {
            "type": "Feature",
            "properties": {
                "place": "346 Summer Ln, Maplewood, MN 55117, USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -93.085594,
                    44.9965369
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "place": "344 Summer Ln, Maplewood, MN 55117, USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -93.085737,
                    44.996536
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "place": "21 Charles Ave, St Paul, MN 55103, USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -93.1003637,
                    44.9581232
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "place": "25 Charles Ave, St Paul, MN 55103, USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -93.1006412,
                    44.9581169
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "place": "784 Cedar St, St Paul, MN 55103, USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -93.1007351,
                    44.9582263
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "place": "895 Evergreen Ct, Vadnais Heights, MN 55127, USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -93.06378459999999,
                    45.0747356
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "place": "885 Evergreen Ct, Vadnais Heights, MN 55127, USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -93.0643819,
                    45.07442750000001
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "place": "729 University Rd, Cleveland, OH 44113, USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -81.6868465,
                    41.4844093
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "place": "27364 Tillerman Ct, Olmsted Township, OH 44138, USA"
            },
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -81.9525474,
                    41.3590564
                ]
            }
        }
    ]
}
```


## Installing the app
From the root directory:
```bash
npm i
```
> this will install all the dependencies

> For this app to run, you will need a valid [Google API key](https://developers.google.com/maps/documentation/geocoding/start#get-a-key), visit the link if you need to aquire one.

### envs.json
You will need to create an ```evns.json``` file in the root directory. Enter the following information:
```json
{
  "API_KEY": "Your_API_KEY_Here"
}
```

## Starting the app
From the root directory:
```bash
npm start
```

# Tests
The test script is run automatically when you start the app. If any test fails the app will not start.
To manually run the test enter the following:
```bash
npm test
```


## Manual tests
To test the limit, offset and type parameters, manual tests were performed with [Postman](https://www.getpostman.com/downloads/)

Test 1
http://localhost:8080/v0/geocode?limit=1000

Expect only 100 records returned, maximum overriding the limit.
> pass

Test 2
http://localhost:8080/v0/geocode?offset=-5

Expect negative offset to be updated with default '0'
> pass

Test 3
http://localhost:8080/v0/geocode?type=APPROXIMATE

Result: Will override default. No records should be returned.
> pass

# geoJSON validation

The geoJSON format was validated at [http://geojson.io](http://geojson.io)


