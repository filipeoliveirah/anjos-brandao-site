import { useState } from 'react'
import Header from '../layout/Header/Header'
import Button from '../ui/Button/Button'
import LeadForm from '../ui/LeadForm/LeadForm'
import { ServiceDetail } from '../../data/services'
import styles from './ServicePageTemplate.module.css'

interface ServicePageTemplateProps {
  service: ServiceDetail
}

// Maps each service slug to the matching <option value> in LeadForm's "Tipo de demanda"
// select. service.title is a long display string ("PGRS - Plano de..."), not a valid
// match for the select's short option values — this keeps the two in sync explicitly
// instead of relying on the strings happening to line up.
const DEMANDA_BY_SLUG: Record<string, string> = {
  'licenciamento-ambiental': 'Licenciamento Ambiental',
  pgrs: 'PGRS',
  'inventario-florestal': 'Inventário Florestal',
  'autorizacao-supressao-vegetal': 'ASV',
  'resgate-fauna-flora': 'Fauna e Flora',
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index)

  const schemaService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Anjos Brandão Soluções Ambientais',
      url: 'https://www.anjosbrandao.eco.br',
    },
    areaServed: 'BA',
    serviceType: service.title,
  }

  const schemaFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  const schemaBreadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.anjosbrandao.eco.br' },
      { '@type': 'ListItem', position: 2, name: 'Serviços', item: 'https://www.anjosbrandao.eco.br/#capacidades' },
      { '@type': 'ListItem', position: 3, name: service.title, item: `https://www.anjosbrandao.eco.br/${service.slug}` },
    ],
  }

  const heroImageWebp = service.heroImage.replace(/\.jpg$/, '.webp')

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />

      <Header />

      <section id="hero" className={`${styles.hero} h-dark-bg target-section`}>
        <picture>
          <source type="image/webp" srcSet={heroImageWebp} />
          <img
            className={styles.heroImg}
            src={service.heroImage}
            alt={service.title}
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className={styles.heroGrad} />
        <div className={styles.heroContent}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <a href="/">Home</a> / <a href="/#capacidades">Serviços</a> / <span>{service.title}</span>
          </nav>
          <p className={`subhead ${styles.eyebrow}`}>Serviço técnico especializado</p>
          <h1 className={styles.h1}>{service.title}</h1>
          <p className={styles.heroSubhead}>{service.subhead}</p>
          <div className={styles.ctaRow}>
            <Button variant="primary" href="#formulario" className={styles.heroCtaBtn}>{service.ctaText}</Button>
            <a className={styles.detailsLink} href="#detalhes">Ver detalhes técnicos ↓</a>
          </div>
        </div>
      </section>

      <main id="detalhes" className={styles.body}>
        <div className="row">
          <div className="column large-full">

            <div className={styles.block}>
              <div className={styles.blockHead}>
                <p className={styles.blockEyebrow}>Cenários de aplicação</p>
                <h2 className={styles.blockTitle}>Quando este serviço é necessário</h2>
              </div>
              <div className={styles.blockBody}>
                <ul className={styles.manifest}>
                  {service.quandoNecessario.map((item, i) => (
                    <li key={i} className={styles.manifestRow}>
                      <span className={styles.dash}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.blockHead}>
                <p className={styles.blockEyebrow}>Metodologia</p>
                <h2 className={styles.blockTitle}>Como a Anjos Brandão atua</h2>
              </div>
              <div className={styles.blockBody}>
                <ol className={styles.phaseList}>
                  {service.comoAtuamos.map((step, i) => (
                    <li key={i} className={styles.phaseRow}>
                      <span className={styles.phaseNum}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={styles.phaseText}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.blockHead}>
                <p className={styles.blockEyebrow}>Entregáveis</p>
                <h2 className={styles.blockTitle}>O que você recebe</h2>
              </div>
              <div className={styles.blockBody}>
                <ul className={`${styles.manifest} ${styles.manifestTwoCol}`}>
                  {service.entregaveis.map((item, i) => (
                    <li key={i} className={styles.manifestRow}>
                      <span className={styles.dash}>—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.blockHead}>
                <p className={styles.blockEyebrow}>Setores atendidos</p>
              </div>
              <div className={styles.blockBody}>
                <div className={styles.tags}>
                  {service.setoresAtendidos.map((setor, i) => (
                    <span key={i} className={styles.tag}>{setor}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.block}>
              <div className={styles.blockHead}>
                <p className={styles.blockEyebrow}>Perguntas frequentes</p>
                <h2 className={styles.blockTitle}>Dúvidas comuns</h2>
              </div>
              <div className={styles.blockBody}>
                <div className={styles.faqList}>
                  {service.faq.map((item, i) => (
                    <div key={i} className={styles.faqRow}>
                      <button
                        className={styles.faqQ}
                        onClick={() => toggleFaq(i)}
                        aria-expanded={openFaq === i}
                      >
                        <span>{item.question}</span>
                        <span className={styles.faqIcon}>{openFaq === i ? '−' : '+'}</span>
                      </button>
                      {openFaq === i && <p className={styles.faqA}>{item.answer}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer id="formulario" className={`${styles.formSection} h-dark-bg`}>
        <div className="row">
          <div className="column large-full">
            <div className={styles.formInner}>
              <p className="subhead">{service.ctaText}</p>
              <h2 className={styles.formTitle}>Solicite uma avaliação técnica</h2>
              <LeadForm defaultDemanda={DEMANDA_BY_SLUG[service.slug] ?? 'Outra demanda'} ctaText={service.ctaText} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column large-full">
            <div className={`${styles.formInner} ${styles.bottom}`}>
              <p className={styles.copyright}>© {new Date().getFullYear()} Anjos Brandão · Coordenação Ambiental Integrada</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
