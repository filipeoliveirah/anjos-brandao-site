import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[]): string {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    const visibility: Record<string, number> = {}

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility[entry.target.id] = entry.intersectionRatio
        })
        const best = Object.entries(visibility).reduce<{ id: string; ratio: number }>(
          (acc, [id, ratio]) => (ratio > acc.ratio ? { id, ratio } : acc),
          { id: '', ratio: -1 }
        )
        if (best.id) setActiveId(best.id)
      },
      { threshold: [0, 0.1, 0.5, 1] }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
