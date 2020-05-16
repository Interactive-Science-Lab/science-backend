exports.seed = function(knex) {
    return knex('experiments').insert([
      {
        "experiment_name": "Density Determination",
        "experiment_description": "Learn how displacement of a liquid can reveal the volume of an object.",
        "experiment_class": "chemistry",
        "experiment_steps": "#1. Fill the cylinder on the table with 50mL of water. #2. Drop 1 bolt in and record the volume reading by dragging the cylinder to the bottom left panel. #3. Drop 1 rubberball in and record the volume reading.",
        "experiment_start": [],
        "experiment_order": 1
      },
      {
        "experiment_name":  "PH Determination",
        "experiment_description": "Find the average weight of a bolt by averaging 3 readings.",
        "experiment_class": "chemistry",
        "experiment_steps": "#1. Take out a cylinder, and fill with 30mL of water. #2. Drop 1 bolt in and record the volume reading by dragging the cylinder to the bottom left panel. #3. Get out a second cylinder, and repeat the first two steps. #4. Do it a third time. #5. Add & divide the measurements by 3 to find the average volume of a bolt.",
        "experiment_start": [],
        "experiment_order": 2
      },
      {
        "experiment_name": "Quantifying Surface Area",
        "experiment_description": "Find the average weight of a bolt by averaging one reading.",
        "experiment_class": "chemistry",
        "experiment_steps": "#1. Fill the cylinder on the table with 100mL of water. #2. Drop in 5 bolts and record the volume reading by dragging the cylinder to the bottom left panel. #3. Divide by 5 to find the average volume.",
        "experiment_start": [],
        "experiment_order": 3
      },
      {
        "experiment_name": "Chemical Kinetics",
        "experiment_description": "Determine how temperature affects the rate of reaction.",
        "experiment_class": "chemistry",
        "experiment_steps": "#1. Add 70 ml of 2.0 degrees C water to a beaker. #2. Place the beaker on a balance and record mass. #3. With the beaker still on the balance, add a 12 grams of sodium bicarbonate tablet to the water. #4. immediately record mass (at 0 seoncds elapsed time), start timer, and record mass every five seconds for 1 minute and then again at the end of 2 minutes. #5. Repeat steps 1 through 5 with the following water temperatures: 12'C, 22'C, 32'C and 42'C. #6. Once you've completed all five trials, construct a line graph of time vs mass to visualize rate of reactions.",
        "experiment_start": [],
        "experiment_order": 4
      },
      {
        "experiment_name":  "Colligative Properties & Freezing Point Depression",
        "experiment_description": "Determining freezing point based upon solute concentration.",
        "experiment_class": "chemistry",
        "experiment_steps": "#1. To a beaker, add 100 ml of 21'C water. #2. Add 0 grams NaCl (sodium chloride) to create a sodium chloride solution (if adding NaCl). #3. place a thermometer in the NaCl solution (or in the water if not adding NaCl). #4. Place ice in the sodium chloride solution (or in the water if not adding NaCl) and immediately start a timer. #5. Record initial temperature (at 0 minutes elapsed time) and every minute for 5 minutes. #6. Repeat steps 1 through 5, each time using the following mass of NaCl (sodium chloride) in step #2 for each trial: trial #2 = 11.5 g, trial #3 = 23.0 g, trial #4 = 34.5 g, trial #5 = 46.0 g.",
        "experiment_start": [],
        "experiment_order": 5
      },
      {
        "experiment_name": "Moles, Elements, & Molar Mass",
        "experiment_description": "Determine the identity of mystery elements based on their molar mass.",
        "experiment_class": "chemistry",
        "experiment_steps": "#1. In each of the 10 containers is X moles of a particular mystery element. Mass out each element. Using that mass and the given number of moles of that element, determine the identity of each element. #2. For each of the 10 elements record: element name and symbol, number of protons in an atom of that element, number of neutrons in an atom of that element, molar mass (g/mole), and atomic mass (AMU’s), and whether it would be considered a metal, nonmetal, or metalloid.",
        "experiment_start": [],
        "experiment_order": 6
      },
      {
        "experiment_name": "Heat of Combustion",
        "experiment_description": "Study how a candle transfers mass into heat energy",
        "experiment_class": "chemistry",
        "experiment_steps": "#1. Add 80 ml of cold water to a beaker - then add a few pieces of ice and stir for 1 minute. #2. Remove the ice and then record water volume ( water volume should be 82 ml). #3. Place the beaker at an elevated level using the ring stand. #4. Place the thermometer in the water and record the temperature (should be 3’ C). #5. Mass out a candle and record mass. (should be 46 grams). #6. Place candle under the beaker and light it (flame should touch bottom of beaker). #7. When the water temperature reaches 40’C, extinguish the candle and record temperature. #8. Mass out candle and record mass.(should be 42 g)",
        "experiment_start": [],
        "experiment_order": 7
      },
      {
        "experiment_name":  "Percent of Oxygen in a Compound",
        "experiment_description": "Determine how much of a substance is oxygen based upon combustion.",
        "experiment_class": "chemistry",
        "experiment_steps": "#1. Massout a crucible and lid and record mass. #2. Add 15 grams of potassium chlorate to the crucible. #3. Mass out and record mass of crucible, lid and potassium chlorate (should be 25 g). #4. Use a ringstand to elevate crucible above a bunsen burner. #5. Light the bunsen burner and heat for 8 minutes. #6. Turn off the bunsen burner and allow crucible to cool. #7. Mass out and record mass of crucible, lid and remaining contents. (should be 19.3 g).",
        "experiment_start": [],
        "experiment_order": 8
      },
      {
        "experiment_name": "Determination of Specific Heat of a Metal",
        "experiment_description": "Figure out specific heat of a metal.",
        "experiment_class": "chemistry",
        "experiment_steps": "#1. Record room temperature in the lab (should be 21’C). #2. Add 110 ml of cold tap water to a styrofoam cup. #3. Measure and record water temperature after it’s been in the cup for 30 minutes (should be 21’C). #4. Mass out and record mass of water (remember to tare scale) (mass should be 110g). #5. Mass out and record mass of metal.(should be 18 g). #6. Place the metal in a beaker and add enough water from the hot tap to completely cover the metal. #7. Using the bunsen burn, begin heating the water until temperature reaches 60’C. #8. Turn off bunsen burner and places beaker on the lab table for 3 minutes and record water temperature - which is also temperature of the metal. (should be 58’C). #9. Add the metal to the water in the styrofoam cup and observe as temperature rises. #10. After 10 minutes record final water temperature (should be 27’C)",
        "experiment_start": [],
        "experiment_order": 9
      },
      {
        "experiment_name": "Measurement",
        "experiment_description": "",
        "experiment_class": "biology",
        "experiment_steps": "",
        "experiment_start": [],
        "experiment_order": 10
      },
      {
        "experiment_name": "Diffusion & Osmosis",
        "experiment_description": "",
        "experiment_class": "biology",
        "experiment_steps": "",
        "experiment_start": [],
        "experiment_order": 10
      },
      {
        "experiment_name": "Bacterial Inhibition",
        "experiment_description": "",
        "experiment_class": "biology",
        "experiment_steps": "",
        "experiment_start": [],
        "experiment_order": 10
      },
      {
        "experiment_name": "Blood Type",
        "experiment_description": "",
        "experiment_class": "biology",
        "experiment_steps": "",
        "experiment_start": [],
        "experiment_order": 10
      },
      {
        "experiment_name": "Protein Synthesis",
        "experiment_description": "",
        "experiment_class": "biology",
        "experiment_steps": "",
        "experiment_start": [],
        "experiment_order": 10
      },
      {
        "experiment_name": "Mitosis",
        "experiment_description": "",
        "experiment_class": "biology",
        "experiment_steps": "",
        "experiment_start": [],
        "experiment_order": 10
      },
      {
        "experiment_name": "Urinalysis",
        "experiment_description": "",
        "experiment_class": "biology",
        "experiment_steps": "",
        "experiment_start": [],
        "experiment_order": 10
      },
      {
        "experiment_name": "Cellular Respiration",
        "experiment_description": "",
        "experiment_class": "biology",
        "experiment_steps": "",
        "experiment_start": [],
        "experiment_order": 10
      },
      {
        "experiment_name": "Worm Dissection",
        "experiment_description": "",
        "experiment_class": "biology",
        "experiment_steps": "",
        "experiment_start": [],
        "experiment_order": 10
      },
      {
        "experiment_name": "Frog Dissection",
        "experiment_description": "",
        "experiment_class": "biology",
        "experiment_steps": "",
        "experiment_start": [],
        "experiment_order": 10
      }
      
    ])
  };
  