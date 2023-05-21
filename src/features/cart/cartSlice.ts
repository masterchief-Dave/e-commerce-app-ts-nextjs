import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  value: Cart[]
}
const initialState: CartState = {
  value: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      // console.log(action.payload)

      const findIndex = state.value.findIndex((product) => {
        return product._id === action.payload._id
      })

      // console.log(findIndex)
      if (findIndex >= 0) {
        state.value[findIndex] = {
          ...state.value[findIndex],
          cartQuantity: state.value[findIndex]?.cartQuantity! + 1,
        }
      } else {
        const newItem = { ...action.payload, cartQuantity: 1 }
        state.value.push(newItem)
      }
    },
  },
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer
