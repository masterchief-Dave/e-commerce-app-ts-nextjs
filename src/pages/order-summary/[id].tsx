import { OrderSummarySkeleton } from "@/components/skeleton"
import { Button } from "@/components/ui/button"
import { useGetOrderSummary } from "@/lib/hooks/checkout/checkout.hook"
import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/outline"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import Logo from "public/assets/celebrate.svg"

const OrderSummary = () => {
  const params = useParams()

  const { data, isLoading } = useGetOrderSummary(params?.id as string)

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <OrderSummarySkeleton />
      </div>
    )
  }

  return (
    <div className="">
      <Head>
        <title>Thank you! - Sage-Warehouse</title>
      </Head>

      <main className="grid grid-cols-12 min-h-screen">
        <section className="col-start-1 col-end-8 py-32 px-24 space-y-12">
          <h1 className="text-2xl font-bold">Sage-Warehouse</h1>
          <div className="flex gap-x-12">
            <div className="h-12 w-12 flex items-center justify-center rounded-full border border-black">
              <CheckIcon className="h-8 w-8" />
            </div>
            <div className="">
              <h3 className="font-medium ">Thank You!</h3>
              <div className="flex items-center gap-x-2">
                <p className="font-medium ">Order</p>
                <span className=" text-primary-grey-300">
                  #{data?.paymentInfo?.reference}
                </span>
              </div>
            </div>
          </div>

          <div className="border rounded-xl p-6 divide-y">
            <div className="space-y-4 py-6">
              <h3 className=" text-primary-grey-300 font-medium flex items-center">
                Your order is confirmed{" "}
                <CheckBadgeIcon className="text-green-500 w-5 h-5" />
              </h3>
              <p className="">
                We've accepted your order, and we're getting it ready. Come back
                to this page for updates on your shipment status.
              </p>
            </div>
            <div className="py-6 space-y-4 ">
              <h3 className="font-medium text-primary-grey-300">
                Order Tracking Number
              </h3>
              {data?._id}
            </div>
          </div>

          <div className="border rounded-xl space-y-4 p-6">
            <h3 className=" font-medium text-primary-grey-300">
              Order updates
            </h3>
            <p className="">
              You'll get shipping and delivery updates by email and text.
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className=" gap-x-1 font-medium flex items-center">
              <p>Need help?</p> <p className="text-blue-500">Contact us</p>
            </div>
            <Button asChild className="w-fit">
              <Link
                href="/"
                className="h-[3rem] flex items-center justify-center  font-medium bg-blue-500 rounded-md px-8 py-2 text-white"
              >
                Continue Shopping
              </Link>
            </Button>
          </div>
        </section>
        <section className="col-start-8 col-end-13 py-32 px-24 bg-[#FAFAFA] sticky top-0 left-0 right-0">
          <div className="flex items-center justify-start mb-12">
            <Image src={Logo} className="object-cover" alt="success" />
          </div>

          <div className="col-start-3 col-end-11">
            <h2 className="mb-8 text-xl font-bold">Summary</h2>
            <article className="mb-[5rem] space-y-8 w-[60%]">
              <div className="border-b space-y-3 py-4">
                <div className="flex items-center justify-between">
                  <p className="text-base text-primary-grey-300">Shipping</p>
                  <p className="font-medium text-slate-500">
                    {data?.shippingPrice.toFixed(2)}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-primary-grey-300">Tax</p>
                  <p className="font-medium text-slate-500">
                    {data?.taxPrice.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between">
                <p className="text-primary-grey-300">Total</p>
                <p className="font-semibold text-slate-500">
                  {data?.totalPrice.toFixed(2)}
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default OrderSummary
