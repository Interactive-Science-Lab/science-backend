
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
            username: "greg_landry",
            user_email: "owner@gmail.com",
            user_role: 3,
            user_kind: "admin_user",
            user_verified: true
        },
        {
            password: password,
            username: "chemistry2020",
            user_email: "chemistry2020@gmail.com",
            user_role: 1,
            user_kind: "end_user",
            user_verified: true
        },
        {
            password: password,
            username: "physics2020",
            user_email: "physics2020@gmail.com",
            user_role: 2,
            user_kind: "end_user",
            user_verified: true
        },
        {
            password: password,
            username: "anatomy2020",
            user_email: "anatomy@gmail.com",
            user_role: 3,
            user_kind: "end_user",
            user_verified: true
        },
        {
            password: password,
            username: "student_002",
            user_email: "enduser2@gmail.com",
            user_role: 4,
            user_kind: "end_user",
            user_verified: true
        },
        {
            password: password,
            username: "student_003",
            user_email: "enduser3@gmail.com",
            user_role: 5,
            user_kind: "end_user",
            user_verified: true
        }
    ]);
};
