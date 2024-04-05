import { TruckIcon } from "@heroicons/react/24/outline"

type Props = {}

export const Shipping = (props: Props) => {
  return (
    <div className="flex gap-x-8 ">
      <div className="h-14 w-14 rounded-full flex items-center justify-center bg-white">
        <TruckIcon className="h-8 w-8 text-primary-link" />
      </div>

      <div>
        <h3 className="font-bold">Delivery</h3>
        <p>Estimated delivery time 3-7 days </p>
      </div>
    </div>
  )
}
