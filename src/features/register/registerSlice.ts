import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type RegisterState = {
  isRegistered: boolean
  user: RegisterSession | null
  loading: boolean
  error: string | null
}

const initialState = {
  isRegistered: false,
  user: null,
  loading: false,
  error: null
}

const registerSlice = createSlice({
  name: 'register',
  initialState: initialState,
  reducers: {
    registerStart: (state: RegisterState) => {
      state.isRegistered = false
      state.loading = true
      state.error = null
      state.user = null
    },
    registerSuccess: (state: RegisterState, action: PayloadAction<RegisterSession>) => {
      console.log(action.payload)
      state.isRegistered = true
      state.loading = false
      state.error = null
      state.user = action.payload
    },
    registerFailure: (state: RegisterState, action: PayloadAction<string>) => {
      state.isRegistered = false
      state.loading = false
      state.error = action.payload
      state.user = null
    }
  }
})

export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions
export default registerSlice.reducer