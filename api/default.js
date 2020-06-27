const express = require('express');
const server = express();
const router = require('./components/default/router.js')

let components = []

//Import them this way
components.push( require('../site/componentFiles/experiment') )

components.push( require('../site/componentFiles/thumbnail') )
components.push( require('../site/componentFiles/feedback') )
components.push( require('../site/componentFiles/user_logs') )

components.push( require('../site/componentFiles/site_page') )
components.push( require('../site/componentFiles/site_blog') )

components.push( require('../site/componentFiles/support_ticket') )

components.push( require('../site/componentFiles/user') )
components.push( require('../site/componentFiles/end_user') )
components.push( require('../site/componentFiles/admin_user') ) 

components.push( require('../site/componentFiles/container') )
components.push( require('../site/componentFiles/substance') )
components.push( require('../site/componentFiles/object_item') )
components.push( require('../site/componentFiles/tool') )



components.map((component) => {

    let urlPath = component.names.urlPath
    server.use(urlPath, router(component) )

    return component
})

module.exports = server