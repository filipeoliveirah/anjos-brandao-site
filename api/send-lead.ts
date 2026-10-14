const ATTRIBUTION_FIELDS = ['gclid', 'gbraid', 'wbraid', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'landing_page', 'referrer', 'captured_at']
const DEMANDAS = ['Licenciamento Ambiental', 'PGRS', 'Inventário Florestal', 'ASV', 'Fauna e Flora', 'Outra demanda']

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]!))
}

export default async function handler(req: any, res: any) {
  // Configuração de CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
  res.setHeader('Cache-Control', 'no-store')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Utilize POST.' })
  }

  try {
    const body = req.body || {}
    const { nome, empresa, telefone, demanda, mensagem, request_id, submitted_at, attribution, page_path } = body
    if (typeof nome !== 'string' || typeof empresa !== 'string' || typeof telefone !== 'string' ||
        nome.length > 150 || empresa.length > 200 || telefone.length > 30 ||
        (mensagem !== undefined && (typeof mensagem !== 'string' || mensagem.length > 4000)) ||
        (demanda !== undefined && !DEMANDAS.includes(demanda))) {
      return res.status(400).json({ error: 'Dados de contato inválidos.' })
    }

    const plainNome = nome.replace(/<[^>]*>?/gm, '').trim()
    const plainEmpresa = empresa.replace(/<[^>]*>?/gm, '').trim()
    const waCleanNumber = telefone.replace(/\D/g, '')
    if (plainNome.split(/\s+/).filter((part: string) => part.length >= 2).length < 2 ||
        plainEmpresa.length < 2 || !/^\d{10,11}$/.test(waCleanNumber) ||
        Number(waCleanNumber.slice(0, 2)) < 11 ||
        (waCleanNumber.length === 11 && waCleanNumber[2] !== '9')) {
      return res.status(400).json({ error: 'Informe nome completo, empresa e telefone com DDD.' })
    }
    if (request_id !== undefined && (typeof request_id !== 'string' || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(request_id))) {
      return res.status(400).json({ error: 'Identificador de solicitação inválido.' })
    }
    if (request_id && (typeof submitted_at !== 'string' || !/^\d{4}-\d{2}-\d{2}T[\d:.]+Z$/.test(submitted_at) || !Number.isFinite(Date.parse(submitted_at)))) {
      return res.status(400).json({ error: 'Horário da solicitação inválido.' })
    }
    const requestId = request_id || crypto.randomUUID()
    const submittedAt = request_id ? submitted_at : new Date().toISOString()
    const cleanAttribution: Record<string, string> = {}
    for (const key of ATTRIBUTION_FIELDS) {
      const value = attribution?.[key]
      if (typeof value === 'string' && value.length <= 1024 && !/[\u0000-\u001f]/.test(value)) {
        cleanAttribution[key] = value
      }
    }
    const pagePath = typeof page_path === 'string' && /^\/[a-zA-Z0-9/_-]*$/.test(page_path) && page_path.length <= 200 ? page_path : ''
    const isTest = body.registroTeste === true || /TESTE INTERNO/i.test(mensagem || '')

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('⚠️ RESEND_API_KEY não configurada no ambiente.')
      return res.status(500).json({ error: 'Configuração de e-mail não disponível' })
    }
    const toEmail = process.env.RESEND_TO_EMAIL || 'contato@anjosbrandao.eco.br'
    const configuredFrom = process.env.RESEND_FROM_EMAIL
    const fromEmail = configuredFrom && !/onboarding@resend\.dev/i.test(configuredFrom)
      ? configuredFrom
      : 'Anjos Brandão Soluções Ambientais <contato@anjosbrandao.eco.br>'

    const cleanNome = escapeHtml(plainNome)
    const cleanEmpresa = escapeHtml(plainEmpresa)
    const cleanTelefone = escapeHtml(telefone.trim())
    const plainDemanda = demanda || 'Licenciamento Ambiental'
    const plainMensagem = mensagem ? mensagem.replace(/<[^>]*>?/gm, '').trim() : 'Não informado'
    const cleanDemanda = escapeHtml(plainDemanda)
    const cleanMensagem = escapeHtml(plainMensagem)

    // A stable timestamp keeps Resend's idempotent retry payload identical.
    const now = new Date(submittedAt).toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    const waLink = `https://wa.me/55${waCleanNumber}`
    const sourceFields = { request_id: requestId, page_path: pagePath, registro_teste: String(isTest), ...cleanAttribution }
    const sourceHtml = Object.entries(sourceFields).map(([key, value]) => `<div><strong>${escapeHtml(key)}:</strong> ${escapeHtml(value || 'Não informado')}</div>`).join('\n')

    const htmlContent = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <title>Nova Solicitação de Avaliação Técnica — Anjos Brandão</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f0; margin: 0; padding: 24px; color: #173426; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid rgba(23,52,38,0.1); }
    .header { background: #173426; color: #ffffff; padding: 32px 28px; text-align: center; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; color: #a4cc5c; letter-spacing: 0.5px; }
    .header p { margin: 8px 0 0; font-size: 14px; color: #e0e8e3; }
    .content { padding: 32px 28px; }
    .badge { display: inline-block; padding: 6px 14px; background: rgba(61,136,71,0.12); color: #3d8847; font-weight: 700; border-radius: 20px; font-size: 13px; margin-bottom: 20px; text-transform: uppercase; }
    .field-group { margin-bottom: 18px; border-bottom: 1px solid #edf0ea; padding-bottom: 14px; }
    .field-group:last-child { border-bottom: none; }
    .label { font-size: 12px; text-transform: uppercase; color: #666666; font-weight: 600; letter-spacing: 0.5px; margin-bottom: 4px; }
    .value { font-size: 16px; color: #173426; font-weight: 600; line-height: 1.4; }
    .value-msg { font-size: 15px; color: #333333; font-weight: normal; line-height: 1.6; white-space: pre-wrap; background: #f8faf6; padding: 14px; border-radius: 8px; border-left: 3px solid #3d8847; }
    .btn-wa { display: inline-block; width: 100%; box-sizing: border-box; text-align: center; background: #25D366; color: #ffffff; font-weight: 700; font-size: 16px; text-decoration: none; padding: 14px 20px; border-radius: 8px; margin-top: 24px; }
    .footer { background: #f8faf6; padding: 20px; text-align: center; font-size: 12px; color: #888888; border-top: 1px solid #edf0ea; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Anjos Brandão · Soluções Ambientais</h1>
      <p>Novo Lead Recebido pelo Site</p>
    </div>
    <div class="content">
      <span class="badge">${cleanDemanda}</span>

      <div class="field-group">
        <div class="label">Nome do Contato</div>
        <div class="value">${cleanNome}</div>
      </div>

      <div class="field-group">
        <div class="label">Empresa / Empreendimento</div>
        <div class="value">${cleanEmpresa}</div>
      </div>

      <div class="field-group">
        <div class="label">Telefone / WhatsApp</div>
        <div class="value">${cleanTelefone}</div>
      </div>

      <div class="field-group">
        <div class="label">Tipo de Demanda Solicitada</div>
        <div class="value">${cleanDemanda}</div>
      </div>

      <div class="field-group">
        <div class="label">Detalhes do Projeto / Mensagem</div>
        <div class="value-msg">${cleanMensagem}</div>
      </div>

      <div class="field-group">
        <div class="label">Data e Hora do Envio</div>
        <div class="value" style="font-size: 14px; color: #555555; font-weight: normal;">${now}</div>
      </div>

      <div class="field-group">
        <div class="label">Identificação e origem da solicitação</div>
        <div class="value-msg">${sourceHtml}</div>
      </div>

      <a href="${waLink}" target="_blank" class="btn-wa">
        💬 Responder ${cleanNome} no WhatsApp (${cleanTelefone})
      </a>
    </div>
    <div class="footer">
      Este e-mail foi gerado automaticamente pelo formulário do site anjosbrandao.eco.br
    </div>
  </div>
</body>
</html>
`

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Idempotency-Key': `ambiental-lead/${requestId}`,
      },
      signal: AbortSignal.timeout(8000),
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: toEmail,
        subject: `${isTest ? '[TESTE INTERNO]' : '[Novo Lead]'} ${plainDemanda} — ${plainEmpresa} (${plainNome})`.replace(/[\r\n]/g, ' '),
        html: htmlContent,
        text: [
          `Solicitação de ${plainDemanda}`,
          `Nome: ${plainNome}`,
          `Empresa: ${plainEmpresa}`,
          `Telefone: ${telefone.trim()}`,
          `Mensagem: ${plainMensagem}`,
          `Horário informado pelo formulário: ${submittedAt}`,
          ...Object.entries(sourceFields).map(([key, value]) => `${key}: ${value || 'Não informado'}`),
        ].join('\n'),
      }),
    })

    const data = await response.json()

    if (!response.ok || typeof data.id !== 'string' || !data.id) {
      console.error('Erro de envio Resend', response.status)
      return res.status(response.status === 429 ? 429 : 502).json({ error: 'Não foi possível confirmar o envio. Tente novamente.' })
    }

    return res.status(200).json({ success: true, id: data.id, leadId: requestId, registroTeste: isTest, recordedIn: 'resend' })
  } catch {
    console.error('Não foi possível confirmar o envio ao Resend.')
    return res.status(502).json({ error: 'Não foi possível confirmar o envio. Tente novamente.' })
  }
}
