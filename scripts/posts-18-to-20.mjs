import { p, h2, h3, bullet, callout, pLink, DEFAULT_AUTHOR } from './enrich-helpers.mjs'

// ============================================================================
// POST 18: LOGÍSTICA REVERSA E DMR NO SINIR
// ============================================================================
export const POST_18 = {
  _id: 'post-18',
  title: 'Logística Reversa e DMR no SINIR: Guia de Conformidade Legal para Geradores e Transportadores',
  slug: 'logistica-reversa-dmr-sinir-residuos-bahia',
  excerpt: 'Gestão de logística reversa e declaração de DMR no SINIR na Bahia. Rastreabilidade com MTR online e conformidade com o INEMA. Solicite suporte técnico.',
  publishedAt: '2026-09-30T10:00:00Z',
  estimatedReadTime: 12,
  featured: false,
  mainImageUrl: '/images/blog/post-18-logistica-reversa-dmr-sinir-residuos.webp',
  mainImageAlt: 'Inspeção de logística reversa e DMR no SINIR em centro de resíduos na Bahia',
  mainImageCaption: 'Supervisores ambientais da Anjos Brandão conferindo conformidade de MTRs e baias de triagem para elaboração de DMR.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [1, 4], // PGRS, ESG
  body: [
    pLink([
      { text: 'A implementação estruturada de ' },
      { text: 'logística reversa e DMR no SINIR', strong: true },
      { text: ' (Declaração de Movimentação de Resíduos) tornou-se uma obrigação legal inadiável para indústrias, construtoras, importadores e distribuidores em todo o território da Bahia. Com o cruzamento eletrônico em tempo real entre as bases de dados do INEMA, Ministério Público e Ministério do Meio Ambiente, empresas que não comprovam documentalmente a destinação final de seus resíduos e embalagens enfrentam bloqueios cadastrais imediatos e multas pecuniárias gravíssimas.' },
    ]),
    pLink([
      { text: 'O tempo dos controles em planilhas manuais e recibos em papel acabou em definitivo. Todo o ciclo de vida dos materiais perigosos e recicláveis deve ser auditado digitalmente. Conheça as bases do nosso ' },
      { text: 'serviço especializado de elaboração e gestão de PGRS', link: '/pgrs' },
      { text: ' e garanta que sua empresa cumpra todas as metas legais de reciclagem.' },
    ]),

    h2('O Que É a DMR no SINIR e Como Funciona a Logística Reversa?'),
    p('A Declaração de Movimentação de Resíduos (DMR) é o documento eletrônico semestral emitido no Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos (SINIR) que consolida a quantidade e destinação de resíduos gerados, transportados e recebidos na Bahia.'),
    pLink([
      { text: 'A obrigatoriedade decorre diretamente da Política Nacional de Resíduos Sólidos (Lei Federal nº 12.305/2010), do Decreto Federal nº 10.936/2022 e da Portaria MMA nº 280/2020, recepcionada no âmbito estadual pelo INEMA. A DMR funciona como a declaração de imposto de renda dos resíduos: ela cruza os dados dos ' },
      { text: 'manifestos de transporte de resíduos (MTR Online)', link: '/blog/mtr-online-gestao-residuos-perigosos-classe-1' },
      { text: ' com os Certificados de Destinação Final (CDF) emitidos pelas empresas receptoras.' },
    ]),

    callout('legal', 'Prazos Mandatórios da DMR no SINIR', 'A DMR semestral deve ser transmitida eletronicamente no portal do SINIR até o dia 30 de julho (referente às operações de 1º de janeiro a 30 de junho) e até 30 de janeiro (referente ao período de 1º de julho a 31 de dezembro). O atraso impede a emissão de novos MTRs e bloqueia o transporte de cargas.'),

    h2('Cadeias Prioritárias e Obrigatórias de Logística Reversa na Bahia'),
    p('A legislação brasileira estabelece sistemas obrigatórios de logística reversa independentes do serviço público de limpeza urbana:'),

    h3('1. Óleos Lubrificantes Usados ou Contaminados (OLUC) e Embalagens Plásticas'),
    p('Resíduos de altíssima periculosidade e toxicidade para os recursos hídricos:'),
    bullet('Meta mandatória de recolhimento: Todo gerador (oficinas mecânicas, transportadoras, canteiros de obras com frotas pesadas) deve entregar 100% do óleo usado a rerrefinadores autorizados pela ANP em cumprimento à Resolução CONAMA nº 362/2005.'),
    bullet('Embalagens plásticas contaminadas: Devem ser desvinculadas do lixo comum e enviadas para usinas de reciclagem licenciadas com emissão de MTR específico.'),

    h3('2. Baterias Chumbo-Ácido e Pilhas Industriais'),
    p('Resíduos químicos pesados sujeitos a normas severas da Resolução CONAMA nº 401/2008:'),
    bullet('Logística reversa 1:1: Revendedores, frotistas e mineradoras devem devolver aos fabricantes ou importadores volume equivalente de baterias inservíveis para recuperação do chumbo.'),

    h3('3. Pneus Inservíveis de Crotas e Equipamentos Pesados'),
    p('Regulamentados pela Resolução CONAMA nº 416/2009:'),
    bullet('Destinação ambientalmente adequada: Trituração para asfalto-borracha, coprocessamento em fornos de clínquer ou granulação para solados e pisos absorventes.'),

    h3('4. Embalagens de Tintas, Solventes, Desmoldantes e Defensivos Agrícolas'),
    p('Resíduos de canteiros da construção civil e do agronegócio baiano:'),
    bullet('Tríplice lavagem obrigatória e devolução a postos de recolhimento credenciados do sistema inPEV (Instituto Nacional de Processamento de Embalagens Vazias).'),

    callout('warning', 'Responsabilidade Objetiva e Solidária do Gerador', 'A terceirização do transporte não transfere a responsabilidade ambiental. Se um transportador clandestino despejar resíduos perigosos em rios ou terrenos baldios, a empresa geradora responde solidariamente por todo o passivo e danos na esfera cível e criminal.'),

    h2('Como Evitar Discrepâncias de Balanço de Massa na DMR'),
    p('O maior motivo de bloqueio cadastral e fiscalização pelo INEMA são as inconsistências de dados na plataforma:'),
    bullet('Cruzamento de peso líquido: A quantidade declarada no MTR de expedição pelo gerador deve bater rigorosamente com o peso aferido na balança do destinador final informada no CDF.'),
    bullet('Códigos IBAMA e NBR 10.004 compatíveis: Utilizar a classificação correta dos resíduos (Classe I - Perigosos vs. Classe II - Não perigosos).'),
    bullet('Baixa tempestiva de manifestos: O receptor tem prazo limite de até 30 dias após o recebimento para emitir o CDF no sistema eletrônico.'),

    p('Recomenda-se a realização de uma conciliação mensal interna comparando as notas fiscais de expedição com os relatórios emitidos pelo SINIR, evitando que cargas movimentadas fiquem pendentes de validação no fechamento semestral da DMR.'),

    h2('Integração com a Economia Circular e a Redução de Custos'),
    pLink([
      { text: 'Empresas inteligentes utilizam os dados consolidados da DMR para mapear desperdícios operacionais e implantar programas de ' },
      { text: 'economia circular e simbiose industrial', link: '/blog/economia-circular-pgrs-industria-pesada-quimica' },
      { text: '. Reduzir a geração na fonte e valorizar subprodutos diminui drasticamente a fatura de transporte rodoviário de resíduos e atrai a simpatia dos analistas de ' },
      { text: 'licenciamento ambiental na Bahia', link: '/licenciamento-ambiental' },
      { text: '.' },
    ]),

    h2('Suporte Especializado em Resíduos com a Anjos Brandão'),
    pLink([
      { text: 'A equipe de engenheiros sanitaristas e ambientais da ' },
      { text: 'Anjos Brandão Soluções Ambientais', link: '/#contato' },
      { text: ' realiza o saneamento cadastral de empresas no SINIR, monitora a emissão diária de MTRs, elabora a DMR semestral e audita destinadores finais em toda a Bahia. Explore nossa seção técnica sobre ' },
      { text: 'gestão de resíduos sólidos e compliance', link: '/blog/categoria/residuos-solidos' },
      { text: ' para manter suas operações em conformidade plena perante os órgãos de controle.' },
    ]),

    h2('Perguntas Frequentes sobre Logística Reversa e DMR no SINIR (FAQ)'),
    h3('Toda empresa geradora de resíduos é obrigada a emitir a DMR no SINIR?'),
    p('Todas as empresas sujeitas à elaboração de PGRS (indústrias, construtoras, mineradoras, portos, hospitais e grandes geradores comerciais) são legalmente obrigadas a emitir a DMR semestral no SINIR.'),
    h3('O que acontece se a empresa perder o prazo de envio da DMR no sistema?'),
    p('A empresa fica imediatamente bloqueada para emitir novos MTRs no SINIR, o que inviabiliza legalmente a saída de qualquer resíduo de sua planta, além de ficar sujeita a auto de infração ambiental com multas de R$ 5.000,00 a R$ 50.000,00 por descumprimento de obrigação acessória.'),
    h3('Qual a diferença entre MTR e DMR?'),
    p('O MTR (Manifesto de Transporte de Resíduos) é o documento individual que acompanha cada carga de resíduo desde a expedição no gerador até o portão do destinador. A DMR (Declaração de Movimentação de Resíduos) é o relatório semestral consolidado que resume todas as transações de MTR ocorridas no período.'),
    h3('Empresas na Bahia utilizam o SINIR federal ou há um sistema estadual próprio?'),
    p('O estado da Bahia utiliza o SINIR federal em cooperação com o INEMA. Toda a movimentação de MTR e DMR deve ser realizada na plataforma unificada do SINIR/MMA.'),
  ],
  seo: {
    metaTitle: 'Logística Reversa e DMR no SINIR na BA | Anjos Brandão', // 54 chars
    metaDescription: 'Gestão de logística reversa e DMR no SINIR na Bahia. Rastreabilidade com MTR online e conformidade com o INEMA. Solicite consultoria especializada.', // 148 chars
    keywords: [
      'logística reversa e DMR no SINIR',
      'declaracao movimentacao residuos sinir bahia',
      'MTR online certificado cdf inema',
      'gestao de oleo lubrificante oluc',
      'pnrs logistica reversa embalagens',
      'fiscalizacao residuos solidos inema',
    ],
  },
}

