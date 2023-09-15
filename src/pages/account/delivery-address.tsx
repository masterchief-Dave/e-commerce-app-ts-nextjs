import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'

import { AddressBox } from '@/components/Account/Address/addressBox'
import { Footer } from '@/components/Footer'
import { AccountLayout } from '@/components/Layout/Account'
import { AddressForm } from '@/components/Account/Address/addressForm'
import axios from 'axios'

type Props = {
  address: IDelivery[] | null
}

const DeliveryAddress = (props: Props) => {
  const [step, setStep] = useState<number>(1)

  const render = () => {
    if (step === 1) {
      return (
        <div>
          {props.address?.map((address) => {
            return <AddressBox
              key={address._id}
              street={address.street}
              city={address.city}
              country={address.country}
              state={address.state}
              zipCode={address.zipCode}
            />
          })}
        </div>
      )
    } else if (step === 2) {
      return <AddressForm />
    }
  }

  return (
    <div className=''>
      <AccountLayout>
        <div>{render()}</div>
      </AccountLayout>
      <Footer />
    </div>
  )
}

export default DeliveryAddress

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const session = await getSession({ req: context.req })
  let data

  if (!session) {
    return {
      props: {
        address: null
      }
    }
  }

  const response = await axios.get(`https://sage-warehouse-backend.onrender.com/api/v1/shipping/${session._id}`)
  data = response.data

  return {
    props: {
      address: data.address
    }
  }
}