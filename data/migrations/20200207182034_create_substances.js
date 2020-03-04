exports.up = function(knex, Promise) {
    // don't forget the return statement
    return knex.schema
      .createTable('substances', tbl => {
        tbl.increments('substance_id');
        tbl.text('display_name');
        tbl.text('scientific_name');
        tbl.text('description');

        tbl.text('color') //sky-blue, grey-blue
        tbl.text('texture') //liquid, powder, sm-granules, md-granules, lg-granule
        tbl.text('container') //jar, etc.
        tbl.specificType('properties', 'text ARRAY'); //hydrophillic, flammable

        tbl.float('density');
        tbl.float('ph');
        tbl.float('temperature');
        tbl.integer('low_temp_point');
        tbl.integer('high_temp_point');

      })
  
  };
  
  exports.down = function(knex, Promise) {
    // drops the entire table
    return knex.schema
      .dropTableIfExists('substances');
  };

