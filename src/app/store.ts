'use client'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/features/cart/cartSlice'
import wishListReducer from '@/features/wishlist/wishlistSlice'
import loginReducer from '@/features/login/loginSlice'
import RegisterReducer from '@/features/register/registerSlice'
import ShippingReducer from '@/features/shipping-address/address-slice'


// check if the user is in the localstorage
// let savedUser
// if (typeof window !== 'undefined') {
//   savedUser = window.localStorage.getItem('user')
// }


const initialState = {
  error: null,
  loading: false
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishListReducer,
    login: loginReducer,
    register: RegisterReducer,
    shipping: ShippingReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch

