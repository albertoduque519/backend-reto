const jwts = require('jsonwebtoken')
const HttpStatus = require('http-status-codes')
const { ErrorHandler } = require('../../helpers/error')

const { SECRET } = process.env

const jwt = (req, res, next) => {
	const token = req.headers.authorization

	if (token && token.split(' ')[0] === 'Bearer') {
		jwts.verify(token.split(' ')[1], SECRET, (err, decoded) => {
			if (err) {
				// eslint-disable-next-line no-underscore-dangle
				throw new ErrorHandler(HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED), HttpStatus.UNAUTHORIZED, res.__('Password'))
			}
			req.decoded = decoded
			req.isAuthenticated = true
			req.user = decoded.user
			next()
		})
	} else {
		// eslint-disable-next-line no-underscore-dangle
		throw new ErrorHandler(HttpStatus.getStatusText(HttpStatus.UNAUTHORIZED), HttpStatus.UNAUTHORIZED, res.__('Password'))
	}
}

module.exports = { jwt }
