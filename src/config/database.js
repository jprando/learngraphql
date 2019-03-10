const knexfile = require('./../knexfile')
const knex = require('knex')(knexfile)
module.exports = knex

// knex('users')
//   .insert({
//     name: 'Jeudi Prando',
//     email: 'jeudiprando@gmail.com',
//     password: 'teste'
//   })
//   .then(console.log)

// knex('users').then(console.log)

// knex('users')
//   .select(['id', 'email'])
//   .then(console.log)

// knex('users')
//   .first(['id', 'email'])
//   .then(console.log)
