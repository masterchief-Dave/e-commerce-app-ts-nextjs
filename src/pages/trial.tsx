import { SideBar } from '@/components/Layout/Account'
import { ShoppingFixedBag } from '@/components/ShoppingBag'

import { policyData } from '@/globals/policy'
import { descriptionData } from '@/globals/product'
const trial = () => {
  return (
    <div className='p-24'>
      <ShoppingFixedBag />

      {/* <article>
        {descriptionData.split(/\r?\n/).map((text, index) => {
          return <p key={index}>{text}</p>
        })}
      </article> */}

      <SideBar />
    </div>
  )
}

export default trial
