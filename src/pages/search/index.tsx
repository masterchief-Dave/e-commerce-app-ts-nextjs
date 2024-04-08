import { GetServerSideProps } from "next"
import axios from "axios"

import { Layout } from "@/components/Layout"
// import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from "@/components/Navbar"
import { ShoppingFixedBag } from "@/components/ShoppingBag"
import { Footer } from "@/components/Footer"
import { ProductCard } from "@/components/Product/Card"
import { Filter } from "@/components/Filter"
import { Sorting } from "@/components/Filter/sorting"
import NoItemFound from "@/components/Shell/NoItemFound"
import Filtering from "@/components/Filter/filtering"
import {
  useGetProducts,
  useSearchProducts,
} from "@/lib/hooks/product/product.hook"
import useProductStore from "@/lib/store/product.store"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/router"
import React, { startTransition } from "react"
import { CategoryPageSkeleton } from "@/components/skeleton"
import type { ProductSearchInterface } from "@/lib/types/product"
import HomeWrapper from "@/components/Layout/Home"

type Props = {
  products: Product[]
}

const ProductSlug = () => {
  const router = useRouter()
  const pathname = router.pathname
  const { params } = useProductStore((state) => state)
  const searchParams = useSearchParams()

  // Search params
  const rating = searchParams.get("rating") ?? "none"
  const price = searchParams.get("price") === "asc" ? "asc" : "desc" ?? "asc"
  const name = searchParams.get("name") ?? ""
  const page = Number(searchParams.get("page")) ?? 1

  // Create query string
  const createQueryString = React.useCallback(
    (params: Record<string, string | number | null>) => {
      const newSearchParams = new URLSearchParams(searchParams?.toString())

      for (const [key, value] of Object.entries(params)) {
        if (value === null) {
          newSearchParams.delete(key)
        } else {
          newSearchParams.set(key, String(value))
        }
      }
      return newSearchParams.toString()
    },
    [searchParams]
  )

  // Product filter
  React.useEffect(() => {
    startTransition(() => {
      const newQueryString = createQueryString({
        // name: params.name ?? null,
        name: params?.name === "all" ? name : params?.name ?? null,
        price: params.price ?? null,
        rating: params.rating ?? null,
        page: params.page ?? null,
      })

      router.push(`${pathname}?${newQueryString}`)
    })
  }, [params.name, params.price, name])

  const { isLoading, data, isError } = useSearchProducts({
    rating,
    name,
    page,
    price,
  })

  // show loading skeleton
  if (isLoading) {
    return <CategoryPageSkeleton />
  }

  const products = (data?.data as ProductSearchInterface[]) || []

  return (
    <HomeWrapper>
      <section className="">
        <Navbar />
        <main className="mx-auto grid w-full grid-cols-12 space-y-8 py-12">
          {/* <div className='col-span-full'>
            <BreadCrumb />
          </div> */}

          <section className="mb-12 col-start-2 col-end-12 w-full flex justify-end">
            <div className="flex justify-end w-full">
              <div className="w-full flex items-center gap-x-2">
                <Sorting />
                <Filtering />
              </div>
            </div>
          </section>

          {products?.length < 1 || isError ? (
            <NoItemFound />
          ) : (
            <div className="col-start-2 col-end-12 grid grid-cols-12 gap-12">
              {/* <div className="col-start-1 col-end-3">
                <Filter />
              </div> */}
              <div className="col-start-2 col-end-12">
                <section className="grid grid-cols-4 justify-items-end gap-12">
                  {products.map((product) => {
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

        <ShoppingFixedBag />
      </section>
    </HomeWrapper>
  )
}

export default ProductSlug
