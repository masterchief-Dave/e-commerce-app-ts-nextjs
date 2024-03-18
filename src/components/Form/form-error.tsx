import { AlertTriangleIcon } from "lucide-react"

interface Props {
  message: string
}

const FormError = ({ message }: Props) => {
  return (
    <div className="bg-red-300/75 p-6 rounded-md flex items-center gap-x-2 text-base text-red-900">
      <AlertTriangleIcon className="h-8 w-8 text-red-900" />
      <p className="text-[1.6rem]">{message}</p>
    </div>
  )
}

export default FormError