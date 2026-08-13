# Ajustes técnicos, site Anjos Brandão

> Checklist gerado a partir do código real em `site/` (React 18 + Vite + TypeScript, sem roteador, sem SSR), cruzado com a proposta comercial fechada e com `docs/briefing-otimizacao-site-revisado.md`, que já existia no repositório e traz uma auditoria anterior mais precisa que o briefing original em vários pontos. Não duplico o que esse arquivo já resolveu, só incorporo e organizo em tarefas.
>
> **Revisado em 12/08 contra o código em progresso (ainda sem commit).** Boa parte do checklist abaixo já foi implementada. Três achados novos, críticos, atualizam a prioridade do que falta:
> 1. O formulário de lead (`LeadForm.tsx`) existe mas **não envia dado nenhum** para lugar nenhum — só mostra mensagem de sucesso local. Ver seção 4.
> 2. Canonical e Open Graph continuam fixos na home em `index.html` em todas as páginas de serviço novas — risco de o Google não indexar as páginas que acabaram de ser criadas. Ver seção 5.
> 3. Não existe configuração de fallback de rota no servidor (`vercel.json`/`netlify.toml`/`_redirects`/`.htaccess`) para as URLs novas — o roteamento em `App.tsx` é só client-side, então acesso direto ou crawl das URLs de serviço tende a cair em 404. Ver seções 1 e 5.

## 0. Decisão bloqueante, resolver antes de tocar em código

A proposta que você fechou com o cliente promete, no Escopo 2, "migração da gestão do site para WordPress". O `docs/briefing-otimizacao-site-revisado.md`, já decidido em 08/08, diz o oposto para o site em si: migrar de Vite/React para **Next.js**, justamente para viabilizar SSR/SSG e URL própria por serviço, o que WordPress puro não resolveria do mesmo jeito nesse stack.

Duas coisas não podem ser verdade ao mesmo tempo:
- Ou o WordPress é a plataforma do site inteiro (então a decisão de ir para Next.js precisa ser revertida ou o cliente foi informado errado no documento comercial), ou
- O plano real é um WordPress headless só como fonte do blog técnico, consumido via API pelo Next.js (arquitetura válida, mas isso não é o que "migração da gestão do site para WordPress" comunica a um cliente não técnico).

Enquanto isso não estiver decidido e registrado, qualquer trabalho de CMS é retrabalho em potencial. Decida e documente antes do kickoff.

**Atualização 12/08:** essa decisão continua sem registro formal, mas o código já tomou um terceiro caminho de fato, que não é nenhuma das duas opções acima — `App.tsx` ganhou um roteamento manual por `window.location.pathname` (sem `react-router`, sem Next.js) que renderiza `ServicePageTemplate` para as 5 URLs de serviço, mantendo o app 100% CSR. Isso dá URL própria por serviço, mas sem SSR/SSG, que era justamente o motivo de cogitar Next.js. Combinado com os itens de canonical/OG fixos e ausência de fallback de servidor (seção 5), o risco concreto é publicar as 5 URLs certas e o Google não conseguir indexar nenhuma delas como página própria. Resolver a decisão de stack continua bloqueante — o atalho implementado não a substitui.

Segundo ponto de escopo que não bate: a proposta lista 6 páginas de serviço prioritárias (Licenciamento, PGRS, Inventário Florestal, ASV, Fauna e Flora, **Gestão/Monitoramento**). O documento técnico já decidido corta para 5, empurrando Gestão/Monitoramento para a fase 2. Se o cliente já viu "6" por escrito, entregar 5 é quebra de escopo, mesmo que tecnicamente correta a priorização.

## 1. Arquitetura e stack

- [ ] Confirmar a migração Vite CSR → Next.js (App Router) conforme decidido em `docs/briefing-otimizacao-site-revisado.md`, seção 3. Sem isso não existe URL própria por serviço, e metade do Escopo 1 da proposta não é implementável no stack atual. **Ainda não feito** — `package.json` não tem `next` nem `react-router` hoje.
- [ ] Não existe `react-router` nem qualquer solução de rotas nas dependências hoje. Se por qualquer motivo a decisão por Next.js for revertida, a alternativa mínima é adicionar `react-router-dom` + um passo de pré-renderização (o app puramente CSR de hoje não é indexável por serviço de jeito nenhum). **Atualização 12/08:** em vez disso, `App.tsx` (linhas 16-56) ganhou um roteamento manual via `window.location.pathname` + `popstate`, sem lib de rotas e sem pré-renderização. Funciona para navegação dentro do app já carregado, mas: (a) não há nenhum arquivo de rewrite de servidor (`vercel.json`, `netlify.toml`, `_redirects`, `.htaccess`) no projeto, então acesso direto a `/pgrs`, F5 numa dessas URLs, ou o Googlebot buscando a URL crua tendem a cair em 404; (b) sem pré-renderização, o conteúdo só existe depois do JS rodar. Precisa resolver a config de rewrite no host escolhido antes de publicar essas URLs, independente da decisão de Next.js.
- [x] Levar a estrutura de dados atual (`src/data/sectors.ts`, `services.ts`, `portfolio.ts`) para o novo projeto, é reaproveitável quase sem alteração de forma, só de conteúdo (itens 3 e 4 abaixo). **Confirmado 12/08** — os três arquivos evoluíram no lugar (novos campos, mais entradas) sem mudança de formato, validando a premissa.

