import { MaterialSymbolsRemoveShoppingCart } from "@/globals/icons"
import { Pill } from "./Pill"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "../ui/card"

const NoItemFound = () => {
  return (
    <Card className="max-w-xl flex items-center justify-center w-full h-full">
      <CardContent className="rounded-xl w-fit space-y-8 p-8">
        <div className="flex justify-center">
          <MaterialSymbolsRemoveShoppingCart className="w-8 h-8" />
        </div>

        <article className="flex flex-col items-center justify-center max-w-sm">
          <CardTitle className="font-medium text-[24px]">
            No Products found
          </CardTitle>
          <CardDescription className="text-base text-center font-normal text-primary-grey-100">
            Try changing your filters, or check back later for new products
          </CardDescription>
        </article>

        <CardFooter className="flex items-center justify-center gap-x-4">
          <Pill content="apple" link="apple" />
          <Pill content="watch" link="watch" />
          <Pill content="usb" link="usb" />
          <Pill content="bose" link="bose" />
          <Pill content="samsung" link="samsung" />
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default NoItemFound
