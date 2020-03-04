exports.seed = function (knex) {
  return knex('object_items').insert([
    {
      display_name: "Osmium Chunk",
      description: "",
      scientific_name: "",
      sprite: "rawgem",
      color: "grey",
      properties: [],
      volume: 50,
      mass: 100,
      ph: 7,
      temperature: 70,
      low_temp_point: 200,
      high_temp_point: 300
    },
    {
      display_name: "Iron",
      description: "",
      scientific_name: "",
      sprite: "rawrock",
      color: "grey",
      properties: [],
      volume: 50,
      mass: 100,
      ph: 7,
      temperature: 70,
      low_temp_point: 200,
      high_temp_point: 300
    },
    {
      display_name: "Gold Piece",
      description: "",
      scientific_name: "",
      sprite: "coin",
      color: "gold",
      properties: [],
      volume: 50,
      mass: 100,
      ph: 7,
      temperature: 70,
      low_temp_point: 200,
      high_temp_point: 300
    },
    {
      display_name: "Marble",
      description: "",
      scientific_name: "",
      sprite: "marble",
      color: "purple",
      properties: [],
      volume: 50,
      mass: 100,
      ph: 7,
      temperature: 70,
      low_temp_point: 200,
      high_temp_point: 300
    },
    {
      display_name: "Bolt",
      description: "",
      scientific_name: "",
      sprite: "bolt",
      color: "grey",
      properties: [],
      volume: 50,
      mass: 100,
      ph: 7,
      temperature: 70,
      low_temp_point: 200,
      high_temp_point: 300
    }
  ])
};

