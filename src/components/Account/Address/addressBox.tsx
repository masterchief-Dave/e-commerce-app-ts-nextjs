import { useState } from "react"
import Link from "next/link"
import { MapPinIcon, PhoneIcon, UserIcon } from "@heroicons/react/24/outline"
// import EditUserAddressModal from '@/components/Modal/EditUserHomeAddress'
import { Button } from "@/components/ui/button"
import type { UserBillingInfo } from "@/lib/types/user/user.type"
import { useDeleteBillingAddress } from "@/lib/hooks/user/user.hook"
import { useToast } from "@/components/ui/use-toast"
import Spinner from "@/components/molecules/spinner"

type Props = Omit<UserBillingInfo, "__v" | "default" | "updated_at">

export const AddressBox = ({
  city,
  street,
  country,
  firstname,
  lastname,
  phoneNumber,
  zipCode,
  _id,
}: Props) => {
  // const [show, setShow] = useState<boolean>(false)
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const { trigger, isMutating } = useDeleteBillingAddress()

  const handleDeleteBillingAddress = async () => {
    setLoading(true)
    try {
      const res = await trigger({ id: _id })
      if (res.message === "Deleted successfully") {
        setLoading(false)
        return toast({
          variant: "success",
          title: "Billing Address Removed",
        })
      }
      setLoading(false)
      toast({
        variant: "destructive",
        title: "Try again!",
      })
    } catch (err) {
      setLoading(false)
      toast({
        variant: "success",
        title: "Billing Address Removed",
      })
    }
  }

  return (
    <>
      <section>
        <div className="border">
          <header className="border-b p-4">
            <div className="flex justify-end">
              <div className="space-x-8">
                {/* <Button className='h-fit w-fit rounded-md px-4 py-2  font-semibold bg-blue-500' onClick={() => setShow(true)}>
                    Edit
                  </Button> */}

                <Button
                  className="h-fit w-fit rounded-md px-4 py-2 font-semibold text-white bg-red-500 flex items-center justify-center"
                  onClick={handleDeleteBillingAddress}
                  disabled={isMutating}
                >
                  {loading && <Spinner className="h-6 w-6 text-white" />}
                  <span>Delete</span>
                </Button>
              </div>
            </div>
          </header>

          <section className="space-y-4 p-8 ">
            <div className="flex items-center gap-x-2">
              <UserIcon className="h-6 w-6" />
              <p>
                {firstname} {lastname}
              </p>
            </div>

            <div className="flex items-center gap-x-2">
              <MapPinIcon className="h-6 w-6" />
              <p className="truncated">
                {street} {city} {country}
              </p>
            </div>

            <div className="flex items-center gap-x-2">
              <PhoneIcon className="h-6 w-6" />
              <p>{zipCode}</p>
            </div>
          </section>
        </div>
      </section>

      {/* {show && <EditUserAddressModal state={show} setState={setShow} />} */}
    </>
  )
}
