const Sequelizes = require('sequelize')
const sequelize = require('../services/database')

const MedicionClientes = sequelize.define('mmedicion_cliente', {
  id: { type: Sequelizes.SMALLINT, primaryKey: true },
  idcliente: Sequelizes.INT,
  tipo: Sequelizes.STRING,
  ambiente: Sequelizes.STRING
})

module.exports = MedicionClientes 