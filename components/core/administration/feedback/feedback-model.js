const db = require('../../../../data/dbConfig.js');
const basicRest = require('../../helpers/model_helpers')

//AVAILABLE CALLS
module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

//SEARCH HELPERS
const {
  searchQuery,
  filterQuery
} = require('../../helpers/search_helpers')

//CLASS SETTINGS
const classDbSettings = {
  database: 'feedbacks',
  id_field: 'feedback_id',
  select_fields: [
    'feedback_id',
    'feedback_kind',
    'feedback_message',
    'feedback_name',
    'feedback_email',
    'logged',
  ],
  record_fields: [],
  record_callback: findById
}

//FUNCTIONS
async function find(props) {
  const { searchTerm, filter } = props
  
  let query = basicRest.find(classDbSettings)

  query = searchQuery(query, ['feedback_message', 'feedback_name', 'feedback_email'], searchTerm)
  query = filterQuery(query, 'logged', filter === 'logged')
  
  return query
}

function findById(id) {
  return query = basicRest.findById(id, classDbSettings)
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
