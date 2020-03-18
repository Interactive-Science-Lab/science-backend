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
    },
    {
      display_name: "Seltzer Tablet",
      description: "",
      scientific_name: "Sodium Bicarbonate",
      sprite: "tablet",
      color: "white",
      properties: ["disolve", `{ "Water", 
        "2": { "0": 12.0, "05": 12.0, "10": 12.0, "15": 11.9, "20": 11.8, "25": 11.6, "30": 11.4, "35": 11.2, "40": 11.0, "45": 10.7, "50": 10.5, "55": 10.3, "60": 10.1, "120": 8.4 },
        "12": { "0":  12.0, "05":  12.0, "10":  11.9, "15":  11.8, "20":  11.5, "25":  11.2, "30":  10.8, "35":  10.4, "40":  10.0, "45":  9.6, "50":  9.0, "55":  8.6, "60":  8.4, "120": 8.4 },
        "22": { "0": 12.0, "05": 11.9, "10": 11.8, "15": 11.6, "20": 11.0, "25": 10.4, "30": 9.6, "35": 8.8, "40": 8.4, "45": 8.4, "50": 8.4, "55": 8.4, "60": 8.4, "120": 8.4 },
        "32": { "0": 12.0,  "05": 11.8, "10": 11.6, "15": 11.2, "20": 10.4, "25": 8.8, "30": 8.4, "35": 8.4, "40": 8.4, "45": 8.4, "50": 8.4, "55": 8.4, "60": 8.4, "120": 8.4},
        "42": { "0": 12.0, "05": 11.6, "10": 11.2, "15": 10.4, "20": 8.8, "25": 8.4, "30": 8.4, "35": 8.4, "40": 8.4, "45": 8.4, "50": 8.4, "55": 8.4, "60": 8.4, "120": 8.4 }
      } `],
      volume: 50,
      mass: 12,
      ph: 9,
      temperature: 70,
      low_temp_point: 0,
      high_temp_point: 300
    }
  ])
};

