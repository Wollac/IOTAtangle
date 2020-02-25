const Tangle = require('./app.js')

const NAME = 'mainnet' // name used for data file NAMEdata.json
const LSM_NODE = process.env.LSM_NODE
const ZMQ_ENDPOINT = process.env.ZMQ_ENDPOINT
const WEB_PORT = 8080 // port the webserver will listen on
const FRONTEND_CONFIG = {
    networkName: 'compass' // displayed in the frontend
}


Tangle(NAME, LSM_NODE, ZMQ_ENDPOINT, WEB_PORT, FRONTEND_CONFIG)
