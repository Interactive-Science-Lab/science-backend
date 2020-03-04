const express = require('express');
const server = express();

const core_path = "../components/core/"
const account_path = core_path + "accounts/"
const administration_path = core_path + "administration/"
const content_path = core_path + "content/"
const main_path = "../components/main/"

const components = [
    //User & auth information
    {url: '/users', path: account_path, folder: "users/", file: "user"},

    //Logs can be applied to any route to keep track of who changes what and the prior record
    {url: '/logs', path: administration_path, folder: "userLogs/", file: "log"},
    {url: '/feedback', path: administration_path, folder: "feedback/", file: "feedback"},
    {url: '/support_tickets', path: administration_path, folder: "supportTickets/", file: "support_ticket"},

    {url: '/pages', path: content_path, folder: "sitePages/", file: "site_page"},
    {url: '/posts', path: content_path, folder: "siteBlogs/", file: "site_blog"},
    {url: '/images', path: content_path, folder: "images/", file: "image"},

    {url: '/experiments', path: main_path, folder: 'experiments/', file: ''},
    {url: '/containers', path: main_path, folder: 'containers/', file: ''},
    {url: '/objects', path: main_path, folder: 'objectItems/', file: ''},
    {url: '/substances', path: main_path, folder: 'substances/', file: ''},
    {url: '/tools', path: main_path, folder: 'tools/', file: ''},
]

components.map(({url, path, folder, file}) => server.use(url, require(`${path}${folder}${file !== '' ? file + "-" : ''}router.js`)))


module.exports = server