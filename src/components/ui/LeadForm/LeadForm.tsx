import { useState, useEffect, FormEvent } from 'react'
import Button from '../Button/Button'
import styles from './LeadForm.module.css'

interface LeadFormProps {
  defaultDemanda?: string
  ctaText?: string
}

export default function LeadForm({ defaultDemanda = '', ctaText = 'Enviar Solicitação' }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    telefone: '',
    demanda: defaultDemanda || 'Licenciamento Ambiental',
    mensagem: '',
  })

  useEffect(() => {
    if (defaultDemanda) {
      setFormData((prev) => ({ ...prev, demanda: defaultDemanda }))
    }
  }, [defaultDemanda])

  const buildMessage = () => {
    return [
      `*Solicitação de Avaliação Técnica — Anjos Brandão*`,
      `*Nome:* ${formData.nome}`,
      `*Empresa:* ${formData.empresa}`,
      `*WhatsApp/Telefone:* ${formData.telefone}`,
      `*Tipo de Demanda:* ${formData.demanda}`,
      formData.mensagem ? `*Detalhes do Projeto:* ${formData.mensagem}` : '',
    ].filter(Boolean).join('\n')
  }

  const getWhatsAppUrl = () => {
    const text = buildMessage()
    return `https://wa.me/5571991822466?text=${encodeURIComponent(text)}`
  }

  const getMailtoUrl = () => {
    const text = buildMessage().replace(/\*/g, '')
    const subject = `Solicitação de Avaliação Técnica — ${formData.demanda} (${formData.empresa})`
    return `mailto:contato@anjosbrandao.eco.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    // 1. Disparar eventos de conversão no Google Ads e GTM
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: formData.demanda,
      });
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17024846270/mPfECNeE2OsaEL6TirY_'
      });
    }

    // 2. Abrir WhatsApp com a mensagem estruturada pronta para envio
    const whatsappUrl = getWhatsAppUrl()
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <h4>Solicitação pronta para envio!</h4>
        <p>
          Registramos sua solicitação de <strong>{formData.demanda}</strong> para a empresa <strong>{formData.empresa}</strong>. Caso o WhatsApp não tenha aberto automaticamente, clique no botão abaixo para iniciar a conversa:
        </p>

        <div className={styles.successActions}>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappActionBtn}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" aria-hidden="true">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
            <span>Conversar pelo WhatsApp</span>
          </a>

          <a href={getMailtoUrl()} className={styles.emailFallbackLink}>
            Ou envie por e-mail para contato@anjosbrandao.eco.br →
          </a>
        </div>

        <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
          Enviar outra solicitação
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label htmlFor="nome">Nome completo</label>
        <input
          type="text"
          id="nome"
          required
          value={formData.nome}
          onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
        />
      </div>

      <div className={styles.fieldRow}>
        <div className={styles.field}>
          <label htmlFor="empresa">Empresa / Empreendimento</label>
          <input
            type="text"
            id="empresa"
            required
            value={formData.empresa}
            onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="telefone">WhatsApp / Telefone</label>
          <input
            type="tel"
            id="telefone"
            required
            value={formData.telefone}
            onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="demanda">Tipo de demanda</label>
        <select
          id="demanda"
          value={formData.demanda}
          onChange={(e) => setFormData({ ...formData, demanda: e.target.value })}
        >
          <option value="Licenciamento Ambiental">Licenciamento Ambiental (LP, LI, LO)</option>
          <option value="PGRS">PGRS — Plano de Gerenciamento de Resíduos Sólidos</option>
          <option value="Inventário Florestal">Inventário Florestal</option>
          <option value="ASV">ASV — Autorização de Supressão Vegetal</option>
          <option value="Fauna e Flora">Resgate e Monitoramento de Fauna e Flora</option>
          <option value="Outra demanda">Outra demanda / consultoria técnica</option>
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="mensagem">Detalhes do projeto (opcional)</label>
        <textarea
          id="mensagem"
          rows={3}
          value={formData.mensagem}
          onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
        ></textarea>
      </div>

      <Button variant="primary" type="submit" fullWidth className={styles.submitBtn}>{ctaText}</Button>
    </form>
  )
}
