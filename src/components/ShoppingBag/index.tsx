import Link from "next/link"
import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import useAuth from "@/lib/hooks/useAuth"
import Spinner from "../molecules/spinner"

export const ShoppingFixedBag = () => {
  const { user, userLoading, isAuthenticated } = useAuth()

  if (userLoading) {
    return <Spinner className="h-5 w-5" />
  }

  if (isAuthenticated === false) {
    return <></>
  }

  return (
    <Link
      href="/cart"
      className="fixed bottom-20 right-32 z-50 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#D1D5DB]  lg:h-[70px] lg:w-[70px]"
    >
      <ShoppingBagIcon className="h-6 w-6 lg:h-10 lg:w-10" />
      <div className="lg:text-md absolute top-0 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-black-100  font-medium text-white lg:h-6 lg:w-6">
        <span>{user?.cart || 0}</span>
      </div>
    </Link>
  )
}
