import type { ToasterToast } from "@/components/ui/use-toast"
import UserService from "@/lib/services/user/user.service"
import type { BillingAddressInterface } from "@/lib/types/user/user.type"

type Toast = Omit<ToasterToast, "id">
interface BillingAddressService {
  values: BillingAddressInterface
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  toast: ({ ...props }: Toast) => {
    id: string,
    dismiss: () => void,
    update: (props: ToasterToast) => void
  }
  formik: any
  reset?: boolean
}

async function addBillingAddressHelper({ values, setLoading, toast, formik, reset }: BillingAddressService) {
  try {
    setLoading(true)
    const response = await UserService.createBillingAddress({
      address: values.address,
      country: values.country,
      firstname: values.firstname,
      lastname: values.lastname,
      default: values.default || false,
      zipcode: values.zipcode,
      phoneNumber: values.phoneNumber
    })
    if (response?.success) {
      toast({
        variant: 'success',
        title: 'Billing Info Created',
        description: "You can use this Billing Info in checkout"
      })
      setLoading(false)
      if (reset === false) return
      formik.resetForm()
    } else {
      toast({
        variant: 'destructive',
        title: 'Billing Info Not Created',
        description: "Try again!"
      })
      setLoading(false)
    }
  } catch (err) {
    toast({
      variant: 'destructive',
      title: 'Billing Info Not Created',
      description: "Try again!"
    })
    setLoading(false)
  }
}

export default addBillingAddressHelper