// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
  // data?: 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'GET') {
    try {
      res.setHeader('Set-Cookie', 'myCookie=exampleValue; Path=/; HttpOnly')
      res.status(200).json({ message: 'John Doe' })
    } catch (err) {
      console.log(err)
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
