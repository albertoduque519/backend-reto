const usersService = require('../services/Usuarios')

exports.signup = async (req, res) => {
  if (req.body.username && req.body.password) {
    try {
      const datos = await usersService.getAuth(req.body.username, req.body.password)
      const token = datos.token
      if (token) {
        const userInfo = await usersService.getUser(`Bearer ${token}`);
        res.json({ token: `JWT ${token}`, userInfo: userInfo })
      }
    } catch (error) {
      res.json({ mensaje: 'Usuario o contraseña incorrectos' })
    }
  } else {
    res.json({ mensaje: 'Usuario o contraseña incorrectos' })
  }
}
