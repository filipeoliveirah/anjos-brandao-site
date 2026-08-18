export interface Author {
  name: string
  slug?: string
  role: string
  avatar?: any
  avatarUrl?: string
  bio?: string
  linkedin?: string
}

export interface Category {
  title: string
  slug: string
  description?: string
  color?: string
}

export interface SeoMeta {
  metaTitle?: string
  metaDescription?: string
  shareImage?: any
  shareImageUrl?: string
  keywords?: string[]
  canonicalUrl?: string
}

export interface Post {
  _id: string
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  estimatedReadTime?: number
  featured?: boolean
  mainImage?: any
  mainImageUrl?: string
  mainImageAlt?: string
  mainImageCaption?: string
  author: Author
  categories: Category[]
}

export interface PostDetail extends Post {
  body: any[] // Portable Text blocks
  seo?: SeoMeta
  relatedPosts?: Post[]
}
