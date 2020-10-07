exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('resource_fields', tbl => {
            tbl.increments('resource_field_id');
            tbl.integer('parent_id')
                .unsigned()
                .references('resource_id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.integer('permission_id')

            tbl.text('name')
            tbl.text('label')
            tbl.text('category')
            tbl.integer('order')

            tbl.text('displayType')
            tbl.text('displayName')
            
            tbl.json('text')

            tbl.specificType('validations', 'text ARRAY');
            
            tbl.json('info')

        })

};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('resource_fields')
};
