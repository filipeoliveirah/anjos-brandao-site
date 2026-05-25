import type { PortfolioItem } from '../../../../data/portfolio'
import styles from './FolioItem.module.css'

interface FolioItemProps {
  item: PortfolioItem
}

export default function FolioItem({ item }: FolioItemProps) {
  return (
    <div className={styles.item} data-aos="fade-up">
      <div className={styles.thumb}>
        <a
          className={styles.thumbLink}
          href={item.gallery}
          data-pswp-width={item.width}
          data-pswp-height={item.height}
          title={item.title}
        >
          <img
            src={item.thumb}
            srcSet={`${item.thumb} 1x, ${item.thumb2x} 2x`}
            alt={item.title}
            loading="lazy"
            decoding="async"
          />
        </a>
      </div>
      <div className={styles.info}>
        <span className={styles.category}>{item.category}</span>
        <h4 className={styles.title}>{item.title}</h4>
      </div>
      <div className={styles.caption}>
        <p>{item.caption}</p>
      </div>
    </div>
  )
}
