import React from "react"
import { GetServerSideProps } from "next"
import { Navbar } from "@/components/Navbar"
import { Layout } from "@/components/Layout"
import NoItemFound from "@/components/Shell/NoItemFound"
import { Filter } from "@/components/Filter"
import { Sorting } from "@/components/Filter/sorting"
import { ProductCard } from "@/components/Product/Card"
import useCategoryStore from "@/lib/store/category.store"
import { useSearchParams } from "next/navigation"
import { useGetCategory } from "@/lib/hooks/categories/category.hook"

type Props = {
  products: Product[]
}

const CategorySlug: React.FC<Props> = ({ products }) => {
  const { params } = useCategoryStore((state) => state)
  const searchParams = useSearchParams()
  const rating = searchParams.get("rating") ?? "none"
  const price = searchParams.get("price") === "asc" ? "asc" : "desc" ?? "asc"
  const name = searchParams.get("name") ?? ""
  const page = Number(searchParams.get("page")) ?? 1

  const { isLoading, data, isError } = useGetCategory({
    name,
    page,
    price,
    rating,
  })

  // show loading skeleton
  if (isLoading) {
    return <></>
  }

  console.log({ data })

  return (
    <Layout>
      <section className="h-screen">
        <Navbar />
        <main className="mx-auto grid w-full grid-cols-12 space-y-12 py-32 overflow-hidden">
          <section className="mb-12 col-start-2 col-end-12 flex justify-end">
            <div className="col-start-2 col-end-12 flex justify-end">
              <div className="w-full">
                <Sorting />
              </div>
            </div>
          </section>

          {products?.length < 1 || isError ? (
            <NoItemFound />
          ) : (
            <div className="col-start-2 col-end-12 grid grid-cols-12 gap-12">
              <div className="col-start-1 col-end-3">
                <Filter />
              </div>
              <div className="col-start-3 col-end-13">
                <section className="grid grid-cols-4 justify-items-end gap-12">
                  {products?.map((product: Product): React.ReactElement => {
                    return (
                      <div key={product._id}>
                        <ProductCard data={product} page={1} />
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

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { categoryname } = context.query
  let response

  // console.log('context.query', context.query)
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
  // response = await axios.get(
  //   `${process.env.NEXT_PUBLIC_production_server}/products?categoryname=${categoryname}`
  // )
  // console.log('response.data.data', response.data.data)
  // response = await axios.get(`http://local/host:3002/api/products/getmyproducts?minPrice=2000&minRating=4&categoryname=${categoryname?.[0]}&sort=${categoryname?.[1]}`)

  // return {
  //   props: {
  //     products: await response?.data.data.products,
  //   },
  // }

  return {
    props: {
      products: [],
    },
  }
}
