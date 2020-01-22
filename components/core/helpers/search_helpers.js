const db = require('../../../data/dbConfig.js');
const knex = require('knex')

module.exports = {
  joinThumbnail,
  joinUser,
  searchQuery,
  tagsQuery,
  filterQuery,
  sortQuery
};

function joinThumbnail(query, id_field, foreign_class) {
  return query
    .select('image_url', 'image_source')
    .leftJoin('images', id_field, 'images.foreign_id')
    .andWhere(function () {
      this.where(function () {
        this.where('foreign_class', foreign_class).andWhere('image_kind', 'thumbnail')
      }).orWhere(function () {
        this.whereNull('foreign_class').whereNull('image_kind')
      })
    })
}

function joinUser(query, id_field, select_fields, alias = 'users') {
  //Set table and alias, accounting for if an alias is present. 
  //It may be the case there are two different (creator & confirmer, etc.) on an object.
  let table = 'users'
  if(alias != 'users') { table = `users as ${alias}` }

  return query
  .select(select_fields)
  .leftJoin(table, id_field, `${alias}.user_id`)
}

function searchQuery(query, fields, term) {
  if(term != '') {
    query = query.andWhere((q) =>
      fields.map(field_name => q = q.orWhere(field_name, 'iLIKE', `%${term}%`))
    )
  }
  return query
}

function tagsQuery(query, field, tag) {
  return tag !== "" ? query.andWhere(db.raw(`'${tag}' = ANY(${field})`)) : query
}

function filterQuery(query, field, filter) {
  if(filter !== 'all'){
    query = query.andWhere(field, filter)
  }
  return query
}

function sortQuery(query, sort, sortdir) {
  if(!sort || !sortdir) { console.log("ERROR WARNING- Invalid input- Please make sure default sort field is set.") }
  return query.orderBy(sort, sortdir)
}