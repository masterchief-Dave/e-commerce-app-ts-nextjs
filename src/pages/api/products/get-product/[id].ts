// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '@/models/product'

type Data = {
  message: string,
  data?: Product
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.setHeader('Set-Cookie', 'myCookie=exampleValue; Path=/; HttpOnly')
  if (req.method === 'GET') {
    try {
      const id = req.query.id
      // @ts-ignore
      const product = await Product.findById(id)

      res.status(200).json({ message: 'John Doe', data: product })
    } catch (err) {
      res.status(400).json({
        message: 'error'
      })
    }

  } else {
    return res.status(405).json({ message: 'method is not allowed' })
  }
}
