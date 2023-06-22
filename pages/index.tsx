import Head from 'next/head'
import { PokemonList } from '@/components/PokemonList'
import { PokemonHeader } from '@/components/PokemonHeader'
import { PokemonSearch } from '@/components/PokemonSearch'

function Home() {
  return (
    <>
      <Head>
        <title>포켓몬 도감</title>
      </Head>
      <main>
        <PokemonHeader>
          <PokemonSearch />
        </PokemonHeader>
        <PokemonList />
      </main>
    </>
  )
}

export default Home
