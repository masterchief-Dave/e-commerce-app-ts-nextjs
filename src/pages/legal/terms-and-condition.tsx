import { Layout } from '@/components/Layout'
import { LegalLayout } from '@/components/Layout/legalLayout'
import { Navbar } from '@/components/Navbar'
import { termsAndCondition } from '@/globals/termsAndConditon'

type Props = {}

const TermsAndCondition = (props: Props) => {
  return (
    <div>
      <LegalLayout>
        <div>
          <h1 className='text-xl font-bold uppercase lg:text-2xl'>
            Terms And Condition
          </h1>
          <div>
            {termsAndCondition.split(/\r?\n/).map((text, index) => {
              return (
                <p className='py-2' key={index}>
                  {text}{' '}
                </p>
              )
            })}
          </div>
        </div>
      </LegalLayout>
    </div>
  )
}

export default TermsAndCondition
