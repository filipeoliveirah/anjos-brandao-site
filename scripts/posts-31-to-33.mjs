import { p, h2, h3, bullet, callout, pLink, DEFAULT_AUTHOR } from './enrich-helpers.mjs'

// ==========================================
// ARTIGO 31: CEFIR e CAR na Bahia
// ==========================================
export const POST_31 = {
  _id: 'post-31',
  title: 'CEFIR e CAR na Bahia: o Cadastro do Imóvel Rural é Condição para a ASV, o Crédito Rural e a Regularização',
  slug: 'cefir-car-bahia-imovel-rural-asv-reserva-legal',
  excerpt: 'O INEMA só autoriza supressão de vegetação, e o banco só libera crédito rural, para imóvel inscrito no CEFIR. Veja o que o cadastro exige na Bahia.',
  publishedAt: '2026-11-10T10:00:00Z',
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: '/images/blog/post-31-cefir-car-imovel-rural-bahia.webp',
  mainImageAlt: 'Vista aérea de imóvel rural na Bahia com área de cultivo, remanescente de vegetação nativa e mata ciliar ao longo de um curso d\'água',
  mainImageCaption: 'Imóvel rural com Reserva Legal e Área de Preservação Permanente delimitadas, informações que precisam constar no CEFIR.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [2, 0], // Inventário & ASV, Licenciamento Ambiental
  body: [
    pLink([
      { text: 'O ' },
      { text: 'CAR na Bahia', strong: true },
      { text: ' é feito pelo CEFIR, o Cadastro Estadual Florestal de Imóveis Rurais, e a inscrição regular é condição legal para três atos que produtores rurais, loteadores e empreendedores de energia e mineração precisam com frequência: a Autorização de Supressão de Vegetação (ASV), o acesso ao crédito rural e a regularização de passivos de Reserva Legal e de Área de Preservação Permanente. O cadastro é declaratório, mas as informações declaradas são cruzadas pelo INEMA com imagens de satélite, com o cadastro de outros imóveis e com os limites de unidades de conservação. Um CEFIR com erro de perímetro ou sem Reserva Legal delimitada costuma aparecer justamente quando o empreendedor pede a ' },
      { text: 'Autorização de Supressão de Vegetação', link: '/blog/inventario-florestal-asv-supressao-vegetal-segura' },
      { text: ', e o pedido fica parado até a correção.' },
    ]),
    pLink([
      { text: 'A base legal é o art. 29 da Lei nº 12.651/2012, o Código Florestal, que criou o Cadastro Ambiental Rural como registro público eletrônico obrigatório para todos os imóveis rurais, e o Decreto federal nº 7.830/2012, que instituiu o SICAR. Na Bahia, a Lei Estadual nº 10.431/2006 e o Decreto Estadual nº 15.180/2014 disciplinam a gestão das florestas, o CEFIR e o Programa de Regularização Ambiental (PRA). O CEFIR é preenchido no SEIA, o sistema estadual de informações ambientais, e os dados são enviados ao SICAR, o que dá ao imóvel o número do CAR federal.' },
    ]),
    callout('info', 'O que o CEFIR registra', 'Perímetro georreferenciado do imóvel, Áreas de Preservação Permanente, Reserva Legal proposta ou averbada, remanescentes de vegetação nativa, áreas de uso restrito, áreas rurais consolidadas até 22 de julho de 2008, servidões administrativas e a situação de cada passivo ambiental. O responsável pelas informações é o proprietário ou possuidor, mesmo quando o cadastro é feito por um técnico contratado.'),
    h2('Por que o CAR na Bahia Condiciona a ASV'),
    pLink([
      { text: 'O art. 26 do Código Florestal estabelece que a supressão de vegetação nativa para uso alternativo do solo depende do cadastramento do imóvel no CAR e de autorização prévia do órgão estadual. Na prática, o pedido de ASV no INEMA começa pela conferência do CEFIR: o técnico verifica se a área a suprimir está fora de APP, se a Reserva Legal do imóvel está delimitada e preservada, e se não há sobreposição com outro imóvel, terra indígena, território quilombola ou unidade de conservação. Qualquer inconsistência gera exigência antes da análise do ' },
      { text: 'inventário florestal', link: '/blog/inventario-florestal-continuo-manejo-reducao-custos' },
      { text: ' e do plano de supressão.' },
    ]),
    pLink([
      { text: 'Também não se autoriza nova supressão em imóvel com área abandonada ou com desmatamento irregular posterior a 22 de julho de 2008 sem que o passivo seja tratado antes, conforme o art. 28 do Código Florestal. Por isso, o diagnóstico do CEFIR deve preceder o cronograma de obra: um parque solar, uma linha de transmissão ou um loteamento que dependa de ASV em imóvel arrendado herda os problemas do cadastro do proprietário da terra.' },
    ]),
    p('As inconsistências que mais travam pedidos de ASV na Bahia são recorrentes e podem ser identificadas antes do protocolo:'),
    bullet('Perímetro desenhado sobre imagem desatualizada ou sem georreferenciamento compatível com a matrícula e com o SIGEF do INCRA.'),
    bullet('Sobreposição com imóveis vizinhos, gerada quando cada confrontante cadastra a divisa por conta própria.'),
    bullet('Reserva Legal declarada sobre área sem vegetação nativa, ou sobre APP sem atender às condições do art. 15 do Código Florestal.'),
    bullet('APP de nascentes, olhos d\'água e cursos d\'água intermitentes não delimitada, comum no semiárido baiano.'),
    bullet('Área consolidada declarada sem prova de uso anterior a 22 de julho de 2008, como imagens históricas ou documentos de produção.'),
    h2('Reserva Legal: Percentual, Localização e Compensação'),
    pLink([
      { text: 'Todo imóvel rural na Bahia deve manter ' },
      { text: 'Reserva Legal de 20% da área', strong: true },
      { text: ', porque o estado está fora da Amazônia Legal, nos termos do art. 12 do Código Florestal. A localização é proposta pelo proprietário no CEFIR e aprovada pelo INEMA, considerando o plano de bacia hidrográfica, o zoneamento ecológico econômico, a formação de corredores ecológicos com outras reservas e áreas protegidas, e as áreas de maior importância para a biodiversidade, conforme o art. 14. Em regiões de Caatinga e Cerrado do oeste baiano, a escolha da área tem impacto direto no valor produtivo do imóvel, e uma proposta mal fundamentada costuma ser alterada pelo órgão.' },
    ]),
    pLink([
      { text: 'O imóvel que tinha déficit de Reserva Legal em 22 de julho de 2008 pode regularizar por recomposição, por regeneração natural ou por compensação, como prevê o art. 66. A compensação pode ser feita com Cota de Reserva Ambiental, arrendamento de área sob servidão ambiental, doação ao poder público de área em unidade de conservação pendente de regularização fundiária, ou cadastro de outra área equivalente no mesmo bioma. O detalhamento desses instrumentos, incluindo o Termo de Compromisso de Recuperação Ambiental, está no artigo sobre ' },
      { text: 'compensação de Reserva Legal e TCRA', link: '/blog/compensacao-ambiental-inema-reserva-legal-tcra' },
      { text: '.' },
    ]),
    h2('Áreas Consolidadas e o Marco de 22 de Julho de 2008'),
    pLink([
      { text: 'O Código Florestal permite a continuidade de atividades agrossilvipastoris, de ecoturismo e de turismo rural em ' },
      { text: 'áreas rurais consolidadas', strong: true },
      { text: ' em APP, desde que a ocupação seja anterior a 22 de julho de 2008 e que o imóvel recomponha faixas mínimas de vegetação. O art. 61-A fixa essas faixas ao longo de cursos d\'água pelo tamanho do imóvel em módulos fiscais: 5 metros para imóveis de até 1 módulo, 8 metros de 1 a 2 módulos, 15 metros de 2 a 4 módulos, e faixas maiores, definidas no PRA, para imóveis acima de 4 módulos. O tamanho do módulo fiscal é fixado pelo INCRA para cada município, e o enquadramento errado altera a obrigação de recomposição.' },
    ]),
    pLink([
      { text: 'A adesão ao PRA, prevista no art. 59, permite assinar termo de compromisso com o INEMA para recompor APP e Reserva Legal em prazo definido. Enquanto o termo é cumprido, o proprietário não pode ser autuado por infrações cometidas antes de 22 de julho de 2008 relativas à supressão irregular nessas áreas, e as multas já aplicadas podem ser convertidas em serviços de recuperação. As regras de prazo para adesão foram alteradas pela Lei nº 13.887/2019 e pela Lei nº 14.595/2023, e a situação de cada imóvel deve ser conferida antes de assumir qualquer compromisso.' },
    ]),
    callout('alert', 'Cadastro inscrito não é cadastro aprovado', 'O recibo de inscrição comprova apenas que o imóvel foi declarado. A situação ativa, pendente ou cancelada depende da análise do órgão, e informação falsa ou omissa no cadastro é infração prevista no art. 82 do Decreto nº 6.514/2008 e crime previsto no art. 69-A da Lei nº 9.605/1998. Retificar o CEFIR antes da análise custa menos do que responder a uma notificação depois dela.'),
    h2('Crédito Rural, Compra e Venda e Arrendamento'),
    pLink([
      { text: 'O art. 78-A do Código Florestal proíbe as instituições financeiras de conceder crédito agrícola, em qualquer modalidade, a proprietários de imóveis rurais que não estejam inscritos no CAR. Bancos públicos e cooperativas de crédito consultam a situação do cadastro na análise da proposta, e um CEFIR com sobreposição a área embargada ou a unidade de conservação pode bloquear o financiamento da safra.' },
    ]),
    pLink([
      { text: 'Na compra de terra, o art. 2º, § 2º, do Código Florestal define que as obrigações de recompor APP e Reserva Legal têm natureza real e passam ao novo proprietário. Quem compra o imóvel compra também o passivo florestal, por isso a análise do CEFIR, do histórico de imagens e de eventuais autos de infração deve fazer parte da ' },
      { text: 'investigação ambiental na compra de terrenos', link: '/blog/due-diligence-ambiental-compra-terrenos-loteamentos' },
      { text: '. No arrendamento para ' },
      { text: 'parques solares e eólicos', link: '/blog/licenciamento-ambiental-energia-solar-eolica-bahia' },
      { text: ', o contrato deve atribuir ao proprietário o dever de manter o cadastro regular e prever o que acontece se a Reserva Legal precisar ser relocada para viabilizar o projeto.' },
    ]),
    h2('Como Organizar a Regularização do Imóvel'),
    bullet('Levantar matrícula, georreferenciamento certificado no SIGEF e recibos de CEFIR ou CAR anteriores, inclusive de imóveis desmembrados.'),
    bullet('Comparar o perímetro declarado com imagens históricas, para identificar uso consolidado anterior a 2008 e supressões posteriores.'),
    bullet('Delimitar APP, Reserva Legal e remanescentes em campo, com vistoria técnica e registro fotográfico georreferenciado.'),
    bullet('Retificar o cadastro, propor a localização da Reserva Legal e, quando houver déficit, escolher entre recompor, regenerar ou compensar.'),
    bullet('Só então protocolar ASV, licença ou adesão ao PRA, com o cadastro coerente com os estudos apresentados.'),
    h3('O que a Anjos Brandão faz pelo seu imóvel rural'),
    pLink([
      { text: 'Nossa equipe faz o diagnóstico do CAR na Bahia pelo CEFIR, a vistoria de campo, a retificação do cadastro e a proposta de Reserva Legal, e conduz o pedido de ASV ou a adesão ao PRA no INEMA. Se o seu projeto depende de supressão de vegetação ou de crédito rural, ' },
      { text: 'fale com a equipe técnica da Anjos Brandão', link: '/#contato' },
      { text: ' antes de protocolar e evite que o cadastro trave o cronograma.' },
    ]),
  ],
  seo: {
    metaTitle: 'CEFIR e CAR na Bahia: Condição para ASV e Crédito Rural',
    metaDescription: 'O INEMA só autoriza supressão, e o banco só libera crédito rural, para imóvel inscrito no CEFIR. Entenda Reserva Legal, APP, PRA e retificação.',
    keywords: [
      'car na bahia',
      'cefir inema',
      'cadastro ambiental rural bahia',
      'reserva legal bahia',
      'asv e car',
      'programa de regularização ambiental bahia',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 32: Lançamento de Efluentes, CONAMA 430/2011
// ==========================================
export const POST_32 = {
  _id: 'post-32',
  title: 'Lançamento de Efluentes na Bahia: Padrões da CONAMA 430/2011, Outorga de Diluição e Automonitoramento',
  slug: 'lancamento-efluentes-conama-430-outorga-inema-bahia',
  excerpt: 'Todo lançamento de efluente em rio, mar ou rede pública tem padrão, licença e monitoramento obrigatórios. Veja o que a CONAMA 430/2011 e o INEMA exigem.',
  publishedAt: '2026-11-10T10:00:00Z',
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: '/images/blog/post-32-lancamento-efluentes-conama-430-bahia.webp',
  mainImageAlt: 'Estação de tratamento de efluentes industriais com tanques de aeração e decantador vistos do alto, em área industrial na Bahia',
  mainImageCaption: 'Estação de tratamento de efluentes industriais, sujeita aos padrões de lançamento da Resolução CONAMA nº 430/2011.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0, 1], // Licenciamento Ambiental, PGRS & Resíduos
  body: [
    pLink([
      { text: 'O ' },
      { text: 'lançamento de efluentes', strong: true },
      { text: ' de indústrias, frigoríficos, laticínios, hospitais, condomínios, lavanderias e canteiros de obra só é permitido quando atende aos padrões da Resolução CONAMA nº 430/2011, às condições da licença ambiental e, no caso de despejo direto em rio, à outorga de direito de uso de recursos hídricos. São três obrigações distintas, analisadas por setores diferentes do INEMA, e a falta de qualquer uma delas basta para uma autuação. Na fiscalização, o efluente é a evidência mais fácil de coletar: uma amostra no ponto de lançamento, analisada em laboratório, mostra se a empresa cumpre ou não o que declarou.' },
    ]),
    pLink([
      { text: 'A base legal combina a Resolução CONAMA nº 357/2005, que classifica os corpos d\'água e fixa os padrões de qualidade de cada classe, e a Resolução CONAMA nº 430/2011, que complementa a anterior e define as condições e os padrões de lançamento. A Lei nº 9.433/1997 inclui o lançamento de efluentes entre os usos sujeitos a outorga, e a Lei Estadual nº 11.612/2009 organiza a Política Estadual de Recursos Hídricos da Bahia. A Lei Estadual nº 10.431/2006 vincula o sistema de tratamento ao licenciamento no INEMA.' },
    ]),
    callout('info', 'Padrões gerais de lançamento da CONAMA 430/2011', 'pH entre 5 e 9; temperatura inferior a 40 °C; materiais sedimentáveis até 1 mL/L em teste de uma hora no cone Imhoff; vazão máxima de até 1,5 vez a vazão média do período diário de atividade; óleos minerais até 20 mg/L; óleos vegetais e gorduras animais até 50 mg/L; ausência de materiais flutuantes; e remoção mínima de 60% da DBO, além dos limites de metais e compostos orgânicos listados na própria resolução.'),
    h2('Padrão de Lançamento e Padrão do Corpo Receptor'),
    pLink([
      { text: 'Atender aos limites da tabela da CONAMA 430/2011 não encerra a obrigação. O efluente também não pode fazer o rio, o estuário ou o mar ultrapassar os padrões de qualidade da classe em que o corpo d\'água está enquadrado pela CONAMA 357/2005. Um efluente dentro do padrão de lançamento pode ser recusado se o rio receptor tiver pouca vazão no período seco, situação comum em bacias do semiárido baiano. Por isso o INEMA pode exigir estudo de autodepuração e de zona de mistura, e fixar na licença limites mais restritivos do que os da resolução federal.' },
    ]),
    pLink([
      { text: 'A resolução também exige que o efluente não cause efeito tóxico aos organismos aquáticos do corpo receptor, com critérios de ecotoxicidade definidos pelo órgão ambiental. Para indústrias químicas, petroquímicas e de celulose do Polo de Camaçari e do Recôncavo, os ensaios de toxicidade aguda e crônica costumam constar como condicionante específica da Licença de Operação.' },
    ]),
    h2('Esgoto Sanitário, Rede Pública e Fossas'),
    pLink([
      { text: 'Para efluentes de sistemas de tratamento de esgoto sanitário, a CONAMA 430/2011 fixa padrões próprios: pH entre 5 e 9, temperatura inferior a 40 °C, DBO máxima de 120 mg/L, que só pode ser ultrapassada quando o sistema comprova remoção mínima de 60%, substâncias solúveis em hexano até 100 mg/L e ausência de materiais flutuantes. Condomínios, hotéis, shoppings e canteiros fora de área atendida por rede precisam operar a estação dentro desses limites.' },
    ]),
    pLink([
      { text: 'Quando o efluente vai para a rede coletora, o lançamento é indireto e as regras passam a ser as da concessionária, a Embasa na maior parte do estado, com parâmetros de recebimento orientados pela ABNT NBR 9800. Efluente industrial com óleo, metais ou carga orgânica alta precisa de pré-tratamento antes da rede. Em áreas sem rede, o sistema com tanque séptico e unidade complementar deve seguir a ABNT NBR 7229 e a ABNT NBR 13969, com dimensionamento, distância de poços e manutenção documentados.' },
    ]),
    h2('Outorga de Lançamento no INEMA'),
    pLink([
      { text: 'O art. 12, inciso III, da Lei nº 9.433/1997 sujeita à outorga o lançamento em corpo d\'água de esgotos e demais resíduos líquidos com fim de diluição, transporte ou disposição final. A outorga de lançamento é calculada pela vazão de diluição: o volume do rio necessário para que a carga do efluente seja absorvida sem violar a classe. Em bacias com muitos usuários, a disponibilidade para diluição pode estar esgotada, e o projeto precisa de tratamento mais eficiente, reúso ou outro ponto de lançamento. O processo de outorga, os prazos e a relação com a captação estão no artigo sobre ' },
      { text: 'outorga de recursos hídricos no INEMA', link: '/blog/outorga-recursos-hidricos-inema-bahia-captacao' },
      { text: '.' },
    ]),
    h2('Automonitoramento e Declaração de Carga Poluidora'),
    pLink([
      { text: 'A ' },
      { text: 'Licença de Operação', strong: true },
      { text: ' de uma atividade com efluente define o ponto de coleta, os parâmetros, a frequência das análises e a forma de envio dos resultados ao INEMA. O automonitoramento precisa ser feito por laboratório com acreditação na ABNT NBR ISO/IEC 17025 para os parâmetros analisados, com cadeia de custódia das amostras. Resultados fora do padrão que não são comunicados, ou relatórios entregues fora do prazo, aparecem na ' },
      { text: 'renovação da Licença de Operação', link: '/blog/renovacao-licenca-operacao-lo-prazos-documentos-inema' },
      { text: ' como descumprimento de condicionante.' },
    ]),
    pLink([
      { text: 'A Resolução CONAMA nº 357/2005, em seu art. 46, exige que o responsável por fonte poluidora de recursos hídricos apresente ao órgão ambiental, até 31 de março de cada ano, a declaração de carga poluidora referente ao ano anterior, com a caracterização qualitativa e quantitativa do efluente. Os dados devem ser coerentes com o automonitoramento, com o ' },
      { text: 'Relatório Anual de Atividades do IBAMA', link: '/blog/tcfa-ctf-rapp-ibama-obrigacoes-federais-bahia' },
      { text: ' e com o inventário de resíduos, porque o lodo da estação de tratamento é resíduo sólido e segue o ' },
      { text: 'Plano de Gerenciamento de Resíduos Sólidos', link: '/blog/economia-circular-pgrs-industria-pesada-quimica' },
      { text: '.' },
    ]),
    bullet('Ponto de coleta identificado, com caixa de inspeção acessível antes do lançamento e medidor de vazão aferido.'),
    bullet('Plano de amostragem com parâmetros e frequência da licença, assinado por responsável técnico.'),
    bullet('Laudos de laboratório acreditado, guardados pelo prazo de validade da licença e enviados no SEIA conforme a condicionante.'),
    bullet('Registro de manutenção da estação e de destinação do lodo, com Manifesto de Transporte de Resíduos quando aplicável.'),
    bullet('Plano de ação para resultado fora do padrão, com comunicação ao INEMA e medida corretiva documentada.'),
    callout('alert', 'Lançamento fora do padrão é infração e pode ser crime', 'O Decreto nº 6.514/2008, arts. 61 e 62, prevê multa de R$ 5.000,00 a R$ 50.000.000,00 para poluição e para lançamento de resíduos líquidos em desacordo com as exigências legais. O art. 54, § 2º, inciso V, da Lei nº 9.605/1998 tipifica como crime a poluição causada por lançamento em desacordo com leis ou regulamentos, com pena de reclusão de 1 a 5 anos, e a responsabilidade alcança a empresa e os gestores que deram causa.'),
    h2('Obras e Atividades Temporárias'),
    pLink([
      { text: 'Canteiros de obra geram efluente sanitário, água de lavagem de betoneiras e caminhões, drenagem com sedimentos e, em obras de infraestrutura, água de rebaixamento de lençol. Cada fluxo precisa de destino definido na Licença de Instalação: banheiros químicos com destinação comprovada, bacias de decantação para lavagem de betoneira com reúso da água, e controle de sedimentos antes da drenagem natural. O carreamento de solo para rios e mangues é uma das autuações mais frequentes em obras na Região Metropolitana de Salvador, e a ' },
      { text: 'gestão de resíduos no canteiro', link: '/blog/pgrs-construcao-civil-reducao-custos-conformidade' },
      { text: ' deve tratar efluentes e sólidos no mesmo plano.' },
    ]),
    h3('O que a Anjos Brandão faz pelos seus efluentes'),
    pLink([
      { text: 'Fazemos o diagnóstico dos fluxos de efluente, o enquadramento do corpo receptor, o pedido de outorga de lançamento, o plano de automonitoramento e a gestão das condicionantes junto ao INEMA. Se a sua licença tem exigência de efluente ou se a renovação está próxima, ' },
      { text: 'fale com a equipe técnica da Anjos Brandão', link: '/#contato' },
      { text: ' e revise o sistema antes da próxima fiscalização.' },
    ]),
  ],
  seo: {
    metaTitle: 'Efluentes na Bahia: CONAMA 430/2011, Outorga e Monitoramento',
    metaDescription: 'Padrões de lançamento da CONAMA 430/2011, outorga de diluição no INEMA, automonitoramento e declaração de carga poluidora para empresas na Bahia.',
    keywords: [
      'lançamento de efluentes',
      'conama 430/2011',
      'outorga de lançamento de efluentes bahia',
      'automonitoramento de efluentes',
      'declaração de carga poluidora',
      'tratamento de efluentes industriais bahia',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 33: Inventário de GEE, SBCE e CVM 193
// ==========================================
export const POST_33 = {
  _id: 'post-33',
  title: 'Inventário de Gases de Efeito Estufa: o que a Lei 15.042/2024 e a Resolução CVM 193 Exigem das Empresas na Bahia',
  slug: 'inventario-gases-efeito-estufa-sbce-lei-15042-cvm-193-bahia',
  excerpt: 'A Lei 15.042/2024 obriga quem emite mais de 10 mil tCO2e por ano a monitorar e relatar emissões. Veja as obrigações e o impacto em fornecedores na Bahia.',
  publishedAt: '2026-11-10T10:00:00Z',
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: '/images/blog/post-33-inventario-gee-sbce-bahia.webp',
  mainImageAlt: 'Complexo industrial com chaminés e unidades de processo vistas ao entardecer, em polo industrial na Bahia',
  mainImageCaption: 'Instalação industrial cujas emissões de gases de efeito estufa entram no inventário corporativo e no Sistema Brasileiro de Comércio de Emissões.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [4, 0], // ESG & Compliance, Licenciamento Ambiental
  body: [
    pLink([
      { text: 'O ' },
      { text: 'inventário de gases de efeito estufa', strong: true },
      { text: ' passou a ser obrigação legal para os maiores emissores do país com a Lei nº 15.042/2024, que instituiu o Sistema Brasileiro de Comércio de Emissões de Gases de Efeito Estufa (SBCE). Ao mesmo tempo, a Resolução CVM nº 193/2023 tornou obrigatório, para companhias abertas, o relatório de informações financeiras relacionadas à sustentabilidade, que inclui as emissões da cadeia de fornecedores. O efeito chega a empresas de médio porte na Bahia por dois caminhos: pela lei, quando a instalação ultrapassa os limites de emissão, e pelo contrato, quando um cliente listado em bolsa passa a exigir dados de emissões de quem lhe fornece produtos e serviços.' },
    ]),
    pLink([
      { text: 'A Lei nº 15.042/2024 regulamenta o mercado regulado de carbono previsto na Política Nacional sobre Mudança do Clima, a Lei nº 12.187/2009. Na Bahia, a Lei Estadual nº 12.050/2011 instituiu a Política sobre Mudança do Clima do estado. A metodologia de cálculo segue a ABNT NBR ISO 14064-1 e as especificações do Programa Brasileiro GHG Protocol, e a verificação por terceira parte segue a ABNT NBR ISO 14064-3.' },
    ]),
    callout('info', 'Quem está sujeito ao SBCE', 'Operadores responsáveis por instalações ou fontes que emitam acima de 10.000 toneladas de CO2 equivalente por ano devem apresentar plano de monitoramento e enviar relato anual de emissões e remoções. Acima de 25.000 tCO2e por ano, além do relato, o operador deve fazer a conciliação periódica de obrigações, entregando cotas de emissão equivalentes ao que emitiu. A produção primária agropecuária não está entre as atividades reguladas.'),
    h2('Implantação em Fases e o que Já Deve Ser Feito'),
    pLink([
      { text: 'A lei prevê implantação gradual do ' },
      { text: 'Sistema Brasileiro de Comércio de Emissões', strong: true },
      { text: ': primeiro a regulamentação pelo órgão gestor, depois a operação dos instrumentos de relato, um período em que os operadores apenas monitoram e relatam, e só então o primeiro Plano Nacional de Alocação, que distribui as Cotas Brasileiras de Emissões. O calendário de cada fase depende de atos do órgão gestor e deve ser acompanhado. O ponto prático é que o primeiro relato obrigatório vai exigir dados históricos confiáveis, e uma empresa que nunca fez inventário não monta essa base em poucos meses.' },
    ]),
    pLink([
      { text: 'O descumprimento das obrigações de monitoramento, relato e conciliação está sujeito a sanções administrativas próprias do SBCE, incluindo multa calculada sobre o faturamento bruto do operador, além das sanções da legislação ambiental quando houver informação falsa. Empresas próximas do limite de 10.000 tCO2e precisam medir antes de concluir que estão fora: caldeiras a óleo ou gás, fornos, geradores a diesel, frota própria e processos com emissão química podem somar esse volume em uma única planta.' },
    ]),
    h2('Escopos 1, 2 e 3: o que Entra no Inventário'),
    bullet('Escopo 1, emissões diretas: combustão em caldeiras, fornos, geradores e frota própria, emissões de processo, tratamento de efluentes e resíduos na própria planta, e vazamento de gases refrigerantes.'),
    bullet('Escopo 2, energia comprada: eletricidade consumida, calculada pelo fator médio de emissão do Sistema Interligado Nacional publicado pelo Ministério da Ciência, Tecnologia e Inovação, ou por contratos de energia renovável com rastreabilidade.'),
    bullet('Escopo 3, cadeia de valor: transporte terceirizado, resíduos enviados a aterro, viagens, insumos comprados e uso dos produtos vendidos. É o escopo que clientes listados em bolsa pedem aos fornecedores.'),
    pLink([
      { text: 'O inventário é feito por ano civil, com limites organizacionais definidos por controle operacional ou participação societária, e cada fonte precisa de dado de atividade documentado, como nota fiscal de combustível, conta de energia e manifesto de resíduos, multiplicado por fator de emissão reconhecido. A coerência com os dados já entregues aos órgãos ambientais é verificada: o consumo de combustível declarado no ' },
      { text: 'Relatório Anual de Atividades do IBAMA', link: '/blog/tcfa-ctf-rapp-ibama-obrigacoes-federais-bahia' },
      { text: ' e os volumes de resíduos do ' },
      { text: 'SINIR e da DMR', link: '/blog/logistica-reversa-dmr-sinir-residuos-bahia' },
      { text: ' devem bater com o inventário.' },
    ]),
    h2('Resolução CVM 193 e a Pressão sobre Fornecedores'),
    pLink([
      { text: 'A Resolução CVM nº 193/2023 adotou no Brasil as normas do ISSB, internalizadas pelos pronunciamentos CBPS 01 e CBPS 02, que tratam de informações de sustentabilidade e de clima. A divulgação foi voluntária a partir dos exercícios iniciados em 2024 e passou a ser obrigatória para companhias abertas a partir dos exercícios iniciados em 1º de janeiro de 2026, com asseguração por auditor independente. O CBPS 02 exige a divulgação das emissões de escopos 1, 2 e 3, o que leva as companhias a pedir dados de emissão a transportadoras, empreiteiras, fornecedores de insumos e prestadores de serviços ambientais.' },
    ]),
    pLink([
      { text: 'Na Bahia, isso alcança fornecedores do Polo de Camaçari, de mineradoras, de geradoras de energia e de concessionárias. Questionários de homologação de fornecedores já incluem perguntas sobre inventário de emissões, metas de redução e verificação externa, e a resposta passa a contar na pontuação comercial. A integração dessas exigências com a gestão de riscos está no artigo sobre ' },
      { text: 'governança ESG e mitigação de riscos ambientais', link: '/blog/governanca-esg-mitigacao-riscos-ambientais' },
      { text: '.' },
    ]),
    callout('alert', 'Emissões de gases de efeito estufa não são emissões atmosféricas da licença', 'O monitoramento de chaminé exigido pelo INEMA mede poluentes locais, como material particulado, óxidos de enxofre e de nitrogênio, comparados aos limites da licença. O inventário de gases de efeito estufa mede CO2, metano, óxido nitroso e gases fluorados em toneladas de CO2 equivalente por ano. São obrigações distintas, com metodologias distintas, e uma não substitui a outra.'),
    pLink([
      { text: 'Os dois controles usam, porém, os mesmos dados de operação, e faz sentido organizá-los juntos. O programa de ' },
      { text: 'monitoramento de emissões atmosféricas e ruído', link: '/blog/emissoes-atmosfericas-ruido-monitoramento-conama-491-nbr-10151' },
      { text: ' fornece medições de combustão e consumo de combustível que alimentam o escopo 1, e a ' },
      { text: 'auditoria ambiental compulsória', link: '/blog/auditoria-ambiental-compulsoria-cepram-inema-plano-acao' },
      { text: ' pode verificar a consistência dos registros.' },
    ]),
    h2('Como Estruturar o Primeiro Inventário'),
    bullet('Definir limites organizacionais e operacionais: quais CNPJs, plantas, filiais e fontes entram no inventário.'),
    bullet('Levantar dados de atividade de pelo menos um ano civil completo, com documento de origem para cada número.'),
    bullet('Calcular escopos 1 e 2 com fatores reconhecidos e estimar o escopo 3 pelas categorias mais relevantes para o negócio.'),
    bullet('Verificar se alguma instalação ultrapassa 10.000 tCO2e por ano e, se ultrapassar, preparar o plano de monitoramento exigido pelo SBCE.'),
    bullet('Submeter o inventário à verificação de organismo acreditado pelo Inmetro quando o cliente, o banco ou a regulamentação exigirem.'),
    bullet('Definir metas de redução coerentes com as ações já previstas, como eficiência energética, troca de combustível e redução de resíduos para aterro.'),
    h3('O que a Anjos Brandão faz pelo seu inventário'),
    pLink([
      { text: 'Nossa equipe estrutura o inventário de gases de efeito estufa, organiza os dados de atividade com os registros ambientais já existentes, avalia o enquadramento no SBCE e prepara a empresa para verificação e para os questionários de clientes. Se um cliente pediu seus dados de emissão ou se a sua planta pode estar perto do limite, ' },
      { text: 'fale com a equipe técnica da Anjos Brandão', link: '/#contato' },
      { text: ' e comece pelo diagnóstico.' },
    ]),
  ],
  seo: {
    metaTitle: 'Inventário de GEE: SBCE (Lei 15.042/2024) e CVM 193',
    metaDescription: 'A Lei 15.042/2024 obriga grandes emissores a relatar emissões, e a CVM 193 leva a exigência a fornecedores. Veja escopos, limites e primeiros passos.',
    keywords: [
      'inventário de gases de efeito estufa',
      'sbce lei 15.042/2024',
      'mercado regulado de carbono brasil',
      'resolução cvm 193',
      'escopo 3 fornecedores',
      'ghg protocol bahia',
      'consultoria ambiental bahia',
    ],
  },
}
