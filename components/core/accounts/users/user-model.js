const basicRest = require('../../helpers/model_helpers')
const db = require('../../../../data/dbConfig.js');

//AVAILABLE CALLS
module.exports = {
  find,
  listOfNames,
  findById,
  findByName,
  add,
  remove,

  findUser,
  findByEmail,
  findByUsername,
  update,
  getImages,
  getThumbnail,
  verify,
  updatePassword
}

//SEARCH HELPERS
const {
  joinThumbnail,
  searchQuery,
  filterQuery,
  sortQuery
} = require('../../helpers/search_helpers')

//CLASS SETTINGS
const classDbSettings = {
  database: 'users',
  id_field: 'user_id',
  unique_text: 'username',
  select_fields: [
    'user_id',
    'password',
    'username',
    'user_email',
    'user_role',
    'user_kind',
    'user_verified',
    'ban_notes',
    'last_login_attempt',
    'login_attempts',
    'mailing_list',
    'forgotten_password_reset_time'
  ],
  record_fields: [],
  record_callback: findById
}

//FUNCTIONS
function find(props) {
  const { sort, sortdir, searchTerm, filter } = props
  let query = basicRest.find(classDbSettings)

  query = searchQuery(query, ['username', 'user_email'], searchTerm)
  query = filterQuery(query, 'user_role', filter)
  query = sortQuery(query, sort, sortdir)
  query = joinThumbnail(query, 'users.user_id', 'User')
  
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

function findUser(email, username = null) {
  return db('users')
    .where('user_email', 'iLIKE', '%'+email+'%')
    .orWhere('username', 'iLIKE', '%'+(username || email)+'%')
    .first();
}

function findByUsername(username) {
  return db('users')
    .where('username', 'iLIKE', '%'+username+'%')
    .first();
}

function findByEmail(user_email) {
  return db('users')
  .where('user_email', 'iLIKE', '%'+email+'%')
    .first();
}

function getImages(id) {
  return db('images').where("foreign_id", id).where("foreign_class", "User").where("thumbnail", false)
}

function getThumbnail(id) {
  return db('images').where("foreign_id", id).where("foreign_class", "User").where("thumbnail", true).first()
}

function verify(id) {
  return update({ user_verified: true }, id)
}

function updatePassword(hash, id) {
  return update({
    password: hashedPassword,
    forgotten_password_reset_time: null
  }, user.user_id)
}