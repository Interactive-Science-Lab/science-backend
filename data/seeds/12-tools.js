exports.seed = function (knex) {
  return knex('tools').insert([
    {
      display_name: "Balance",
      properties: ['display_mass'],
      sprite: 'scale',
      description: "Displays an object's mass.",
      instructions: "Drag an item onto the scale, and move the scale onto the bottom left panel, to see the object's mass."
    },
    {
      display_name: "Thermometer",
      properties: ['display_temperature'],
      sprite: 'thermometer',
      description: "Displays an container's temperature.",
      instructions: "Drag the thermometer into a container, and move them both onto the bottom left panel, to see the object's temperature."
    },
    {
      display_name: "pH Meter",
      properties: ['display_ph'],
      sprite: 'phmeter',
      description: "Displays an container's pH.", 
      instructions: "Drag the pH Meter into a container, and move them both onto the bottom left panel, to see the object's pH reading."
    },
    {
      display_name: "Strainer",
      properties: ['strain', 'strain-solids'],
      sprite: 'strainer',
      description: "Separates solids from liquids in a container.",
      instructions: "Drag the strainer to the bottom left panel. Drag a container onto the strainer, and you have two options. First, you can strain the container, which takes all solids from the container and adds them to strainer. Then, using either that container or any other, you can also add items from the strainer back in, with the 'Combine' button."
    },
    {
      display_name: "Micro Pipette",
      properties: ['scoop', 'scoop-liquid-1'],
      sprite: 'microdropper',
      description: "Allows you grab very small amounts of liquid substances such as acids, bases, or solutions.",
      instructions: "Drag the Micro Pippette to a substance to grab 1mL of the substance. Then, drag to a container to add the substance in.",
    },
    {
      display_name: "Eyedropper",
      properties: ['scoop', 'scoop-liquid-10'],
      sprite: 'dropper',
      description: "Allows you grab liquid substances such as acids, bases, or solutions.",
      instructions: "Drag the Eyedropper to a substance to grab 10mL of the substance. Then, drag to a container to add the substance in.",
    },
    {
      display_name: "Measuring Spoon",
      properties: ['scoop', 'scoop-solid-10'],
      sprite: 'measuringspoon',
      description: "Allows you to grab small quantities of solid substances.",
      instructions: "Drag the Measuring Spoon to a substance to grab 10mL of the substance. Then, drag to a container to add the substance in.",
    },
    {
      display_name: "Measuring Cup",
      properties: ['scoop', 'scoop-solid-50'],
      sprite: 'measuring',
      description: "Allows you to grab solid substances.",
      instructions: "Drag the Measuring Cup to a substance to grab 10mL of the substance. Then, drag to a container to add the substance in.",
    },
    {
      display_name: "Timer",
      properties: ['timer'],
      sprite: 'timer',
      description: "Allows you to measure time & simulate it passing.",
      instructions: "Drag an item to the timer (or vice-versa) and click the 'clock' button to go forward 5 minutes.",
    },
    {
      display_name: "Bunsen Burner",
      properties: ['heatsource-flame'],
      sprite: 'burner',
      description: "Allows you to heat things up.",
      instructions: "Drag an item to the timer (or vice-versa) and click the 'clock' button to go forward 5 minutes.",
    }
  ])
};
