const db = require('../../../data/dbConfig')

//"Resource" options are a collection of things that you can change about a Resource
let defaultOptions = {
    search: { name: "search", active: false, options: { fieldsToSearch: [''] }, permission_id: null },
    sort: { name: "sort", active: false, options: { sortOptions: [ {fieldName: '', displayText: ''} ] }, permission_id: null },
    filter: { name: "filter", active: false, options: { filterOptions: [''], filterField: '' }, permission_id: null },
    paginate: { name: "paginate", active: false, options: { numberPerPage: 10 }, permission_id: null }
}

class ResourceOptions {
    constructor(data) {
        if(!data || Object.entries(data).length === 0) { data = defaultOptions } 
        this.options = []
        //Map through the incoming data, creating new objects and pushing to the options array
        Object.entries(data).map((d) => { this.options.push(new ResourceOption(d)) })
    }
    
    hasOption(name) {
        return this.options[name]
    }
}


class ResourceOption {
    constructor(data) {
        this.data = data
    }


}


module.exports = ResourceOptions