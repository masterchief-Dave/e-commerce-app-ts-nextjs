class AppError extends Error {
  statusCode: number
  status: string
  isOperational?: boolean

  constructor(message: string, statusCode: number) {
    super(message)
    this.statusCode = statusCode
    this.status = this.statusCode.toString().startsWith('4') ? 'error' : 'fail'
    this.isOperational = true
    Error.captureStackTrace(this, this.constructor)
  }
}

export default AppError
