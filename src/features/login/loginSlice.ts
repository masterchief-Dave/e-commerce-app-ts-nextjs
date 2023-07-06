import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type LoginState = {
  user: User | null
  loading: boolean
  error: string | null
}

const initialStates: LoginState = {
  user: null,
  loading: false,
  error: null
}

export const loginSlice = createSlice({
  name: 'login',
  initialState: initialStates,
  reducers: {
    loginStart: (state: LoginState) => {
      state.loading = true
      state.error = null
      state.user = null
    },
    loginSuccess: (state: LoginState, action: PayloadAction<User>) => {
      state.loading = false
      state.user = action.payload
      state.error = null
    },
    loginFailure: (state: LoginState, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
      state.user = null
    },
    logout: (state: LoginState) => {
      state.loading = false
      state.user = null
      state.error = null
    }
  }
})

export const { loginStart, loginFailure, loginSuccess, logout } = loginSlice.actions
export default loginSlice.reducer