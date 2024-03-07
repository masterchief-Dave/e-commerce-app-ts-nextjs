import { Skeleton } from "../ui/skeleton"


export const CartSkeleton = () => {
  return (
    <div className="flex items-center mb-24 w-full gap-12">
      <Skeleton className="h-44 w-44 rounded-lg" />
      <div className="flex flex-col gap-8 w-full flex-grow">
        <Skeleton className="h-12 w-2/3" />
        <Skeleton className="h-12 w-[400px]" />
      </div>
    </div>
  )
}