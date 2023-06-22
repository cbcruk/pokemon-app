import { z } from 'zod'

const BASE_URL = 'https://pokeapi.co/api/v2'

export const pokemonSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    })
  ),
})

export async function fetchPokemonList(pageParam = '') {
  const response = await fetch(`${BASE_URL}/pokemon/${pageParam || ''}`).then(
    (r) => r.json()
  )

  return pokemonSchema.parse(response)
}

const pokemonDetailSchema = z.object({
  abilities: z.array(
    z.object({
      ability: z.any(),
      is_hidden: z.boolean(),
      slot: z.number().int(),
    })
  ),
  base_experience: z.union([z.number().int(), z.null()]),
  forms: z.array(z.any()),
  game_indices: z.array(
    z.object({ game_index: z.number().int(), version: z.any() })
  ),
  height: z.number().int(),
  held_items: z.array(
    z.object({
      item: z.any(),
      version_details: z.array(
        z.object({ rarity: z.number().int(), version: z.any() })
      ),
    })
  ),
  id: z.number().int(),
  is_default: z.boolean(),
  location_area_encounters: z.string(),
  moves: z.array(
    z.object({
      move: z.any(),
      version_group_details: z.array(
        z.object({
          level_learned_at: z.number().int(),
          move_learn_method: z.any(),
          version_group: z.any(),
        })
      ),
    })
  ),
  name: z.string(),
  order: z.number().int(),
  past_types: z.array(
    z.object({
      generation: z.any(),
      types: z.array(z.object({ slot: z.number().int(), type: z.any() })),
    })
  ),
  species: z.object({
    name: z.string(),
    url: z.string(),
  }),
  sprites: z.object({
    back_default: z.union([z.null(), z.string()]),
    back_female: z.union([z.null(), z.string()]),
    back_shiny: z.union([z.null(), z.string()]),
    back_shiny_female: z.union([z.null(), z.string()]),
    front_default: z.union([z.null(), z.string()]),
    front_female: z.union([z.null(), z.string()]),
    front_shiny: z.union([z.null(), z.string()]),
    front_shiny_female: z.union([z.null(), z.string()]),
    other: z.object({
      dream_world: z.object({
        front_default: z.union([z.null(), z.string()]),
        front_female: z.union([z.null(), z.string()]),
      }),
      home: z.object({
        front_default: z.union([z.null(), z.string()]),
        front_female: z.union([z.null(), z.string()]),
        front_shiny: z.union([z.null(), z.string()]),
        front_shiny_female: z.union([z.null(), z.string()]),
      }),
      'official-artwork': z.object({
        front_default: z.union([z.null(), z.string()]),
        front_shiny: z.union([z.null(), z.string()]),
      }),
    }),
    versions: z.object({
      'generation-i': z.object({
        'red-blue': z.object({
          back_default: z.union([z.null(), z.string()]),
          back_gray: z.union([z.null(), z.string()]),
          back_transparent: z.union([z.null(), z.string()]),
          front_default: z.union([z.null(), z.string()]),
          front_gray: z.union([z.null(), z.string()]),
          front_transparent: z.union([z.null(), z.string()]),
        }),
        yellow: z.object({
          back_default: z.union([z.null(), z.string()]),
          back_gray: z.union([z.null(), z.string()]),
          back_transparent: z.union([z.null(), z.string()]),
          front_default: z.union([z.null(), z.string()]),
          front_gray: z.union([z.null(), z.string()]),
          front_transparent: z.union([z.null(), z.string()]),
        }),
      }),
      'generation-ii': z.object({
        crystal: z.object({
          back_default: z.union([z.null(), z.string()]),
          back_shiny: z.union([z.null(), z.string()]),
          back_shiny_transparent: z.union([z.null(), z.string()]),
          back_transparent: z.union([z.null(), z.string()]),
          front_default: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
          front_shiny_transparent: z.union([z.null(), z.string()]),
          front_transparent: z.union([z.null(), z.string()]),
        }),
        gold: z.object({
          back_default: z.union([z.null(), z.string()]),
          back_shiny: z.union([z.null(), z.string()]),
          front_default: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
          front_transparent: z.union([z.null(), z.string()]),
        }),
        silver: z.object({
          back_default: z.union([z.null(), z.string()]),
          back_shiny: z.union([z.null(), z.string()]),
          front_default: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
          front_transparent: z.union([z.null(), z.string()]),
        }),
      }),
      'generation-iii': z.object({
        emerald: z.object({
          front_default: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
        }),
        'firered-leafgreen': z.object({
          back_default: z.union([z.null(), z.string()]),
          back_shiny: z.union([z.null(), z.string()]),
          front_default: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
        }),
        'ruby-sapphire': z.object({
          back_default: z.union([z.null(), z.string()]),
          back_shiny: z.union([z.null(), z.string()]),
          front_default: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
        }),
      }),
      'generation-iv': z.object({
        'diamond-pearl': z.object({
          back_default: z.union([z.null(), z.string()]),
          back_female: z.union([z.null(), z.string()]),
          back_shiny: z.union([z.null(), z.string()]),
          back_shiny_female: z.union([z.null(), z.string()]),
          front_default: z.union([z.null(), z.string()]),
          front_female: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
          front_shiny_female: z.union([z.null(), z.string()]),
        }),
        'heartgold-soulsilver': z.object({
          back_default: z.union([z.null(), z.string()]),
          back_female: z.union([z.null(), z.string()]),
          back_shiny: z.union([z.null(), z.string()]),
          back_shiny_female: z.union([z.null(), z.string()]),
          front_default: z.union([z.null(), z.string()]),
          front_female: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
          front_shiny_female: z.union([z.null(), z.string()]),
        }),
        platinum: z.object({
          back_default: z.union([z.null(), z.string()]),
          back_female: z.union([z.null(), z.string()]),
          back_shiny: z.union([z.null(), z.string()]),
          back_shiny_female: z.union([z.null(), z.string()]),
          front_default: z.union([z.null(), z.string()]),
          front_female: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
          front_shiny_female: z.union([z.null(), z.string()]),
        }),
      }),
      'generation-v': z.object({
        'black-white': z.object({
          animated: z.object({
            back_default: z.union([z.null(), z.string()]),
            back_female: z.union([z.null(), z.string()]),
            back_shiny: z.union([z.null(), z.string()]),
            back_shiny_female: z.union([z.null(), z.string()]),
            front_default: z.union([z.null(), z.string()]),
            front_female: z.union([z.null(), z.string()]),
            front_shiny: z.union([z.null(), z.string()]),
            front_shiny_female: z.union([z.null(), z.string()]),
          }),
          back_default: z.union([z.null(), z.string()]),
          back_female: z.union([z.null(), z.string()]),
          back_shiny: z.union([z.null(), z.string()]),
          back_shiny_female: z.union([z.null(), z.string()]),
          front_default: z.union([z.null(), z.string()]),
          front_female: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
          front_shiny_female: z.union([z.null(), z.string()]),
        }),
      }),
      'generation-vi': z.object({
        'omegaruby-alphasapphire': z.object({
          front_default: z.union([z.null(), z.string()]),
          front_female: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
          front_shiny_female: z.union([z.null(), z.string()]),
        }),
        'x-y': z.object({
          front_default: z.union([z.null(), z.string()]),
          front_female: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
          front_shiny_female: z.union([z.null(), z.string()]),
        }),
      }),
      'generation-vii': z.object({
        icons: z.object({
          front_default: z.union([z.null(), z.string()]),
          front_female: z.union([z.null(), z.string()]),
        }),
        'ultra-sun-ultra-moon': z.object({
          front_default: z.union([z.null(), z.string()]),
          front_female: z.union([z.null(), z.string()]),
          front_shiny: z.union([z.null(), z.string()]),
          front_shiny_female: z.union([z.null(), z.string()]),
        }),
      }),
      'generation-viii': z.object({
        icons: z.object({
          front_default: z.union([z.null(), z.string()]),
          front_female: z.union([z.null(), z.string()]),
        }),
      }),
    }),
  }),
  stats: z.array(
    z.object({
      base_stat: z.number().int(),
      effort: z.number().int(),
      stat: z.any(),
    })
  ),
  types: z.array(z.object({ slot: z.number().int(), type: z.any() })),
  weight: z.number().int(),
})

