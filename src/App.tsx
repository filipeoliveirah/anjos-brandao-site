import { useEffect, useState } from 'react'
import AOS from 'aos'
import Header from './components/layout/Header/Header'
import Preloader from './components/layout/Preloader/Preloader'
import Hero from './components/sections/Hero/Hero'
import Empresa from './components/sections/Empresa/Empresa'
import Capacidades from './components/sections/Capacidades/Capacidades'
import Obras from './components/sections/Obras/Obras'
import Contato from './components/sections/Contato/Contato'
import ServicePageTemplate from './components/templates/ServicePageTemplate'
import { detailedServices } from './data/services'

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

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 100, easing: 'ease-in-out', disable: 'mobile' })

    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)

    // Agilizar descarte do preloader para FCP imediato
    const timer = setTimeout(() => setLoaded(true), 150)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const slug = pathname.replace(/^\//, '').replace(/\/$/, '')
  const activeService = detailedServices[slug]

  useEffect(() => {
    if (activeService) {
      const pageTitle = `${activeService.title} | Anjos Brandão Soluções Ambientais`
      const pageDesc = activeService.description
      const pageUrl = `${BASE_URL}/${activeService.slug}`
      const pageImage = `${BASE_URL}${activeService.heroImage.replace(/\.jpg$/, '.webp')}`

      document.title = pageTitle
      updateMetaTag('meta[name="description"]', 'content', pageDesc)
      updateMetaTag('link[rel="canonical"]', 'href', pageUrl)

      // Open Graph
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
      updateMetaTag('meta[property="og:title"]', 'content', homeTitle)
      updateMetaTag('meta[property="og:description"]', 'content', homeDesc)
      updateMetaTag('meta[property="og:url"]', 'content', homeUrl)
      updateMetaTag('meta[property="og:image"]', 'content', homeImage)

      // Twitter
      updateMetaTag('meta[name="twitter:title"]', 'content', homeTitle)
      updateMetaTag('meta[name="twitter:description"]', 'content', homeDesc)
      updateMetaTag('meta[name="twitter:image"]', 'content', homeImage)
    }
  }, [activeService, pathname])

  if (activeService) {
    return <ServicePageTemplate service={activeService} />
  }

  return (
    <>
      <Preloader visible={!loaded} />
      <Header />
      <main id="content">
        <Hero />
        <Empresa />
        <Capacidades />
        <Obras />
      </main>
      <Contato />
    </>
  )
}
