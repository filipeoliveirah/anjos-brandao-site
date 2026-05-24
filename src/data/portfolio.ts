export interface PortfolioItem {
  id: string
  title: string
  category: string
  thumb: string
  thumb2x: string
  gallery: string
  width: number
  height: number
  caption: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'patio-logistico',
    title: 'Pátio logístico petroquímico',
    category: 'Indústria · Camaçari · BA',
    thumb: '/images/portfolio/patio-logistico.jpg',
    thumb2x: '/images/portfolio/patio-logistico@2x.jpg',
    gallery: '/images/portfolio/gallery/g-patio-logistico.jpg',
    width: 1600,
    height: 1067,
    caption:
      'Coordenação ambiental na implantação de pátio para movimentação de cargas químicas, gestão de LO, PGRS e protocolos de movimentação. 18.400 m².',
  },
  {
    id: 'trecho-rodoviario',
    title: 'Trecho rodoviário · 18 km',
    category: 'Infraestrutura · Recôncavo · BA',
    thumb: '/images/portfolio/trecho-rodoviario.jpg',
    thumb2x: '/images/portfolio/trecho-rodoviario@2x.jpg',
    gallery: '/images/portfolio/gallery/g-trecho-rodoviario.jpg',
    width: 1600,
    height: 1067,
    caption:
      'EIA conduzido em paralelo ao projeto executivo; ajuste de traçado reduziu a área de supressão em 23%. Supressão 34 ha · compensação 68 ha.',
  },
  {
    id: 'reflorestamento',
    title: 'Reflorestamento compensatório',
    category: 'Compensação · Mata de São João · BA',
    thumb: '/images/portfolio/reflorestamento.jpg',
    thumb2x: '/images/portfolio/reflorestamento@2x.jpg',
    gallery: '/images/portfolio/gallery/g-reflorestamento.jpg',
    width: 1600,
    height: 1067,
    caption:
      '92 ha, 38.500 mudas de 42 espécies nativas e três campanhas de monitoramento, taxa de pegamento de 91,4% ao fim do segundo ano.',
  },
  {
    id: 'galpao-industrial',
    title: 'Galpão industrial · 24.000 m²',
    category: 'Logística · Simões Filho · BA',
    thumb: '/images/portfolio/galpao-industrial.jpg',
    thumb2x: '/images/portfolio/galpao-industrial@2x.jpg',
    gallery: '/images/portfolio/gallery/g-galpao-industrial.jpg',
    width: 1600,
    height: 1067,
    caption:
      'Gestão de LO em regime contínuo desde 2024: auditorias trimestrais, PGRS, condicionantes e adequação para ampliação sem interromper a operação.',
  },
  {
    id: 'loteamento',
    title: 'Loteamento residencial · 1.200 lotes',
    category: 'Construção civil · Lauro de Freitas · BA',
    thumb: '/images/portfolio/loteamento.jpg',
    thumb2x: '/images/portfolio/loteamento@2x.jpg',
    gallery: '/images/portfolio/gallery/g-loteamento.jpg',
    width: 1600,
    height: 1067,
    caption:
      'Licenciamento integral integrado ao cronograma de entrega, LP, LI e LO, gestão de resíduos e protocolo de educação ambiental aos moradores.',
  },
  {
    id: 'subestacao',
    title: 'Subestação elétrica · 230 kV',
    category: 'Energia · Alagoinhas · BA',
    thumb: '/images/portfolio/subestacao.jpg',
    thumb2x: '/images/portfolio/subestacao@2x.jpg',
    gallery: '/images/portfolio/gallery/g-subestacao.jpg',
    width: 1600,
    height: 1067,
    caption:
      'Licenciamento integral em três fases ao longo de 14 meses, coordenação junto a INEMA e ANEEL e monitoramento de condicionantes por cinco anos.',
  },
]
