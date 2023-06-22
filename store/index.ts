import { create } from 'zustand'

type SearchQuery = {
  query: string
  setQuery: (value: string) => void
}

export const useSearchQuery = create<SearchQuery>((set) => ({
  query: '',
  setQuery: (value) => set({ query: value }),
}))
