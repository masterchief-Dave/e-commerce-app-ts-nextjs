// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from '@/models/user'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message?: string
  name?: string
}

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

  const { email } = req.body

  // @ts-ignore
  const user = await User.findOne({ email: email })

  if (!user) res.status(404).json({ message: 'invalid user, create an account with sage-warehouse' })

  res.status(200).json({ name: 'John Doe' })
}
