const jwt = require('jsonwebtoken')
const randtoken = require('rand-token')

const refreshTokens = {}
const { SECRET } = process.env

exports.signup = (req, res) => {
	if (req.body.username === 'admin' && req.body.password === 'admin') {
		const payload = {
			check: true,
			user: req.body.username,
		}
		const token = jwt.sign(payload, SECRET, { expiresIn: 300 })
		const refreshToken = randtoken.uid(256)
		refreshTokens[refreshToken] = req.body.username
		res.json({ token: `JWT ${token}`, refreshToken })
	} else {
		res.json({ mensaje: 'Usuario o contraseña incorrectos' })
	}
}
