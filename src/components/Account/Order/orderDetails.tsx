import Image from "next/image"

type Props = {}

export const OrderDetails = (props: Props) => {
  const styles = {
    itemsBetween: `flex justify-between items-center`,
  }

  return (
    <div className="space-y-4">
      <section className="border">
        <header className="border-b px-8 py-2">
          <h2>Order information</h2>
        </header>

        <div className="space-y-8 p-8">
          <div className={styles.itemsBetween}>
            <h3>Order Number</h3>
            <p>F846256961001</p>
          </div>
          <div className={styles.itemsBetween}>
            <h3>Order Date</h3>
            <p>8 Apr 2019</p>
          </div>

          <div className={styles.itemsBetween}>
            <h3>Tracking ID</h3>
            <p>F846256961001</p>
          </div>

          <div className={styles.itemsBetween}>
            <h3>Delivery Fee</h3>
            <p>0</p>
          </div>

          <div className={`${styles.itemsBetween} font-bold`}>
            <h3>Total Amount</h3>
            <p>#65,000</p>
          </div>
        </div>
      </section>

      <section className="border">
        <header className="border-b px-8 py-2">
          <h2>Payment Information</h2>
        </header>

        <div className="space-y-8 p-8">
          <div className={`${styles.itemsBetween}`}>
            <h3>Payment method</h3>
            <p>Mastercard</p>
          </div>

          <div className={`${styles.itemsBetween}`}>
            <h3>Order price</h3>
            <p>#60,000</p>
          </div>

          <div className={`${styles.itemsBetween}`}>
            <h3>Shipping Fee</h3>
            <p>#0</p>
          </div>

          <div className={`${styles.itemsBetween}`}>
            <h3>Total price</h3>
            <p>#65,000</p>
          </div>
        </div>
      </section>

      <section className="border">
        <header className="border-b px-8 py-2">Delivery Status</header>
        <div className="space-y-8 p-8">
          <div className="flex justify-between">
            <div className="flex gap-x-8">
              <div>
                <Image
                  src="/assets/img/airpod-landscape-1.png"
                  alt="apple-earpod"
                  className="h-[10rem] w-[10rem] object-cover"
                  width={1000}
                  height={1000}
                />
              </div>
              <article className="text-primary-grey-100">
                <p>Apple airpod</p>
                <p>#45,000</p>
                <p>Quantity: 1</p>
              </article>
            </div>

            <div>
              <h3 className="font-bold">Status</h3>
              <button className="h-fit w-fit rounded-md bg-primary-green-200 px-4 py-2  font-semibold text-white">
                Delivered
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/**
 * 
 * Order Number

F846256961001

Order Date

8 Apr 2019

Sold by

KONGA

Tracking ID

F846256961001

Delivery Fee

₦0

Total Amount
 */
