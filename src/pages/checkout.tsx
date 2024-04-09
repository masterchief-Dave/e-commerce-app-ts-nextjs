import { LockClosedIcon } from "@heroicons/react/24/solid"
import { useEffect, useState } from "react"

import { Navbar } from "@/components/Navbar"
import PaymentAccordion from "@/components/Accordion/paymentAccordion"
import { BillingAddress } from "@/components/Accordion/billingAddressAccordion"
import { PaystackHook } from "@/lib/helpers/paystack"

import Link from "next/link"
import Image from "next/image"
import CheckoutProduct from "@/components/CheckoutProduct"
import { useRouter } from "next/router"
import SWLogo from "public/assets/logo/svg/logo-no-background.svg"
import {
  useGetCart,
  useGetDefaultBillingAddress,
} from "@/lib/hooks/user/user.hook"
import type {
  BillingAddressInterface,
  UserBillingInfo,
  UserCart,
} from "@/lib/types/user/user.type"
import useShippingAddress from "@/lib/store/shipping.store"
import { CheckoutSummarySkeleton } from "@/components/skeleton"

const styles = {
  sectionHeader: `font-semibold text-lg`,
  priceHeader: `font-medium text-sm`,
  priceText: `font-normal text-sm`,
}

const Checkout = () => {
  const [disable, setDisable] = useState(true)
  const [billingAddress, setBillingAddress] = useState<string>("")
  const getCartQuery = useGetCart()
  const { shippingAddress } = useShippingAddress()
  const { data } = useGetDefaultBillingAddress()
  const totalPrice = getCartQuery.data?.data.reduce((acc, cart) => {
    return acc + cart.price
  }, 0)
  const shippingFee = 10
  const taxFee = 10
  const amount = (totalPrice as number) + shippingFee + taxFee
  const router = useRouter()
  /**
   * THE billing address can either be in the global state or the shipping address the user has created earlier,
   * how to choose =>
   *
   */
  const checkoutAddress =
    billingAddress === "savedAddress"
      ? (data as UserBillingInfo)
      : shippingAddress

  if (getCartQuery.isLoading) {
    return <CheckoutSummarySkeleton />
  }

  const checkoutSummary = getCartQuery?.data?.data || []

  if (checkoutSummary.length < 1) {
    return (window.location.href = "/")
  }

  return (
    <div>
      <header className="grid grid-cols-12 border-b py-4">
        <h1 className="font-bold text-xl col-span-full px-24">
          <Link href="/">
            <Image src={SWLogo} alt="Brand Logo" height={50} width={50} />
          </Link>
        </h1>
      </header>
      <div className="relative grid grid-cols-12">
        <div className="col-start-1 col-end-13 min-h-screen grid grid-cols-12 py-24 md:col-start-1 md:col-end-8">
          <div className="col-start-2 col-end-12 space-y-12 p-2">
            <h1 className="text-2xl font-bold">Checkout</h1>
            <div className="space-y-4">
              <h2 className={styles.sectionHeader}>Billing Address</h2>
              <BillingAddress
                setBillingAddress={setBillingAddress}
                billingAddress={billingAddress}
              />
            </div>

            {/* the beginning of payment methods */}
            {/* <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <h3 className={styles.sectionHeader}>Payment methods</h3>
                <div className='flex items-center gap-8'>
                  <p>Secured Connection</p>
                  <LockClosedIcon className='h-8 w-8' />
                </div>
              </div> */}

            {/* <div>
                <PaymentAccordion />
              </div> */}
            {/* </div> */}
            {/* the end of payment methods */}

            <div className="space-y-4">
              <h2 className={styles.sectionHeader}>Your Shopping Cart</h2>
              <div>
                {/* check if item is in cart */}
                {getCartQuery.data?.data.map((item: UserCart) => {
                  return (
                    <CheckoutProduct
                      key={item._id}
                      id={item._id}
                      img={item.image}
                      name={item.name}
                      price={item.price}
                      cartQuantity={item.quantity}
                    />
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-start-1 col-end-13 bg-[#F3F6F8] min-h-screen p-4 md:col-start-8 md:col-end-13">
          <div className="sticky top-[10rem] grid grid-cols-12 py-[5rem]">
            <div className=" col-start-3 col-end-11 lg:w-[30rem] lg:max-w-[30rem]">
              <h2 className="mb-8 text-[2rem] font-bold">Summary</h2>
              <article className="mb-[5rem] space-y-8">
                <div className="border-b space-y-3 py-4">
                  <div className="text-former-price-text flex justify-between">
                    <p className="">Original Price</p>
                    <p className="text-base font-semibold">
                      {" "}
                      ${totalPrice?.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">Shipping</p>
                    <p className="text-base font-semibold">
                      ${shippingFee.toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="">Tax</p>
                    <p className="text-base font-semibold">
                      ${taxFee.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <p className="">Total</p>
                  <p className="text-base font-semibold">${amount}</p>
                </div>

                <p className="text-sm font-normal text-justify">
                  By completing your purchase you agree to these Sage-Warehouse
                  terms and condition
                </p>

                <PaystackHook
                  price={amount}
                  orders={getCartQuery?.data?.data || []}
                  shippingAddress={checkoutAddress}
                  isDisabled={disable}
                />

                <div className="flex items-center gap-x-8">
                  <p className="text-former-price-text w-full text-center text-sm">
                    30 days money back guarantee
                  </p>
                  <LockClosedIcon className="h-8 w-8" />
                </div>
              </article>
            </div>
          </div>
        </div>
        h
      </div>
    </div>
  )
}

export default Checkout
