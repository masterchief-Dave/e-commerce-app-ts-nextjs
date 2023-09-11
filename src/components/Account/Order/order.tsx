import Image from 'next/image'

type Props = {}

export const Order = (props: Props) => {
  return (
    <div className='w-full p-8 text-[1.6rem]'>
      <section className='space-y-8'>
        <div className='w-full'>
          <header className='flex w-full items-center justify-between'>
            <h2 className='font-semibold'>
              Order Date: <span className='font-light'> 29 Sept 2023</span>
            </h2>
            <button className='h-fit w-fit bg-primary-black-100 px-4 py-2 text-[1.6rem] font-semibold text-white'>
              View Details
            </button>
          </header>
        </div>

        <div className='flex justify-between'>
          <div>
            <p>Total: #67,300</p>
            <p>Order No: F75A715AH</p>
            <p></p>
          </div>

          <div>
            <h3>Delivery Address</h3>
            <p>Ekiti state</p>
          </div>
        </div>

        <div>
          <Image
            src='/assets/img/airpod-landscape-1.png'
            alt='printer'
            className='h-[10rem] w-[10rem] object-cover'
            width={1000}
            height={1000}
          />
        </div>
      </section>
    </div>
  )
}
