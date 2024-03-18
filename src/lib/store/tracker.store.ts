import { create } from 'zustand'

interface State {
  page: string
}

interface Actions {
  setPage: (page: string) => void
}

const usePageTracker = create<State & Actions>((set) => ({
  page: '',
  setPage: (data) => set(() => ({ page: data }))
}))

export default usePageTracker