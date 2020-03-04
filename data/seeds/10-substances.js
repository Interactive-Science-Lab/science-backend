exports.seed = function (knex) {
  return knex('substances').insert([
    {
      display_name: "Water",
      scientific_name: "H20",
      description: "Just some water",

      color: "blue-grey",
      texture: "liquid",
      container: "na",
      properties: [],

      density: 1,
      ph: 7,
      temperature: 70,
      low_temp_point: 0,
      high_temp_point: 212
    },
    {
      display_name: "Weak Acid",
      scientific_name: "HCl",
      description: "Some hydrochloric acid",

      color: "red",
      texture: "liquid",
      container: "bottle",
      properties: [],

      density: 1,
      ph: 5,
      temperature: 70,
      low_temp_point: 0,
      high_temp_point: 212
    },
    {
      display_name: "Weak Base",
      scientific_name: "NaOH",
      description: "Some sodium hydroxide",

      color: "blue",
      texture: "liquid",
      container: "bottle",
      properties: [],

      density: 1,
      ph: 9,
      temperature: 70,
      low_temp_point: 0,
      high_temp_point: 212
    },
    {
      display_name: "Hydrophillic Beads",
      scientific_name: "",
      description: "Just add some water",

      color: "grey",
      texture: "granules",
      container: "bowl",
      properties: ['hydrophillic'],

      density: 1,
      ph: 7,
      temperature: 70,
      low_temp_point: 200,
      high_temp_point: 300
    }
  ])
};

