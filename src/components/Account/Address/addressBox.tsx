import { useState } from 'react'
import Link from 'next/link'
import { MapPinIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline'
import EditUserAddressModal from '@/components/Modal/EditUserHomeAddress'
import { Button } from '@/components/ui/button'

type Props = Omit<IDelivery, '_id'>

export const AddressBox = ({ city, country, state, street, zipCode }: Props) => {
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <section>
        <header className='flex items-center justify-between border-b p-8'>
          <h1 className='text-xl font-bold lg:text-2xl'>Delivery Address</h1>
          <Link
            href='/account/add-address'
            className='h-fit w-fit rounded-md bg-blue-500 px-4 py-2 text-[1.6rem] font-semibold text-white'
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
                <div className='space-x-8'>
                  <Button className='h-fit w-fit rounded-md px-4 py-2 text-[1.6rem] font-semibold bg-blue-500' onClick={() => setShow(true)}>
                    Edit
                  </Button>

                  <Button className='h-fit w-fit rounded-md px-4 py-2 text-[1.6rem] font-semibold text-white bg-red-500'>
                    Delete
                  </Button>
                </div>
              </div>
            </header>

            <section className='space-y-4 p-8 text-[1.6rem]'>
              <div className='flex items-center gap-x-2'>
                <UserIcon className='h-6 w-6' />
                <p>David Bodunrin</p>
              </div>

              <div className='flex items-center gap-x-2'>
                <MapPinIcon className='h-6 w-6' />
                <p className='truncated'>
                  {street} {city} {state}, {country}
                </p>
              </div>

              <div className='flex items-center gap-x-2'>
                <PhoneIcon className='h-6 w-6' />
                <p>0810-464-8031</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      {show && <EditUserAddressModal state={show} setState={setShow}/>}
    </>
  )
}

