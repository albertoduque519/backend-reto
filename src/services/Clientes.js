const ServiceError = require('../helpers/error')
const Clientes = require('../models/Clientes')

const getClients = async function () {
  let result = Clientes.findAll({ attributes: ['id', 'cliente'], raw: true })
    .then(users => {
      console.log(users)
    })
    .catch(err => {
      console.log(err)
    })
  return result.map(item => {
    return {
      id: item.id,
      cliente: item.cliente
    }
  }) || false
}


module.exports = { getClients }