// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "@/models/user"
import type { NextApiRequest, NextApiResponse } from "next"
import * as crypto from "crypto"
import { Resend } from "resend"
import { NEXT_PUBLIC_RESEND_API } from "@/utils/config"

import SageWarehouseResetPasswordEmail from "@/emails/Resetpassword"
import { connectToMongoDB } from "@/lib/mongodb"

type Data = {
  message?: string
  name?: string
  status?: Number
}

const resend = new Resend(NEXT_PUBLIC_RESEND_API)

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // 1. get the user email address
  // 2. check if the email address is in my database
  // 3. create messasge
  // 4. create a random token and attach it to the email
  // 5. hash the token and save it on my database
  // 6. send the email reset link to the user
  // 7.
  if (req.method === "POST") {
    try {
      await connectToMongoDB()

      const { email } = req.body
      // @ts-ignore
      const user = await User.findOne({ email: email })

      if (!user || user === null) {
        return res.status(404).json({
          message: "invalid user, create an account with sage-warehouse",
        })
      }

      const resetToken = crypto.randomBytes(32).toString("hex")
      const hashedToken = crypto
        .createHash("sha256")
        .update(resetToken)
        .digest("hex")

      const expiryDate = new Date()
      expiryDate.setMinutes(expiryDate.getMinutes() + 10)

      user.resetPasswordToken = hashedToken
      user.resetPasswordExpire = expiryDate
      await user.save({ validateBeforeSave: false })

      // const resetLink = `${req.protocol}://${req.get('host')}/auth/reset-password/${resetToken}`
      const resetLink = `http://localhost:3002/auth/reset-password/${resetToken}`

      // confiure the email sender
      resend.sendEmail({
        from: "sage-warehouse@resend.dev",
        to: user.email,
        subject:
          "Reset Password,password expiry link will expire after 10 minutes.",
        react: (
          <SageWarehouseResetPasswordEmail
            name={user.name}
            product="Sage-Warehouse"
            resetPasswordLink={resetLink}
          />
        ),
      })

      res.status(200).json({ message: "Email sent successfully" })
    } catch (err) {
      res.status(400).json({
        message: "Error encountered sending mail Try again!",
        status: 400,
      })
    }
  } else {
    res.status(405).json({
      message: "Method is not allowed",
    })
  }
}
