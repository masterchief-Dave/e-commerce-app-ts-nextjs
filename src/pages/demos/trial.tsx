/* eslint-disable react/no-children-prop */
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { fetchProducts } from "@/features/fetchProducts"
import { Box, Heading } from "@chakra-ui/react"
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react"
import useSWR from "swr"

const Trial = () => {
  const handleClick = async () => {
    const response = await fetch(
      `http://localhost:8100/api/v1/auth/updatepassword`,
      {
        method: "PATCH",
        credentials: "include",
      }
    )

    const data = response.json()

    console.log(data)
  }

  return (
    <div className="p-24 space-y-24">
      {/* <Card /> */}
      <button className="border rounded-md p-4" onClick={handleClick}>
        update password
      </button>
      <CardTab />
    </div>
  )
}

export default Trial

export function CardTab() {
  return (
    <Box>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <CardContent>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here. Click save when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue="@peduarte" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save changes</Button>
            </CardFooter>
          </CardContent>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here. After saving, you'll be logged out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Current password</Label>
                <Input id="current" type="password" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">New password</Label>
                <Input id="new" type="password" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save password</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </Box>
  )
}

// const VideoContainer = () => {
//   return (
//     <div className='w-[20rem] rounded-xl border p-2'>
//       <video
//         // src='https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/SnapInsta_285812316_783982779704202_1254703527819543922_n_vkqghh.mp4'
//         className='h-[20rem] w-[20rem] object-cover'
//         autoPlay
//         loop
//         muted
//       >
//         <source src='https://v-cg.etsystatic.com/video/upload/ac_none,du_15,q_auto:good/SnapInsta_285812316_783982779704202_1254703527819543922_n_vkqghh.mp4' />
//       </video>
//     </div>
//   )
// }
