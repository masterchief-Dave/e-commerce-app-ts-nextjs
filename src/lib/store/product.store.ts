import { create } from "zustand"
import type { CategoryRequestInterface as RequestInterface } from "../types/request-model.type"

interface State {
  params: RequestInterface
}

interface Actions {
  setParams: (params: State["params"]) => void
}

const useProductStore = create<Actions & State>((set): State & Actions => ({
  params: {
    limit: 10,
    name: "all",
    page: 1,
    price: "asc",
    rating: "none",
  },
  setParams: (data) => {
    return set((state) => ({ params: { ...state.params, ...data } }))
  },
}))

export default useProductStore
