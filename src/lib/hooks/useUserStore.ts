// import { create } from 'zustand'

// interface State {
//   user: AuthUser
// }

// interface Actions {
//   addUser: (param: AuthUser) => void
// }

// export const useUserStore = create<State & Actions>((set): State & Actions => ({
//   user: {
//     _id: "",
//     avatar: {
//       public_id: "",
//       url: ""
//     },
//     createdAt: "",
//     email: "",
//     name: "",
//     password: "",
//     passwordChangedAt: "",
//     role: "user",
//     __v: 0
//   },
//   addUser: ((param) => set({ user: param }))
// }))
