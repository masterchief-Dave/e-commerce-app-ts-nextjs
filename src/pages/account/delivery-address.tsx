import { GetServerSideProps } from "next"
import { getSession } from "next-auth/react"
import axios from "axios"
import { getCookie } from "cookies-next"
import { AddressBox } from "@/components/Account/Address/addressBox"
import { Footer } from "@/components/Footer"
import { AccountLayout } from "@/components/Layout/Account"
import { useGetBillingAddress } from "@/lib/hooks/user/user.hook"
import { BillingInfoSkeleton } from "@/components/skeleton"
import Link from "next/link"

type Props = {
  address: IDelivery[] | null
}

const DeliveryAddress = (props: Props) => {
  const { data, isLoading } = useGetBillingAddress()

  console.log({ data })

  return (
    <div>
      <AccountLayout>
        <>
          {data?.length === 0 ? (
            <div className="flex flex-col gap-4 items-center justify-center h-[200px]">
              <p className=" font-medium">No Billing Information available</p>
              <Link
                href="/account/add-billing-address"
                className="text-blue-500  underline underline-offset-2"
              >
                Add Billing Address
              </Link>
            </div>
          ) : isLoading ? (
            <div className="flex items-center justify-center">
              <BillingInfoSkeleton />
            </div>
          ) : (
            <section>
              <header>
                <header className="flex items-center justify-between border-b p-4">
                  <h1 className="text-xl font-semibold">Delivery Address</h1>
                  <Link
                    href="/account/add-billing-address"
                    className="h-fit w-fit rounded-md bg-blue-500 px-4 py-2 font-semibold text-white"
                    id="newAddress"
                  >
                    {" "}
                    Add new Address{" "}
                  </Link>
                </header>
              </header>
              <div className="grid grid-cols-2 gap-12 p-8">
                {data?.length! >= 1 &&
                  data?.map((address) => {
                    return (
                      <AddressBox
                        key={address._id}
                        _id={address._id}
                        firstname={address.firstname}
                        lastname={address.lastname}
                        country={address.country}
                        zipcode={address.zipcode}
                        address={address.address}
                        phoneNumber={address.phoneNumber}
                      />
                    )
                  })}
              </div>
            </section>
          )}
        </>
      </AccountLayout>
      <Footer />
    </div>
  )
}

export default DeliveryAddress

/*
export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const session = await getSession({ req: context.req })
  const request = context.req
  const resp = context.res

  const auth_cookie = getCookie('Authorization', { req: request, res: resp })
  console.log({ auth_cookie })

  let data

  if (!session) {
    return {
      props: {
        address: null
      }
    }
  }

  const response = await axios.get(`https://sage-warehouse-backend.onrender.com/api/v1/shipping/${session._id}`)
  data = response.data

  return {
    props: {
      address: data.address
    }
  }
}
*/
