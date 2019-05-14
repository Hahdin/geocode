# Welcome to the Geocode API
This API uses the ```addresses.tar.gz``` as source data. It should be placed in the ```api/src/routes/geocode/data``` folder. Create the folder and copy the tar.gz file to it.

## Requirements
- Nodejs (This app was created with Nodejs v10.13.0)

## Endpoint
This API has a single endpoint: ```http://localhost:8080/v0/geocode```

It takes 3 optional parameters:
- type: only ROOFTOP allowed, this is the default.
- offset: line number to start at. Default is 0.
- size: Number of records to fetch. Default is 10, maximum is 100.


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

