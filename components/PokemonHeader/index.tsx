export function PokemonHeader({ children }) {
  return (
    <div className="sticky top-0 z-10 flex items-center h-[60px] bg-white p-2 shadow">
      {children}
    </div>
  )
}