export async function fetchPokemonDetail(id: string) {
  const response = await fetch(`${BASE_URL}/pokemon/${id}`).then((r) =>
    r.json()
  )

  return pokemonDetailSchema.parse(response)
}

export const pokemonSpeciesSchema = z.object({
  base_happiness: z.union([z.number().int(), z.null()]),
  capture_rate: z.number().int(),
  color: z.any(),
  egg_groups: z.array(z.any()),
  evolution_chain: z.object({
    url: z.string(),
  }),
  evolves_from_species: z.union([z.null(), z.any()]),
  flavor_text_entries: z.array(
    z.object({ flavor_text: z.string(), language: z.any(), version: z.any() })
  ),
  form_descriptions: z.array(
    z.object({ description: z.string(), language: z.any() })
  ),
  forms_switchable: z.boolean(),
  gender_rate: z.number().int(),
  genera: z.array(z.object({ genus: z.string(), language: z.any() })),
  generation: z.any(),
  growth_rate: z.any(),
  habitat: z.union([z.null(), z.any()]),
  has_gender_differences: z.boolean(),
  hatch_counter: z.union([z.number().int(), z.null()]),
  id: z.number().int(),
  is_baby: z.boolean(),
  is_legendary: z.boolean(),
  is_mythical: z.boolean(),
  name: z.string(),
  names: z.array(z.object({ language: z.any(), name: z.string() })),
  order: z.number().int(),
  pal_park_encounters: z.array(
    z.object({
      area: z.any(),
      base_score: z.number().int(),
      rate: z.number().int(),
    })
  ),
  pokedex_numbers: z.array(
    z.object({ entry_number: z.number().int(), pokedex: z.any() })
  ),
  shape: z.union([z.null(), z.any()]),
  varieties: z.array(z.object({ is_default: z.boolean(), pokemon: z.any() })),
})

