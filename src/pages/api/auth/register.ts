import { NextApiRequest, NextApiResponse } from "next"
import { connectToMongoDB } from "@/lib/mongodb"

import { User } from "@/models/user"
import { sendToken } from "@/utils/middleware"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  await connectToMongoDB().catch(err => res.json(err))

  if (req.method === 'POST') {
    if (!req.body) return res.status(400).json({ error: 'Data is missing' })

    const { name, email, password, passwordChangedAt } = req.body

    const user = new User()
    user.name = name
    user.email = email
    user.password = password
    user.passwordChangedAt = passwordChangedAt
    user.avatar = {
      public_id: 'avataaars_rkyikx',
      url: 'https://res.cloudinary.com/diggungrj/image/upload/v1668579345/avataaars_rkyikx.svg'
    }
    await user.save()

    if (!user) {
      res.status(409).json({
        status: 'fail',
        message: 'validation error'
      })
    }

    // const newUser = {
    //   email: user.email,
    //   name: user.name,
    //   id: user._id,

    // }

    sendToken(user, 201, res)
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}

export default handler