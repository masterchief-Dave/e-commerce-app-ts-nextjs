import { useState } from "react"
import { useRouter } from "next/router"

import { Button } from "../ui/button"

export const Sorting = () => {
  const [pathname, setPathname] = useState()
  const path = useRouter().asPath

  // /category/accessories
  // /api/products/getmyproducts?minPrice=2000&minRating=4&productname=apple&sort=-price
  const buildpath = `/api/products/getmyproducts?${path}`

  const sortAsc = () => {}

  const sortDesc = () => {}

  console.log({path})
  return (
    <div className="flex items-center gap-x-2 divide-x">
      <p className="text-[1.6rem] font-medium">Sort By: </p>
      <Button className="text-[1.4rem] font-medium h-12">
        Price - High to Low
      </Button>
      <Button className="text-[1.4rem] font-medium h-12">
        Price - Low to High
      </Button>
    </div>
  )
}
