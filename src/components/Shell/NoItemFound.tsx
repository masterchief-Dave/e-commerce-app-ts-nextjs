import { MaterialSymbolsRemoveShoppingCart } from "@/globals/icons"
import { Pill } from "./Pill"

const NoItemFound = () => {
  return (
    <div className="col-start-2 col-end-12 flex items-center justify-center w-full h-full">
      <div className="border rounded-2xl w-fit space-y-8 p-8 shadow-sm">
        <div className="flex justify-center">
          <MaterialSymbolsRemoveShoppingCart className="w-8 h-8" />
        </div>

        <article className="flex flex-col items-center justify-center max-w-sm">
          <h4 className="font-medium text-[24px]">No Products found</h4>
          <p className="text-base text-center font-normal text-primary-grey-100">
            Try changing your filters, or check back later for new products
          </p>
        </article>

        <section className="flex items-center justify-center gap-x-4">
          <Pill content="apple" link="apple" />
          <Pill content="watch" link="watch" />
          <Pill content="usb" link="usb" />
          <Pill content="bose" link="bose" />
          <Pill content="samsung" link="samsung" />
        </section>
      </div>
    </div>
  )
}

export default NoItemFound
