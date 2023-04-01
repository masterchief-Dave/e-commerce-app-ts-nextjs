import { Navbar } from '@/components/Navbar'

type Props = {}

const cart = (props: Props) => {
  return (
    <div>
      <Navbar />
      <main className='grid grid-cols-12'>
        <section className='col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-12 py-16'>
          <h1 className='font-matter text-[2rem] font-black uppercase'>Cart</h1>
        </section>
      </main>
    </div>
  )
}

export default cart
