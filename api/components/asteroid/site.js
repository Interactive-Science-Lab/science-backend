const express = require('express')
const router = require('../default/router')
const Resource = require('./resource');
const db = require('../../../data/dbConfig')

class Site {
    constructor() {
        this.resources = []
        this.permissions = []
        this.menuOptions = []

    }

    //This method does the very first ever call to the db to get the resource infos
    async initializeResources() {
        let resources = await db('resources').select()
        let fieldsData = await db('resource_fields').select()
        let featuresData = await db('resource_features').select()
    
        
        resources.map(r => {
            let rFields = fieldsData.filter(f => f.parent_id === r.resource_id)
            let rFeatures = featuresData.filter(f => f.parent_id === r.resource_id)
            this.addResource( r, rFields, rFeatures )
        })

        
        try { this.permissions = await db('permission_settings').select() } catch { console.log("Permission settings") }
        try { this.menuOptions = await db('menu_options').select() } catch { console.log("Menu errors") }

        return this
    }

    addResource(r, rFields, rFeatures) {
        this.resources.push(new Resource(r, rFields, rFeatures))
    }

    findResource(name) {
        let ret = null
        this.resources.map(r => r.names.friendly === name ? ret = r : null)
        return ret
    }

    retrieveServer() {
        const server = express();
        const siteComponent = this

        this.resources.map((resource) => {
            let urlPath = '/'
            if(resource.names) { urlPath = resource.names.urlPath }
            server.use(urlPath, router(resource, siteComponent))

            return resource
        })

        return server
    }


}

module.exports = Site