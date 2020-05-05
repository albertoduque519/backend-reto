const Sequelizes = require('sequelize')
const sequelize = require('../services/database')

const Clientes = sequelize.define('cclientes', {
  id: { type: Sequelizes.SMALLINT, primaryKey: true },
  cliente: Sequelizes.STRING,
  empresa: Sequelizes.STRING,
  capacidad_total: Sequelizes.BIGINT
})

module.exports = Clientes 