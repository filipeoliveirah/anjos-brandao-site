import type { Sector } from '../../../../data/sectors'
import styles from './SectorCard.module.css'

interface SectorCardProps {
  sector: Sector
}

export default function SectorCard({ sector }: SectorCardProps) {
  return (
    <div className={styles.card} data-aos="fade-up">
      <div className={styles.header}>
        <h6>
          <span className={styles.title}>{sector.title}</span>
          <span className={styles.subtitle}>{sector.subtitle}</span>
        </h6>
        <div className={styles.timeframe}>{sector.timeframe}</div>
      </div>
      <p>{sector.description}</p>
    </div>
  )
}
