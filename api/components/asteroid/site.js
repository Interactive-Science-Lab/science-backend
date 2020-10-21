/* 
SITE is the master component which holds all the resoures, permissions, and menuOptions. 
*/
const express = require('express')
const router = require('../default/router')
const authRouter = require(`../core/auth-router.js`)
const Resource = require('./resource');
const db = require('../../../data/dbConfig')


class Site {
    constructor() {
        //Array of resources objects
        this.resources = []
        this.permissions = []
        this.menuOptions = []
    }

    //This method does the very first ever call to the db to get the resource infos, permissions & more,
    //setting them to this object.
    async initializeResources() {
        let resources = await db('resources').select()
        let fieldsData = await db('resource_fields').select()
        let featuresData = await db('resource_features').select()
    
        
        resources.map(r => {
            let rFields = fieldsData.filter(f => f.parent_id === r.resource_id)
            let rFeatures = featuresData.filter(f => f.parent_id === r.resource_id)
            //Private method that puts everything in a class and adds it to the object.
            this.addResource( r, rFields, rFeatures )
        })

        
        try { this.permissions = await db('permission_settings').select() } catch { console.log("Permission settings") }
        try { this.menuOptions = await db('menu_options').select() } catch { console.log("Menu errors") }

        return this
    }

    //Private method called by initialize resources
    addResource(r, rFields, rFeatures) {
        this.resources.push(new Resource(r, rFields, rFeatures))
    }

    //Takes in a name and returns the correct resource based on that.
    findResource(name) {
        let ret = null
        this.resources.map(r => r.names.friendly === name ? ret = r : null)
        return ret
    }

    //Creates a new server, applying the resources to that 
    retrieveServer() {
        const server = express();
        const siteComponent = this

        this.resources.map((resource) => {
            let urlPath = '/'
            if(resource.names) { urlPath = resource.names.urlPath }
            //Uses the urlPath and the default router, passing in this whole component.
            server.use(urlPath, router(resource, siteComponent))

            return resource
        })

        return server
    }

    attachAuth() {
        const server = express();
        const siteComponent = this
        const userResource = this.findResource('users')

        server.use('/', authRouter(userResource, siteComponent))

        return server
    }

}

module.exports = Site