const Component = require('../../api/components/asteroid/component')

let component = new Component('substance') 

component.addFeature('search', {fields: ['display_name']} )

component.addFields('unique', 'display_name')
component.addFields('index', ['description', 'texture', 'container', 'color', 'properties', 'density', 'ph', 'temperature', 'low_temp_point', 'high_temp_point'])
component.addFields('record', [])

module.exports = component




