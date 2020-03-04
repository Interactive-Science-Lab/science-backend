exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema
      .createTable('object_items', tbl => {
        tbl.increments('object_item_id');
        tbl.text('display_name');
        tbl.text('description');
        tbl.text('scientific_name');

        tbl.text('sprite');
        tbl.text('color');
        tbl.specificType('properties', 'text ARRAY');

        tbl.float('volume');
        tbl.float('mass');
        tbl.float('ph');
        tbl.float('temperature');

        tbl.integer('low_temp_point');
        tbl.integer('high_temp_point');

      })
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema
      .dropTableIfExists('object_items');
  };

