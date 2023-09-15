// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Address } from '@/models/address'
import { User } from '@/models/user'
import { Types } from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

type Data = {
  message: string
  data?: IAddress
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'PATCH') {
    try {

      // @ts-ignore
      const user = await User.findById(session._id)
      const shippingAddress = req.query.id
      const doesTheUserHaveAddress = user.shippingAddress.filter((addressId: Types.ObjectId) => {
        return addressId.toString() === shippingAddress
      })

      if (!doesTheUserHaveAddress) {
        return res.status(400).json({ message: 'no shipping info found' })
      }

      //  return shipping info
      const shippingInfo = await Promise.all([])

      res.status(200).json({
        message: 'Shipping info updated',
        // data: shippingInfo
      })
    } catch (err) {
      console.log(err)
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
