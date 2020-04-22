const ServiceError = require('../helpers/error')
const db = require('./database')
const sequelize = require('./database')
const { QueryTypes } = require('sequelize');

const getDiskSpaceStatsByClient = async function (idClient = null) {
  let where = ''
  if (idClient) {
    where = 'WHERE mmedicion_cliente.idcliente IN (' + idClient + ')'
  }
  let groupBy = ' group By mmedicion_cliente.tipo'

  const records = await sequelize.query('select sum(medicion_cliente_resultado.tamano) as tamano' +
    ' FROM cclientes INNER JOIN medicion_cliente_resultado ON(medicion_cliente_resultado.idcliente = cclientes.id)' +
    ' LEFT JOIN mmedicion_cliente ON(medicion_cliente_resultado.idmedicion_cliente=mmedicion_cliente.id)' + where + groupBy, {
    type: QueryTypes.SELECT
  });

  return records.map(item => {
    return {
      tipo: item.tipo,
      tamano: item.tamano,
    }
  }) || false
}

module.exports = { getDiskSpaceStatsByClient }