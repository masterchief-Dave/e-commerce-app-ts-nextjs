import { useState } from "react"
import { useRouter } from "next/router"

import { Button } from "../ui/button"

export const Sorting = () => {
  const path = useRouter().asPath
  const pathname = path.split('/')[1]
  const productname = path.split('/')[2]
  const categoryname = path.split('')[2]
  const router = useRouter()

  // console.log(productname)


  // /category/accessories
  // /api/products/getmyproducts?minPrice=2000&minRating=4&productname=apple&sort=-price
  // http://sage-warehouse-backend.onrender.com/api/v1/products/category?categoryname=${categoryname}
  // let buildpath = `/api/products/getmyproducts/category?categoryname=${categoryname}&sort=${}`

  // {{url}}/products?categoryname=laptops&sort=-price&sort=price

  const sortAsc = () => {
    if(pathname === 'search'){
      const buildpath = `/search/${productname}&sort=price`
      return router.push(buildpath)
    }
    const buildpath = `/category/${categoryname}&sort=price`
    router.push(buildpath)
  }

  const sortDesc = () => {
    if(pathname === 'search'){
      const buildpath = `/search/${productname}&sort=-price`
      return router.push(buildpath)
    }
    const buildpath = `/category/${categoryname}&sort=-price`
    router.push(buildpath)
  }

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
