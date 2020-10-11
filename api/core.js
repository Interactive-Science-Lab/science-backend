const express = require('express');
const server = express();
require('dotenv').config();

const cors = require('cors');
server.use(cors());

server.use(express.json());

/* LIST OF CORE ROUTES */ //

server.use('/api/auth', require(`./components/core/auth-router.js`))

server.get('/', (req, res) => {
  res.send("Your API is successfully connected");
})

module.exports = server;
