
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
            username: "AdminJH",
            user_email: "asdf@gmail.com",
            user_role: 2,
            user_kind: "admin_user",
            user_verified: true
        },
        //If you would hire someone to edit the pages/blogs
        {
            password: password,
            username: "exampleWorker",
            user_email: "aasdf@gmail.com",
            user_role: 1,
            user_kind: "admin_user",
            user_verified: true
        },
        //A trusted long term user that controls moderators, or the owners' user account
        {
            password: password,
            username: "useradmin",
            user_email: "assdf@gmail.com",
            user_role: 3,
            user_kind: "end_user",
            user_verified: true
        },
        {
            password: password,
            username: "usermod",
            user_email: "asddf@gmail.com",
            user_role: 2,
            user_kind: "end_user",
            user_verified: true
        },
        {
            password: password,
            username: "enduser",
            user_email: "asdff@gmail.com",
            user_role: 1,
            user_kind: "end_user",
            user_verified: true
        }
    ]);
};
