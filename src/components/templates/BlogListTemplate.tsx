import { useState, useMemo } from 'react'
import Header from '../layout/Header/Header'
import PostCard from '../blog/PostCard/PostCard'
import Button from '../ui/Button/Button'
import { Post, Category } from '../../types/blog'
import styles from './BlogListTemplate.module.css'

interface BlogListTemplateProps {
  posts: Post[]
  categories: Category[]
}

export default function BlogListTemplate({ posts, categories }: BlogListTemplateProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        post.categories?.some((c) => c.slug === selectedCategory)

      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [posts, selectedCategory, searchQuery])

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.anjosbrandao.eco.br' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.anjosbrandao.eco.br/blog' },
    ],
  }

  const schemaCollection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog Técnico e Regulatório · Anjos Brandão',
    description: 'Artigos, análises e guias sobre licenciamento ambiental, PGRS, ASV, inventário florestal e ESG na Bahia.',
    url: 'https://www.anjosbrandao.eco.br/blog',
  }

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCollection) }} />

      <Header />

      <section className={styles.hero}>
        <div className="row">
          <div className="column large-full">
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <a href="/">Home</a> / <span>Blog</span>
            </nav>
            <p className={`subhead ${styles.eyebrow}`}>Conhecimento Técnico & Regulatório</p>
            <h1 className={styles.title}>Artigos, Análises e Guias Ambientais</h1>
            <p className={styles.subtitle}>
              Conteúdos práticos sobre licenciamento, PGRS, inventário florestal e conformidade ambiental para construção civil, infraestrutura e indústria na Bahia.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.filterSection}>
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
                  placeholder="Buscar artigos por palavra-chave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={styles.searchInput}
                  aria-label="Buscar artigos"
                />
              </div>

              <div className={styles.categoryPills} role="tablist" aria-label="Filtrar por categoria">
                <button
                  className={`${styles.pill} ${selectedCategory === 'all' ? styles.pillActive : ''}`}
                  onClick={() => setSelectedCategory('all')}
                  role="tab"
                  aria-selected={selectedCategory === 'all'}
                >
                  Todos os Artigos ({posts.length})
                </button>
                {categories.map((category) => {
                  const count = posts.filter((p) => p.categories?.some((c) => c.slug === category.slug)).length
                  return (
                    <button
                      key={category.slug}
                      className={`${styles.pill} ${selectedCategory === category.slug ? styles.pillActive : ''}`}
                      onClick={() => setSelectedCategory(category.slug)}
                      role="tab"
                      aria-selected={selectedCategory === category.slug}
                    >
                      {category.title} {count > 0 ? `(${count})` : ''}
                    </button>
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
            {filteredPosts.length > 0 ? (
              <div className={styles.grid}>
                {filteredPosts.map((post) => (
                  <PostCard key={post._id || post.slug} post={post} />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <h3 className={styles.emptyTitle}>Nenhum artigo encontrado</h3>
                <p className={styles.emptyText}>
                  Não encontramos publicações correspondentes aos filtros selecionados.
                </p>
                <button
                  className={styles.resetBtn}
                  onClick={() => {
                    setSelectedCategory('all')
                    setSearchQuery('')
                  }}
                >
                  Limpar filtros
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
              <h2 className={styles.ctaTitle}>Precisa de apoio para o licenciamento ou gestão da sua obra?</h2>
              <p className={styles.ctaSubtitle}>
                Nossa equipe técnica atua diretamente em campo para viabilizar e proteger seu empreendimento.
              </p>
              <Button variant="primary" href="/#contato">
                Fale com nossos especialistas
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
