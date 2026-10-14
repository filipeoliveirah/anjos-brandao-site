# Formulários: envio confirmado e atribuição

O formulário só exibe sucesso e emite medição após `/api/send-lead` retornar
`success: true` e um ID de e-mail aceito pelo Resend. Isso comprova a aceitação
do envio pelo provedor; entrega à caixa, atendimento e qualificação são etapas
distintas.

## Código

- Um envio confirmado emite `ambiental_form_success`, com `lead_id`,
  `transaction_id`, `service` e `form_page_path`. Nome, empresa, telefone e
  mensagem não entram nesse evento.
- Erros, tentativa de envio e abertura do WhatsApp não emitem esse evento.
- Testes identificados por `measurement_test=1`, `registroTeste: true` ou uma
  mensagem contendo `TESTE INTERNO` emitem `ambiental_form_test_success`.
  Não ligar as conversões de produção a esse evento.
- GCLID, GBRAID, WBRAID e UTMs são capturados na entrada, preservados na sessão
  por até 24 horas e incluídos no e-mail do mesmo contato. Um novo acesso com
  campanha substitui a atribuição anterior. Não há atribuição presumida sem
  parâmetros.
- A solicitação mantém UUID, horário e payload nas tentativas de reenvio com os
  mesmos dados. O Resend recebe `Idempotency-Key: ambiental-lead/<UUID>`.
  A garantia do provedor vale por 24 horas. O evento do mesmo ID de e-mail é
  emitido apenas uma vez na sessão.
- O remetente padrão usa `contato@anjosbrandao.eco.br`. Um remetente configurado
  como `onboarding@resend.dev` também passa a usar o domínio da Ambiental.

## Publicação conjunta com o GTM

Contêiner instalado: **GTM-WTX9GHQB**. Preservar as ações e os rótulos existentes.
Substituir os acionadores nativos de tentativa por **Evento personalizado**,
nome `ambiental_form_success`, limitado à página correspondente. Os IDs atuais
dos acionadores são:

| ID | Página | Tags que já o utilizam |
|---|---|---|
| 11 | `/licenciamento-ambiental` | Ads Licenciamento, GA4 Licenciamento, Meta Lead |
| 12 | `/pgrs` | Ads PGRS, GA4 PGRS, Meta Lead |
| 13 | `/autorizacao-supressao-vegetal` | Ads ASV, GA4 ASV, Meta Lead |
| 20 | `/` | Meta Lead Home |
| 28 | `/` | Ads Home |

Idealmente, usar a variável de camada de dados `form_page_path` no filtro, para
que a atribuição do evento permaneça correta se a navegação mudar durante a
resposta. Usar `transaction_id` no campo ID da transação das tags Ads.
O Meta Lead precisa disparar uma única vez, sem sobreposição do acionador Home
com as páginas de serviço. Revisar o caminho de Inventário, sem reutilizar um
rótulo de outra ação por suposição.

Validar código e configuração juntos em prévia antes de publicar. Publicar
somente um dos lados deixa os formulários com contagem antiga ou sem medição.
Não criar uma nova ação Google Ads para substituir rótulos já existentes.

## Validação reproduzível

Node.js 22.18 ou superior:

```sh
npm ci
npm test
npm run check:api
npm run build
```

Os testes usam Resend simulado. Cobrem formulário inválido, erro e resposta
incompleta do provedor, confirmação atrasada, conservação dos campos em erro,
reenvio, duplo envio, GCLID com caixa preservada, navegação entre páginas,
escape de HTML e evento separado de teste. Não enviam e-mails nem conversões
reais.

## Limites da integração

O backend atual persiste a notificação no Resend e retorna `recordedIn: resend`.
**Não cria automaticamente oportunidades no Notion nem importa conversões
offline no Google Ads.** O e-mail conserva os dados necessários para registrar
o contato na base comercial oficial, sem presumir qualificação.

A etapa site → Notion exige uma credencial de integração de servidor e um
destino com controle persistente de duplicidade. Usar somente a base
comercial oficial da Ambiental. Guardar credenciais no ambiente da
Vercel, sem enviá-las para o navegador ou para o repositório.

O retorno ao Google Ads depende de contatos reais qualificados pela equipe,
com GCLID, horário real do marco e ação offline validada. Testes e
cliques no WhatsApp ficam excluídos.
