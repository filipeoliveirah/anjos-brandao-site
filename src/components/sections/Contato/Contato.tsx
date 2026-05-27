import { useEffect, useState } from 'react'
import Button from '../../ui/Button/Button'
import styles from './Contato.module.css'

export default function Contato() {
  const [showGoTop, setShowGoTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowGoTop(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <footer id="contato" className={`${styles.footer} h-dark-bg`}>
      <div className="right-vert-line" />

      <div className={`row ${styles.main}`}>
        <div className={`column large-6 tab-full ${styles.leftColumn}`}>
          <div data-aos="fade-up">
            <h3 className="subhead">Contato</h3>
            <h1 className="display-1">
              Nos conte o projeto.<br /> A gente mapeia o que é preciso para o licenciamento avançar e apresenta proposta na medida.
            </h1>
          </div>
          <div className={styles.cta} data-aos="fade-up">
            <Button variant="primary" href="mailto:contato@anjosbrandao.eco.br" fullWidth className={styles.buttonAdjust}>
              Falar com consultor
            </Button>
          </div>
        </div>

        <div className="column large-5 tab-full">
          <div className={styles.contacts}>
            <div className={styles.contactBlock} data-aos="fade-up">
              <h5>E-mail</h5>
              <p><a href="mailto:contato@anjosbrandao.eco.br">contato@anjosbrandao.eco.br</a></p>
            </div>
            <div className={styles.contactBlock} data-aos="fade-up">
              <h5>Telefone</h5>
              <p><a href="tel:+5571991822466">+55 71 9.9182-2466</a></p>
            </div>
            <div className={styles.contactBlock} data-aos="fade-up">
              <h5>Sede</h5>
              <p>Av. Áurea Seixas, 646<br />Dias d'Ávila · BA · 42850-000</p>
            </div>
            <div className={styles.contactBlock} data-aos="fade-up">
              <h5>Comercial</h5>
              <ul><li><a href="https://wa.me/5571991822466" target="_blank" rel="noopener noreferrer">WhatsApp</a></li></ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`row ${styles.bottom}`}>
        <div className={styles.copyright}>
          <span>© {new Date().getFullYear()} Anjos Brandão · Coordenação Ambiental</span>
          <span>Criado pela <a href="https://www.outlimit.com.br/" target="_blank" rel="noopener noreferrer">Out Limit</a></span>
        </div>
      </div>


    </footer >
  )
}
