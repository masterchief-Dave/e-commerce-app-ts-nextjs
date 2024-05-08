import { useEffect, useState } from "react"
import Head from "next/head"
import { Navbar } from "@/components/Navbar"
import { Header } from "@/components/Header"
import { WeeklyDeals } from "@/components/Deals"
import { ShoppingFixedBag } from "@/components/ShoppingBag"
import { landingPageFeatures } from "@/globals/home"
import { FeaturesCard } from "@/components/Card"
import Testimonials from "@/components/Testimonial"
import { useSearchParams } from "next/navigation"
import axios from "axios"
import useAuth from "@/lib/hooks/useAuth"
import HomeWrapper from "@/components/Layout/Home"
import CategoryCard from "@/components/Card/Category/card"
import ExploreProducts from "@/components/organisms/explore/explore-products"

export default function Home() {
  const [pageIndex, setPageIndex] = useState<number>(1)
  const params = useSearchParams()
  const { setUser } = useAuth()

  // CREATE USE-EFFECT TO CAPTURE THE DATA COMING FROM THE SERVER
  useEffect(() => {
    const name = params?.get("name")
    const email = params?.get("email")
    const token = params?.get("token")
    const id = params?.get("id")
    const photo = params?.get("photo")
    const role = params?.get("role")
    const cart = Number(params?.get("cart"))

    if (name !== undefined && name?.length! > 1) {
      axios.defaults.headers.common["Authorization"] = token
      return setUser({
        email: email ?? "",
        _id: id ?? "",
        name: name ?? "",
        photo: photo ?? "",
        token: token ?? "",
        role: (role as "USER" | "NO USER" | "ADMIN") ?? "NO USER",
        cart: cart ?? 0,
      })
    }
  }, [])

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
        <div>
          <Navbar />
          <div className="w-full flex items-center justify-center"></div>
          <Header />
          <main className="grid grid-cols-12 space-y-12 bg-primary-white py-12">
            <div className="col-span-full mx-auto grid w-full grid-cols-12">
              <div className="col-start-2 col-end-12 space-y-16">
                <section>
                  <div>
                    <CategoryCard />
                  </div>
                </section>

                <section className="weekly-deals-component  bg-white">
                  <WeeklyDeals />
                </section>

                <section>
                  <ExploreProducts />
                </section>

                {/* <section>
                  <h2 className="mb-8 font-bold uppercase text-primary-black-200 text-xl">
                    Featured Categories
                  </h2>
                  <div className="sm:flex sm:flex-col items-center justify-between gap-8 lg:grid lg:grid-cols-2 lg:gap-x-8 xl:grid xl:grid-cols-3 xl:gap-x-12">
                    {!categoriesLoading ? (
                      <>
                        <FeatureCard
                          products={categories?.data?.data?.[0]?.products}
                          category={categories?.data?.data?.[0]?.name as string}
                        />
                        <FeatureCard
                          products={categories?.data?.data?.[1]?.products}
                          category={categories?.data?.data?.[1]?.name as string}
                        />
                        <FeatureCard
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
                </section> */}

                <section className="pt-24 space-y-4">
                  <h2 className="font-medium text-xl uppercase">
                    our services
                  </h2>
                  <div className="grid grid-cols-4 gap-24">
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
                  </div>
                </section>
              </div>
            </div>
          </main>
          {/* testimonial section */}
          <section className="pt-24">
            <h2 className="flex items-center justify-center uppercase text-xl font-medium mb-8">
              Customer Review
            </h2>
            <Testimonials />
          </section>
        </div>
      </HomeWrapper>
      <ShoppingFixedBag />
    </>
  )
}