// ============================================================================
// POST 19: FAUNA EM LINHAS DE TRANSMISSÃO
// ============================================================================
export const POST_19 = {
  _id: 'post-19',
  title: 'Monitoramento e Afugentamento de Fauna em Linhas de Transmissão (LT): Faixas de Servidão',
  slug: 'monitoramento-afugentamento-fauna-linhas-transmissao-inema',
  excerpt: 'Monitore a fauna em linhas de transmissão na Bahia com rigor. Protocolos de afugentamento, avifauna e cumprimento de condicionantes do INEMA. Saiba mais.',
  publishedAt: '2026-10-02T10:00:00Z',
  estimatedReadTime: 12,
  featured: false,
  mainImageUrl: '/images/blog/post-19-monitoramento-fauna-linhas-transmissao.webp',
  mainImageAlt: 'Faixa de servidão e proteção de fauna em linhas de transmissão na Bahia',
  mainImageCaption: 'Faixa de servidão de linha de transmissão na Bahia equipada com sinalizadores anti-colisão de avifauna.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [3, 0], // Fauna e Flora, Licenciamento
  body: [
    pLink([
      { text: 'A proteção e o monitoramento da ' },
      { text: 'fauna em linhas de transmissão na Bahia', strong: true },
      { text: ' constituem um dos requisitos de maior rigor técnico e sensibilidade ecológica exigidos pelo INEMA e pelo IBAMA no licenciamento de infraestruturas do setor elétrico. Com o vertiginoso avanço das linhas de alta tensão (230 kV e 500 kV) destinadas a escoar a energia de parques eólicos e solares do semiárido baiano até a rede básica nacional, a abertura de centenas de quilômetros de faixas de servidão impõe desafios monumentais à conservação biológica.' },
    ]),
    pLink([
      { text: 'A intervenção linear sobre ecossistemas frágeis de Caatinga e Cerrado exige intervenções coordenadas de afugentamento prévio durante a supressão e prevenção contínua de colisões fatais de aves contra cabos elétricos. Acesse nosso ' },
      { text: 'serviço especializado de resgate de fauna e flora', link: '/resgate-fauna-flora' },
      { text: ' para blindar suas obras lineares de energia contra notificações e atrasos de licenciamento.' },
    ]),

    h2('O Que É o Programa de Fauna em Linhas de Transmissão?'),
    p('O Programa de Monitoramento e Manejo de Fauna em Linhas de Transmissão é o conjunto de protocolos científicos executados por equipes de biólogos para afugentar, resgatar e monitorar animais silvestres durante a implantação e operação de corredores elétricos na Bahia.'),
    pLink([
      { text: 'As diretrizes normativas são fundamentadas na Lei Federal nº 5.197/1967 (Proteção à Fauna), na Lei Estadual da Bahia nº 10.431/2006 e nas condicionantes específicas da Licença de Instalação (LI) e Licença de Operação (LO) expedidas pelo INEMA. Todo o cronograma deve estar articulado à ' },
      { text: 'autorização de supressão vegetal (ASV)', link: '/autorizacao-supressao-vegetal' },
      { text: ' concedida para a faixa de servidão.' },
    ]),

    callout('legal', 'Condicionante Expressa de LO para Concessionárias de Energia', 'A renovação da Licença de Operação de linhas de transmissão fica condicionada à apresentação de relatórios sazonais de colisão de avifauna, comprovando que os desviadores de voo instalados reduziram as taxas de impacto nos vãos críticos.'),

    h2('Protocolos de Campo na Fase de Implantação e Abertura de Faixa'),
    p('A fase de obras civis e montagem de torres exige atuação biológica intensiva na frente das máquinas pesadas:'),

    h3('1. Afugentamento Prévio e Direcionado'),
    p('Procedimento metódico que precede o avanço das motosserras e escavadeiras:'),
    bullet('Varredura em linha de batedores: Biólogos e auxiliares percorrem a poligonal da faixa emitindo estímulos visuais e sonoros controlados para que aves e mamíferos migrem naturalmente em direção a refúgios florestais contíguos.'),
    bullet('Direcionamento de fuga: O corte da vegetação é realizado em sentido unidirecional, mantendo sempre corredores de conexão abertos para impedir que os animais fiquem encurralados em pequenas "ilhas" de mata.'),

    h3('2. Resgate Ativo de Herpetofauna e Pequenos Mamíferos'),
    p('Animais de baixa mobilidade não conseguem fugir a tempo e necessitam de salvamento direto:'),
    bullet('Busca ativa sob troncos caídos, tocas no solo, fendas de rochas e vegetação de sub-bosque.'),
    bullet('Captura com equipamentos de proteção individual adequados (ganchos herpetológicos, pinças e puçás).'),
    bullet('Triagem veterinária em campo, hidratação e soltura imediata em áreas de mata preservada previamente georreferenciadas e autorizadas na licença ambiental.'),

    h3('3. Proteção e Manejo de Ninhos e Espécies Ameaçadas'),
    p('Atenção máxima para espécies raras do semiárido baiano (como a arara-azul-de-lear e a águia-cinzenta):'),
    bullet('Inspeção minuciosa com binóculos de alta resolução na copa de árvores de grande porte antes da derrubada.'),
    bullet('Em caso de detecção de ninhos com ovos ou filhotes em desenvolvimento, é demarcado um raio de proteção provisório com paralisação das frentes até a emancipação dos filhotes.'),

    callout('warning', 'O Crime de Destruição de Ninhos de Espécies Ameaçadas', 'Derrubar árvores que abriguem ninhos ativos de espécies ameaçadas de extinção configura crime ambiental doloso e inafiançável, com embargo imediato da obra pelo INEMA e encaminhamento ao Ministério Público Federal.'),

    h2('Fase de Operação: Mitigação de Riscos de Colisão e Eletrocussão'),
    p('Após a energização da linha em alta tensão, a dinâmica de risco muda para o espaço aéreo:'),

    h3('1. Instalação de Desviadores de Voo e Sinalizadores Anticolisão'),
    p('Dispositivos visuais instalados nos cabos para-raios (OPGW) nos pontos mais altos das torres:'),
    bullet('Sinalizadores espirais de PVC colorido e defletores dinâmicos refletivos com rotação eólica e fitas fluorescentes visíveis à noite.'),
    bullet('Espaçamento técnico a cada 10 ou 15 metros nos vãos que cruzam rios, lagoas, serras e rotas migratórias comprovadas.'),

    h3('2. Metodologia Científica de Busca Sistemática de Carcaças'),
    p('Campanhas periódicas de fiscalização sob os cabos para validar a eficácia dos desviadores:'),
    bullet('Transectos padronizados a pé sob a faixa de servidão inspecionando o solo sob os vãos de torres.'),
    bullet('Cálculo da taxa de remoção por carniceiros (scavengers): Experimentos com carcaças de controle para estimar quantos animais mortos são consumidos por urubus e raposas antes da passagem da equipe.'),
    bullet('Calibração da eficiência do observador para corrigir estatisticamente o número real de colisões.'),

    h2('Conexão com Projetos de Passagens de Fauna e Conectividade'),
    pLink([
      { text: 'A faixa de servidão desobstruída pode funcionar como barreira artificial para espécies terrestres de sub-bosque. A equipe da Anjos Brandão projeta soluções integradas de ' },
      { text: 'passagens de fauna em obras de infraestrutura', link: '/blog/passagem-de-fauna-monitoramento-obras-infraestrutura' },
      { text: ' e corredores de vegetação rasteira nativa, mitigando o efeito de barreira na paisagem baiana.' },
    ]),

    h2('Por Que Contratar a Equipe Biológica da Anjos Brandão'),
    pLink([
      { text: 'A ' },
      { text: 'Anjos Brandão Soluções Ambientais', link: '/#contato' },
      { text: ' conta com biólogos de campo e veterinários especialistas em ecologia de linhas de transmissão, veículos 4x4 equipados e drones de monitoramento termográfico. Veja mais detalhes em nosso setor de ' },
      { text: 'consultoria para fauna e flora na Bahia', link: '/blog/categoria/florestal-fauna' },
      { text: ' e mantenha seu empreendimento energético em conformidade plena perante o INEMA.' },
    ]),

    h2('Perguntas Frequentes sobre Fauna em Linhas de Transmissão (FAQ)'),
    h3('Por que as aves colidem com cabos de linhas de transmissão?'),
    p('A maioria das aves de médio e grande porte voa com a cabeça orientada ligeiramente para baixo para rastrear alimento no solo. Os cabos condutores inferiores são mais grossos e visíveis, mas o cabo para-raios (OPGW) no topo da torre é muito fino e fica praticamente invisível durante o voo crepuscular ou sob neblina, provocando impactos fatais.'),
    h3('Quais trechos de uma linha de transmissão são obrigatoriamente sinalizados?'),
    p('A sinalização anticolisão é obrigatória pelo INEMA nos trechos que cruzam corpos d água (rios e lagoas), topos de serras, vales de voo concentrado, proximidades de Unidades de Conservação e rotas de aves migratórias identificadas nos estudos de EIA/RIMA.'),
    h3('O que é feito com os animais feridos resgatados durante a obra?'),
    p('Os animais feridos recebem atendimento clínico emergencial em ambulatório veterinário de canteiro montado pela Anjos Brandão. Casos graves são estabilizados e encaminhados para Centros de Triagem de Animais Silvestres (CETAS) credenciados pelo INEMA ou IBAMA na Bahia.'),
    h3('Qual a frequência de envio dos relatórios de fauna ao órgão ambiental?'),
    p('Durante a fase de implantação física, os relatórios de afugentamento e resgate costumam ser trimestrais ou semestrais. Na fase de operação, os relatórios de monitoramento de colisão de avifauna são apresentados anualmente ao INEMA.'),
  ],
  seo: {
    metaTitle: 'Fauna em Linhas de Transmissão na Bahia | Anjos Brandão', // 55 chars
    metaDescription: 'Monitore a fauna em linhas de transmissão na Bahia. Protocolos de afugentamento, avifauna e cumprimento de condicionantes do INEMA. Saiba mais.', // 144 chars
    keywords: [
      'fauna em linhas de transmissão na Bahia',
      'monitoramento de avifauna linha transmissao',
      'desviadores de voo cabos opgw inema',
      'afugentamento e resgate fauna servidao',
      'licenciamento ambiental energia alta tensao',
      'cetas resgate fauna silvestre bahia',
    ],
  },
}

