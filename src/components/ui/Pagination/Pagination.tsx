import type { ReactNode } from 'react'
import styles from './Pagination.module.css'

interface PaginationProps {
  pageHref?: (page: number) => string
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  totalItems?: number
  itemsPerPage?: number
}

export default function Pagination({
  pageHref,
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  totalItems,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const getPageNumbers = () => {
    const pages: (number | string)[] = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      pages.push(1)

      let start = Math.max(2, currentPage - 1)
      let end = Math.min(totalPages - 1, currentPage + 1)

      if (currentPage <= 2) {
        end = 4
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3
      }

      if (start > 2) {
        pages.push('ellipsis-start')
      }

      for (let i = start; i <= end; i++) {
        pages.push(i)
      }

      if (end < totalPages - 1) {
        pages.push('ellipsis-end')
      }

      pages.push(totalPages)
    }

    return pages
  }

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page)
    }
  }

  const control = (page: number, label: string, className: string, children: ReactNode, disabled = false, active = false) => (
    pageHref && !disabled ? (
      <a href={pageHref(page)} className={className} aria-label={label} aria-current={active ? 'page' : undefined}>{children}</a>
    ) : (
      <button type="button" onClick={() => handlePageClick(page)} disabled={disabled} className={className} aria-label={label} aria-current={active ? 'page' : undefined}>{children}</button>
    )
  )

  return (
    <nav className={`${styles.paginationContainer} ${className}`} aria-label="Navegação entre páginas do blog">
      {totalItems !== undefined && <div className={styles.info}>Mostrando página <strong>{currentPage}</strong> de <strong>{totalPages}</strong> ({totalItems} publicações)</div>}
      <ul className={styles.paginationList}>
        <li>{control(currentPage - 1, 'Página anterior', `${styles.navBtn} ${styles.prevBtn}`, '← Anterior', currentPage === 1)}</li>
        {getPageNumbers().map((page) => typeof page === 'string' ? (
          <li key={page} className={styles.ellipsisItem} aria-hidden="true"><span className={styles.ellipsis}>…</span></li>
        ) : (
          <li key={page}>{control(page, `Ir para a página ${page}`, `${styles.pageBtn} ${page === currentPage ? styles.pageBtnActive : ''}`, page, false, page === currentPage)}</li>
        ))}
        <li>{control(currentPage + 1, 'Próxima página', `${styles.navBtn} ${styles.nextBtn}`, 'Próxima →', currentPage === totalPages)}</li>
      </ul>
    </nav>
  )
}
