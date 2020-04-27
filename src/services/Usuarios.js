const ServiceError = require('../helpers/error')
const { API_AUTHENTICATION } = process.env
const axios = require('axios')
const apiAuth = axios.create({
  baseURL: API_AUTHENTICATION
})

const getAuth = async function (usuario, contrasena) {

  let { data: { datos } } = await apiAuth.post('/autenticacion', { usuario, contrasena })
  return datos || false
}

module.exports = { getAuth }