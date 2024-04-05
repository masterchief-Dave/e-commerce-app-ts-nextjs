class AppError extends Error {
  message: string
  statusCode: Number
  status: String

  constructor(message: string, statusCode: Number, status: String) {
    super(message)
    this.message = message
    this.statusCode = statusCode
    this.status = statusCode.toString().startsWith('4') ? 'error' : 'fail'
  }
}

module.exports = AppError