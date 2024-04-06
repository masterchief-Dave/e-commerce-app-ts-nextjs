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
import useCategoryStore from "@/lib/store/category.store"

const SORT_OPTIONS = [
  { name: "None", value: "none" },
  { name: "Price: Low to High", value: "price-asc" },
  { name: "Price: High to Low", value: "price-desc" },
] as const

export const Sorting = () => {
  const path = useRouter().asPath
  const { setParams, params } = useCategoryStore((state) => state)

  const [filter, setFilter] = useState({
    sort: "none",
  })

  return (
    <div className="">
      <DropdownMenu>
        <DropdownMenuTrigger
          className="group inline-flex justify-center font-medium text-gray-700 hover:text-gray-900"
          asChild
        >
          <Button
            aria-label="Sort Categories"
            variant="default"
            className="w-max h-[40px] px-4 bg-transparent text-gray-500 border"
            size="lg"
          >
            Sort
            <ChevronDown className="-mr-1 ml-1 h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-gray-500" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="p-1 min-w-[200px]">
          <DropdownMenuLabel className="">Sort by</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {SORT_OPTIONS.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => {
                setParams({ price: option.value })
                setFilter((prev) => {
                  return {
                    ...prev,
                    sort: option.value,
                  }
                })
              }}
              className={cn(
                "text-left w-full block px-4 py-2  bg-transparent hover:text-black",
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
