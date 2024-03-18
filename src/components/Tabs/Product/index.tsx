import { Tab } from "@headlessui/react"
import { useState, Fragment } from "react"

import { Description } from "@/components/Product/Tabs/description"
import { Overview } from "@/components/Product/Tabs/overview"
import { ReturnPolicy } from "@/components/Product/Tabs/returnPolicy"
import { Reviews } from "@/components/Product/Tabs/reviews"
import { Shipping } from "@/components/Product/Tabs/shipping"
import { Warranty } from "@/components/Product/Tabs/warranty"
import { useGetUserOrders } from "@/lib/hooks/user/user.hook"

type Props = {
  product: Product
}
const styles = {
  tabHeader: `text-lg font-semibold lg:text-2xl cursor-pointer flex items-center justify-center outline-0 border-0`,
  productDetails: {
    title: `font-semibold`,
    description: `font-medium`
  }
}

export const ProductTab = ({ product }: Props) => {
  const orderQuery = useGetUserOrders()
  const hasUserPurchasedThisItem = orderQuery.data?.map((order) => order.orderItems)
    .flat()
    .findIndex((item) => item._id === product._id)

  const [categories] = useState([
    {
      id: 1,
      title: 'Oveview',
      component: <Overview />
    },
    {
      id: 2,
      title: 'Description',
      component: <Description data={product.description} />
    },
    {
      id: 3,
      title: 'Return Policy',
      component: <ReturnPolicy />
    },
    {
      id: 4,
      title: 'Shipping',
      component: <Shipping />
    },
    {
      id: 5,
      title: 'Warranty',
      component: <Warranty />
    },
    {
      id: 6,
      title: 'Reviews',
      component: (
        <Reviews
          productId={product._id}
          hasPurchasedProduct={hasUserPurchasedThisItem!}
        />)
    }
  ])
  return (
    <Tab.Group>
      <Tab.List className='grid grid-cols-6 px-4 border-b py-4'>
        {categories.map((category: any) => {
          return (
            <Tab as={Fragment} key={category.id}>
              {({ selected }) => (
                /* Use the `selected` state to conditionally style the selected tab. */
                <div
                  className={
                    selected ? `bg-blue-500 text-white ${styles.tabHeader} py-4` : `bg-white text-black ${styles.tabHeader}`
                  }
                >
                  {category.title}
                </div>
              )}
            </Tab>
          )
        })}
      </Tab.List>
      <Tab.Panels className='p-4 min-h-[20rem]'>
        {categories.map((category) => {
          return <Tab.Panel key={category.id}>
            {category.component}
          </Tab.Panel>
        })}
      </Tab.Panels>
    </Tab.Group>
  )
}
