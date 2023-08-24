import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ShippingAddress = {
  value: BillingAddress
}

const initialState: ShippingAddress = {
  value: {
    title: '',
    firstname: '',
    lastname: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
    zipcode: '',
    default: false
  }
}

const shippingSlice = createSlice({
  name: 'shipping-address',
  initialState,
  reducers: {
    addShippingAddress: (state: ShippingAddress, action: PayloadAction<ShippingAddress>) => {
      state.value.addressLine1 = action.payload.value.addressLine1
      state.value.addressLine2 = action.payload.value.addressLine2
      state.value.title = action.payload.value.title
      state.value.country = action.payload.value.country
      state.value.zipcode = action.payload.value.zipcode
      state.value.firstname = action.payload.value.firstname
      state.value.lastname = action.payload.value.lastname
    },
    getShippingAddress: (state: ShippingAddress, action): ShippingAddress => {
      return state
    }
  }
})

export const { addShippingAddress, getShippingAddress } = shippingSlice.actions
export default shippingSlice.reducer