## 2. Home

- [x] **H1 do Hero**, `src/components/sections/Hero/Hero.tsx` linhas 33-37: hoje é "Coordenação contínua, atuando desde o planejamento pré-obra até a execução e permanência operacional." Trocar pelo H1 definido na proposta: **"Licenciamento e Gestão Ambiental para Empresas e Empreendimentos."** **Resolvido** — `Hero.tsx:33` já tem esse texto.
- [x] Adicionar a subheadline definida na proposta, que hoje não existe como elemento separado no Hero: **"Coordenação Ambiental Integrada, do planejamento e licenciamento à execução em campo e acompanhamento da operação."** **Resolvido** — `Hero.tsx:36`.
- [x] `Hero.tsx` linha 4 mantém uma lista de setores hardcoded (`['Construção civil', 'Infraestrutura', 'Indústria']`), separada de `src/data/sectors.ts`, que tem 4 setores (inclui Energia, que a lista do Hero nem lista). São duas fontes da verdade para a mesma informação, já divergentes. Trocar para importar de `data/sectors.ts`. **Resolvido** — `Hero.tsx:2,38-40` já importa e mapeia `sectors` de `data/sectors.ts`.
- [x] **Setores prioritários**: a proposta define "Indústria, Construção Civil, Logística e Infraestrutura". `data/sectors.ts` tem Construção civil, Infraestrutura, Indústria, **Energia**, sem Logística (Logística só existe como categoria de um item do portfólio). Decidir: troca Energia por Logística, ou mantém os dois como 5 setores. Isso muda o dado, não é só texto. **Decidido no código** — `sectors.ts` agora tem os 5: Indústria, Construção civil, Logística, Infraestrutura, Energia. Vale confirmar com o cliente que essa foi mesmo a decisão (a proposta escrita citava só 4).
- [x] A home hoje não tem os blocos "Diferencial: Coordenação Ambiental Integrada", "Como atuamos" e "Responsabilidade técnica e equipe" como seções próprias, pedidos na nova hierarquia da proposta. Hoje esse conteúdo está diluído dentro do texto de `Empresa.tsx`. Vira trabalho de conteúdo + componente novo, não só reordenação. **Resolvido** — `Diferencial.tsx`, `ComoAtuamos.tsx` e `Equipe.tsx` criados como seções próprias e já estão no fluxo (`App.tsx:64-70`).
- [x] Reordenar a home conforme a hierarquia da proposta: Hero → Setores → Serviços → Diferencial → Projetos/Cases → Como atuamos → Responsabilidade técnica → CTA final. A ordem hoje é Hero → Empresa (perfil + setores) → Capacidades (serviços) → Obras → Contato. **Majoritariamente resolvido** — ordem atual é Hero → Empresa → Capacidades → Diferencial → Obras → ComoAtuamos → Equipe → Contato (`App.tsx:63-71`), bem próxima da proposta. Falta só uma seção "Setores" dedicada — hoje os setores aparecem como lista dentro do Hero, e o resto do conteúdo de setores continua diluído em `Empresa.tsx`, que não foi tocado.
- [ ] **Novo (12/08):** `Header.tsx` (linhas 6-13, `NAV_ITEMS`) não tem entradas para `como-atuamos` nem `equipe` — essas seções existem e têm `id`, mas não são alcançáveis pelo menu principal, só por rolagem.

## 3. Páginas de serviço

