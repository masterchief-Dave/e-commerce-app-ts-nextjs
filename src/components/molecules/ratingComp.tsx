import { useState } from "react"
import { Rating } from '@smastrom/react-rating'

interface RatingInterface {
  onChange: (rate: number) => void
  rating: number
  fixed?: boolean
}
const RatingComp = (props: RatingInterface) => {

  return (
    <div className="flex items-center">
      <Rating
        value={props.rating}
        onChange={props.onChange}
        style={{ height: '20px' }}
        readOnly={props.fixed || false}
      />
    </div>
  )
}


export default RatingComp