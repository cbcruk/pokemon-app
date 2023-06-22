import { useEvolutionChain } from '@/query/usePokemon'
import { capitalize, getId } from '@/utils'
import Link from 'next/link'
import { getEvolutions } from '../PokemonEvolutionChain/helpers'
import { PokemonImage } from '../PokemonImage'

type Props = {
  id: string
}

export function PokemonEvolutionChain({ id }: Props) {
  const { data } = useEvolutionChain(id)

  if (!data) {
    return null
  }

  const evolutions = getEvolutions(data.chain)

  return (
    <div className="flex">
      {evolutions.map((evolution) => {
        const id = getId(evolution.species.url)

        return (
          <Link key={id} href={`/${id}`}>
            <PokemonImage id={id} />
            <div className="flex flex-col items-center">
              {capitalize(evolution.species.name)}
              <div className="flex">
                {evolution.evolution_details.map((detail, index) => {
                  if (!detail.min_level) {
                    return null
                  }

                  return <div key={index}>필요레벨 {detail.min_level}</div>
                })}
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
