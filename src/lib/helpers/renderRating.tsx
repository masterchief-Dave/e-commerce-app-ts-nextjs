import { StarIcon } from "@heroicons/react/24/outline"

type Props = {
  rating: number
  color?: string
}

export const RenderRating = ({ rating, color = "#edab56" }: Props) => {
  return <StarIcon fill={color} className="h-5 w-5 text-[#edab56]" />
}

export const RenderRatingComp = ({ rating, color = "#EEB012" }: Props) => {
  return (
    <div className="flex items-center gap-x-1">
      <p className="flex items-center gap-x-1">
        {new Array(Math.floor(rating)).fill(0).map((_, index) => {
          return (
            <StarIcon
              key={index}
              className="h-5 w-5 #EEB012"
              fill="#EEB012"
              stroke="0"
            />
          )
        })}

        {new Array(5 - Math.floor(rating)).fill(0).map((_, index) => {
          return <StarIcon key={index} className="h-5 w-5 text-[#EEB012]" />
        })}
      </p>
    </div>
  )
}
