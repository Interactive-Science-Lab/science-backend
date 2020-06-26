const express = require('express');
const server = express();
require('dotenv').config();

const cors = require('cors');
server.use(cors());

server.use(express.json());

//Specific functionality- users, logs, images
const coreRoutes = require('./core.js')
server.use('/api', coreRoutes)


const defaultRoutes = require('./default.js')
server.use('/api', defaultRoutes)

server.get('/', (req, res) => {
  res.send("Your API is successfully connected");
})

module.exports = server;
