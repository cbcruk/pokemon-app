import { usePokemonList } from '@/query/usePokemon'
import { useSearchQuery } from '@/store'
import { getId } from '@/utils'
import Link from 'next/link'
import { PokemonImage } from '../PokemonImage'
import { PokemonListNav } from '../PokemonListNav'
import { Fragment } from 'react'

export function PokemonList() {
  const result = usePokemonList()
  const { query } = useSearchQuery()

  if (!result.data) {
    return null
  }

  return (
    <div className="w-[768px] max-w-[100%] p-2 m-auto grid gap-0 grid-cols-4">
      {result.data.pages.map((page, index) => {
        return (
          <Fragment key={index}>
            {page.results.map((result) => {
              const id = getId(result.url)

              if (!(id.indexOf(query) > -1)) {
                return null
              }

              return (
                <Link
                  key={result.name}
                  href={`/${id}`}
                  className="relative flex flex-col h-[156px] p-2 border ml-[-1px] mb-[-1px]"
                >
                  <strong className="text-2xl text-gray-800">{id}</strong>
                  <span className="text-sm text-gray-600">
                    {result.name.slice(0, 1).toUpperCase()}
                    {result.name.slice(1)}
                  </span>
                  <PokemonImage id={id} className="absolute right-0 bottom-0" />
                </Link>
              )
            })}
          </Fragment>
        )
      })}

      {!query && result.hasNextPage && !result.isFetchingNextPage && (
        <PokemonListNav
          fetchNextPage={() => {
            result.fetchNextPage()
          }}
        />
      )}
    </div>
  )
}
