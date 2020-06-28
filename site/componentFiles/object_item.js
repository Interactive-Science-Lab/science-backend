const Component = require('../../api/components/asteroid/component')

let component = new Component('object_item', {friendly: 'objects', upper: 'Object'}) 

component.addFeature('search', {fields: ['display_name']} )

component.addFields('unique', 'display_name')
component.addFields('index', ['description', 'sprite', 'color', 'properties', 'mass', 'volume', 'ph', 'temperature', 'low_temp_point', 'high_temp_point'])
component.addFields('record', [])

module.exports = component

