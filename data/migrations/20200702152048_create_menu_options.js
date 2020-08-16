exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('menu_options', tbl => {
            tbl.increments('menu_option_id');

            tbl.integer('parent_resource_id')
                .unsigned()
                .references('resource_id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');


            tbl.integer('parent_menu_id')
                .unsigned()
                .references('menu_option_id')
                .inTable('menu_options')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.integer('permission_id')

            tbl.text('displayText')
            tbl.text('link')

            tbl.text('action')
        })

};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('menu_options')
};
