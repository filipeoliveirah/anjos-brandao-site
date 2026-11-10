import { p, h2, h3, bullet, callout, pLink, DEFAULT_AUTHOR } from './enrich-helpers.mjs'

// ==========================================
// ARTIGO 26: EIA/RIMA e Audiência Pública no INEMA
// ==========================================
export const POST_26 = {
  _id: 'post-26',
  title: 'EIA/RIMA e Audiência Pública no INEMA: Quando São Exigidos e Como Evitar Atrasos na LP',
  slug: 'eia-rima-audiencia-publica-inema-bahia-licenca-previa',
  excerpt: 'Entenda quando o INEMA exige EIA/RIMA, como funciona a audiência pública e o que trava a Licença Prévia de grandes empreendimentos na Bahia. Fale conosco.',
  publishedAt: '2026-10-29T10:00:00Z',
  estimatedReadTime: 12,
  featured: false,
  mainImageUrl: '/images/blog/post-26-eia-rima-audiencia-publica-inema-bahia.webp',
  mainImageAlt: 'Vista aérea de área de implantação de grande empreendimento industrial na Bahia, com vegetação nativa e corpo hídrico no entorno',
  mainImageCaption: 'Área de influência direta de empreendimento sujeito a EIA/RIMA, com remanescentes de vegetação e corpo hídrico a serem avaliados nos estudos.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0, 4], // Licenciamento Ambiental, ESG e Compliance
  body: [
    pLink([
      { text: 'O ' },
      { text: 'EIA/RIMA no INEMA', strong: true },
      { text: ' é a etapa mais longa, mais cara e mais exposta ao público de todo o licenciamento ambiental na Bahia. Mineração, parques eólicos de grande porte, terminais portuários, rodovias, linhas de transmissão acima de 230 kV, polos industriais e loteamentos acima de determinados limites de área entram no rito de significativo impacto e precisam apresentar o Estudo de Impacto Ambiental e o respectivo Relatório de Impacto Ambiental antes de obter a Licença Prévia. Conhecer o rito evita dois erros frequentes: contratar o estudo errado e subestimar o tempo de tramitação, que no rito de EIA/RIMA chega a 12 meses de análise, sem contar as exigências complementares. A visão geral das três licenças está no nosso ' },
      { text: 'guia do licenciamento ambiental no INEMA', link: '/blog/guia-licenciamento-ambiental-inema-bahia' },
      { text: '.' },
    ]),
    pLink([
      { text: 'A base legal começa na Resolução CONAMA nº 001/1986, que criou o EIA/RIMA, passa pela Resolução CONAMA nº 237/1997, que fixou prazos e competências, e pela Resolução CONAMA nº 009/1987, que regula a audiência pública. Na Bahia, a Lei Estadual nº 10.431/2006 e o Decreto Estadual nº 14.024/2012 definem quais classes de empreendimento exigem o estudo e como o INEMA conduz o processo no SEIA. A Lei Complementar nº 140/2011 define quando a competência é estadual, federal (IBAMA) ou municipal.' },
    ]),
    callout('info', 'Quem está sujeito a EIA/RIMA na Bahia', 'Em regra, empreendimentos enquadrados nas Classes 5 e 6 da matriz de porte e potencial poluidor do CEPRAM, além das atividades listadas no Anexo da Resolução CONAMA nº 001/1986: rodovias, ferrovias, portos, aeroportos, oleodutos, linhas de transmissão acima de 230 kV, usinas acima de 10 MW, extração mineral, aterros de resíduos perigosos, distritos industriais e projetos urbanísticos acima de 100 hectares.'),
    h2('A Diferença entre EIA/RIMA, RCA e RAP'),
    pLink([
      { text: 'A confusão entre os estudos é a primeira causa de devolução de processo no SEIA. O ' },
      { text: 'Relatório Ambiental Preliminar (RAP)', link: '/blog/licenca-unificada-lu-rap-inema-bahia-prazos' },
      { text: ' atende empreendimentos de menor impacto no rito da Licença Unificada. O ' },
      { text: 'Relatório de Controle Ambiental (RCA)', link: '/blog/pca-rca-licenciamento-mineracao-industria-inema' },
      { text: ' atende empreendimentos de médio impacto na LP. O EIA/RIMA é reservado ao significativo impacto e tem exigências que os outros estudos não têm: alternativas locacionais e tecnológicas, inclusive a alternativa de não executar o projeto, diagnóstico ambiental completo da área de influência, prognóstico com e sem o empreendimento, e um relatório em linguagem acessível, o RIMA, que será lido por comunidades, prefeituras e Ministério Público.' },
    ]),
    h2('O Termo de Referência do INEMA'),
    pLink([
      { text: 'Nenhum EIA começa sem o Termo de Referência (TR) emitido pelo INEMA para aquele empreendimento. O TR lista o conteúdo mínimo do estudo, os meios a diagnosticar (físico, biótico e socioeconômico), a extensão das áreas de influência e os programas ambientais esperados. O empreendedor que inicia o estudo antes do TR, com base em modelos de outros processos, costuma receber exigência de complementação integral, porque o INEMA define caso a caso itens como número de campanhas sazonais de fauna, malha de amostragem de solo e água e abrangência do levantamento socioeconômico.' },
    ]),
    bullet('Diagnóstico do meio físico: clima, geologia, geomorfologia, pedologia, recursos hídricos superficiais e subterrâneos, qualidade do ar e ruído de fundo.'),
    bullet('Diagnóstico do meio biótico: flora com inventário florestal e fitossociologia, fauna terrestre e aquática em pelo menos duas campanhas (estação seca e chuvosa), espécies ameaçadas e áreas protegidas no entorno.'),
    bullet('Diagnóstico do meio socioeconômico: uso e ocupação do solo, comunidades tradicionais, patrimônio arqueológico (com anuência do IPHAN), infraestrutura pública e dinâmica econômica local.'),
    bullet('Identificação e avaliação dos impactos com matriz de significância, medidas mitigadoras, compensatórias e programas de monitoramento.'),
    h2('Como Funciona a Audiência Pública'),
    pLink([
      { text: 'A ' },
      { text: 'audiência pública no licenciamento ambiental', strong: true },
      { text: ' é regulada pela Resolução CONAMA nº 009/1987. Depois que o RIMA é disponibilizado para consulta, há prazo de 45 dias para que o Ministério Público, entidade civil ou grupo de 50 ou mais cidadãos solicite a audiência. O INEMA também pode convocá-la por iniciativa própria, o que é a regra para empreendimentos com interferência em comunidades. Se a audiência for solicitada e não for realizada, a licença emitida é nula.' },
    ]),
    pLink([
      { text: 'Na prática, a audiência é um evento presencial no município afetado, com apresentação do empreendedor e da equipe que elaborou o estudo, seguida de perguntas e manifestações registradas em ata. As manifestações compõem o processo e o parecer técnico do INEMA precisa respondê-las. Projetos que chegam à audiência sem ter conversado antes com associações de moradores, colônias de pescadores e prefeituras costumam enfrentar sessões longas, pedidos de nova audiência e judicialização.' },
    ]),
    callout('alert', 'O que mais atrasa a LP com EIA/RIMA', 'Diagnóstico de fauna com uma única campanha, área de influência subdimensionada, ausência de anuência do IPHAN e da FUNAI ou Fundação Palmares quando há comunidade tradicional, e alternativas locacionais apresentadas apenas para cumprir formalidade, sem comparação técnica real. Cada um desses itens gera ofício de complementação e reinicia a contagem do prazo de análise.'),
    h2('Prazos, Compensação e Condicionantes'),
    pLink([
      { text: 'A Resolução CONAMA nº 237/1997 fixa 12 meses para a análise de processos com EIA/RIMA, contados a partir do protocolo completo, e o prazo é suspenso enquanto o empreendedor atende exigências. Somados a elaboração do estudo (6 a 12 meses, conforme as campanhas sazonais) e a audiência, o ciclo da LP de um grande projeto na Bahia dificilmente fica abaixo de 18 meses. Esse prazo precisa constar no cronograma financeiro desde o início.' },
    ]),
    pLink([
      { text: 'Todo empreendimento licenciado com EIA/RIMA está sujeito à compensação ambiental do SNUC, prevista no art. 36 da Lei nº 9.985/2000, com valor de até 0,5% do investimento conforme o grau de impacto calculado pelo órgão, destinado a unidades de conservação. Ela não se confunde com a ' },
      { text: 'compensação florestal por supressão de vegetação', link: '/blog/compensacao-ambiental-inema-reserva-legal-tcra' },
      { text: ', que é calculada por área suprimida. A LP sai com condicionantes que, se não forem atendidas, bloqueiam o pedido da LI; o acompanhamento dessas obrigações está detalhado no artigo sobre ' },
      { text: 'renovação de licença e gestão de condicionantes', link: '/blog/renovacao-licenca-operacao-lo-prazos-documentos-inema' },
      { text: '.' },
    ]),
    h3('O que a Anjos Brandão faz nesse rito'),
    pLink([
      { text: 'Nossa equipe coordena o EIA/RIMA desde o pedido do Termo de Referência, monta as equipes de campo por meio, conduz a interlocução com as comunidades antes da audiência pública e responde às exigências do INEMA dentro do prazo. Se o seu projeto se enquadra no rito de significativo impacto, ' },
      { text: 'fale com a equipe técnica da Anjos Brandão', link: '/#contato' },
      { text: ' e receba uma avaliação de enquadramento e cronograma antes de contratar os estudos.' },
    ]),
  ],
  seo: {
    metaTitle: 'EIA/RIMA e Audiência Pública no INEMA: Guia para a LP',
    metaDescription: 'Entenda quando o INEMA exige EIA/RIMA, como funciona a audiência pública e o que trava a Licença Prévia de grandes empreendimentos na Bahia. Fale conosco.',
    keywords: [
      'eia/rima no inema',
      'audiência pública no licenciamento ambiental',
      'estudo de impacto ambiental bahia',
      'termo de referência inema',
      'licença prévia grande empreendimento bahia',
      'compensação ambiental snuc',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 27: TCFA, CTF e RAPP do IBAMA
// ==========================================
export const POST_27 = {
  _id: 'post-27',
  title: 'TCFA, CTF e RAPP do IBAMA: Obrigações Federais que Indústrias e Canteiros na Bahia Não Podem Ignorar',
  slug: 'tcfa-ctf-rapp-ibama-obrigacoes-federais-bahia',
  excerpt: 'Guia do Cadastro Técnico Federal, da Taxa de Controle e Fiscalização Ambiental e do Relatório Anual do IBAMA. Prazos, multas e Certificado de Regularidade.',
  publishedAt: '2026-10-29T10:00:00Z',
  estimatedReadTime: 11,
  featured: false,
  mainImageUrl: '/images/blog/post-27-tcfa-ctf-rapp-ibama-obrigacoes-bahia.webp',
  mainImageAlt: 'Planta industrial de médio porte na Bahia vista do alto, com galpões, pátio de resíduos e área administrativa',
  mainImageCaption: 'Indústria sujeita ao Cadastro Técnico Federal e ao recolhimento trimestral da TCFA.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [4, 0], // ESG e Compliance, Licenciamento Ambiental
  body: [
    pLink([
      { text: 'O ' },
      { text: 'Cadastro Técnico Federal do IBAMA', strong: true },
      { text: ' é a obrigação ambiental mais esquecida por empresas que já têm a licença estadual em dia. A licença do INEMA autoriza a operação; o cadastro federal, a Taxa de Controle e Fiscalização Ambiental (TCFA) e o Relatório Anual de Atividades Potencialmente Poluidoras (RAPP) são obrigações paralelas, com calendário próprio e penalidades próprias. Uma empresa pode estar com a LO válida e, ao mesmo tempo, impedida de participar de licitação ou obter financiamento porque o Certificado de Regularidade do IBAMA está vencido.' },
    ]),
    pLink([
      { text: 'A base legal é o art. 17 da Lei nº 6.938/1981, que instituiu o Cadastro Técnico Federal de Atividades Potencialmente Poluidoras ou Utilizadoras de Recursos Ambientais (CTF/APP), e o art. 17-B, incluído pela Lei nº 10.165/2000, que criou a TCFA. A Instrução Normativa IBAMA nº 13/2021 regula o cadastro e o RAPP é disciplinado pela Instrução Normativa IBAMA nº 6/2014. As infrações estão no Decreto nº 6.514/2008.' },
    ]),
    callout('info', 'Quem precisa se inscrever no CTF/APP', 'Toda pessoa física ou jurídica que exerce atividade listada no Anexo VIII da Lei nº 6.938/1981: indústria de transformação, extração mineral, transporte e armazenamento de produtos perigosos, geração de energia, serviços de saúde com resíduos infectantes, comércio de combustíveis, construção civil de grande porte, entre outras. A inscrição é feita no sistema do IBAMA e precede a emissão de qualquer licença, porque o INEMA e os municípios exigem o Certificado de Regularidade no protocolo.'),
    h2('A TCFA: Cálculo, Prazos e Pagamento'),
    pLink([
      { text: 'A ' },
      { text: 'TCFA do IBAMA', strong: true },
      { text: ' é devida trimestralmente e o valor depende de duas variáveis: o porte da empresa (microempresa, pequeno, médio ou grande porte, pela receita bruta anual) e o grau de potencial de poluição e utilização de recursos naturais da atividade (pequeno, médio ou alto, pelo Anexo VIII). Microempresas são isentas. Para empresas de grande porte com atividade de alto potencial poluidor, o valor trimestral chega a milhares de reais, o que torna relevante o enquadramento correto do porte e da atividade principal.' },
    ]),
    bullet('Vencimento: último dia útil de cada trimestre civil (março, junho, setembro e dezembro). A guia é emitida pelo próprio contribuinte no sistema do IBAMA.'),
    bullet('Atraso: juros e multa de mora, inscrição em dívida ativa da União e perda do Certificado de Regularidade.'),
    bullet('Estados com convênio com o IBAMA podem cobrar taxa estadual compensável com parte da TCFA; é preciso verificar a situação vigente na Bahia antes de recolher em duplicidade.'),
    h2('O RAPP: Relatório Anual até 31 de Março'),
    pLink([
      { text: 'O ' },
      { text: 'RAPP do IBAMA', strong: true },
      { text: ' é a declaração anual das atividades exercidas no ano anterior, entregue entre 1º de janeiro e 31 de março. O conteúdo varia com a atividade: consumo de matérias-primas e combustíveis, geração e destinação de resíduos sólidos, emissões atmosféricas, efluentes líquidos, produtos químicos utilizados e, para transportadores, cargas perigosas movimentadas. Os dados precisam coincidir com os registros do ' },
      { text: 'SINIR e da DMR estadual', link: '/blog/logistica-reversa-dmr-sinir-residuos-bahia' },
      { text: ' e com os laudos entregues ao INEMA, porque os órgãos cruzam informações.' },
    ]),
    pLink([
      { text: 'A omissão ou o envio com dados falsos é infração prevista no art. 81 do Decreto nº 6.514/2008, com multa de R$ 1.000,00 a R$ 100.000,00. Mais frequente do que a multa é o efeito indireto: o Certificado de Regularidade deixa de ser emitido enquanto o RAPP estiver pendente, e sem ele a empresa não protocola renovação de licença, não habilita em licitação pública e não libera financiamento em banco de fomento.' },
    ]),
    callout('alert', 'O Certificado de Regularidade vale apenas 3 meses', 'O CR é emitido pelo sistema do IBAMA quando cadastro, TCFA e RAPP estão em dia, e expira em 90 dias. Empresas que só o consultam na véspera de um protocolo descobrem pendências de anos anteriores. A conferência precisa ser trimestral, junto com o pagamento da taxa.'),
    h2('Atividades Secundárias, Filiais e Canteiros de Obra'),
    pLink([
      { text: 'Dois erros de cadastro geram passivo silencioso. O primeiro é declarar apenas a atividade principal: uma indústria que também armazena combustível em tanque aéreo, transporta resíduos perigosos com frota própria ou opera caldeira precisa cadastrar cada atividade, e a TCFA é calculada pela de maior potencial poluidor. O segundo é esquecer filiais: cada CNPJ de estabelecimento com atividade listada tem cadastro, taxa e relatório próprios. Canteiros de obra de infraestrutura com central de concreto, usina de asfalto ou base de abastecimento entram nessa regra, como detalhado no artigo sobre ' },
      { text: 'licenciamento de postos e tanques de combustível', link: '/blog/licenciamento-postos-combustivel-tanques-conama-273-bahia' },
      { text: '.' },
    ]),
    h2('Quando o IBAMA Licencia e Quando Apenas Cadastra'),
    pLink([
      { text: 'O cadastro no CTF/APP não transfere o licenciamento para o IBAMA. A competência para licenciar continua definida pela Lei Complementar nº 140/2011: o IBAMA licencia empreendimentos localizados em mais de um estado, no mar territorial, em terras indígenas e unidades de conservação federais, além de atividades nucleares e de outras hipóteses listadas no art. 7º; todo o restante fica com o INEMA ou com o município habilitado. Assim, uma cimenteira em Camaçari tem licença estadual, cadastro federal, TCFA federal e RAPP federal ao mesmo tempo, e cada um desses documentos é cobrado por um órgão diferente. A confusão entre cadastro e licença leva empresas a acreditarem que a inscrição no IBAMA dispensa a licença estadual, ou o contrário, e ambos os erros resultam em autuação.' },
    ]),
    pLink([
      { text: 'Há ainda cadastros específicos que convivem com o CTF/APP e costumam ser esquecidos: o Cadastro Técnico Federal de Atividades e Instrumentos de Defesa Ambiental (CTF/AIDA), obrigatório para consultorias, laboratórios e profissionais que elaboram estudos ambientais, e o registro no Sistema Nacional de Controle da Origem dos Produtos Florestais (SINAFLOR) para quem transporta, armazena ou processa madeira nativa, inclusive a proveniente de supressão autorizada em canteiro de obra. A empresa que contrata um estudo deve exigir do consultor o CTF/AIDA ativo, porque o INEMA recusa documentos assinados por responsável técnico sem cadastro.' },
    ]),
    h3('Rotina mínima de conformidade federal'),
    bullet('Trimestral: emitir e pagar a guia da TCFA e conferir o Certificado de Regularidade.'),
    bullet('Anual, até 31 de março: entregar o RAPP com dados conciliados com o SINIR, a DMR e os laudos de efluentes e emissões.'),
    bullet('Sempre que houver mudança: atualizar porte, atividades, endereço e responsável técnico no cadastro em até 30 dias.'),
    bullet('Antes de qualquer protocolo no INEMA, licitação ou financiamento: emitir CR válido.'),
    pLink([
      { text: 'A Anjos Brandão mantém o calendário federal e estadual dos clientes em uma única matriz de obrigações, com conciliação dos dados entre RAPP, SINIR e condicionantes de licença. Se a sua empresa nunca conferiu a situação no IBAMA, ' },
      { text: 'solicite um diagnóstico de regularidade federal', link: '/#contato' },
      { text: ' antes do próximo vencimento trimestral.' },
    ]),
  ],
  seo: {
    metaTitle: 'TCFA, CTF e RAPP do IBAMA: Guia de Obrigações Federais',
    metaDescription: 'Guia do Cadastro Técnico Federal, da Taxa de Controle e Fiscalização Ambiental e do Relatório Anual do IBAMA. Prazos, multas e Certificado de Regularidade.',
    keywords: [
      'cadastro técnico federal do ibama',
      'tcfa do ibama',
      'rapp do ibama',
      'certificado de regularidade ibama',
      'taxa de controle e fiscalização ambiental',
      'obrigações ambientais federais indústria',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 28: Licenciamento de Postos e Tanques de Combustível (CONAMA 273)
// ==========================================
export const POST_28 = {
  _id: 'post-28',
  title: 'Licenciamento de Postos e Tanques de Combustível na Bahia: CONAMA 273, Estanqueidade e Passivo de Solo',
  slug: 'licenciamento-postos-combustivel-tanques-conama-273-bahia',
  excerpt: 'Guia do licenciamento de postos, bases de abastecimento de canteiro e tanques aéreos na Bahia pela CONAMA 273. Testes, laudos e investigação de passivo.',
  publishedAt: '2026-10-29T10:00:00Z',
  estimatedReadTime: 11,
  featured: false,
  mainImageUrl: '/images/blog/post-28-licenciamento-postos-tanques-combustivel-bahia.webp',
  mainImageAlt: 'Tanques aéreos de combustível com bacia de contenção e canaletas de drenagem em base de abastecimento de canteiro de obras na Bahia',
  mainImageCaption: 'Base de abastecimento com tanques aéreos, bacia de contenção e separador de água e óleo, itens exigidos no licenciamento.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0, 4], // Licenciamento Ambiental, ESG e Compliance
  body: [
    pLink([
      { text: 'O ' },
      { text: 'licenciamento de postos de combustível na Bahia', strong: true },
      { text: ' e das bases de abastecimento de canteiros e indústrias segue um rito próprio, definido pela Resolução CONAMA nº 273/2000, que tornou obrigatório o licenciamento de toda instalação com sistema de armazenamento de combustível, subterrâneo ou aéreo, e fixou exigências técnicas que não existem para outras atividades: teste de estanqueidade, laudo de conformidade dos tanques, monitoramento de vazamento e investigação de passivo no solo. Posto de revenda, ponto de abastecimento de frota, base de canteiro de obra e tanque de óleo diesel de gerador industrial estão todos nessa regra.' },
    ]),
    pLink([
      { text: 'Além da CONAMA 273/2000, aplicam-se a Resolução CONAMA nº 319/2002, as normas ABNT NBR 13786 (classificação do posto conforme o entorno), NBR 13784 (sistemas de detecção de vazamento), NBR 17505 (armazenamento de líquidos inflamáveis e combustíveis) e, para passivo, a Resolução CONAMA nº 420/2009. Na Bahia, a competência pode ser do INEMA ou do município habilitado para atividades de impacto local, conforme a Resolução CEPRAM nº 4.327/2013 e suas atualizações. Em Salvador, o licenciamento de postos tramita na SEDUR.' },
    ]),
    callout('info', 'Classes de posto pela NBR 13786', 'A norma classifica a instalação de 0 a 3 conforme a sensibilidade do entorno em um raio de 100 metros: presença de poços de captação, corpos d’água, galerias, redes de drenagem, edificações com subsolo. Quanto maior a classe, mais exigentes são os sistemas de detecção, as paredes dos tanques (parede dupla) e o monitoramento. O enquadramento errado é a primeira causa de indeferimento.'),
    h2('Documentos e Projetos Exigidos no Licenciamento'),
    bullet('Projeto do sistema de armazenamento com planta baixa, cortes, memorial descritivo e ART do responsável técnico, indicando tanques, tubulações, câmaras de contenção, canaletas e separador de água e óleo (SAO).'),
    bullet('Certificado de conformidade dos tanques e equipamentos no âmbito do INMETRO, com laudo de instalação assinado pela empresa montadora.'),
    bullet('Teste de estanqueidade de tanques e linhas pela NBR 13784, na instalação, na renovação de licença e sempre que houver suspeita de vazamento.'),
    bullet('Plano de gerenciamento de resíduos com destinação de óleo usado, borra de SAO, embalagens e EPIs contaminados, com MTR no SINIR, seguindo as regras de rastreabilidade do SINIR e da DMR.'),
    pLink([
      { text: 'Para instalações existentes, o INEMA e os municípios exigem ainda a investigação de passivo ambiental: avaliação preliminar e, quando há indício, investigação confirmatória com sondagens e análise de hidrocarbonetos (BTEX, PAH e TPH) em solo e água subterrânea. O rito completo está no artigo sobre ' },
      { text: 'gerenciamento de áreas contaminadas', link: '/blog/gerenciamento-areas-contaminadas-gac-inema-bahia' },
      { text: '. Posto antigo com tanque de parede simples enterrado há mais de 15 anos raramente passa sem alguma intervenção.' },
    ]),
    h2('Bases de Abastecimento em Canteiros de Obra'),
    pLink([
      { text: 'A ' },
      { text: 'base de abastecimento de canteiro', strong: true },
      { text: ' é tratada pelo órgão como instalação de armazenamento e precisa constar na Licença de Instalação da obra ou ter licença própria, conforme o volume. As exigências mínimas são tanque aéreo certificado, bacia de contenção com capacidade de 110% do maior tanque, piso impermeável na área de abastecimento, canaletas direcionadas para separador de água e óleo, kit de contenção de vazamento e registro de abastecimento por equipamento. O ' },
      { text: 'Plano de Emergência Individual', link: '/blog/plano-emergencia-individual-pei-pae-bahia-inema' },
      { text: ' precisa contemplar o cenário de vazamento na base e o simulado anual.' },
    ]),
    pLink([
      { text: 'Na desmobilização do canteiro, a remoção dos tanques exige limpeza, desgaseificação por empresa habilitada, laudo de ausência de contaminação do solo sob a base e destinação dos resíduos com CDF. Sem esse encerramento documentado, o passivo fica com a construtora e aparece anos depois, na venda do terreno ou em fiscalização.' },
    ]),
    callout('alert', 'Vazamento é obrigação de comunicar', 'Qualquer vazamento ou indício, como perda de estoque não explicada, odor em poço vizinho ou produto em galeria pluvial, deve ser comunicado ao órgão ambiental imediatamente. A omissão agrava a penalidade e transfere para o empreendedor o custo integral da remediação, mesmo que o vazamento tenha origem em equipamento com certificado válido.'),
    h2('Tanques Subterrâneos: Parede Dupla, Monitoramento Intersticial e Troca'),
    pLink([
      { text: 'Para postos de revenda, o sistema de armazenamento subterrâneo de combustível (SASC) é o item de maior risco e de maior custo. A CONAMA 273/2000 e a NBR 13786 exigem, conforme a classe da instalação, tanques jaquetados de parede dupla com monitoramento intersticial, tubulações de parede dupla, câmaras de contenção sob bombas e filtros, válvulas de retenção e sistema de detecção de vazamento com registro contínuo. Tanques de parede simples instalados antes da resolução são tolerados apenas com teste de estanqueidade periódico aprovado; a reprovação obriga a substituição imediata, com remoção do tanque antigo, laudo de solo sob a cava e destinação do equipamento como resíduo.' },
    ]),
    pLink([
      { text: 'O monitoramento ambiental do posto inclui, em muitas licenças, poços de observação de água subterrânea a jusante dos tanques, com coleta semestral e análise de BTEX e TPH, e a medição de fase livre com interface óleo e água. Resultado acima dos valores de investigação da CONAMA 420/2009 dispara o gerenciamento de área contaminada e, dependendo do caso, a comunicação à concessionária de água quando há poço de abastecimento no raio de influência. O custo de um ciclo de investigação e remediação em posto urbano costuma superar o valor dos próprios tanques, o que torna a prevenção, com equipamento certificado e teste em dia, a decisão econômica mais simples do setor.' },
    ]),
    h2('Renovação da Licença e Condicionantes Típicas'),
    pLink([
      { text: 'A Licença de Operação de posto ou base de abastecimento é renovada com teste de estanqueidade recente, laudo de monitoramento dos poços de observação (quando exigidos), comprovante de destinação de resíduos e certificado de manutenção do SAO. A renovação deve ser protocolada com 120 dias de antecedência, como detalhado no artigo sobre ' },
      { text: 'renovação de Licença de Operação', link: '/blog/renovacao-licenca-operacao-lo-prazos-documentos-inema' },
      { text: '. Postos também recolhem a TCFA federal e entregam o RAPP, por constarem no Anexo VIII da Lei nº 6.938/1981.' },
    ]),
    h3('Como a Anjos Brandão conduz o processo'),
    pLink([
      { text: 'Fazemos o enquadramento de classe pela NBR 13786, elaboramos o projeto ambiental da instalação, acompanhamos os testes de estanqueidade e a investigação de passivo e conduzimos o protocolo no INEMA ou no município. Para construtoras, estruturamos a base de abastecimento desde a LI da obra e o encerramento documentado na desmobilização. ' },
      { text: 'Fale com a nossa equipe', link: '/#contato' },
      { text: ' antes de instalar ou renovar.' },
    ]),
  ],
  seo: {
    metaTitle: 'Licenciamento de Postos e Tanques na Bahia: CONAMA 273',
    metaDescription: 'Guia do licenciamento de postos, bases de abastecimento de canteiro e tanques aéreos na Bahia pela CONAMA 273. Testes, laudos e investigação de passivo.',
    keywords: [
      'licenciamento de postos de combustível na bahia',
      'conama 273 licenciamento',
      'base de abastecimento de canteiro',
      'teste de estanqueidade nbr 13784',
      'tanque aéreo de combustível licenciamento',
      'passivo ambiental posto de combustível',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 29: Emissões Atmosféricas e Ruído
// ==========================================
export const POST_29 = {
  _id: 'post-29',
  title: 'Emissões Atmosféricas e Ruído: Monitoramento de Chaminés, Poeira e NBR 10151 como Condicionante de LO na Bahia',
  slug: 'emissoes-atmosfericas-ruido-monitoramento-conama-491-nbr-10151',
  excerpt: 'Como atender às condicionantes de emissões atmosféricas e ruído do INEMA: CONAMA 382, 436 e 491, NBR 10151, amostragem de chaminé e controle de poeira.',
  publishedAt: '2026-10-29T10:00:00Z',
  estimatedReadTime: 11,
  featured: false,
  mainImageUrl: '/images/blog/post-29-emissoes-atmosfericas-ruido-monitoramento-bahia.webp',
  mainImageAlt: 'Chaminé industrial com plataforma de amostragem e estação de monitoramento da qualidade do ar em planta na Bahia ao amanhecer',
  mainImageCaption: 'Plataforma de amostragem isocinética em chaminé e estação de monitoramento no entorno, itens típicos de condicionante de LO.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [4, 0], // ESG e Compliance, Licenciamento Ambiental
  body: [
    pLink([
      { text: 'O ' },
      { text: 'monitoramento de emissões atmosféricas', strong: true },
      { text: ' e de ruído é a condicionante de Licença de Operação que mais gera auto de infração em indústrias, cimenteiras, usinas de asfalto, centrais de concreto, mineradoras e termelétricas na Bahia. Diferente dos resíduos, que deixam rastro documental, a emissão só existe no momento da medição; sem laudo válido no prazo, o INEMA presume o descumprimento. Este guia reúne as normas aplicáveis, o que a condicionante costuma exigir e os erros de amostragem que invalidam o relatório.' },
    ]),
    pLink([
      { text: 'As referências são a Resolução CONAMA nº 382/2006 (limites de emissão para fontes fixas novas), a Resolução CONAMA nº 436/2011 (fontes fixas existentes), a Resolução CONAMA nº 491/2018 (padrões de qualidade do ar, que substituiu a CONAMA 003/1990), a Resolução CONAMA nº 001/1990 para ruído, que remete à ABNT NBR 10151, e a Resolução CONAMA nº 418/2009 para fumaça preta de veículos a diesel. Na Bahia, o Decreto Estadual nº 14.024/2012 incorpora esses limites e o INEMA exige a Declaração Anual de Carga Poluidora no SEIA.' },
    ]),
    callout('info', 'Fonte fixa, fonte fugitiva e qualidade do ar', 'Fonte fixa é a chaminé, o duto ou o exaustor com ponto definido de lançamento, medida em concentração (mg/Nm³). Fonte fugitiva é a poeira de vias, pilhas, britadores e transferência de correias, controlada por aspersão, enclausuramento e cobertura. Qualidade do ar é o que se mede no entorno, em estações de PTS, PM10 e PM2,5, e responde ao conjunto das fontes. A condicionante de LO costuma exigir os três.'),
    h2('Amostragem em Chaminé: O que Invalida o Laudo'),
    pLink([
      { text: 'A ' },
      { text: 'amostragem isocinética de chaminé', strong: true },
      { text: ' segue os métodos da CETESB e as normas ABNT NBR 10700, 10701, 11966 e 12019, que definem a localização do ponto de amostragem, o número de pontos de travessa e as condições de operação durante a coleta. O INEMA e os laboratórios acreditados pelo INMETRO (ISO 17025) rejeitam laudos quando:' },
    ]),
    bullet('A plataforma de amostragem está a menos de 8 diâmetros a jusante e 2 diâmetros a montante de qualquer perturbação do fluxo (curva, redução, ventilador).'),
    bullet('A coleta foi feita com a fonte abaixo de 80% da capacidade nominal, o que subestima a emissão.'),
    bullet('Os parâmetros não correspondem ao combustível e ao processo: material particulado, NOx, SOx e CO para caldeiras; dioxinas e furanos e metais para coprocessamento; compostos orgânicos voláteis para pintura e solventes.'),
    bullet('Falta a correção para a base de oxigênio de referência exigida pela CONAMA 382 para cada tipo de fonte.'),
    h2('Poeira Fugitiva: Mineração, Britagem e Canteiros'),
    pLink([
      { text: 'Em pedreiras, cavas, usinas de asfalto e obras de terraplenagem, a poeira é a reclamação de vizinhança mais frequente e o motivo mais comum de notificação. A condicionante típica exige aspersão de vias com caminhão-pipa ou aspersores fixos, enclausuramento de britadores e peneiras com filtro de manga, cobertura de pilhas e caçambas, lavador de rodas na saída e estações de PTS e PM10 em pelo menos dois pontos a sotavento. Os limites de qualidade do ar da CONAMA 491/2018 são progressivos, com padrões intermediários (PI-1 a PI-3) até o padrão final (PF), e o INEMA pode exigir o padrão mais restritivo em área sensível. As exigências de projeto estão no artigo sobre ' },
      { text: 'PCA em mineração e indústria', link: '/blog/pca-rca-licenciamento-mineracao-industria-inema' },
      { text: '.' },
    ]),
    h2('Ruído: NBR 10151 e Vizinhança'),
    pLink([
      { text: 'A ' },
      { text: 'medição de ruído pela NBR 10151', strong: true },
      { text: ' é feita no limite da propriedade ou no ponto receptor, em período diurno e noturno, com medidor de nível sonoro calibrado e correção para tons puros e impulsivos. Os limites da versão 2019 da norma variam com o tipo de área: 50 dB(A) diurno e 45 dB(A) noturno em área estritamente residencial, 55 e 50 em área mista predominantemente residencial, 60 e 55 em área mista com vocação comercial, e 70 e 60 em área predominantemente industrial. A Resolução CONAMA nº 001/1990 torna esses limites obrigatórios para fins de licenciamento.' },
    ]),
    pLink([
      { text: 'O erro mais comum é medir apenas o nível da fonte sem o ruído de fundo com a fonte desligada; sem essa referência, não há como atribuir o excedente ao empreendimento. Canteiros com obra noturna, geradores e bate-estacas precisam de medição específica e, em muitos municípios da Região Metropolitana de Salvador, de autorização da prefeitura para horário estendido.' },
    ]),
    callout('alert', 'Periodicidade e validade dos laudos', 'A condicionante de LO define a periodicidade: trimestral ou semestral para chaminés, mensal ou contínua para qualidade do ar em área sensível, semestral para ruído. Laudo fora do prazo, sem acreditação do laboratório ou sem ART é tratado como ausente. O conjunto é consolidado na Declaração Anual de Carga Poluidora no SEIA e cruzado com o RAPP do IBAMA.'),
    h2('Fumaça Preta e Frota a Diesel'),
    pLink([
      { text: 'Frotas de caminhões, máquinas de terraplenagem e geradores a diesel também são fontes de emissão sujeitas a controle. A Resolução CONAMA nº 418/2009 obriga os programas de inspeção e a medição de opacidade ou de fumaça preta pela Escala de Ringelmann, com limite de padrão 2 em operação. O INEMA costuma incluir na LI de grandes obras a exigência de inspeção semestral da frota com relatório por equipamento, e a fiscalização em canteiro aplica o cartão de Ringelmann na hora. Manutenção de bicos injetores, filtro de ar e regulagem de bomba são as medidas de menor custo; a substituição de equipamentos antigos por motores com padrão de emissão mais recente resolve o problema de forma definitiva e conta ponto nas auditorias de governança.' },
    ]),
    pLink([
      { text: 'Para geradores de canteiro e de indústria, além da emissão há o ruído: um grupo gerador sem enclausuramento acústico produz entre 95 e 105 dB(A) a um metro, e excede o limite noturno de área residencial a mais de 100 metros de distância. Container acústico, atenuador no escape e posicionamento na face oposta à vizinhança são medidas de projeto, e o plano de monitoramento deve prever medição específica com o gerador em carga.' },
    ]),
    h2('Da Medição à Gestão'),
    pLink([
      { text: 'Medir não resolve emissão. Quando o laudo aponta excedente, o INEMA exige plano de ação com prazo: troca de filtro, ajuste de queima, retrofit de ciclone para filtro de manga, barreira acústica ou mudança de turno. Empresas que tratam o laudo como mero protocolo descobrem o problema na renovação da LO, quando já não há tempo para intervir, como discutido no artigo sobre ' },
      { text: 'auditoria ambiental compulsória do CEPRAM', link: '/blog/auditoria-ambiental-compulsoria-cepram-inema-plano-acao' },
      { text: '.' },
    ]),
    h3('O que a Anjos Brandão entrega'),
    pLink([
      { text: 'Elaboramos o plano de monitoramento conforme a condicionante, contratamos e acompanhamos laboratórios acreditados, conferimos a conformidade metodológica antes do protocolo e consolidamos os resultados na Declaração de Carga Poluidora. Se a sua LO tem condicionante de emissões ou ruído com prazo próximo, ' },
      { text: 'fale com a nossa equipe', link: '/#contato' },
      { text: ' para revisar o cronograma de medições.' },
    ]),
  ],
  seo: {
    metaTitle: 'Emissões Atmosféricas e Ruído: Condicionantes de LO na Bahia',
    metaDescription: 'Como atender às condicionantes de emissões atmosféricas e ruído do INEMA: CONAMA 382, 436 e 491, NBR 10151, amostragem de chaminé e controle de poeira.',
    keywords: [
      'monitoramento de emissões atmosféricas',
      'medição de ruído nbr 10151',
      'amostragem isocinética de chaminé',
      'conama 491 qualidade do ar',
      'controle de poeira mineração bahia',
      'condicionante de licença de operação inema',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 30: Licenciamento Municipal e APP Urbana em Salvador e RMS
// ==========================================
export const POST_30 = {
  _id: 'post-30',
  title: 'Licenciamento Ambiental Municipal e APP Urbana em Salvador e Região Metropolitana: Competências e Limites',
  slug: 'licenciamento-ambiental-municipal-app-urbana-salvador-rms',
  excerpt: 'Quando o licenciamento é da prefeitura e não do INEMA, como funciona a SEDUR em Salvador e o que vale para APP em área urbana consolidada na Bahia.',
  publishedAt: '2026-10-29T10:00:00Z',
  estimatedReadTime: 11,
  featured: false,
  mainImageUrl: '/images/blog/post-30-licenciamento-municipal-app-urbana-salvador-rms.webp',
  mainImageAlt: 'Vista aérea de bairro em expansão na Região Metropolitana de Salvador com mata ciliar preservada ao longo de um riacho urbano',
  mainImageCaption: 'Faixa de APP urbana ao longo de curso d’água em área de expansão residencial na Região Metropolitana de Salvador.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0, 2], // Licenciamento Ambiental, Inventário e ASV
  body: [
    pLink([
      { text: 'O ' },
      { text: 'licenciamento ambiental municipal na Bahia', strong: true },
      { text: ' é a porta de entrada da maior parte dos empreendimentos imobiliários, comerciais e de serviços em Salvador, Lauro de Freitas, Camaçari, Simões Filho e demais municípios da Região Metropolitana. Desde a Lei Complementar nº 140/2011, as atividades de impacto local são licenciadas pela prefeitura, e protocolar no órgão errado custa meses: o INEMA devolve o processo por incompetência e o município reinicia a análise do zero. Este guia explica como a competência é definida, como funciona o rito em Salvador e quais regras de Área de Preservação Permanente valem em zona urbana.' },
    ]),
    pLink([
      { text: 'O art. 9º da LC 140/2011 atribui aos municípios o licenciamento de atividades de impacto local, definidas pelo Conselho Estadual de Meio Ambiente. Na Bahia, a Resolução CEPRAM nº 4.327/2013, atualizada pela Resolução CEPRAM nº 4.579/2018, lista essas atividades por porte e enquadra os municípios conforme sua estrutura: só licencia quem tem órgão ambiental capacitado e conselho municipal em funcionamento. O que ultrapassa o impacto local, atinge mais de um município ou incide em unidade de conservação estadual permanece com o INEMA, conforme o ' },
      { text: 'guia do licenciamento no INEMA', link: '/blog/guia-licenciamento-ambiental-inema-bahia' },
      { text: '.' },
    ]),
    callout('info', 'Como saber se o licenciamento é municipal', 'Três perguntas resolvem a maioria dos casos: a atividade está na lista de impacto local da Resolução CEPRAM vigente, dentro do porte indicado? O município está habilitado e tem conselho ativo? O empreendimento está fora de unidade de conservação estadual ou federal e não interfere em mais de um município? Três respostas afirmativas indicam competência municipal. Em dúvida, a consulta formal de enquadramento evita o protocolo errado.'),
    h2('O Rito em Salvador: SEDUR, PDDU e LOUOS'),
    pLink([
      { text: 'Em Salvador, o ' },
      { text: 'licenciamento ambiental na SEDUR', strong: true },
      { text: ' segue a Lei Municipal nº 8.915/2015 (Política Municipal de Meio Ambiente) e está integrado ao licenciamento urbanístico. Antes da licença ambiental, o empreendedor precisa de compatibilidade com o Plano Diretor (Lei nº 9.069/2016) e com a Lei de Ordenamento do Uso e Ocupação do Solo (Lei nº 9.148/2016), que definem zonas, índices e as áreas de proteção municipais, como o Sistema de Áreas de Valor Ambiental e Cultural (SAVAM). O rito municipal tem modalidades próprias, que vão da Licença Ambiental Simplificada e da Licença Unificada até o rito trifásico para empreendimentos maiores.' },
    ]),
    bullet('Empreendimentos residenciais e comerciais de médio porte: licença municipal, com estudo ambiental simplificado e, quando há supressão, autorização de corte de árvores municipal ou ASV estadual, conforme o porte.'),
    bullet('Loteamentos e condomínios acima do porte de impacto local: competência do INEMA, com RCA ou EIA/RIMA, no rito trifásico estadual.'),
    bullet('Atividades com resíduos perigosos, tanques de combustível ou lançamento em corpo hídrico: verificação caso a caso, porque alguns itens permanecem estaduais mesmo em empreendimento de impacto local.'),
    h2('APP em Área Urbana: O que Vale'),
    pLink([
      { text: 'A ' },
      { text: 'APP urbana na Bahia', strong: true },
      { text: ' segue a Lei nº 12.651/2012, o Código Florestal, que se aplica integralmente em zona urbana: 30 metros em cada margem de curso d’água com até 10 metros de largura, 50 metros ao redor de nascentes, faixas crescentes conforme a largura do rio, além de topos de morro, encostas acima de 45 graus e restingas. O STJ consolidou no Tema Repetitivo 1.010, em 2021, que a faixa do Código Florestal prevalece sobre a faixa menor de 15 metros da Lei de Parcelamento do Solo Urbano, o que afetou projetos antigos de loteamento em toda a Região Metropolitana.' },
    ]),
    pLink([
      { text: 'A Lei nº 14.285/2021 abriu uma exceção: em área urbana consolidada, o município pode fixar, por lei própria, faixas de APP diferentes ao longo de cursos d’água, desde que ouvido o conselho de meio ambiente e sem ocupação de área de risco. Poucos municípios baianos editaram essa lei até agora, e enquanto não editam vale a regra federal. A intervenção em APP urbana só é autorizada nas hipóteses de utilidade pública, interesse social ou baixo impacto do art. 8º do Código Florestal, com a ' },
      { text: 'compensação florestal correspondente', link: '/blog/compensacao-ambiental-inema-reserva-legal-tcra' },
      { text: '.' },
    ]),
    callout('alert', 'Riacho canalizado ou intermitente continua gerando APP', 'Curso d’água tamponado, canalizado ou que só corre na estação chuvosa mantém a faixa de preservação, salvo decisão expressa do órgão com base em laudo hidrológico. Projetos que ignoram drenagens pequenas no levantamento topográfico são embargados na fiscalização e o licenciamento volta ao início com nova poligonal.'),
    h2('Municípios da RMS: Estruturas Diferentes, Ritos Diferentes'),
    pLink([
      { text: 'A Região Metropolitana de Salvador reúne municípios com graus muito distintos de estrutura ambiental. Salvador, Camaçari e Lauro de Freitas têm secretarias com corpo técnico próprio, conselhos ativos e sistemas de protocolo eletrônico, e licenciam a lista completa de impacto local. Municípios menores, como alguns do Recôncavo e do Litoral Norte, licenciam apenas parte da lista ou devolvem ao INEMA atividades que não têm condição de analisar. Isso significa que o mesmo galpão logístico pode ter licença municipal em Simões Filho e estadual em um município vizinho, e que o cronograma do projeto precisa considerar o órgão real, não a regra geral. Antes do protocolo, vale confirmar na Resolução CEPRAM vigente e no site do município se a atividade está habilitada ali.' },
    ]),
    pLink([
      { text: 'Outro ponto de atrito é o lançamento de efluentes e a drenagem. Mesmo em empreendimento de competência municipal, o lançamento de efluente tratado em corpo hídrico depende de outorga do INEMA, e a ligação à rede da EMBASA depende de anuência da concessionária, com padrão de lançamento próprio. O artigo sobre ' },
      { text: 'outorga de recursos hídricos', link: '/blog/outorga-recursos-hidricos-inema-bahia-captacao' },
      { text: ' detalha essa interface. Projetos que chegam à prefeitura sem definir o destino do efluente recebem exigência logo na análise prévia.' },
    ]),
    h2('Supressão Vegetal, Fauna e Vizinhança no Rito Municipal'),
    pLink([
      { text: 'Mesmo no licenciamento municipal, a supressão de vegetação nativa em estágio médio ou avançado de Mata Atlântica depende de autorização com base na Lei nº 11.428/2006, com inventário florestal e, conforme o porte, ' },
      { text: 'resgate de fauna', link: '/blog/resgate-fauna-supressao-vegetal-requisitos-inema' },
      { text: '. Em bairros consolidados, a prefeitura costuma exigir ainda o Estudo de Impacto de Vizinhança (EIV), previsto no Estatuto da Cidade, com análise de tráfego, sombreamento, ventilação e infraestrutura. Integrar os três estudos, ambiental, florestal e urbanístico, em um único cronograma evita que a licença de um trave o outro. Em loteamentos, o desenho de ' },
      { text: 'corredores ecológicos', link: '/blog/corredores-ecologicos-planejamento-loteamentos-residenciais' },
      { text: ' ao longo das APPs acelera a aprovação e valoriza o produto.' },
    ]),
    h3('O que a Anjos Brandão faz no licenciamento municipal'),
    pLink([
      { text: 'Fazemos a consulta de enquadramento de competência, o levantamento das APPs com topografia e hidrografia em SIRGAS 2000, o estudo ambiental no formato exigido pela prefeitura e a articulação com o INEMA quando parte do processo permanece estadual. Se o seu empreendimento está em Salvador ou na Região Metropolitana, ' },
      { text: 'fale com a nossa equipe', link: '/#contato' },
      { text: ' antes do protocolo.' },
    ]),
  ],
  seo: {
    metaTitle: 'Licenciamento Municipal e APP Urbana em Salvador e RMS',
    metaDescription: 'Quando o licenciamento é da prefeitura e não do INEMA, como funciona a SEDUR em Salvador e o que vale para APP em área urbana consolidada na Bahia.',
    keywords: [
      'licenciamento ambiental municipal na bahia',
      'licenciamento ambiental na sedur',
      'app urbana na bahia',
      'lei complementar 140 competência municipal',
      'resolução cepram 4327 impacto local',
      'app área urbana consolidada código florestal',
      'consultoria ambiental salvador',
    ],
  },
}
