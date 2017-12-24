
exports.seed = function(knex, Promise) {
  return knex('authors').insert([
    {id: 1, firstName:'Brent' , lastName:'Schroder' , email:'schroder.brent@gmail.com' , password: '$2a$06$Bz5TIUjvaT3DIbBncAAsgeDgiT8mtn/6VcxOakkS8vBbjaEoD4vzK', admin: true},
    {id: 2, firstName:'Luke' , lastName:'Schroder' , email:'schroder.luke@gmail.com' , password: '$2a$06$hH7OxrrO8.DQrJhwmk4PDOIg.JMqlqVb6Ujvdj88kkMlV9UGCsJFS', admin: false},
    {id: 3, firstName:'Phil' , lastName:'Schroder' , email:'schroder.phil@gmail.com' , password: '$2a$06$98kpAi1.HcCvn8drf20mcuRL6u0ZYUXrzoVVyRTX7qJiyP7HM6dDG', admin: false},
    {id: 4, firstName:'Kian' , lastName:'Mchugh' , email:'kian@gmail.com' , password: '$2a$06$nfCRhaJuAZ/Z315JmZ6kMeQPeTossx5Q1JtSse.Qj30Z1yjNf03O6', admin: true}
    ])
  .then(function(){
    return knex.raw("SELECT setval('authors_id_seq', (SELECT MAX(id) FROM authors))")
  })
}
