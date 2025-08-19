exports.seed = function(knex) {
    return knex('experiments').insert([
      // Combo Science Experiments - 12 experiments from different subjects
      {
        "experiment_name": "Measurement in Science",
        "experiment_description": "Learn fundamental measurement techniques used across all scientific disciplines.",
        "experiment_class": "combo",
        "experiment_steps": `#Before beginning, turn on the lights and put on your lab coat and goggles. Be sure that your volume is turned up to hear sound affects. #CAUTION: moving the "explosive chemicals" to lab area 2 could cause an explosion in the lab. # ALL measurements / data should be recorded in your lab results / data section. EVERY measurement should have a unit (grams, milliliters, seconds, centimeters, etc.) associated with it. #1 From the "Basic Containers" drawer move the "Beaker" to the sink. #2 Dispense a volume of water of your choice by clicking the hot or cold water faucets. #3 Move the beaker to "Lab Area 2" to confirm that your volume is correct and then record that volume. #4 "Empty contents" then move the beaker back to the sink. #5 Repeat this a total of 10 times with different volumes of water. #6 From the "Measuring Equipment" drawer, move the "Balance" to "Lab Area 1". #7 From the "Basic Objects" drawer, move the "Osmium Chunk" to "Lab Area 7", then to the balance to determine and record mass. #8 Move the "Osmium Chunk" back to "Lab Area 7" and click "Put Away" to put it back in the drawer. #9 Repeat this process for the marble, scrap metal, bolt, and gold piece. #10 From the "Basic Containers" drawer move the "Beaker" to the sink. #11 Dispense a volume of water of your choice by clicking the hot and cold water faucets (some of each). #12 From the "Measuring Equipment" drawer move the "Thermometer" to "Lab Area 1". #13 Move the beaker to "Lab Area 2" to measure and record volume. #14 Move the beaker to the thermometer to measure and record temperature. #15 Move the beaker back to lab area 2 and "empty contents" #16 Move the beaker back to the sink. #17 Repeat steps 11-16, nine times with different volumes / temperatures of water (use differing volumes of cold and hot water). #18 Turn off the lights and return your lab coat and goggles to the hooks on the wall. #19 Create a lab report for this experiment`,
        "experiment_start": [],
        "experiment_order": 1
      },
      {
        "experiment_name": "Diffusion and Osmosis",
        "experiment_description": "Explore how substances move across membranes and through solutions.",
        "experiment_class": "combo",
        "experiment_steps": `#1. Turn on the lights and put on your goggles and lab coat. #2. Move the "Diffusion Cells" from the "Basic Objects" drawer to lab area 2. #3. As discussed in class, for stage 1 of diffusion, determine what percentage of all solute particles are inside the cell. #4. Repeat this as you advance through all 5 stages of diffusion involving this cell. #5. Put away the "Diffusion Cells". #6. Move the "Osmosis Cells" from the "Basic Objects" drawer to lab area 2. #7. As discussed in class, for stage 1 of osmosis, determine what percentage of all water molecules are inside the cell. #8. Repeat this as you advance through all 5 stages of osmosis involving this cell. #9. Turn off the lights and return your lab coat and goggles to the hook on the wall. #10. Create a lab report for this experiment.`,
        "experiment_start": [],
        "experiment_order": 2
      },
      {
        "experiment_name": "Density Determination",
        "experiment_description": "Learn how displacement of a liquid can reveal the volume of an object.",
        "experiment_class": "combo",
        "experiment_steps": `#1 From the "Basic Containers" drawer move the "Graduated Cylinder"" to the sink. #2 Dispense 50 ml of water into the graduated cylinder by clicking the hot or cold water faucets (it adds 10 ml per click). #3 Move the graduated cylinder to "Lab Area 1 or 2" to confirm that your volume is correct. #4 Move osmium chunk from basic objects drawer to area 7 and then to the graduated cylinder. #5 Record the *increase* in volume - the *increase* in volume is the volume of the osmium chunk. #6 Repeat steps 1-5 for marble, scrap metal, bolt, iron, and gold piece. #7 "Put away" the graduated cylinder. #8 From the "Measuring Equipment" drawer, move the "Balance" to "Lab Area 1 or 2". #9 From the "Basic Objects" drawer, move the "Osmium Chunk" to "Lab Area 7", then to the balance to determine mass. #10 Move the "Osmium Chunk" back to "Lab Area 7" and click "Put Away" to put it back in the drawer. #11 Repeat this for the marble, scrap metal, bolt, iron, and gold piece. #12 Determine the density of each item by dividing mass by volume. #13 Create a lab report for this experiment.`,
        "experiment_start": [],
        "experiment_order": 3
      },
      {
        "experiment_name": "Average Velocity & Speed",
        "experiment_description": "Calculate and compare velocity and speed of moving objects.",
        "experiment_class": "combo",
        "experiment_steps": `# Turn on the lights and put on your lab coat and goggles. #1 Move car simulation from the physics drawer to lab area 2 and click open. #2 Choose the "slow" vehicle. #3 Click play and when the vehicle has traveled approximately 6 meters click pause. #4 Record distanced traveled and time #5 Click play to resume travel. #6 Repeat steps 3-5 for the slow vehicle, but pause and record at approximately these meter distances: 22, 43, 68, 85, 95. #7 Repeat steps 2-6, but use the fast vehicle and approximately these pause distances in meters: 14, 38, 86, 140, 223, 295. #8 Repeat steps 2-6, but use the very fast vehicle and approximately these pause distances in meters: 26, 94, 320, 572, 841, 927. #9 As discussed in class, calculate average speed in meters / second for each of the 18 pause points by dividing distance traveled by time. #10 Convert speed in meters per second to miles per hour by multiplying by the conversion factor 2.237 #11 Write a lab report for this experiment. # Turn off the lights and return the lab coat and goggles to the hooks (please don't take them home).`,
        "experiment_start": [],
        "experiment_order": 4
      },
      {
        "experiment_name": "Moles, Elements, & Molar Mass",
        "experiment_description": "Determine the identity of mystery elements based on their molar mass.",
        "experiment_class": "combo",
        "experiment_steps": `# Turn on the lights and put on your lab coat and goggles. #1 Move the balance from the measuring equipment drawer to lab area 1. #2 From the mystery elements drawer, move mystery element 1 to lab area 7. #3 Move mystery element 1 from lab area 7 to the balance and record mass. #4 Move mystery element 1 from the balance to lab area 7, then put away. #4 Repeat steps 2-4 for the remaining nine mystery elements. #5 Below are the number of moles that you're massing out (weighing) of each mystery element. Knowing this, the mass you recorded for each element, and the molar mass (mass of one mole of that element) from the periodic table, you should be able to determine the identity of each of the mystery elements. #6 The moles of each mystery element in the sample you massed out are: 1 - 2.3 moles 2 - 17.6 moles 3 - 0.4 moles 4 - 0.2 moles 5 - 1.2 moles 6 - 8.0 moles 7 - 3.9 moles 8 - 0.5 moles 9 - 1.1 moles 10 - 2.8 moles #7 Determine the identity of each mystery element. #8 Return your lab coat and goggles to the wall hook and turn off the lights. #9 Create a lab report for this experiment.`, 
        "experiment_start": [],
        "experiment_order": 5
      },
      {
        "experiment_name": "pH Determination",
        "experiment_description": "Measure and compare the acidity and basicity of various solutions.",
        "experiment_class": "combo",
        "experiment_steps": `# Turn on the lights and put on your lab coat and goggles. #1 Move the pH Meter from the measuring equipment drawer to lab area 2. #2 Open the liquid chemicals drawer and move the Human blood vial to lab area 3. #3 Move the human blood vial from area 3 to the pH meter in lab area 2. #4 Record the pH. #5 Return to human blood vial to lab area 3, then put it away. #6 Repeat steps 2 through 5 for: urine, orange juice, seawater, baking soda solution, soapy water, stomach acid, pure water, bleach, and lemon juice. #7 Put away the pH meter. #8 Calculate averages for the pH of these groups: acidic substances, alkaline substances, all substances. Determine the median pH of all substances. #9 Create a lab report for this experiment. # Return your lab coat and goggles to the hooks on the wall and turn off the lights.`,
        "experiment_start": [],
        "experiment_order": 6
      },
      {
        "experiment_name": "Blood Type",
        "experiment_description": "Determine blood types using antigen-antibody reactions.",
        "experiment_class": "combo",
        "experiment_steps": `#1 Turn on the lights and put on your lab coat and goggles. #2 Move the "Blood Antibody Card" from the "Specimen" drawer to "Lab Area 2". #3 Click "Run Test" to mix the antibody, blood, and water. #4 As discussed in class, for this experiment, use the results you now see (agglutination or no agglutination for each antigen) to record whether or not there was agglutination for each antigen and to determine and record this person's blood type. #5 Click "Put Away" to return this "Blood Antibody Card" to the drawer. #6 Repeat steps 2 through 5, 49 more times to determine and record the blood types of 50 people. #7 As discussed in class, determine what percentage of the 50 people you tested have each blood type. #8 When you leave the lab, return the goggles and lab coat to the hooks on the wall and turn off the lights. #9 Create a lab report`,
        "experiment_start": [],
        "experiment_order": 7
      },
      {
        "experiment_name": "Viscosity of Liquids",
        "experiment_description": "Compare the flow rates of different liquids to understand viscosity.",
        "experiment_class": "combo",
        "experiment_steps": `#1 Turn on the lights and put on your goggles and lab coat. #2 Move the liquid tray from the basic objects drawer to lab area 2. #3 Click "open". #4 Drop a sphere through water at each of three different temperatures, cool, room temperature, and warm. #5 For each temperature, record how far the sphere fell and how long it took. #6 Repeat steps 3, 4 and 5 for milk, motor oil, and honey. #7 Calculate a viscosity score for each liquid at each temperature by determining how far the sphere fell per second for each: distance fallen (cm) / time (s) = distance fallen (cm) per second. The lower this number, the more viscous the liquid. #8 Turn off the lights. #9 Create a lab report for this experiment.`,
        "experiment_start": [],
        "experiment_order": 8
      },
      {
        "experiment_name": "Muscle Work, Power, & Caloric Expenditure",
        "experiment_description": "Measure the relationship between physical work and energy expenditure.",
        "experiment_class": "combo",
        "experiment_steps": `#1 Turn on the lights and put on your lab coat and goggles. #2 Move whistle from miscellaneous drawer to lab area 2. #3 Click "open". #4 Record each student's weight (mass). #5 For each student, record their time for climbing the 3.9 meter stairs at "walk speed", "jog speed", and "run speed" and create a data table. #6 Calculate work, power, and caloric expenditure for each student at each climbing speed (as described in background video in Canvas / class) #7 Return the goggles and lab coat to the wall hook and turn off the lights. #8 Create a lab report.`,
        "experiment_start": [],
        "experiment_order": 9
      },
      {
        "experiment_name": "Archimedes Principle",
        "experiment_description": "Investigate buoyancy and the relationship between displaced fluid and floating objects.",
        "experiment_class": "combo",
        "experiment_steps": `#1 Move the ocean from the physics drawer to lab area 2. #2 Record the volume of water displaced by the boat. #3 Add one large Iron ball to the boat by clicking "increase" once. #4 Record the volume of displaced water. #5 Repeat steps 3 and 4 to add iron balls to the boat one at a time until their are six in the boat. #6 As discussed in class, we will present results - upward buoyant force on the boat - in the English system force unit, pound-force, and the metric system force unit, Newtons. #7 Use the weight (2.2 pounds) and mass (1 kg) of 1 liter of water to calculate the upward buoyant force on the boat at each water displacement stage (empty boat, boat with 1 iron ball, etc.). #8 Remember that 1 liter of water (which has a mass of 1 kg) = a force of 9.81 Newtons and 2.2 pounds = force of 2.2 pound-force. -----> 1 liter of displaced water = upward buoyant force of 9.81 Newtons (N) -----> 1 liter of displaced water = upward buoyant force of 2.2 pound-force (lbf) #9 As always remember to include ALL of your raw data in a data table and to also graph your results. #10 Write a lab report for this experiment.`,
        "experiment_start": [],
        "experiment_order": 10
      },
      {
        "experiment_name": "Cellular Respiration",
        "experiment_description": "Investigate how cells produce energy through respiration.",
        "experiment_class": "combo",
        "experiment_steps": `#1. Turn on the lights and put on your lab coat and goggles. #2. Move a "Mitochondrion" from the "Microscopic Specimens" drawer into the cell (Lab Area 2). #3. In the scenario below indicate how many ATP molecules are produced aerobically and also anaerobically in each of the 7 situations in this scenario. Then calculate average ATP yield per glucose molecule for this entire scenario (divide total number of ATP produced by total number of glucose molecules). #________________ # - Scenario: # - Walking using 25 glucose molecules aerobically and 3 anaerobically. # - slow jog using 45 glucose molecules aerobically and 20 anaerobically. # - running very fast using 5 glucose molecules aerobically and 75 anaerobically. # - splitting firewood using 15 glucose molecules aerobically and 50 anaerobically. # - preparing a salad for dinner using 50 glucose molecules aerobically and 5 anaerobically. # - Sitting in a chair to eat dinner using 35 glucose molecules aerobically and 2 anaerobically. # - In bed going to sleep using 15 glucose molecules aerobically and 0 anaerobically. #_____________________ #4. Turn off the lights and return your lab coat and goggles to the wall hooks. #5. Create a lab report.`,
        "experiment_start": [],
        "experiment_order": 11
      },
      {
        "experiment_name": "Momentum",
        "experiment_description": "Explore the conservation of momentum in collisions.",
        "experiment_class": "combo",
        "experiment_steps": `#Turn on the lights and put on your lab coat and goggles. #1 Move the momentum simulator from the physics drawer to lab area 2. #2 Click "open". #3 Choose the bike as your first object. #4 Click "play" and then "pause" after it has traveled approximately 12 meters (doesn't have to be exact). #5 Calculate average momentum and average speed of the bike over that distance. #6 Click "play" again and allow the bike to travel until it crashes. #7 Calculate average momentum and average speed of the bike over the full distance. #8 Repeat steps 3-7 for each of the other objects: truck, baseball, train, bowling ball, and compact car. #9 Turn off the lights and return your lab coat and goggles to the hooks on the wall. #10 Create your lab report.`,
        "experiment_start": [],
        "experiment_order": 12
      }
    ])
  }; 