export async function fetchPokemonSpeciesDetail(id: string) {
  const response = await fetch(`${BASE_URL}/pokemon-species/${id}`).then((r) =>
    r.json()
  )

  return pokemonSpeciesSchema.parse(response)
}

export const evolutionChainSchema = z.object({
  baby_trigger_item: z.union([z.null(), z.any()]),
  chain: z.object({
    evolution_details: z.array(z.any()),
    evolves_to: z.array(
      z.object({
        evolution_details: z.array(
          z.object({
            gender: z.union([z.number().int(), z.null()]),
            held_item: z.union([z.null(), z.any()]),
            item: z.union([z.null(), z.any()]),
            known_move: z.union([z.null(), z.any()]),
            known_move_type: z.union([z.null(), z.any()]),
            location: z.union([z.null(), z.any()]),
            min_affection: z.union([z.number().int(), z.null()]),
            min_beauty: z.union([z.number().int(), z.null()]),
            min_happiness: z.union([z.number().int(), z.null()]),
            min_level: z.union([z.number().int(), z.null()]),
            needs_overworld_rain: z.boolean(),
            party_species: z.union([z.null(), z.any()]),
            party_type: z.union([z.null(), z.any()]),
            relative_physical_stats: z.union([z.number().int(), z.null()]),
            time_of_day: z.string(),
            trade_species: z.union([z.null(), z.any()]),
            trigger: z.any(),
            turn_upside_down: z.boolean(),
          })
        ),
        evolves_to: z.array(
          z.object({
            evolution_details: z.array(
              z.object({
                gender: z.union([z.number().int(), z.null()]),
                held_item: z.union([z.null(), z.any()]),
                item: z.union([z.null(), z.any()]),
                known_move: z.union([z.null(), z.any()]),
                known_move_type: z.null(),
                location: z.union([z.null(), z.any()]),
                min_affection: z.null(),
                min_beauty: z.null(),
                min_happiness: z.union([z.number().int(), z.null()]),
                min_level: z.union([z.number().int(), z.null()]),
                needs_overworld_rain: z.boolean(),
                party_species: z.null(),
                party_type: z.null(),
                relative_physical_stats: z.null(),
                time_of_day: z.string(),
                trade_species: z.null(),
                trigger: z.any(),
                turn_upside_down: z.boolean(),
              })
            ),
            evolves_to: z.array(z.any()),
            is_baby: z.boolean(),
            species: z.object({
              name: z.string(),
              url: z.string(),
            }),
          })
        ),
        is_baby: z.boolean(),
        species: z.object({
          name: z.string(),
          url: z.string(),
        }),
      })
    ),
    is_baby: z.boolean(),
    species: z.object({
      name: z.string(),
      url: z.string(),
    }),
  }),
  id: z.number().int(),
})

export type EvolutionChainSchema = z.infer<typeof evolutionChainSchema>

export async function fetchEvolutionChain(id: string) {
  const response = await fetch(`${BASE_URL}/evolution-chain/${id}/`).then((r) =>
    r.json()
  )

  return evolutionChainSchema.parse(response)
}
