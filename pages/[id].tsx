import { fetchPokemonDetail, fetchPokemonSpeciesDetail } from '@/api'
import { PokemonDetail } from '@/components/PokemonDetail'
import { dehydrate, QueryClient } from '@tanstack/react-query'

function Detail() {
  return <PokemonDetail />
}

export async function getServerSideProps({ params }) {
  const id = params.id
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['pokemon', id],
    queryFn: async () => fetchPokemonDetail(id),
  })
  await queryClient.prefetchQuery({
    queryKey: ['pokemon-species', id],
    queryFn: async () => fetchPokemonSpeciesDetail(id),
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Detail
