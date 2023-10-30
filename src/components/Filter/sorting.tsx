import { useState } from "react"
import { useRouter } from "next/router"

import { Button } from "../ui/button"

export const Sorting = () => {
  const path = useRouter().asPath
  const categoryname = path.split('/')[2]
  const router = useRouter()


  // /category/accessories
  // /api/products/getmyproducts?minPrice=2000&minRating=4&productname=apple&sort=-price
  // http://sage-warehouse-backend.onrender.com/api/v1/products/category?categoryname=${categoryname}
  // let buildpath = `/api/products/getmyproducts/category?categoryname=${categoryname}&sort=${}`

  // {{url}}/products?categoryname=laptops&sort=-price&sort=price

  const sortAsc = () => {
    // const buildpath = `/category/${categoryname}&sort=price`
    const buildpath = `/category/${categoryname}&sort=price`

    router.push(buildpath)
  }

  const sortDesc = () => {
    const buildpath = `/category/${categoryname}&sort=-price`
    router.push(buildpath)
  }

  console.log({path})
  return (
    <div className="flex items-center gap-x-2 divide-x">
      <p className="text-[1.6rem] font-medium">Sort By: </p>
      <Button className="text-[1.4rem] font-medium h-12"onClick={() => sortDesc()}>
        Price - High to Low
      </Button>
      <Button className="text-[1.4rem] font-medium h-12" onClick={() => sortAsc()}>
        Price - Low to High
      </Button>
    </div>
  )
}
