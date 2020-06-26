const Component = require('../asteroid/component')

let component = new Component('tool') 

component.addFeature('search', {fields: ['display_name']} )

component.addFields('unique', 'display_name')
component.addFields('index', ['description'])
component.addFields('record', ['instructions', 'sprite', 'properties'])


module.exports = component




