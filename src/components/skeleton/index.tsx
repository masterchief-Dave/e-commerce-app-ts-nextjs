import { Button } from "../ui/button"
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

export const BillingInfoSkeleton = () => {
  return (
    <div className="flex flex-col items-start w-full">
      <Skeleton className="w-full" />
      <section className="p-8 w-full">
        <div className="flex flex-col w-1/2">
          <div className="w-full h-64 min-h-64 border">
            <div className="flex w-full justify-end p-4 space-x-4 border-b">
              <Button className="bg-[#000]/10 w-28"></Button>
              <Button className="bg-[#000]/10 w-28"></Button>
            </div>
            <div className="space-y-4 p-8 w-full">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-10 w-1/2" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export const OrderSummarySkeleton = () => {
  return (
    <section className="grid grid-cols-12 h-screen w-full">
      <div className="col-start-1 col-end-8 space-y-12 p-32">
        <div className="flex flex-col gap-8">
          <Skeleton className="h-10 w-52" />
          <Skeleton className="h-10 w-40" />
        </div>

        <div className="space-y-12">
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
        </div>

        <div className="flex justify-between">
          <Skeleton className="h-20 w-40" />
          <Skeleton className="h-20 w-40" />
        </div>
      </div>
      <div className="col-start-8 col-end-13 space-y-8 py-72 px-32 bg-[#FAFAFA]">
        <div>
          <Skeleton className="h-40 w-40" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>
    </section>
  )
}

export const OrderSkeleton = () => {
  return (
    <section className="p-8 space-y-8">
      <div>
        <Skeleton className="h-10 w-52" />
      </div>

      <div>
        <Skeleton className="h-10 w-full" />
      </div>

      <section className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          <Skeleton className="h-10 w-1/2" />
          <Skeleton className="h-10 w-full" />
        </div>
        <div>
          <Skeleton className="h-32 w-32" />
        </div>
      </section>
    </section>
  )
}

export const ReviewSkeleton = () => {
  return (
    <section className="grid grid-cols-[5rem_1fr] gap-8">
      <Skeleton className="rounded-full w-[200px]" />
      <div className="flex flex-col gap-8 w-full">
        <Skeleton className="h-10 w-full" />
        <div className="flex flex-col gap-4 w-full">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-10 w-full" />
        </div>
      </div>
    </section>
  )
}

export const WishlistSkeleton = () => {
  return (
    <section className="grid grid-cols-4 gap-12">
      {new Array(4).fill(1).map((_, index) => {
        return (
          <div className="space-y-4 p-8 rounded-lg border" key={index + 1}>
            <Skeleton className="h-44 w-full" />
            <Skeleton className="h-10 w-full" />
            <div className="flex space-y-2 flex-col items-center justify-center">
              <Skeleton className="h-10 w-1/2" />
              <Skeleton className="h-10 w-1/2" />
            </div>
            <Skeleton className="h-10 w-full border" />
          </div>
        )
      })}
    </section>
  )
}
