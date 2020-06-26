const Component = require('../../api/components/asteroid/component')

let component = new Component('container') 

component.addFeature('search', {fields: ['display_name']} )

component.addFields('unique', 'display_name')
component.addFields('index', ['description'])
component.addFields('record', ['sprite', 'properties', 'mass', 'hold_volume'])


module.exports = component