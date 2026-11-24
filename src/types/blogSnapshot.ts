import type { Post, PostDetail, Category } from './blog'

export interface BlogSnapshot {
  pathname: string
  posts: Post[]
  categories: Category[]
  post: PostDetail | null
}
