import getFormatDate from "@/lib/helpers/formatDate"
import Image from "next/image"

type Props = {
  date: string
  price: string
  address: string
  orderItems: {
    image: string
    name: string
    product: Product
    price: number
    quantity: number
    _id: string
  }[]
  orderNo: string
}

export const Order = (props: Props) => {
  return (
    <div className="w-full p-8 ">
      <section className="space-y-8">
        <div className="w-full">
          <header className="flex w-full items-center justify-between">
            <h2 className="font-semibold">
              Order Date:{" "}
              <span className="font-light">
                {" "}
                {getFormatDate(props?.date as string)}{" "}
              </span>
            </h2>
          </header>
        </div>

        <div className="flex justify-between">
          <div>
            <h3>Delivery Address</h3>
            <p>{props.address}</p>
          </div>
        </div>

        {props.orderItems.map((item) => {
          return (
            <>
              <div className="grid grid-cols-2">
                <section>
                  <p>Total: NGN {item.price}</p>
                  <p>Order No: {item._id.slice(-8)}</p>
                  <p></p>
                </section>
                <section>
                  <div>
                    <Image
                      src={item.image}
                      alt="printer"
                      className="h-[10rem] w-[10rem] object-cover"
                      width={1000}
                      height={1000}
                    />
                  </div>
                </section>
              </div>
            </>
          )
        })}
      </section>
    </div>
  )
}
