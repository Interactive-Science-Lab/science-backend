const Component = require('../asteroid/component')

let component = new Component('object_item', {friendly: 'objects', upper: 'Object'}) 

component.addFeature('search', {fields: ['display_name']} )

component.addFields('unique', 'display_name')
component.addFields('index', ['description'])
component.addFields('record', ['sprite', 'color', 'properties', 'mass', 'volume', 'ph', 'temperature', 'low_temp_point', 'high_temp_point'])

module.exports = component

