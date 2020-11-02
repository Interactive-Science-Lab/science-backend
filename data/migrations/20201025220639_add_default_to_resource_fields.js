
exports.up = function(knex, Promise) {
    return knex.schema.table('resource_fields', function(t) {
        t.json('defaultValue')
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('resource_fields', function(t) {
        t.dropColumn('defaultValue');
    });
};