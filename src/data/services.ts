export interface Service {
  id: string
  title: string
  description: string
}

export const services: Service[] = [
  {
    id: 'licenciamento',
    title: 'Licenciamento ambiental',
    description:
      'Processo completo LP → LI → LO junto a IBAMA, INEMA e CEPRAM. Elaboração de EIA, RIMA, RCA e PCA, renovações, revisões e acompanhamento de condicionantes.',
  },
  {
    id: 'gestao',
    title: 'Gestão e monitoramento',
    description:
      'Planos de gerenciamento, auditorias periódicas, programas de monitoramento e relatórios técnicos que mantêm a operação em conformidade ao longo de todo o ciclo do empreendimento.',
  },
  {
    id: 'pgrs',
    title: 'Elaboração de PGRS e PGRCC',
    description:
      'Elaboração e atualização de planos técnicos para empresas e obras, com avaliação das exigências do licenciamento, das condicionantes e dos documentos pendentes.',
  },
  {
    id: 'esg',
    title: 'Estratégia ESG',
    description:
      'Diagnóstico de maturidade, indicadores GRI, SASB e TCFD, planos de ação com métricas e relatórios de sustentabilidade integrados à realidade operacional do cliente.',
  },
  {
    id: 'campo',
    title: 'Operações de campo',
    description:
      'Supressão vegetal monitorada, reflorestamento com mudas nativas, campanhas de pegamento e presença técnica in loco durante operações críticas.',
  },
  {
    id: 'educacao',
    title: 'Educação ambiental',
    description:
      'Programas de educação ambiental para equipes operacionais e comunidades, atendendo condicionantes e fortalecendo a continuidade das boas práticas em campo.',
  },
]

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceDetail {
  id: string
  slug: string
  title: string
  subhead: string
  scopeNote?: string
  description: string
  heroImage: string
  ctaText: string
  quandoNecessario: string[]
  comoAtuamos: string[]
  entregaveis: string[]
  setoresAtendidos: string[]
  faq: ServiceFAQ[]
}

