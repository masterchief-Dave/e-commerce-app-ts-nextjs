import { LegalLayout } from '@/components/Layout/legalLayout'
import { policyData } from '@/globals/policy'

type Props = {}

const PrivacyPolicy = (props: Props) => {
  return (
    <div>
      <LegalLayout>
        <div>
          <h1 className='text-xl font-black uppercase lg:text-2xl'>
            Privacy Policy
          </h1>
          {policyData.split(/\r?\n/).map((text, index) => {
            return (
              <p key={index} className='py-2'>
                {text}
              </p>
            )
          })}
        </div>
      </LegalLayout>
    </div>
  )
}

export default PrivacyPolicy
