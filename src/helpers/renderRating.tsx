import { StarIcon } from "@heroicons/react/24/outline"

type Props = {
  rating: number
  color: string
}

export const RenderRating = ({ rating, color = '#edab56' }: Props) => {
  return (
    <StarIcon fill={color} className='h-8 w-8 text-[#edab56]' />
  )
}