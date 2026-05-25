import { usePhotoSwipe } from '../../../hooks/usePhotoSwipe'
import SectionIntro from '../../ui/SectionIntro/SectionIntro'
import FolioItem from './FolioItem/FolioItem'
import { portfolioItems } from '../../../data/portfolio'
import styles from './Obras.module.css'

export default function Obras() {
  usePhotoSwipe('#obras-grid')

  return (
    <section id="obras" className={`${styles.obras} target-section`}>
      <div className={`row ${styles.header}`}>
        <div className="column large-6 medium-8 tab-full">
          <SectionIntro
            num="03"
            subhead="Obras"
            title="Uma seleção de frentes recentes, 14 obras documentadas entre 2019 e 2026."
          />
        </div>
      </div>

      <div id="obras-grid" className={styles.grid}>
        {portfolioItems.map((item) => (
          <FolioItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
