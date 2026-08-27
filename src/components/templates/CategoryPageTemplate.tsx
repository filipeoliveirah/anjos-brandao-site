import { useState, useMemo } from 'react'
import Header from '../layout/Header/Header'
import PostCard from '../blog/PostCard/PostCard'
import Pagination from '../ui/Pagination/Pagination'
import Button from '../ui/Button/Button'
import { Post, Category } from '../../types/blog'
import styles from './CategoryPageTemplate.module.css'

interface CategoryPageTemplateProps {
  category: Category
  posts: Post[]
  allCategories: Category[]
}

const ITEMS_PER_PAGE = 6
const BASE_URL = 'https://www.anjosbrandao.eco.br'

export default function CategoryPageTemplate({
  category,
  posts,
  allCategories,
}: CategoryPageTemplateProps) {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [currentPage, setCurrentPage] = useState<number>(1)

  // Filtrar posts pertencentes a esta categoria
  const categoryPosts = useMemo(() => {
    return posts.filter((post) =>
      post.categories?.some((c) => c.slug === category.slug)
    )
  }, [posts, category.slug])

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return categoryPosts

    const query = searchQuery.toLowerCase()
    return categoryPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query)
    )
  }, [categoryPosts, searchQuery])

  const totalPages = Math.ceil(filteredPosts.length / ITEMS_PER_PAGE)
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredPosts.slice(startIndex, startIndex + ITEMS_PER_PAGE)
  }, [filteredPosts, currentPage])

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    const filterEl = document.getElementById('grid-categoria')
    if (filterEl) {
      filterEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 380, behavior: 'smooth' })
    }
  }

  const canonicalUrl = `${BASE_URL}/blog/categoria/${category.slug}`

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: category.title, item: canonicalUrl },
    ],
  }

  const schemaCollection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category.title} · Artigos e Publicações | Anjos Brandão`,
    description: category.description || `Artigos técnicos e regulatórios sobre ${category.title} na Bahia.`,
    url: canonicalUrl,
  }

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCollection) }} />

      <Header />

      <section id="hero" className={`${styles.hero} h-dark-bg target-section`}>
        <div className="row">
          <div className="column large-full">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <a href="/">Home</a> / <a href="/blog">Blog</a> / <span>{category.title}</span>
            </nav>
            <span className={styles.categoryBadge}>Categoria Temática</span>
            <h1 className={styles.title}>{category.title}</h1>
            <p className={styles.subtitle}>
              {category.description ||
                `Publicações especializadas, análises regulatórias e guias de conformidade sobre ${category.title} na Bahia.`}
            </p>
          </div>
        </div>
      </section>

      <section id="grid-categoria" className={styles.filterSection}>
        <div className="row">
          <div className="column large-full">
            <div className={styles.filterControls}>
              <div className={styles.searchBox}>
                <svg
                  className={styles.searchIcon}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
                <input
                  type="text"
                  placeholder={`Buscar em ${category.title}...`}
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className={styles.searchInput}
                  aria-label={`Buscar em ${category.title}`}
                />
              </div>

              <div className={styles.categoryPills} role="tablist" aria-label="Navegar por categorias">
                <a href="/blog" className={styles.pill}>
                  ← Todos os Artigos ({posts.length})
                </a>
                {allCategories.map((cat) => {
                  const count = posts.filter((p) => p.categories?.some((c) => c.slug === cat.slug)).length
                  const isCurrent = cat.slug === category.slug
                  return (
                    <a
                      key={cat.slug}
                      href={`/blog/categoria/${cat.slug}`}
                      className={`${styles.pill} ${isCurrent ? styles.pillActive : ''}`}
                      aria-current={isCurrent ? 'page' : undefined}
                    >
                      {cat.title} {count > 0 ? `(${count})` : ''}
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className={styles.mainContent}>
        <div className="row">
          <div className="column large-full">
            {paginatedPosts.length > 0 ? (
              <>
                <div className={styles.grid}>
                  {paginatedPosts.map((post) => (
                    <PostCard key={post._id || post.slug} post={post} />
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                  totalItems={filteredPosts.length}
                  itemsPerPage={ITEMS_PER_PAGE}
                />
              </>
            ) : (
              <div className={styles.emptyState}>
                <h3 className={styles.emptyTitle}>Nenhum artigo encontrado</h3>
                <p className={styles.emptyText}>
                  Não encontramos artigos nesta categoria com o termo buscado.
                </p>
                <button className={styles.resetBtn} onClick={() => setSearchQuery('')}>
                  Limpar busca
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className={styles.ctaSection}>
        <div className="row">
          <div className="column large-full">
            <div className={styles.ctaInner}>
              <p className="subhead">Assessoria Técnica Especializada</p>
              <h2 className={styles.ctaTitle}>
                Precisa de suporte em {category.title} para seu projeto?
              </h2>
              <p className={styles.ctaSubtitle}>
                Nossa equipe multidisciplinar elabora estudos, diagnósticos e projetos com presença em campo em toda a Bahia.
              </p>
              <Button variant="primary" href="/#contato">
                Solicitar atendimento técnico
              </Button>
            </div>
            <div className={styles.footerBottom}>
              <p>© {new Date().getFullYear()} Anjos Brandão · Coordenação Ambiental Integrada</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
