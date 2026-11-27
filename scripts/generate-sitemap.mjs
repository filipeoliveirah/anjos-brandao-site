export const BASE_URL = 'https://www.anjosbrandao.eco.br'
export const xmlEscape = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char])

export function generateSitemap(posts, routes) {
  const dated = new Map(posts.filter((p) => p.modifiedAt && Date.parse(p.modifiedAt) >= Date.parse(p.publishedAt) && Date.parse(p.modifiedAt) <= Date.now()).map((p) => [`/blog/${p.slug}`, p.modifiedAt]))
  // Omit unknown modification dates. A redeploy is not a content update.
  const urls = routes.map((route) => `  <url><loc>${xmlEscape(`${BASE_URL}${route}`)}</loc>${dated.has(route) ? `<lastmod>${xmlEscape(dated.get(route))}</lastmod>` : ''}</url>`)
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`
}

export function generateRss(posts) {
  const items = posts.map((post) => {
    const link = post.seo?.canonicalUrl || `${BASE_URL}/blog/${post.slug}`
    return `  <item><title>${xmlEscape(post.title)}</title><link>${xmlEscape(link)}</link><guid isPermaLink="true">${xmlEscape(link)}</guid><description>${xmlEscape(post.excerpt)}</description><pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate></item>`
  })
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"><channel><title>Anjos Brandão — Blog Ambiental</title><link>${BASE_URL}/blog</link><description>Artigos, análises e guias ambientais para empresas na Bahia.</description><language>pt-br</language><atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml"/>\n${items.join('\n')}\n</channel></rss>\n`
}
