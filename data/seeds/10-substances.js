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
      display_name: "Hydrophillic Beads (sm)",
      scientific_name: "",
      description: "Just add some water",

      color: "grey",
      texture: "granule",
      container: "bowl",
      properties: ['hydrophillic-01'],

      density: 1,
      ph: 7,
      temperature: 70,
      low_temp_point: 200,
      high_temp_point: 300
    },
    {
      display_name: "Hydrophillic Beads (lg)",
      scientific_name: "",
      description: "Just add some water",

      color: "grey",
      texture: "ball",
      container: "none",
      properties: ['hydrophillic', 'hydrophillic-10'],

      density: 1,
      ph: 7,
      temperature: 70,
      low_temp_point: 200,
      high_temp_point: 300
    },
    {
      display_name: "Salt",
      scientific_name: "Sodium Chloride",
      description: "Your average table salt",

      color: "white",
      texture: "granule",
      container: "bowl",
      properties: ['coolant', `{
        "0": {
          "0": 1.0'C
          "1": 6.0
          "2": 2.0
          "3": 0.5
          "4": 0.5
          "5": 0.0
        },
        "11.5":{ 
          "0":  21'C
          "1": 4.0
          "2": -1.5
          "3": -3.0
          "4":  -5.5
          "5": -5.5
        },
        "23": {
          0": 21'C
          1": 3.0
          2": -5.0
          3": -7.5
          4": -11.5
          5": -11.5
        },
        "34.5": {
          "0": 21,
          "1":  1.5,
          "2": -7.0,
          "3": -12.5,
          "4": -17.5,
          "5": -17.5,
        },
        "46.0": {
          "0": 21
          "1": 1.0
          "2": -8.0
          "3": -13.5
          "4": -18.0
          "5": -18.0
        },
      }`],
      density: 1,
      ph: 7,
      temperature: 70,
      low_temp_point: -100,
      high_temp_point: 300
    }
  ])
};

