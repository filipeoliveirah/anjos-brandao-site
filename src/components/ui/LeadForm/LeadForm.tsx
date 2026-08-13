import { useState, FormEvent } from 'react'
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'generate_lead', {
        event_category: 'engagement',
        event_label: formData.demanda,
      })
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-17024846270/mPfECNeE2OsaEL6TirY_'
      })
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <h4>Solicitação recebida</h4>
        <p>Nossa equipe técnica entrará em contato em até 24 horas úteis para dar continuidade ao seu atendimento.</p>
        <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>Enviar outra solicitação</button>
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
