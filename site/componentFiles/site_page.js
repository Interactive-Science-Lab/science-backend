const Component = require('../../api/components/asteroid/component')
const db = require('../../data/dbConfig.js');

let component = new Component('site_page', { friendly: 'pages', upper: 'Page' })

component.addFeature('paginate')
component.addFeature('search', { fields: ['page_title', 'page_body_text'] })
component.addFeature('filter', { field: 'page_status' })
component.addFeature('sort')

component.addFields('id', 'site_page_id')
component.addFields('unique', 'page_title')
component.addFields('index', ['page_status', 'page_category', 'page_symbol', 'page_order'])
component.addFields('record', ['page_body_text'])

component.setLoader({ filter: 'public', sort: 'page_order' })

const findMenuModel = () => {
    return db('site_pages')
        .where('page_status', 'public')
        .orderBy('page_order') 
}

const findMenuRouter = (router, ClassDatabase) => {
    router.get('/menu', (req, res) => {
        ClassDatabase.findMenuModel()
            .then(items => {
                return res.json(items);
            })
            .catch(err => {
                res.status(500).json({ message: 'Failed to get items' });
            });
    })
}

component.addModelFunction(findMenuModel, 'findMenuModel')
component.addRoute(findMenuRouter)

module.exports = component

