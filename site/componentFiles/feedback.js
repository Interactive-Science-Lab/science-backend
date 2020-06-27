const Component = require('../../api/components/asteroid/component')

let component = new Component('feedback', {friendly: 'feedback', urlPath: '/feedback'}) 

component.addFeature('paginate')
component.addFeature('search', {fields: ['feedback_name', 'feedback_email', 'feedback_message']} )
component.addFeature('filter', { field: 'logged' })
component.addFeature('sort')

component.addFields('index', ['feedback_kind', 'feedback_name', 'feedback_email', 'feedback_message', 'logged'])

component.setLoader({filter: 'all'})

module.exports = component




