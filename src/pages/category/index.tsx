import React, { startTransition } from "react"
import { Navbar } from "@/components/Navbar"
import { Layout } from "@/components/Layout"
import NoItemFound from "@/components/Shell/NoItemFound"
// import { Filter } from "@/components/Filter"
import { Sorting } from "@/components/Filter/sorting"
import { ProductCard } from "@/components/Product/Card"
import useCategoryStore from "@/lib/store/category.store"
import { useSearchParams } from "next/navigation"
import { useGetCategory } from "@/lib/hooks/categories/category.hook"
import { CategoryPageSkeleton } from "@/components/skeleton"
import type { CategoryProductInterface } from "@/lib/types/product"
import Filtering from "@/components/Filter/filtering"
import { useRouter } from "next/router"
import HomeWrapper from "@/components/Layout/Home"

const CategorySlug: React.FC = () => {
  const router = useRouter()
  const pathname = router.pathname
  const { params } = useCategoryStore((state) => state)
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

  // Category filter
  React.useEffect(() => {
    startTransition(() => {
      const newQueryString = createQueryString({
        name: params?.name === "all" ? name : params?.name ?? null,
        price: params?.price ?? null,
        rating: params.rating ?? null,
        page: params.page ?? null,
      })

      router.push(`${pathname}?${newQueryString}`)
    })
  }, [params.name, params.price, name])

  const { isLoading, data, isError } = useGetCategory({
    name,
    page,
    price,
    rating,
  })

  // show loading skeleton
  if (isLoading) {
    return <CategoryPageSkeleton />
  }

  const categories = (data?.data as CategoryProductInterface[]) || []

  return (
    <HomeWrapper>
      <section className="">
        <Navbar />
        <main className="mx-auto grid w-full grid-cols-12 space-y-12 py-12 overflow-hidden">
          <section className="mb-12 col-start-2 col-end-12 space-y-4">
            <div>
              <h1 className="text-2xl font-medium">Categories</h1>
              <p>Browse through categories</p>
            </div>
            <div className="">
              <div className="w-full flex items-center gap-x-2">
                <Sorting />
                <Filtering />
              </div>
            </div>
          </section>

          {categories?.length < 1 || isError ? (
            <NoItemFound />
          ) : (
            <div className="col-start-2 col-end-12 grid grid-cols-12 gap-12">
              {/* <div className="col-start-1 col-end-3"><Filter /></div> */}
              <div className="col-start-2 col-end-12">
                <section className="grid grid-cols-4 justify-items-center gap-12">
                  {categories?.map((product) => {
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
    </HomeWrapper>
  )
}

export default CategorySlug
