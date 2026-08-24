import { useState, useEffect } from 'react'
import Button from '../../ui/Button/Button'
import styles from './Hero.module.css'

const SECTORS = ['Construção Civil', 'Infraestrutura', 'Indústria']

export default function Hero() {
  const [loadVideo, setLoadVideo] = useState(false)

  useEffect(() => {
    const isSaveData = (navigator as any).connection?.saveData
    const isSlow = ['slow-2g', '2g', '3g'].includes((navigator as any).connection?.effectiveType)

    if (!isSaveData && !isSlow) {
      const timer = setTimeout(() => {
        setLoadVideo(true)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <section id="hero" className={`${styles.hero} target-section`}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-bg-3000.webp"
        preload="none"
      >
        {loadVideo && <source src="/images/hero-video.mp4" type="video/mp4" />}
      </video>

      <div className={styles.content}>
        <div className={styles.inner}>
          <div className={styles.brandContainer}>
            <span className={styles.brandTagline}>
              Soluções ambientais para empresas e empreendimentos
            </span>
          </div>
          <h1 className={styles.heading}>
            Licenciamento e gestão ambiental integrados à operação do seu negócio.
          </h1>
          <p className={styles.description}>
            Do planejamento à operação, coordenamos licenças, estudos, condicionantes e serviços ambientais para manter o empreendimento em conformidade e avançando.
          </p>
          <div className={styles.sectorsContainer}>
            <span className={styles.sectorsPrefix}>Atuamos em:</span>
            <ul className={styles.sectors} aria-label="Setores de atuação">
              {SECTORS.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
          <div className={styles.cta}>
            <Button variant="primary" href="/#contato">
              Solicitar avaliação do projeto
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
