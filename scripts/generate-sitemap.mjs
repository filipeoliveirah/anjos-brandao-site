import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@sanity/client'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const BASE_URL = 'https://www.anjosbrandao.eco.br'
const SITEMAP_PATH = path.resolve(__dirname, '../public/sitemap.xml')

const STATIC_ROUTES = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'licenciamento-ambiental', priority: '0.9', changefreq: 'monthly' },
  { path: 'pgrs', priority: '0.9', changefreq: 'monthly' },
  { path: 'inventario-florestal', priority: '0.9', changefreq: 'monthly' },
  { path: 'autorizacao-supressao-vegetal', priority: '0.9', changefreq: 'monthly' },
  { path: 'resgate-fauna-flora', priority: '0.9', changefreq: 'monthly' },
  { path: 'blog', priority: '0.9', changefreq: 'daily' },
]

const FALLBACK_BLOG_SLUGS = [
  'guia-licenciamento-ambiental-inema-bahia',
  'pgrs-construcao-civil-reducao-custos-conformidade',
  'inventario-florestal-asv-supressao-vegetal-segura',
  'renovacao-licenca-operacao-lo-prazos-documentos-inema',
  'resgate-fauna-supressao-vegetal-requisitos-inema',
  'mtr-online-gestao-residuos-perigosos-classe-1',
  'due-diligence-ambiental-compra-terrenos-loteamentos',
]

async function fetchSanityPosts() {
  const projectId = process.env.VITE_SANITY_PROJECT_ID
  const dataset = process.env.VITE_SANITY_DATASET || 'production'

  if (!projectId || projectId === 'your-project-id' || projectId === 'undefined') {
    return FALLBACK_BLOG_SLUGS.map((slug) => ({
      slug,
      updatedAt: new Date().toISOString().split('T')[0],
    }))
  }

  try {
    const client = createClient({
      projectId,
      dataset,
      apiVersion: '2024-03-01',
      useCdn: false,
    })

    const posts = await client.fetch(`*[_type == "post" && defined(slug.current)] {
      "slug": slug.current,
      "_updatedAt": _updatedAt
    }`)

    return posts.map((p) => ({
      slug: p.slug,
      updatedAt: p._updatedAt ? p._updatedAt.split('T')[0] : new Date().toISOString().split('T')[0],
    }))
  } catch (err) {
    console.warn('⚠️ [Sitemap] Aviso: Não foi possível conectar ao Sanity durante o build, usando slugs padrão:', err.message)
    return FALLBACK_BLOG_SLUGS.map((slug) => ({
      slug,
      updatedAt: new Date().toISOString().split('T')[0],
    }))
  }
}

async function generateSitemap() {
  console.log('🗺️ [Sitemap] Gerando sitemap dinâmico...')
  const today = new Date().toISOString().split('T')[0]
  const blogPosts = await fetchSanityPosts()

  const staticUrls = STATIC_ROUTES.map(
    (route) => `  <url>
    <loc>${BASE_URL}/${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
  ).join('\n')

  const blogUrls = blogPosts.map(
    (post) => `  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${post.updatedAt || today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  ).join('\n')

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticUrls}
${blogUrls}
</urlset>
`

  fs.writeFileSync(SITEMAP_PATH, xmlContent.trim(), 'utf-8')
  console.log(`✅ [Sitemap] Sitemap gerado com sucesso com ${STATIC_ROUTES.length + blogPosts.length} URLs em ${SITEMAP_PATH}`)
}

generateSitemap()
