exports.seed = function(knex) {
    return knex('admin_users').insert([
      {
        foreign_user_id: 1,
      },
      {
        foreign_user_id: 2,
      }
    ])
  };
  