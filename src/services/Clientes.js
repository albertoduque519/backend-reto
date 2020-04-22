const ServiceError = require('../helpers/error')
const db = require('./database')

const getClients = async function () {
  let query = db('cclientes')
  let result = await query
  return result.map(item => {
    return {
      id: item.id,
      cliente: item.cliente
    }
  }) || false
}


module.exports = { getClients }