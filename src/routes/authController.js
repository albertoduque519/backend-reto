const usersService = require('../services/Usuarios')
const randtoken = require('rand-token')

const refreshTokens = {}
const { SECRET } = process.env

exports.signup = async (req, res) => {
  if (req.body.username && req.body.password) {
    const datos = await usersService.getAuth(req.body.username, req.body.password)
    const token = datos.token
    res.json({ token: `JWT ${token}` })
  } else {
    res.json({ mensaje: 'Usuario o contraseña incorrectos' })
  }
}
