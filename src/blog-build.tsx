import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'
import { INITIAL_POSTS, INITIAL_CATEGORIES, POSTS_QUERY, CATEGORIES_QUERY } from './data/blog'
import { AUTHORS } from './data/authors'
import { sanityClient } from './lib/sanity'
import { BLOG_PAGE_SIZE, blogPagePath, parseBlogPath } from './lib/blogRoutes'
import type { PostDetail, Category } from './types/blog'
import type { BlogSnapshot } from './types/blogSnapshot'

const BASE = 'https://www.anjosbrandao.eco.br'

export async function loadBlog() {
  let posts = INITIAL_POSTS
  let categories = INITIAL_CATEGORIES
  if (sanityClient) {
    // Fail rather than silently publish a stale fallback over a configured CMS.
    const query = POSTS_QUERY.replace('    featured,', `    featured,
      body,
      seo { metaTitle, metaDescription, "shareImageUrl": shareImage.asset->url, canonicalUrl },`)
    const client = sanityClient.withConfig({ useCdn: false })
    ;[posts, categories] = await Promise.all([
      client.fetch<PostDetail[]>(query), client.fetch<Category[]>(CATEGORIES_QUERY),
    ])
    if (!posts.length) throw new Error('Configured CMS returned no blog posts')
  }
  const now = Date.now()
  posts = posts.filter((p) => Number.isFinite(Date.parse(p.publishedAt)) && Date.parse(p.publishedAt) <= now)
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
  for (const post of posts) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(post.slug) || !post.body?.length) throw new Error(`Invalid slug or empty article: ${post.slug}`)
  }
  if (new Set(posts.map((p) => p.slug)).size !== posts.length) throw new Error('Duplicate blog slugs')
  return { posts, categories }
}

export function blogRoutes(posts: PostDetail[], categories: Category[]) {
  const routes: string[] = []
  const addPages = (base: string, count: number) => {
    for (let page = 1; page <= Math.max(1, Math.ceil(count / BLOG_PAGE_SIZE)); page++) routes.push(blogPagePath(base, page))
  }
  addPages('/blog', posts.length)
  categories.forEach((c) => addPages(`/blog/categoria/${c.slug}`, posts.filter((p) => p.categories?.some((pc) => pc.slug === c.slug)).length))
  Object.values(AUTHORS).forEach((a) => addPages(`/blog/autores/${a.slug}`, posts.filter((p) => p.author?.slug === a.slug).length))
  posts.forEach((p) => routes.push(`/blog/${p.slug}`))
  return routes
}

export function renderBlog(pathname: string, posts: PostDetail[], categories: Category[]) {
  const { basePath, page } = parseBlogPath(pathname)
  const post = posts.find((p) => `/blog/${p.slug}` === basePath)
  const author = Object.values(AUTHORS).find((a) => `/blog/autores/${a.slug}` === basePath)
  const category = categories.find((c) => `/blog/categoria/${c.slug}` === basePath)
  const summaries = posts.map(({ body: _body, seo: _seo, relatedPosts: _related, ...summary }) => summary)
  const snapshot: BlogSnapshot = {
    pathname, posts: summaries, categories,
    post: post ? { ...post, relatedPosts: summaries.filter((p) => p.slug !== post.slug).slice(0, 3) } : null,
  }
  const suffix = page > 1 ? ` · Página ${page}` : ''
  const title = post ? (post.seo?.metaTitle || `${post.title} | Blog Anjos Brandão`)
    : author ? `${author.name}, ${author.role}${suffix} | Blog Anjos Brandão`
    : category ? `${category.title}${suffix} · Artigos e Publicações | Anjos Brandão`
    : `Blog & Publicações Técnicas${suffix} | Anjos Brandão Soluções Ambientais`
  const description = post ? (post.seo?.metaDescription || post.excerpt)
    : author ? `${author.name}, bióloga (${author.registry}) e ${author.role.toLowerCase()} da ${author.organization}. Formação, áreas de atuação e artigos publicados.`
    : category ? (category.description || `Artigos técnicos, guias e análises sobre ${category.title} na Bahia.`)
    : 'Artigos, análises e guias práticos sobre licenciamento ambiental no INEMA, PGRS, ASV, inventário florestal e ESG na Bahia.'
  const image = post?.seo?.shareImageUrl || post?.mainImageUrl || (author ? author.photoUrl.replace(/\.webp$/, '.jpg') : '/images/hero-bg-3000.webp')
  return {
    html: renderToString(createElement(App, { initialData: snapshot })), snapshot,
    meta: { title, description, canonical: post?.seo?.canonicalUrl || `${BASE}${pathname}`, image: new URL(image, BASE).href, type: post ? 'article' : author ? 'profile' : 'website' },
  }
}
