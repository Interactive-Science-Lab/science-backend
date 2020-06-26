const Component = require('../../api/components/asteroid/component')

let component = new Component('site_page', {friendly: 'pages', upper: 'Page'} )

component.addFeature('paginate')
component.addFeature('search', {fields: ['page_title', 'page_body_text']} )
component.addFeature('filter', { field: 'page_status' })
component.addFeature('sort')

component.addFields('unique', 'page_title')
component.addFields('index', ['page_status', 'page_category', 'page_symbol', 'page_order'])
component.addFields('record', ['page_body_text'])

component.setLoader({filter: 'public', sort: 'page_order'})

module.exports = component


/**
 * 
 * function images(foreign_class, id) {
  return db('images')
  .select('image_id', 'image_title', 'image_url', 'image_description', 'image_source')
  .where("foreign_id", id)
  .where("foreign_class", foreign_class)
}

function getImages(foreign_class, id) {
  return images(foreign_class, id)
  .whereNot('image_kind', "thumbnail")
  .whereNot('image_kind', "gallery")
}

function getGallery(foreign_class, id) {
  return images(foreign_class, id)
  .where('image_kind', 'gallery')
}

function getThumbnail(foreign_class, id) {
  return images(foreign_class, id)
  .where('image_kind', 'thumbnail')
  .first() 
}

function add(image) {
  return db('images')
    .insert(image)
    .returning('image_id')
    .then(res => {
      return findById(res[0])
    })
}

function update(changes, id) {
  return db('images')
    .where('image_id', id)
    .update(changes)
    .returning('image_id')
    .then(res => {
      return findById(res[0])
    });
}

function remove(id) {
  return db('images')
    .where( 'image_id', id )
    .del();
}

function removeThumbnail(imageData) {
  db('images')
    .where('foreign_class', imageData.foreign_class)
    .where('foreign_id', imageData.foreign_id)
    .where('thumbnail', true)
    .update({thumbnail: false})
    .then((res) => {return res})
}

 * 
 * 
 * 
 * 
 */