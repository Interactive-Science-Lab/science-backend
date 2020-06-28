const Component = require('../../api/components/asteroid/component')

let component = new Component('tool') 

component.addFeature('search', {fields: ['display_name']} )

component.addFields('unique', 'display_name')
component.addFields('index', ['description', 'instructions', 'sprite', 'properties'])
component.addFields('record', [])


module.exports = component




