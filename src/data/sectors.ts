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
    timeframe: 'LP · LI · LO · PGRCC',
    description:
      'Licenciamento ambiental, elaboração de PGRCC e acompanhamento de condicionantes para obras em implantação ou já iniciadas.',
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
      'Renovação de Licença de Operação, elaboração e atualização de PGRS e atendimento a condicionantes e pendências documentais da indústria.',
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
