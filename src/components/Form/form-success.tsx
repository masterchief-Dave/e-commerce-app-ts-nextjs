import { BadgeCheckIcon } from "lucide-react"

interface Props {
  message: string
}

const FormSuccess = ({ message }: Props) => {
  return (
    <div className="bg-green-300/40 p-6 rounded-md flex items-center gap-x-4 text-base text-green-900">
      <BadgeCheckIcon className="h-8 w-8" />
      <p className="text-[1.6rem]">{message}</p>
    </div>
  )
}

export default FormSuccess