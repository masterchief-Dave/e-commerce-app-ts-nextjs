import { RootState } from '@/app/store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  value: Cart[]
}
const initialState: CartState = {
  value: [],
}

interface ID {
  id: string
  stock: number
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: CartState, action: PayloadAction<Product>) => {
      const findIndex = state.value.findIndex((product) => {
        return product._id === action.payload._id
      })

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
    increaseCartItem: (state: CartState, action: PayloadAction<ID>) => {
      console.log(action.payload.stock)
      const findIndex = state.value.findIndex((product) => {
        return product._id === action.payload.id
      })

      if (findIndex < 0) {
        return
      }

      state.value[findIndex] = {
        ...state.value[findIndex],
        cartQuantity: state.value[findIndex].cartQuantity + 1
      }
    },
    decreaseCartItem: (state: CartState, action: PayloadAction<ID>) => {
      const findIndex = state.value.findIndex((product) => {
        return product._id === action.payload.id
      })

      if (findIndex < 0) {
        return
      }

      if (state.value[findIndex].cartQuantity === 1) {
        return
      }

      state.value[findIndex] = {
        ...state.value[findIndex],
        cartQuantity: state.value[findIndex].cartQuantity - 1
      }
    },
    removeItem: (state: CartState, action: PayloadAction<ID>) => {
      const findIndex = state.value.findIndex((product) => {
        return product._id === action.payload.id
      })

      if (findIndex < 0) {
        return
      }

      state.value = state.value.filter((item) => {
        return item._id !== action.payload.id
      })
    },
    addManyToCart: (state: CartState, action: PayloadAction<Cart>) => {
    // some code
    }
  },
})

export const { addToCart, increaseCartItem, decreaseCartItem, removeItem } = cartSlice.actions
export default cartSlice.reducer

export const selectorCartTotalAmount = (state: RootState) => {
  const totalPrice = state.cart.value.reduce((total, item) => {
    return total + item.cartQuantity * item.price
  }, 0)

  return totalPrice
}

// remove item from the cart
// reduce a particular item in the cart
// increase a particular item in the cart