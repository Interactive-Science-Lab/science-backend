exports.seed = function(knex) {
    return knex('end_users').insert([
      {
        foreign_user_id: 4,
      },
      {
        foreign_user_id: 5,
      },
      {
        foreign_user_id: 6,
      }
    ])
  };
  