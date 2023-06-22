const BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'

const WIDTH = 96
const HEIGHT = 96

type Props = JSX.IntrinsicElements['img'] & {
  id: string
}

export function PokemonImage({ id, ...props }: Props) {
  return (
    <img
      src={`${BASE_URL}/other/official-artwork/${id}.png`}
      width={WIDTH}
      height={HEIGHT}
      loading="lazy"
      {...props}
    />
  )
}
