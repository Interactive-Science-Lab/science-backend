const db = require('../../../../data/dbConfig.js');
const basicRest = require('../../helpers/model_helpers')

//AVAILABLE CALLS
module.exports = {
  find,
  tagCloud,
  listOfNames,
  findById,
  findByName,
  add,
  remove,
  update
}

//SEARCH HELPERS
const {
  joinThumbnail,
  joinUser,
  searchQuery,
  tagsQuery,
  filterQuery,
  sortQuery
} = require('../../helpers/search_helpers')

//CLASS SETTINGS
const classDbSettings = {
  database: 'site_blogs',
  id_field: 'site_blog_id',
  unique_text: 'blog_title',
  tag_field: 'blog_tags',
  select_fields: [
    'site_blog_id',
    'author_id',
    'blog_title',
    'blog_tags',
    'blog_description',
    'blog_status',
    'blog_category',
    'created_at'
  ],
  record_fields: [
    'blog_text'
  ],
  record_callback: findById
}

//FUNCTIONS
async function find(props) {
  const { sort, sortdir, searchTerm, category, tag, filter } = props
  
  let query = basicRest.find(classDbSettings)
    .andWhere('blog_category', category)

  query = searchQuery(query, ['blog_title', 'blog_description'], searchTerm)
  query = tagsQuery(query, 'blog_tags', tag)
  query = filterQuery(query, 'blog_status', filter)
  query = sortQuery(query, sort, sortdir)
  query = joinThumbnail(query, 'site_blogs.site_blog_id', 'SiteBlog')
  query = joinUser(query, 'site_blogs.author_id', ['username AS author_username', 'user_email'])
  
  return query
}

function findById(id) {
  let query = basicRest.findById(id, classDbSettings)

  query = joinUser(query, 'site_blogs.author_id', ['username AS author_username', 'user_email'])
  return query
}

async function tagCloud(category) {
  const tags = await basicRest.tagCloud(classDbSettings)
    .where('blog_category', category)
    .andWhere('blog_status', 'public')
  return basicRest.returnTags(tags)
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
