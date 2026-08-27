export interface TocItem {
  id: string
  text: string
  level: 2 | 3
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove diacritics / acentos
    .replace(/[^a-z0-9\s-]/g, '') // remove special characters
    .trim()
    .replace(/\s+/g, '-') // replace spaces with hyphens
    .replace(/-+/g, '-') // replace multiple hyphens
}

export function extractTextFromBlock(block: any): string {
  if (!block) return ''
  if (typeof block === 'string') return block
  if (block.text) return block.text
  if (Array.isArray(block.children)) {
    return block.children.map((c: any) => c.text || '').join('')
  }
  return ''
}

export function extractHeadingsFromPortableText(body: any[]): TocItem[] {
  if (!body || !Array.isArray(body)) return []

  const headings: TocItem[] = []
  const usedIds = new Map<string, number>()

  for (const block of body) {
    if (block._type === 'block' && (block.style === 'h2' || block.style === 'h3')) {
      const text = extractTextFromBlock(block).trim()
      if (!text) continue

      let baseId = slugify(text)
      if (!baseId) baseId = 'secao'

      let uniqueId = baseId
      const count = usedIds.get(baseId) || 0
      if (count > 0) {
        uniqueId = `${baseId}-${count}`
      }
      usedIds.set(baseId, count + 1)

      headings.push({
        id: uniqueId,
        text,
        level: block.style === 'h2' ? 2 : 3,
      })
    }
  }

  return headings
}
