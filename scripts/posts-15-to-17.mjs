import { p, h2, h3, bullet, callout, pLink, DEFAULT_AUTHOR } from './enrich-helpers.mjs'

// ============================================================================
// POST 15: OUTORGA DE RECURSOS HÍDRICOS NO INEMA
// ============================================================================
export const POST_15 = {
  _id: 'post-15',
  title: 'Outorga de Uso de Recursos Hídricos no INEMA: Guia para Captação Superficial e Subterrânea sem Risco de Embargo',
  slug: 'outorga-recursos-hidricos-inema-bahia-captacao',
  excerpt: 'Aprenda como regularizar poços tubulares e captação superficial no INEMA. Guia sobre testes de bombeamento, vazão ecológica Q90 e condicionantes no SEIA.',
  publishedAt: '2026-09-24T10:00:00Z',
  estimatedReadTime: 12,
  featured: false,
  mainImageUrl: '/images/blog/post-15-outorga-recursos-hidricos-inema.webp',
  mainImageAlt: 'Estação de outorga de recursos hídricos no INEMA com captação de água na Bahia',
  mainImageCaption: 'Infraestrutura técnica de captação e monitoramento de vazão em corpo hídrico outorgado na Bahia.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0, 4], // Licenciamento, ESG
  body: [
    pLink([
      { text: 'A ' },
      { text: 'outorga de recursos hidricos no inema', strong: true },
      { text: ' é o ato administrativo essencial que confere legitimidade e segurança jurídica ao uso das águas públicas para fins de captação superficial, extração subterrânea por poços tubulares profundos ou lançamento de efluentes tratados na Bahia. Empreendimentos de grande porte nos setores de construção civil pesada, mineração, agroindústria e parques industriais dependem de suprimento hídrico contínuo para manter suas operações ativas.' },
    ]),
    pLink([
      { text: 'Operar qualquer derivação hídrica sem a competente portaria outorgatória publicada no Diário Oficial do Estado (DOE) constitui infração ambiental gravíssima perante a fiscalização do INEMA, com aplicação de multas pesadas, lacração de bombas e embargo das frentes produtivas. Conheça as etapas do ' },
      { text: 'licenciamento ambiental estadual no INEMA', link: '/licenciamento-ambiental' },
      { text: ' e saiba como compatibilizar sua outorga ao cronograma de obras.' },
    ]),

    h2('O Que É Outorga de Recursos Hídricos e Quem Deve Solicitar na Bahia?'),
    p('A outorga de recursos hídricos é a autorização legal concedida pelo INEMA que assegura o direito de captar água superficial em rios e barragens, extrair água de aquíferos subterrâneos ou lançar efluentes tratados em corpos d água no território baiano.'),
    pLink([
      { text: 'No arcabouço normativo baiano, a gestão das águas é regida pela Lei Estadual nº 11.612/2009 (Política Estadual de Recursos Hídricos) e pelo Decreto Estadual nº 14.024/2012, em consonância com a Lei das Águas federal (Lei nº 9.433/1997). Devem solicitar a outorga todas as pessoas físicas ou jurídicas que demandem vazões superiores aos limites de uso insignificante definidos pelos Comitês de Bacia Hidrográfica (CBHs). Consulte também nossas diretrizes de ' },
      { text: 'gerenciamento de resíduos e efluentes industriais (PGRS)', link: '/pgrs' },
      { text: ' para garantir conformidade em seu canteiro.' },
    ]),

    callout('legal', 'Diferença Crucial: Outorga Preventiva vs. Outorga de Direito', 'A Outorga Preventiva não autoriza o uso da água, mas reserva a vazão durante o planejamento do projeto (fase de LP). Apenas a Outorga de Direito (concedida na LI ou LO) autoriza a captação e o bombeamento efetivo da água.'),

    h2('Modalidades de Outorga e Critérios de Enquadramento no SEIA'),
    p('O requerimento tramita eletronicamente no Sistema Estadual de Informações Ambientais e de Recursos Hídricos (SEIA), distribuindo-se em modalidades técnicas distintas:'),

    h3('1. Outorga para Captação Subterrânea (Poços Tubulares Profundos)'),
    p('Modalidade aplicada a indústrias, mineradoras e canteiros que extraem água de aquíferos sedimentares ou fissurais:'),
    bullet('Teste de Bombeamento Contínuo: Ensaio hidrodinâmico ininterrupto com duração de 12 a 24 horas para determinação da vazão crítica, rebaixamento máximo e velocidade de recuperação do nível estático e dinâmico.'),
    bullet('Raio de Interferência Hidrogeológica: Cálculo matemático da área de rebaixamento do lençol freático para garantir que a captação não seque poços vizinhos ou rebaixe o nível de nascentes próximas.'),
    bullet('Laudo de Potabilidade e Qualidade da Água: Análises físico-químicas e microbiológicas completas em laboratório credenciado, comparando os parâmetros com a Portaria GM/MS nº 888/2021.'),

    h3('2. Outorga para Captação Superficial (Rios, Riachos e Barramentos)'),
    p('Destinada a projetos que derivam água diretamente de cursos hídricos naturais ou canais de irrigação:'),
    bullet('Estudo Hidrológico de Disponibilidade Hídrica: Determinação da vazão de referência ecológica da bacia hidrográfica (Q90 para a maioria dos rios baianos ou Q7,10 em bacias federais do São Francisco).'),
    bullet('Balanço Hídrico Regional: Demonstração de que a retirada pretendida não ultrapassa o limite outorgável remanescente na calha do rio.'),
    bullet('Curva Cota-Volume de Barramentos: Em açudes e represas, cálculo da capacidade de regularização pluviométrica para suportar períodos severos de estiagem no semiárido.'),

    h3('3. Outorga para Lançamento de Efluentes Tratados'),
    p('Autorização requerida para deságue de efluentes sanitários ou industriais depurados em corpos receptores:'),
    bullet('Modelagem de Autodepuração do Rio: Avaliação da capacidade de diluição e assimilação de DBO, DQO, fósforo e nitrogênio em atendimento à Resolução CONAMA nº 430/2011.'),
    bullet('Eficiência da ETE: Comprovação da remoção percentual mínima de poluentes antes do ponto de deságue.'),

    callout('warning', 'O Risco das Bombas sem Horímetro e Hidrômetro', 'A portaria de outorga exige instalação obrigatória de hidrômetro lacrado e horímetro no cabeçote do poço ou na sucção da bomba. A ausência desses dispositivos durante fiscalização surpresa do INEMA resulta em lavratura de auto de infração imediato.'),

    h2('Documentos e Estudos Técnicos Mandatórios para Protocolo no INEMA'),
    p('A consistência dos relatórios protocolados no SEIA determina o tempo de análise pelo corpo técnico do órgão:'),
    bullet('Anotação de Responsabilidade Técnica (ART) emitida por engenheiro civil, sanitarista, ambiental ou geólogo devidamente habilitado.'),
    bullet('Perfil litológico e construtivo do poço tubular, com espessura dos filtros e cimentação sanitária de boca.'),
    bullet('Planta planialtimétrica georreferenciada em coordenadas UTM (SIRGAS 2000) demarcando pontos de captação e área irrigada ou fabril.'),
    bullet('Cadastro Estadual Florestal de Imóveis Rurais (CEFIR) ativo para imóveis localizados em zona rural.'),

    h2('Gestão Contínua de Condicionantes da Portaria de Outorga'),
    pLink([
      { text: 'A publicação da portaria no Diário Oficial estabelece condicionantes que devem ser cumpridas anualmente. O empreendedor deve manter livro de registro diário de vazão captada e enviar relatórios piezométricos periódicos ao INEMA. Conheça as estratégias do nosso ' },
      { text: 'guia de licenciamento ambiental na Bahia', link: '/blog/guia-licenciamento-ambiental-inema-bahia' },
      { text: ' para integrar o controle das outorgas ao compliance ambiental geral da sua empresa.' },
    ]),

    h2('Por Que Contratar a Engenharia Hídrica da Anjos Brandão'),
    pLink([
      { text: 'A ' },
      { text: 'Anjos Brandão Soluções Ambientais', link: '/#contato' },
      { text: ' possui vasta experiência em testes de vazão em poços, modelagem hidrogeológica e tramitação técnica no SEIA, garantindo emissão rápida de outorgas sem exigências repetitivas. Consulte nossos serviços na área de ' },
      { text: 'licenciamento e recursos hídricos', link: '/blog/categoria/licenciamento-ambiental' },
      { text: ' e opere com 100% de segurança jurídica na Bahia.' },
    ]),

    h2('Perguntas Frequentes sobre Outorga de Água no INEMA (FAQ)'),
    h3('Qual a validade de uma portaria de outorga de recursos hídricos na Bahia?'),
    p('A outorga de direito de uso de recursos hídricos é concedida pelo INEMA pelo prazo de até 5 anos para atividades temporárias (canteiros de obras) ou até 10 a 20 anos para atividades industriais e agrícolas consolidadas, devendo ser renovada com antecedência mínima de 120 dias do seu vencimento.'),
    h3('O que caracteriza o Uso Insignificante da água que dispensa outorga?'),
    p('São pequenas captações destinadas exclusivamente à subsistência de famílias rurais ou pequenas criações, com vazões diárias inferiores a limites fixados pelos comitês de bacia (geralmente abaixo de 0,5 a 1 litro por segundo). Mesmo o uso insignificante exige cadastro prévio e declaração de dispensa no SEIA.'),
    h3('Quem fiscaliza o cumprimento da outorga de água no estado?'),
    p('O INEMA é a autoridade fiscalizadora primária em rios e aquíferos estaduais. No caso de rios de domínio da União (como o Rio São Francisco e o Rio Paraguaçu navegável), a competência fiscalizatória é da ANA (Agência Nacional de Águas e Saneamento Básico).'),
    h3('É possível transferir a titularidade de uma outorga existente?'),
    p('Sim. Em caso de venda de imóvel ou alienação do empreendimento, o novo proprietário deve solicitar a transferência de titularidade da outorga no SEIA, mantendo as mesmas condições de captação e prazos de validade da portaria original.'),
  ],
  seo: {
    metaTitle: 'Outorga de Recursos Hídricos no INEMA | Anjos Brandão', // 53 chars
    metaDescription: 'Obtenha a outorga de recursos hídricos no INEMA sem travas. Guia de captação superficial e poços tubulares na Bahia. Solicite consultoria técnica.', // 146 chars
    keywords: [
      'outorga de recursos hidricos no inema',
      'captacao de agua bahia seia',
      'teste de bombeamento poco tubular',
      'outorga preventiva direito de uso',
      'legislacao recursos hidricos bahia',
      'vazao ecologica q90 inema',
    ],
  },
}

