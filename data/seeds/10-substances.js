exports.seed = function(knex) {
    return knex('substances').insert([
      {
        substance_name: "Water",
        substance_scientific_name: "H20",
        substance_density: 1,
        substance_state_of_matter: 'liquid',
        substance_dispense_volume: 10
      }
    ])
  };
  