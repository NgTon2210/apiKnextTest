
exports.up = function(knex) {
  return knex.schema.createTable('person', table =>{
    table.increments('id');
    table.string('first_name', 255).notNullable();
    table.string('last_name', 255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('person')
};
