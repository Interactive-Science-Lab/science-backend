// class Component {
//     constructor(baseName, options = {}) {
//         const plural = options.plural || baseName + 's'
//         const upper = options.upper || baseName.charAt(0).toUpperCase() + baseName.substring(1);
//         const friendly = options.friendly || plural

//         this.names = {
//             lp: baseName + 's',
//             ls: baseName,
//             up: upper + 's',
//             us: upper,
//             friendly: friendly,
//             urlPath: options.urlPath || "/" + friendly,
//         }
//         //

//         this.features = {
//             paginate: { name: 'paginate', on: false, options: {} },
//             search: { name: 'search', on: false, options: {} },
//             filter: { name: 'filter', on: false, options: {} },
//             sort: { name: 'sort', on: false, options: {} },
//             tags: { name: 'tags', on: false, options: {} },
//             log: { name: 'log', on: false, options: {} },
//             thumbnail: { name: 'thumbnail', on: false, options: {} },
//             gallery: { name: 'gallery', on: false, options: {} },
//             creator: { name: 'creator', on: false, options: {} },
//             confirmer: { name: 'confirmer', on: false, options: {} },
//             category: { name: 'category', on: false, options: {} },
//             userKinds: { name: 'userKinds', on: false, options: {} },
//         }

//         this.references= [
//             //grab only the targetField in the "index" call but look for whole record in "view" call
//             //{ db: 'User', field: 'user_id', targetField: 'username' }
//         ]

//         this.fields = {
//             id: baseName + '_id',
//             unique: false,
//             password: false,
//             index: [],
//             record: []
//         }

//         this.loader = {}

//         this.routes = []
//         this.modelFunctions = {}
//     }

//     addFeature (name, options = {})  {
//         let feature = this.features[name] 
//         feature.on = true
//         feature.options = options
//         return feature
//     }

//     hasFeature (name) {
//         return this.features[name] && this.features[name].on
//     }

//     featureOptions (name) {
//         return this.features[name].options
//     }

//     addFields (kind, fields)  {
//         this.fields[kind] = fields
//     }

//     setLoader (loader) {
//         this.loader = loader
//     }

//     addRoute (route) {
//         this.routes.push(route)
//     }

//     activateRoutes (router, ClassDatabase) {
//         this.routes.map(r => r(router, ClassDatabase))
//     }

//     addModelFunction (modelFunction, functionName) {
//         this.modelFunctions[functionName] = modelFunction
//     }
// }

// module.exports = Component