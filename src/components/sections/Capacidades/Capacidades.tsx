import { useState } from 'react'
import SectionIntro from '../../ui/SectionIntro/SectionIntro'
import ServiceItem from './ServiceItem/ServiceItem'
import { services } from '../../../data/services'
import styles from './Capacidades.module.css'

export default function Capacidades() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? -1 : i))

  return (
    <section id="capacidades" className={`${styles.services} target-section h-dark-bg`}>
      <div className="vert-line" />
      <div className="row">
        <div className={`column large-6 ${styles.leftCol}`}>
          <SectionIntro
            num="02"
            subhead="Capacidades"
            title="Estrutura para operações de múltipla complexidade."
          />
          <p data-aos="fade-up">
            Reunimos licenciamento, gestão, monitoramento e operações de campo em uma única coordenação técnica,
            de modo que cada etapa avance sem interromper a obra e cada condicionante seja cumprida com rastreabilidade.
          </p>
        </div>

        <div className="column large-6">
          <ul className={styles.list} data-aos="fade-up">
            {services.map((service, i) => (
              <ServiceItem
                key={service.id}
                service={service}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
