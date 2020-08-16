const db = require('../../../data/dbConfig')

class Resource {
    constructor(data, fieldsData, featuresData) {
        Object.entries(data).map((arr) => this[arr[0]] = arr[1])
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

    async handleIndexFeatures(data) {
        let featureObjects = await this.handleFeatures()

        data = data.map(async (result) => {
            return this.handleFeatureHelper(result, featureObjects)
        })

        return await Promise.all(data)
    }

    async handleViewFeatures(data) {
        let featureObjects = await this.handleFeatures()

        return await this.handleFeatureHelper(data, featureObjects)

    }

    async handleFeatureHelper(data, featureObjects) {
        let tempAray = [...featureObjects]

        tempAray = tempAray.map(async (feature) => {
            let items = await db(feature.names.lp).where('parent_id', data.resource_id)
            return [feature, items]
        })

        tempAray = await Promise.all(tempAray)

        tempAray.map(s => data[s[0].names.lp] = s[1])

        return data

    }
}

module.exports = Resource