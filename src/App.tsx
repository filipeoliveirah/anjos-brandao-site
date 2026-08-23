import { useEffect, useState } from 'react'
import AOS from 'aos'
import Header from './components/layout/Header/Header'
import Preloader from './components/layout/Preloader/Preloader'
import Hero from './components/sections/Hero/Hero'
import Empresa from './components/sections/Empresa/Empresa'
import Capacidades from './components/sections/Capacidades/Capacidades'
import Obras from './components/sections/Obras/Obras'
import BlogSection from './components/sections/Blog/BlogSection'
import Contato from './components/sections/Contato/Contato'
import ServicePageTemplate from './components/templates/ServicePageTemplate'
import BlogListTemplate from './components/templates/BlogListTemplate'
import BlogPostTemplate from './components/templates/BlogPostTemplate'
import WhatsAppButton from './components/ui/WhatsAppButton/WhatsAppButton'
import { detailedServices } from './data/services'
import { getAllPosts, getAllCategories, getPostBySlug } from './data/blog'
import { Post, PostDetail, Category } from './types/blog'

const BASE_URL = 'https://www.anjosbrandao.eco.br'

function updateMetaTag(selector: string, attr: string, value: string) {
  let element = document.querySelector(selector)
  if (!element) {
    if (selector.startsWith('meta[')) {
      element = document.createElement('meta')
      const match = selector.match(/meta\[([a-zA-Z0-9_\-:]+)="([^"]+)"\]/)
      if (match) {
        element.setAttribute(match[1], match[2])
        document.head.appendChild(element)
      }
    } else if (selector.startsWith('link[')) {
      element = document.createElement('link')
      const match = selector.match(/link\[([a-zA-Z0-9_\-:]+)="([^"]+)"\]/)
      if (match) {
        element.setAttribute(match[1], match[2])
        document.head.appendChild(element)
      }
    }
  }
  if (element) {
    element.setAttribute(attr, value)
  }
}

