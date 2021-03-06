
exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema
      .createTable('containers', tbl => {
        tbl.increments('container_id');
        tbl.text('display_name');
        tbl.text('description');
        
        tbl.text('sprite');
        tbl.specificType('properties', 'text ARRAY');

        tbl.integer('mass');
        tbl.integer('hold_volume');
      })
  
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema
      .dropTableIfExists('containers');
  };

