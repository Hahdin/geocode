'use strict'
const {getAddresses} = require('./geocode')
const express = require('express')
const router = express.Router()
const routes = () => {
  router.post('/', (req, res) => {
    res.json(
      { message: 'Connected to server' }
    )
  }
  )
   router.get('/geocode', getAddresses())
  return router
}
module.exports = routes
