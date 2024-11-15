import { useState } from "react"
import Image from "next/image"
import { CheckIcon, HeartIcon, StarIcon } from "@heroicons/react/24/outline"

type Props = {
  key: number
  data: BestDeals
}

export const DealCard = ({ key, data }: Props) => {
  const { id, name, img, rating, price, formerPrice } = data

  const [like, setLike] = useState<boolean>(false)

  const handleLike = () => {
    setLike(!like)
  }

  return (
    <div
      className="flex items-start gap-4 border-r py-8 px-8"
      key={key}
      id={id.toString()}
    >
      <div className="h-full w-[170px] rounded-md">
        <Image
          src={img}
          alt={name}
          width={700}
          height={700}
          className="rounded-md"
        />
      </div>
      <div className="space-y-4">
        <p className=" font-medium text-[#444]">{name}</p>
        <div className="flex gap-1">
          {[0, 0, 0, 0].map((_, index: number) => {
            return (
              <StarIcon
                key={index}
                className="h-4 w-4 text-[#edab56]"
                fill="#edab56"
              />
            )
          })}
        </div>
        <div className="flex gap-4  font-bold">
          <p>${price}</p>
          <p className="text-primary-white-200 line-through">${formerPrice}</p>
        </div>
        <div className="flex gap-4">
          <div className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-[#d9d9d9] hover:bg-primary-blue-400">
            <CheckIcon className="h-6 w-6 text-[#fff]" />
          </div>
          <div
            className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center bg-[#d9d9d9] hover:bg-primary-blue-400"
            onClick={handleLike}
          >
            <HeartIcon
              className="h-5 w-5 text-[#fff]"
              fill={like ? "#000" : "none"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
