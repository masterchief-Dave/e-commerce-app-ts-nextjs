import Spinner from "@/components/molecules/spinner"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import useAuth from "@/lib/hooks/useAuth"
import CheckoutService from "@/lib/services/checkout/checkout.service"
import type {
  BillingAddressInterface,
  UserCart,
} from "@/lib/types/user/user.type"
import { useRouter } from "next/router"
import { useState } from "react"
import { usePaystackPayment } from "react-paystack"
import { useGetCart } from "../hooks/user/user.hook"
import { errorLogger } from "../utils/logger"

type Props = {
  orders: UserCart[]
  price: number
  isDisabled: boolean
  shippingAddress: BillingAddressInterface
}

const config = {
  reference: new Date().getTime().toString(),
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_API,
}

const onClose = () => {
  // implementation for  whatever you want to do when the Paystack dialog closed.
  // console.log('closed')
}

export const PaystackHook = ({
  orders,
  price,
  shippingAddress,
  isDisabled = true,
}: Props) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const amountToPay = Math.ceil(price)
  const { toast } = useToast()
  const getCartQuery = useGetCart()
  const { user } = useAuth()
  const userId = user?._id as unknown as string
  const data = { ...config, amount: amountToPay }
  const initializePayment = usePaystackPayment({
    amount: data.amount,
    reference: data.reference,
    publicKey: data.publicKey as string,
    email: user?.email!,
    firstname: user?.name.split(" ")[0]!,
    lastname: user?.name.split(" ")[1]!,
    currency: "NGN",
  })

  const onSuccess = () => {
    // Implementation for whatever you want to do with reference and after success call.
    try {
      CheckoutService.checkout({
        orders,
        price,
        reference: config.reference,
        shippingAddress: shippingAddress,
        shippingPrice: 10,
        taxPrice: 10,
        userId,
      })
        .then((response) => {
          if (response.message === "success") {
            setLoading(false)
            toast({
              variant: "success",
              title: "Checkout Success!",
              description:
                "You have successfully placed an order!. Check your email",
            })
            // mutate the getcartquery
            getCartQuery.mutate()
            return router.push({
              pathname: `/order-summary/${response.data._id}`,
            })
          }
          setLoading(false)
          toast({
            variant: "destructive",
            title: "Checkout Failed!",
            description:
              "An Error occured while trying to process checkout. Please try again!",
          })
        })
        .catch((err) => {
          setLoading(false)
          toast({
            variant: "destructive",
            title: "Checkout Failed!",
            description:
              "An Error occured while trying to process checkout. Please try again!",
          })
          errorLogger({
            url: "/checkout",
            message: "Checkout failed",
            err: err,
          })
        })
    } catch (err) {
      setLoading(false)
      toast({
        variant: "destructive",
        title: "Checkout Failed!",
        description:
          "An Error occured while trying to process checkout. Please try again!",
      })
      errorLogger({ url: "/checkout", message: "Checkout failed", err: err })
    }
  }

  return (
    <Button
      className="h-[40px] bg-blue-500 text-white font-medium rounded-md px-8 flex items-center justify-center w-full text-base"
      disabled={loading || shippingAddress?.address?.length <= 1}
      onClick={() => {
        setLoading(true)
        initializePayment(onSuccess, onClose)
      }}
    >
      {loading && <Spinner className="h-6 w-6 text-white" />}
      <span>Place Order</span>
    </Button>
  )
}
