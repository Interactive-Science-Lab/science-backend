
const bcrypt = require('bcryptjs') 
const password = bcrypt.hashSync("1234!Asdf", 10)

exports.seed = function (knex) {
    return knex('users').insert([
        //The lead/developer who can see EVERYTHING for debugging purposes
        {
            password: password,
            username: "webmaster",
            user_email: "Thejhubbs@gmail.com",
            user_role: 3,
            user_kind: "admin_user",
            user_verified: true
        },
        //The owner of the website
        {
            password: password,
            username: "?N?",
            user_email: "oohumanshadow@gmail.com",
            user_role: 2,
            user_kind: "admin_user",
            user_verified: true
        },
        //If you would hire someone to edit the pages/blogs
        {
            password: password,
            username: "Jay",
            user_email: "sub1127@gmail.com",
            user_role: 1,
            user_kind: "admin_user",
            user_verified: true
        }
    ]);
};
