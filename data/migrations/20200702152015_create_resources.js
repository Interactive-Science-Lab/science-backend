exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('resources', tbl => {
        tbl.increments('resource_id');
        tbl.text('base_name').unique();
        tbl.json('names');

        tbl.text('idField')
        tbl.text('nameField')
        tbl.json('special_fields')

        tbl.integer('permission_id')

        tbl.json('text');
        tbl.json('loader');
        tbl.json('options');

        tbl.json('actionRedirects')
        tbl.json('actionOptions')
        
      })
  
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists('resources')
  };

