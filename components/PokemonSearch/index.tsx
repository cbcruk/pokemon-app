import { useSearchQuery } from '@/store'

export function PokemonSearch() {
  const { setQuery } = useSearchQuery()

  return (
    <input
      type="search"
      className="min-w-[200px] h-10 px-4 bg-gray-100 rounded-full"
      placeholder="포켓몬 ID를 입력하세요."
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}
