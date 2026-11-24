import { p, h2, h3, bullet, callout, pLink, DEFAULT_AUTHOR } from './enrich-helpers.mjs'

// ==========================================
// ARTIGO 40: SEIA fora do ar de 7/12/2026 a 4/1/2027 (Portaria INEMA 35.647/2026)
// ==========================================
export const POST_40 = {
  _id: 'post-40',
  title: 'SEIA Fora do Ar de 7 de Dezembro a 4 de Janeiro: Prazos Suspensos, Licenças Prorrogadas e o que Protocolar Antes no INEMA',
  slug: 'seia-suspenso-novo-seia-prazos-licencas-inema',
  excerpt: 'O INEMA suspende o SEIA e os prazos por 27 dias a partir de 7 de dezembro para implantar o Novo SEIA. Veja o que muda e o que protocolar antes da parada.',
  publishedAt: '2026-11-25T10:00:00Z',
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: '/images/blog/post-40-seia-suspenso-novo-seia-prazos-licencas-inema.webp',
  mainImageAlt: 'Mesa de trabalho de consultoria ambiental com pastas de processos, mapas e plantas de licenciamento',
  mainImageCaption: 'Processos, licenças e cadastros que dependem do SEIA precisam ser organizados antes de 7 de dezembro.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0], // Licenciamento Ambiental
  body: [
    pLink([
      { text: 'O Sistema Estadual de Informações Ambientais e de Recursos Hídricos (SEIA), usado para licenciamento, autorizações, outorgas e cadastros ambientais na Bahia, ficará fora do ar a partir de ' },
      { text: '7 de dezembro de 2026', strong: true },
      { text: '. A ' },
      { text: 'Portaria INEMA nº 35.647/2026', strong: true },
      { text: ', de 9 de novembro e publicada no Diário Oficial do Estado de 10 de novembro, suspende os prazos administrativos do INEMA por 27 dias corridos a partir dessa data, retoma a contagem em 4 de janeiro de 2027 pelo período que faltava e prorroga automaticamente, até 4 de janeiro, as licenças, outorgas e autorizações cuja validade terminar durante a suspensão. A parada serve para migrar os dados do sistema atual para o Novo SEIA, com entrada em produção prevista para 4 de janeiro de 2027.' },
    ]),
    pLink([
      { text: 'O INEMA também publicou a página "Novo SEIA: notícias e orientações", em 12 de novembro, e uma página de perguntas e respostas sobre a migração. Em 23 de novembro, segundo a assessoria do INEMA, os servidores começaram o ciclo de capacitação para operar o novo sistema. Este artigo explica o que a suspensão alcança, o que fica de fora e o que uma empresa licenciada na Bahia deve resolver antes de 7 de dezembro.' },
    ]),
    callout('info', 'A Portaria INEMA nº 35.647/2026 em resumo', 'Art. 1º: suspensão dos prazos administrativos por 27 dias corridos, a partir de 7 de dezembro de 2026, incluídos os prazos de renovação de licença, licenciamento, outorga, autorizações e respostas a notificações. Retomada em 4 de janeiro de 2027, pelo período remanescente, considerado o tempo transcorrido até 6 de dezembro. A suspensão não alcança condicionantes de caráter permanente nem notificações que determinem medidas emergenciais ou imediatas. Art. 2º: licenças, outorgas e autorizações que expirarem durante a suspensão ficam prorrogadas até 4 de janeiro de 2027. Casos excepcionais são decididos pela Diretoria Geral do INEMA.'),
    h2('O que Fica Indisponível Durante a Parada'),
    pLink([
      { text: 'Segundo a página de perguntas e respostas do INEMA, durante a migração podem ficar indisponíveis a solicitação e o acompanhamento de processos, os requerimentos de licenciamento e de autorizações, os pedidos de outorga, as consultas e atualizações de cadastros e os serviços do CEFIR, o Cadastro Estadual Florestal de Imóveis Rurais. Na prática, quem precisar abrir um processo, juntar um documento, responder a uma notificação ou consultar o andamento de um pedido entre 7 de dezembro e 4 de janeiro não terá o sistema para isso.' },
    ]),
    pLink([
      { text: 'O CEFIR passa por uma mudança própria. De acordo com a assessoria do INEMA, na mesma data o cadastro estadual migra para o SICAR, o Sistema Nacional de Cadastro Ambiental Rural, mantido pelo governo federal, com estabilização estimada em três semanas. O Cadastro Ambiental Rural é obrigatório para todos os imóveis rurais pelo art. 29 da Lei nº 12.651/2012, o Código Florestal, e é exigido em pedidos de supressão de vegetação, em financiamentos rurais e na regularização de Reserva Legal. O funcionamento do CEFIR e sua relação com a ' },
      { text: 'autorização de supressão de vegetação', link: '/blog/cefir-car-bahia-imovel-rural-asv-reserva-legal' },
      { text: ' estão explicados em outro artigo do blog.' },
    ]),
    pLink([
      { text: 'Até 24 de novembro, o INEMA não havia divulgado um canal alternativo específico para protocolos durante a parada. A orientação oficial é antecipar tudo o que depender do sistema.' },
    ]),
    h2('O que a Suspensão de Prazos Alcança'),
    pLink([
      { text: 'Pelo § 1º do art. 1º da portaria, a suspensão vale para os prazos dos procedimentos de renovação de licença, licenciamento, outorga e autorizações e para as respostas a notificações expedidas nesses processos. Um prazo suspenso não recomeça do zero: a contagem para em 7 de dezembro e volta a correr em 4 de janeiro pelo número de dias que ainda faltava. Uma empresa notificada a apresentar complementação de informações em 30 dias, que já tenha usado 20 dias até 6 de dezembro, terá os 10 dias restantes a partir de 4 de janeiro.' },
    ]),
    bullet('Prazos para responder a notificações e pedidos de complementação de informações em processos de licenciamento e outorga.'),
    bullet('Prazos para apresentar estudos, relatórios e documentos solicitados pelo órgão no curso do processo.'),
    bullet('Licenças, outorgas e autorizações cuja validade terminar entre 7 de dezembro e 4 de janeiro, que ficam prorrogadas até 4 de janeiro de 2027.'),
    pLink([
      { text: 'A prorrogação tem data certa para acabar. Uma licença que venceria em 20 de dezembro passa a valer até 4 de janeiro, e não mais do que isso, se não houver pedido de renovação em andamento. A partir de 5 de janeiro, a atividade estaria operando sem licença, o que configura infração administrativa e pode configurar o crime do art. 60 da Lei nº 9.605/1998, que pune quem faz funcionar estabelecimento potencialmente poluidor sem licença do órgão ambiental competente.' },
    ]),
    h2('Renovação de Licença: a Regra dos 120 Dias Continua Valendo'),
    pLink([
      { text: 'A Lei Complementar nº 140/2011, no art. 14, § 4º, determina que a renovação de licenças ambientais seja requerida com antecedência mínima de 120 dias da expiração do prazo de validade. Quando o pedido é feito dentro desse prazo, a licença fica automaticamente prorrogada até a manifestação definitiva do órgão ambiental. A portaria do INEMA não altera essa regra. Ela apenas protege as licenças que vencerem no período da parada, e por pouco tempo.' },
    ]),
    pLink([
      { text: 'Por isso, o ponto mais importante para as empresas é conferir agora a data de vencimento de cada licença e outorga. Quem tem licença vencendo entre dezembro de 2026 e abril de 2027 deve verificar se a renovação já foi protocolada e, se não foi, protocolar antes de 7 de dezembro. Os documentos e o roteiro da renovação estão no artigo sobre ' },
      { text: 'renovação da licença de operação no INEMA', link: '/blog/renovacao-licenca-operacao-lo-prazos-documentos-inema' },
      { text: '. Para a outorga de uso de recursos hídricos, a lógica é a mesma, e o artigo sobre ' },
      { text: 'outorga de captação no INEMA', link: '/blog/outorga-recursos-hidricos-inema-bahia-captacao' },
      { text: ' detalha o processo.' },
    ]),
    h2('O que Resolver Antes de 7 de Dezembro'),
    pLink([
      { text: 'A lista abaixo reúne as providências que dependem do SEIA e que uma empresa licenciada na Bahia deve tomar nas duas semanas que antecedem a parada. Ela vale para indústrias, construtoras, empreendimentos de energia, mineração, agronegócio e loteamentos.' },
    ]),
    bullet('Fazer o inventário de licenças, outorgas, autorizações e cadastros da empresa, com número do processo, data de emissão, data de vencimento e condicionantes em aberto.'),
    bullet('Protocolar as renovações de licenças e outorgas que vencem nos próximos 120 dias, para garantir a prorrogação automática prevista na Lei Complementar nº 140/2011.'),
    bullet('Responder notificações e pedidos de complementação que estejam abertos, sem esperar a suspensão dos prazos.'),
    bullet('Baixar e arquivar cópias das licenças, portarias, pareceres, relatórios de condicionantes e comprovantes de protocolo, para consulta durante a parada e para conferência depois da migração.'),
    bullet('Atualizar o CEFIR dos imóveis rurais e conferir se o cadastro está ativo, já que ele migra para o SICAR na mesma data.'),
    bullet('Antecipar pedidos de autorização de supressão de vegetação e de outras autorizações necessárias para obras previstas para dezembro e janeiro.'),
    bullet('Registrar no controle interno da empresa que os prazos ficam suspensos de 7 de dezembro a 4 de janeiro, com a nova data de cada prazo processual.'),
    pLink([
      { text: 'Obras que começariam em dezembro e que ainda dependem de licença de instalação ou de autorização de supressão merecem atenção especial. Sem o sistema, não há como protocolar o pedido nem acompanhar a análise, e o cronograma da obra pode ficar parado até janeiro. O artigo sobre ' },
      { text: 'inventário florestal e ASV', link: '/blog/inventario-florestal-asv-supressao-vegetal-segura' },
      { text: ' mostra o que é exigido para a supressão.' },
    ]),
    h2('Condicionantes Continuam Obrigatórias'),
    pLink([
      { text: 'O § 3º do art. 1º da portaria é expresso: a suspensão não alcança o cumprimento de condicionantes de caráter permanente nem os prazos de notificações que determinem medidas emergenciais ou imediatas de monitoramento, prevenção ou mitigação de impactos. As obrigações de operação da licença continuam: monitoramento de efluentes, controle de emissões, gerenciamento de resíduos, programas ambientais e demais condicionantes continuam sendo executados normalmente. O que pode mudar é apenas a forma de entregar ao órgão relatórios que seriam enviados pelo sistema durante a parada. A recomendação é manter os registros datados e enviar os relatórios assim que o Novo SEIA estiver disponível, ou antes de 7 de dezembro, quando possível.' },
    ]),
    pLink([
      { text: 'A Lei Estadual nº 10.431/2006, que institui a Política de Meio Ambiente da Bahia, e o Decreto Estadual nº 14.024/2012, que a regulamenta, sustentam as condicionantes das licenças emitidas pelo INEMA. O descumprimento de condicionante é infração autônoma, mesmo que nenhum dano ambiental tenha ocorrido, e a fiscalização não depende do sistema estar no ar.' },
    ]),
    h2('Depois de 4 de Janeiro: Conferir a Migração'),
    pLink([
      { text: 'Segundo o INEMA, o Novo SEIA foi organizado em 29 módulos e vai integrar serviços de licenciamento, fiscalização, recursos hídricos e cadastros, com ligação a outras plataformas do governo. Uma migração desse porte exige conferência. Assim que o sistema entrar em produção, a empresa deve acessar seus processos e confirmar se estão corretos os dados do empreendimento, os números dos processos, as licenças vigentes, as condicionantes e os prazos que voltaram a correr.' },
    ]),
    bullet('Conferir se todos os processos da empresa aparecem no Novo SEIA, com a mesma numeração e situação.'),
    bullet('Comparar as licenças e outorgas exibidas com as cópias arquivadas antes da parada.'),
    bullet('Recalcular os prazos processuais a partir de 4 de janeiro e registrar qualquer divergência por escrito ao INEMA.'),
    bullet('Atualizar os acessos dos responsáveis técnicos e dos representantes legais cadastrados no sistema.'),
    callout('alert', 'Atenção ao cronograma', 'O INEMA informa que as datas podem ser ajustadas. Acompanhe a página "Novo SEIA: notícias e orientações" e não deixe para a última semana de novembro o que depende do sistema. Uma licença que vence na parada só está protegida até 4 de janeiro de 2027; depois dessa data, vale a regra geral de renovação da Lei Complementar nº 140/2011.'),
    pLink([
      { text: 'Para quem está começando um licenciamento agora, o ' },
      { text: 'guia do licenciamento ambiental no INEMA', link: '/blog/guia-licenciamento-ambiental-inema-bahia' },
      { text: ' resume as modalidades de licença e as etapas do processo na Bahia.' },
    ]),
    h3('A Anjos Brandão Organiza o Seu Calendário Antes da Parada'),
    pLink([
      { text: 'A equipe técnica da Anjos Brandão faz o levantamento das licenças, outorgas e cadastros da sua empresa, protocola renovações e respostas pendentes antes de 7 de dezembro e acompanha a migração dos processos para o Novo SEIA. ' },
      { text: 'Fale com a nossa equipe', link: '/#contato' },
      { text: ' e revise hoje os prazos da sua empresa.' },
    ]),
  ],
  seo: {
    metaTitle: 'SEIA Fora do Ar de 7/12 a 4/1: Prazos e Licenças no INEMA',
    metaDescription: 'A Portaria INEMA 35.647/2026 suspende prazos por 27 dias e prorroga licenças até 4/1/2027. Veja o que protocolar no SEIA antes de 7 de dezembro.',
    keywords: [
      'seia inema suspensão',
      'novo seia bahia',
      'portaria inema 35.647',
      'prazos licenciamento inema dezembro',
      'renovação de licença ambiental bahia',
      'cefir sicar migração',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 41: Pesquisa mineral sem licença ambiental, liminar de Itarantim (BA)
// ==========================================
export const POST_41 = {
  _id: 'post-41',
  title: 'Pesquisa Mineral Exige Licença Ambiental: a Liminar de Itarantim e o que o Alvará da ANM Não Autoriza',
  slug: 'pesquisa-mineral-licenca-ambiental-inema-itarantim',
  excerpt: 'A Justiça suspendeu pesquisa de terras raras sem licença ambiental em serras de Itarantim, na Bahia. Veja o que o alvará da ANM autoriza e o que exige licença.',
  publishedAt: '2026-11-25T10:00:00Z',
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: '/images/blog/post-41-pesquisa-mineral-licenca-ambiental-inema-itarantim.webp',
  mainImageAlt: 'Sonda de pesquisa mineral instalada em encosta de serra com vegetação nativa e curso d’água ao fundo',
  mainImageCaption: 'Sondagens, acessos e uso de água em campanha de pesquisa mineral dependem de licença e autorizações ambientais.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0, 2], // Licenciamento Ambiental, Inventário & ASV
  body: [
    pLink([
      { text: 'A ' },
      { text: 'pesquisa mineral exige licença ambiental', strong: true },
      { text: ', e o alvará de pesquisa emitido pela Agência Nacional de Mineração (ANM) não substitui essa licença. Em 13 de novembro de 2026, a Justiça da Bahia concedeu liminar em ação civil pública do Ministério Público do Estado da Bahia (MPBA) e determinou que quatro empresas de um mesmo grupo econômico, ligadas a um projeto de terras raras, parassem imediatamente as atividades de pesquisa, prospecção e intervenção em serras da zona rural de Itarantim, no sudoeste do estado. A decisão foi divulgada pelo MPBA em 20 de novembro.' },
    ]),
    pLink([
      { text: 'Segundo o Ministério Público, as atividades ocorriam nas serras de Mandim e Água Vermelha e nas regiões de Três Pontas, Palmeiras, Córgão e Jundiá, áreas transformadas em monumentos naturais pela Lei Municipal nº 010, de 28 de agosto de 2025, sem licença ambiental válida. O caso reúne três pontos que toda empresa de mineração precisa conferir antes de levar uma sonda a campo: a licença ambiental da pesquisa, as unidades de conservação na área e as restrições criadas por lei municipal.' },
    ]),
    callout('info', 'O que a liminar determinou, segundo o MPBA', 'Paralisação imediata de pesquisa, prospecção, intervenções e extração nas áreas. Retirada de máquinas, equipamentos e veículos em até 5 dias. Restabelecimento do fluxo natural dos cursos d’água afetados. Apresentação, em até 15 dias, de inventário georreferenciado das intervenções feitas desde 2023. Multa de R$ 50 mil por dia, por empresa, em caso de descumprimento. Trata-se de decisão liminar, sujeita a recurso.'),
    h2('O Caso de Itarantim'),
    pLink([
      { text: 'Na ação civil pública, o Ministério Público sustenta que os trabalhos ameaçavam nascentes e mananciais que abastecem Itarantim e cursos d’água da bacia do Rio Pardo, e que as empresas não atenderam a uma notificação municipal para suspender as atividades. A lei municipal que criou os monumentos naturais, segundo o MPBA, proíbe qualquer atividade de exploração mineral nessas áreas, inclusive pesquisa e prospecção. O jornal Brasil de Fato, em reportagem de 23 de novembro, informou que a decisão registra que as empresas não tinham licenciamento ambiental do INEMA e que o alvará de pesquisa da ANM não as dispensava de cumprir a legislação estadual e municipal.' },
    ]),
    pLink([
      { text: 'A decisão é provisória e o processo continua. O interesse do caso para as empresas não está no desfecho, mas no que ele mostra sobre a ordem das autorizações na mineração: título minerário, licença ambiental e respeito às restrições territoriais são exigências independentes, e a falta de qualquer uma delas permite que a atividade seja paralisada.' },
    ]),
    h2('O que o Alvará de Pesquisa da ANM Autoriza'),
    pLink([
      { text: 'O Código de Mineração, Decreto-Lei nº 227/1967, define a pesquisa mineral como a execução dos trabalhos necessários à definição da jazida, à sua avaliação e à determinação da viabilidade do seu aproveitamento econômico. Esses trabalhos incluem levantamentos geológicos, geoquímicos e geofísicos, abertura de escavações, sondagens e ensaios de beneficiamento. A autorização de pesquisa, formalizada no alvará, é outorgada pela ANM e confere ao titular o direito de pesquisar a área para fins minerários.' },
    ]),
    pLink([
      { text: 'O alvará é um título minerário. Ele resolve a relação entre a empresa e a União, proprietária dos recursos minerais pelo art. 20, IX, da Constituição. Ele não avalia o impacto ambiental das sondagens, não autoriza supressão de vegetação, não concede direito de uso de água e não afasta restrições de uso do solo. Essas matérias são do órgão ambiental, do órgão gestor de recursos hídricos e do município.' },
    ]),
    bullet('Alvará de pesquisa: título emitido pela ANM que autoriza a pesquisa mineral na área requerida.'),
    bullet('Guia de Utilização: autorização da ANM para extração de substâncias minerais antes da concessão de lavra, em caráter excepcional, observada a legislação ambiental, nos termos do art. 22, § 2º, do Código de Mineração.'),
    bullet('Licença ambiental: emitida pelo órgão ambiental competente, que na Bahia é, em regra, o INEMA, conforme a Lei Complementar nº 140/2011.'),
    bullet('Outorga e autorização de supressão: exigidas quando a campanha usa água de rios ou poços ou abre acessos e praças de sondagem em vegetação nativa.'),
    h2('Quando a Pesquisa Mineral Exige Licença Ambiental'),
    pLink([
      { text: 'A Resolução CONAMA nº 237/1997 relaciona, no Anexo 1, as atividades sujeitas ao licenciamento ambiental, e inclui a pesquisa mineral com guia de utilização no grupo de extração e tratamento de minerais. A lista é exemplificativa: o art. 2º da mesma resolução submete ao licenciamento qualquer empreendimento ou atividade capaz de causar degradação ambiental. Uma campanha de sondagem com abertura de acessos, praças de perfuração, uso de água, geração de lama de perfuração e circulação de máquinas em área de nascentes se enquadra nessa hipótese.' },
    ]),
    pLink([
      { text: 'A Constituição, no art. 225, § 2º, obriga quem explora recursos minerais a recuperar o meio ambiente degradado, de acordo com solução técnica exigida pelo órgão público competente. Na Bahia, a Lei Estadual nº 10.431/2006 e o Decreto Estadual nº 14.024/2012 definem o enquadramento das atividades e as modalidades de licença emitidas pelo INEMA. A consulta prévia ao órgão, com a descrição da campanha, indica se a atividade exige licença, autorização específica ou se está dispensada.' },
    ]),
    pLink([
      { text: 'Pesquisar sem licença tem consequência penal. O art. 55 da Lei nº 9.605/1998 tipifica como crime executar pesquisa, lavra ou extração de recursos minerais sem a competente autorização, permissão, concessão ou licença, ou em desacordo com a obtida, com pena de detenção de seis meses a um ano e multa. Se houver dano a unidade de conservação, aplica-se também o art. 40 da mesma lei. Os documentos exigidos no licenciamento da mineração, como PCA e RCA, estão explicados no artigo sobre ' },
      { text: 'licenciamento de mineração no INEMA', link: '/blog/pca-rca-licenciamento-mineracao-industria-inema' },
      { text: '.' },
    ]),
    h2('Unidade de Conservação Municipal Também Restringe a Mineração'),
    pLink([
      { text: 'O Monumento Natural é uma das categorias de unidade de conservação de proteção integral previstas no art. 8º da Lei nº 9.985/2000, a Lei do SNUC. Seu objetivo, pelo art. 12, é preservar sítios naturais raros, singulares ou de grande beleza cênica, e ele pode ser formado por áreas particulares, desde que o uso da terra pelos proprietários seja compatível com esse objetivo. Unidades de proteção integral admitem apenas uso indireto dos recursos naturais, o que, em regra, exclui a pesquisa com sondagens e a lavra.' },
    ]),
    pLink([
      { text: 'Municípios podem criar unidades de conservação, e muitas serras, lagoas e cachoeiras da Bahia estão protegidas por leis municipais que não aparecem nas bases federais. Por isso, a investigação da área antes da pesquisa deve incluir as unidades federais, estaduais e municipais e suas zonas de amortecimento. O tema é tratado em detalhe no artigo sobre ' },
      { text: 'unidade de conservação e zona de amortecimento no licenciamento', link: '/blog/unidade-conservacao-zona-amortecimento-licenciamento' },
      { text: '.' },
    ]),
    h2('Terras Raras na Bahia e o Aumento dos Pedidos de Pesquisa'),
    pLink([
      { text: 'Os minerais de terras raras, usados em ímãs permanentes de motores elétricos e turbinas eólicas, passaram a atrair investimento de pesquisa em vários estados, e a Bahia está entre eles. Mais pedidos de pesquisa significam mais campanhas de campo em áreas rurais, muitas delas em serras com nascentes, vegetação de Mata Atlântica ou Caatinga e comunidades próximas. Quanto maior o interesse econômico, maior a atenção do Ministério Público, dos municípios e dos órgãos ambientais sobre a forma como essas campanhas são feitas.' },
    ]),
    h2('O que Conferir Antes da Campanha de Campo'),
    bullet('Levantar unidades de conservação federais, estaduais e municipais, zonas de amortecimento, áreas de preservação permanente e leis municipais de uso do solo na poligonal do alvará.'),
    bullet('Consultar o INEMA sobre o enquadramento da campanha e obter a licença ou a manifestação de dispensa antes de mobilizar equipamentos.'),
    bullet('Pedir outorga ou dispensa de outorga para a água usada nas sondagens e autorização de supressão de vegetação para acessos e praças de perfuração.'),
    bullet('Comunicar o município e registrar as respostas, principalmente quando houver notificação ou lei local sobre a área.'),
    bullet('Planejar o controle da lama de perfuração, dos resíduos e da drenagem, e a recuperação das áreas de sondagem ao final da campanha.'),
    pLink([
      { text: 'A recuperação das áreas abertas para sondagem e acessos pode exigir Plano de Recuperação de Áreas Degradadas. Técnicas de estabilização de taludes e revegetação estão no artigo sobre ' },
      { text: 'bioengenharia de solos e PRAD', link: '/blog/bioengenharia-solos-prad-recuperacao-taludes-cavas' },
      { text: ', e a supressão de vegetação para acessos segue o roteiro do artigo sobre ' },
      { text: 'inventário florestal e ASV', link: '/blog/inventario-florestal-asv-supressao-vegetal-segura' },
      { text: '.' },
    ]),
    callout('alert', 'Título minerário não é licença', 'Alvará de pesquisa, Guia de Utilização e concessão de lavra são atos da ANM. Nenhum deles dispensa a licença ambiental, a outorga de recursos hídricos, a autorização de supressão de vegetação ou o respeito a unidades de conservação e leis municipais. A falta de qualquer um desses atos permite a paralisação da atividade, multa administrativa e responsabilização penal.'),
    h3('Pesquisa Mineral com Licença e Sem Surpresa no Campo'),
    pLink([
      { text: 'A Anjos Brandão faz o diagnóstico territorial da área do alvará, identifica unidades de conservação e restrições municipais, conduz o licenciamento da campanha de pesquisa no INEMA, a outorga e a ASV e acompanha a recuperação das áreas de sondagem. ' },
      { text: 'Fale com a nossa equipe técnica', link: '/#contato' },
      { text: ' antes de mobilizar a sonda.' },
    ]),
  ],
  seo: {
    metaTitle: 'Pesquisa Mineral Exige Licença Ambiental: Caso Itarantim',
    metaDescription: 'A Justiça suspendeu pesquisa de terras raras sem licença em Itarantim (BA). Veja o que o alvará da ANM autoriza e quando a pesquisa exige licença do INEMA.',
    keywords: [
      'pesquisa mineral licença ambiental',
      'alvará de pesquisa anm licença',
      'terras raras itarantim',
      'licenciamento mineração inema',
      'guia de utilização licenciamento',
      'monumento natural mineração',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 42: Unidade de conservação e zona de amortecimento no licenciamento (guia, Lei 15.190/2025)
// ==========================================
export const POST_42 = {
  _id: 'post-42',
  title: 'Unidade de Conservação no Licenciamento: o Órgão Gestor Agora se Manifesta, e a Zona de Amortecimento Continua Valendo',
  slug: 'unidade-conservacao-zona-amortecimento-licenciamento',
  excerpt: 'Com a Lei Geral do Licenciamento, o órgão gestor da unidade de conservação deixou de autorizar a licença e passou a se manifestar. Veja o que mudou e o que continua.',
  publishedAt: '2026-11-25T10:00:00Z',
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: '/images/blog/post-42-unidade-conservacao-zona-amortecimento-licenciamento.webp',
  mainImageAlt: 'Vista aérea de serra com vegetação nativa preservada e limite com área agrícola e estrada ao fundo',
  mainImageCaption: 'O entorno de uma unidade de conservação pode estar sujeito a normas e restrições específicas da zona de amortecimento.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0, 3], // Licenciamento Ambiental, Fauna e Flora
  body: [
    pLink([
      { text: 'Na ' },
      { text: 'unidade de conservação, o licenciamento', strong: true },
      { text: ' mudou de regra com a Lei nº 15.190/2025, a Lei Geral do Licenciamento Ambiental. Antes, o licenciamento de empreendimento de significativo impacto que afetasse uma unidade de conservação ou sua zona de amortecimento só podia ser concedido com autorização do órgão responsável pela administração da unidade. Agora, esse órgão participa do processo como autoridade envolvida: ele se manifesta, em prazo definido, e a manifestação não vincula a decisão do órgão licenciador.' },
    ]),
    pLink([
      { text: 'A mudança não eliminou as restrições das unidades de conservação. O plano de manejo, as proibições da Lei nº 9.985/2000, a Lei do SNUC, a compensação ambiental e o crime de dano a unidade de conservação continuam valendo. O caso das serras de Itarantim, em que a Justiça da Bahia suspendeu uma pesquisa de terras raras em áreas transformadas em monumentos naturais por lei municipal, mostra que a presença de uma unidade pode paralisar uma atividade. O caso está no artigo sobre ' },
      { text: 'pesquisa mineral e licença ambiental', link: '/blog/pesquisa-mineral-licenca-ambiental-inema-itarantim' },
      { text: '. Este guia explica as regras atuais e o que o empreendedor deve verificar antes de pedir a licença.' },
    ]),
    callout('info', 'O que mudou com a Lei nº 15.190/2025', 'Art. 61: nova redação do art. 36, § 3º, da Lei nº 9.985/2000, sem a exigência de autorização do órgão gestor; a unidade afetada continua beneficiária da compensação ambiental. Art. 3º, III: o órgão gestor é autoridade envolvida e pode se manifestar sobre os impactos. Arts. 43, III, e 44, III: a participação ocorre quando houver unidade de conservação ou zona de amortecimento na área diretamente afetada, exceto APA. Art. 42, I, e art. 44, § 6º: a manifestação não vincula a decisão. Art. 44, § 4º: a ausência de manifestação no prazo não impede o andamento do licenciamento nem a emissão da licença.'),
    h2('Unidade de Conservação e Zona de Amortecimento: os Conceitos'),
    pLink([
      { text: 'A Lei do SNUC divide as unidades de conservação em dois grupos. As de proteção integral, listadas no art. 8º, são a Estação Ecológica, a Reserva Biológica, o Parque, o Monumento Natural e o Refúgio de Vida Silvestre, e admitem apenas o uso indireto dos recursos naturais. As de uso sustentável incluem a Área de Proteção Ambiental (APA), a Área de Relevante Interesse Ecológico, a Floresta Nacional, a Reserva Extrativista, a Reserva de Fauna, a Reserva de Desenvolvimento Sustentável e a Reserva Particular do Patrimônio Natural (RPPN). Unidades podem ser criadas pela União, pelos estados e pelos municípios.' },
    ]),
    pLink([
      { text: 'A zona de amortecimento é definida no art. 2º, XVIII, da lei como o entorno de uma unidade de conservação, onde as atividades humanas estão sujeitas a normas e restrições específicas, com o propósito de minimizar os impactos negativos sobre a unidade. Pelo art. 25, todas as unidades devem ter zona de amortecimento, exceto a APA e a RPPN. Os limites e as regras dessa zona são fixados no ato de criação da unidade ou depois, em geral no plano de manejo.' },
    ]),
    pLink([
      { text: 'O art. 28 proíbe, nas unidades de conservação, quaisquer alterações, atividades ou modalidades de uso em desacordo com seus objetivos, com o plano de manejo e com seus regulamentos. É essa regra, e não o licenciamento, que impede atividades incompatíveis dentro das unidades de proteção integral.' },
    ]),
    h2('O que Mudou: de Autorização para Manifestação'),
    pLink([
      { text: 'A redação original do art. 36, § 3º, da Lei do SNUC dizia que, quando o empreendimento afetasse unidade de conservação específica ou sua zona de amortecimento, o licenciamento só poderia ser concedido mediante autorização do órgão responsável por sua administração. A Resolução CONAMA nº 428/2010 regulamentava esse procedimento. O art. 61 da Lei nº 15.190/2025 deu nova redação ao parágrafo, que passou a tratar apenas da compensação: a unidade afetada, mesmo que não seja de proteção integral, deve ser uma das beneficiárias da compensação ambiental.' },
    ]),
    pLink([
      { text: 'Em lugar da autorização, a lei criou a figura da autoridade envolvida, definida no art. 3º, III, como o órgão que pode se manifestar no licenciamento sobre os impactos do empreendimento em terras indígenas, territórios quilombolas, patrimônio cultural e unidades de conservação. Os dispositivos sobre o caráter não vinculante e sobre o andamento do processo sem manifestação foram vetados na sanção da lei e restabelecidos depois que o Congresso Nacional derrubou o veto.' },
    ]),
    bullet('Termo de referência: as autoridades envolvidas têm até 30 dias para se manifestar, prorrogáveis por 15 dias com justificativa (art. 43, § 1º). Sem manifestação, o órgão licenciador usa o termo de referência padrão da autoridade.'),
    bullet('Estudos ambientais: o prazo é de até 90 dias para manifestação sobre o EIA/Rima e de até 30 dias nos demais casos, com prorrogação de até 30 e 15 dias, respectivamente (art. 44, §§ 2º e 3º).'),
    bullet('Manifestação fora do prazo: é avaliada na fase em que o processo estiver (art. 44, § 5º).'),
    bullet('Condicionantes propostas sem justificativa técnica: o órgão licenciador pode pedir que a autoridade justifique ou reconsidere em 10 dias (art. 44, § 7º).'),
    pLink([
      { text: 'A lei está em vigor e produz efeitos desde fevereiro de 2026. Ações no Supremo Tribunal Federal questionam ou defendem dispositivos da lei, e a redução da participação de órgãos como a Funai e a Fundação Palmares está entre os pontos impugnados. Uma decisão do STF pode alterar o regime descrito neste artigo. O andamento das ações está resumido no artigo sobre a ' },
      { text: 'Lei Geral do Licenciamento e o STF', link: '/blog/lei-geral-licenciamento-15190-stf-adi-empresas-bahia' },
      { text: '.' },
    ]),
    h2('O que Não Mudou'),
    bullet('As proibições do art. 28 da Lei do SNUC e as regras do plano de manejo continuam valendo dentro das unidades e, quando definidas, na zona de amortecimento.'),
    bullet('A Licença por Adesão e Compromisso não pode ser usada para atividades no interior de unidades de conservação, exceto em APA (art. 22, IV, "e", da Lei nº 15.190/2025, incluído pela Lei nº 15.300/2025).'),
    bullet('A unidade afetada continua beneficiária da compensação ambiental dos empreendimentos de significativo impacto (art. 36 da Lei do SNUC).'),
    bullet('Causar dano direto ou indireto a unidade de conservação é crime, com pena de reclusão de um a cinco anos (art. 40 da Lei nº 9.605/1998).'),
    bullet('A competência para licenciar dentro de unidades segue a Lei Complementar nº 140/2011: a União licencia em unidades federais, o estado em unidades estaduais e o município em unidades municipais, exceto em APA.'),
    pLink([
      { text: 'Na prática, a manifestação do órgão gestor deixou de ser um veto, mas continua pesando. Ela deve ser considerada pelo órgão licenciador, pode resultar em condicionantes e fica registrada no processo, à disposição do Ministério Público e do Judiciário. Um empreendimento licenciado contra uma manifestação técnica fundamentada do órgão gestor fica mais exposto a ações civis públicas.' },
    ]),
    h2('Unidades de Conservação na Bahia'),
    pLink([
      { text: 'A Bahia tem unidades federais, como o Parque Nacional da Chapada Diamantina, administrado pelo ICMBio; unidades estaduais, administradas pelo INEMA, entre elas várias APAs no litoral; e um número crescente de unidades municipais criadas por lei local, como os monumentos naturais de Itarantim. As unidades municipais são as mais difíceis de identificar, porque nem sempre constam das bases federais e estaduais. Uma área que parece livre no mapa nacional pode estar dentro de um monumento natural ou de um parque municipal.' },
    ]),
    h2('O que Verificar Antes de Pedir a Licença'),
    bullet('Consultar o Cadastro Nacional de Unidades de Conservação, mantido pelo Ministério do Meio Ambiente, as bases do INEMA e a legislação do município onde fica o empreendimento.'),
    bullet('Identificar a categoria de cada unidade próxima, o órgão gestor, o ato de criação e se existe zona de amortecimento definida.'),
    bullet('Ler o plano de manejo e o zoneamento da unidade, que podem proibir ou condicionar a atividade pretendida.'),
    bullet('Incluir no cronograma os prazos de manifestação das autoridades envolvidas: 30 dias no termo de referência e até 90 dias no EIA/Rima, mais prorrogações.'),
    bullet('Apresentar o projeto ao órgão gestor antes do protocolo, para incorporar medidas de mitigação e reduzir o risco de condicionantes e contestações.'),
    bullet('Prever a compensação ambiental e o controle de impactos indiretos, como drenagem, ruído, iluminação, tráfego e supressão de vegetação no entorno.'),
    pLink([
      { text: 'O roteiro do ' },
      { text: 'EIA/RIMA e da audiência pública no INEMA', link: '/blog/eia-rima-audiencia-publica-inema-bahia-licenca-previa' },
      { text: ' e as regras de ' },
      { text: 'compensação ambiental', link: '/blog/compensacao-ambiental-inema-reserva-legal-tcra' },
      { text: ' estão em outros artigos do blog. Para loteamentos próximos a fragmentos de vegetação, o artigo sobre ' },
      { text: 'corredores ecológicos', link: '/blog/corredores-ecologicos-planejamento-loteamentos-residenciais' },
      { text: ' mostra como integrar a conexão entre áreas protegidas ao projeto.' },
    ]),
    callout('alert', 'Manifestação não vinculante não é dispensa', 'A Lei nº 15.190/2025 retirou a exigência de autorização do órgão gestor, mas não liberou atividades dentro de unidades de conservação nem afastou o plano de manejo, a zona de amortecimento, a compensação ambiental e a responsabilidade penal por dano. Leis municipais que criam unidades também precisam ser verificadas, porque podem proibir atividades na área.'),
    h3('Diagnóstico Territorial Antes do Projeto'),
    pLink([
      { text: 'A Anjos Brandão identifica as unidades de conservação federais, estaduais e municipais e as zonas de amortecimento que alcançam a sua área, analisa os planos de manejo e conduz o diálogo com os órgãos gestores e o licenciamento no INEMA. ' },
      { text: 'Fale com a nossa equipe técnica', link: '/#contato' },
      { text: ' antes de definir o local do empreendimento.' },
    ]),
  ],
  seo: {
    metaTitle: 'Unidade de Conservação no Licenciamento: Lei 15.190/2025',
    metaDescription: 'A Lei Geral do Licenciamento trocou a autorização do órgão gestor da UC por manifestação não vinculante. Veja prazos, zona de amortecimento e o que continua.',
    keywords: [
      'unidade de conservação licenciamento',
      'zona de amortecimento licenciamento',
      'lei 15.190 unidade de conservação',
      'autorização órgão gestor uc',
      'snuc art 36 compensação',
      'monumento natural bahia',
      'consultoria ambiental bahia',
    ],
  },
}
