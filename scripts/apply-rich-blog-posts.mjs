import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { RICH_POSTS } from './generate-rich-blog-posts.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log(`Métricas de SEO e contagem de palavras dos ${RICH_POSTS.length} artigos:\n`)

let allApproved = true

for (let i = 0; i < RICH_POSTS.length; i++) {
  const post = RICH_POSTS[i]
  const texts = []

  for (const item of post.body) {
    if (item.text) texts.push(item.text)
    if (item.title) texts.push(item.title)
    if (item.children) {
      for (const child of item.children) {
        if (child.text) texts.push(child.text)
      }
    }
  }

  const fullText = texts.join(' ')
  const words = fullText.split(/\s+/).filter(Boolean).length
  const primaryKw = post.seo.keywords[0]
  const kwRegex = new RegExp(primaryKw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi')
  const kwMatches = (fullText.match(kwRegex) || []).length
  const density = ((kwMatches * primaryKw.split(' ').length / words) * 100).toFixed(2)

  const isApproved = words >= 1000
  if (!isApproved) allApproved = false

  console.log(`📌 Artigo ${i + 1}: "${post.title}"`)
  console.log(`   - Palavras no corpo: ${words} palavras (Meta: ≥ 1.000) -> ${isApproved ? '✅ Aprovado' : '⚠️ Abaixo de 1000'}`)
  console.log(`   - Palavra-Chave Principal: "${primaryKw}" (Ocorrências: ${kwMatches}x | Densidade: ${density}%)`)
  console.log(`   - Meta Title (${post.seo.metaTitle.length} chars): "${post.seo.metaTitle}"`)
  console.log(`   - Meta Description (${post.seo.metaDescription.length} chars): "${post.seo.metaDescription}"`)
  console.log('--------------------------------------------------')
}

// 2. Gerar o código TypeScript para src/data/blog.ts
const blogPath = path.resolve(__dirname, '../src/data/blog.ts')

const initialPostsCode = RICH_POSTS.map((post) => {
  const categoriesCode = `[${post.categoryIndexes.map((idx) => `INITIAL_CATEGORIES[${idx}]`).join(', ')}]`
  
  return `  {
    _id: '${post._id}',
    title: ${JSON.stringify(post.title)},
    slug: ${JSON.stringify(post.slug)},
    excerpt: ${JSON.stringify(post.excerpt)},
    publishedAt: '${post.publishedAt}',
    estimatedReadTime: ${post.estimatedReadTime},
    featured: ${post.featured},
    mainImageUrl: '${post.mainImageUrl}',
    mainImageAlt: ${JSON.stringify(post.mainImageAlt)},
    mainImageCaption: ${JSON.stringify(post.mainImageCaption)},
    author: {
      name: ${JSON.stringify(post.author.name)},
      ${post.author.slug ? `slug: ${JSON.stringify(post.author.slug)},` : ''}
      role: ${JSON.stringify(post.author.role)},
      bio: ${JSON.stringify(post.author.bio)},
      linkedin: ${JSON.stringify(post.author.linkedin)},
      ${post.author.avatarUrl ? `avatarUrl: ${JSON.stringify(post.author.avatarUrl)},` : ''}
    },
    categories: ${categoriesCode},
    body: ${JSON.stringify(post.body, null, 6).replace(/^/gm, '    ').trim()},
    seo: {
      metaTitle: ${JSON.stringify(post.seo.metaTitle)},
      metaDescription: ${JSON.stringify(post.seo.metaDescription)},
      keywords: ${JSON.stringify(post.seo.keywords)},
    },
  },`
}).join('\n')

// Substitui só a lista INITIAL_POSTS; consultas, tipos e funções de blog.ts ficam como estão no repositório.
const START = 'export const INITIAL_POSTS: PostDetail[] = [\n'
const END = '\n]\n\n// ==========================================\n// Service Functions'
const current = fs.readFileSync(blogPath, 'utf-8')
const start = current.indexOf(START)
const end = current.indexOf(END, start)
if (start === -1 || end === -1) throw new Error('Marcadores de INITIAL_POSTS não encontrados em src/data/blog.ts')
const updated = current.slice(0, start + START.length) + initialPostsCode + current.slice(end)
fs.writeFileSync(blogPath, updated, 'utf-8')
console.log(`Arquivo src/data/blog.ts atualizado com ${RICH_POSTS.length} artigos.`)
