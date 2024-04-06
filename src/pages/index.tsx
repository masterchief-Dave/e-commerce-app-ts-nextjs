import { useEffect, useState } from "react"
import Head from "next/head"
import { ShoppingCartIcon } from "@heroicons/react/24/outline"
import { Navbar } from "@/components/Navbar"
import { Header } from "@/components/Header"
import { WeeklyDeals } from "@/components/Deals"
import { Footer } from "@/components/Footer"
import { CategoryCard } from "@/components/Card/Category"
import { ProductCard } from "@/components/Product/Card"
import { ShoppingFixedBag } from "@/components/ShoppingBag"
import {
  CategorySkeleton,
  ProductCardSkeleton,
} from "@/components/SkeletonLoading"
import { landingPageFeatures } from "@/globals/home"
import { FeaturesCard } from "@/components/Card"
import Testimonials from "@/components/Testimonial"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import useAuth from "@/lib/hooks/useAuth"
import {
  useGetCategories,
  useGetProducts,
} from "@/lib/hooks/product/product.hook"
import HomeWrapper from "@/components/Layout/Home"

export default function Home() {
  const [pageIndex, setPageIndex] = useState<number>(1)
  const params = useSearchParams()
  const { user, setUser } = useAuth()

  // CREATE USE-EFFECT TO CAPTURE THE DATA COMING FROM THE SERVER
  useEffect(() => {
    const name = params?.get("name")
    const email = params?.get("email")
    const token = params?.get("token")
    const id = params?.get("id")
    const photo = params?.get("photo")
    const role = params?.get("role")

    if (name !== undefined && name?.length! > 1) {
      axios.defaults.headers.common["Authorization"] = token
      return setUser({
        email: email ?? "",
        _id: id ?? "",
        name: name ?? "",
        photo: photo ?? "",
        token: token ?? "",
        role: (role as "USER" | "NO USER" | "ADMIN") ?? "NO USER",
      })
    }
  }, [])

  const { data: categories, isLoading: categoriesLoading } = useGetCategories()
  // console.log(categories?.data.data)

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
    <>
      <Head>
        <title>Sage-Warehouse</title>
        <meta
          name="description"
          content="Buy Quality and affordable Tech products at the best prices ever!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeWrapper>
        <>
          <Navbar />
          <div className="w-full flex items-center justify-center"></div>
          <Header />
          <main className="grid grid-cols-12 space-y-12 bg-primary-white py-12">
            <div className="col-span-full mx-auto grid w-full grid-cols-12">
              <div className="col-start-2 col-end-12 space-y-12">
                <section>
                  <h2 className="mb-8 font-bold uppercase text-primary-black-200 text-xl">
                    Product Categories
                  </h2>
                  <div className="sm:flex sm:flex-col items-center justify-between gap-8 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:grid xl:grid-cols-3 xl:gap-x-12">
                    {!categoriesLoading ? (
                      <>
                        <CategoryCard
                          products={categories?.data?.data?.[0]?.products}
                          category={categories?.data?.data?.[0]?.name as string}
                        />
                        <CategoryCard
                          products={categories?.data?.data?.[1]?.products}
                          category={categories?.data?.data?.[1]?.name as string}
                        />
                        <CategoryCard
                          products={categories?.data?.data?.[2]?.products}
                          category={categories?.data?.data?.[2]?.name as string}
                        />
                      </>
                    ) : (
                      <>
                        {new Array(3).fill(3).map((_, index) => {
                          return <CategorySkeleton key={index + 1} />
                        })}
                      </>
                    )}

                    {/* show this section only in the lg screen size */}
                    <div className="hidden lg:block lg:space-y-4 xl:hidden">
                      <h3 className="font-semibold text-[20px] text-center">
                        Browse our Category
                      </h3>
                      <p className=" font-normal text-center text-primary-grey-100">
                        Discover endless possibilities. Explore our diverse
                        categories now.
                      </p>
                      <div className="flex items-center justify-center">
                        <ShoppingCartIcon className="text-primary-blue-300 h-16 w-16" />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="weekly-deals-component  bg-white">
                  <WeeklyDeals />
                </section>

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
                              return <ProductCardSkeleton key={index} />
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

                  <div className="flex items-center justify-end gap-x-4 px-8">
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

                <section className="grid grid-cols-4 gap-24">
                  {landingPageFeatures.map((feature, index) => {
                    return (
                      <FeaturesCard
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        img={feature.img}
                      />
                    )
                  })}
                </section>
              </div>
            </div>
          </main>
          {/* testimonial section */}
          <Testimonials />
          <Footer />
        </>
      </HomeWrapper>
      <ShoppingFixedBag />
    </>
  )
}
