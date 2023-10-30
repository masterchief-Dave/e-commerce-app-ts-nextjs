import { GetServerSideProps } from 'next'
import axios from 'axios'

import { Layout } from '@/components/Layout'
// import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from '@/components/Navbar'
import { ShoppingFixedBag } from '@/components/ShoppingBag'
import { Footer } from '@/components/Footer'
import { ProductCard } from '@/components/Product/Card'
import { Filter } from '@/components/Filter'
import { Sorting } from '@/components/Filter/sorting'
import NoItemFound from '@/components/Shell/NoItemFound'


type Props = {
  products: Product[]
}

const ProductSlug = ({ products }: Props) => {
  return (
    <Layout>
      <section className='h-screen'>
        <Navbar />
        <main className='mx-auto grid w-full grid-cols-12 space-y-12 py-32'>
          {/* <div className='col-span-full'>
            <BreadCrumb />
          </div> */}

          <section className='mb-12 col-start-2 col-end-12 flex justify-end'>
            <div className='col-start-2 col-end-12 flex justify-end'>
              <div className=''>
                <Sorting />
              </div>
            </div>
          </section>

          {products?.length < 1 ? <NoItemFound /> : (
            <div className='col-start-2 col-end-12 grid grid-cols-12 gap-12'>
              <div className='col-start-1 col-end-3'>
                <Filter />
              </div>
              <div className='col-start-3 col-end-13'>
                <section className='grid grid-cols-4 justify-items-end gap-12'>
                  {products.map((product: Product): React.ReactElement => {
                    return (
                      <div key={product._id}>
                        <ProductCard data={product} />
                      </div>
                    )
                  })}
                </section>
              </div>
            </div>
          )}
        </main>
        <Footer />
        <ShoppingFixedBag />
      </section>
    </Layout>
  )
}


export default ProductSlug

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { productname } = context.query
  let response

  // response = await axios.get(`http://sage-warehouse-backend.onrender.com/api/v1/products/search?productname=${productname}`)
  // move this code into next api route
  // {{url}}/products?keyword=apple&sort=-price
  response = await axios.get(`http://sage-warehouse-backend.onrender.com/api/v1/products?keyword=${productname}`)

  const data = await response.data

  return {
    props: {
      products: data.data.products
    }
  }
}



