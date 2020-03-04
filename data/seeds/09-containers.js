exports.seed = function (knex) {
  return knex('containers').insert([
    {
      display_name: "Graduated Cylinder",
      description: "A glass container to see volume.",

      sprite: "gradcyl",
      properties: ['display_volume'],

      mass: 50,
      hold_volume: 500,
    },
    {
      display_name: "Small Dish",
      description: "A dish to hold small quantities.",

      sprite: "dish",
      properties: [''],

      mass: 50,
      hold_volume: 100,
    },
    {
      display_name: "Ceramic Bowl",
      description: "A ceramic bowl",

      sprite: "bowl",
      properties: [''],

      mass: 50,
      hold_volume: 500,
    }
  ])
};
