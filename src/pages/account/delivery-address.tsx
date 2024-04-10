import Link from "next/link"
import { AddressBox } from "@/components/Account/Address/addressBox"
import { AccountLayout } from "@/components/Layout/Account"
import { useGetBillingAddress } from "@/lib/hooks/user/user.hook"
import { BillingInfoSkeleton } from "@/components/skeleton"
import useAuth from "@/lib/hooks/useAuth"

const DeliveryAddress = () => {
  const { data, isLoading } = useGetBillingAddress()
  const { user } = useAuth()

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
                        firstname={user?.name.split(" ")[0] as string}
                        lastname={address.lastname?.split(" ")[1]}
                        country={address.country}
                        zipCode={address.zipCode}
                        address={
                          address.address ||
                          `${address.city} ${address.street} ${address.country}`
                        }
                        phoneNumber={address.phoneNumber}
                        city={address.city}
                        state={address.state}
                        street={address.street}
                      />
                    )
                  })}
              </div>
            </section>
          )}
        </>
      </AccountLayout>
    </div>
  )
}

export default DeliveryAddress
