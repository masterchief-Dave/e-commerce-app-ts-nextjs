import { useState } from "react"
import { useRouter } from "next/router"

import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ChevronDown, Filter } from "lucide-react"
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
    <div className="flex items-center w-full justify-end gap-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="group inline-flex justify-center  font-medium text-gray-700 hover:text-gray-900">
          <Button
            variant="default"
            className="w-max h-[4rem] px-4 bg-transparent text-gray-500 border"
            size="lg"
          >
            Sort
            <ChevronDown className="-mr-1 ml-1 h-10 w-10 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="p-1 min-w-[200px]">
          <DropdownMenuLabel className="">Sort by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {SORT_OPTIONS.map((option) => (
            <DropdownMenuItem
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
                "text-left w-full block px-6 py-4  bg-transparent hover:text-black",
                {
                  "text-gray-900 bg-gray-100": option.value === filter.sort,
                  "text-gray-500": option.value !== filter.sort,
                }
              )}
            >
              {option.name}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {/* <Button className="-m-2 ml-4 p-2 text-gray-400 w-fit bg-transparent rounded-md hover:bg-transparent hover:text-gray-700">
        <Filter />
      </Button> */}
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
