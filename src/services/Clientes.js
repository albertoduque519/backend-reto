const ServiceError = require('../helpers/error')
const Clientes = require('../models/Clientes')

const getClients = async function (user) {
  let data = { attributes: ['id', 'cliente'], raw: true }
  if (user.empresa !== 'solati') {
    data = {
      where: { cliente: toCamelCase(user.empresa) }, attributes: ['id', 'cliente']
    }
  }
  let result = await Clientes.findAll(data)
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

const toCamelCase = function (str) {
  return str.split(' ').map(function (word, index) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}


module.exports = { getClients }