// ============================================================================
// POST 16: BIOENGENHARIA DE SOLOS E PRAD
// ============================================================================
export const POST_16 = {
  _id: 'post-16',
  title: 'Bioengenharia de Solos e PRAD: Técnicas Vivas para Estabilização de Taludes e Recuperação de Cavas na Bahia',
  slug: 'bioengenharia-solos-prad-recuperacao-taludes-cavas',
  excerpt: 'Descubra como aliar biomantas antierosivas, hidrossemeadura e espécies nativas para estabilizar taludes e cumprir condicionantes de PRAD no INEMA.',
  publishedAt: '2026-09-26T10:00:00Z',
  estimatedReadTime: 12,
  featured: false,
  mainImageUrl: '/images/blog/post-16-bioengenharia-solos-prad-taludes.webp',
  mainImageAlt: 'Engenheiros inspecionando bioengenharia de solos e PRAD em talude na Bahia',
  mainImageCaption: 'Equipe técnica da Anjos Brandão em campo monitorando o pegamento vegetal e a estabilidade geotécnica de talude bioengenhado.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [2, 3], // ASV, Fauna e Flora
  body: [
    pLink([
      { text: 'A aplicação da ' },
      { text: 'bioengenharia de solos e PRAD', strong: true },
      { text: ' (Plano de Recuperação de Áreas Degradadas) representa a solução mais moderna, eficiente e sustentável para conter processos erosivos severos, escorregamentos de terra e assoreamento de mananciais hídricos na Bahia. Em obras rodoviárias, loteamentos residenciais, ferrovias e cavas de mineração, a exposição de taludes desnudados à agressividade das chuvas torrenciais exige intervenções de engenharia natural que integrem materiais inertes e vegetação viva nativa.' },
    ]),
    pLink([
      { text: 'Ao contrário de soluções puramente cinzas de alvenaria e concreto projetado, que apresentam custos astronômicos e descolamento precoce por pressão de poros, as técnicas de bioengenharia criam um manto radicular vivo que se fortalece com o passar dos anos. Conheça as bases da nossa assessoria em ' },
      { text: 'autorização de supressão vegetal (ASV)', link: '/autorizacao-supressao-vegetal' },
      { text: ' e veja como o resgate de solo superficial potencializa a recuperação ecológica.' },
    ]),

    h2('O Que É Bioengenharia de Solos e Qual a sua Função no PRAD?'),
    p('A bioengenharia de solos é a disciplina técnica que combina materiais biodegradáveis (como biomantas de fibra de coco e biorretentores) com plantas vivas para estabilização geotécnica de encostas, contenção de voçorocas e cumprimento de condicionantes de PRAD perante o INEMA na Bahia.'),
    pLink([
      { text: 'O procedimento é regulamentado pelo Decreto Estadual nº 14.024/2012 e pelas resoluções do CEPRAM sobre recuperação de passivos de mineração e construção pesada. A integração entre a engenharia geotécnica e o ' },
      { text: 'resgate de germoplasma e flora nativa', link: '/blog/resgate-de-germoplasma-flora-nativa-prad-inema' },
      { text: ' garante que o solo recupere sua fertilidade natural com baixíssimo índice de manutenção.' },
    ]),

    callout('legal', 'Critérios de Quitação do PRAD no INEMA', 'Para que o INEMA conceda a baixa formal do Termo de Compromisso de Recuperação, a área degradada deve apresentar cobertura vegetal homogênea superior a 80%, estabilidade mecânica dos taludes e regeneração natural de espécies clímax sem voçorocamento ativo.'),

    h2('Comparativo Técnico e Financeiro: Bioengenharia vs. Concreto Projetado'),
    p('A substituição de métodos convencionais por engenharia viva gera benefícios operacionais indiscutíveis:'),
    bullet('Redução de Custos de até 60%: O custo de metro quadrado instalado de biomantas vegetadas com hidrossemeadura é consideravelmente inferior ao custo de telas metálicas ancoradas com concreto projetado.'),
    bullet('Drenagem e Porosidade Natural: Enquanto o concreto aprisiona a água no interior do talude, gerando sobrepressão hidrostática que frequentemente rompe a estrutura, as raízes das plantas favorecem a infiltração lenta e a transpiração contínua.'),
    bullet('Conforto Térmico e Microclima: A cobertura vegetal reduz em até 15 °C a temperatura da superfície da encosta, permitindo o retorno de insetos polinizadores, aves e pequenos animais silvestres.'),

    h2('Principais Soluções e Técnicas Vivas de Bioengenharia'),
    p('A seleção da intervenção correta depende da inclinação do talude, tipo de solo (argiloso, arenoso ou regolito) e regime pluviométrico local:'),

    h3('1. Hidrossemeadura Mecanizada de Alta Performance'),
    p('Aplicação hidropneumática pressurizada de calda ecológica sobre o terreno:'),
    bullet('Composição da calda: Água, fertilizantes de liberação lenta, condicionadores de solo, fixadores poliméricos, inoculantes de micorrizas e sementes de espécies pioneiras.'),
    bullet('Espécies empregadas: Mix calibrado de gramíneas de enraizamento profundo fasciculado (como Capim Vetiver e Braquiárias) associadas a leguminosas fixadoras de nitrogênio (Crotalária e Feijão-de-porco).'),

    h3('2. Biomantas Antierosivas e Telas de Fibra de Coco'),
    p('Mantas industrializadas tramadas com fibras naturais biodegradáveis de coco e sisal:'),
    bullet('Função imediata: Protegem o solo contra o impacto direto das gotas de chuva (efeito splash) e contra a força de arraste das enxurradas superficiais.'),
    bullet('Degradabilidade programada: As biomantas resistem de 24 a 36 meses em campo, tempo mais do que suficiente para que o sistema radicular das plantas se estabeleça e assuma a sustentação geotécnica definitiva da encosta.'),

    h3('3. Biorretentores, Fascionas e Palissadas Vivas'),
    p('Elementos estruturais lineares estaqueados em curvas de nível ao longo do talude:'),
    bullet('Feixes de galhos vivos que enraízam diretamente no solo, funcionando como microbarragens naturais dissipadoras de energia.'),
    bullet('Retenção de sedimentos carreados pelas chuvas, formando pequenos degraus planos que facilitam a fixação de novas mudas florestais.'),

    callout('tip', 'Uso Estratégico do Capim Vetiver (Chrysopogon zizanioides)', 'As raízes do Capim Vetiver atingem até 4 metros de profundidade em dois anos, possuindo resistência à tração equivalente a 1/6 da resistência do aço macio, funcionando como verdadeiros grampos vivos de solo.'),

    h2('Manejo e Reutilização do Topsoil Resgatado na ASV'),
    pLink([
      { text: 'A camada superficial de solo orgânico (topsoil) raspada durante a implantação da obra e mapeada no ' },
      { text: 'inventário florestal prévio', link: '/inventario-florestal' },
      { text: ' é a maior aliada da bioengenharia. Espalhar uma camada de 5 a 10 cm de topsoil sob as biomantas acelera o pegamento vegetal em até 300%, pois o banco de sementes natural da flora baiana já está plenamente adaptado ao regime pluviométrico regional.' },
    ]),

    h2('Protocolo de Monitoramento e Manutenção até a Quitação do PRAD'),
    p('A Anjos Brandão aplica um protocolo sistemático de acompanhamento em campo:'),
    bullet('Inspeções pós-chuvas fortes para detecção precoce de canaletas de erosão laminar e recomposição localizada.'),
    bullet('Adubação de cobertura foliar aos 60 e 120 dias para estimular o crescimento radicular profundo.'),
    bullet('Controle preventivo de formigas cortadeiras e espécies invasoras que possam sufocar as plântulas nativas.'),
    bullet('Elaboração de laudos fotográficos comparativos com Anotação de Responsabilidade Técnica (ART) para protocolo no SEIA.'),

    h2('Recupere suas Áreas Degradadas com a Anjos Brandão'),
    pLink([
      { text: 'A ' },
      { text: 'equipe de engenheiros geotécnicos e agrônomos da Anjos Brandão', link: '/#contato' },
      { text: ' dimensiona projetos executivos completos de bioengenharia de solos, hidrossemeadura e recuperação de cavas minerais em toda a Bahia. Integre a recuperação do seu empreendimento com nossos serviços em ' },
      { text: 'resgate de fauna e flora nativa', link: '/resgate-fauna-flora' },
      { text: ' e consulte nossa seção de ' },
      { text: 'consultoria florestal e conservação', link: '/blog/categoria/florestal-fauna' },
      { text: ' para obter a quitação definitiva do seu PRAD.' },
    ]),

    h2('Perguntas Frequentes sobre Bioengenharia de Solos (FAQ)'),
    h3('A bioengenharia de solos funciona em taludes rochosos ou verticais?'),
    p('Em taludes puramente rochosos ou com inclinações próximas a 90°, a bioengenharia pura não é aplicável isoladamente. Nesses casos, utiliza-se a bioengenharia mista ou solo grampeado verde, combinando chumbadores metálicos e telas com hidrossemeadura especial de alta aderência.'),
    h3('Qual a melhor época do ano para implantar a hidrossemeadura na Bahia?'),
    p('Recomenda-se iniciar a aplicação nas primeiras semanas do período de chuvas da região (outono/inverno no Litoral e primavera/verão no Oeste e Centro da Bahia), aproveitando a umidade natural para dispensar caminhões-pipa de irrigação artificial.'),
    h3('Quanto tempo leva para um talude bioengenhado estar completamente estável?'),
    p('A proteção física inicial contra erosão é imediata com a fixação da biomanta. A estabilidade biológica plena é consolidada entre 6 e 12 meses após a germinação das sementes, quando o manto de raízes atinge profundidade superior a 1 metro.'),
    h3('O que acontece se o empreendimento abandonar o PRAD sem concluir a recuperação?'),
    p('O abandono do PRAD configura infração grave com execução judicial da caução financeira depositada no INEMA, arbitramento de multas diárias e inclusão dos sócios da empresa no Cadastro de Inadimplentes e Impedidos de Licitar do Estado da Bahia.'),
  ],
  seo: {
    metaTitle: 'Bioengenharia de Solos e PRAD na Bahia | Anjos Brandão', // 54 chars
    metaDescription: 'Conheça técnicas de bioengenharia de solos e PRAD para estabilização de taludes na Bahia. Biomantas e hidrossemeadura no INEMA. Fale conosco.', // 145 chars
    keywords: [
      'bioengenharia de solos e PRAD',
      'estabilizacao de taludes bahia',
      'hidrossemeadura mecanizada inema',
      'biomantas fibra de coco prad',
      'recuperacao de cavas mineracao',
      'capim vetiver contencao de encostas',
    ],
  },
}

