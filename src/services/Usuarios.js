const ServiceError = require('../helpers/error')
const { API_AUTHENTICATION } = process.env
const axios = require('axios')
const apiAuth = axios.create({
  baseURL: API_AUTHENTICATION
})

const getAuth = async function (usuario, contrasena) {
  try {
    let { data: { datos } } = await apiAuth.post('/autenticacion',
      { usuario, contrasena })
    return datos || false
  } catch (e) {
    console.log('error', e)
  }
}


const getUsers = async function () {
  try {
    let { data: datos } = await apiAuth.get('/users')
    return datos || false
  } catch (e) {
    console.log('error', e)
  }
}

const getUser = async function (token) {
  try {
    let { data } = await apiAuth.get('/verificacion', { headers: { 'Authorization': token } })
    return data || false
  } catch (e) {
    console.log('error', e)
  }
}

const updateUser = async function (id, userInfo) {
  try {
    let { data } = await apiAuth.put(`/user/${id}`, { userInfo })
    return data || false
  } catch (e) {
    console.log('error', e)
  }
}

const createUser = async function (userInfo) {
  let { usuario, bd, url, empresa, contrasena } = userInfo
  try {
    let { data } = await apiAuth.post(`/user`, { usuario, bd, url, empresa, contrasena })
    return data || false
  } catch (e) {
    console.log('error', e)
  }
}


module.exports = { getAuth, getUsers, getUser, updateUser, createUser }