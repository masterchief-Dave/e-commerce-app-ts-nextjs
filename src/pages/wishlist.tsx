import BreadCrumb from '@/components/BreadCrumb'
import { Footer } from '@/components/Footer'
import { Layout } from '@/components/Layout'
import { Navbar } from '@/components/Navbar'
import { ProductCard } from '@/components/Product/Card'
import { useGetLikedProducts } from "@/lib/hooks/user/user.hook"
import { useState } from "react"


type Props = {}

const Wishlist = (props: Props) => {
  const { data, isLoading } = useGetLikedProducts()
  const [breadcrumbs, setBreadcrumbs] = useState<{ title: string, path: string }[]>([
    { title: "Product", path: "/product" },
    { title: "", path: "" }
  ])


  return (
    <Layout>
      <div>
        <Navbar />
        <BreadCrumb breadcrumbs={[]} />
        <main className='grid grid-cols-12 space-y-12 py-16 min-h-screen'>
          <section className='col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-12'>
            <h1 className='text-3xl font-semibold'>Wishlist</h1>

            <section>
              {/* <ProductCard img='' productName='' productPrice='' /> */}

              <div className=''>
                <NoItemInWishList />
              </div>
            </section>
          </section>
        </main>
        <Footer />
      </div>
    </Layout>
  )
}

export default Wishlist

const NoItemInWishList = () => {
  return <section className='min-h-screen'>no items in your wishlist yet</section>
}
