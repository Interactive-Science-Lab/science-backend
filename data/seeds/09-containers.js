exports.seed = function(knex) {
    return knex('containers').insert([
      {
          container_name: "Graduated Cylinder",
          container_volume: 200,
          container_mass: 50,
          container_properties: ['display_volume'],
          container_image: 'ScienceTool_256_008.png'
      
      }
    ])
  };
  