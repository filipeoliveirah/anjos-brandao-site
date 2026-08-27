import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { RICH_POSTS } from './generate-rich-blog-posts.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('📊 Verificando métricas de SEO e contagem de palavras dos 7 artigos:\n')

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
      name: '${post.author.name}',
      role: '${post.author.role}',
      bio: '${post.author.bio}',
      linkedin: '${post.author.linkedin}',
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

const fullBlogFileContent = `import { sanityClient, isSanityConfigured } from '../lib/sanity'
import { Post, PostDetail, Category } from '../types/blog'

// ==========================================
// GROQ Queries
// ==========================================

export const POSTS_QUERY = \`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    estimatedReadTime,
    featured,
    mainImage,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    "mainImageCaption": mainImage.caption,
    author->{
      name,
      "slug": slug.current,
      role,
      "avatarUrl": avatar.asset->url,
      bio,
      linkedin
    },
    categories[]->{
      title,
      "slug": slug.current,
      description,
      color
    }
  }
\`

export const RECENT_POSTS_QUERY = \`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    estimatedReadTime,
    featured,
    mainImage,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    author->{
      name,
      "slug": slug.current,
      role,
      "avatarUrl": avatar.asset->url
    },
    categories[]->{
      title,
      "slug": slug.current,
      color
    }
  }
\`

export const POST_BY_SLUG_QUERY = \`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    estimatedReadTime,
    featured,
    mainImage,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    "mainImageCaption": mainImage.caption,
    author->{
      name,
      "slug": slug.current,
      role,
      "avatarUrl": avatar.asset->url,
      bio,
      linkedin
    },
    categories[]->{
      title,
      "slug": slug.current,
      description,
      color
    },
    body,
    seo {
      metaTitle,
      metaDescription,
      "shareImageUrl": shareImage.asset->url,
      keywords,
      canonicalUrl
    },
    "relatedPosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      estimatedReadTime,
      "mainImageUrl": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,
      author->{
        name,
        role,
        "avatarUrl": avatar.asset->url
      },
      categories[]->{
        title,
        "slug": slug.current,
        color
      }
    }
  }
\`

export const CATEGORIES_QUERY = \`
  *[_type == "category"] | order(title asc) {
    title,
    "slug": slug.current,
    description,
    color
  }
\`

// ==========================================
// Fallback / Initial Seed Data
// ==========================================

export const INITIAL_CATEGORIES: Category[] = [
  { title: 'Licenciamento Ambiental', slug: 'licenciamento-ambiental', description: 'LP, LI, LO e regularização junto ao INEMA e IBAMA' },
  { title: 'PGRS & Resíduos', slug: 'pgrs-residuos', description: 'Gestão de resíduos na construção civil e indústria' },
  { title: 'Inventário & ASV', slug: 'inventario-asv', description: 'Inventário florestal e autorização de supressão vegetal' },
  { title: 'Fauna e Flora', slug: 'fauna-flora', description: 'Resgate, afugentamento e monitoramento biótico em campo' },
  { title: 'ESG & Compliance', slug: 'esg-compliance', description: 'Governança ambiental, mitigação de riscos e sustentabilidade' },
]

export const INITIAL_POSTS: PostDetail[] = [
${initialPostsCode}
]

// ==========================================
// Service Functions with Sanity + Fallback
// ==========================================

export async function getAllPosts(): Promise<Post[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const posts = await sanityClient.fetch<Post[]>(POSTS_QUERY)
      if (posts && posts.length > 0) {
        return posts
      }
    } catch (err) {
      console.warn('Falha ao buscar posts no Sanity, usando dados locais de fallback:', err)
    }
  }
  return INITIAL_POSTS
}

export async function getRecentPosts(limit = 3): Promise<Post[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const posts = await sanityClient.fetch<Post[]>(RECENT_POSTS_QUERY)
      if (posts && posts.length > 0) {
        return posts.slice(0, limit)
      }
    } catch (err) {
      console.warn('Falha ao buscar posts recentes no Sanity, usando dados locais de fallback:', err)
    }
  }
  return INITIAL_POSTS.slice(0, limit)
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  if (isSanityConfigured && sanityClient) {
    try {
      const post = await sanityClient.fetch<PostDetail>(POST_BY_SLUG_QUERY, { slug })
      if (post) {
        return post
      }
    } catch (err) {
      console.warn(\`Falha ao buscar post slug "\${slug}" no Sanity:\`, err)
    }
  }
  const local = INITIAL_POSTS.find((p) => p.slug === slug)
  if (local) {
    return {
      ...local,
      relatedPosts: INITIAL_POSTS.filter((p) => p.slug !== slug).slice(0, 3),
    }
  }
  return null
}

export async function getAllCategories(): Promise<Category[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const categories = await sanityClient.fetch<Category[]>(CATEGORIES_QUERY)
      if (categories && categories.length > 0) {
        return categories
      }
    } catch (err) {
      console.warn('Falha ao buscar categorias no Sanity:', err)
    }
  }
  return INITIAL_CATEGORIES
}
`

fs.writeFileSync(blogPath, fullBlogFileContent, 'utf-8')
console.log('✅ Arquivo src/data/blog.ts atualizado com sucesso com todos os 7 artigos ricos!')
