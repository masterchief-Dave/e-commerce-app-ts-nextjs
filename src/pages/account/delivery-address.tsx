import { useState } from 'react'
import { AddressBox } from '@/components/Account/addressBox'
import { Footer } from '@/components/Footer'
import { AccountLayout } from '@/components/Layout/Account'
import { AddressForm } from '@/components/Account/addressForm'

type Props = {}

const DeliveryAddress = (props: Props) => {
  const [step, setStep] = useState<number>(1)

  const render = () => {
    if (step === 1) {
      return <AddressBox setState={setStep} />
    } else if (step === 2) {
      return <AddressForm setState={setStep} />
    }
  }

  return (
    <div className='font-matter'>
      <AccountLayout>
        <div>{render()}</div>
      </AccountLayout>
      <Footer />
    </div>
  )
}

export default DeliveryAddress
