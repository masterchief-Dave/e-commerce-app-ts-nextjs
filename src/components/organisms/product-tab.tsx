import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "../Product/Tabs/overview"
import { Description } from "../Product/Tabs/description"
import { ReturnPolicy } from "../Product/Tabs/returnPolicy"
import { Shipping } from "../Product/Tabs/shipping"
import { Warranty } from "../Product/Tabs/warranty"
import { Reviews } from "../Product/Tabs/reviews"
import { useGetUserOrders } from "@/lib/hooks/user/user.hook"

const ProductTab = ({ product }: { product: Product }) => {
  const orderQuery = useGetUserOrders()
  const hasUserPurchasedThisItem = orderQuery.data
    ?.map((order) => order.orderItems)
    .flat()
    .findIndex((item) => item._id === product._id)

  return (
    // <Tabs defaultValue="overview" className="w-full">
    //   <TabsList>
    //     <TabsTrigger value="overview">Overview</TabsTrigger>
    //     <TabsTrigger value="description">Description</TabsTrigger>
    //     <TabsTrigger value="returnPolicy">Return Policy</TabsTrigger>
    //     <TabsTrigger value="shipping">Shipping</TabsTrigger>
    //     <TabsTrigger value="warranty">Warranty</TabsTrigger>
    //     <TabsTrigger value="reviews">Reviews</TabsTrigger>
    //   </TabsList>
    //   <TabsContent value="overview">
    //     <Overview />
    //   </TabsContent>
    //   <TabsContent value="description">
    //     <Description data={product.description} />
    //   </TabsContent>
    //   <TabsContent value="returnPolicy">
    //     <ReturnPolicy />
    //   </TabsContent>
    //   <TabsContent value="shipping">
    //     <Shipping />
    //   </TabsContent>
    //   <TabsContent value="warranty">
    //     <Warranty />
    //   </TabsContent>
    //   <TabsContent value="reviews">
    //     <Reviews
    //       productId={product._id}
    //       hasPurchasedProduct={hasUserPurchasedThisItem as number}
    //     />
    //   </TabsContent>
    // </Tabs>
    <Tabs defaultValue="account" className="w-[400px] h-full">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        Make changes to your account here.
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  )
}

export default ProductTab
