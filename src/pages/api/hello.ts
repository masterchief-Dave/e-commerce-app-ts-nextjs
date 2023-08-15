// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  // data: 
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.setHeader('Set-Cookie', 'myCookie=exampleValue; Path=/; HttpOnly')
  res.status(200).json({ message: 'John Doe' })
}
