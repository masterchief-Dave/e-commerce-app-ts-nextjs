// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from '@/models/product'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { options } from '../../auth/[...nextauth]'
import { getServerSession } from 'next-auth/next'

import { Order } from '@/models/order'
import { User } from '@/models/user'

type Data = {
  message: string
  data?: IOrder
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    try {
      // const session = await getSession({ req })
      const session = await getServerSession(req, res, options)

      const { orders, reference, userId, shippingAddress, price, taxPrice, shippingPrice } = req.body

      const orderProducts = await Promise.all(orders.map(async (order: Cart) => {
        // console.log({ order })
        // @ts-ignore
        const product = await Product.findById(order._id)

        // console.log({ product })
        if (!product || product.stock < 1 || product.stock < order.cartQuantity) {
          return res.status(400).json({
            message: 'The order could not be processed'
          })
        }

        product.stock = product.stock - order.cartQuantity
        await product.save()
        return {
          productId: product._id,
          quantity: order.cartQuantity,
          price: product.price
        }
      }))

      // @ts-ignore
      const newOrder = await Order.create({
        shippingInfo: shippingAddress,
        user: session?._id,
        orderItems: orderProducts,
        paymentInfo: {
          reference: reference.reference,
          status: reference.status,
          message: reference.message,
          transaction: reference.transaction
        },
        taxPrice: taxPrice,
        shippingPrice: shippingPrice,
        totalPrice: price,
        paidAt: new Date(),
        orderStatus: 'Processing',
        deliveredAt: '',
        createdAt: new Date()
      })

      // the new order will have an id that is what i want to save in the user's document
     
      // @ts-ignore
      const user = await User.findById(session?._id)
      await user.order.push(newOrder._id)
      await user.save({ validateBeforeSave: false })

      // I can use paystack to perhaps verify the order
      res.status(200).json({
        message: 'order created',
        data: newOrder
      })
    } catch (err) {
      console.log(err)
    }
  } else {
    console.log('the method is not allowed')
    return res.status(405).json({ message: 'method not allowed' })
  }
}
