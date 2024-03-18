export const info = (...params: any[]) => {
  if (process.env.NODE_ENV === 'test') {
    return
  }

  console.log(...params)
}

interface ErrorProp {
  url: string,
  message: string,
  err: Error
}

export const errorLogger = ({ url, message, err }: ErrorProp) => {
  if (process.env.NODE_ENV === 'test') {
    return
  }

  console.error(message)
}
