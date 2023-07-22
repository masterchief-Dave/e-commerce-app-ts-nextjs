import { NextApiRequest, NextApiResponse } from "next"
import { connectToMongoDB } from "@/lib/mongodb"

import { User } from "@/models/user"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  connectToMongoDB().catch(err => res.json(err))

  if (req.method === 'POST') {
    if (!req.body) return res.status(400).json({ error: 'Data is missing' })

    const { name, email, password, passwordChangedAt } = req.body

    const user = await User.create({
      name,
      email,
      password,
      passwordChangedAt,
      avatar: {
        public_id: 'avataaars_rkyikx',
        url: 'https://res.cloudinary.com/diggungrj/image/upload/v1668579345/avataaars_rkyikx.svg'
      }
    })

    if (!user) {
      throw new Error('')
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' })
  }
}

export default handler