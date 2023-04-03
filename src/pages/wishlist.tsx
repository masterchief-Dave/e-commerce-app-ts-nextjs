import BreadCrumb from '@/components/BreadCrumb'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { ProductCard } from '@/components/Product/Card'

type Props = {}

const wishlist = (props: Props) => {
  return (
    <div>
      <Navbar />
      <BreadCrumb />
      <main className='grid grid-cols-12 space-y-12 py-16'>
        <section className='col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-12'>
          <h1 className='font-matter text-[2rem] font-black'>Wishlist</h1>

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
  )
}

export default wishlist

const NoItemInWishList = () => {
  return <section className=''>no items in your wishlist yet</section>
}
