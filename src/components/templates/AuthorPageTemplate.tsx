import { useState, useMemo } from 'react'
import Header from '../layout/Header/Header'
import PostCard from '../blog/PostCard/PostCard'
import Pagination from '../ui/Pagination/Pagination'
import Button from '../ui/Button/Button'
import { Post } from '../../types/blog'
import { AuthorProfile } from '../../data/authors'
import base from './CategoryPageTemplate.module.css'
import styles from './AuthorPageTemplate.module.css'

interface AuthorPageTemplateProps {
  author: AuthorProfile
  posts: Post[]
  loading: boolean
}

const ITEMS_PER_PAGE = 6
const BASE_URL = 'https://www.anjosbrandao.eco.br'

export default function AuthorPageTemplate({ author, posts, loading }: AuthorPageTemplateProps) {
  const [currentPage, setCurrentPage] = useState<number>(1)

  const authorPosts = useMemo(
    () => posts.filter((post) => post.author?.slug === author.slug),
    [posts, author.slug]
  )

  const totalPages = Math.ceil(authorPosts.length / ITEMS_PER_PAGE)
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return authorPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [authorPosts, currentPage])

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    document.getElementById('artigos-autora')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const canonicalUrl = `${BASE_URL}/blog/autores/${author.slug}`

  const schemaProfile = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: canonicalUrl,
    mainEntity: {
      '@type': 'Person',
      '@id': `${canonicalUrl}#pessoa`,
      name: author.name,
      jobTitle: author.role,
      description: author.bio,
      image: `${BASE_URL}${author.photoUrl.replace(/\.webp$/, '.jpg')}`,
      url: canonicalUrl,
      sameAs: [author.linkedin],
      worksFor: {
        '@type': 'Organization',
        name: author.organization,
        url: BASE_URL,
      },
      alumniOf: author.education.map((item) => ({
        '@type': 'EducationalOrganization',
        name: item.institution,
      })),
      hasCredential: [
        ...author.education.map((item) => ({
          '@type': 'EducationalOccupationalCredential',
          name: item.course,
          credentialCategory: item.credential,
          dateCreated: String(item.year),
          recognizedBy: { '@type': 'EducationalOrganization', name: item.institution },
        })),
        {
          '@type': 'EducationalOccupationalCredential',
          name: author.registry,
          credentialCategory: 'registro profissional',
          recognizedBy: { '@type': 'Organization', name: 'Conselho Regional de Biologia' },
        },
      ],
      knowsAbout: author.areas,
    },
  }

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: author.name, item: canonicalUrl },
    ],
  }

  return (
    <div className={base.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProfile) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />

      <Header />

      <section id="hero" className={`${base.hero} h-dark-bg target-section`}>
        <div className="row">
          <div className="column large-full">
            <nav className={base.breadcrumb} aria-label="Breadcrumb">
              <a href="/">Home</a> / <a href="/blog">Blog</a> / <span>{author.name}</span>
            </nav>
            <div className={styles.heroInner}>
              <img
                src={author.photoUrl}
                alt={author.photoAlt}
                className={styles.photo}
                width={220}
                height={220}
              />
              <div>
                <span className={base.categoryBadge}>Autora do blog</span>
                <h1 className={base.title}>{author.name}</h1>
                <p className={styles.role}>
                  {author.role}, {author.organization}
                </p>
                <p className={styles.registry}>Bióloga, {author.registry}</p>
                <a
                  href={author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer me"
                  className={styles.linkedin}
                >
                  Perfil no LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.profile}>
        <div className="row">
          <div className="column large-full">
            <div className={styles.profileGrid}>
              <div className={styles.bioBlock}>
                <h2 className={styles.sectionTitle}>Apresentação</h2>
                <p className={styles.bio}>{author.bio}</p>
              </div>
              <div className={styles.factsBlock}>
                <h2 className={styles.sectionTitle}>Formação</h2>
                <ul className={styles.list}>
                  {author.education.map((item) => (
                    <li key={item.course}>
                      <strong>{item.course}</strong>
                      <span>
                        {item.institution}, {item.year}
                      </span>
                    </li>
                  ))}
                </ul>
                <h2 className={styles.sectionTitle}>Áreas de atuação</h2>
                <ul className={styles.tags}>
                  {author.areas.map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main id="artigos-autora" className={base.mainContent}>
        <div className="row">
          <div className="column large-full">
            <h2 className={styles.postsTitle}>Artigos de {author.name}</h2>
            {paginatedPosts.length > 0 ? (
              <>
                <div className={base.grid}>
                  {paginatedPosts.map((post) => (
                    <PostCard key={post._id || post.slug} post={post} />
                  ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  totalItems={authorPosts.length}
                  itemsPerPage={ITEMS_PER_PAGE}
                />
              </>
            ) : (
              <p className={base.emptyText}>{loading ? 'Carregando artigos...' : 'Nenhum artigo publicado ainda.'}</p>
            )}
          </div>
        </div>
      </main>

      <footer className={base.ctaSection}>
        <div className="row">
          <div className="column large-full">
            <div className={base.ctaInner}>
              <p className="subhead">Assessoria Técnica Especializada</p>
              <h2 className={base.ctaTitle}>Fale com a equipe técnica da Anjos Brandão</h2>
              <p className={base.ctaSubtitle}>
                Licenciamento ambiental, gestão de resíduos, recuperação de áreas degradadas e educação ambiental em toda a Bahia.
              </p>
              <Button variant="primary" href="/#contato">
                Solicitar atendimento técnico
              </Button>
            </div>
            <div className={base.footerBottom}>
              <p>© {new Date().getFullYear()} Anjos Brandão · Coordenação Ambiental Integrada</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
