import { Button } from "../ui/button"
import { DropdownMenu, DropdownMenuTrigger } from "../ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

function Filtering() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          aria-label="Filter Categories"
          size="lg"
          disabled={false}
          variant="default"
          className="w-max h-[4rem] px-4 bg-transparent text-gray-500 border"
        >
          Filter
        </Button>
        <SheetContent
          side="right"
          className="flex flex-col min-w-[400px] sm:w-[540px]"
        >
          {" "}
          <SheetHeader className="px-2">
            <SheetTitle>Filters</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  )
}

export default Filtering
