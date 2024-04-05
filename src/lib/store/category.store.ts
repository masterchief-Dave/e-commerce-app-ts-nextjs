import { create } from "zustand"
import type { CategoryRequestInterface } from "../types/request-model.type"

interface State {
  params: CategoryRequestInterface
}

interface Actions {
  setParams: (params: State["params"]) => void
}

const useCategoryStore = create<Actions & State>((set): State & Actions => ({
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

export default useCategoryStore
