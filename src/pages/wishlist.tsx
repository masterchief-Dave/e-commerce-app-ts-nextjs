import BreadCrumb from '@/components/BreadCrumb'
import { Navbar } from '@/components/Navbar'

type Props = {}

const wishlist = (props: Props) => {
  return (
    <div>
      <Navbar />
      <BreadCrumb />
      <main className='grid grid-cols-12 space-y-12 py-16'>
        <section className='col-start-2 col-end-12'>
          <h1 className='font-matter text-[2rem] font-black'>Wishlist</h1>
        </section>
      </main>
    </div>
  )
}

export default wishlist
