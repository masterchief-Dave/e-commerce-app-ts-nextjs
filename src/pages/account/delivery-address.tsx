import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import axios from 'axios'

import { AddressBox } from '@/components/Account/Address/addressBox'
import { Footer } from '@/components/Footer'
import { AccountLayout } from '@/components/Layout/Account'

type Props = {
  address: IDelivery[] | null
}

const DeliveryAddress = (props: Props) => {
  return (
    <div className=''>
      <AccountLayout>
        <>
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
        </>
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