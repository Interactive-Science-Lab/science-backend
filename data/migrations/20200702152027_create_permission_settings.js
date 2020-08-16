exports.up = function(knex, Promise) {
    return knex.schema
      .createTable('permission_settings', tbl => {
        tbl.increments('permission_setting_id');
        tbl.text('nickname')
        tbl.text('all')
        tbl.text('display')
        tbl.text('form')
        tbl.text('index')
        tbl.text('view')
        tbl.text('edit')
        tbl.text('new')
        tbl.text('delete')
      })
  
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
      .dropTableIfExists('permission_settings')
  };
