import SectionIntro from '../../ui/SectionIntro/SectionIntro'
import SectorCard from './SectorCard/SectorCard'
import { sectors } from '../../../data/sectors'
import styles from './Empresa.module.css'

export default function Empresa() {
  return (
    <section id="empresa" className={`${styles.about} target-section`}>
      <div className={styles.profile}>
        <div className="right-vert-line" />
        <div className="row">
          <div className="column large-6 medium-8 tab-full">
            <SectionIntro
              num="01"
              title="A gestão ambiental não começa quando o problema aparece, ela está integrada ao projeto desde o início."
            />

            <div className={styles.profilePic} data-aos="fade-up">
              <img
                src="/images/profile-pic.jpg"
                srcSet="/images/profile-pic.jpg 1x, /images/profile-pic@2x.jpg 2x"
                alt="Equipe técnica da Anjos Brandão em reunião de coordenação de projeto"
                loading="lazy"
                decoding="async"
                />
            </div>

            <h3 data-aos="fade-up">Perfil</h3>
            <p data-aos="fade-up">
              A Anjos Brandão Soluções Ambientais acredita que desenvolvimento econômico e responsabilidade ambiental devem caminhar juntos. Transformamos exigências ambientais em oportunidades de crescimento, atuando como parceiros estratégicos de empresas por meio de soluções em gestão ambiental, ESG, licenciamento, sustentabilidade e conformidade legal.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.sectors}>
        <div className="row">
          <div className="column">
            <h3 data-aos="fade-up">Setores de atuação</h3>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className={styles.sectorsGrid}>
              {sectors.map((s) => <SectorCard key={s.id} sector={s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
