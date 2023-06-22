export function getId(url: string) {
  const pattern = /https:\/\/pokeapi.co\/api\/v2\/(?<endpoint>.+)\/(?<id>\d+)\//
  const { groups } = pattern.exec(url)

  return groups?.id || ''
}

export function capitalize(value: string) {
  return value.slice(0, 1).toUpperCase() + value.slice(1)
}
