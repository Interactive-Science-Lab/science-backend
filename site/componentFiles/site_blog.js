const Component = require('../../api/components/asteroid/component')

let component = new Component('site_blog', {friendly: 'posts', upper: 'SiteBlog'}) 

component.addFeature('paginate')
component.addFeature('search', {fields: ['blog_title', 'blog_description', 'blog_text']} )
component.addFeature('filter', { field: 'blog_status' })
component.addFeature('sort')
component.addFeature('creator', {field: 'author_id', selectFields: ['creator.username AS author_username']})
component.addFeature('thumbnail')
component.addFeature('tags', {field: "blog_tags"})

component.addFields('unique', 'blog_title')
component.addFields('index', ['blog_status', 'blog_category', 'blog_title', 'blog_description'])
component.addFields('record', ['blog_text'])

component.setLoader({sort: "created_at", filter: 'all'})


module.exports = component