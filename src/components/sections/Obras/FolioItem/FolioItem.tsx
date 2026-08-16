import type { PortfolioItem } from '../../../../data/portfolio'
import styles from './FolioItem.module.css'

interface FolioItemProps {
  item: PortfolioItem
}

export default function FolioItem({ item }: FolioItemProps) {
  const thumbWebp = item.thumb.replace(/\.jpg$/, '.webp')
  const thumb2xWebp = item.thumb2x.replace(/\.jpg$/, '.webp')

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
          <picture>
            <source type="image/webp" srcSet={`${thumbWebp} 1x, ${thumb2xWebp} 2x`} />
            <img
              src={item.thumb}
              srcSet={`${item.thumb} 1x, ${item.thumb2x} 2x`}
              alt={item.title}
              width={800}
              height={600}
              loading="lazy"
              decoding="async"
            />
          </picture>
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
