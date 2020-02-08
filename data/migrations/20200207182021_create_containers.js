
exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema
      .createTable('containers', tbl => {
        tbl.increments('container_id');
        tbl.text('container_name');
        tbl.integer('container_mass');
        tbl.integer('container_volume');
        tbl.text('container_image');
        tbl.specificType('container_properties', 'text ARRAY');
      })
  
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema
      .dropTableIfExists('containers');
  };

