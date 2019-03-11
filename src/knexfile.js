// Update with your config settings.

module.exports = {
  development: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  staging: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  production: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    }
  }
}
