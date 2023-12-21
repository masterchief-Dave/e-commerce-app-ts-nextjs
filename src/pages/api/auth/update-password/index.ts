// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from '@/models/user'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from 'next-auth'
import { options } from '../[...nextauth]'
import { connectToMongoDB } from '@/lib/mongodb'
import bcrypt from 'bcryptjs'

type Data = {
  status?: number | null
  message: string
  // data?: 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'PATCH') {
    try {
      const { password, newPassword } = req.body.data
      // const get the user that is logged in 
      if (!password) return res.status(400).json({ message: 'bad request' })

      const session = await getServerSession(req, res, options)
      // @ts-ignore
      const user = await User.findById(session!._id).populate('password')
      const isPasswordCorrect = await bcrypt.compare(password, user.password)

      if (!isPasswordCorrect) {
        return res.status(400).json({
          status: 400,
          message: 'You are not authorized to perform this action'
        })
      }

      user.password = newPassword
      await user.save({ validateBeforeSave: false })

      res.status(201).json({
        status: 200,
        message: 'password updated'
      })

    } catch (err) {
      console.log(err)
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
