exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema
      .createTable('substances', tbl => {
        tbl.increments('substance_id');
        tbl.text('substance_name');
        tbl.integer('substance_density');
        tbl.integer('substance_dispense_volume');
        tbl.text('substance_state_of_matter');
        tbl.text('substance_scientific_name');
      })
  
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema
      .dropTableIfExists('substances');
  };

