exports.seed = function(knex) {
    return knex('end_users').insert([
      {
        foreign_user_id: 6, // This assumes the combo user will be the 6th user in the users table
      }
    ])
  }; 