- [x] Não existe template de página de serviço, só o acordeão de `Capacidades.tsx` na home. Construir do zero: H1, subheadline, CTA acima da dobra, quando o serviço é necessário, como a Anjos Brandão atua, entregáveis, setores atendidos, case relacionado, FAQ, CTA final + formulário (estrutura já validada na proposta e no briefing revisado). **Resolvido, com uma lacuna** — `ServicePageTemplate.tsx` cobre H1, subheadline, CTA acima da dobra, quando é necessário, como atuamos, entregáveis, setores atendidos, FAQ e CTA final + formulário. **Falta "case relacionado"** — não há nenhuma referência cruzada a um item de `portfolio.ts` na página de serviço.
- [x] `src/data/services.ts` tem 6 entradas (licenciamento, gestão, pgrs, esg, campo, educação) que **não mapeiam 1:1** para as 5 páginas priorizadas (Licenciamento, PGRS, Inventário Florestal, ASV, Fauna e Flora): **Resolvido para as páginas dedicadas** — `detailedServices` (novo, em `services.ts`) já tem as 5 entradas certas, com slug, conteúdo e FAQ completos, incluindo Inventário Florestal escrito do zero. Mas o array antigo `services` (usado só no acordeão da home) continua com as 6 entradas originais e não foi reconciliado:
  - "campo" (Operações de campo) hoje mistura supressão vegetal, reflorestamento e presença técnica, o que precisa virar duas páginas separadas, ASV e Fauna/Flora. **Parcialmente resolvido** — `ServiceItem.tsx:31-37` já linka o item "campo" para as 3 páginas (ASV, Fauna e Flora, Inventário Florestal), mas o texto do item continua descrevendo só supressão/reflorestamento/presença técnica, sem falar de inventário florestal — o link para essa página fica deslocado do conteúdo.
  - **Inventário Florestal não existe como serviço em lugar nenhum do código hoje**, nem como item, nem como texto. Conteúdo técnico dessa página não existe, alguém da Anjos Brandão precisa escrever, não é uma extração do que já está no site. **Resolvido** — conteúdo técnico completo escrito em `detailedServices['inventario-florestal']` (`services.ts:117-152`).
  - "esg" (Estratégia ESG) não está entre as 5 páginas priorizadas nem nas 6 da proposta. Decidir se vira página de fase 2 ou se sai do menu principal. **Ainda não decidido** — "esg" continua no array `services` sem link para nenhuma página.
- [x] Publicar as páginas conforme as rotas já definidas em `docs/briefing-otimizacao-site-revisado.md`: `/licenciamento-ambiental`, `/pgrs`, `/inventario-florestal`, `/autorizacao-supressao-vegetal`, `/resgate-fauna-flora`. **Resolvido** — rotas implementadas em `App.tsx` e listadas em `public/sitemap.xml`. Ressalva: ver seção 1 sobre fallback de servidor ausente para essas URLs.
- [x] CTA por página (já validado, reaproveitar sem alteração): **Resolvido** — `ctaText` em `detailedServices` bate exatamente com a tabela abaixo.

  | Página | CTA |
  |---|---|
  | Licenciamento Ambiental | Avaliar o processo de licenciamento |
  | PGRS | Solicitar análise do empreendimento |
  | Inventário Florestal | Solicitar avaliação técnica |
  | ASV | Verificar documentação necessária |
  | Fauna e Flora | Falar com a equipe técnica |

## 4. Formulário e captura de lead

- [ ] **Não existe formulário no site hoje.** `Contato.tsx` só tem link `mailto:` e link de WhatsApp, nenhum `<form>`. Toda a lógica de "CTA por intenção + formulário segmentado" da proposta depende desse formulário existir, é o item de maior risco de virar gargalo se não for endereçado cedo. **Atualização 12/08 — só parcialmente resolvido, e o que falta é o mais grave:** `LeadForm.tsx` existe e está em uso em `Contato.tsx` e em `ServicePageTemplate.tsx`, com UI completa e mensagem de sucesso. Mas `handleSubmit` (`LeadForm.tsx:20-35`) só chama `setSubmitted(true)` e dispara os eventos do gtag — **não há nenhum `fetch`/`POST` para lugar nenhum**. Hoje, todo lead preenchido é descartado, e a pessoa vê "Solicitação Recebida com Sucesso!" mesmo assim. **Bloqueador para publicar.**
- [ ] Decidir onde o formulário processa o envio: Next.js API route própria, serviço tipo Formspree/Netlify Forms, ou o WordPress (se a decisão da seção 0 for headless CMS com capacidade de receber submissões). Isso trava o resto. **Continua em aberto** — essa decisão nunca foi implementada, só ficou menos visível porque o formulário já aparenta funcionar de ponta a ponta.
- [x] Campos definidos: Nome, Empresa, WhatsApp/Telefone, Tipo de demanda (Licenciamento, PGRS, Supressão/ASV, Inventário, Fauna/Flora, Outra demanda). **Resolvido** — `LeadForm.tsx:47-99` tem exatamente esses campos.
- [x] Padronizar os CTAs genéricos atuais ("Falar com um consultor" no Hero, "Falar com consultor" no Contato) para os CTAs específicos por página assim que as páginas de serviço existirem. **Resolvido nas páginas de serviço** — cada uma usa seu `ctaText` próprio (`ServicePageTemplate.tsx:101-103,224`). Hero e Contato mantêm CTA genérico, o que é esperado por serem páginas institucionais, não de serviço.
- [ ] **Novo (12/08):** bug de pré-seleção no dropdown "Tipo de Demanda". `ServicePageTemplate.tsx:229` passa `defaultDemanda={service.title}` (ex.: "ASV - Autorização de Supressão Vegetal", "Resgate e Monitoramento de Fauna e Flora", "PGRS - Plano de Gerenciamento de Resíduos Sólidos"), mas as `<option value>` em `LeadForm.tsx:92-97` usam códigos curtos ("ASV", "Fauna e Flora", "PGRS"). Em 3 das 5 páginas de serviço, o valor não bate com nenhuma opção — o select não pré-seleciona nada de forma confiável.

