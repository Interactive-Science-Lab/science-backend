exports.seed = function (knex) {
  return knex('permission_settings').insert([
    {
      nickname: "Public",
      all: "all",
      display: "",
      form: "",
      index: "",
      view: "",
      edit: "",
      new: "",
      delete: ""
    },
    
    {
      nickname: "Webmaster",
      all: "admin",
      display: "",
      form: "",
      index: "",
      view: "",
      edit: "",
      new: "",
      delete: ""
    },
  ])
};
