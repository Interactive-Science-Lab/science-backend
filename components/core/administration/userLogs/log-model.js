const db = require('../../../../data/dbConfig.js');
const basicRest = require('../../helpers/model_helpers')

//AVAILABLE CALLS
module.exports = {
  find,
  findById,
  confirmAll,
  add,
  update,
  remove
};

//SEARCH HELPERS
const {
  searchQuery,
  filterQuery,
  joinUser
} = require('../../helpers/search_helpers')

//CLASS SETTINGS
const classDbSettings = {
  database: 'logs',
  id_field: 'log_id',
  select_fields: [
    'log_id',
    'log_submitting_user_id',
    'log_confirming_user_id',
    'route',
    'method',
    'changes',
    'previous',
    'notes',
    'log_confirmed',
    'object_id'
  ],
  record_fields: [],
  record_callback: findById
}

//FUNCTIONS
function find(props) {
  const { searchTerm, filter } = props
  let query = basicRest.find(classDbSettings)
  query = searchQuery(query, ['previous', 'changes', 'notes'], searchTerm)
  query = filterQuery(query, 'log_confirmed', filter === 'all' ? filter : (filter === 'confirmed' ? true : null))
  query = joinUser(query, 'logs.log_submitting_user_id', ['submitter.username AS submitter_username'], 'submitter')
  query = joinUser(query, 'logs.log_confirming_user_id', ['confirmer.username AS confirmer_username'], 'confirmer')
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

function confirmAll() {
  return db('logs')
  .whereNull('log_confirmed')
  .update('log_confirmed', true)
}
