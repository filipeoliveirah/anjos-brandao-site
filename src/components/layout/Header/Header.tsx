import { useEffect, useState } from 'react'
import { useScrollSpy } from '../../../hooks/useScrollSpy'
import Button from '../../ui/Button/Button'
import { detailedServices } from '../../../data/services'
import styles from './Header.module.css'

const NAV_ITEMS = [
  { id: 'hero', label: 'Início' },
  { id: 'empresa', label: 'Empresa' },
  { id: 'capacidades', label: 'Capacidades' },
  { id: 'obras', label: 'Obras' },
  { id: 'contato', label: 'Contato' },
]

// Sub-links for the 5 priority service pages, shown as a dropdown under "Capacidades".
// Sourced from detailedServices so the menu can't drift out of sync with the real pages.
const SERVICE_LINKS = Object.values(detailedServices).map((s) => ({ slug: s.slug, title: s.title }))

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [isOffset, setIsOffset] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const activeId = useScrollSpy(NAV_ITEMS.map((n) => n.id))

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : ''
  const currentSlug = currentPath.replace(/^\//, '').replace(/\/$/, '')
  const isServicePage = Boolean(detailedServices[currentSlug])

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
    const close = () => {
      if (window.innerWidth >= 901) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('resize', close)
    return () => window.removeEventListener('resize', close)
  }, [])

  const headerCls = [styles.header, isSticky && styles.sticky, isOffset && styles.offset]
    .filter(Boolean).join(' ')

  const contentCls = [styles.content, isMenuOpen && styles.open].filter(Boolean).join(' ')

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={headerCls}>
      <div className={styles.logo}>
        <a className={styles.wordmark} href="/" onClick={closeMenu}>
          Anjos <span>Brandão</span>
        </a>
      </div>

      <div className={contentCls}>
        <nav aria-label="Navegação principal">
          <ul className={styles.nav}>
            {NAV_ITEMS.map(({ id, label }) => {
              const isCapacidades = id === 'capacidades'
              const isParentActive = isCapacidades
                ? (activeId === 'capacidades' || isServicePage)
                : (activeId === id)

              if (isCapacidades) {
                return (
                  <li key={id} className={styles.navItem}>
                    <a
                      href={`/#${id}`}
                      className={`${styles.navLink} ${isParentActive ? styles.active : ''}`}
                      onClick={closeMenu}
                    >
                      <span>{label}</span>
                      <svg
                        className={styles.chevron}
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M1 1L5 5L9 1"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>

                    {/* Dropdown for Desktop */}
                    <div className={styles.dropdown}>
                      <div className={styles.dropdownInner}>
                        <div className={styles.dropdownHeading}>Serviços Técnicos</div>
                        <ul className={styles.dropdownList}>
                          {SERVICE_LINKS.map(({ slug, title }) => {
                            const isCurrent = currentSlug === slug
                            return (
                              <li key={slug}>
                                <a
                                  href={`/${slug}`}
                                  className={`${styles.dropdownLink} ${isCurrent ? styles.dropdownLinkActive : ''}`}
                                  onClick={closeMenu}
                                >
                                  {title}
                                </a>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* Indented Submenu for Mobile Drawer */}
                    <ul className={styles.mobileSubmenu}>
                      {SERVICE_LINKS.map(({ slug, title }) => (
                        <li key={slug}>
                          <a
                            href={`/${slug}`}
                            className={`${styles.mobileSubLink} ${currentSlug === slug ? styles.mobileSubLinkActive : ''}`}
                            onClick={closeMenu}
                          >
                            <span className={styles.mobileSubDash}>—</span>
                            <span>{title}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                )
              }

              return (
                <li key={id} className={styles.navItem}>
                  <a
                    href={`/#${id}`}
                    className={`${styles.navLink} ${isParentActive ? styles.active : ''}`}
                    onClick={closeMenu}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={styles.cta}>
          <Button variant="stroke" href="/#contato" onClick={closeMenu}>Contato</Button>
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
