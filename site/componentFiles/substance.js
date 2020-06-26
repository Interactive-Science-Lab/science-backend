const Component = require('../asteroid/component')

let component = new Component('substance') 

component.addFeature('search', {fields: ['display_name']} )

component.addFields('unique', 'display_name')
component.addFields('index', ['description'])
component.addFields('record', ['texture', 'container', 'color', 'properties', 'density', 'ph', 'temperature', 'low_temp_point', 'high_temp_point'])

module.exports = component




