import { useEffect, useState } from 'react'
import { TocItem } from '../../../utils/toc'
import { scrollToAnchor } from '../../../App'
import styles from './TableOfContents.module.css'

interface TableOfContentsProps {
  items: TocItem[]
  className?: string
}

export default function TableOfContents({ items, className = '' }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [readingProgress, setReadingProgress] = useState<number>(0)

  useEffect(() => {
    if (items.length === 0) return

    // 1. Scroll spy com IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting)
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id)
        }
      },
      {
        rootMargin: '-100px 0% -65% 0%',
        threshold: 0,
      }
    )

    items.forEach((item) => {
      const el = document.getElementById(item.id)
      if (el) observer.observe(el)
    })

    // 2. Barra de progresso de leitura
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const currentProgress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100))
        setReadingProgress(currentProgress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [items])

  if (!items || items.length < 2) return null

  const handleHeadingClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    setActiveId(id)
    window.history.pushState({}, '', `#${id}`)
    scrollToAnchor(id, true)
  }

  return (
    <aside className={`${styles.tocCard} ${className}`} aria-label="Sumário do artigo">
      <div className={styles.progressBar} style={{ width: `${readingProgress}%` }} />

      <header className={styles.header}>
        <div className={styles.titleWrap}>
          <svg
            className={styles.icon}
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
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          <span className={styles.title}>Neste Artigo (Sumário)</span>
          <span className={styles.countBadge}>{items.length} tópicos</span>
        </div>

        <button
          className={styles.toggleBtn}
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? 'Ocultar sumário' : 'Exibir sumário'}
        >
          <svg
            className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </header>

      {isOpen && (
        <nav className={styles.nav}>
          <ol className={styles.list}>
            {items.map((item) => {
              const isActive = activeId === item.id
              return (
                <li
                  key={item.id}
                  className={`${styles.item} ${item.level === 3 ? styles.itemH3 : styles.itemH2} ${
                    isActive ? styles.itemActive : ''
                  }`}
                >
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleHeadingClick(e, item.id)}
                    className={styles.link}
                  >
                    <span className={styles.bullet} />
                    <span className={styles.text}>{item.text}</span>
                  </a>
                </li>
              )
            })}
          </ol>
        </nav>
      )}
    </aside>
  )
}
