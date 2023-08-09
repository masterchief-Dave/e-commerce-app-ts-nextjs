// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import * as crypto from 'crypto'
import bcrypt from 'bcryptjs'

import { User } from '@/models/user'

type Data = {
  message?: string,
  status?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const password = req.body.password
  const token = req.query.token as string

  const hashedToken = crypto.createHash('sha256').update(token).digest('hex')
  // @ts-ignore
  const user = await User.findOne({
    resetToken: hashedToken,
    passwordResetExpire: { $gt: new Date() }
  })

  if (!user) return res.status(400).json({ status: 'fail', message: 'invalid or expired token' })

  user.password = await bcrypt.hash(password, 10)
  user.resetToken = undefined
  user.passwordResetExpire = undefined
  await user.save()

  res.status(200).json({
    message: 'Password reset successful'
  })
}
