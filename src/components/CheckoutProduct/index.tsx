import Image from 'next/image'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

// import AppleImage from 'public/assets/img/apple-macbook-with-chip.png'

type Props = {}

const CheckoutProduct = (props: Props) => {
  return (
    <div className='flex items-center justify-between gap-x-12 border-b'>
      <section className='flex w-full items-start justify-between gap-x-12'>
        <div className='relative h-44 w-44'>
          <Image
            src='/assets/img/apple-macbook-with-chip.png'
            alt='product name'
            width={1000}
            height={1000}
            className=''
          />
        </div>
        <div className='grow-[2] flex-col justify-between gap-x-8 text-xl lg:text-2xl'>
          <h2 className='mb-4 font-semibold'>Macbook air with M1 chip</h2>
          <div className='flex items-center text-text-primary-link'>
            <p className='text-xl font-medium lg:text-2xl'>
              {' '}
              Show product details
            </p>
            <span>
              <ChevronDownIcon className='h-6 w-6' />
            </span>
          </div>
        </div>
        <div className='flex grow items-center gap-x-4 text-xl font-semibold lg:text-2xl'>
          <p>1</p>
          <div className='flex flex-col items-center justify-center gap-4 text-text-primary-link'>
            <span>
              <ChevronUpIcon className='h-8 w-8 cursor-pointer' />
            </span>
            <span>
              <ChevronDownIcon className='h-8 w-8 cursor-pointer' />
            </span>
          </div>
        </div>

        <section className='space-y-4 text-xl lg:text-2xl'>
          <p className='text-[2.5rem] font-black'>$4,000</p>
          <p className='cursor-pointer justify-self-end text-right font-medium text-primary-red-100 hover:underline hover:underline-offset-4'>
            Remove
          </p>
        </section>
      </section>
    </div>
  )
}

export default CheckoutProduct
