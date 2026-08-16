import type { Service } from '../../../../data/services'
import styles from './ServiceItem.module.css'

interface ServiceItemProps {
  service: Service
  isOpen: boolean
  onToggle: () => void
}

const SERVICE_PAGES: Record<string, { slug: string; label: string }[]> = {
  licenciamento: [{ slug: 'licenciamento-ambiental', label: 'Conhecer detalhes do Licenciamento Ambiental →' }],
  pgrs: [{ slug: 'pgrs', label: 'Conhecer detalhes do PGRS →' }],
  campo: [
    { slug: 'autorizacao-supressao-vegetal', label: 'Autorização de Supressão Vegetal (ASV) →' },
    { slug: 'inventario-florestal', label: 'Inventário Florestal →' },
    { slug: 'resgate-fauna-flora', label: 'Resgate de Fauna e Flora →' },
  ],
}

export default function ServiceItem({ service, isOpen, onToggle }: ServiceItemProps) {
  const serviceLinks = SERVICE_PAGES[service.id]

  return (
    <li className={`${styles.item}${isOpen ? ` ${styles.open}` : ''}`}>
      <div
        className={styles.itemHeader}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onClick={onToggle}
        onKeyDown={(e) => e.key === 'Enter' && onToggle()}
      >
        <h5>{service.title}</h5>
      </div>
      <div className={styles.itemBody}>
        <p>{service.description}</p>
        {serviceLinks && (
          <div className={styles.serviceLinks}>
            {serviceLinks.map((link) => (
              <a key={link.slug} href={`/${link.slug}`} className={styles.serviceLink}>
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  )
}
