import { useEffect, useState } from 'react'
import AOS from 'aos'
import Header from './components/layout/Header/Header'
import Preloader from './components/layout/Preloader/Preloader'
import Hero from './components/sections/Hero/Hero'
import Empresa from './components/sections/Empresa/Empresa'
import Capacidades from './components/sections/Capacidades/Capacidades'
import Obras from './components/sections/Obras/Obras'
import Contato from './components/sections/Contato/Contato'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 600, once: true, offset: 100, easing: 'ease-in-out', disable: 'mobile' })

    if (document.readyState === 'complete') {
      setLoaded(true)
    } else {
      const onLoad = () => setLoaded(true)
      window.addEventListener('load', onLoad)
      return () => window.removeEventListener('load', onLoad)
    }
  }, [])

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
