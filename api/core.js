const express = require('express');
const server = express();

server.use('/auth', require(`./components/core/auth-router.js`))



module.exports = server