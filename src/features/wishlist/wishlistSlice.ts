import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type WishlistState = {
  value: Wishlist[]
}

const initialState: WishlistState = {
  value: []
}

interface ID {
  id: string
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: initialState,
  reducers: {
    addManyToWishlist: (state: WishlistState, action: PayloadAction<Wishlist>) => {
      // find the item, 
      const findIndex = state.value.findIndex((item) => {
        return item._id === action.payload._id
      })
      if (findIndex >= 0) {
        // if the item is there increase the item
        state.value[findIndex] = {
          ...state.value[findIndex],
          cartQuantity: state.value[findIndex].cartQuantity + action.payload.cartQuantity
        }
      } else {
        // if the item is not there then create the item
        state.value.push(action.payload)
      }

    },
    addToWishList: (state: WishlistState, action: PayloadAction<Product>) => {
      console.log(action.payload)
      const findIndex = state.value.findIndex((item) => {
        return item._id === action.payload._id
      })
      // if the item is there increase the item
      if (findIndex >= 0) {
        state.value[findIndex] = {
          ...state.value[findIndex],
          cartQuantity: state.value[findIndex].cartQuantity + 1
        }
      } else {
        const newItem = { ...action.payload, cartQuantity: 1 }
        state.value.push(newItem)
      }
    },
    removeFromWishlist: (state: WishlistState, action: PayloadAction<ID>) => {
      const findIndex = state.value.findIndex((item) => {
        return item._id === action.payload.id
      })

      if (findIndex < 0) {
        return
      }

      state.value = state.value.filter((item) => {
        return item._id !== action.payload.id
      })
    }
  }
})

export const { addManyToWishlist, addToWishList, removeFromWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer