exports.seed = function (knex) {
  return knex('substances').insert([
    {
      display_name: "Water",
      scientific_name: "H20",
      description: "Just some water",

      color: "lightblue",
      texture: "liquid",
      container: "bowl",
      properties: [],

      density: 1,
      ph: 7,
      temperature: 20,
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
      temperature: 20,
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
      temperature: 20,
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
      temperature: 20,
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
      temperature: 20,
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
          "0": 0,
          "60": 6.0,
          "120": 2.0,
          "180": 0.5,
          "240": 0.5,
          "300": 0.0
        },
        "11":{ 
          "0":  0,
          "60": -2.0,
          "120": -0.5,
          "180": -1.5,
          "240": -4, 
          "300": 0
        },
        "23": {
          "0": 0,
          "60": -3.0,
          "120": -8.0,
          "180": -2.5,
          "240": -4.5,
          "300": 0
        },
        "34": {
          "0": 0,
          "60":  -4.5,
          "120": -11.5,
          "180": -5,
          "240": -5,
          "300": 0
        },
        "46": {
          "0": 0,
          "60": -5,
          "120": -9.0,
          "180": -5.5,
          "240": -4.5,
          "300": 0
        }
      }`],
      density: 2.16,
      ph: 7,      
      temperature: 20,
      low_temp_point: 800,
      high_temp_point: 1400
    },



    {
      display_name: "Potassium Chlorate",
      scientific_name: "NaOH",
      description: "Some sodium hydroxide",

      color: "white",
      texture: "granule",
      container: "bowl",
      properties: ['burnaway', 'burnaway-62-300'],

      density: 1,
      ph: 7,
      temperature: 20,
      low_temp_point: 400,
      high_temp_point: 800
    },
    {
      display_name: "Magnesium Sulfate",
      scientific_name: "MgS04",
      description: "Some sodium hydroxide",

      color: "white",
      texture: "granule",
      container: "bowl",
      properties: ['precipitate-ingredient', 'Sodium Carbonate', 'Precipitate NaMg'],

      density: 1,
      ph: 7,
      temperature: 20,
      low_temp_point: 400,
      high_temp_point: 800
    },
    {
      display_name: "Sodium Carbonate",
      scientific_name: "NaC03",
      description: "Some sodium hydroxide",

      color: "white",
      texture: "granule",
      container: "bowl",
      properties: ['precipitate-ingredient', 'Magnesium Sulfate', 'Precipitate NaMg'],

      density: 1,
      ph: 7,
      temperature: 20,
      low_temp_point: 400,
      high_temp_point: 800
    },
    {
      display_name: "Precipitate NaMg",
      scientific_name: "NaOH",
      description: "Some sodium hydroxide",

      color: "white",
      texture: "granule",
      container: "bowl",
      properties: ['precipitate'],

      density: 1,
      ph: 7,
      temperature: 20,
      low_temp_point: 400,
      high_temp_point: 800
    },


  ])



  
};

