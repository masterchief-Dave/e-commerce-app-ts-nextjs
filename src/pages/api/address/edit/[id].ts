// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Address } from '@/models/address'
import { User } from 'lucide-react'
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
      const session = await getSession()

      if (!session) {
        return res.status(400).json({ message: 'login to access this resource' })
      }

      // @ts-ignore
      const user = await User.findById(session._id)
      const shippingAddress = req.query.id
      const doesTheUserHaveAddress = user.shippingAddress.filter((addressId: Types.ObjectId) => {
        return addressId.toString() === shippingAddress
      })

      if (!doesTheUserHaveAddress) {
        return res.status(400).json({ message: 'bad request' })
      }

      // @ts-ignore
      const shippingInfo = await Address.findByIdAndUpdate(req.query.id, req.body, {
        new: true
      })

      if (!shippingInfo) {
        return res.status(404).json({ message: 'no shipping info found' })
      }

      res.status(200).json({
        message: 'Shipping info updated',
        data: shippingInfo
      })
    } catch (err) {
      console.log(err)
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
