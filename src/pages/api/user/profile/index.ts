// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { connectToMongoDB } from '@/lib/mongodb'
import { User } from '@/models/user'
import { getToken } from 'next-auth/jwt'

type Data = {
  message: string
  data?: User
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      const id = req.query
      await connectToMongoDB()

      // @ts-ignore
      const user = await User.findById(id)

      return res.status(200).json({
        message: 'ok',
        data: user
      })

    } catch (err) {
      console.log(err)
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
