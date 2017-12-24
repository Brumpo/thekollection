
exports.up = function(knex, Promise) {
  return knex.schema.createTable('authors', table => {
    table.increments('id')
    table.string('firstName').notNullable()
    table.string('lastName').notNullable()
    table.string('email').notNullable().unique()
    table.specificType('password','char(60)').notNullable().unique()
    table.boolean('admin').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('authors')
};
