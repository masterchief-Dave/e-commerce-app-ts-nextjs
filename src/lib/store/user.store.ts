import { create } from 'zustand'

type User = Omit<UserSession, 'success'>

interface State {
  user: User | null
}

interface Actions {
  setUser: (user: User | null) => void
}

const useUserStore = create<State & Actions>((set) => ({
  user: {
    email: '',
    _id: '',
    name: '',
    photo: '',
    token: '',
    role: 'NO USER'
  },
  setUser: (data) => set((state) => ({ user: data }))
}))

export default useUserStore