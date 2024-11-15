import Link from "next/link"
import CheckoutProduct from "@/components/CheckoutProduct"
import { Layout } from "@/components/Layout"
import { Navbar } from "@/components/Navbar"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import AuthenticatedModal from "@/components/Modal/AuthenticatedModal"
import { useGetCart } from "@/lib/hooks/user/user.hook"
import { CartSkeleton } from "@/components/skeleton"
import type { UserCart } from "@/lib/types/user/user.type"
import useAuth from "@/lib/hooks/useAuth"
import { Card, CardTitle } from "@/components/ui/card"

const Cart = () => {
  const { data, isLoading } = useGetCart()

  console.log(data?.data)
  return (
    <Layout>
      <div className="mb-24">
        <Navbar />
        <main className="grid grid-cols-12">
          <section className="col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-8 py-12">
            <h1 className="text-3xl font-bold capitalize">Cart</h1>
            {/* cart product design layout and design*/}
            {isLoading ? (
              <div className="flex flex-col">
                {new Array(3).fill(3).map((_, index) => {
                  return <CartSkeleton key={index + 1} />
                })}
              </div>
            ) : data && data.data.length >= 1 ? (
              <ItemInCart cart={data.data} />
            ) : (
              <NoItemInCart />
            )}
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default Cart

const NoItemInCart = () => {
  return (
    <div>
      <main className="grid grid-cols-12">
        <section className="col-start-2 col-end-12 mx-auto w-full max-w-[144rem] space-y-8 py-12">
          <Card className="w-[300px] space-y-8 rounded-[ border bg-[#dedede] p-8">
            <CardTitle className="text-xl">
              Your shopping cart is empty
            </CardTitle>

            <Link
              className="h-fit flex items-center justify-center w-fit rounded-md bg-primary-black-100 px-4 py-2 text-white"
              href="/"
            >
              Continue Shopping
            </Link>
          </Card>
        </section>
      </main>
    </div>
  )
}

const ItemInCart = ({ cart }: { cart: UserCart[] }) => {
  const { isAuthenticated } = useAuth()
  const router = useRouter()
  const [openModal, setOpenModal] = useState(false)
  // const totalPrice = 0

  const totalPrice =
    cart?.length >= 1
      ? cart?.reduce((acc, item) => {
          return item.price + acc
        }, 0)
      : 0

  const handleProceedToCheckout = () => {
    if (isAuthenticated === false) {
      // bring up auth modal and save the redirect because the user should be redirected to the /checkout page
      return setOpenModal(true)
    }

    router.push("/checkout")
  }

  return (
    <>
      <div className="px-12">
        {cart?.map((item: UserCart) => {
          return (
            <CheckoutProduct
              key={item._id}
              id={item.id}
              img={item.image}
              name={item.name}
              price={item.price}
              cartQuantity={item.quantity}
              stock={item.stock}
            />
          )
        })}
      </div>
      <section className="ml-auto max-w-xl space-y-8 px-12 text-base font-normal">
        <div className="flex items-center justify-between font-medium text-xl">
          <p>Total</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <Button
          onClick={handleProceedToCheckout}
          className="rounded-md flex items-center justify-center h-[50px] bg-primary-blue-500 px-24 py-4 text-[1rem] font-medium text-white hover:bg-primary-blue-300"
        >
          Proceed to checkout
        </Button>
      </section>
      {openModal && (
        <AuthenticatedModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </>
  )
}
