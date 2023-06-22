import { EvolutionChainSchema } from '@/api'

type Chain = Partial<EvolutionChainSchema['chain']>

function pick(chain: Chain) {
  const { is_baby, species, evolution_details } = chain
  return { is_baby, species, evolution_details }
}

export function getEvolutions(data: Chain) {
  const result = [pick(data)]

  ;(function recursive(data: Chain) {
    if (data.evolves_to && data.evolves_to.length > 0) {
      data.evolves_to.forEach((evolution) => {
        result.push(pick(evolution))
        recursive(evolution)
      })
    }
  })(data)

  return result
}