export function scrollToAnchor(targetId: string, smooth = true) {
  const cleanId = targetId.replace(/^#/, '').replace(/^\/#/, '')
  if (!cleanId) return

  let attempts = 0
  const maxAttempts = 30

  const doScroll = () => {
    attempts++
    const element = document.getElementById(cleanId)
    if (element) {
      const headerEl = document.querySelector('header')
      const headerHeight = headerEl ? headerEl.offsetHeight : 80
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = Math.max(0, elementTop - headerHeight + 5)

      window.scrollTo({
        top: offsetPosition,
        behavior: smooth ? 'smooth' : 'auto',
      })

      setTimeout(() => {
        if (typeof (window as any).AOS?.refresh === 'function') {
          (window as any).AOS.refresh()
        }
      }, 350)
    } else if (attempts < maxAttempts) {
      setTimeout(doScroll, 60)
    }
  }

  requestAnimationFrame(doScroll)
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [pathname, setPathname] = useState(window.location.pathname)

  const [blogPosts, setBlogPosts] = useState<Post[]>([])
  const [blogCategories, setBlogCategories] = useState<Category[]>([])
  const [currentPost, setCurrentPost] = useState<PostDetail | null>(null)
  const [blogLoading, setBlogLoading] = useState(false)

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      offset: 60,
      easing: 'ease-in-out',
      debounceDelay: 50,
      throttleDelay: 99,
    })

    const handleWindowLoad = () => {
      AOS.refresh()
    }
    window.addEventListener('load', handleWindowLoad)

    const handlePopState = () => {
      setPathname(window.location.pathname)
      if (window.location.hash) {
        scrollToAnchor(window.location.hash, true)
      }
    }
    window.addEventListener('popstate', handlePopState)

    const timer = setTimeout(() => {
      setLoaded(true)
      AOS.refresh()
    }, 150)

    const handleLinkClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return
      const href = target.getAttribute('href')
      if (!href) return

      if (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        target.getAttribute('target') === '_blank'
      ) {
        return
      }

      if (href.startsWith('#')) {
        const hash = href.substring(1)
        if (hash) {
          e.preventDefault()
          window.history.pushState({}, '', href)
          scrollToAnchor(hash, true)
        }
        return
      }

      if (href.startsWith('/')) {
        const isHashOnHome = href.startsWith('/#')

        if (isHashOnHome) {
          e.preventDefault()
          const hash = href.replace(/^\/#/, '')
          window.history.pushState({}, '', href)

          if (window.location.pathname !== '/') {
            setPathname('/')
          }

          scrollToAnchor(hash, true)
          return
        }

        e.preventDefault()
        window.history.pushState({}, '', href)
        setPathname(window.location.pathname)
        window.scrollTo(0, 0)

        setTimeout(() => {
          if (typeof (window as any).AOS?.refresh === 'function') {
            (window as any).AOS.refresh()
          }
        }, 100)
      }
    }

    document.addEventListener('click', handleLinkClick)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('load', handleWindowLoad)
      window.removeEventListener('popstate', handlePopState)
      document.removeEventListener('click', handleLinkClick)
    }
  }, [])

  useEffect(() => {
    if (window.location.hash && pathname === '/') {
      scrollToAnchor(window.location.hash, false)
    }
  }, [pathname])

  const cleanPath = pathname.replace(/^\//, '').replace(/\/$/, '')
  const isBlogList = cleanPath === 'blog'
  const isBlogPost = cleanPath.startsWith('blog/')
  const blogPostSlug = isBlogPost ? cleanPath.replace(/^blog\//, '') : ''
  const activeService = detailedServices[cleanPath]

  // Carregar dados de Blog
  useEffect(() => {
    if (isBlogList) {
      setBlogLoading(true)
      Promise.all([getAllPosts(), getAllCategories()]).then(([posts, categories]) => {
        setBlogPosts(posts)
        setBlogCategories(categories)
        setBlogLoading(false)
      })
    } else if (isBlogPost && blogPostSlug) {
      setBlogLoading(true)
      getPostBySlug(blogPostSlug).then((post) => {
        setCurrentPost(post)
        setBlogLoading(false)
      })
    }
  }, [isBlogList, isBlogPost, blogPostSlug])

  // Gerenciamento dinâmico de SEO / Meta Tags
  useEffect(() => {
    if (isBlogPost && currentPost) {
      const pageTitle = currentPost.seo?.metaTitle || `${currentPost.title} | Blog Anjos Brandão`
      const pageDesc = currentPost.seo?.metaDescription || currentPost.excerpt
      const pageUrl = `${BASE_URL}/blog/${currentPost.slug}`
      const pageImage = currentPost.seo?.shareImageUrl || currentPost.mainImageUrl || `${BASE_URL}/images/hero-bg-3000.webp`

      document.title = pageTitle
      updateMetaTag('meta[name="description"]', 'content', pageDesc)
      updateMetaTag('link[rel="canonical"]', 'href', pageUrl)

      // Open Graph
      updateMetaTag('meta[property="og:type"]', 'content', 'article')
      updateMetaTag('meta[property="og:title"]', 'content', pageTitle)
      updateMetaTag('meta[property="og:description"]', 'content', pageDesc)
      updateMetaTag('meta[property="og:url"]', 'content', pageUrl)
      updateMetaTag('meta[property="og:image"]', 'content', pageImage)

      // Twitter
      updateMetaTag('meta[name="twitter:title"]', 'content', pageTitle)
      updateMetaTag('meta[name="twitter:description"]', 'content', pageDesc)
      updateMetaTag('meta[name="twitter:image"]', 'content', pageImage)
    } else if (isBlogList) {
      const pageTitle = 'Blog & Publicações Técnicas | Anjos Brandão Soluções Ambientais'
      const pageDesc = 'Artigos, análises e guias práticos sobre licenciamento ambiental no INEMA, PGRS, ASV, inventário florestal e ESG na Bahia.'
      const pageUrl = `${BASE_URL}/blog`
      const pageImage = `${BASE_URL}/images/hero-bg-3000.webp`

      document.title = pageTitle
      updateMetaTag('meta[name="description"]', 'content', pageDesc)
      updateMetaTag('link[rel="canonical"]', 'href', pageUrl)

      // Open Graph
      updateMetaTag('meta[property="og:type"]', 'content', 'website')
      updateMetaTag('meta[property="og:title"]', 'content', pageTitle)
      updateMetaTag('meta[property="og:description"]', 'content', pageDesc)
      updateMetaTag('meta[property="og:url"]', 'content', pageUrl)
      updateMetaTag('meta[property="og:image"]', 'content', pageImage)

      // Twitter
      updateMetaTag('meta[name="twitter:title"]', 'content', pageTitle)
      updateMetaTag('meta[name="twitter:description"]', 'content', pageDesc)
      updateMetaTag('meta[name="twitter:image"]', 'content', pageImage)
    } else if (activeService) {
      const pageTitle = `${activeService.title} | Anjos Brandão Soluções Ambientais`
      const pageDesc = activeService.description
      const pageUrl = `${BASE_URL}/${activeService.slug}`
      const pageImage = `${BASE_URL}${activeService.heroImage.replace(/\.jpg$/, '.webp')}`

      document.title = pageTitle
      updateMetaTag('meta[name="description"]', 'content', pageDesc)
      updateMetaTag('link[rel="canonical"]', 'href', pageUrl)

      // Open Graph
      updateMetaTag('meta[property="og:type"]', 'content', 'website')
      updateMetaTag('meta[property="og:title"]', 'content', pageTitle)
      updateMetaTag('meta[property="og:description"]', 'content', pageDesc)
      updateMetaTag('meta[property="og:url"]', 'content', pageUrl)
      updateMetaTag('meta[property="og:image"]', 'content', pageImage)

      // Twitter
      updateMetaTag('meta[name="twitter:title"]', 'content', pageTitle)
      updateMetaTag('meta[name="twitter:description"]', 'content', pageDesc)
      updateMetaTag('meta[name="twitter:image"]', 'content', pageImage)
    } else {
      const homeTitle = 'Anjos Brandão · Coordenação Ambiental Integrada'
      const homeDesc = 'Anjos Brandão — coordenação ambiental integrada à construção civil, infraestrutura e indústria. Licenciamento (LP→LO), gestão, monitoramento, ESG e operações de campo na Bahia.'
      const homeUrl = `${BASE_URL}/`
      const homeImage = `${BASE_URL}/images/hero-bg-3000.webp`

      document.title = homeTitle
      updateMetaTag('meta[name="description"]', 'content', homeDesc)
      updateMetaTag('link[rel="canonical"]', 'href', homeUrl)

      // Open Graph
      updateMetaTag('meta[property="og:type"]', 'content', 'website')
      updateMetaTag('meta[property="og:title"]', 'content', homeTitle)
      updateMetaTag('meta[property="og:description"]', 'content', homeDesc)
      updateMetaTag('meta[property="og:url"]', 'content', homeUrl)
      updateMetaTag('meta[property="og:image"]', 'content', homeImage)

      // Twitter
      updateMetaTag('meta[name="twitter:title"]', 'content', homeTitle)
      updateMetaTag('meta[name="twitter:description"]', 'content', homeDesc)
      updateMetaTag('meta[name="twitter:image"]', 'content', homeImage)
    }
  }, [isBlogList, isBlogPost, currentPost, activeService, pathname])

  // Renderização Condicional de Rotas
  return (
    <>
      <Preloader visible={!loaded} />

      {isBlogPost && (
        currentPost ? (
          <BlogPostTemplate post={currentPost} />
        ) : (
          <div style={{ minHeight: '100vh', background: 'var(--ab-offwhite)' }}>
            <Header />
            <div style={{ paddingTop: '20rem', textAlign: 'center', fontFamily: 'Gothic A1, sans-serif' }}>
              <h2>{blogLoading ? 'Carregando publicação...' : 'Artigo não encontrado'}</h2>
              {!blogLoading && (
                <p style={{ marginTop: '2rem' }}>
                  <a href="/blog" style={{ color: 'var(--ab-green)', fontWeight: 700 }}>
                    ← Voltar para o Blog
                  </a>
                </p>
              )}
            </div>
          </div>
        )
      )}

      {isBlogList && <BlogListTemplate posts={blogPosts} categories={blogCategories} />}

      {activeService && <ServicePageTemplate service={activeService} />}

      {!isBlogPost && !isBlogList && !activeService && (
        <>
          <Header />
          <main id="content">
            <Hero />
            <Empresa />
            <Capacidades />
            <Obras />
            <BlogSection />
          </main>
          <Contato />
        </>
      )}

      <WhatsAppButton />
    </>
  )
}
