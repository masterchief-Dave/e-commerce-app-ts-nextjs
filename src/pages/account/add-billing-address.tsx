import { AddressForm } from "@/components/Account/Address/addressForm"
import { AccountLayout } from "@/components/Layout/Account"
import { useToast } from "@/components/ui/use-toast"
import {
  billingAddressSchema,
  billingAddressVal,
} from "@/lib/schema/auth.schema"
import addBillingAddressHelper from "@/utils/addBillingAddress.helper"
import { useFormik } from "formik"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const AddShippingAddress = () => {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const formik = useFormik({
    initialValues: billingAddressVal,
    validationSchema: billingAddressSchema,
    onSubmit: async (values) => {
      addBillingAddressHelper({ values, formik, setLoading, toast })
    },
  })

  return (
    <div>
      <AccountLayout>
        <>
          <header className="flex items-center justify-between border-b p-4">
            <h1 className="text-xl font-semibold">Add Billing Address</h1>
            <Link
              href="/account/delivery-address"
              className="flex cursor-pointer items-center gap-x-2 p-3 font-medium transition-all delay-75 rounded-md  hover:bg-blue-500 hover:text-white"
            >
              <ArrowLeftIcon className="h-6 w-6" />
              <p>Go back</p>
            </Link>
          </header>
          <AddressForm formik={formik} loading={loading} />
        </>
      </AccountLayout>
    </div>
  )
}

export default AddShippingAddress
