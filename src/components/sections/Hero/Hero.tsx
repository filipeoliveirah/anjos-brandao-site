import styles from './Hero.module.css'

const SECTORS = ['Construção civil', 'Infraestrutura', 'Indústria']

export default function Hero() {
  return (
    <section id="hero" className={`${styles.hero} target-section`}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-bg-3000.jpg"
      >
        <source src="/images/hero-video.mp4" type="video/mp4" />
      </video>

      <div className={styles.content}>
        <div>
          <div className={styles.brandContainer}>
            <span className={styles.brandTagline}>Soluções Ambientais</span>
          </div>
          <h1 className={styles.heading}>
            Coordenação contínua,
            atuando desde o planejamento pré-obra
            até a execução e permanência operacional.
          </h1>
          <ul className={styles.sectors} aria-label="Setores de atuação">
            {SECTORS.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>

      <div className={styles.scroll}>
        <a className={styles.scrollLink} href="#empresa" aria-label="Avançar para a seção A empresa">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 24l-8-9h6v-15h4v15h6z" />
          </svg>
        </a>
      </div>
    </section>
  )
}
