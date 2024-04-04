import { ShieldCheckIcon } from "@heroicons/react/24/outline"

type Props = {}

export const Warranty = (props: Props) => {
  return (
    <div className="flex gap-x-8 ">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
        <ShieldCheckIcon className="h-8 w-8 text-primary-link" />
      </div>

      <div>
        <h3 className="font-bold">Warranty Terms</h3>
        <p>3 months</p>
      </div>
    </div>
  )
}
