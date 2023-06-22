import { usePokemonDetail, usePokemonSpeciesDetail } from '@/query/usePokemon'
import { capitalize, getId } from '@/utils'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { z } from 'zod'
import { PokemonEvolutionChain } from '../PokemonEvolutionChain'
import { Suspense } from 'react'
import { DetailSection } from '../PokemonDetail/components/DetailSection'
import { DetailTable } from '../PokemonDetail/components/DetailTable'
import { PokemonHeader } from '../PokemonHeader'

export function PokemonDetail() {
  const router = useRouter()
  const id = z.string().parse(router.query.id)
  const { data: pokemonDetailData } = usePokemonDetail(id)
  const { data: pokemonSpeciesDetailData } = usePokemonSpeciesDetail(id)

  if (!pokemonDetailData) {
    return null
  }

  if (!pokemonSpeciesDetailData) {
    return null
  }

  return (
    <>
      <Head>
        <title>포켓몬 도감 | {capitalize(pokemonDetailData.name)}</title>
      </Head>
      <PokemonHeader>
        <button
          onClick={() => {
            router.back()
          }}
        >
          뒤로가기
        </button>
      </PokemonHeader>
      <div className="p-2 text-sm">
        <DetailSection title={capitalize(pokemonDetailData.name)}>
          <DetailTable>
            <tbody>
              <tr>
                <th>ID</th>
                <td>#{`${pokemonDetailData.id}`.padStart(4, '0')}</td>
              </tr>
              <tr>
                <th>Height</th>
                <td>{pokemonDetailData.height / 10}m</td>
              </tr>
              <tr>
                <th>Weight</th>
                <td>{pokemonDetailData.weight / 10}kg</td>
              </tr>
              <tr>
                <th>Abilities</th>
                <td>
                  {pokemonDetailData.abilities
                    .map(
                      (ability) =>
                        `${ability.ability.name} ${
                          ability.is_hidden ? '(hidden)' : ''
                        }`
                    )
                    .join(', ')}
                </td>
              </tr>
              <tr>
                <th>Type</th>
                <td>
                  {pokemonDetailData.types
                    .map((type) => type.type.name)
                    .join(', ')}
                </td>
              </tr>
              <tr>
                <th>Forms</th>
                <td>
                  {pokemonDetailData.forms.map((form) => form.name).join(', ')}
                </td>
              </tr>
              <tr>
                <th>Base Exp.</th>
                <td>{pokemonDetailData.base_experience}</td>
              </tr>
            </tbody>
          </DetailTable>
        </DetailSection>

        <Suspense fallback={'로딩중...'}>
          <PokemonEvolutionChain
            id={getId(pokemonSpeciesDetailData.evolution_chain.url)}
          />
        </Suspense>

        <DetailSection title="Stats">
          <DetailTable>
            <tbody>
              {pokemonDetailData.stats.map((stat) => {
                return (
                  <tr key={stat.stat.name}>
                    <th>{stat.stat.name}</th>
                    <td>{stat.base_stat}</td>
                    <td>
                      <progress
                        className="block appearance-none"
                        value={stat.base_stat}
                        max={Math.max(
                          ...pokemonDetailData.stats.map(
                            (stat) => stat.base_stat
                          )
                        )}
                      />
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </DetailTable>
        </DetailSection>

        <DetailSection title="Game Versions">
          <div className="flex flex-wrap gap-2">
            {pokemonDetailData.game_indices.map((index) => {
              return (
                <span
                  key={index.version.name}
                  data-id={getId(index.version.url)}
                  className="p-1 bg-gray-200 text-gray-600 rounded-lg text-xs"
                >
                  {index.version.name}
                </span>
              )
            })}
          </div>
        </DetailSection>
      </div>
    </>
  )
}
