import Filtering from "@/components/Filter/filtering"
import { Sorting } from "@/components/Filter/sorting"
import { Layout } from "@/components/Layout"
import HomeWrapper from "@/components/Layout/Home"
import { Navbar } from "@/components/Navbar"
import { ProductCard } from "@/components/Product/Card"
import NoItemFound from "@/components/Shell/NoItemFound"
import { ProductCardSkeleton } from "@/components/skeleton"
import { useGetFeaturedProducts } from "@/lib/hooks/product/product.hook"

function Featured() {
  const { data, isLoading, isError } = useGetFeaturedProducts()
  const featuredProducts = (data?.data as Product[]) || []

  return (
    <HomeWrapper>
      <div>
        <Navbar />
        <div>
          <div className="grid grid-cols-12">
            <div className="col-start-2 col-end-12 py-12">
              <h1 className="text-xl font-medium mb-12">
                Explore featured products
              </h1>
              <div className="flex items-center gap-x-2">
                <Sorting />
                <Filtering />
              </div>
              <div className="grid grid-cols-12">
                <div className="col-start-2 col-end-12">
                  <section className="space-y-12 py-12">
                    <div>
                      {isLoading ? (
                        <div className="grid w-full grid-cols-4 gap-12">
                          {new Array(8).fill(0).map((_, index) => (
                            <ProductCardSkeleton key={index + 1} />
                          ))}
                        </div>
                      ) : featuredProducts.length < 1 || isError ? (
                        <div className="flex items-center justify-center w-full h-full">
                          <NoItemFound />
                        </div>
                      ) : (
                        <div className="grid w-full grid-cols-4 gap-12">
                          {featuredProducts?.map((product: Product) => (
                            <div
                              className="flex justify-center"
                              key={product._id}
                            >
                              <ProductCard data={product} page={1} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default Featured
