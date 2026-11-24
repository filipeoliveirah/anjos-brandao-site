import test from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs/promises'
import { JSDOM } from 'jsdom'
import { generateSitemap, generateRss } from '../scripts/generate-sitemap.mjs'

const BASE = 'https://www.anjosbrandao.eco.br'
const openHtml = async (route) => new JSDOM(await fs.readFile(`dist${route}.html`, 'utf8'), { url: `${BASE}${route}` })

test('all sitemap blog routes have complete HTML, matching canonical and working static links', async () => {
  const sitemap = new JSDOM(await fs.readFile('dist/sitemap.xml', 'utf8'), { contentType: 'text/xml' })
  const routes = [...sitemap.window.document.querySelectorAll('loc')].map((n) => new URL(n.textContent).pathname)
  const cssFiles = (await fs.readdir('dist/assets')).filter((name) => name.endsWith('.css'))
  const css = (await Promise.all(cssFiles.map((name) => fs.readFile(`dist/assets/${name}`, 'utf8')))).join('')
  let articleCount = 0
  for (const route of routes.filter((r) => r.startsWith('/blog'))) {
    const dom = await openHtml(route)
    const doc = dom.window.document
    const snapshot = JSON.parse(doc.getElementById('blog-snapshot').textContent)
    assert.equal(doc.querySelector('link[rel=canonical]').href, snapshot.post?.seo?.canonicalUrl || `${BASE}${route}`)
    assert.ok(doc.querySelector('h1')?.textContent)
    assert.ok(doc.getElementById('root').textContent.length > 500)
    for (const className of doc.querySelector('h1').classList) assert.ok(css.includes(`.${className}`), `SSR CSS class missing: ${className}`)
    assert.equal(doc.querySelector('meta[property="og:url"]').content, doc.querySelector('link[rel=canonical]').href)
    assert.ok(doc.querySelector('link[type="application/rss+xml"]'))
    for (const link of doc.querySelectorAll('a[href^="/blog"]')) {
      assert.ok(routes.includes(link.getAttribute('href')), `Unknown static link on ${route}: ${link.href}`)
    }
    if (snapshot.post) {
      articleCount++
      assert.equal(doc.querySelector('h1').textContent, snapshot.post.title)
      const article = [...doc.querySelectorAll('script[type="application/ld+json"]')].map((n) => JSON.parse(n.textContent)).find((s) => s['@type'] === 'BlogPosting')
      assert.equal(article.datePublished, snapshot.post.publishedAt)
      assert.equal(article.author.name, snapshot.post.author.name)
      assert.ok(doc.querySelector('main').textContent.length > 2000, route)
    }
    dom.window.close()
  }
  const blog = await openHtml('/blog')
  assert.equal(articleCount, JSON.parse(blog.window.document.getElementById('blog-snapshot').textContent).posts.length)
  blog.window.close()
  sitemap.window.close()
})

test('page two has its own title, canonical, six different cards and real pagination anchors', async () => {
  const first = await openHtml('/blog')
  const second = await openHtml('/blog/pagina/2')
  const cards = (doc) => [...doc.querySelectorAll('a[aria-label^="Ler artigo:"]')].map((a) => a.href)
  assert.equal(cards(second.window.document).length, 6)
  assert.ok(cards(second.window.document).every((url) => !cards(first.window.document).includes(url)))
  assert.match(second.window.document.title, /Página 2/)
  assert.equal(second.window.document.querySelector('a[aria-label="Página anterior"]').getAttribute('href'), '/blog')
  assert.equal(second.window.document.querySelector('a[aria-label="Próxima página"]').getAttribute('href'), '/blog/pagina/3')
  first.window.close(); second.window.close()
})

test('RSS is valid XML and preserves publication dates; sitemap never invents update dates', () => {
  const posts = [{ slug: 'a-b', title: 'A & B < C', excerpt: '"Texto" & detalhes', publishedAt: '2026-11-20T12:00:00Z' }]
  const rss = new JSDOM(generateRss(posts), { contentType: 'text/xml' })
  assert.equal(rss.window.document.querySelector('item title').textContent, posts[0].title)
  assert.equal(Date.parse(rss.window.document.querySelector('pubDate').textContent), Date.parse(posts[0].publishedAt))
  assert.ok(!generateSitemap(posts, ['/', '/blog/a-b']).includes('<lastmod>'))
  posts[0].modifiedAt = '2026-11-23T10:00:00Z'
  assert.match(generateSitemap(posts, ['/', '/blog/a-b']), /<lastmod>2026-11-23T10:00:00Z<\/lastmod>/)
  rss.window.close()
})
