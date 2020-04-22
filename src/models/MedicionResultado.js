const Sequelizes = require('sequelize')
const sequelize = require('../services/database')

const MedicionResultado = sequelize.define('medicion_cliente_resultado', {
  id: { type: Sequelizes.SMALLINT, primaryKey: true },
  idcliente: Sequelizes.INT,
  idmedicion_cliente: Sequelizes.INT,
  tamano: Sequelizes.BIGINT,
  fecha: Sequelizes.TIMESTAMP
})

module.exports = MedicionResultado 