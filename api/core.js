const express = require('express');
const server = express();

const core_path = "../components/core/"
const account_path = core_path + "accounts/"

const components = [
]

components.map(({url, path, folder, file}) => server.use(url, require(`${path}${folder}${file !== '' ? file + "-" : ''}router.js`)))


module.exports = server