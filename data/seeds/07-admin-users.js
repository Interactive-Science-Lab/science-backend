exports.seed = function(knex) {
    return knex('end_users').insert([
      {
        foreign_user_id: 1,
      },
      {
        foreign_user_id: 2,
      },
      {
        foreign_user_id: 3,
      }
    ])
  };
  