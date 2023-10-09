import { GetServerSideProps } from 'next'
import axios from 'axios'

import { Layout } from '@/components/Layout'
// import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from '@/components/Navbar'
import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { Footer } from '@/components/Footer'
import { MaterialSymbolsRemoveShoppingCart } from '@/globals/icons'
import { ProductCard } from '@/components/Product/Card'
import { Filter } from '@/components/Filter'


type Props = {
  products: Product[]
}

const ProductSlug = ({ products }: Props) => {
  return (
    <Layout>
      <>
        <Navbar />
        <main className='mx-auto grid w-full grid-cols-12 space-y-12 py-32 min-h-screen'>
          {/* <div className='col-span-full'>
            <BreadCrumb />
          </div> */}

          {products?.length < 1 ? <NoItemFound /> : (
            <div className='col-start-2 col-end-12 grid grid-cols-12 gap-12'>
              <div className='col-start-1 col-end-3'>
                <Filter />
              </div>
              <div className='col-start-3 col-end-13 grid grid-cols-5 gap-12'>
                {products.map((product: Product): React.ReactElement => {
                  return (
                    <div key={product._id}>
                      <ProductCard data={product} />
                    </div>
                  )
                })}
              </div>
            </div>
          )}
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

  // const response = await axios.get(`https://sage-warehouse-backend.onrender.com/api/v1/products/${productname}`)
  // const response = await axios.get(`http://127.0.0.1:3002/api/products/get-product/${id}`)
  const data = await response.data

  return {
    props: {
      products: data.data
    }
  }
}

const NoItemFound = () => {
  return (
    <div className='col-start-2 col-end-12 flex items-center justify-center w-full h-full'>
      <div className='border rounded-2xl w-[45rem] space-y-8 p-12 shadow-sm'>
        <div className='flex justify-center'>
          <MaterialSymbolsRemoveShoppingCart className='w-24 h-24' />
        </div>

        <article className='flex flex-col items-center justify-center'>
          <h4 className='font-medium text-[2rem]'>We couldn't find what you were looking for.</h4>
          <p className='text-[1.6rem] text-center font-normal text-primary-grey-100'>Keep calm and try searching for more general terms or shop from categories below</p>
        </article>
      </div>
    </div>
  )
}


