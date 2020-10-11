
exports.up = function(knex) {
    return knex.schema
    .createTable('drawers', tbl => {
        tbl.increments('drawer_id');

        tbl.integer('order')

        tbl.text('name')
        tbl.text('class')
        tbl.text('object_type')

        tbl.specificType('objects', 'text ARRAY');
        
    })
};
//
exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('drawers')
  
};
//