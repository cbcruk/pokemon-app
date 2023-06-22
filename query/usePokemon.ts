import {
  fetchEvolutionChain,
  fetchPokemonDetail,
  fetchPokemonList,
  fetchPokemonSpeciesDetail,
} from '@/api'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

export function usePokemonList() {
  const result = useInfiniteQuery({
    queryKey: ['pokemon'],
    queryFn: async ({ pageParam }) => fetchPokemonList(pageParam || ''),
    getNextPageParam: (lastPage) => {
      if (!lastPage.next) {
        return null
      }

      const nextUrl = new URL(lastPage.next)

      return nextUrl.search
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  })

  return result
}

export function usePokemonDetail(id: string) {
  const result = useQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => fetchPokemonDetail(id),
    staleTime: 1000,
  })

  return result
}

export function usePokemonSpeciesDetail(id: string) {
  const result = useQuery({
    queryKey: ['pokemon-species', id],
    queryFn: async () => fetchPokemonSpeciesDetail(id),
  })

  return result
}

export function useEvolutionChain(id: string) {
  const result = useQuery({
    queryKey: ['evolution-chain', id],
    queryFn: async () => fetchEvolutionChain(id),
    suspense: true,
  })

  return result
}
