const Component = require('../../api/components/asteroid/component')

let component = new Component('site_page', {friendly: 'pages', upper: 'Page'} )

component.addFeature('paginate')
component.addFeature('search', {fields: ['page_title', 'page_body_text']} )
component.addFeature('filter', { field: 'page_status' })
component.addFeature('sort')

component.addFields('unique', 'page_title')
component.addFields('index', ['page_status', 'page_category', 'page_symbol', 'page_order'])
component.addFields('record', ['page_body_text'])

component.setLoader({filter: 'public', sort: 'page_order'})

module.exports = component



// function confirmAll() {
//     return db('logs')
//     .whereNull('log_confirmed')
//     .update('log_confirmed', true)
//   }