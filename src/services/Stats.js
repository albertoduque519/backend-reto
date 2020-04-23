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

  const records = await sequelize.query('select  mmedicion_cliente.tipo,sum(medicion_cliente_resultado.tamano) as tamano' +
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

const getDiskSpaceStatsByDate = async function (idClient = null, startDate = null, endDate = null) {
  let where = ' WHERE true '
  if (idClient) {
    where += ' AND mmedicion_cliente.idcliente IN (' + idClient + ')'
  }
  if (startDate) {
    where += ` AND medicion_cliente_resultado.fecha >= '${startDate}' `
  }
  if (endDate) {
    where += ` AND medicion_cliente_resultado.fecha <= '${endDate}' `
  }
  let groupBy = ' group By mmedicion_cliente.tipo,medicion_cliente_resultado.fecha'

  const records = await sequelize.query('select  medicion_cliente_resultado.fecha,mmedicion_cliente.tipo,sum(medicion_cliente_resultado.tamano) as tamano' +
    ' FROM cclientes INNER JOIN medicion_cliente_resultado ON(medicion_cliente_resultado.idcliente = cclientes.id)' +
    ' LEFT JOIN mmedicion_cliente ON(medicion_cliente_resultado.idmedicion_cliente=mmedicion_cliente.id)' + where + groupBy, {
    type: QueryTypes.SELECT
  });

  return records.map(item => {
    return {
      tipo: item.tipo,
      tamano: item.tamano,
      fecha: item.fecha
    }
  }) || false
}

module.exports = { getDiskSpaceStatsByClient, getDiskSpaceStatsByDate }