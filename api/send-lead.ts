export default async function handler(req: any, res: any) {
  // Configuração de CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS')
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
    const { nome, empresa, telefone, demanda, mensagem } = req.body || {}

    if (!nome || !empresa || !telefone) {
      return res.status(400).json({ error: 'Campos obrigatórios ausentes (nome, empresa, telefone).' })
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.warn('⚠️ RESEND_API_KEY não configurada no ambiente.')
      return res.status(500).json({ error: 'Configuração de e-mail não disponível' })
    }
    const toEmail = process.env.RESEND_TO_EMAIL || 'contato@anjosbrandao.eco.br'
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'Anjos Brandão <onboarding@resend.dev>'

    const cleanNome = String(nome).replace(/<[^>]*>?/gm, '').trim()
    const cleanEmpresa = String(empresa).replace(/<[^>]*>?/gm, '').trim()
    const cleanTelefone = String(telefone).trim()
    const cleanDemanda = String(demanda || 'Licenciamento Ambiental').replace(/<[^>]*>?/gm, '').trim()
    const cleanMensagem = mensagem ? String(mensagem).replace(/<[^>]*>?/gm, '').trim() : 'Não informado'

    const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Bahia' })
    const waCleanNumber = cleanTelefone.replace(/\D/g, '')
    const waLink = `https://wa.me/55${waCleanNumber}`

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
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: toEmail,
        subject: `[Novo Lead] ${cleanDemanda} — ${cleanEmpresa} (${cleanNome})`,
        html: htmlContent,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('❌ Erro da API Resend:', data)
      return res.status(response.status).json({ error: 'Erro ao despachar e-mail via Resend', details: data })
    }

    return res.status(200).json({ success: true, id: data.id })
  } catch (error: any) {
    console.error('❌ Erro no handler de envio:', error)
    return res.status(500).json({ error: 'Erro interno ao processar envio', details: error.message })
  }
}
