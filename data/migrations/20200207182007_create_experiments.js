exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema
      .createTable('experiments', tbl => {
        tbl.increments('experiment_id');
        tbl.text('experiment_name');
        tbl.text('experiment_description');

        tbl.integer('experiment_order');
        tbl.text('experiment_class')
        tbl.text('experiment_steps');
        tbl.specificType('experiment_start', 'json ARRAY');

      })
  
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema
      .dropTableIfExists('experiments');
  };
