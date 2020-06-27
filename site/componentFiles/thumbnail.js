const Component = require('../../api/components/asteroid/component')
let customRoutes = require('../../api/components/core/image-router')

let component = new Component('image')

component.addFields('index', ['image_url', 'image_source', 'image_kind'])
component.addFields('record', ['image_title', 'image_description'])

component.addRoute( customRoutes.customPost )
component.addRoute( customRoutes.customPut )

module.exports = component


/*
function removeThumbnail(imageData) {
  db('images')
    .where('foreign_class', imageData.foreign_class)
    .where('foreign_id', imageData.foreign_id)
    .where('thumbnail', true)
    .update({thumbnail: false})
    .then((res) => {return res})
}

 * 
 */