import React from 'react'
import { GetServerSideProps } from 'next'
import axios from 'axios'

import { Navbar } from '@/components/Navbar'
import { Layout } from '@/components/Layout'
import NoItemFound from '@/components/Shell/NoItemFound'
import { Filter } from '@/components/Filter'
import { Sorting } from '@/components/Filter/sorting'
import { ProductCard } from '@/components/Product/Card'

type Props = {
  products: Product[]
}

const CategorySlug: React.FC<Props> = ({ products }) => {
  // console.log(products)
  return (
    <Layout>
      <section className='h-screen'>
        <Navbar />
        <main className='mx-auto grid w-full grid-cols-12 space-y-12 py-32 overflow-hidden'>
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
                  {products?.map((product: Product): React.ReactElement => {
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
      </section>
    </Layout>
  )
}

export default CategorySlug

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  // console.log(context?.query)
  const { categoryname } = context.query
  let response


  console.log('context.query', context.query)
  // console.log((categoryname as string)?.split('&sort='))

  /**
   *      query: { categoryname: 'electronics&sort=-price' },
    resolvedUrl: '/category/electronics%26sort%3D-price',
    params: { categoryname: 'electronics&sort=-price' },

   */
  // if (process.env.NODE_ENV === 'development') {
  //   response = await axios.get(`http://localhost:8100/api/v1/products/category?categoryname=${categoryname}`)
  // }

  // {{url}}/products?keyword=apple&categoryname=laptops
  // {{url}}/products?categoryname=laptops&sort=-price
  // {{url}}/products?categoryname=laptops&sort=-price&sort=price
  response = await axios.get(`http://sage-warehouse-backend.onrender.com/api/v1/products?categoryname=${categoryname}`)
  // console.log('response.data.data', response.data.data)
  // response = await axios.get(`http://local/host:3002/api/products/getmyproducts?minPrice=2000&minRating=4&categoryname=${categoryname?.[0]}&sort=${categoryname?.[1]}`)

  return {
    props: {
      products: await response?.data.data.products
    }
  }
}


