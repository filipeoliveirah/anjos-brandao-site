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

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [pathname, setPathname] = useState(window.location.pathname)

  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 100, easing: 'ease-in-out', disable: 'mobile' })

    const handlePopState = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePopState)

    if (document.readyState === 'complete') {
      setLoaded(true)
    } else {
      const onLoad = () => setLoaded(true)
      window.addEventListener('load', onLoad)
      return () => {
        window.removeEventListener('load', onLoad)
        window.removeEventListener('popstate', handlePopState)
      }
    }
  }, [])

  const slug = pathname.replace(/^\//, '').replace(/\/$/, '')
  const activeService = detailedServices[slug]

  useEffect(() => {
    if (activeService) {
      document.title = `${activeService.title} | Anjos Brandão Soluções Ambientais`
      const metaDesc = document.querySelector('meta[name="description"]')
      if (metaDesc) {
        metaDesc.setAttribute('content', activeService.description)
      }
    } else {
      document.title = 'Anjos Brandão · Licenciamento e Gestão Ambiental'
    }
  }, [activeService])

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
