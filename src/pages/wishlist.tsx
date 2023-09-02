import BreadCrumb from '@/components/BreadCrumb'
import { Footer } from '@/components/Footer'
import { Layout } from '@/components/Layout'
import { Navbar } from '@/components/Navbar'
import { ProductCard } from '@/components/Product/Card'
import { useAppSelector } from '@/hooks/reduxhooks'

type Props = {}

const Wishlist = (props: Props) => {

  const wishlist = useAppSelector((state) => state.wishlist.value)
  console.log({ wishlist })

  return (
    <Layout>
      <div>
        <Navbar />
        <BreadCrumb />
        <main className='grid grid-cols-12 space-y-12 py-16 min-h-screen'>
          <section className='col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-12'>
            <h1 className='font-jost text-[2rem] font-black'>Wishlist</h1>

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
