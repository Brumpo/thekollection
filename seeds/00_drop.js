exports.seed = function(knex, Promise) {

return knex('articles').del()
  .then(() => knex('authors').del())
}
