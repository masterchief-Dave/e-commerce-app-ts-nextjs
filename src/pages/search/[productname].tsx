import Image from 'next/image'
import Link from 'next/link'
// import useSWR from 'swr'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid'
import { GetServerSideProps } from 'next'
import axios from 'axios'
import { useSession } from 'next-auth/react'

import { useAppDispatch } from '@/hooks/reduxhooks'
import { Layout } from '@/components/Layout'
// import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from '@/components/Navbar'
import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { Footer } from '@/components/Footer'
import { addToCart } from '@/features/cart/cartSlice'
import { useCart } from '@/hooks/useCart'
import AuthenticatedModal from '@/components/Modal/AuthenticatedModal'
import { ProductTab } from '@/components/Tabs/Product'

type Props = {
  product: Product | null
}

const styles = {
  tabHeader: `text-lg font-semibold lg:text-2xl cursor-pointer`,
  productDetails: {
    title: `font-semibold`,
    description: `font-medium`
  }
}

const ProductSlug = ({ product }: Props) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { cart } = useCart()
  const session = useSession()
  const [productQuantity, setProductQuantity] = useState<number>(1)
  let [isItemInCart, setIsItemInCart] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  return (
    <Layout>
      <>
        <Navbar />
        <main className='mx-auto grid w-full grid-cols-12 space-y-12 py-32 '>
          {/* <div className='col-span-full'>
            <BreadCrumb />
          </div> */}

        </main>
        <Footer />
        <ShoppingFixedBag />
        {/* modal */}
        {openModal && <AuthenticatedModal openModal={openModal} setOpenModal={setOpenModal} />}
      </>
    </Layout>
  )
}

export default ProductSlug

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { productname } = context.query
  // move this code into next api route
  const response = await axios.get(`http://localhost:8100/api/v1/products/search?productname=${productname}`)

  console.log(response.data)
  // const response = await axios.get(`https://sage-warehouse-backend.onrender.com/api/v1/products/${productname}`)
  // const response = await axios.get(`http://127.0.0.1:3002/api/products/get-product/${id}`)
  const data = await response.data


  // console.log({ data })
  /**
   *  can I check from here if the item is already in the cart already from here, useCart will not work here because this side is server side rendered
   * i want to persist the cart in the local storage so from there i guess i can check if an item is already in the cart 
   * */

  return {
    props: {
      // product: data.data.product
      product: null
    }
  }
}