export const detailedServices: Record<string, ServiceDetail> = {
  'licenciamento-ambiental': {
    id: 'licenciamento',
    slug: 'licenciamento-ambiental',
    title: 'Licenciamento Ambiental',
    subhead: 'Licença vencida, renovação próxima ou exigência pendente? Avaliamos a situação da sua empresa e os documentos necessários.',
    description:
      'Consultoria para licenciamento, renovação e regularização ambiental de empresas na Bahia. Avaliação de licenças, condicionantes e documentos pendentes.',
    heroImage: '/images/services/hero-licenciamento.jpg',
    ctaText: 'Avaliar o processo de licenciamento',
    quandoNecessario: [
      'Empresa em funcionamento ou obra iniciada com pendência de regularização ambiental.',
      'Licença vencida ou próxima do vencimento, com necessidade de avaliar a renovação.',
      'Ampliação ou modificação de capacidade produtiva e área construída.',
      'Atendimento a notificações e exigências de órgãos como INEMA e IBAMA.',
      'Exigência ambiental relacionada a alvará, financiamento ou continuidade da operação.',
    ],
    comoAtuamos: [
      'Análise prévia de viabilidade ambiental e enquadramento regulatório.',
      'Elaboração de estudos ambientais (EIA, RIMA, RCA, PCA) com equipe multidisciplinar.',
      'Acompanhamento de tramitação administrativa in loco junto aos técnicos do órgão.',
      'Gestão e protocolo contínuo de condicionantes ambientais.',
    ],
    entregaveis: [
      'Estudo de Impacto Ambiental (EIA/RIMA) ou Relatório de Controle Ambiental (RCA).',
      'Plano de Controle Ambiental (PCA) e Programas de Monitoramento.',
      'Comprovantes dos protocolos realizados no processo, conforme o escopo contratado.',
      'Relatórios periódicos de cumprimento de condicionantes.',
    ],
    setoresAtendidos: ['Indústria', 'Construção Civil', 'Logística', 'Infraestrutura', 'Energia'],
    faq: [
      {
        question: 'Qual a diferença entre LP, LI e LO?',
        answer:
          'A Licença Prévia (LP) atesta a viabilidade ambiental do projeto na fase conceitual. A Licença de Instalação (LI) autoriza o início das obras conforme os projetos aprovados. A Licença de Operação (LO) autoriza o funcionamento da atividade após comprovar o cumprimento das condicionantes de instalação.',
      },
      {
        question: 'Quanto tempo leva a emissão de uma licença ambiental?',
        answer:
          'O prazo depende da atividade, dos estudos necessários, da documentação e da análise do órgão responsável. Na avaliação inicial, definimos as etapas do trabalho e as pendências conhecidas. A decisão e o prazo de emissão cabem ao órgão licenciador.',
      },
      {
        question: 'Minha empresa já funciona e tem uma pendência ambiental. Por onde começar?',
        answer:
          'Informe a atividade, o município, a situação da licença e o prazo de qualquer notificação recebida. Com os documentos disponíveis, nossa equipe avalia o enquadramento e o trabalho necessário para conduzir a regularização. A contratação da consultoria não substitui a autorização do órgão competente.',
      },
    ],
  },

  pgrs: {
    id: 'pgrs',
    slug: 'pgrs',
    title: 'Elaboração de PGRS na Bahia',
    subhead: 'PGRS solicitado no licenciamento ou desatualizado? Avaliamos a pendência e elaboramos o plano para sua empresa.',
    scopeNote: 'Atendimento para elaboração e revisão de planos técnicos, incluindo PGRCC para obras. Coleta e transporte de resíduos são contratações separadas.',
    description:
      'Elaboração e atualização de PGRS para empresas e PGRCC para obras na Bahia. Informe a atividade, o município e a exigência para solicitar uma avaliação técnica.',
    heroImage: '/images/services/hero-pgrs.jpg',
    ctaText: 'Solicitar avaliação do PGRS',
    quandoNecessario: [
      'PGRS solicitado em um processo de licenciamento, renovação ou atendimento de condicionante.',
      'Empresa em funcionamento que precisa elaborar ou atualizar o plano.',
      'Obra iniciada com exigência de PGRCC ou necessidade de revisar o plano existente.',
      'Pendência documental apontada em notificação, auditoria ou solicitação de cliente.',
    ],
    comoAtuamos: [
      'Avaliamos a atividade, o município, os documentos disponíveis e a exigência recebida.',
      'Levantamos os resíduos gerados e os procedimentos adotados na empresa ou na obra.',
      'Elaboramos ou revisamos o plano, com definição de procedimentos e responsabilidades.',
      'Entregamos o documento técnico e orientamos a equipe sobre as medidas previstas no plano.',
    ],
    entregaveis: [
      'PGRS ou PGRCC elaborado ou atualizado conforme o escopo contratado.',
      'Caracterização dos resíduos e descrição dos procedimentos previstos no plano.',
      'Orientações para a implantação e registro de pendências identificadas.',
      'Responsabilidade técnica conforme o serviço e as atribuições do profissional habilitado.',
    ],
    setoresAtendidos: ['Indústria', 'Construção Civil', 'Logística'],
    faq: [
      {
        question: 'Este atendimento inclui coleta ou retirada de resíduos?',
        answer:
          'O atendimento desta página é para elaboração ou atualização do Plano de Gerenciamento de Resíduos Sólidos (PGRS) e do PGRCC para obras. Coleta, transporte e destinação são serviços contratados separadamente com prestadores habilitados.',
      },
      {
        question: 'Já tenho um plano. É possível atualizar?',
        answer:
          'Sim. Envie o plano existente, as mudanças na atividade e qualquer exigência recebida. Avaliamos o que precisa ser revisado e apresentamos o escopo antes da contratação.',
      },
      {
        question: 'Quais informações preciso enviar para solicitar uma proposta?',
        answer:
          'Informe a atividade da empresa ou o tipo de obra, o município, se já existe um plano e o prazo informado pelo órgão ou solicitante. Se houver uma notificação ou exigência documental, envie também esse documento à equipe.',
      },
    ],
  },

  'inventario-florestal': {
    id: 'inventario-florestal',
    slug: 'inventario-florestal',
    title: 'Inventário Florestal',
    subhead: 'Mapeamento fitossociológico e volumétrico de vegetação para supressão e compensação',
    description:
      'Realizamos o levantamento quantitativo e qualitativo da vegetação nativa com amostragem estatística rigorosa, embasando pedidos de ASV e projetos de compensação florestal.',
    heroImage: '/images/services/hero-inventario.jpg',
    ctaText: 'Solicitar avaliação técnica',
    quandoNecessario: [
      'Requisito obrigatório para obtenção da Autorização de Supressão Vegetal (ASV).',
      'Dimensionamento de volume de madeira para aproveitamento florestal.',
      'Cálculo de taxa de compensação ambiental e reserva legal.',
      'Diagnóstico de Áreas de Preservação Permanente (APP) e fitofisionomias nativas.',
    ],
    comoAtuamos: [
      'Levantamento de campo com amostragem aleatória e identificação taxonômica por botânicos.',
      'Medição de DAP (Diâmetro à Altura do Peito), altura total e estimativa volumétrica.',
      'Análise estatística de precisão (erro de amostragem < 10%).',
      'Mapeamento georreferenciado e cálculo das áreas de compensação.',
    ],
    entregaveis: [
      'Relatório Técnico de Inventário Florestal com ART.',
      'Tabelas fitossociológicas detalhadas por espécie.',
      'Arquivos GIS (Shapefile / KML) com georreferenciamento.',
      'Plano de Aproveitamento Florestal (quando aplicável).',
    ],
    setoresAtendidos: ['Infraestrutura', 'Construção Civil', 'Energia'],
    faq: [
      {
        question: 'Por que o inventário florestal é necessário antes da obra?',
        answer:
          'Sem o inventário florestal aprovado, o órgão ambiental não emite a ASV. A realização sem autorização constitui crime ambiental grave.',
      },
    ],
  },

  'autorizacao-supressao-vegetal': {
    id: 'autorizacao-supressao-vegetal',
    slug: 'autorizacao-supressao-vegetal',
    title: 'ASV - Autorização de Supressão Vegetal',
    subhead: 'Exigência de ASV para sua obra? Avaliamos a área, os documentos e as pendências do processo.',
    scopeNote: 'A emissão da autorização e o prazo de análise dependem do órgão competente. O escopo da consultoria é definido após a avaliação técnica.',
    description:
      'Assessoria técnica para pedidos de ASV e atendimento de exigências ambientais na Bahia. Informe a área, o município, a etapa da obra e o prazo recebido.',
    heroImage: '/images/services/hero-asv.jpg',
    ctaText: 'Verificar documentação necessária',
    quandoNecessario: [
      'Abertura de estradas, linhas de transmissão ou canteiros de obra em vegetação nativa.',
      'Implantação de loteamentos, galpões e plantas industriais.',
      'Aproveitamento de madeira nativa para uso comercial ou interno.',
    ],
    comoAtuamos: [
      'Submissão do Inventário Florestal e Plano de Supressão Vegetal.',
      'Coordenação de vistoria técnica do órgão regulador.',
      'Acompanhamento técnico durante a supressão autorizada, conforme os limites definidos e o escopo contratado.',
    ],
    entregaveis: [
      'Documentação técnica e comprovantes dos protocolos realizados, conforme o escopo contratado.',
      'Relatórios de acompanhamento técnico previstos no serviço contratado.',
      'Orientações sobre registros de destinação do material vegetal, quando aplicáveis.',
    ],
    setoresAtendidos: ['Infraestrutura', 'Construção Civil', 'Energia', 'Logística'],
    faq: [
      {
        question: 'Qual a validade de uma ASV?',
        answer:
          'A validade e as condições constam da autorização emitida. Para avaliar o vencimento ou a necessidade de prorrogação, envie o documento e o cronograma atualizado à nossa equipe.',
      },
    ],
  },

  'resgate-fauna-flora': {
    id: 'resgate-fauna-flora',
    slug: 'resgate-fauna-flora',
    title: 'Resgate e Monitoramento de Fauna e Flora',
    subhead: 'Presença técnica em campo durante a supressão vegetal para salvamento biológico',
    description:
      'Executamos os programas de resgate, afugentamento e monitoramento de fauna e germoplasma vegetal durante a supressão de vegetação, atendendo 100% das condicionantes da ASV.',
    heroImage: '/images/services/hero-fauna-flora.jpg',
    ctaText: 'Falar com a equipe técnica',
    quandoNecessario: [
      'Execução de supressão vegetal autorizada por ASV.',
      'Cumprimento de condicionantes ambientais da Licença de Instalação (LI).',
      'Monitoramento de mastofauna, avifauna e herpetofauna em áreas impactadas.',
    ],
    comoAtuamos: [
      'Mobilização de biólogos e veterinários especializados em campo.',
      'Afugentamento prévio e resgate ativo de animais silvestres.',
      'Coleta de sementes, mudas e epífitas para transplante e hortos florestais.',
      'Destinação ética e soltura de animais em áreas de soltura cadastradas.',
    ],
    entregaveis: [
      'Relatórios de Execução do Programa de Resgate de Fauna e Flora com ART.',
      'Fichas de resgate e registros fotográficos detalhados.',
      'Comprovantes de entrega de espécimes a centros de reabilitação/soltura.',
    ],
    setoresAtendidos: ['Infraestrutura', 'Energia', 'Construção Civil'],
    faq: [
      {
        question: 'É necessário biólogo presente durante toda a supressão?',
        answer:
          'Sim, a presença do responsável técnico durante o corte da vegetação é exigência expressa do órgão ambiental para prevenir a mortalidade da fauna silvestre.',
      },
    ],
  },
}
