const db = require('../config/database')

module.exports = {
  Query: {
    async user(_, { id }) {
      if (id <= 0) {
        throw 'O parametro ID tem quer ser maior que zero'
      }
      return await db('users')
        .where({ id })
        .first()
    },
    async users(_, { page = 1 }) {
      if (page <= 0) {
        throw 'O parametro PAGE tem que ser  maior que zero'
      }
      const limit = 3
      let offset = (page - 1) * limit
      return await db('users')
        .offset(offset)
        .limit(limit)
    }
  },
  Mutation: {
    async createUser(_, { input }) {
      const result = await db('users').insert({
        name: input.name,
        email: input.email,
        password: input.password
      })

      const id = result[0]
      return await db('users')
        .where({ id })
        .first()
    }
  }
}
