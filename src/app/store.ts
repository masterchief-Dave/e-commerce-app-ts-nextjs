'use client'
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/features/cart/cartSlice'
import wishListReducer from '@/features/wishlist/wishlistSlice'
import loginReducer from '@/features/login/loginSlice'
import RegisterReducer from '@/features/register/registerSlice'
import ShippingReducer from '@/features/shipping-address/address-slice'
import Cookies from 'js-cookie'

// get toen from here when I want to access a protected route
const authToken = Cookies.get('authLoginToken');
// chec if the user is in the localstorage
let savedUser
if (typeof window !== 'undefined') {
  savedUser = window.localStorage.getItem('user')
}

console.log(savedUser)

const initialState = {
  isLoggedIn: !!savedUser,
  user: savedUser ? JSON.parse(savedUser) : null,
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
  preloadedState: {
    login: initialState
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

