exports.seed = function(knex) {
    return knex('experiments').insert([
      // Demo Lab Experiment
      {
        "experiment_name": "Density Determination",
        "experiment_description": "Learn how displacement of a liquid can reveal the volume of an object.",
        "experiment_class": "demo",
        "experiment_steps": `#1 From the "Basic Containers" drawer move the "Graduated Cylinder"" to the sink. #2 Dispense 50 ml of water into the graduated cylinder by clicking the hot or cold water faucets (it adds 10 ml per click). #3 Move the graduated cylinder to "Lab Area 1 or 2" to confirm that your volume is correct. #4 Move osmium chunk from basic objects drawer to area 7 and then to the graduated cylinder. #5 Record the *increase* in volume - the *increase* in volume is the volume of the osmium chunk. #6 Repeat steps 1-5 for marble, scrap metal, bolt, iron, and gold piece. #7 "Put away" the graduated cylinder. #8 From the "Measuring Equipment" drawer, move the "Balance" to "Lab Area 1 or 2". #9 From the "Basic Objects" drawer, move the "Osmium Chunk" to "Lab Area 7", then to the balance to determine mass. #10 Move the "Osmium Chunk" back to "Lab Area 7" and click "Put Away" to put it back in the drawer. #11 Repeat this for the marble, scrap metal, bolt, iron, and gold piece. #12 Determine the density of each item by dividing mass by volume. #13 Create a lab report for this experiment.`,
        "experiment_start": [],
        "experiment_order": 2
      }
    ])
  }; 