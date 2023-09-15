// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Address } from '@/models/address'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { User } from '@/models/user'


type Data = {
  message: string
  data?: IAddress
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      const session = await getSession({ req })

      if (!session) {
        return res.status(400).json({ message: 'Bad request' })
      }
      // @ts-ignore
      const user = await User.findById(session._id)

      // @ts-ignore
      const shippingInfo = await Address.create({
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        phoneNumber: req.body.phoneNumber,
        zipCode: req.body.zipCode,
        country: req.body.country
      })

      if (!shippingInfo) return res.status(401).json({ message: 'Error creating user shippingInfo' })

      user.shippingAddress.push(shippingInfo.id)
      await user.save({ runValidators: false })

      res.status(200).json({
        message: 'Shipping Info created',
        data: shippingInfo
      })
    } catch (err) {
      console.log(err)
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
