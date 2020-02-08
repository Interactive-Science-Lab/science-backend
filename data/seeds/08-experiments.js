exports.seed = function(knex) {
    return knex('experiments').insert([
      {
        "experiment_name": "Learn Volume",
        "experiment_description": "Learn how displacement of a liquid can reveal the volume of an object.",
        "experiment_steps": "#1. Fill the cylinder on the table with 50mL of water. #2. Drop 1 bolt in and record the volume reading by dragging the cylinder to the bottom left panel. #3. Drop 1 rubberball in and record the volume reading.",
        "experiment_start": { instance: 1, id: 1, itemType: 'containers', name: "Cylinder", area: 1, pos: 0, contents: [] }
      },
      {
        "experiment_name":  "Volume 2",
        "experiment_description": "Find the average weight of a bolt by averaging 3 readings.",
        "experiment_steps": "#1. Take out a cylinder, and fill with 30mL of water. #2. Drop 1 bolt in and record the volume reading by dragging the cylinder to the bottom left panel. #3. Get out a second cylinder, and repeat the first two steps. #4. Do it a third time. #5. Add & divide the measurements by 3 to find the average volume of a bolt.",
        "experiment_start": {}
      },
      {
        "experiment_name": "Volume 3",
        "experiment_description": "Find the average weight of a bolt by averaging one reading.",
        "experiment_steps": "#1. Fill the cylinder on the table with 100mL of water. #2. Drop in 5 bolts and record the volume reading by dragging the cylinder to the bottom left panel. #3. Divide by 5 to find the average volume.",
        "experiment_start": {}
      }
    ])
  };
  