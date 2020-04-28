const HttpStatus = require('http-status-codes')
const { ErrorHandler } = require('../../helpers/error')

const { SECRET } = process.env
const { API_AUTHENTICATION } = process.env
const axios = require('axios')
const apiAuth = axios.create({
  baseURL: API_AUTHENTICATION
})

const jwt = async (req, res, next) => {
  console.log("JWT----TEST");
  const token = req.headers.authorization

  try {
    if (token && token.split(' ')[0] === 'Bearer') {
      let response = await apiAuth.get('/verificacion', { headers: { 'Authorization': token } }).catch(error => {
        console.log(error.response)
      });
      if (!response) {
        req.isAuthenticated = false
      }
      req.isAuthenticated = true
      req.user = response.data
      next()
    }
  } catch (e) {
    req.isAuthenticated = false
  }

  next()
}

module.exports = { jwt }
