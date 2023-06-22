import { useRef, useEffect } from 'react'

export function PokemonListNav({ fetchNextPage }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fetchNextPage()
        }
      },
      {
        rootMargin: '0px',
        threshold: 1.0,
      }
    )

    const currentElement = ref?.current

    if (currentElement) {
      observer.observe(currentElement)
    }

    return () => {
      observer.unobserve(currentElement)
    }
  }, [])

  return <div ref={ref}>로딩중...</div>
}
