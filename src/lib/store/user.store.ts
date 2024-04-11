import { create } from "zustand"

type User = Omit<UserSession, "success">

interface State {
  user: User | null
  userLoading: boolean
}

interface Actions {
  setUser: (user: User | null) => void
  setUserLoading: (data: boolean) => void
}

const useUserStore = create<State & Actions>((set) => ({
  userLoading: false,
  user: {
    email: "",
    _id: "",
    name: "",
    photo: "",
    token: "",
    role: "NO USER",
  },
  setUser: (data) => set((state) => ({ user: data })),
  setUserLoading: (data) => set((state) => ({ userLoading: data })),
}))

export default useUserStore
