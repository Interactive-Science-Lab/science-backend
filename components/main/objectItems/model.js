const db = require('../../../data/dbConfig.js');
const basicRest = require('../../core/helpers/model_helpers')

//AVAILABLE CALLS
module.exports = {
  find,
  listOfNames,
  findById,
  findByName,
  add,
  remove,
  update
}

//SEARCH HELPERS
const {
  sortQuery
} = require('../../core/helpers/search_helpers')

//CLASS SETTINGS
const classDbSettings = {
  database: 'object_items',
  id_field: 'object_item_id',
  unique_text: 'object_name',
  select_fields: [
    "object_item_id",
    "object_name",
    "object_description",
    "object_volume",
    "object_weight",
    "object_volume_variance",
    "object_weight_variance",
    "object_image"
  ],
  record_fields: [],
  record_callback: findById
}

//FUNCTIONS
async function find(props) {
  const { sort, sortdir } = props
  
  let query = basicRest.find(classDbSettings)

  query = sortQuery(query, sort, sortdir)
  
  return query
}

function findById(id) {
  let query = basicRest.findById(id, classDbSettings)
  return query
}

function listOfNames() {
  return basicRest.listOfNames(classDbSettings)
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
