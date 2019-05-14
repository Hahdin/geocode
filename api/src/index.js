'use strict'

const express = require('express')
const envs = require('../../envs')
const port = process.env.PORT || envs.get('PORT')
const app = express()
const routes = require('./routes/routes')
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(cors({credentials: true}))
app.use('/v0', routes())
app.listen(port)
console.info(`Server listening on port ${port}`)
