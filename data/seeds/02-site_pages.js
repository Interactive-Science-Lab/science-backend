
exports.seed = function(knex) {
  return knex('site_pages').insert([
    {
      page_title: "Overview",
      page_body_text: "",
      page_category: "Features",
      page_order: 1
    },
    {
      page_title: "Multi-User Blogging",
      page_body_text: "",
      page_category: "Features",
      page_order: 2
    },
    {
      page_title: "In-Browser Page Design",
      page_body_text: "",
      page_category: "Features",
      page_order: 3
    },
    {
      page_title: "Contact & Support Features",
      page_body_text: "",
      page_category: "Features",
      page_order: 4
    },
    {
      page_title: "More Products",
      page_body_text: "",
      page_category: "Features",
      page_order: 5
    },

    
    {
      page_title: "The Developer",
      page_body_text: "",
      page_category: "About",
      page_order: 5
    },
    {
      page_title: "The Project",
      page_body_text: "",
      page_category: "About",
      page_order: 5
    },
    {
      page_title: "Mission Statement",
      page_body_text: "",
      page_category: "About",
      page_order: 5
    },



  ]);
};
