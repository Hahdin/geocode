'use strict'

const express = require('express')
const port = process.env.PORT || 2222
const app = express()
const routes = require('./routes/routes')
const cors = require('cors')
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(cors({credentials: true}))
app.use('/v0', routes())
app.listen(port)
console.info(`Server listening on port ${port}`)
