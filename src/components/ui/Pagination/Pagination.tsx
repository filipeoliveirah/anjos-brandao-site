import styles from './Pagination.module.css'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
  totalItems?: number
  itemsPerPage?: number
}

export default function Pagination({
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

  return (
    <nav className={`${styles.paginationContainer} ${className}`} aria-label="Navegação entre páginas do blog">
      {totalItems !== undefined && (
        <div className={styles.info}>
          Mostrando página <strong>{currentPage}</strong> de <strong>{totalPages}</strong> ({totalItems} publicações)
        </div>
      )}

      <ul className={styles.paginationList}>
        {/* Botão Anterior */}
        <li>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className={`${styles.navBtn} ${styles.prevBtn}`}
            aria-label="Página anterior"
          >
            <svg
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
              <polyline points="15 18 9 12 15 6" />
            </svg>
            <span>Anterior</span>
          </button>
        </li>

        {/* Números das Páginas */}
        {getPageNumbers().map((page, index) => {
          if (typeof page === 'string') {
            return (
              <li key={`ellipsis-${index}`} className={styles.ellipsisItem} aria-hidden="true">
                <span className={styles.ellipsis}>…</span>
              </li>
            )
          }

          const isActive = page === currentPage
          return (
            <li key={page}>
              <button
                onClick={() => handlePageClick(page)}
                className={`${styles.pageBtn} ${isActive ? styles.pageBtnActive : ''}`}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Ir para a página ${page}`}
              >
                {page}
              </button>
            </li>
          )
        })}

        {/* Botão Próxima */}
        <li>
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`${styles.navBtn} ${styles.nextBtn}`}
            aria-label="Próxima página"
          >
            <span>Próxima</span>
            <svg
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
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  )
}
