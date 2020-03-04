
exports.seed = function(knex) {
  return knex('site_blogs').insert([

    {
      author_id: 1,
      blog_title: "Gamma Version Release",
      blog_description: "A live version of just the log in & log out.",
      blog_text: "Right now, you can see the view of the core.",
      blog_tags: ['development', 'release'],
      blog_category: "News",
      blog_status: "public"
    },


  ]);
};
