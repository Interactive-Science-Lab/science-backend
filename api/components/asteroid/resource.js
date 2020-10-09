const db = require('../../../data/dbConfig')

//A "Resource" is a REST-route

class Resource {
    constructor(data, fieldsData, featuresData) {

        //Initially, take the data and just map it to this object.
        Object.entries(data).map((arr) => this[arr[0]] = arr[1])

        //But then we rewrite a few things.
        this.names = this.names || {urlPath: "/"}
        this.loader = this.loader || {}
        this.options = this.options || {}
        this.features = featuresData
        this.fields = {
            id: data.idField,
            name: data.nameField,
            list: fieldsData,
            index: fieldsData.map(f => f.name),
            record: []
        }
        this.routes = []
        this.modelFunctions = {}

    }


    hasFeature() {
        return false
    }

    hasOption(name) {
        return this.options[name]
    }

    addRoute(route) {
        this.routes.push(route)
    }

    activateRoutes(router, ClassDatabase) {
        this.routes.map(r => r(router, ClassDatabase))
    }

    addModelFunction(modelFunction, functionName) {
        this.modelFunctions[functionName] = modelFunction
    }

    databaseName() {
        return this.names.lp
    }

    //Main difference between the below two is that handleIndexFeatures has to map & call for each entry,
    //Otherwise they look at the resource & the resources' features, and pulls all of those records for the entry.
    async handleIndexFeatures(data) {
        let featureObjects = await this.handleFeatures()
        data = data.map(async (result) => { return this.handleFeatureHelper(result, featureObjects) })
        return await Promise.all(data)
    }

    async handleViewFeatures(data) {
        let featureObjects = await this.handleFeatures()
        return await this.handleFeatureHelper(data, featureObjects)
    }

    //This function calls the DB on all features, and connects them as resources. 
    //This is called by handleIndexFeatuers and handleViewFeatures
    async handleFeatures() {
        let featureObjects = this.features.map(async (feature) => {
            let connectedResource = await db('resources').where('resource_id', feature.connected_resource).first()
            let rFields = await db('resource_fields').where('parent_id', connectedResource.resource_id)
            let rFeatures = await db('resource_features').where('parent_id', connectedResource.resource_id)
            let connectedResourceComponent = new Resource(connectedResource, rFields, rFeatures)

            return connectedResourceComponent
        })

        return await Promise.all(featureObjects)

    }

    async handleFeatureHelper(data, featureObjects) {
        //Start by cloning the db call of objects
        let tempArray = [...featureObjects]
        data['features'] = {}

        //Map over them, replacing it with a array that includes the actual items from the db
        tempArray = tempArray.map(async (feature) => {
            let items = await db(feature.names.lp).where('parent_id', data.resource_id)
            return { info: feature, items: items }
        })

        //Await the promise.
        tempArray = await Promise.all(tempArray)

        tempArray.map(s => data['features'][s.info.names.lp] = s)


        return data

    }
}

module.exports = Resource