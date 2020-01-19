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
  database: 'support_tickets',
  id_field: 'support_ticket_id',
  select_fields: [
    'support_ticket_id',
    'support_ticket_kind',
    'support_ticket_message',
    'support_ticket_name',
    'support_ticket_email',
    'require_update',
    'support_ticket_state',
  ],
  record_fields: [
    'public_notes_text',
    'private_notes_text'
  ],
  record_callback: findById
}

//FUNCTIONS
async function find(props) {
  const { searchTerm, filter } = props
  
  let query = basicRest.find(classDbSettings)
  query = searchQuery(query, ['support_ticket_message', 'public_notes_text', 'private_notes_text'], searchTerm)
  query = filterQuery(query, 'support_ticket_state', filter)
  
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

