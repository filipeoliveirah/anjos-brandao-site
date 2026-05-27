import { useEffect, useState } from 'react'
import { useScrollSpy } from '../../../hooks/useScrollSpy'
import Button from '../../ui/Button/Button'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { id: 'hero', label: 'Início' },
  { id: 'empresa', label: 'Empresa' },
  { id: 'capacidades', label: 'Capacidades' },
  { id: 'obras', label: 'Obras' },
  { id: 'contato', label: 'Contato' },
]

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isOffset, setIsOffset] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useScrollSpy(NAV_ITEMS.map((n) => n.id))

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById('hero')
      if (!hero) return
      const trigger = hero.offsetHeight - window.innerHeight * 0.9
      const y = window.scrollY
      setIsSticky(y > trigger)
      setIsOffset(y > trigger + 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-is-open', isMenuOpen)
  }, [isMenuOpen])

  useEffect(() => {
    const close = () => { if (window.innerWidth >= 901) setIsMenuOpen(false) }
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const headerCls = [styles.header, isSticky && styles.sticky, isOffset && styles.offset]
    .filter(Boolean).join(' ')

  const contentCls = [styles.content, isMenuOpen && styles.open].filter(Boolean).join(' ')

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className={headerCls}>
      <div className={styles.logo}>
        <a className={styles.wordmark} href="#top" onClick={closeMenu}>
          Anjos <span>Brandão</span>
        </a>
      </div>

      <div className={contentCls}>
        <nav aria-label="Navegação principal">
          <ul className={styles.nav}>
            {NAV_ITEMS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeId === id ? styles.active : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.cta}>
          <Button variant="stroke" href="#contato" onClick={closeMenu}>Contato</Button>
        </div>
      </div>

      <button
        className={styles.menuToggle}
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        {isMenuOpen ? 'Fechar' : 'Menu'}
      </button>
    </header>
  )
}
