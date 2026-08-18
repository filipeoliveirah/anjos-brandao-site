import { useState } from 'react'
import Header from '../layout/Header/Header'
import LeadForm from '../ui/LeadForm/LeadForm'
import PortableTextRenderer from '../blog/PortableTextRenderer/PortableTextRenderer'
import AuthorBio from '../blog/AuthorBio/AuthorBio'
import PostCard from '../blog/PostCard/PostCard'
import { PostDetail } from '../../types/blog'
import { urlForImage } from '../../lib/sanity'
import styles from './BlogPostTemplate.module.css'

interface BlogPostTemplateProps {
  post: PostDetail
}

const BASE_URL = 'https://www.anjosbrandao.eco.br'

export default function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const [copied, setCopied] = useState(false)

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''

  const canonicalUrl = post.seo?.canonicalUrl || `${BASE_URL}/blog/${post.slug}`
  const primaryCategory = post.categories?.[0]
  const readTime = post.estimatedReadTime || 5

  let imageUrl = post.mainImageUrl || '/images/hero-bg-3000.webp'
  if (post.mainImage && !post.mainImageUrl) {
    const built = urlForImage(post.mainImage)
    if (built) imageUrl = built.width(1400).height(700).auto('format').url()
  }

  // Schema.org BlogPosting
  const schemaArticle = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    headline: post.title,
    description: post.excerpt,
    image: [imageUrl.startsWith('http') ? imageUrl : `${BASE_URL}${imageUrl}`],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author?.name || 'Anjos Brandão',
      jobTitle: post.author?.role,
      url: post.author?.linkedin || BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Anjos Brandão Soluções Ambientais',
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logo.svg`,
      },
    },
  }

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: canonicalUrl },
    ],
  }

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(canonicalUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  const shareText = encodeURIComponent(`${post.title} — Anjos Brandão`)
  const shareUrl = encodeURIComponent(canonicalUrl)

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaArticle) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />

      <Header />

      <header id="hero" className={`${styles.hero} h-dark-bg target-section`}>
        <div className="row">
          <div className="column large-full">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <a href="/">Home</a> / <a href="/blog">Blog</a> / <span>{primaryCategory?.title || 'Artigo'}</span>
            </nav>

            {primaryCategory && (
              <span className={styles.categoryBadge}>{primaryCategory.title}</span>
            )}

            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>

            <div className={styles.metaRow}>
              <div className={styles.authorMeta}>
                {post.author?.avatarUrl && (
                  <img
                    src={post.author.avatarUrl}
                    alt={post.author.name}
                    className={styles.authorAvatar}
                  />
                )}
                <span>{post.author?.name}</span>
              </div>
              <span className={styles.metaDot}>•</span>
              <time dateTime={post.publishedAt} className={styles.metaItem}>
                {formattedDate}
              </time>
              <span className={styles.metaDot}>•</span>
              <span className={styles.metaItem}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {readTime} min de leitura
              </span>
            </div>
          </div>
        </div>
      </header>

      {imageUrl && (
        <div className={styles.featuredImageSection}>
          <div className="row">
            <div className="column large-full">
              <div className={styles.imageWrapper}>
                <img
                  src={imageUrl}
                  alt={post.mainImageAlt || post.title}
                  className={styles.featuredImage}
                  fetchPriority="high"
                />
              </div>
              {post.mainImageCaption && (
                <p className={styles.imageCaption}>{post.mainImageCaption}</p>
              )}
            </div>
          </div>
        </div>
      )}

      <main className={styles.articleBody}>
        <div className="row">
          <div className="column large-full">
            <div className={styles.articleContainer}>
              <PortableTextRenderer value={post.body} />

              <div className={styles.shareBar}>
                <span className={styles.shareLabel}>Compartilhar artigo:</span>
                <div className={styles.shareButtons}>
                  <a
                    href={`https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.shareBtn} ${styles.shareBtnWhatsapp}`}
                    aria-label="Compartilhar no WhatsApp"
                  >
                    WhatsApp
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.shareBtn} ${styles.shareBtnLinkedin}`}
                    aria-label="Compartilhar no LinkedIn"
                  >
                    LinkedIn
                  </a>
                  <button
                    onClick={handleCopyLink}
                    className={styles.shareBtn}
                    aria-label="Copiar link do artigo"
                  >
                    {copied ? '✓ Link copiado!' : 'Copiar link'}
                  </button>
                </div>
              </div>

              {post.author && <AuthorBio author={post.author} />}
            </div>
          </div>
        </div>
      </main>

      {post.relatedPosts && post.relatedPosts.length > 0 && (
        <section className={styles.relatedSection}>
          <div className="row">
            <div className="column large-full">
              <h3 className={styles.relatedHeading}>Artigos Relacionados</h3>
              <div className={styles.relatedGrid}>
                {post.relatedPosts.map((related) => (
                  <PostCard key={related._id || related.slug} post={related} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <footer id="formulario" className={styles.formSection}>
        <div className="row">
          <div className="column large-full">
            <div className={styles.formInner}>
              <p className="subhead">Atuação Integrada</p>
              <h2 className={styles.formTitle}>Precisa de suporte técnico ambiental na sua obra?</h2>
              <LeadForm defaultDemanda="Outra demanda" ctaText="Solicitar consultoria técnica" />
            </div>
            <div className={styles.bottom}>
              <p>© {new Date().getFullYear()} Anjos Brandão · Coordenação Ambiental Integrada</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
