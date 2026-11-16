import { p, h2, h3, bullet, callout, pLink, DEFAULT_AUTHOR } from './enrich-helpers.mjs'

// ==========================================
// ARTIGO 37: Chuvas extremas, protocolo lançado na COP31 e plano de emergência na indústria
// ==========================================
export const POST_37 = {
  _id: 'post-37',
  title: 'Chuvas Extremas e Plano de Emergência na Indústria: o Protocolo Lançado na COP31 e as Obrigações na Bahia',
  slug: 'plano-emergencia-chuvas-extremas-industria-cop31-bahia',
  excerpt: 'SESI e Ministério da Saúde lançaram na COP31 um protocolo para chuvas e tempestades na indústria. Veja o que a NR-1 e a licença ambiental já exigem na Bahia.',
  publishedAt: '2026-11-16T10:00:00Z',
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: '/images/blog/post-37-chuvas-extremas-plano-emergencia-industria.webp',
  mainImageAlt: 'Pátio industrial alagado sob céu carregado de chuva, com galpões, tanques de armazenamento e canaletas de drenagem transbordando',
  mainImageCaption: 'Drenagem, contenção de tanques e armazenamento de resíduos definem o dano ambiental de uma chuva extrema dentro da planta.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [4, 0], // ESG & Compliance, Licenciamento Ambiental
  body: [
    pLink([
      { text: 'Em 9 de novembro de 2026, primeiro dia da COP31, em Antália, na Turquia, o Serviço Social da Indústria (SESI), o Conselho Nacional do SESI e o Ministério da Saúde lançaram o ' },
      { text: 'Protocolo de Emergências Climáticas por Chuvas e Tempestades', strong: true },
      { text: ', um guia para que indústrias de qualquer setor e porte se preparem para eventos climáticos extremos. O lançamento foi divulgado no mesmo dia pela Agência de Notícias da Indústria, da CNI. Três dias depois, em 12 de novembro, o Instituto Nacional de Meteorologia (INMET) emitiu aviso de perigo potencial de tempestades para parte da Bahia, com ventos de até 60 km/h, chuva de até 30 mm por hora ou 50 mm por dia e possibilidade de granizo, além de aviso de chuva acumulada para o sul do estado, segundo a Agência Brasil.' },
    ]),
    pLink([
      { text: 'O protocolo é uma orientação voluntária. As obrigações que ele ajuda a cumprir, porém, já estão na legislação: a Norma Regulamentadora nº 1 exige procedimentos de resposta a emergências, a licença ambiental impõe controles sobre efluentes, resíduos e produtos perigosos, e a Lei nº 6.938/1981 responsabiliza a empresa pelo dano ambiental independentemente de culpa. Este artigo resume o protocolo e mostra o que uma indústria, um canteiro de obras ou um centro de distribuição na Bahia deve revisar antes do pico do período chuvoso.' },
    ]),
    callout('info', 'O protocolo em resumo', 'Lançamento: 9 de novembro de 2026, no Implementation Hub, espaço da indústria brasileira na COP31. Autores: SESI, Conselho Nacional do SESI e Ministério da Saúde. Estrutura: três capítulos, sobre diagnóstico dos riscos climáticos, preparação do setor industrial para emergências e principais agravos à saúde. Recomendação central: criar um Comitê de Inteligência Climática que reúna operações, recursos humanos, medicina do trabalho, sustentabilidade e liderança.'),
    h2('O que o Protocolo do SESI e do Ministério da Saúde Recomenda'),
    pLink([
      { text: 'O documento parte de uma constatação: a resposta a um desastre climático não pode ficar com um único departamento. Quando a chuva alaga o pátio, o problema é ao mesmo tempo de segurança do trabalho, de continuidade da produção, de saúde dos empregados e de controle ambiental. Por isso, o protocolo propõe que a empresa trate o risco climático com o mesmo método que já usa para outros riscos: identificar, avaliar, preparar a resposta e treinar as equipes.' },
    ]),
    bullet('Diagnóstico de riscos climáticos: histórico de alagamentos do terreno e do entorno, posição da planta na bacia de drenagem, vulnerabilidade de acessos, energia e abastecimento de água.'),
    bullet('Preparação para emergências: procedimentos de parada segura, rotas de evacuação, comunicação com trabalhadores e com a Defesa Civil, recursos para resposta e retorno à operação.'),
    bullet('Agravos à saúde: doenças de veiculação hídrica, acidentes com eletricidade, quedas, contato com água contaminada e efeitos psicológicos sobre os trabalhadores afetados.'),
    pLink([
      { text: 'O texto não cria obrigação nova. Ele serve como roteiro para organizar o que a empresa já deveria ter, e é aí que entra a legislação ambiental e trabalhista.' },
    ]),
    h2('O que a Legislação Já Exige: NR-1 e Resposta a Emergências'),
    pLink([
      { text: 'A ' },
      { text: 'NR-1', strong: true },
      { text: ', que trata do Gerenciamento de Riscos Ocupacionais, determina no item 1.5.6 que a organização estabeleça, implemente e mantenha procedimentos de resposta aos cenários de emergência, de acordo com os riscos e as características das suas atividades. Esses procedimentos devem prever os meios e recursos para primeiros socorros, o encaminhamento de acidentados, o abandono das instalações e a articulação com serviços externos de emergência. Um cenário de alagamento, queda de estrutura por vendaval ou descarga elétrica durante tempestade é um cenário de emergência como qualquer outro e deve constar do Programa de Gerenciamento de Riscos (PGR).' },
    ]),
    pLink([
      { text: 'No plano nacional, a Lei nº 12.608/2012, que instituiu a Política Nacional de Proteção e Defesa Civil, estabelece que a redução do risco de desastre pode contar com a colaboração de entidades privadas, e a Lei nº 14.904/2024 fixou diretrizes para os planos de adaptação à mudança do clima. Nenhuma das duas impõe à empresa um plano específico, mas ambas orientam os municípios e os órgãos ambientais, que passam a cobrar adaptação nos processos de licenciamento e nos planos de contingência locais.' },
    ]),
    h2('Licença Ambiental e Chuva: os Pontos que Geram Autuação'),
    pLink([
      { text: 'Para o órgão ambiental, a pergunta depois de uma chuva forte é simples: o que saiu da planta? Óleo, efluente sem tratamento, resíduo carreado e sedimento lançado em corpo hídrico configuram poluição, e a Lei nº 6.938/1981, no art. 14, § 1º, obriga o poluidor a reparar o dano independentemente de culpa. A Lei nº 9.605/1998, no art. 54, tipifica como crime causar poluição que resulte em dano à saúde ou ao meio ambiente. A chuva explica o evento, mas não afasta a responsabilidade de quem não tinha controle adequado.' },
    ]),
    bullet('Drenagem pluvial: a água de chuva que passa por áreas de processo, tancagem ou pátio de resíduos deve ser separada ou tratada antes do lançamento, nos termos da Resolução CONAMA nº 430/2011 e da outorga.'),
    bullet('Tancagem: tanques de combustíveis e produtos químicos precisam de bacia de contenção dimensionada e com dreno fechado, como exigem a ABNT NBR 17505 e, para postos e sistemas retalhistas, a Resolução CONAMA nº 273/2000.'),
    bullet('Resíduos: o armazenamento de resíduos perigosos deve ser coberto, impermeabilizado e com contenção, conforme a ABNT NBR 12235. Caçamba descoberta em dia de temporal vira lixiviado.'),
    bullet('Estação de tratamento: bombas, sopradores e elevatórias sem energia de reserva param no pico da chuva, justamente quando a vazão de entrada aumenta.'),
    bullet('Canteiros de obra: taludes expostos, áreas terraplenadas e bota-foras sem drenagem provisória carreiam sedimento para rios e redes públicas.'),
    pLink([
      { text: 'Na Bahia, a Lei Estadual nº 10.431/2006 e o Decreto Estadual nº 14.024/2012 sustentam as condicionantes das licenças emitidas pelo INEMA, que frequentemente incluem plano de emergência, monitoramento de efluentes e gerenciamento de resíduos. Descumprir condicionante é infração administrativa autônoma, mesmo que nenhum dano tenha ocorrido. As regras de ' },
      { text: 'lançamento de efluentes e outorga', link: '/blog/lancamento-efluentes-conama-430-outorga-inema-bahia' },
      { text: ', de ' },
      { text: 'tanques e postos de combustível', link: '/blog/licenciamento-postos-combustivel-tanques-conama-273-bahia' },
      { text: ' e de ' },
      { text: 'resíduos perigosos e MTR', link: '/blog/mtr-online-gestao-residuos-perigosos-classe-1' },
      { text: ' estão detalhadas em artigos próprios.' },
    ]),
    callout('alert', 'O período de chuva não suspende a licença', 'Alagamento, transbordamento de bacia de contenção e lançamento de efluente fora do padrão durante temporal são registrados como ocorrência ambiental. O órgão avalia se a empresa tinha controles compatíveis com o risco conhecido. Aviso do INMET publicado com dias de antecedência enfraquece o argumento de evento imprevisível.'),
    h2('Plano de Emergência: o que Revisar Antes do Próximo Temporal'),
    pLink([
      { text: 'Empresas que já têm ' },
      { text: 'Plano de Emergência Individual ou Plano de Ação de Emergência', link: '/blog/plano-emergencia-individual-pei-pae-bahia-inema' },
      { text: ' costumam ter cenários de vazamento, incêndio e explosão, mas raramente um cenário de chuva extrema. A revisão pode seguir o roteiro abaixo:' },
    ]),
    bullet('Incluir no PGR e no plano de emergência os cenários de alagamento, vendaval, descarga atmosférica e interrupção de acesso, com responsáveis e gatilhos de acionamento.'),
    bullet('Definir o gatilho de ação a partir dos avisos do INMET e dos alertas do INEMA, por exemplo, aviso laranja para a região aciona inspeção de drenagem e recolhimento de materiais soltos.'),
    bullet('Inspecionar canaletas, caixas separadoras de água e óleo, bacias de contenção e válvulas de dreno antes de novembro e depois de cada evento.'),
    bullet('Levar resíduos e produtos para áreas cobertas e elevadas e reduzir o estoque em áreas sujeitas a alagamento.'),
    bullet('Garantir energia de reserva para a estação de tratamento e para bombas de drenagem.'),
    bullet('Registrar cada evento com fotos, volumes de chuva e medidas adotadas, e comunicar o órgão ambiental quando a condicionante da licença assim exigir.'),
    bullet('Realizar simulado com o cenário de chuva extrema e incluir orientação de saúde para os trabalhadores no retorno à operação.'),
    h2('Adaptação Climática Como Item de Governança'),
    pLink([
      { text: 'O protocolo lançado na COP31 trata a adaptação como planejamento econômico, e a tendência é que bancos, seguradoras e grandes clientes passem a perguntar por ela. A pauta da COP31, que vai até 20 de novembro, tem a adaptação entre os temas sem consenso na primeira semana de negociação. Para a empresa, o efeito prático é mais imediato: o risco climático físico entra nos questionários de fornecedores e nos relatórios de sustentabilidade, ao lado do inventário de emissões que o ' },
      { text: 'Sistema Brasileiro de Comércio de Emissões', link: '/blog/cop31-antalya-sbce-portaria-3199-mercado-carbono-bahia' },
      { text: ' passa a exigir. Uma ' },
      { text: 'governança ESG', link: '/blog/governanca-esg-mitigacao-riscos-ambientais' },
      { text: ' que já tem comitê de riscos pode incorporar o Comitê de Inteligência Climática proposto pelo protocolo sem criar uma estrutura paralela.' },
    ]),
    h3('O que a Anjos Brandão faz pela sua operação'),
    pLink([
      { text: 'Revisamos o plano de emergência e as condicionantes da licença com o cenário de chuva extrema, inspecionamos drenagem, contenções e armazenamento de resíduos e preparamos o registro de ocorrências que o órgão ambiental espera receber. Se a sua planta ou o seu canteiro estão em área sujeita a alagamento, ' },
      { text: 'fale com a equipe técnica da Anjos Brandão', link: '/#contato' },
      { text: ' antes do próximo aviso do INMET.' },
    ]),
  ],
  seo: {
    metaTitle: 'Chuvas Extremas e Plano de Emergência na Indústria',
    metaDescription: 'Protocolo do SESI e do Ministério da Saúde lançado na COP31 orienta a indústria para chuvas e tempestades. Veja o que NR-1 e licença ambiental exigem na Bahia.',
    keywords: [
      'plano de emergência chuvas indústria',
      'protocolo emergências climáticas sesi',
      'cop31 adaptação climática',
      'nr-1 resposta a emergências',
      'drenagem pluvial licença ambiental',
      'bacia de contenção nbr 17505',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 38: Loteamento sem licença e venda de lotes (Lei 6.766/1979), caso do Vale do Capão
// ==========================================
export const POST_38 = {
  _id: 'post-38',
  title: 'Loteamento Sem Registro Não Pode Vender Lotes: a Lei 6.766/1979 e o Licenciamento na Bahia',
  slug: 'loteamento-sem-licenca-venda-lotes-lei-6766-bahia',
  excerpt: 'Reportagem sobre pré-venda de 400 lotes na Chapada Diamantina expõe a regra: sem aprovação, licença e registro, loteamento não pode vender nem reservar lotes.',
  publishedAt: '2026-11-16T10:00:00Z',
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: '/images/blog/post-38-loteamento-licenca-registro-lei-6766.webp',
  mainImageAlt: 'Terreno em encosta com vegetação nativa e marcação de arruamento em terra, ao pé de serras de topo plano no interior da Bahia',
  mainImageCaption: 'Abrir ruas e demarcar lotes sem aprovação municipal, licença ambiental e registro configura parcelamento irregular do solo.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0], // Licenciamento Ambiental
  body: [
    pLink([
      { text: 'Em 13 de novembro de 2026, o jornal A Tarde publicou reportagem sobre a pré-venda de 400 lotes de um ' },
      { text: 'loteamento no Vale do Capão', strong: true },
      { text: ', no município de Palmeiras, na Chapada Diamantina. Segundo a reportagem, os terrenos, a partir de 250 m², já eram oferecidos por corretores com preço, parcelamento e pré-reserva, enquanto a consulta ao Sistema Estadual de Informações Ambientais e de Recursos Hídricos (SEIA) não localizou pedido de licenciamento ambiental para o empreendimento. A aprovação urbanística, o registro do loteamento e a licença ambiental não haviam sido apresentados até a publicação. O próprio jornal ressalva que a ausência de registro na consulta, isoladamente, não comprova irregularidade. O INEMA e a imobiliária foram procurados e não responderam.' },
    ]),
    pLink([
      { text: 'O caso concreto será esclarecido pelos órgãos competentes. A regra, porém, não depende dele: a Lei nº 6.766/1979, que trata do parcelamento do solo urbano, proíbe vender ou prometer vender lote de loteamento não registrado e trata como crime qualificado a reserva de lote nessas condições. Este artigo explica a sequência legal de um loteamento na Bahia, do enquadramento urbanístico ao registro, e o que loteador e comprador devem conferir.' },
    ]),
    callout('info', 'A sequência obrigatória', 'Zona urbana ou de expansão urbana definida em lei municipal. Diretrizes e aprovação do projeto pela prefeitura. Licença ambiental no órgão competente, INEMA ou município habilitado. Registro do loteamento no Cartório de Registro de Imóveis em até 180 dias após a aprovação. Só depois do registro a venda é permitida.'),
    h2('O que Diz a Lei 6.766/1979 Sobre a Venda de Lotes'),
    pLink([
      { text: 'O art. 3º da Lei nº 6.766/1979 admite o parcelamento do solo para fins urbanos apenas em zonas urbanas, de expansão urbana ou de urbanização específica, definidas pelo plano diretor ou aprovadas por lei municipal. O art. 12 exige que o projeto seja aprovado pela prefeitura, e o art. 18 obriga o loteador a submeter o projeto aprovado ao registro imobiliário em até 180 dias, sob pena de caducidade da aprovação. O registro exige, entre outros documentos, título de propriedade, certidões e o cronograma de execução das obras de infraestrutura.' },
    ]),
    pLink([
      { text: 'O ponto central para o mercado está no ' },
      { text: 'art. 37', strong: true },
      { text: ': é vedado vender ou prometer vender parcela de loteamento ou desmembramento não registrado. O art. 50 tipifica como crime contra a administração pública dar início a loteamento sem autorização do órgão competente e veicular afirmação falsa sobre a legalidade do empreendimento. O parágrafo único do mesmo artigo qualifica o crime, com pena de reclusão de 1 a 5 anos e multa, quando ele é cometido por meio de venda, promessa de venda, reserva de lote ou qualquer outro instrumento que manifeste a intenção de vender lote em loteamento não registrado. O art. 51 estende a responsabilidade a quem concorre para o crime, o que alcança mandatários e intermediários.' },
    ]),
    callout('alert', 'Pré-reserva também é venda', 'Anúncio com preço, tabela de parcelamento e formulário de reserva antes do registro se enquadra no parágrafo único do art. 50 da Lei 6.766/1979. A frase "aguardando liberação" no material de venda não afasta a vedação do art. 37.'),
    h2('Área Rural Não Vira Loteamento Urbano por Contrato'),
    pLink([
      { text: 'Muitos parcelamentos irregulares no interior da Bahia ocorrem em área rural, fora do perímetro urbano definido em lei municipal. Nesse caso, a Lei nº 5.868/1972, no art. 8º, proíbe dividir imóvel rural em área inferior à fração mínima de parcelamento fixada pelo INCRA para o município, e lotes de algumas centenas de metros quadrados ficam muito abaixo desse limite. A conversão de área rural em urbana depende de lei municipal e de alteração cadastral no INCRA. Segundo a mesma reportagem do A Tarde, Palmeiras não tem Plano Diretor de Desenvolvimento Urbano atualizado, e o Ministério Público da Bahia instaurou procedimentos sobre parcelamentos irregulares do solo rural no município.' },
    ]),
    pLink([
      { text: 'Condomínios de chácaras, sítios de recreio e frações ideais vendidas em área rural costumam ser apresentados como alternativa ao loteamento. Quando o resultado prático é a criação de lotes para moradia ou lazer com abertura de ruas, a Justiça e o Ministério Público tratam o empreendimento como parcelamento do solo para fins urbanos, sujeito à Lei nº 6.766/1979.' },
    ]),
    h2('Licenciamento Ambiental de Loteamentos na Bahia'),
    pLink([
      { text: 'O parcelamento do solo consta do Anexo I da Resolução CONAMA nº 237/1997 entre as atividades sujeitas a licenciamento ambiental. Na Bahia, o licenciamento segue a Lei Estadual nº 10.431/2006 e o Decreto Estadual nº 14.024/2012. A Lei Complementar nº 140/2011, no art. 9º, inciso XIV, atribui ao município o licenciamento de atividades de impacto local, conforme tipologia definida pelo conselho estadual, papel que na Bahia cabe ao CEPRAM. O loteador precisa confirmar, antes de protocolar, se o porte do empreendimento é licenciado pelo ' },
      { text: 'INEMA', link: '/blog/guia-licenciamento-ambiental-inema-bahia' },
      { text: ' ou pelo ' },
      { text: 'órgão ambiental municipal', link: '/blog/licenciamento-ambiental-municipal-app-urbana-salvador-rms' },
      { text: ', e se o município tem estrutura e conselho habilitados.' },
    ]),
    pLink([
      { text: 'Além da licença, o projeto deve respeitar as Áreas de Preservação Permanente do art. 4º da Lei nº 12.651/2012, como margens de rios, nascentes e encostas com declividade acima de 45 graus, e obter ' },
      { text: 'Autorização de Supressão de Vegetação', link: '/blog/inventario-florestal-asv-supressao-vegetal-segura' },
      { text: ' quando houver corte de vegetação nativa. Em áreas de Mata Atlântica, valem as restrições da Lei nº 11.428/2006 para áreas urbanas. Uso de poço ou captação para abastecer o loteamento exige ' },
      { text: 'outorga de recursos hídricos', link: '/blog/outorga-recursos-hidricos-inema-bahia-captacao' },
      { text: '. Na Chapada Diamantina, a proximidade com unidades de conservação pode exigir manifestação do órgão gestor da unidade no processo.' },
    ]),
    h2('Riscos para o Loteador, o Corretor e o Comprador'),
    bullet('Loteador: embargo das obras, multa administrativa, ação civil pública para desfazer o parcelamento ou recuperar a área, e responsabilidade criminal pelos arts. 50 e 51 da Lei 6.766/1979.'),
    bullet('Corretor e imobiliária: podem responder como coautores quando intermediam a venda ou a reserva de lote não registrado.'),
    bullet('Comprador: não consegue registrar o lote em seu nome, não obtém alvará de construção nem ligação regular de água e energia, e pode ter o imóvel incluído em ação de desfazimento do loteamento.'),
    bullet('Município: responde por omissão na fiscalização e pode ser obrigado a regularizar a área por meio da Regularização Fundiária Urbana (Reurb), prevista na Lei nº 13.465/2017, com custo público.'),
    pLink([
      { text: 'O comprador que já pagou tem proteção na própria lei: o art. 38 da Lei nº 6.766/1979 permite suspender o pagamento das prestações quando o loteamento não está registrado ou regularmente executado, depositando os valores no Registro de Imóveis. Antes de comprar, a ' },
      { text: 'investigação ambiental do terreno', link: '/blog/due-diligence-ambiental-compra-terrenos-loteamentos' },
      { text: ' evita esse problema.' },
    ]),
    h2('O que Conferir Antes de Vender ou Comprar um Lote'),
    bullet('Certidão do Cartório de Registro de Imóveis com o registro do loteamento e a matrícula individual do lote.'),
    bullet('Decreto ou alvará municipal de aprovação do projeto, com o número do processo.'),
    bullet('Licença ambiental vigente, com as condicionantes de infraestrutura, drenagem e áreas verdes.'),
    bullet('Lei municipal que inclui a área em zona urbana ou de expansão urbana.'),
    bullet('Cronograma de obras de infraestrutura e garantia prestada pelo loteador à prefeitura.'),
    bullet('Inscrição do imóvel de origem no CEFIR e situação das APPs e da Reserva Legal, quando a área ainda for rural.'),
    pLink([
      { text: 'Para o loteador, o planejamento ambiental desde o projeto, com ' },
      { text: 'corredores ecológicos e áreas verdes bem posicionadas', link: '/blog/corredores-ecologicos-planejamento-loteamentos-residenciais' },
      { text: ', reduz exigências no licenciamento e valoriza os lotes. O caminho regular é mais demorado que a pré-venda, mas é o único que permite entregar matrícula ao comprador.' },
    ]),
    h3('O que a Anjos Brandão faz pelo seu loteamento'),
    pLink([
      { text: 'Fazemos o enquadramento do loteamento no INEMA ou no município, os estudos ambientais, o inventário florestal e a ASV, e acompanhamos as condicionantes até o registro. Para quem vai comprar terreno ou área para lotear, fazemos a investigação ambiental prévia. ' },
      { text: 'Fale com a equipe técnica da Anjos Brandão', link: '/#contato' },
      { text: ' antes de assinar qualquer reserva.' },
    ]),
  ],
  seo: {
    metaTitle: 'Loteamento Sem Registro Não Pode Vender Lotes: Lei 6.766',
    metaDescription: 'Sem aprovação, licença ambiental e registro, o loteamento não pode vender nem reservar lotes. Veja a Lei 6.766/1979, o licenciamento na Bahia e o que conferir.',
    keywords: [
      'loteamento sem licença',
      'lei 6.766/1979 venda de lotes',
      'licenciamento ambiental loteamento bahia',
      'loteamento irregular chapada diamantina',
      'registro de loteamento cartório',
      'parcelamento do solo rural',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 39: Supressão de Mata Atlântica na Bahia (Lei 11.428/2006, CONAMA 5/1994)
// ==========================================
export const POST_39 = {
  _id: 'post-39',
  title: 'Supressão de Mata Atlântica na Bahia: Estágio Sucessional, Autorização e Compensação pela Lei 11.428/2006',
  slug: 'supressao-mata-atlantica-lei-11428-estagio-sucessional-bahia',
  excerpt: 'Na Mata Atlântica, o estágio de regeneração define se a supressão é permitida. Veja a Lei 11.428/2006, a CONAMA 5/1994 da Bahia e a compensação obrigatória.',
  publishedAt: '2026-11-16T10:00:00Z',
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: '/images/blog/post-39-mata-atlantica-supressao-estagio-sucessional.webp',
  mainImageAlt: 'Interior de floresta de Mata Atlântica com dossel fechado, epífitas, sub-bosque denso e luz difusa entre os troncos',
  mainImageCaption: 'Dossel, estratificação, epífitas e serrapilheira são parâmetros usados para classificar o estágio de regeneração da Mata Atlântica.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [2, 3], // Inventário & ASV, Fauna e Flora
  body: [
    pLink([
      { text: 'Na ' },
      { text: 'Mata Atlântica', strong: true },
      { text: ', o que define se uma área pode ser desmatada não é o tamanho do terreno nem a finalidade do projeto, e sim o estágio de regeneração da vegetação. A Lei nº 11.428/2006, conhecida como Lei da Mata Atlântica, criou um regime próprio, mais restritivo que o Código Florestal, que vale para todas as formações do bioma delimitadas no mapa do IBGE referido pelo Decreto nº 6.660/2008. Na Bahia, o bioma cobre o litoral, o Recôncavo, o sul e o extremo sul, e alcança encraves florestais do interior; a delimitação de cada imóvel deve ser conferida no mapa oficial.' },
    ]),
    pLink([
      { text: 'Este guia explica como a vegetação é classificada, quando a supressão é permitida, quem autoriza e qual compensação é exigida. É leitura obrigatória para loteamentos, indústrias, linhas de transmissão, rodovias e empreendimentos turísticos no litoral baiano.' },
    ]),
    callout('info', 'Base legal', 'Lei nº 11.428/2006 (Lei da Mata Atlântica). Decreto nº 6.660/2008 (regulamento). Resolução CONAMA nº 5/1994 (parâmetros dos estágios de regeneração no Estado da Bahia), convalidada pela Resolução CONAMA nº 388/2007. Lei nº 9.605/1998, art. 38-A (crime). Na Bahia, Lei Estadual nº 10.431/2006 e Decreto Estadual nº 14.024/2012.'),
    h2('Estágios de Regeneração: a Classificação que Decide o Projeto'),
    pLink([
      { text: 'A lei distingue a vegetação primária, que nunca sofreu corte raso ou sofreu intervenção mínima, da vegetação secundária, que se regenera depois de supressão. A secundária se divide em três estágios: inicial, médio e avançado. Para a Bahia, os parâmetros estão na Resolução CONAMA nº 5/1994, que considera a fisionomia, a estratificação, a altura e o diâmetro das árvores, a presença de epífitas e trepadeiras, a serrapilheira e as espécies indicadoras de cada estágio.' },
    ]),
    pLink([
      { text: 'A classificação é feita no ' },
      { text: 'inventário florestal', link: '/blog/inventario-florestal-asv-supressao-vegetal-segura' },
      { text: ', com parcelas amostrais, levantamento fitossociológico e enquadramento técnico em cada fragmento. Um erro de enquadramento, como tratar como inicial uma área em estágio médio, invalida a autorização e expõe o empreendedor ao crime do art. 38-A da Lei nº 9.605/1998, que pune com detenção de 1 a 3 anos a destruição ou o dano à vegetação primária ou secundária em estágio avançado ou médio de regeneração do bioma.' },
    ]),
    h2('Quando a Supressão é Permitida'),
    pLink([
      { text: 'A Lei nº 11.428/2006 fixa a regra pelo estágio. O art. 14 admite a supressão de vegetação primária e secundária em estágio avançado apenas em caso de utilidade pública, e a de secundária em estágio médio em caso de utilidade pública ou interesse social, sempre em procedimento administrativo próprio e quando inexistir alternativa técnica e locacional ao empreendimento. O estágio inicial pode ser suprimido mediante autorização do órgão estadual, nos termos do art. 25.' },
    ]),
    bullet('Vegetação primária: utilidade pública, pesquisa científica e práticas preservacionistas (art. 20), com EIA/RIMA quando houver significativo impacto.'),
    bullet('Secundária em estágio avançado: utilidade pública, pesquisa científica e práticas preservacionistas (art. 21), além das hipóteses de mineração do art. 32.'),
    bullet('Secundária em estágio médio: utilidade pública, interesse social e as exceções dos arts. 23 e 31.'),
    bullet('Secundária em estágio inicial: autorização do órgão estadual competente (art. 25).'),
    pLink([
      { text: 'O art. 11 veda o corte e a supressão de vegetação primária ou nos estágios médio e avançado quando ela abriga espécies da flora ou da fauna ameaçadas de extinção e a intervenção põe em risco a sobrevivência dessas espécies, quando exerce função de proteção de mananciais ou de prevenção de erosão, quando forma corredores entre remanescentes ou quando protege o entorno de unidades de conservação. Por isso, o diagnóstico de fauna e flora precisa estar pronto antes do pedido, e não depois.' },
    ]),
    callout('alert', 'Proibição que trava o projeto', 'Espécie ameaçada registrada no inventário ou no levantamento de fauna pode tornar a supressão inviável pelo art. 11 da Lei 11.428/2006, mesmo em caso de utilidade pública. Esse risco precisa ser medido na fase de escolha do terreno.'),
    h2('Mata Atlântica em Área Urbana e em Loteamentos'),
    pLink([
      { text: 'Os arts. 30 e 31 tratam das regiões metropolitanas e áreas urbanas, onde está a maior pressão em Salvador, Lauro de Freitas, Camaçari, Ilhéus e Porto Seguro. A supressão de vegetação primária para loteamento ou edificação é vedada. Para a secundária em estágio avançado, a lei distingue perímetros urbanos aprovados antes e depois da sua vigência: nos anteriores, a supressão depende de autorização e da preservação de no mínimo 50% da área coberta por essa vegetação; nos posteriores, é vedada. Para o estágio médio, a preservação mínima é de 30% nos perímetros aprovados até a vigência da lei e de 50% nos aprovados depois.' },
    ]),
    pLink([
      { text: 'Na prática, um ' },
      { text: 'loteamento', link: '/blog/loteamento-sem-licenca-venda-lotes-lei-6766-bahia' },
      { text: ' em área de Mata Atlântica tem o número de lotes limitado pela vegetação existente, e o desenho do projeto precisa partir do mapa de estágios. ' },
      { text: 'Corredores ecológicos', link: '/blog/corredores-ecologicos-planejamento-loteamentos-residenciais' },
      { text: ' e áreas verdes bem posicionadas cumprem o percentual de preservação e reduzem conflito no licenciamento.' },
    ]),
    h2('Quem Autoriza e Quando o IBAMA Participa'),
    pLink([
      { text: 'Na Bahia, a Autorização de Supressão de Vegetação (ASV) é emitida pelo INEMA, pelo SEIA, ou pelo órgão municipal habilitado, quando a supressão em área urbana for de sua competência. O art. 14, § 2º, da Lei nº 11.428/2006 permite que o município autorize a supressão de vegetação em estágio médio em área urbana quando tiver conselho de meio ambiente deliberativo e plano diretor, mediante anuência prévia do órgão estadual. Na redação original da lei e do art. 19 do Decreto nº 6.660/2008, a supressão de vegetação primária ou nos estágios médio e avançado acima de 50 hectares por empreendimento, ou de 3 hectares em área urbana ou região metropolitana, dependia de anuência prévia do IBAMA. A Lei nº 15.190/2025 alterou o regime de anuências, e esse ponto é questionado no STF. Por isso, a regra aplicável deve ser confirmada no processo antes do protocolo.' },
    ]),
    h2('Compensação Obrigatória e Medidas Associadas'),
    pLink([
      { text: 'O art. 17 da Lei nº 11.428/2006 condiciona a supressão de vegetação primária ou secundária em estágio médio ou avançado à ' },
      { text: 'compensação ambiental', strong: true },
      { text: ': destinação de área equivalente à desmatada, com as mesmas características ecológicas, na mesma bacia hidrográfica e, sempre que possível, na mesma microbacia. Quando isso não for possível, a lei admite a reposição florestal com espécies nativas na mesma bacia. A compensação da Mata Atlântica não se confunde com a da Reserva Legal nem com a compensação do art. 36 da Lei do SNUC, e os três regimes podem incidir sobre o mesmo empreendimento. As modalidades usadas no INEMA estão no artigo sobre ' },
      { text: 'compensação ambiental e TCRA', link: '/blog/compensacao-ambiental-inema-reserva-legal-tcra' },
      { text: '.' },
    ]),
    pLink([
      { text: 'A autorização normalmente vem acompanhada de condicionantes de ' },
      { text: 'resgate e afugentamento de fauna', link: '/blog/resgate-fauna-supressao-vegetal-requisitos-inema' },
      { text: ' durante o corte, de ' },
      { text: 'resgate de germoplasma', link: '/blog/resgate-de-germoplasma-flora-nativa-prad-inema' },
      { text: ' das espécies de interesse e de destinação do material lenhoso, com registro no sistema de controle de produtos florestais.' },
    ]),
    h2('Roteiro Para Pedir a Supressão Sem Retrabalho'),
    bullet('Confirmar no mapa do IBGE se a área está no bioma Mata Atlântica e quais formações ocorrem nela.'),
    bullet('Fazer o inventário florestal com classificação de estágio pela CONAMA 5/1994, fragmento por fragmento.'),
    bullet('Levantar fauna e flora ameaçadas antes de fechar o desenho do projeto.'),
    bullet('Documentar a inexistência de alternativa técnica e locacional e o enquadramento em utilidade pública ou interesse social, quando exigido.'),
    bullet('Calcular a área de compensação e identificar a área receptora na mesma bacia hidrográfica.'),
    bullet('Verificar se há anuência de outro órgão e a regra vigente após a Lei 15.190/2025.'),
    bullet('Manter inscrição no CEFIR e situação de APP e Reserva Legal regularizadas no imóvel.'),
    h3('O que a Anjos Brandão faz pela sua ASV'),
    pLink([
      { text: 'Fazemos o inventário florestal com classificação de estágio, os levantamentos de fauna e flora, o pedido de ASV no INEMA ou no município, o projeto de compensação e o acompanhamento das condicionantes de resgate. Se o seu terreno tem vegetação de Mata Atlântica, ' },
      { text: 'fale com a equipe técnica da Anjos Brandão', link: '/#contato' },
      { text: ' antes de fechar o projeto.' },
    ]),
  ],
  seo: {
    metaTitle: 'Supressão de Mata Atlântica na Bahia: Lei 11.428/2006',
    metaDescription: 'Na Mata Atlântica, o estágio de regeneração define se a supressão é permitida. Veja a Lei 11.428/2006, a CONAMA 5/1994, ASV no INEMA e compensação na Bahia.',
    keywords: [
      'supressão mata atlântica bahia',
      'lei 11.428/2006',
      'estágio sucessional conama 5/1994',
      'asv inema mata atlântica',
      'compensação ambiental mata atlântica',
      'mata atlântica área urbana loteamento',
      'consultoria ambiental bahia',
    ],
  },
}
