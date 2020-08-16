exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('resource_features', tbl => {
            tbl.increments('resource_feature_id');
            tbl.integer('parent_id')
                .unsigned()
                .references('resource_id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.integer('permission_id')

            tbl.integer('connected_resource')
                .unsigned()
                .references('resource_id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');

            tbl.boolean('one_to_many')
            tbl.json('text')
            tbl.json('options')

        })

};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('resource_features')
};
