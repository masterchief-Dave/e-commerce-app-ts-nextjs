import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type LoginState = {
  isLoggedIn: boolean
  user: User | null
  loading: boolean
  error: string | null
}

const initialStates: LoginState = {
  isLoggedIn: false,
  user: null,
  loading: false,
  error: null
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialStates,
  reducers: {
    loginStart: (state: LoginState) => {
      state.isLoggedIn = false
      state.loading = true
      state.error = null
      state.user = null
    },
    loginSuccess: (state: LoginState, action: PayloadAction<User>) => {
      state.isLoggedIn = true
      state.loading = false
      state.user = action.payload
      state.error = null
    },
    loginFailure: (state: LoginState, action: PayloadAction<string>) => {
      state.isLoggedIn = false
      state.loading = false
      state.error = action.payload
      state.user = null
    },
    logout: (state: LoginState) => {
      state.isLoggedIn = false
      state.loading = false
      state.user = null
      state.error = null
    }
  }
})

export const { loginStart, loginFailure, loginSuccess, logout } = loginSlice.actions
export default loginSlice.reducer