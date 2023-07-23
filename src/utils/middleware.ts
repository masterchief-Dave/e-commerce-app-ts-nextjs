import { NextApiResponse } from "next"

export const sendToken = (user: any, statusCode: number, res: NextApiResponse) => {
  const token = user.getJwtToken()
  // safe the refresh token in this place
  // const refreshToken = user.getJwtToken()

  const options = {
    maxAge: 60 * 60 * 24 * 1000,
    // httpOnly: true,
    secure: false
  }

  // res.status(statusCode).cookie('token', token, options).json({
  //   success: true,
  //   token, // cookie cannot be accessed or modified in any way by the browser
  //   user,
  // })
  // res.cookie('e_commerce_token', token, options)

  res.json({
    success: true,
    token
  })
}

