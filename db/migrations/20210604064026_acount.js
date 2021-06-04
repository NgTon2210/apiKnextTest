
exports.up = function(knex) {
    return knex.schema.createTable('acount', table =>{
        table.increments('id');
        table.string('email', 255).notNullable();
        table.string('password', 255).notNullable();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTablse('acount')
};
