import Image from "next/image"
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline"
import { useRouter } from "next/router"
import useSWR from "swr"
import {
  useDecreaseItemInCart,
  useIncreaseItemInCart,
  useRemoveItemIncart,
} from "@/lib/hooks/product/product.hook"

type Props = {
  id: string
  img: string
  name: string
  price: number
  cartQuantity: number
  stock?: number
}

const CheckoutProduct = ({
  img,
  name,
  price,
  cartQuantity,
  id,
  stock,
}: Props) => {
  const router = useRouter()

  const increaseItemQuery = useIncreaseItemInCart()
  const decreaseItemQuery = useDecreaseItemInCart()
  const removeItemQuery = useRemoveItemIncart()

  // checking the item quantity on the server
  // @ts-ignore
  const fetcher = (...args) => fetch(...args).then((res) => res.json())

  // const { data } = useSWR(`https://sage-warehouse-backend.onrender.com/api/v1/products/${id}`, fetcher, { refreshInterval: 1000 })

  const handleIncreaseItemQuantity = () => {
    increaseItemQuery.trigger(
      { id: id },
      {
        optimisticData: increaseItemQuery.data && cartQuantity + 1,
        rollbackOnError: true,
      }
    )
  }

  const handleDecreaseItemQuantity = () => {
    decreaseItemQuery.trigger(
      { id: id },
      {
        optimisticData: decreaseItemQuery.data && cartQuantity - 1,
        rollbackOnError: true,
      }
    )
  }

  const handleRemoveItemFromCart = () => {
    removeItemQuery.trigger({ id: id })
  }

  return (
    <div className="flex items-center justify-between gap-x-4 lg:gap-x-12 border-b py-8">
      <section className="grid grid-cols-[1fr_5fr_1fr_1.5fr] w-full items-start justify-between gap-x-4 lg:gap-x-12">
        <div className="relative h-32 w-32">
          <Image
            src={img}
            alt={name}
            width={1000}
            height={1000}
            className="h-full object-cover"
          />
        </div>
        <div className="grow-[2] flex-col justify-between gap-x-8 text-base">
          <h2 className="mb-4 font-normal">{name}</h2>
          <div className="flex items-center text-text-primary-link">
            <button
              className="text-sm font-medium"
              onClick={() => {
                router.push(`/product/${id}`)
              }}
            >
              {" "}
              <span className="lg:block hidden">Show product details</span>
              <span className="lg:hidden block">Show details</span>
            </button>
            <span>
              <ChevronRightIcon className="h-4 w-4" />
            </span>
          </div>
        </div>
        <div className="flex grow items-center gap-x-2 lg:gap-x-4 text-base">
          <p>{cartQuantity}</p>
          <div className="flex flex-col items-center justify-center gap-2 text-text-primary-link">
            {/* when the quanity is 1 then disable the button from going lower */}
            <button
              onClick={handleIncreaseItemQuantity}
              disabled={increaseItemQuery.isMutating || cartQuantity >= stock!}
            >
              <ChevronUpIcon className="h-5 w-5 cursor-pointer" />
            </button>
            <button
              onClick={handleDecreaseItemQuantity}
              disabled={decreaseItemQuery.isMutating || cartQuantity < 1}
            >
              <ChevronDownIcon className="h-5 w-5 cursor-pointer" />
            </button>
          </div>
          {/* I want this message to clear after some time */}
          {/* <span className='text-[1.3rem] font-normal text-primary-red-100'> toast {message}</span> */}
        </div>

        <section className="space-y-4 text-xl flex flex-col items-end justify-end lg:text-2xl">
          <p className="text-xl font-normal mb-4">${price.toFixed(2)}</p>
          <button
            className="cursor-pointer justify-self-end text-right text-base font-normal text-primary-red-100 hover:underline hover:underline-offset-4"
            onClick={handleRemoveItemFromCart}
          >
            Remove
          </button>
        </section>
      </section>
    </div>
  )
}

export default CheckoutProduct
