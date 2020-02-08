exports.seed = function (knex) {
  return knex('object_items').insert([
    {
      object_name: "Small Rock",
      object_description: "A small piece of gravel you could find on the ground.",
      object_weight: 15,
      object_volume: 5,
      object_image: 'Survival_256_090.png'
    },
    {
      object_name: "Bolt",
      object_description: "Like a screw, but without a pointy tip.",
      object_weight: 5,
      object_volume: 2,
      object_image: 'Survival_256_095.png'
    },
    {
      object_name: "Rubberball",
      object_description: "A small bouncy ball.",
      object_weight: 1,
      object_volume: 2,
      object_image: 'Material2_256_138.png'
    }
  ])
};
