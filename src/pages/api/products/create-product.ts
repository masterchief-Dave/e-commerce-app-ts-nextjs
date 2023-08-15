import type { NextApiRequest, NextApiResponse } from 'next'
import { Product } from '@/models/product'
import { getSession } from 'next-auth/react'

type Data = {
  message: string,
  data?: Product
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // only a logged in user
  /**
   * since next-auth is handling my authentication then it has the user session in getSession, if the user is not logged in or their session has expired thier session will be null, 
   * - authentication has been handled
   * - authorization: from the user session the user can check to see the role 
   */
  // console.log('cookies', req.cookies)
  if (req.method === 'POST') {
    const session = await getSession({ req })
    console.log({ session })
    // console.log(req.session)
    // only an admin can create products
    res.status(200).json({ message: 'John Doe' })

    console.log(session?.role)
    if (session?.role !== 'admin') {
      return res.status(400).json({
        message: 'bad request'
      })
    }
    // @ts-ignore
    const order = await Product.create(req.body)

    res.status(201).json({
      message: 'Product Created',
      data: order
    })

  } else {
    return res.status(405).json({
      message: 'Method not allowed'
    })
  }
}

// 1. when a user sends a request they will attach thier credentials
// 2. extract the token from the credentials
// 3. decrypt the token
// 4. with the user id from the token fetch the user from my database
// 5. check the user role
