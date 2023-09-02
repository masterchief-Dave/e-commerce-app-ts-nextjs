// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Product } from '@/models/product'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'

import { Order } from '@/models/order'

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
      const session = await getSession({ req })
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
        user: userId,
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

      // I can use paystack to perhaps verify the order
      res.status(200).json({
        message: 'order created',
        data: newOrder
      })
    } catch (err) {
      console.log(err)
    }
  } else {
    return res.status(405).json({ message: 'method not allowed' })
  }
}
