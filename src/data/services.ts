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
