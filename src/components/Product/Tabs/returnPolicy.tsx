import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ReceiptRefundIcon } from "@heroicons/react/24/outline"
import Link from "next/link"

type Props = {}

export const ReturnPolicy = (props: Props) => {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Return Policy</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-x-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white">
          <ReceiptRefundIcon className="h-8 w-8 text-primary-link" />
        </div>

        <div>
          <h3 className="font-bold">7 day return guarantee</h3>
          <p className="font-medium text-primary-grey-100">
            For more information visit our{" "}
            <span>
              <Link
                href="/company/shipping-returns"
                className="text-primary-link"
              >
                return policy
              </Link>
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
