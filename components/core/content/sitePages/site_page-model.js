const db = require('../../../../data/dbConfig.js');
const basicRest = require('../../helpers/model_helpers')

//AVAILABLE CALLS
module.exports = {
  find,
  findMenu,
  findById,
  findByName,
  add,
  remove,
  update
}

//SEARCH HELPERS
const {
  searchQuery,
  filterQuery,
  sortQuery
} = require('../../helpers/search_helpers')

//CLASS SETTINGS
const classDbSettings = {
  database: 'site_pages',
  id_field: 'site_page_id',
  unique_text: 'page_title',
  select_fields: [
    'site_page_id',
    'page_title',
    'page_status',
    'page_symbol',
    'page_order',
    'page_category'
  ],
  record_fields: [
    'page_body_text'
  ],
  record_callback: findById
}

//CUSTOM FUNCTIONS-------------------
function findMenu() {
  return db('site_pages')
  .where('page_status', 'public')
  .orderBy('page_order')
}
//-----------------------------------


//FUNCTIONS
function find(props) {
  const { sort, sortdir, searchTerm, filter } = props
  let query = basicRest.find(classDbSettings)

  query = searchQuery(query, ['page_title'], searchTerm)
  query = filterQuery(query, 'page_status', filter)
  query = sortQuery(query, sort, sortdir)
  return query
}

function findById(id) {
  let query = basicRest.findById(id, classDbSettings)
  return query
}
function findByName(name, excludingId = null) {
  return basicRest.findByName(name, excludingId, classDbSettings)
}
function add(data) {
  return basicRest.add(data, classDbSettings)
}
function update(changes, id) {
  return basicRest.update(changes, id, classDbSettings)
}
function remove(id) {
  return basicRest.remove(id, classDbSettings)
}





















