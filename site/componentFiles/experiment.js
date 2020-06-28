const Component = require('../../api/components/asteroid/component')

let component = new Component('experiment' )

component.addFeature('search', {fields: ['experiment_title']} )
component.addFeature('filter', { field: 'experiment_class' })
component.addFeature('sort')

component.addFields('unique', 'experiment_name')
component.addFields('index', ['experiment_description', 'experiment_class', 'experiment_information', 'experiment_steps', 'experiment_start'])
component.addFields('record', [])

component.setLoader({filter: 'all', sort: 'experiment_name'})

module.exports = component