## 5. SEO técnico

- [x] `robots.txt` e `sitemap.xml` **não existem no projeto**, não há o que "revisar" como o briefing original pedia, é criação do zero. **Resolvido** — ambos criados em `public/`, sitemap já lista a home + as 5 páginas de serviço.
- [x] Dados estruturados: hoje só `ProfessionalService` no `index.html`. Faltam `Service` (um por página de serviço), `BreadcrumbList` e `FAQPage` onde houver FAQ. **Resolvido, com ressalva** — `ServicePageTemplate.tsx:19-69` gera os três JSON-LD por página. Como o app é CSR, esse JSON-LD só existe no DOM depois do JS rodar, não no HTML bruto — funciona para o Googlebot (que renderiza JS), mas é mais frágil que SSR.
- [x] Title e meta description por página só existem em Next.js com metadata por rota, inviável na SPA atual, depende do item 1. **Contornado sem Next.js** — `App.tsx:42-52` atualiza `document.title` e a meta description via JS a cada rota. Funciona na prática, mas com a mesma ressalva de CSR acima.
- [ ] Conectar Google Search Console (não verificado no repositório hoje). Sem mudança.
- [ ] Canonical: já existe um `<link rel="canonical">` fixo apontando para a home no `index.html`. Precisa virar dinâmico por página assim que existirem rotas. **Ainda não resolvido, agora crítico** — `index.html:40` continua fixo em `https://www.anjosbrandao.eco.br/`, e o `App.tsx` não atualiza esse link ao trocar de rota (só mexe em title/description). Hoje, as 5 páginas de serviço declaram a home como sua própria versão canônica, o que tende a impedir o Google de indexá-las como páginas independentes.
- [ ] **Novo (12/08):** as tags Open Graph e Twitter Card (`index.html:42-52`, `og:title`, `og:description`, `og:url`, `og:image`, `twitter:*`) têm o mesmo problema do canonical — fixas na home, não atualizadas por rota. Compartilhamento de uma página de serviço no WhatsApp/LinkedIn hoje mostra o preview da home.
- [ ] **Novo (12/08):** não existe nenhuma configuração de fallback de rota (`vercel.json`, `netlify.toml`, `_redirects`, `.htaccess`) para as 5 URLs novas. Sem isso, acesso direto ou crawl das URLs de serviço tende a receber 404 do host, já que o roteamento é só client-side (ver seção 1). Precisa ser configurado conforme o host de deploy escolhido.

## 6. Performance

- [ ] **Medir baseline de Lighthouse/CWV antes de qualquer mudança.** Não existe medição anterior registrada, então não dá para provar "antes e depois" sem o "antes".
- [ ] O Hero carrega vídeo de fundo autoplay, `public/images/hero-video.mp4`, **3,3 MB**, com poster `hero-bg-3000.jpg`, **833 KB**. Isso compete diretamente com a meta de LCP < 2,5s, principalmente em mobile. Resolver antes dos demais itens de performance: comprimir/recodificar o vídeo, considerar remover o autoplay em mobile, ou substituir por imagem estática com vídeo só em desktop.
- [ ] Nenhuma imagem do projeto está em WebP/AVIF hoje, todas em `.jpg`. Maiores ofensores por tamanho: `profile-pic.jpg` (552 KB), `g-galpao-industrial.jpg` (552 KB), `galpao-industrial@2x.jpg` (464 KB), `profile-pic@2x.jpg` (428 KB), `services-bg-3000.jpg` (416 KB), mais o restante da galeria do portfólio, todas acima de 200 KB.
- [ ] `Capacidades.module.css` usa `background-attachment: fixed` na imagem de fundo (`services-bg-3000.jpg`), efeito parallax que é conhecido por pesar em mobile, já existe um fallback para `prefers-reduced-motion`, mas vale revisar se o ganho visual compensa o custo dado o alvo de CWV.

