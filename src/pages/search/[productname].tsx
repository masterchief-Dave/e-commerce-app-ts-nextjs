import { GetServerSideProps } from 'next'
import axios from 'axios'
import { useSession } from 'next-auth/react'

import { Layout } from '@/components/Layout'
// import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from '@/components/Navbar'
import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { Footer } from '@/components/Footer'


type Props = {
  product: Product[] | null
}

const styles = {
  tabHeader: `text-lg font-semibold lg:text-2xl cursor-pointer`,
  productDetails: {
    title: `font-semibold`,
    description: `font-medium`
  }
}

const ProductSlug = ({ product }: Props) => {
  console.log(product)

  return (
    <Layout>
      <>
        <Navbar />
        <main className='mx-auto grid w-full grid-cols-12 space-y-12 py-32 min-h-screen'>
          {/* <div className='col-span-full'>
            <BreadCrumb />
          </div> */}

          {/* if the length of product is empty then display component that the system cannot find what u are looking for so go back to the homepage */}

          {/* else list out the component */}

        </main>
        <Footer />
        <ShoppingFixedBag />
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
      product: data.data
    }
  }
}

const NoItemFound = () => {
  return (
    <div className=''></div>
  )
}