import { p, h2, h3, bullet, callout, pLink, DEFAULT_AUTHOR } from './enrich-helpers.mjs'

// ==========================================
// ARTIGO 34: COP31 em Antalya e o calendário do SBCE (Portaria SEMC/MF 3.199/2026)
// ==========================================
export const POST_34 = {
  _id: 'post-34',
  title: 'COP31 em Antalya e a Portaria 3.199/2026: o Calendário do Mercado Regulado de Carbono para Empresas na Bahia',
  slug: 'cop31-antalya-sbce-portaria-3199-mercado-carbono-bahia',
  excerpt: 'A COP31 começou em 9 de novembro e o SBCE já tem calendário: o primeiro grupo de setores entrega plano de monitoramento em 2027. Veja o que muda na Bahia.',
  publishedAt: '2026-11-10T10:00:00Z',
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: '/images/blog/post-34-cop31-sbce-mercado-carbono-bahia.webp',
  mainImageAlt: 'Complexo industrial à beira-mar ao entardecer, com unidades de processo, tanques e linhas de transmissão, em polo industrial no litoral da Bahia',
  mainImageCaption: 'Instalações industriais acima de 10 mil toneladas de CO2 equivalente por ano entram no cronograma de monitoramento e relato do SBCE.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [4, 0], // ESG & Compliance, Licenciamento Ambiental
  body: [
    pLink([
      { text: 'A ' },
      { text: 'COP31', strong: true },
      { text: ', a 31ª Conferência das Partes da Convenção-Quadro das Nações Unidas sobre Mudança do Clima, começou em 9 de novembro de 2026 em Antalya, na Turquia, e vai até o dia 20. Na abertura, o embaixador André Corrêa do Lago transmitiu a presidência da conferência, exercida pelo Brasil desde a COP30 em Belém, ao ministro turco Murat Kurum. Para as empresas, a notícia mais concreta da semana não veio de Antalya, e sim do Diário Oficial da União: a Portaria SEMC/MF nº 3.199, de 28 de outubro de 2026, publicada no dia 29, fixou o calendário de monitoramento, relato e verificação de emissões do Sistema Brasileiro de Comércio de Emissões de Gases de Efeito Estufa (SBCE). O primeiro grupo de setores começa em 2027.' },
    ]),
    pLink([
      { text: 'Este artigo resume o que a COP31 discute, o que a portaria determina e o que uma indústria, uma mineradora ou um fornecedor de grande empresa na Bahia deve fazer nos próximos meses. As obrigações de inventário, os escopos de emissão e a pressão da Resolução CVM nº 193/2023 sobre fornecedores estão detalhados no artigo sobre ' },
      { text: 'inventário de gases de efeito estufa, SBCE e CVM 193', link: '/blog/inventario-gases-efeito-estufa-sbce-lei-15042-cvm-193-bahia' },
      { text: '.' },
    ]),
    callout('info', 'COP31 em números', 'Sede: Antalya, Turquia. Período: 9 a 20 de novembro de 2026. Presidência: Turquia, com o ministro Murat Kurum. Cúpula de líderes: 11 e 12 de novembro. O Brasil, que presidiu a COP30 em Belém em novembro de 2025, entregou à nova presidência dois mapas do caminho, um sobre a transição para longe dos combustíveis fósseis e outro sobre o fim do desmatamento até 2030.'),
    h2('O que a COP31 Discute e o que Vem da COP30'),
    pLink([
      { text: 'A COP30 encerrou a fase de regras do Acordo de Paris e abriu a fase de implementação. O legado que o Brasil levou a Antalya são dois documentos chamados de mapas do caminho: um orienta a transição para longe dos combustíveis fósseis nos sistemas de energia, de forma justa, ordenada e equitativa, com meta de emissões líquidas zero em 2050; o outro reúne medidas para interromper e reverter o desmatamento e a degradação florestal até 2030. Segundo a própria presidência brasileira, os mapas não criam obrigações novas nem têm caráter vinculante. Eles organizam decisões que os países já aprovaram e servem de referência para os planos nacionais.' },
    ]),
    pLink([
      { text: 'Na pauta de Antalya estão o financiamento climático, a adaptação e a integração entre as três convenções ambientais da ONU, clima, biodiversidade e desertificação. O governo brasileiro também busca novos aportes para o Fundo Florestas Tropicais para Sempre (TFFF), lançado em Belém. Nada disso altera de imediato a legislação brasileira, mas define o ambiente em que bancos, seguradoras, compradores internacionais e investidores avaliam empresas brasileiras. A Contribuição Nacionalmente Determinada do Brasil, apresentada em 2024, prevê reduzir as emissões líquidas entre 59% e 67% até 2035 em relação a 2005, e o SBCE é o instrumento que leva essa meta para dentro das indústrias.' },
    ]),
    h2('Portaria SEMC/MF nº 3.199/2026: o Calendário do SBCE'),
    pLink([
      { text: 'A Lei nº 15.042/2024 criou o SBCE e definiu dois patamares de obrigação. Operadores de instalações que emitem mais de ' },
      { text: '10 mil toneladas de CO2 equivalente por ano', strong: true },
      { text: ' devem apresentar plano de monitoramento e relato anual de emissões e remoções. Acima de 25 mil toneladas por ano, somam-se a conciliação periódica de obrigações, isto é, a entrega de cotas equivalentes às emissões. Faltava o calendário. A Portaria SEMC/MF nº 3.199/2026, da Secretaria Extraordinária do Mercado de Carbono do Ministério da Fazenda, organiza as obrigações de mensuração, relato e verificação em três momentos para cada etapa setorial:' },
    ]),
    bullet('Primeiro ano da etapa (A1): apresentação do plano de monitoramento da instalação.'),
    bullet('Segundo ano (A2): mensuração das emissões e remoções conforme o plano aprovado.'),
    bullet('A partir do terceiro ano (A3): mensuração contínua e entrega do relatório verificado do ano anterior.'),
    pLink([
      { text: 'O primeiro grupo de setores começa em 2027. Os grupos seguintes têm início previsto até 2029 e até 2031. Conteúdo, formato e prazos de entrega ainda serão detalhados em atos próprios, com antecedência mínima prevista na própria portaria. O enquadramento não é automático pelo CNAE: a portaria manda considerar as atividades, fontes e instalações efetivamente abrangidas. A portaria também não fixa, por enquanto, limites individuais de emissão nem obriga a compra de créditos. Ela organiza a fase de medição, que é a base de tudo o que vem depois.' },
    ]),
    callout('alert', 'Medir antes de concluir que está fora', 'Caldeiras a óleo ou gás natural, fornos, geradores a diesel, frota própria, tratamento de efluentes e processos químicos podem somar 10 mil tCO2e por ano em uma única planta. A empresa que se declara abaixo do limite sem inventário documentado assume o risco de descobrir o contrário na primeira fiscalização ou no primeiro questionário de cliente.'),
    h2('O que Muda para Empresas na Bahia'),
    pLink([
      { text: 'A Bahia concentra instalações que estão no centro do SBCE: o Polo Industrial de Camaçari, com química, petroquímica e celulose, a refinaria e os terminais da Baía de Todos os Santos, a mineração no interior, as cimenteiras e as termelétricas. A Política Estadual sobre Mudança do Clima, instituída pela Lei Estadual nº 12.050/2011, já previa o inventário de emissões do estado. Com o SBCE, o dado deixa de ser um compromisso voluntário e passa a ser obrigação federal, com relato verificado por terceira parte e sanção administrativa para quem descumprir.' },
    ]),
    pLink([
      { text: 'O efeito alcança também empresas menores. Transportadoras, empreiteiras, fornecedores de insumos e prestadores de serviço de grandes operadores passam a receber pedidos de dados de emissão, porque o escopo 3 do cliente é formado pelas emissões dos fornecedores. Quem já organiza dados de combustível, energia e resíduos para o ' },
      { text: 'Relatório Anual de Atividades do IBAMA', link: '/blog/tcfa-ctf-rapp-ibama-obrigacoes-federais-bahia' },
      { text: ' e para o ' },
      { text: 'monitoramento de emissões atmosféricas', link: '/blog/emissoes-atmosfericas-ruido-monitoramento-conama-491-nbr-10151' },
      { text: ' tem metade do trabalho pronto. O inventário usa os mesmos registros, com metodologia própria.' },
    ]),
    h2('Comunicação Ambiental Durante a COP: o que se Pode Afirmar'),
    pLink([
      { text: 'Semanas de COP aumentam a publicação de anúncios e relatórios com promessas climáticas. Em 2026, o CONAR atualizou os arts. 36-A e 36-B e o Anexo U do Código Brasileiro de Autorregulamentação Publicitária, que exigem precisão nas afirmações socioambientais, inclusive a distinção entre redução, remoção e compensação de emissões. Os arts. 36 a 38 do Código de Defesa do Consumidor já obrigavam o anunciante a manter os dados que sustentam a mensagem. Inventariar emissões não comprova redução, e comprar crédito de carbono não equivale a reduzir a própria emissão.' },
    ]),
    bullet('Afirmação de redução precisa de inventário de ano-base e de ano corrente, com a mesma metodologia.'),
    bullet('Afirmação de neutralidade precisa indicar o que foi reduzido, o que foi compensado e com quais créditos.'),
    bullet('Meta de longo prazo precisa de plano com ações, investimentos e marcos intermediários.'),
    bullet('Selo ou certificação precisa identificar o organismo emissor e o escopo coberto.'),
    pLink([
      { text: 'A ' },
      { text: 'governança ESG', link: '/blog/governanca-esg-mitigacao-riscos-ambientais' },
      { text: ' bem estruturada reduz esse risco porque a área de comunicação passa a publicar apenas o que a área técnica consegue provar.' },
    ]),
    h2('Plano de Ação para os Próximos 12 Meses'),
    bullet('Mapear as fontes de emissão de cada instalação e estimar se alguma passa de 10 mil tCO2e por ano.'),
    bullet('Montar o inventário do ano civil de 2026 com documento de origem para cada dado: nota de combustível, conta de energia, manifesto de resíduos.'),
    bullet('Verificar se o setor da empresa está no primeiro grupo da Portaria SEMC/MF nº 3.199/2026 e acompanhar os atos complementares.'),
    bullet('Preparar o plano de monitoramento no formato que o órgão gestor vier a definir, com responsáveis, frequência e equipamentos de medição.'),
    bullet('Escolher organismo de verificação acreditado pelo Inmetro com antecedência, porque a demanda vai crescer.'),
    bullet('Revisar anúncios, relatórios e respostas a clientes com base no inventário, e não em estimativas.'),
    h3('O que a Anjos Brandão faz pela sua empresa'),
    pLink([
      { text: 'Nossa equipe estrutura o inventário de emissões a partir dos registros ambientais que a empresa já mantém, avalia o enquadramento no SBCE e no calendário da portaria e prepara o plano de monitoramento. Se um cliente pediu seus dados de emissão ou se a sua planta pode estar no primeiro grupo de 2027, ' },
      { text: 'fale com a equipe técnica da Anjos Brandão', link: '/#contato' },
      { text: ' e comece pelo diagnóstico.' },
    ]),
  ],
  seo: {
    metaTitle: 'COP31 e SBCE: Calendário da Portaria 3.199/2026 na Bahia',
    metaDescription: 'A COP31 começou em Antalya e a Portaria SEMC/MF 3.199/2026 fixou o calendário do SBCE a partir de 2027. Veja o que empresas na Bahia devem preparar.',
    keywords: [
      'cop31',
      'portaria 3.199/2026 sbce',
      'mercado regulado de carbono',
      'plano de monitoramento de emissões',
      'lei 15.042/2024',
      'inventário de emissões bahia',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 35: Queima controlada suspensa na Bahia (Portaria INEMA 35.277/2026)
// ==========================================
export const POST_35 = {
  _id: 'post-35',
  title: 'Queima Controlada Suspensa na Bahia até 31 de Dezembro: o que a Portaria INEMA nº 35.277/2026 Proíbe e Como Evitar Autuação',
  slug: 'queima-controlada-suspensa-bahia-portaria-inema-35277-dqc',
  excerpt: 'O INEMA suspendeu a Declaração de Queima Controlada até 31/12/2026. Veja o que a portaria proíbe, as multas por hectare e como proteger o imóvel e a obra.',
  publishedAt: '2026-11-10T10:00:00Z',
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: '/images/blog/post-35-queima-controlada-suspensa-bahia.webp',
  mainImageAlt: 'Pastagem seca no interior da Bahia com aceiro de terra exposta separando a área de um remanescente de vegetação nativa, sob céu claro de estiagem',
  mainImageCaption: 'Aceiro entre pastagem seca e vegetação nativa, medida básica de prevenção no período de suspensão da queima controlada.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [3, 2], // Fauna e Flora, Inventário & ASV
  body: [
    pLink([
      { text: 'A ' },
      { text: 'queima controlada na Bahia', strong: true },
      { text: ' está suspensa em todo o estado até 31 de dezembro de 2026. A Portaria INEMA nº 35.277, publicada no Diário Oficial do Estado em 4 de setembro, suspende a emissão de novas Declarações de Queima Controlada (DQC) e interrompe os efeitos das que já haviam sido emitidas, nas condições e com as exceções previstas no próprio texto. Em 5 de novembro, o Comitê Estadual de Prevenção e Combate aos Incêndios Florestais, do programa Bahia Sem Fogo, manteve a restrição diante da previsão de calor acima da média e de chuvas irregulares até janeiro de 2027.' },
    ]),
    pLink([
      { text: 'Para o produtor rural, a consequência é direta: qualquer uso de fogo em pastagem, palhada ou limpeza de área nesse período é feito sem autorização, e o uso de fogo sem autorização é infração administrativa com multa por hectare. Para empreendimentos com supressão de vegetação, canteiros de obra e parques de energia no interior, o risco é outro: um incêndio que começa na área do empreendimento, ou que a atravessa, gera responsabilidade civil e pode paralisar a licença.' },
    ]),
    callout('info', 'O cenário que motivou a suspensão', 'Segundo o INEMA, outubro de 2026 teve temperaturas acima de 40 °C em boa parte do centro-oeste baiano, com máxima de 41,8 °C em Rio do Pires, e chuva concentrada na última semana do mês. A previsão sazonal para novembro de 2026 a janeiro de 2027 indica chuvas na média ou abaixo dela nas faixas leste, centro-sul e oeste, e temperaturas acima da média em todo o estado. O centro-norte e o nordeste baianos estão fora do período chuvoso.'),
    h2('O que é a Declaração de Queima Controlada na Bahia'),
    pLink([
      { text: 'O art. 38 do Código Florestal, a Lei nº 12.651/2012, proíbe o uso de fogo na vegetação. A exceção principal é o emprego do fogo em práticas agropastoris ou florestais em locais cujas peculiaridades o justifiquem, mediante aprovação prévia do órgão estadual de meio ambiente. A Lei nº 14.944/2024, que instituiu a Política Nacional de Manejo Integrado do Fogo, manteve a lógica: queima controlada é uso planejado do fogo, com objetivo definido, em área delimitada e sob autorização. Na Bahia, essa autorização é a DQC, emitida pelo INEMA, que estabelece as condições técnicas da queima: área, período, horário, aceiros, equipe e medidas de segurança.' },
    ]),
    pLink([
      { text: 'Com a portaria, essas condições deixam de existir até o fim do ano. Uma DQC emitida antes de setembro não autoriza a queima agora. Quem precisar de exceção deve conferir as hipóteses previstas no texto publicado no DOE antes de qualquer ação, e manter a decisão documentada.' },
    ]),
    h2('Multas e Responsabilidade pelo Uso Irregular do Fogo'),
    pLink([
      { text: 'O Decreto nº 6.514/2008, art. 58, prevê multa de ' },
      { text: 'R$ 1.000,00 por hectare ou fração', strong: true },
      { text: ' para quem faz uso de fogo em áreas agropastoris sem autorização do órgão competente ou em desacordo com a autorização obtida. Se o fogo atinge mata ou floresta, a conduta pode ser enquadrada no art. 41 da Lei nº 9.605/1998, que prevê reclusão de 2 a 4 anos e multa para quem provoca incêndio, e detenção de 6 meses a 1 ano na forma culposa. Quando a área queimada é Área de Preservação Permanente, Reserva Legal ou unidade de conservação, somam-se as infrações próprias dessas áreas e a obrigação de recuperar.' },
    ]),
    pLink([
      { text: 'A responsabilidade civil pelo dano ambiental é objetiva e independe de culpa, nos termos do art. 14, § 1º, da Lei nº 6.938/1981, e a obrigação de recompor a vegetação acompanha o imóvel. Na esfera administrativa, o Código Florestal exige que a autoridade comprove o nexo de causalidade entre a ação do proprietário ou de seu preposto e o dano. Por isso, registros de prevenção, como aceiros mantidos, brigada treinada, comunicação de focos e boletins de ocorrência, fazem diferença na defesa de quem teve a área atingida por fogo vindo de fora.' },
    ]),
    callout('alert', 'Queimar restos de supressão também é proibido', 'A Lei nº 12.305/2010, art. 47, proíbe a queima de resíduos sólidos a céu aberto ou em instalações não licenciadas para essa finalidade. Galhada, tocos e restos de vegetação de uma supressão autorizada devem ter o destino previsto na ASV e no plano de supressão, como aproveitamento do material lenhoso, trituração ou incorporação ao solo. A ASV não autoriza o uso de fogo.'),
    h2('Empreendimentos em Obra e Supressão de Vegetação'),
    pLink([
      { text: 'Parques solares e eólicos, linhas de transmissão, loteamentos e mineração no interior da Bahia operam em áreas de Caatinga e Cerrado onde o fogo se propaga com facilidade na estiagem. A ' },
      { text: 'Autorização de Supressão de Vegetação', link: '/blog/inventario-florestal-asv-supressao-vegetal-segura' },
      { text: ' e a licença de instalação costumam trazer condicionantes de prevenção de incêndio, como aceiros, brigada e plano de emergência. Um incêndio na área do empreendimento pode atingir vegetação que deveria ser preservada, matar fauna que ainda não foi resgatada e gerar notificação por descumprimento de condicionante.' },
    ]),
    bullet('Manter aceiros limpos nos limites com vegetação nativa, com largura definida conforme o risco da área e o vento predominante.'),
    bullet('Proibir fogueiras, queima de lixo e uso de maçarico sem permissão de trabalho a quente no canteiro.'),
    bullet('Treinar brigada própria, equipada para o primeiro combate, e registrar os simulados com data, participantes e tempo de resposta.'),
    bullet('Definir o fluxo de comunicação de foco: quem aciona o Corpo de Bombeiros, o INEMA e a prefeitura, e em quanto tempo.'),
    bullet('Acompanhar os focos de calor do INPE na região da obra e suspender atividades de risco em dias de umidade baixa e vento forte.'),
    pLink([
      { text: 'Em obras com ' },
      { text: 'resgate de fauna durante a supressão', link: '/blog/resgate-fauna-supressao-vegetal-requisitos-inema' },
      { text: ', o fogo é um risco adicional para os animais que ainda estão na frente de trabalho. O ' },
      { text: 'plano de emergência', link: '/blog/plano-emergencia-individual-pei-pae-bahia-inema' },
      { text: ' do empreendimento deve tratar incêndio florestal como cenário próprio, e não apenas incêndio em instalação.' },
    ]),
    h2('Imóvel Rural: CEFIR, Embargo e Crédito'),
    pLink([
      { text: 'A área queimada sem autorização pode ser embargada, e o embargo passa a constar em listas públicas consultadas por bancos e compradores de terra. Se o fogo atingir Reserva Legal ou APP, a recomposição entra no passivo do imóvel e precisa aparecer no ' },
      { text: 'CEFIR, o CAR da Bahia', link: '/blog/cefir-car-bahia-imovel-rural-asv-reserva-legal' },
      { text: '. Para quem depende de crédito rural ou pretende vender ou arrendar a área para energia, um auto de infração por uso de fogo pesa na análise de risco por anos. A ' },
      { text: 'compensação e a recomposição de Reserva Legal', link: '/blog/compensacao-ambiental-inema-reserva-legal-tcra' },
      { text: ' custam mais do que a prevenção.' },
    ]),
    bullet('Fazer a limpeza de pastagem por meios mecânicos enquanto a suspensão estiver em vigor.'),
    bullet('Manter aceiros nas divisas com vizinhos e com áreas de vegetação nativa.'),
    bullet('Registrar com fotos datadas e boletim de ocorrência qualquer fogo vindo de fora da propriedade.'),
    bullet('Planejar o pedido de DQC para 2027 com antecedência, já que a liberação depende da avaliação climática do INEMA.'),
    h3('O que a Anjos Brandão faz pelo seu imóvel e pela sua obra'),
    pLink([
      { text: 'Elaboramos planos de prevenção e combate a incêndios florestais para empreendimentos, revisamos condicionantes de ASV e de licença de instalação e defendemos autuações por uso de fogo com base no nexo de causalidade. Se a sua área está em região de risco, se a sua obra precisa se adequar à suspensão da queima controlada na Bahia ou se você recebeu notificação, ' },
      { text: 'fale com a equipe técnica da Anjos Brandão', link: '/#contato' },
      { text: ' antes do próximo período seco.' },
    ]),
  ],
  seo: {
    metaTitle: 'Queima Controlada Suspensa na Bahia: Portaria INEMA 35.277',
    metaDescription: 'O INEMA suspendeu a Declaração de Queima Controlada até 31/12/2026. Entenda a portaria, a multa de R$ 1.000 por hectare e como prevenir autuação.',
    keywords: [
      'queima controlada na bahia',
      'portaria inema 35.277',
      'declaração de queima controlada',
      'uso de fogo sem autorização multa',
      'bahia sem fogo',
      'prevenção de incêndio florestal em obras',
      'consultoria ambiental bahia',
    ],
  },
}

// ==========================================
// ARTIGO 36: Lei Geral do Licenciamento (15.190/2025), um ano e o julgamento no STF
// ==========================================
export const POST_36 = {
  _id: 'post-36',
  title: 'Lei Geral do Licenciamento Ambiental em Vigor e em Julgamento no STF: o que Vale Hoje para Empresas na Bahia',
  slug: 'lei-geral-licenciamento-15190-stf-adi-empresas-bahia',
  excerpt: 'A Lei 15.190/2025 está em vigor e nenhum dispositivo foi suspenso, mas o STF julga cinco ações contra ela. Veja o que vale hoje e como licenciar com segurança.',
  publishedAt: '2026-11-10T10:00:00Z',
  estimatedReadTime: 10,
  featured: false,
  mainImageUrl: '/images/blog/post-36-lei-geral-licenciamento-stf.webp',
  mainImageAlt: 'Vista aérea de obra de terraplenagem ao lado de remanescente de Mata Atlântica preservado, no litoral norte da Bahia',
  mainImageCaption: 'Empreendimento em implantação ao lado de vegetação preservada: o procedimento de licenciamento escolhido define os estudos e as condicionantes.',
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0, 4], // Licenciamento Ambiental, ESG & Compliance
  body: [
    pLink([
      { text: 'A ' },
      { text: 'Lei Geral do Licenciamento Ambiental', strong: true },
      { text: ', a Lei nº 15.190/2025, foi sancionada em 8 de agosto de 2025, produz efeitos desde fevereiro de 2026 e está em julgamento no Supremo Tribunal Federal. Cinco ações questionam dispositivos da lei e da Lei nº 15.300/2025, que trata da Licença Ambiental Especial: as ADIs 7.913, 7.916, 7.919 e 8.007 e a ADC 102. Até esta data, nenhuma decisão cautelar suspendeu qualquer dispositivo. Em 6 de novembro de 2026, a Associação Brasileira dos Membros do Ministério Público de Meio Ambiente (ABRAMPA), o PSOL e a Articulação dos Povos Indígenas do Brasil pediram que o julgamento saia do plenário virtual e seja feito em sessão presencial.' },
    ]),
    pLink([
      { text: 'Para quem tem processo no INEMA ou em prefeitura baiana, a pergunta prática é qual regra usar. A resposta curta: a lei vale e deve ser aplicada, mas uma decisão do STF pode alterar dispositivos centrais, e o projeto precisa ser montado para resistir aos dois cenários.' },
    ]),
    callout('info', 'Linha do tempo da Lei 15.190/2025', '8/8/2025: sanção com 63 dispositivos vetados. 27/11/2025: o Congresso Nacional derruba 52 vetos, entre eles os que tratam da dispensa de licenciamento, da Licença por Adesão e Compromisso e da autonomia de estados e municípios; os vetos sobre a Licença Ambiental Especial ficam para a análise da MP 1.308/2025, convertida na Lei nº 15.300/2025. 8/12/2025: promulgação dos trechos restabelecidos. Fevereiro de 2026: início dos efeitos. Novembro de 2026: julgamento das ações no STF em discussão.'),
    h2('O que a Lei Geral do Licenciamento Ambiental Mudou'),
    pLink([
      { text: 'A Lei nº 15.190/2025 é a primeira norma geral federal sobre licenciamento ambiental, matéria que até então se apoiava na Lei nº 6.938/1981, na Lei Complementar nº 140/2011 e nas Resoluções CONAMA nº 001/1986 e nº 237/1997. Ela organiza as licenças por procedimento e por porte e potencial poluidor da atividade:' },
    ]),
    bullet('Licença Prévia, Licença de Instalação e Licença de Operação, no procedimento trifásico, mantidas para atividades de maior impacto.'),
    bullet('Licença Ambiental Única (LAU), que autoriza instalação e operação em uma só etapa.'),
    bullet('Licença por Adesão e Compromisso (LAC), emitida a partir de declaração do empreendedor de que cumpre requisitos fixados previamente pela autoridade licenciadora.'),
    bullet('Licença de Operação Corretiva (LOC), para regularizar atividade que operava sem licença válida na data da lei.'),
    bullet('Licença Ambiental Especial (LAE), para empreendimentos considerados estratégicos, regulada pela Lei nº 15.300/2025.'),
    pLink([
      { text: 'Pelo art. 22, a LAC pode ser usada por atividade de pequeno ou médio porte e baixo ou médio potencial poluidor, quando as características da região, os impactos e as medidas de controle forem conhecidos previamente. A lista de atividades que podem usar a LAC é definida por ato do ente federativo competente, nos termos da LC nº 140/2011, e a autoridade licenciadora deve fazer vistorias anuais por amostragem. Na Bahia, a LAC já existia na legislação estadual para atividades de menor impacto, e a ' },
      { text: 'Licença Unificada e o RAP', link: '/blog/licenca-unificada-lu-rap-inema-bahia-prazos' },
      { text: ' já cumpriam papel parecido com o da LAU. A lei federal amplia o alcance desses instrumentos, mas a aplicação concreta depende dos atos do CEPRAM e do INEMA.' },
    ]),
    h2('O que Está em Discussão no STF'),
    pLink([
      { text: 'Só a ADI 7.919, ajuizada pelo PSOL e pela Apib, impugna cerca de 130 dispositivos da Lei nº 15.190/2025 e 19 da Lei nº 15.300/2025. Segundo a ABRAMPA, admitida como interessada no processo, os pontos de maior risco são: a extensão da LAC a empreendimentos de médio potencial poluidor; o rol fechado de atividades sujeitas a licenciamento e a dispensa da agropecuária; a vedação de condicionantes para impactos indiretos; a renovação automática de licenças; a redução da participação da Funai, da Fundação Palmares, do Iphan e dos gestores de unidades de conservação; e o fim da anuência prévia para supressão de vegetação da Mata Atlântica nos casos em que a lei anterior a exigia.' },
    ]),
    pLink([
      { text: 'Há também uma ação favorável à lei. A ADI 8.007, proposta pela Associação Brasileira de Entidades Estaduais de Meio Ambiente (Abema) e pela Assembleia Legislativa de Goiás, defende a constitucionalidade dos pilares da lei, incluindo as hipóteses de dispensa, a LAC e a autonomia dos entes federados, e pede interpretação conforme a Constituição em pontos específicos. O próprio STF já decidiu, em julgamentos anteriores sobre leis estaduais, que o licenciamento por adesão e compromisso é compatível com a Constituição quando restrito a atividades de baixo impacto, e esse precedente pesa sobre a extensão da LAC para o médio potencial poluidor.' },
    ]),
    callout('alert', 'Ação no STF não suspende a lei', 'Ajuizar uma ADI não suspende a norma. Enquanto o STF não decidir, a Lei nº 15.190/2025 é válida e deve ser cumprida. Recomendações do Ministério Público para não aplicar a lei, como a expedida em Sergipe, não têm força de decisão judicial. Mas uma decisão futura pode ter efeitos sobre licenças emitidas com base nos dispositivos contestados, e quem depende deles deve medir esse risco antes de investir.'),
    h2('Como os Estados Estão Aplicando a Lei'),
    pLink([
      { text: 'A aplicação é desigual. São Paulo, Rio Grande do Sul e Tocantins editaram atos que incorporam a lei a seus procedimentos. Minas Gerais publicou o Decreto nº 49.298, de 22 de outubro de 2026, com regras de transição. Municípios como Santo André, em São Paulo, também revisaram suas normas. Outros órgãos ainda não adaptaram fluxos internos. Para a Bahia, o ponto de atenção é o enquadramento: a lei federal remete ao ente competente a definição das atividades sujeitas a cada procedimento, e o ' },
      { text: 'licenciamento ambiental no INEMA', link: '/blog/guia-licenciamento-ambiental-inema-bahia' },
      { text: ' continua regido pela Lei Estadual nº 10.431/2006, pelo Decreto Estadual nº 14.024/2012 e pelas resoluções do CEPRAM, naquilo que for compatível com a norma geral. No ' },
      { text: 'licenciamento municipal em Salvador e na Região Metropolitana', link: '/blog/licenciamento-ambiental-municipal-app-urbana-salvador-rms' },
      { text: ', vale o mesmo raciocínio para as normas de cada prefeitura.' },
    ]),
    h2('Como Aplicar a Lei Geral do Licenciamento Ambiental Enquanto o STF Não Decide'),
    pLink([
      { text: 'A estratégia que protege o empreendedor é usar os ganhos de prazo e de procedimento da lei sem apostar o projeto inteiro em dispositivos contestados. Na prática:' },
    ]),
    bullet('Enquadrar a atividade nas listas do INEMA ou do município e registrar por escrito o fundamento do procedimento escolhido.'),
    bullet('Usar a LAC ou a LAU quando cabíveis, mas manter estudos ambientais proporcionais ao impacto real, que sustentem a licença se o procedimento for questionado.'),
    bullet('Manter a certidão municipal de uso do solo e a outorga de recursos hídricos no processo, mesmo quando a lei não as exigir como condição da licença. Elas protegem o projeto contra questionamentos urbanísticos e de uso da água.'),
    bullet('Tratar impactos indiretos e cumulativos relevantes no planejamento, mesmo que não virem condicionante, porque continuam gerando responsabilidade civil.'),
    bullet('Em renovação de Licença de Operação, conferir se a hipótese de renovação simplificada se aplica e manter o relatório de cumprimento de condicionantes em dia.'),
    bullet('Em contratos de compra, financiamento e arrendamento, prever o que acontece se o STF alterar a regra que fundamentou a licença.'),
    pLink([
      { text: 'Para atividades em operação sem licença, a LOC abre caminho para regularização. Os prazos e documentos da ' },
      { text: 'renovação da Licença de Operação', link: '/blog/renovacao-licenca-operacao-lo-prazos-documentos-inema' },
      { text: ' e as exigências do ' },
      { text: 'EIA/RIMA e da audiência pública', link: '/blog/eia-rima-audiencia-publica-inema-bahia-licenca-previa' },
      { text: ' continuam relevantes, porque a lei nova não dispensa estudo de impacto para empreendimentos de significativo impacto ambiental, exigido pelo art. 225, § 1º, inciso IV, da Constituição.' },
    ]),
    h3('O que a Anjos Brandão faz pelo seu licenciamento'),
    pLink([
      { text: 'Fazemos o enquadramento do empreendimento na Lei nº 15.190/2025 e nas normas do INEMA e do município, avaliamos o risco de cada procedimento diante das ações no STF e conduzimos o processo com documentação que sustente a licença em qualquer cenário. Se o seu projeto está para protocolar ou se a sua licença foi emitida pelas novas regras, ' },
      { text: 'fale com a equipe técnica da Anjos Brandão', link: '/#contato' },
      { text: ' e revise a estratégia antes do julgamento.' },
    ]),
  ],
  seo: {
    metaTitle: 'Lei Geral do Licenciamento 15.190/2025 e o STF: o que Vale',
    metaDescription: 'A Lei 15.190/2025 está em vigor e o STF julga cinco ações contra ela. Veja LAC, LAU, LOC e LAE, o que está em jogo e como licenciar na Bahia com segurança.',
    keywords: [
      'lei geral do licenciamento ambiental',
      'lei 15.190/2025 stf',
      'licença por adesão e compromisso',
      'adi 7919',
      'licenciamento ambiental bahia 2026',
      'licença ambiental única',
      'consultoria ambiental bahia',
    ],
  },
}
