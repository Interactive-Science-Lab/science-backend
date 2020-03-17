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
      properties: ["disolve", `{ "2": { "00": 110.0, "05": 110.0, "10": 110.0, "15": 109.9, "20": 109.8, "25": 109.6, "30": 109.4, "35": 109.2, "40": 109.0, "45": 108.7, "50": 108.5, "55": 108.3, "60": 108.1, "120": 106.4 },
        "12": { "00":  110.0, "05":  110.0, "10":  109.9, "15":  109.8, "20":  109.5, "25":  109.2, "30":  108.8, "35":  108.4, "40":  108.0, "45":  107.6, "50":  107.0, "55":  106.6, "60":  106.4, "120": 106.4 },
        "22": { "00": 110.0, "05": 109.9, "10": 109.8, "15": 109.6, "20": 109.0, "25": 108.4, "30": 107.6, "35": 106.8, "40": 106.4, "45": 106.4, "50": 106.4, "55": 106.4, "60": 106.4, "120": 106.4 },
        "32": { "00": 110.0,  "05": 109.8, "10": 109.6, "15": 109.2, "20": 108.4, "25": 106.8, "30": 106.4, "35": 106.4, "40": 106.4, "45": 106.4, "50": 106.4, "55": 106.4, "60": 106.4, "120": 106.4},
        "42": { "00": 110.0, "05": 109.6, "10": 109.2, "15": 108.4, "20": 106.8, "25": 106.4, "30": 106.4, "35": 106.4, "40": 106.4, "45": 106.4, "50": 106.4, "55": 106.4, "60": 106.4, "120": 106.4 }
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

