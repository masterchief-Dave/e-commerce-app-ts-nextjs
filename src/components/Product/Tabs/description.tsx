type Props = {}

import { descriptionData } from '@/globals/product'

export const Description = (props: Props) => {
  return (
    <div className='text-[1.4rem]'>
      {descriptionData.split(/\r?\n/).map((text, index) => {
        return (
          <p key={index} className='py-2'>
            {text}
          </p>
        )
      })}
    </div>
  )
}
