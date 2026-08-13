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
    title: 'PGRS e resíduos',
    description:
      'Plano de Gerenciamento de Resíduos Sólidos com rastreabilidade detalhada, protocolos de movimentação e destinação adequada, do canteiro de obras à operação industrial.',
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
    subhead: 'Condução integral das etapas de LP, LI e LO junto aos órgãos reguladores',
    description:
      'Coordenamos processos completos de Licenciamento Ambiental Prévia (LP), de Instalação (LI) e de Operação (LO) perante IBAMA, INEMA e órgãos municipais, reduzindo prazos e garantindo segurança jurídica.',
    heroImage: '/images/portfolio/patio-logistico@2x.jpg',
    ctaText: 'Avaliar o processo de licenciamento',
    quandoNecessario: [
      'Implantação de novos empreendimentos industriais, logísticos ou habitacionais.',
      'Ampliação ou modificação de capacidade produtiva e área construída.',
      'Renovação periódica da Licença de Operação (LO) ou regularização ambiental.',
      'Atendimento a notificações e exigências de órgãos como INEMA e IBAMA.',
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
      'Protocolos formais de emissão de LP, LI e LO.',
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
          'O prazo varia de acordo com o enquadramento do empreendimento e a complexidade do órgão (ex: INEMA/IBAMA). Processos simplificados levam de 60 a 90 dias, enquanto estudos complexos (EIA/RIMA) demandam de 6 a 12 meses.',
      },
      {
        question: 'O que acontece se a operação funcionar sem Licença de Operação (LO)?',
        answer:
          'Operar sem LO válida é infração administrativa gravíssima sujeita a multas diárias, embargo imediato da atividade e responsabilização civil e criminal dos administradores.',
      },
    ],
  },

  pgrs: {
    id: 'pgrs',
    slug: 'pgrs',
    title: 'PGRS - Plano de Gerenciamento de Resíduos Sólidos',
    subhead: 'Gestão, classificação e rastreabilidade total de resíduos da obra à operação',
    description:
      'Desenvolvemos e implantamos o PGRS de acordo com a Política Nacional de Resíduos Sólidos (Lei 12.305/2010), assegurando destinação correta, redução de custos e rastreabilidade total.',
    heroImage: '/images/portfolio/galpao-industrial@2x.jpg',
    ctaText: 'Solicitar análise do empreendimento',
    quandoNecessario: [
      'Empreendimentos geradores de resíduos industriais, de saúde ou da construção civil (PGRCC).',
      'Condicionante obrigatória para emissão ou renovação de Licença de Operação.',
      'Regularização perante a vigilância sanitária e secretarias municipais de meio ambiente.',
      'Auditorias ambientais de clientes, investidores e certificações ISO 14001.',
    ],
    comoAtuamos: [
      'Inventário quantitativo e qualitativo de resíduos gerados na fonte.',
      'Mapeamento dos fluxos internos de segregação, acondicionamento e armazenamento temporário.',
      'Homologação e auditoria técnica de prestadores de transporte e destinação final.',
      'Treinamento das equipes operacionais e elaboração dos MTRs (Manifesto de Transporte de Resíduos).',
    ],
    entregaveis: [
      'Documento técnico do PGRS com ART registrada no CREA.',
      'Manual prático de segregação de resíduos para canteiro/planta.',
      'Relatório de Rastreabilidade e MTRs validados.',
      'Declaração de Movimentação de Resíduos para o órgão ambiental.',
    ],
    setoresAtendidos: ['Indústria', 'Construção Civil', 'Logística'],
    faq: [
      {
        question: 'Quem é obrigado a ter o PGRS?',
        answer:
          'Todas as indústrias, geradores de resíduos de construção civil, mineradoras, serviços de saúde, e estabelecimentos comerciais que gerem resíduos perigosos ou volumosos.',
      },
      {
        question: 'Qual a frequência de atualização do PGRS?',
        answer:
          'O PGRS deve ser revisado anualmente ou sempre que houver alteração significativa nos processos produtivos ou no volume de resíduos gerados.',
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
    heroImage: '/images/portfolio/reflorestamento@2x.jpg',
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
    subhead: 'Aprovação legal para limpeza de terreno e manejo florestal em canteiros de obras',
    description:
      'Conduzimos todo o processo de aprovação da ASV perante INEMA e órgãos licenciadores, garantindo a liberação das frentes de obra com acompanhamento técnico contínuo.',
    heroImage: '/images/portfolio/trecho-rodoviario@2x.jpg',
    ctaText: 'Verificar documentação necessária',
    quandoNecessario: [
      'Abertura de estradas, linhas de transmissão ou canteiros de obra em vegetação nativa.',
      'Implantação de loteamentos, galpões e plantas industriais.',
      'Aproveitamento de madeira nativa para uso comercial ou interno.',
    ],
    comoAtuamos: [
      'Submissão do Inventário Florestal e Plano de Supressão Vegetal.',
      'Coordenação de vistoria técnica do órgão regulador.',
      'Acompanhamento in loco durante a supressão para garantia de limites georreferenciados.',
    ],
    entregaveis: [
      'Portaria de concessão da ASV emitida pelo órgão.',
      'Relatórios de acompanhamento da supressão.',
      'Comprovantes de destinação do material vegetal.',
    ],
    setoresAtendidos: ['Infraestrutura', 'Construção Civil', 'Energia', 'Logística'],
    faq: [
      {
        question: 'Qual a validade de uma ASV?',
        answer:
          'Geralmente o prazo da ASV é vinculado ao cronograma de instalação da obra (LI), podendo variar de 1 a 3 anos com possibilidade de prorrogação mediante justificativa técnica.',
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
    heroImage: '/images/portfolio/reflorestamento.jpg',
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