// ============================================================================
// POST 20: AUDITORIA AMBIENTAL COMPULSÓRIA CEPRAM
// ============================================================================
export const POST_20 = {
  _id: 'post-20',
  title: 'Auditoria Ambiental Compulsória do CEPRAM na Bahia: Escopo, PAC e Conformidade de LO',
  slug: 'auditoria-ambiental-compulsoria-cepram-inema-plano-acao',
  excerpt: 'Saiba como realizar a auditoria ambiental CEPRAM na Bahia sem riscos. Escopo de conformidade de LO e Plano de Ação Corretiva (PAC). Solicite proposta.',
  publishedAt: '2026-10-04T10:00:00Z',
  estimatedReadTime: 12,
  featured: false,
  mainImageUrl: '/images/blog/post-20-auditoria-ambiental-cepram-inema.webp',
  mainImageAlt: 'Auditores conduzindo auditoria ambiental CEPRAM em planta industrial na Bahia',
  mainImageCaption: 'Auditores ambientais da Anjos Brandão checando parâmetros de efluentes e plano de ação em vistoria técnica.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [4, 0], // ESG, Licenciamento
  body: [
    pLink([
      { text: 'A realização periódica da ' },
      { text: 'auditoria ambiental CEPRAM na Bahia', strong: true },
      { text: ' é um dever legal compulsório que recai sobre indústrias petroquímicas, metalúrgicas, mineradoras, terminais portuários e concessionárias de saneamento enquadradas nas classes de médio e alto potencial de degradação. Longe de ser uma formalidade burocrática, a auditoria prevista no arcabouço normativo baiano avalia minuciosamente o desempenho real das plantas operacionais, identificando não-conformidades ocultas antes que se convertam em acidentes graves ou sanções pelo INEMA.' },
    ]),
    pLink([
      { text: 'O protocolo do Relatório de Auditoria e do Plano de Ação Corretiva (PAC) é documento indispensável para a manutenção e posterior renovação da Licença de Operação (LO). Conheça as exigências legais da ' },
      { text: 'renovação de Licença de Operação no INEMA', link: '/blog/renovacao-licenca-operacao-lo-prazos-documentos-inema' },
      { text: ' e garanta a regularidade jurídica do seu negócio perante os órgãos de controle.' },
    ]),

    h2('O Que É a Auditoria Ambiental Compulsória do CEPRAM?'),
    p('A auditoria ambiental compulsória do CEPRAM é uma inspeção técnica sistemática, documentada e independente realizada por consultoria externa cadastrada para avaliar a conformidade de instalações industriais e de infraestrutura com as condicionantes de suas licenças e leis ambientais na Bahia.'),
    pLink([
      { text: 'A disciplina jurídica é fundamentada na Lei Estadual nº 10.431/2006 (artigos 94 a 104), regulamentada pelo Decreto Estadual nº 14.024/2012 e regrada em seus detalhes procedimentais pela Resolução CEPRAM nº 3.925/2009. Ela complementa as rotinas internas de ' },
      { text: 'governança ESG e compliance ambiental', link: '/blog/governanca-esg-mitigacao-riscos-ambientais' },
      { text: ', gerando transparência para o mercado e segurança para a diretoria executiva.' },
    ]),

    callout('legal', 'Resolução CEPRAM nº 3.925/2009: Independência Obrigatória', 'A auditoria ambiental compulsória só tem validade jurídica perante o INEMA se realizada por equipe multidisciplinar externa de consultoria independente, sendo vedada a execução por colaboradores próprios ou terceirizados com vínculo de subordinação direta na empresa auditada.'),

    h2('Quem Está Legalmente Obrigado a Realizar a Auditoria?'),
    p('A obrigação legal de submeter-se à auditoria ambiental compulsória no território baiano atinge atividades de Classe 4, 5 e 6:'),
    bullet('Indústrias químicas, petroquímicas e de refino de petróleo e gás no Polo de Camaçari e Baía de Todos os Santos.'),
    bullet('Complexos minerários com lavra e beneficiamento mineral pesado, barragens de contenção de rejeitos e usinas de concentração.'),
    bullet('Terminais marítimos, portos organizados e instalações de armazenamento de combustíveis e granéis líquidos perigosos.'),
    bullet('Usinas siderúrgicas, metalúrgicas de não-ferrosos e fundições pesadas.'),
    bullet('Sistemas públicos e privados de esgotamento sanitário com ETEs e aterros de resíduos industriais perigosos (Classe I).'),

    h2('Periodicidade Mandatória Fixada na Licença de Operação'),
    p('A periodicidade de realização da auditoria é fixada expressamente nas condicionantes da LO ou por notificação do INEMA:'),
    bullet('Periodicidade Bienal (a cada 2 anos): Para atividades de Classe 6 ou com histórico de notificações e incidentes graves de contaminação.'),
    bullet('Periodicidade Trienal (a cada 3 anos): Para as demais atividades enquadradas nas Classes 4 e 5 em situação de conformidade regular.'),

    h2('Escopo Técnico Completo da Auditoria em Campo e Documental'),
    p('A auditoria independente conduzida pela Anjos Brandão abrange todas as matrizes ambientais da instalação:'),

    h3('1. Verificação de Condicionantes da LO e Outorgas'),
    p('Checagem linha a linha do cumprimento dos prazos e termos de todas as licenças estaduais ativas no SEIA:'),
    bullet('Comprovação do envio tempestivo de relatórios de automonitoramento de efluentes líquidos à gerência técnica do INEMA.'),
    bullet('Validação da outorga de captação de água e laudos piezométricos de poços de monitoramento do lençol freático.'),

    h3('2. Inspeção Física das Unidades de Controle de Poluição'),
    p('Vistoria in loco de todas as estruturas físicas de engenharia da planta fabril:'),
    bullet('Estações de Tratamento de Efluentes (ETE): Eficiência de aeração, lodo ativado, neutralização de pH e laudos de DBO e metais.'),
    bullet('Sistemas de Controle de Emissões Atmosféricas: Integridade de lavadores de gases, filtros de manga, ciclones e precipitadores eletrostáticos.'),
    bullet('Armazenamento de Substâncias Perigosas: Diques de contenção de tanques (ABNT NBR 17505), válvulas de alívio e sistemas corta-chamas.'),

    h3('3. Gestão e Rastreabilidade de Resíduos Perigosos'),
    pLink([
      { text: 'Auditoria minuciosa das centrais de resíduos, com checagem dos registros de ' },
      { text: 'MTR Online e declarações semestrais de DMR no SINIR', link: '/blog/logistica-reversa-dmr-sinir-residuos-bahia' },
      { text: ', além da comprovação de Certificados de Destinação Final (CDF) de coprocessamento e incineração.' },
    ]),

    callout('warning', 'A armadilha dos planos de emergência desatualizados', 'Durante a auditoria, a equipe inspeciona o Plano de Ação de Emergência (PAE). A ausência de simulados práticos de vazamento com registro em ata constitui não-conformidade crítica que pode ensejar paralisação de setores fabris.'),

    h2('Estruturação do Plano de Ação Corretiva (PAC) e Protocolo no INEMA'),
    p('O resultado da auditoria é sintetizado em dois documentos fundamentais:'),
    bullet('Relatório de Auditoria Ambiental: Diagnóstico que cataloga as inconformidades apuradas em três níveis de gravidade: Leves (documentais), Moderadas (manutenção sem risco iminente) e Críticas (risco iminente de dano ambiental).'),
    bullet('Plano de Ação Corretiva (PAC): Matriz de compromisso corporativo que estabelece o plano executivo para sanar cada falha, indicando os responsáveis técnicos por setor, os investimentos orçados e o cronograma físico de implantação.'),
    p('O relatório e o PAC são assinados pela equipe auditora independente e pela diretoria da empresa, sendo protocolados no sistema SEIA para homologação pelo INEMA e acompanhamento do Ministério Público estadual (MP-BA).'),

    h2('Por Que Escolher a Anjos Brandão para sua Auditoria CEPRAM'),
    pLink([
      { text: 'A ' },
      { text: 'Anjos Brandão Soluções Ambientais', link: '/#contato' },
      { text: ' reúne auditores líderes certificados (ISO 14001), engenheiros químicos, civis, ambientais e biólogos com vasta bagagem na indústria baiana. Conduzimos também auditorias prévias de ' },
      { text: 'due diligence ambiental para aquisições', link: '/blog/due-diligence-ambiental-compra-terrenos-loteamentos' },
      { text: '. Acesse nossa área de ' },
      { text: 'auditorias e compliance ambiental na Bahia', link: '/blog/categoria/esg-compliance' },
      { text: ' e proteja sua planta industrial com total independência e excelência técnica.' },
    ]),

    h2('Perguntas Frequentes sobre Auditoria Ambiental CEPRAM (FAQ)'),
    h3('Qual a consequência de não realizar a auditoria compulsória no prazo fixado?'),
    p('O não envio do relatório de auditoria e do PAC acarreta a lavratura automática de auto de infração ambiental pelo INEMA com aplicação de multas pesadas, além do cancelamento da eficácia da Licença de Operação e comunicação imediata à Promotoria de Meio Ambiente do Ministério Público.'),
    h3('A empresa auditada pode escolher os auditores ambientais que preferir?'),
    p('A empresa deve contratar consultorias ambientais independentes que comprovem registro ativo de sua equipe multidisciplinar no CREA ou CRBio, ausência de impedimento legal e experiência comprovada no escopo industrial a ser auditado.'),
    h3('Quem fiscaliza se o Plano de Ação Corretiva (PAC) está sendo cumprido?'),
    p('O INEMA realiza vistorias periódicas de acompanhamento e exige relatórios semestrais de evolução física do PAC assinados pelo responsável técnico da planta fabril.'),
    h3('A auditoria do CEPRAM substitui as auditorias de certificação ISO 14001?'),
    p('Não. A ISO 14001 é uma certificação voluntária de sistema de gestão empresarial internacional, enquanto a auditoria do CEPRAM é uma imposição legal pública obrigatória pela legislação baiana, possuindo rito, penalidades e prazos próprios sob a tutela do Estado.'),
  ],
  seo: {
    metaTitle: 'Auditoria Ambiental CEPRAM na Bahia | Anjos Brandão', // 51 chars
    metaDescription: 'Saiba como realizar a auditoria ambiental CEPRAM na Bahia sem riscos. Escopo de conformidade de LO e Plano de Ação Corretiva (PAC). Solicite proposta.', // 150 chars
    keywords: [
      'auditoria ambiental CEPRAM na Bahia',
      'resolucao cepram 3925 auditoria',
      'plano de acao corretiva pac inema',
      'auditoria compulsoria polo camacari',
      'conformidade licenca de operacao lo',
      'consultoria auditoria ambiental salvador',
    ],
  },
}
