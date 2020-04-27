const HttpStatus = require('http-status-codes')
const { ErrorHandler } = require('../../helpers/error')

const { SECRET } = process.env
const { API_AUTHENTICATION } = process.env
const axios = require('axios')
const apiAuth = axios.create({
  baseURL: API_AUTHENTICATION
})

const jwt = async (req, res, next) => {
  const token = req.headers.authorization
  if (token && token.split(' ')[0] === 'Bearer') {
    let data = await apiAuth.get('/verificacion', { headers: { 'Authorization': token } })
    console.log('data', data)
    if (!data) {
      // eslint-disable-next-line no-underscore-dangle
      throw new ErrorHandler(HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED), HttpStatus.UNAUTHORIZED, res.__('Password'))
    }
    req.decoded = data
    req.isAuthenticated = true
    req.user = data.empresa
    next()
  } else {
    // eslint-disable-next-line no-underscore-dangle
    throw new ErrorHandler(HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED), HttpStatus.UNAUTHORIZED, res.__('Password'))
  }
}

module.exports = { jwt }
