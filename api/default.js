const express = require('express');
const server = express();
const router = require('../components/default/router.js')

let components = []

//Import them this way
components.push( require('../components/componentFiles/experiment') )
components.push( require('../components/componentFiles/site_page') )
/*

components.push( require('../components/componentFiles/thumbnail') )
components.push( require('../components/componentFiles/feedback') )
components.push( require('../components/componentFiles/user_logs') )
components.push( require('../components/componentFiles/end_user') )
components.push( require('../components/componentFiles/admin_user') ) */

components.push( require('../components/componentFiles/site_blog') )

components.push( require('../components/componentFiles/support_ticket') )


components.push( require('../components/componentFiles/user') )

components.push( require('../components/componentFiles/container') )
components.push( require('../components/componentFiles/substance') )
components.push( require('../components/componentFiles/object_item') )
components.push( require('../components/componentFiles/tool') )



components.map((component) => {

    let urlPath = component.names.urlPath
    server.use(urlPath, router(component) )

    return component
})

module.exports = server