
exports.up = function(knex, Promise) {
  return knex.schema.createTable('articles', table => {
    table.increments('id')
    table.text('content').notNullable()
    table.string('title').notNullable()
    table.text('description').notNullable()
    table.string('category').notNullable().defaultsTo('article')
    table.string('media')
    table.integer('author_id').notNullable()
    table.foreign('author_id').references('id').inTable('authors')
    table.timestamps(true,true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('articles')
};
