export interface Sector {
  id: string
  title: string
  subtitle: string
  timeframe: string
  description: string
}

export const sectors: Sector[] = [
  {
    id: 'construcao-civil',
    title: 'Construção civil',
    subtitle: 'Loteamentos · edificações · urbanização',
    timeframe: 'LP · LI · LO · PGRS',
    description:
      'Licenciamento integral integrado ao cronograma de obra e comercialização, com gestão de resíduos de construção e acompanhamento de condicionantes até a entrega.',
  },
  {
    id: 'infraestrutura',
    title: 'Infraestrutura',
    subtitle: 'Rodovias · adutoras · transmissão',
    timeframe: 'EIA · RIMA · supressão',
    description:
      'Estudos ambientais conduzidos em paralelo ao projeto executivo, ajustando traçado, reduzindo áreas de supressão e coordenando compensação monitorada.',
  },
  {
    id: 'industria',
    title: 'Indústria',
    subtitle: 'Plantas · pátios · logística',
    timeframe: 'LO · PGRS · auditorias',
    description:
      'Gestão de Licença de Operação em regime contínuo, com auditorias periódicas, protocolos de movimentação e rastreabilidade detalhada de resíduos.',
  },
  {
    id: 'energia',
    title: 'Energia',
    subtitle: 'Subestações · linhas · geração',
    timeframe: 'INEMA · ANEEL',
    description:
      'Licenciamento em fases (LP→LI→LO) integrado à engenharia eletromecânica, com monitoramento de condicionantes mantido em regime pós-obra.',
  },
]
