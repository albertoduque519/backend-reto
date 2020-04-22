const ServiceError = require('../helpers/error')
const db = require('./database')

const getDiskSpaceStatsByClient = async function (idClient = null) {
  let query = db('cclientes')
    .select('mmedicion_cliente.tipo')
    .sum('medicion_cliente_resultado.tamano as tamano')
    .innerJoin('medicion_cliente_resultado', 'medicion_cliente_resultado.idcliente', 'cclientes.id')
    .leftJoin('mmedicion_cliente', 'medicion_cliente_resultado.idmedicion_cliente', 'mmedicion_cliente.id')

  query.where('mmedicion_cliente.ambiente', 'prod')
  if (idClient) {
    console.log("cliente", idClient);
    query.whereIn('mmedicion_cliente.idcliente', idClient)
  }

  query.groupBy('mmedicion_cliente.tipo')

  let result = await query
  return result.map(item => {
    return {
      tipo: item.tipo,
      tamano: item.tamano,
    }
  }) || false
}

module.exports = { getDiskSpaceStatsByClient }