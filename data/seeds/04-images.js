
exports.seed = function(knex) {

    let objects = []
    let baseImage = {
      image_url: "https://www.w3schools.com/w3css/img_lights.jpg",
      image_kind: 'thumbnail',
      image_title: 'Thumbnail Image',
      image_description: 'An image uploaded by this user',
      image_source: "Original Upload"
    }

    for(var i=1;i<10;i++) {
      objects.push({...baseImage, foreign_class: "User", foreign_id: i})
    }
    for(var j=1;j<12;j++) {
      objects.push({...baseImage, foreign_class: "SiteBlog", foreign_id: j})
    }

    return knex('images').insert(objects);
  };
  