const Component = require('../../api/components/asteroid/component')

let component = new Component('log')

component.addFeature('paginate')
component.addFeature('search', {fields: ['changes', 'previous', 'notes']} )
component.addFeature('filter', { field: 'log_confirmed' })
component.addFeature('creator', {field: 'log_submitting_user_id', selectFields: ['creator.username AS submitting_username']})
component.addFeature('confirmer',  {field: 'log_confirming_user_id', selectFields: ['confirmer.username AS confirming_username']})

component.addFields('index', ['route', 'method', 'object_id', 'log_confirmed', 'log_submitting_user_id', 'log_confirming_user_id'])
component.addFields('record', ['changes', 'previous', 'notes'])

component.setLoader({ filter: 'all' })

module.exports = component

