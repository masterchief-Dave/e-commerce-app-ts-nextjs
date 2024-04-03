import { useState } from "react"
import { useRouter } from "next/router"

import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

const SORT_OPTIONS = [
  { name: "None", value: "none" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
] as const

export const Sorting = () => {
  const path = useRouter().asPath
  const pathname = path.split("/")[1]
  const productname = path.split("/")[2]
  const categoryname = path.split("")[2]
  const router = useRouter()

  const [filter, setFilter] = useState({
    sort: "none",
  })

  // /category/accessories
  // /api/products/getmyproducts?minPrice=2000&minRating=4&productname=apple&sort=-price
  // http://sage-warehouse-backend.onrender.com/api/v1/products/category?categoryname=${categoryname}
  // let buildpath = `/api/products/getmyproducts/category?categoryname=${categoryname}&sort=${}`

  // {{url}}/products?categoryname=laptops&sort=-price&sort=price

  const sortAsc = () => {
    if (pathname === "search") {
      const buildpath = `/search/${productname}&sort=price`
      return router.push(buildpath)
    }
    const buildpath = `/category/${categoryname}&sort=price`
    router.push(buildpath)
  }

  const sortDesc = () => {
    if (pathname === "search") {
      const buildpath = `/search/${productname}&sort=-price`
      return router.push(buildpath)
    }
    const buildpath = `/category/${categoryname}&sort=-price`
    router.push(buildpath)
  }

  return (
    <div className="flex items-center w-full justify-end gap-x-2 divide-x">
      <DropdownMenu>
        <DropdownMenuTrigger className="group inline-flex justify-center text-[1.6rem] font-medium text-gray-700 hover:text-gray-900">
          Sort By:{" "}
          <ChevronDown className="-mr-1 ml-1 h-10 w-10 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {SORT_OPTIONS.map((option) => (
            <Button
              key={option.value}
              onClick={() => {
                setFilter((prev) => {
                  return {
                    ...prev,
                    sort: option.value,
                  }
                })
              }}
              className={cn(
                "text-left w-full block px-6 py-4 text-[1.6rem] bg-transparent hover:text-black",
                {
                  "text-gray-900 bg-gray-100": option.value === filter.sort,
                  "text-gray-500": option.value !== filter.sort,
                }
              )}
            >
              {option.name}
            </Button>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <Button className="-m-2 ml-4 p-2 text-gray-400 w-fit"></Button>
    </div>
  )
}

/**
 *  <Button
        className="text-[1.4rem] w-max font-medium h-12"
        onClick={() => sortDesc()}
      >
        Price - High to Low
      </Button>
      <Button
        className="text-[1.4rem] w-fit font-medium h-12"
        onClick={() => sortAsc()}
      >
        Price - Low to High
      </Button>
 */
