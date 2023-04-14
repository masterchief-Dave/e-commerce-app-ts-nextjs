import { SideBar } from '@/components/Layout/Account'
import { ShoppingFixedBag } from '@/components/ShoppingBag'

import { policyData } from '@/globals/policy'
import { descriptionData } from '@/globals/product'
import useMediaQuery from '@/hooks/useMediaQuery'

const Trial = () => {
  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')

  // console.log({ isAboveMediumScreen })

  return (
    <div className='p-24'>
      <ShoppingFixedBag />

      {/* <article>
        {descriptionData.split(/\r?\n/).map((text, index) => {
          return <p key={index}>{text}</p>
        })}
      </article> */}

      {/* <SideBar /> */}
    </div>
  )
}

export default Trial
