const Knex = require('knex')

const knex = Knex({
  client: 'postgres',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT || 5432
  },
  log: {
    warn(message) {
      console.log(message)
      // sobre escribo la funcion para no mostrar eventos de desconexion en el pool
    }
  }
})
console.log(process.env.DB_HOST)
console.log(process.env.DB_PASSWORD)
console.log(process.env.DB_DATABASE)
module.exports = knex
