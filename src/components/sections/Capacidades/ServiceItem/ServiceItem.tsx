import type { Service } from '../../../../data/services'
import styles from './ServiceItem.module.css'

interface ServiceItemProps {
  service: Service
  isOpen: boolean
  onToggle: () => void
}

export default function ServiceItem({ service, isOpen, onToggle }: ServiceItemProps) {
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
      </div>
    </li>
  )
}
