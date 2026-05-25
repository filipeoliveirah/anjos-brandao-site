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
          <h1 className={styles.heading}>
            Coordenação ambiental <br />
            integrada à continuidade <br />
            das obras, em campo, na <br />
            documentação e na operação.
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
