import { Post } from '../../../types/blog'
import { urlForImage } from '../../../lib/sanity'
import styles from './PostCard.module.css'

interface PostCardProps {
  post: Post
  featured?: boolean
}

export default function PostCard({ post }: PostCardProps) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      })
    : ''

  const categoryName = post.categories?.[0]?.title ?? 'Artigo Técnico'

  // Image resolution priority: direct URL -> Sanity Builder -> placeholder
  let imageUrl = post.mainImageUrl || '/images/hero-bg-3000.webp'
  if (post.mainImage && !post.mainImageUrl) {
    const built = urlForImage(post.mainImage)
    if (built) imageUrl = built.width(800).height(450).auto('format').url()
  }

  const readTime = post.estimatedReadTime || 5

  return (
    <a href={`/blog/${post.slug}`} className={styles.card} aria-label={`Ler artigo: ${post.title}`}>
      <div className={styles.imageWrapper}>
        <img
          src={imageUrl}
          alt={post.mainImageAlt || post.title}
          className={styles.image}
          loading="lazy"
          decoding="async"
        />
        <span className={styles.categoryBadge}>{categoryName}</span>
      </div>

      <div className={styles.content}>
        <div className={styles.meta}>
          <time dateTime={post.publishedAt} className={styles.metaItem}>
            {formattedDate}
          </time>
          <span className={styles.metaDot}>•</span>
          <span className={styles.metaItem}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {readTime} min de leitura
          </span>
        </div>

        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>

        <div className={styles.footer}>
          <span className={styles.author}>{post.author?.name || 'Anjos Brandão'}</span>
          <span className={styles.readMore}>
            Ler artigo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}
