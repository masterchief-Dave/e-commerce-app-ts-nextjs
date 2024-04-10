import { create } from "zustand"
import type {
  BillingAddressInterface,
  UserBillingInfo,
} from "../types/user/user.type"

interface State {
  shippingAddress: BillingAddressInterface
}

interface Actions {
  setAddress: (address: BillingAddressInterface) => void
}

const useShippingAddress = create<State & Actions>((set): State & Actions => ({
  shippingAddress: {
    address: "",
    country: "",
    default: false,
    firstname: "",
    lastname: "",
    phoneNumber: "",
    zipCode: "",
  },
  setAddress: (data) => set((state) => ({ shippingAddress: data })),
}))

export default useShippingAddress
