const Component = require('../asteroid/component')

let component = new Component('site_blog', {friendly: 'posts', upper: 'BlogPosts'}) 

component.addFeature('paginate')
component.addFeature('search', {fields: ['blog_title', 'blog_description', 'blog_text']} )
component.addFeature('filter', { field: 'blog_status' })
component.addFeature('sort')
component.addFeature('creator', {field: 'author_id', selectFields: ['username']})
component.addFeature('thumbnail')

component.addFields('unique', 'blog_title')
component.addFields('index', ['blog_status', 'blog_category', 'blog_title', 'blog_description'])
component.addFields('record', ['blog_text'])

module.exports = component