## 7. Tracking e conversões

- [ ] GTM (`GTM-WTX9GHQB`) e o gtag de Google Ads (`AW-17024846270`) já estão instalados em `index.html`, e o evento de conversão do WhatsApp já dispara em `Hero.tsx` e `Contato.tsx`. Não é preciso reinstalar isso.
- [ ] **O que está configurado dentro do container GTM não é visível pelo repositório.** Antes de planejar qualquer tag nova, auditar o conteúdo real do GTM direto no painel do Google, o código só mostra que o container carrega, não o que ele dispara.
- [ ] Nenhum measurement ID de GA4 (`G-...`) aparece no código. Pode já existir dentro do GTM, precisa confirmar na auditoria acima antes de adicionar um novo, para não duplicar.
- [ ] Meta Pixel não encontrado em lugar nenhum (`fbq(` ausente). Só adicionar se Meta Ads realmente entrar em uso.
- [x] Evento de clique em WhatsApp já existe (`Hero.tsx`, `Contato.tsx`). Evento de clique em telefone e e-mail **não existe** (o link de telefone e o link de e-mail em `Contato.tsx` não têm handler de clique, diferente do WhatsApp). Evento de envio de formulário depende do formulário existir primeiro (seção 4). **Clique em telefone/e-mail resolvido** — `Contato.tsx:17-33` já tem `handlePhoneClick`/`handleEmailClick` disparando gtag. **Evento de envio de formulário existe mas está enganoso** — `LeadForm.tsx:24-32` dispara `generate_lead` e o evento de conversão a cada submit, só que hoje isso registra "sucesso" para leads que nunca chegam a lugar nenhum (ver seção 4). Ajustar a métrica depois de resolver o envio real, senão o funil vai mostrar conversões que não existem.

## 8. Projetos e cases

- [ ] `src/data/portfolio.ts` já tem 6 itens com números reais e específicos (18.400 m², redução de 23% na área de supressão, 92 ha e 38.500 mudas com 91,4% de pegamento, etc.), isso já está alinhado com a regra de "só usar número comprovável" da proposta, não precisa reescrever o conteúdo.
- [x] O que falta é estrutural: hoje cada item é um parágrafo único (`caption`). O padrão da proposta pede três blocos, desafio/contexto, atuação da Anjos Brandão, resultado. Isso é alteração de schema em `PortfolioItem` (`portfolio.ts`) e do template `FolioItem.tsx`, não de conteúdo, o material bruto já existe nos captions atuais, só precisa ser redistribuído nos três blocos. **Resolvido** — `portfolio.ts` ganhou os campos `desafio`/`atuacao`/`resultado` em todos os 6 itens, e `FolioItem.tsx:32-42` já renderiza os três blocos.

## 9. Blog técnico e Instagram (Escopo 2 da proposta)

- [ ] Toda essa seção depende diretamente da decisão da seção 0. Sem saber se o blog vive no WordPress headless, num CMS nativo do Next.js (MDX, ou um headless tipo Sanity/Contentful) ou em outro lugar, não dá para sequenciar esse trabalho.
- [ ] Pauta inicial já validada na proposta (reaproveitar): "Quem precisa de PGRS?", "Qual a diferença entre LP, LI e LO?", "Quando é necessário um inventário florestal?", "O que é ASV e quando solicitar?", "Como funciona o resgate de fauna durante a supressão vegetal?", "Quanto tempo pode levar um licenciamento ambiental?"
- [ ] Réplica no Instagram é derivada do blog (decidido: sem pauta própria), então só entra depois que a publicação técnica estiver rodando.

## 10. Não mexer

Confirmando o que já está adequado e não deve ser tocado sem necessidade: identidade visual, tom institucional do texto, estrutura de cores/tipografia em `src/styles/tokens.css`, os dados já corretos de `portfolio.ts` e `sectors.ts` (fora os pontos de taxonomia acima), e o container GTM/gtag já instalado.

## Referências

- `docs/briefing-otimizacao-site-revisado.md`, auditoria técnica anterior, decisões de stack e fase 1/fase 2.
- `Anjos Brandão - Proposta 2026.docx`, escopo comercial e cronograma fechados com o cliente.
