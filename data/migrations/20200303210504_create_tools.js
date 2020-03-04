exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema
      .createTable('tools', tbl => {
        tbl.increments('tool_id');
        tbl.text('display_name');
        tbl.text('description');
        tbl.text('instructions');
        
        tbl.text('sprite');
        tbl.specificType('properties', 'text ARRAY');
      })
  
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema
      .dropTableIfExists('tools')
  };

