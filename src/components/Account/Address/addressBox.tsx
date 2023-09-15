import { MapPinIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

type Props = Omit<IDelivery, '_id'>

export const AddressBox = ({ city, country, state, street, zipCode }: Props) => {
  return (
    <section>
      <header className='flex items-center justify-between border-b p-8'>
        <h1 className='text-xl font-black lg:text-2xl'>Delivery Address</h1>

        <Link
          href='/account/add-address'
          className='h-fit w-fit rounded-md bg-primary-red-100 px-4 py-2 text-[1.6rem] font-semibold text-white'
          id='newAddress'
        >
          {' '}
          Add new Address{' '}
        </Link>
      </header>
      <div className='grid grid-cols-2 gap-8 p-8'>
        <div className='border'>
          <header className='border-b p-4'>
            <div className='flex justify-end'>
              <div>
                <button className='h-fit w-fit rounded-md px-4 py-2 text-[1.6rem] font-semibold'>
                  Edit
                </button>

                <button className='h-fit w-fit rounded-md px-4 py-2 text-[1.6rem] font-semibold text-primary-red-100'>
                  Delete
                </button>
              </div>
            </div>
          </header>

          <section className='space-y-4 p-8'>
            <div className='flex gap-x-2'>
              <UserIcon className='h-6 w-6' />
              <p>David Bodunrin</p>
            </div>

            <div className='flex gap-x-2'>
              <MapPinIcon className='h-6 w-6' />
              <p className='truncated'>
                {street} {city} {state}, {country}
              </p>
            </div>

            <div className='flex gap-x-2'>
              <PhoneIcon className='h-6 w-6' />
              <p>0810-464-8031</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

