exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Jeudi Prando',
          email: 'jeudi@prando.com',
          password: '123'
        },
        { name: 'Fulano', email: 'fulano@email.com', password: '456' },
        {
          name: 'Beltrano',
          email: 'beltrano@email.com',
          password: '789'
        },
        { name: 'Ciclano', email: 'ciclano@email.com', password: '369' }
      ])
    })
}
