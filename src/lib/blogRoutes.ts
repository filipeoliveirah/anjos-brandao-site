export const BLOG_PAGE_SIZE = 6

// Historical links still present in older CMS articles.
export const LEGACY_BLOG_PATHS: Record<string, string> = {
  '/blog/categoria/florestal-fauna': '/blog/categoria/fauna-flora',
  '/blog/categoria/residuos-solidos': '/blog/categoria/pgrs-residuos',
  '/blog/resgate-fauna-supressao-vegetal-obras': '/blog/resgate-fauna-supressao-vegetal-requisitos-inema',
  '/blog/inventario-florestal-asv-guia-completo': '/blog/inventario-florestal-asv-supressao-vegetal-segura',
}

export function blogPagePath(basePath: string, page: number): string {
  return page > 1 ? `${basePath}/pagina/${page}` : basePath
}

export function parseBlogPath(pathname: string) {
  const path = pathname.replace(/\/$/, '')
  const match = path.match(/^(\/blog(?:\/(?:categoria|autores)\/[^/]+)?)\/pagina\/([2-9]|[1-9]\d+)$/)
  return { basePath: match?.[1] || path, page: match ? Number(match[2]) : 1 }
}
