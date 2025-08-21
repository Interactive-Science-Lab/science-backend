const bcrypt = require('bcryptjs') 
const password = bcrypt.hashSync("1234!Asdf", 10)

exports.seed = function (knex) {
    return knex('users').insert([
        {
            password: password,
            username: "combo2020",
            user_email: "combo2020@gmail.com",
            user_role: 4,
            user_kind: "end_user",
            user_verified: true
        }
    ]);
}; 