import fs from 'node:fs/promises'
import path from 'node:path'
import { createServer } from 'vite'
import { JSDOM } from 'jsdom'
import { generateSitemap, generateRss } from './generate-sitemap.mjs'

const server = await createServer({ mode: 'production', server: { middlewareMode: true }, appType: 'custom' })
try {
  const { loadBlog, blogRoutes, renderBlog } = await server.ssrLoadModule('/src/blog-build.tsx')
  const { posts, categories } = await loadBlog()
  const routes = blogRoutes(posts, categories)
  const template = await fs.readFile('dist/index.html', 'utf8')
  for (const route of routes) {
    const { html, snapshot, meta } = renderBlog(route, posts, categories)
    const dom = new JSDOM(template)
    const doc = dom.window.document
    doc.title = meta.title
    doc.querySelector('link[rel="canonical"]').href = meta.canonical
    const values = {
      'meta[name="description"]': meta.description,
      'meta[property="og:title"]': meta.title,
      'meta[property="og:description"]': meta.description,
      'meta[property="og:url"]': meta.canonical,
      'meta[property="og:image"]': meta.image,
      'meta[property="og:type"]': meta.type,
      'meta[name="twitter:title"]': meta.title,
      'meta[name="twitter:description"]': meta.description,
      'meta[name="twitter:image"]': meta.image,
    }
    for (const [selector, value] of Object.entries(values)) doc.querySelector(selector)?.setAttribute('content', value)
    doc.getElementById('root').innerHTML = html
    const data = doc.createElement('script')
    data.type = 'application/json'
    data.id = 'blog-snapshot'
    data.textContent = JSON.stringify(snapshot).replace(/</g, '\\u003c')
    doc.body.appendChild(data)
    const filename = path.join('dist', `${route}.html`)
    await fs.mkdir(path.dirname(filename), { recursive: true })
    await fs.writeFile(filename, dom.serialize())
    dom.window.close()
  }
  const staticRoutes = ['/', '/licenciamento-ambiental', '/pgrs', '/inventario-florestal', '/autorizacao-supressao-vegetal', '/resgate-fauna-flora']
  await fs.writeFile('dist/sitemap.xml', generateSitemap(posts, [...staticRoutes, ...routes]))
  await fs.writeFile('dist/rss.xml', generateRss(posts))
  console.log(`Blog: ${posts.length} articles, ${routes.length} HTML pages, sitemap and RSS generated.`)
} finally {
  await server.close()
}
