class ErrorHandler extends Error {
  constructor(code, statusCode, message) {
    super()
    this.code = code
    this.statusCode = statusCode
    this.message = message
  }
}

const handleError = (err, res) => {
  const { code, statusCode, message } = err
  res.status(statusCode).json({
    code,
    http_code: statusCode,
    message,
  })
}

module.exports = { ErrorHandler, handleError }
