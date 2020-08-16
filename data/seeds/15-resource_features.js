exports.seed = function (knex) {
  return knex('resource_features').insert([
    {
      "parent_id": 1,
      "permission_id": null,
      "connected_resource": 2,
      "one_to_many": true,
      "text": {},
      "options": {}
    },
    {
      "parent_id": 1,
      "permission_id": null,
      "connected_resource": 3,
      "one_to_many": true,
      "text": {},
      "options": {}
    },
  ])
};
