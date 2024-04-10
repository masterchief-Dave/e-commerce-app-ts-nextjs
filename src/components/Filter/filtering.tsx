import useCategoryStore from "@/lib/store/category.store"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const CATEGORY_OPTIONS = [
  { label: "Electronics", value: "electronics" },
  { label: "Headphones", value: "headphones" },
  { label: "Watch", value: "watch" },
  { label: "Accessories", value: "accessories" },
  { label: "Laptops", value: "laptops" },
  { label: "Smartphones", value: "smartphones" },
  { label: "Gaming Consoles", value: "console" },
  { label: "Television", value: "television" },
] as const

function Filtering() {
  const { setParams, params } = useCategoryStore((state) => state)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          aria-label="Filter Categories"
          size="lg"
          disabled={false}
          variant="default"
          className="w-max h-[40px] px-4 bg-transparent text-gray-500 border text-left"
        >
          Filter
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="flex flex-col min-w-[400px] sm:w-[540px] z-[99] font-rubik"
      >
        {" "}
        <SheetHeader className="px-2">
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="border rounded-md p-4 space-y-4">
          <p>Change Product Category</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="border text-gray-400 rounded-md text-left w-full flex items-center h-[40px] px-4 justify-between">
                Select Category{" "}
                <ChevronDownIcon className="-mr-1 ml-1 flex-shrink-0 text-gray-400 group-hover:text-gray-500 w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="z-[999] w-80 font-rubik">
              <DropdownMenuLabel>Product Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {CATEGORY_OPTIONS.map((category) => (
                <DropdownMenuItem
                  key={category.label}
                  onClick={() => {
                    setParams({ name: category.value })
                  }}
                  className={cn(
                    "text-left w-full block px-4 py-2 bg-transparent hover:text-black",
                    {
                      "text-gray-900 bg-gray-100":
                        category.value === params.name,
                      "text-gray-500": category.value !== params.name,
                    }
                  )}
                >
                  {category.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default Filtering
