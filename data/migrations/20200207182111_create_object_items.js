exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema
      .createTable('object_items', tbl => {
        tbl.increments('object_item_id');
        tbl.text('object_name');
        tbl.text('object_description');
        tbl.integer('object_volume');
        tbl.integer('object_weight');
        tbl.integer('object_volume_variance');
        tbl.integer('object_weight_variance')
        tbl.text('object_image');
      })
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema
      .dropTableIfExists('object_items');
  };

