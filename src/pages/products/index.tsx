import Filtering from "@/components/Filter/filtering"
import { Sorting } from "@/components/Filter/sorting"
import { Layout } from "@/components/Layout"
import { Navbar } from "@/components/Navbar"
import { ProductCard } from "@/components/Product/Card"
import { ProductCardSkeleton } from "@/components/skeleton"
// import { ProductCardSkeleton } from "@/components/SkeletonLoading"
import { useGetProducts } from "@/lib/hooks/product/product.hook"
import { useState } from "react"

function Products() {
  const [pageIndex, setPageIndex] = useState<number>(1)
  const {
    isLoading: isAllProductsLoading,
    data: allProductsData,
    error: productFetchingError,
  } = useGetProducts({ page: pageIndex })

  const handlePrevButton = () => {
    if (pageIndex === 1) {
      return
    }
    setPageIndex((prev) => prev - 1)
  }

  const handleNextButton = () => {
    if (pageIndex === 5) {
      return
    }
    setPageIndex((prev) => prev + 1)
  }
  return (
    <Layout>
      <div>
        <Navbar />
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-end-12 py-12">
            <h1 className="text-xl font-medium mb-12">
              Explore variety of premium products
            </h1>
            <div className="flex items-center gap-x-2">
              <Sorting />
              <Filtering />
            </div>
            <div className="grid grid-cols-12">
              <div className="col-start-2 col-end-12">
                <section className="products-component space-y-12 bg-white py-12">
                  {productFetchingError ? (
                    <p className="px-8  text-2xl font-medium text-primary-grey-300">
                      Error fetching products at this time try again later 😞
                    </p>
                  ) : (
                    <section className="flex justify-center px-8">
                      <div className="grid w-full grid-cols-1 justify-center gap-x-8 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
                        {isAllProductsLoading
                          ? new Array(8).fill(2).map((_, index) => {
                              return (
                                <ProductCardSkeleton
                                  key={`Products page ${index + 1}`}
                                />
                              )
                            })
                          : allProductsData?.data?.products?.map(
                              (product: Product) => {
                                return (
                                  <div
                                    key={product._id}
                                    className="flex justify-center"
                                  >
                                    <ProductCard
                                      data={product}
                                      page={pageIndex}
                                    />
                                  </div>
                                )
                              }
                            )}
                      </div>
                    </section>
                  )}

                  <div className="flex items-center justify-end gap-x-4 px-8 mt-12">
                    <button
                      className="rounded-md border px-8 py-2 text-sm font-medium"
                      onClick={() => handlePrevButton()}
                    >
                      Prev
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-blue-300 text-sm font-medium text-white">
                      {pageIndex}
                    </button>
                    <button className="text-sm font-normal">
                      {pageIndex + 1}
                    </button>
                    <p>...</p>
                    <button className="text-sm">10</button>
                    <button
                      className="rounded-md border px-8 py-2 text-sm font-medium"
                      onClick={() => handleNextButton()}
                    >
                      Next
                    </button>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Products
