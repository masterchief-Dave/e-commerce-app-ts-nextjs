import Link from "next/link"

import { ShoppingBagIcon } from "@heroicons/react/24/solid"
import { useGetCart } from "@/lib/hooks/user/user.hook"

export const ShoppingFixedBag = () => {
  const { data, error, isLoading } = useGetCart()

  const itemsInCart = data?.message === "success" ? data?.data?.length : 0

  return (
    <Link
      href="/cart"
      className="fixed bottom-20 right-20 z-50 flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#D1D5DB]  lg:h-[70px] lg:w-[70px]"
    >
      <ShoppingBagIcon className="h-6 w-6 lg:h-10 lg:w-10" />
      <div className="lg:text-md absolute top-0 right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary-black-100  font-medium text-white lg:h-6 lg:w-6">
        <span>{itemsInCart}</span>
      </div>
    </Link>
  )
}
