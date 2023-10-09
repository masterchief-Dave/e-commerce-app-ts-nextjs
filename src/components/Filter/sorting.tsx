import { Button } from "../ui/button"

export const Sorting = () => {
  return (
    <div className="flex items-center gap-x-1 divide-x">
      <p className="text-[1.8rem] font-medium">Sort By: </p>
      <Button className="text-[1.4rem] font-medium h-12">
        Price - High to Low
      </Button>
      <Button className="text-[1.4rem] font-medium h-12">
        Price - Low to High
      </Button>
    </div>
  )
}