// ============================================================================
// POST 17: PCA E RCA NO LICENCIAMENTO DE MINERAÇÃO E INDÚSTRIA
// ============================================================================
export const POST_17 = {
  _id: 'post-17',
  title: 'PCA e RCA no Licenciamento de Mineração e Indústria no INEMA: Como Antecipar a LI',
  slug: 'pca-rca-licenciamento-mineracao-industria-inema',
  excerpt: 'Elaboração técnica de PCA e RCA no INEMA para mineradoras e indústrias na Bahia. Controle de emissões e efluentes para destravar LI. Fale com a equipe.',
  publishedAt: '2026-09-28T10:00:00Z',
  estimatedReadTime: 12,
  featured: false,
  mainImageUrl: '/images/blog/post-17-pca-rca-licenciamento-mineracao-inema.webp',
  mainImageAlt: 'Complexo minerário com PCA e RCA no INEMA com bacias de decantação na Bahia',
  mainImageCaption: 'Infraestrutura de controle ambiental de mineração no interior da Bahia: bacias de decantação e controle de emissões.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0, 4], // Licenciamento, ESG
  body: [
    pLink([
      { text: 'A aprovação técnica de ' },
      { text: 'PCA e RCA no INEMA para mineração', strong: true },
      { text: ' e grandes complexos fabris na Bahia é a etapa crítica que determina se o cronograma de implantação física do projeto sairá do papel no prazo previsto ou ficará paralisado por exigências infindáveis no SEIA. O setor minerário e industrial baiano, com destaque para a extração de ferro, ouro, níquel, rochas ornamentais e indústrias de transformação química, demanda rigor absoluto na concepção dos estudos ambientais.' },
    ]),
    pLink([
      { text: 'Erros conceituais no dimensionamento de bacias de decantação, no controle de poeira e na caracterização de pilhas de estéril geram indeferimentos sumários e adiam a emissão da Licença de Instalação (LI). Conheça as fases do ' },
      { text: 'licenciamento ambiental estadual no INEMA', link: '/licenciamento-ambiental' },
      { text: ' e saiba como antecipar os estudos executivos para destravar suas obras.' },
    ]),

    h2('Qual a Diferença Crucial entre o RCA e o PCA no INEMA?'),
    p('O Relatório de Controle Ambiental (RCA) é o estudo de diagnóstico exigido na fase de Licença Prévia (LP) para atestar a viabilidade locacional, enquanto o Plano de Controle Ambiental (PCA) é o projeto de engenharia executiva exigido na Licença de Instalação (LI) para detalhar as medidas mitigadoras na Bahia.'),
    pLink([
      { text: 'Essa sistemática é orientada pela Resolução CONAMA nº 237/1997, pela Lei Estadual da Bahia nº 10.431/2006 e pelo Decreto Estadual nº 14.024/2012. Ambos os documentos devem estar articulados ao ' },
      { text: 'Plano de Gerenciamento de Resíduos Sólidos (PGRS)', link: '/pgrs' },
      { text: ' e ao plano de lavra aprovado perante a Agência Nacional de Mineração (ANM).' },
    ]),

    callout('legal', 'Exigência Específica para Mineração e Indústria Classe 4 a 6', 'Para atividades de médio e grande porte poluidor na Bahia, o INEMA exige que o PCA apresente projetos executivos com memorial de cálculo detalhado, plantas assinadas por responsáveis técnicos habilitados e Anotação de Responsabilidade Técnica (ART) do CREA.'),

    h2('Estrutura e Conteúdo Mandatório do RCA (Fase de LP)'),
    p('O RCA consolida o inventário ambiental prévio da área diretamente afetada pelo empreendimento:'),
    bullet('Caracterização Geológica e Hidrogeológica: Estratigrafia da jazida mineral, permeabilidade do solo, profundidade do lençol freático e inventário de nascentes em um raio mínimo de 5 km.'),
    bullet('Diagnóstico de Flora e Fauna Regional: Mapeamento de fragmentos de Mata Atlântica ou Caatinga, presença de cavernas e cavidades naturais subterrâneas protegidas pelo Decreto Federal nº 99.556/1990.'),
    bullet('Matriz de Impactos Ambientais: Avaliação qualitativa e quantitativa dos impactos sobre a qualidade do ar, regimes hídricos e dinâmica socioeconômica dos municípios vizinhos.'),

    h2('Projetos Executivos que Devem Constar no PCA (Fase de LI)'),
    p('O PCA não é um relatório genérico, mas um caderno de engenharia com projetos executivos prontos para construção:'),

    h3('1. Sistema de Drenagem Pluvial e Bacias de Decantação de Sedimentos'),
    p('Controle rigoroso do arraste de sólidos suspensos totais (SST) para os rios da região:'),
    bullet('Canaletas de crista e pé de talude para segregação de águas limpas externas à cava.'),
    bullet('Dimensionamento hidrológico de bacias de decantação pelo método de Stokes, com tempo de detenção hidráulica adequado para retenção de partículas finas antes do vertimento.'),

    h3('2. Plano de Mitigação de Emissões Atmosféricas e Poeira Fugitiva'),
    p('Controle de material particulado (PTS e PM10) gerado pelo tráfego de caminhões fora-de-estrada e britagem:'),
    bullet('Aspersão automatizada de vias de transporte de minério com água ou aditivos químicos supressores de poeira.'),
    bullet('Enclausuramento de correias transportadoras, silos e britadores com instalação de filtros de manga e lavadores de gases.'),

    h3('3. Plano de Monitoramento Sismográfico e Desmontes com Explosivos'),
    p('Segurança estrutural em lavras que realizam detonações com explosivos civis:'),
    bullet('Monitoramento com sismógrafos triaxiais de engenharia medindo a Velocidade de Partícula de Pico (VPP) e sobrepressão acústica (ruído) em atendimento estrito à norma ABNT NBR 9653.'),
    bullet('Zoneamento de segurança perimetral para resguardar residências e comunidades vizinhas.'),

    h3('4. Projeto de Estabilidade de Pilhas de Estéril e Bota-Foras'),
    p('Estabilidade geotécnica permanente de depósitos de materiais não aproveitáveis:'),
    bullet('Dimensionamento de bermas e banquetas intermediárias com inclinações estáveis.'),
    bullet('Sistemas de drenagem interna de fundo com drenos de brita e geomantas para impedir liquefação por excesso de água.'),

    callout('warning', 'A armadilha dos estudos copiados de outras jazidas', 'O corpo técnico do INEMA identifica com facilidade parâmetros hidrológicos e litológicos genéricos não compatíveis com a bacia hidrográfica do projeto. Estudos rejeitados retornam com exigências técnicas que paralisam o processo por mais de 12 meses no SEIA.'),

    h2('Articulação com a Renovação da Licença de Operação (LO)'),
    pLink([
      { text: 'A eficácia dos programas executados durante a vigência do PCA será auditada na concessão e posterior ' },
      { text: 'renovação da Licença de Operação (LO) no INEMA', link: '/blog/renovacao-licenca-operacao-lo-prazos-documentos-inema' },
      { text: '. Além disso, grandes plantas minerárias e químicas são submetidas à ' },
      { text: 'auditoria ambiental compulsória da Resolução CEPRAM nº 3.925/2009', link: '/blog/auditoria-ambiental-compulsoria-cepram-inema-plano-acao' },
      { text: ', que checa o histórico operacional das bacias e filtros instalados.' },
    ]),

    h2('Como a Consultoria Anjos Brandão Garante a Emissão da sua LI'),
    pLink([
      { text: 'A equipe multidisciplinar da ' },
      { text: 'Anjos Brandão Soluções Ambientais', link: '/#contato' },
      { text: ' combina engenheiros de minas, civis, ambientais e geólogos com vivência comprovada nas particularidades do INEMA. Elaboramos estudos de alta densidade técnica, acompanhamos vistorias e integramos o PCA aos padrões de ' },
      { text: 'governança ESG corporativa', link: '/blog/governanca-esg-mitigacao-riscos-ambientais' },
      { text: '. Acesse nossa divisão de ' },
      { text: 'consultoria ambiental para mineração e indústria', link: '/blog/categoria/licenciamento-ambiental' },
      { text: ' e garanta sua licença no prazo contratual.' },
    ]),

    h2('Perguntas Frequentes sobre RCA e PCA no INEMA (FAQ)'),
    h3('Qualquer atividade de mineração exige EIA/RIMA ou o RCA é suficiente?'),
    p('Nem toda mineração exige EIA/RIMA. Jazidas de pequeno e médio porte, lavras a céu aberto de agregados para construção civil (areia, cascalho e brita) ou rochas ornamentais são licenciadas habitualmente mediante RCA e PCA, economizando tempo e recursos substanciais em relação ao rito do EIA/RIMA.'),
    h3('Quanto tempo leva para o INEMA analisar e aprovar um PCA de mineração?'),
    p('Quando o projeto executivo atende integralmente ao Termo de Referência padrão do INEMA, com plantas detalhadas e ARTs, a análise técnica dura em média de 4 a 8 meses.'),
    h3('O que acontece se a empresa alterar o layout da mina durante as obras?'),
    p('Qualquer alteração substancial na geometria da cava, localização das bacias de decantação ou pilhas de estéril deve ser formalmente comunicada ao INEMA através de um aditivo ao PCA, sob pena de autuação por alteração de projeto sem prévia autorização.'),
    h3('Quem pode assinar a responsabilidade técnica do PCA?'),
    p('Engenheiros de minas, engenheiros civis, ambientais, sanitaristas ou geólogos registrados no CREA, sendo obrigatória a anotação de responsabilidade técnica específica para cada programa do plano.'),
  ],
  seo: {
    metaTitle: 'PCA e RCA no INEMA para Mineração na BA | Anjos Brandão', // 55 chars
    metaDescription: 'Elaboração de PCA e RCA no INEMA para mineradoras e indústrias na Bahia. Controle de emissões e efluentes para destravar a LI. Fale com a equipe.', // 147 chars
    keywords: [
      'PCA e RCA no INEMA para mineração',
      'licenciamento mineracao bahia seia',
      'plano de controle ambiental pca inema',
      'relatorio de controle ambiental rca bahia',
      'bacias de decantacao mineracao',
      'licenca de instalacao mineracao inema',
    ],
  },
}
