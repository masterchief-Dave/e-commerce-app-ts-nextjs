// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Address } from '@/models/address'
import { User } from '@/models/user'
import { Types } from 'mongoose'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

type Data = {
  message: string
  // data: 
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'DELETE') {
    try {
      const session = await getSession({ req })
      const shippingAddress = req.query.id

      if (!session) {
        return res.status(400).json({ message: 'login to access this resource' })
      }

      // @ts-ignore
      const user = await User.findById(session._id)

      const doesTheUserHaveAddress = user.shippingAddress.filter((addressId: Types.ObjectId) => {
        return addressId.toString() === shippingAddress
      })

      if (!doesTheUserHaveAddress) {
        return res.status(400).json({ message: 'bad request' })
      }

      // @ts-ignore
      const shippingInfo = await Address.findByIdAndDelete(req.params.id)

      // user.shippingAddress = user.shippingAddress.filter((deliveredId) => deliveredId !== shippingAddress)
      // await user.save({ runValidators: false })

      if (shippingInfo) {
        return res.status(200).json({
          message: 'Deleted successfully'
        })
      }

      res.status(400).json({
        message: 'bad request'
      })
    } catch (err) {
      console.log(err)
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
