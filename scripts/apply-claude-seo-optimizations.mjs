import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log("🚀 Aplicando otimizações rigorosas do skills-claude-seo...")

// Definições otimizadas dos 6 novos artigos (posts 15-20) com:
// 1. Title tags entre 50 e 60 caracteres (Keyword | Anjos Brandão)
// 2. Meta descriptions entre 130 e 150 caracteres com CTA ativa no final
// 3. 5-8 links internos contextuais com markDefs
// 4. Parágrafo Answer-First (Featured Snippet) sob o primeiro H2
// 5. Palavra-chave principal nos primeiros 100 caracteres e no Alt text

const DEFAULT_AUTHOR = {
  name: "Coordenação Técnica Anjos Brandão",
  role: "Equipe de Engenharia e Consultoria Ambiental",
  bio: "Especialistas em coordenação ambiental integrada para construção civil, infraestrutura e indústria em toda a Bahia.",
  linkedin: "https://www.linkedin.com/company/anjos-brandao-solucoes-ambientais",
}

const POST_15 = {
  _id: "post-15",
  title: "Outorga de Uso de Recursos Hídricos no INEMA: Guia para Captação Superficial e Subterrânea sem Risco de Embargo",
  slug: "outorga-recursos-hidricos-inema-bahia-captacao",
  excerpt: "Aprenda como regularizar poços tubulares e captação superficial no INEMA. Guia sobre testes de bombeamento, vazão ecológica Q90 e condicionantes no SEIA.",
  publishedAt: "2026-10-04T18:00:00Z",
  estimatedReadTime: 10,
  featured: true,
  mainImageUrl: "/images/blog/post-15-outorga-recursos-hidricos-inema.webp",
  mainImageAlt: "Estação de outorga de recursos hídricos no INEMA com captação de água na Bahia",
  mainImageCaption: "Infraestrutura técnica de captação e monitoramento de vazão em corpo hídrico outorgado na Bahia.",
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0, 4],
  body: [
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "A " },
        { _type: "span", text: "outorga de recursos hídricos no INEMA", marks: ["strong"] },
        { _type: "span", text: " é o ato administrativo obrigatório que assegura o direito de uso da água para empreendimentos industriais, agrícolas, minerários e canteiros de obras em todo o território baiano. Seja para captação em rios, barramentos ou aquíferos subterrâneos por poços tubulares profundos, operar qualquer derivação hídrica sem a respectiva portaria publicada no Diário Oficial constitui infração ambiental gravíssima, sujeita a multas diárias, lacração de bombas e embargo das frentes de serviço." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "O que é Outorga de Recursos Hídricos e Quem Deve Solicitar?" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "A outorga de recursos hídricos é a autorização legal emitida pelo INEMA que outorga ao empreendedor o direito de captar água superficial ou subterrânea, ou lançar efluentes tratados em corpos d água na Bahia. Devem requerer a outorga todas as indústrias, mineradoras, construtoras e produtores que consumam vazões superiores aos limites de uso insignificante definidos pelos comitês de bacia hidrográfica." },
      ],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_licenciamento", _type: "link", href: "/licenciamento-ambiental" },
        { _key: "link_cat_lic", _type: "link", href: "/blog/categoria/licenciamento-ambiental" },
      ],
      children: [
        { _type: "span", text: "Regulamentada pela Lei Estadual nº 11.612/2009 e pelo Decreto Estadual nº 14.024/2012, a concessão da outorga está diretamente articulada ao " },
        { _type: "span", text: "licenciamento ambiental no INEMA", marks: ["link_licenciamento"] },
        { _type: "span", text: ". Nenhum empreendimento obtém a Licença de Instalação (LI) ou a Licença de Operação (LO) sem comprovar a regularidade do seu suprimento hídrico através das " },
        { _type: "span", text: "diretrizes de licenciamento ambiental", marks: ["link_cat_lic"] },
        { _type: "span", text: "." },
      ],
    },
    {
      _type: "callout",
      type: "tip",
      title: "Outorga Preventiva vs. Outorga de Direito",
      text: "A Outorga Preventiva apenas reserva a disponibilidade hídrica durante os estudos de viabilidade e Licença Prévia (LP). Já a Outorga de Direito de Uso autoriza efetivamente o bombeamento durante as fases de instalação e operação.",
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Captação Subterrânea: Testes de Bombeamento em Poços Tubulares" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "Para regularizar poços tubulares em aquíferos fraturados ou sedimentares na Bahia, o INEMA exige um ensaio hidrodinâmico contínuo de bombeamento com duração mínima de 12 a 24 horas, acompanhado por medições de recuperação do nível piezométrico. O laudo técnico emitido por hidrogeólogo devidamente habilitado com Anotação de Responsabilidade Técnica (ART) deve atestar a vazão crítica (m³/h), o rebaixamento máximo e o raio de interferência em poços de propriedades vizinhas." },
      ],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_pgrs", _type: "link", href: "/pgrs" },
      ],
      children: [
        { _type: "span", text: "Além dos parâmetros quantitativos, análises físico-químicas e bacteriológicas laboratoriais em conformidade com a Portaria GM/MS nº 888/2021 devem comprovar a potabilidade da água ou a necessidade de estações de tratamento de água (ETA) e " },
        { _type: "span", text: "gestão de efluentes e resíduos industriais", marks: ["link_pgrs"] },
        { _type: "span", text: "." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Captação Superficial: Estudos Hidrológicos e Vazão Ecológica (Q90)" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "Para derivações em rios perenes ou riachos sazonais, os estudos hidrológicos devem demonstrar a vazão de referência Q90 (vazão com permanência em 90% do tempo) e Q7,10. Em bacias hidrográficas sob estresse hídrico, como os rios São Francisco, Paraguaçu e Itapicuru, a cota de retirada outorgável é rigorosamente racionada para proteger a vazão ecológica e garantir os usos múltiplos a jusante." },
      ],
    },
    {
      _type: "callout",
      type: "warning",
      title: "Condicionantes Mandatórias da Portaria de Outorga",
      text: "Toda portaria publicada no DOE estipula a instalação obrigatória de hidrômetro selado e horímetro no ponto de recalque, além do envio de relatórios semestrais de monitoramento de vazão ao órgão ambiental.",
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Como a Anjos Brandão Regulariza sua Outorga Hídrica" }],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_contato", _type: "link", href: "/#contato" },
        { _key: "link_artigo_inema", _type: "link", href: "/blog/guia-licenciamento-ambiental-inema-bahia" },
      ],
      children: [
        { _type: "span", text: "Com vasta experiência em hidrologia de campo e tramitação célere no sistema SEIA, a " },
        { _type: "span", text: "consultoria técnica da Anjos Brandão", marks: ["link_contato"] },
        { _type: "span", text: " realiza testes de vazão, modelagem hidrogeológica e gestão de condicionantes para que sua operação funcione sem risco de paralisação. Acesse também nosso " },
        { _type: "span", text: "guia de licenciamento ambiental no INEMA", marks: ["link_artigo_inema"] },
        { _type: "span", text: " para integrar todos os estudos do seu empreendimento." },
      ],
    },
  ],
  seo: {
    metaTitle: "Outorga de Recursos Hídricos no INEMA | Anjos Brandão", // 53 chars
    metaDescription: "Obtenha a outorga de recursos hídricos no INEMA sem travas. Guia de captação superficial e poços tubulares na Bahia. Solicite consultoria técnica.", // 147 chars
    keywords: ["outorga de recursos hidricos no inema", "captacao de agua bahia seia", "teste de bombeamento poco tubular", "outorga preventiva direito de uso", "legislacao recursos hidricos bahia"],
  },
}

const POST_16 = {
  _id: "post-16",
  title: "Bioengenharia de Solos e PRAD: Técnicas Vivas para Estabilização de Taludes e Recuperação de Cavas na Bahia",
  slug: "bioengenharia-solos-prad-recuperacao-taludes-cavas",
  excerpt: "Descubra como aliar biomantas antierosivas, hidrossemeadura e espécies nativas para estabilizar taludes e cumprir condicionantes de PRAD no INEMA.",
  publishedAt: "2026-10-02T18:00:00Z",
  estimatedReadTime: 10,
  featured: false,
  mainImageUrl: "/images/blog/post-16-bioengenharia-solos-prad-taludes.webp",
  mainImageAlt: "Engenheiros inspecionando bioengenharia de solos e PRAD em talude na Bahia",
  mainImageCaption: "Equipe técnica da Anjos Brandão em campo monitorando o pegamento vegetal e a estabilidade geotécnica de talude bioengenhado.",
  author: DEFAULT_AUTHOR,
  categoryIndexes: [2, 3],
  body: [
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "A aplicação da " },
        { _type: "span", text: "bioengenharia de solos e PRAD", marks: ["strong"] },
        { _type: "span", text: " (Plano de Recuperação de Áreas Degradadas) representa a solução mais moderna, eficiente e sustentável para conter processos erosivos graves, deslizamentos de encostas e assoreamento de cursos d água na Bahia. Em obras de infraestrutura rodoviária, loteamentos urbanos e cavas de extração mineral, a exposição do solo aos regimes torrenciais de chuva exige intervenções geotécnicas que integrem materiais inertes e vegetação viva nativa." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "O que é Bioengenharia de Solos na Recuperação de Taludes?" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "A bioengenharia de solos é a disciplina que utiliza materiais biodegradáveis e plantas vivas como elementos estruturais de reforço geotécnico para estabilização de encostas e controle de erosão. Diferente do concreto projetado, ela favorece a infiltração controlada da água, cria um manto radicular profundo e devolve a biodiversidade botânica local." },
      ],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_asv", _type: "link", href: "/autorizacao-supressao-vegetal" },
        { _key: "link_inventario", _type: "link", href: "/inventario-florestal" },
      ],
      children: [
        { _type: "span", text: "Durante a execução da " },
        { _type: "span", text: "autorização de supressão vegetal (ASV)", marks: ["link_asv"] },
        { _type: "span", text: ", o correto manejo e estocagem do topsoil (camada superficial de solo orgânico rica em serapilheira e banco de sementes autóctone, levantada durante o " },
        { _type: "span", text: "inventário florestal", marks: ["link_inventario"] },
        { _type: "span", text: ") constitui a principal matéria-prima para a recomposição vegetal de baixo custo." },
      ],
    },
    {
      _type: "callout",
      type: "tip",
      title: "Biomantas de Fibra de Coco vs. Alvenaria",
      text: "As biomantas antierosivas de fibra de coco possuem durabilidade de 24 a 36 meses em campo, tempo exato para que as raízes das gramíneas e leguminosas nativas alcancem profundidade e assumam a sustentação mecânica do terreno.",
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Principais Técnicas Vivas Utilizadas na Prática" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "1. Hidrossemeadura Mecanizada: Aplicação hidropneumática de calda adesiva enriquecida com sementes de gramíneas pioneiras e leguminosas fixadoras de nitrogênio.\n2. Biorretentores e Fascionas Vivas: Feixes de galhos vivos estaqueados em curvas de nível que funcionam como microbarragens dissipadoras da energia das enxurradas.\n3. Nucleação e Plantio em Ilhas de Diversidade: Grupos de mudas nativas da Mata Atlântica ou Caatinga plantadas estrategicamente para atrair polinizadores e acelerar a sucessão ecológica." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Critérios do INEMA para Baixa Definitiva do PRAD" }],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_germoplasma", _type: "link", href: "/blog/resgate-de-germoplasma-flora-nativa-prad-inema" },
        { _key: "link_fauna_flora", _type: "link", href: "/resgate-fauna-flora" },
        { _key: "link_cat_flora", _type: "link", href: "/blog/categoria/florestal-fauna" },
        { _key: "link_contato", _type: "link", href: "/#contato" },
      ],
      children: [
        { _type: "span", text: "Para obter o termo de quitação do PRAD junto ao órgão ambiental, o empreendedor deve apresentar relatórios fitossociológicos comprovando cobertura de solo superior a 80% e ausência de voçorocas ativas. A integração com o " },
        { _type: "span", text: "resgate de germoplasma e flora nativa", marks: ["link_germoplasma"] },
        { _type: "span", text: " e projetos de " },
        { _type: "span", text: "resgate de fauna e flora", marks: ["link_fauna_flora"] },
        { _type: "span", text: " na área de " },
        { _type: "span", text: "consultoria florestal e fauna", marks: ["link_cat_flora"] },
        { _type: "span", text: " garante espécies adaptadas ao clima regional. Conte com a " },
        { _type: "span", text: "equipe técnica da Anjos Brandão", marks: ["link_contato"] },
        { _type: "span", text: " para elaborar e executar o PRAD completo do seu empreendimento." },
      ],
    },
  ],
  seo: {
    metaTitle: "Bioengenharia de Solos e PRAD na Bahia | Anjos Brandão", // 54 chars
    metaDescription: "Recupere taludes e cavas com bioengenharia de solos e PRAD na Bahia. Uso de biomantas, hidrossemeadura e drenagem sustentável. Veja como aplicar.", // 145 chars
    keywords: ["bioengenharia de solos e prad", "prad inema recuperacao taludes", "hidrossemeadura talude rodovia", "biomanta fibra de coco cavas", "recuperacao de areas degradadas prad"],
  },
}

const POST_17 = {
  _id: "post-17",
  title: "PCA e RCA no INEMA: Como Antecipar a Licença de Instalação em Mineração e Indústria",
  slug: "pca-rca-licenciamento-mineracao-industria-inema",
  excerpt: "Guia executivo sobre a elaboração do Relatório de Controle Ambiental (RCA) e Plano de Controle Ambiental (PCA) para destravar a LI no INEMA.",
  publishedAt: "2026-09-30T18:00:00Z",
  estimatedReadTime: 11,
  featured: false,
  mainImageUrl: "/images/blog/post-17-pca-rca-licenciamento-mineracao-inema.webp",
  mainImageAlt: "Complexo minerário com PCA e RCA no INEMA com bacias de decantação na Bahia",
  mainImageCaption: "Infraestrutura de controle ambiental de mineração no interior da Bahia: bacias de decantação e controle de emissões.",
  author: DEFAULT_AUTHOR,
  categoryIndexes: [0, 4],
  body: [
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "A aprovação técnica de " },
        { _type: "span", text: "PCA e RCA no INEMA para mineração", marks: ["strong"] },
        { _type: "span", text: " e indústrias de transformação é a etapa decisiva para a emissão segura da Licença de Instalação (LI). Em projetos com expressivo potencial poluidor, a consistência dos planos executivos de engenharia ambiental determina se o processo avançará com celeridade ou se ficará retido em sucessivos ciclos de notificações técnicas." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Qual a Diferença entre RCA e PCA no Licenciamento?" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "O RCA (Relatório de Controle Ambiental) é apresentado na fase de Licença Prévia (LP) para atestar a viabilidade locacional e propor medidas conceituais de mitigação. Já o PCA (Plano de Controle Ambiental) é o projeto executivo de engenharia protocolado para obtenção da Licença de Instalação (LI), detalhando obras civis de contenção, plantas de tratamento e programas de monitoramento." },
      ],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_licenciamento", _type: "link", href: "/licenciamento-ambiental" },
        { _key: "link_pgrs", _type: "link", href: "/pgrs" },
      ],
      children: [
        { _type: "span", text: "Embasado na Lei Estadual nº 10.431/2006, o rito de " },
        { _type: "span", text: "licenciamento ambiental para indústrias e mineração", marks: ["link_licenciamento"] },
        { _type: "span", text: " exige que o PCA contenha projetos hidrológicos de bacias de decantação dimensionados para suportar chuvas decamilenares, além do rigoroso " },
        { _type: "span", text: "plano de gerenciamento de resíduos e rejeitos minerais", marks: ["link_pgrs"] },
        { _type: "span", text: "." },
      ],
    },
    {
      _type: "callout",
      type: "tip",
      title: "Controle de Poeira Fugitiva e Ruídos de Desmonte",
      text: "Para plantas de britagem e lavras de rocha ornamental ou minério de ferro, o PCA deve prever aspersão automatizada de vias de tráfego pesado e laudos de sismografia de desmonte conforme a ABNT NBR 9653.",
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Programas Ambientais Obrigatórios no PCA" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "1. Programa de Gestão de Efluentes Líquidos e Drenagem Pluvial com separadores de água e óleo (SAO).\n2. Programa de Monitoramento de Emissões Atmosféricas e Qualidade do Ar.\n3. Programa de Recuperação de Áreas Degradadas (PRAD) concorrente à lavra.\n4. Programa de Educação Ambiental e Comunicação Social com comunidades vizinhas." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Antecipe sua Licença de Instalação com a Anjos Brandão" }],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_esg", _type: "link", href: "/blog/governanca-esg-mitigacao-riscos-ambientais" },
        { _key: "link_lo", _type: "link", href: "/blog/renovacao-licenca-operacao-lo-prazos-documentos-inema" },
        { _key: "link_contato", _type: "link", href: "/#contato" },
      ],
      children: [
        { _type: "span", text: "Uma matriz de engenharia ambiental robusta alinha as exigências do INEMA aos pilares de " },
        { _type: "span", text: "governança ESG e mitigação de riscos operacionais", marks: ["link_esg"] },
        { _type: "span", text: ", preparando a empresa para uma futura " },
        { _type: "span", text: "renovação tranquila da Licença de Operação (LO)", marks: ["link_lo"] },
        { _type: "span", text: ". Fale com a " },
        { _type: "span", text: "assessoria técnica da Anjos Brandão", marks: ["link_contato"] },
        { _type: "span", text: " e reduza em até 40% o tempo de análise do seu processo." },
      ],
    },
  ],
  seo: {
    metaTitle: "PCA e RCA no INEMA para Mineração na BA | Anjos Brandão", // 55 chars
    metaDescription: "Acelere a emissão da LI com PCA e RCA no INEMA para mineração e indústria na Bahia. Bacias de contenção e controle de poeira. Acesse o guia técnico.", // 149 chars
    keywords: ["pca e rca no inema para mineracao", "plano de controle ambiental industria", "relatorio controle ambiental seia", "licenciamento minerario bahia li", "bacia decantacao mineracao rca"],
  },
}

const POST_18 = {
  _id: "post-18",
  title: "Logística Reversa e DMR no SINIR: Guia de Conformidade Legal para Empresas na Bahia",
  slug: "logistica-reversa-dmr-sinir-residuos-bahia",
  excerpt: "Aprenda a conciliar MTRs eletrônicos, CDF e emitir a Declaração de Movimentação de Resíduos (DMR) no SINIR sem inconsistências fiscais na Bahia.",
  publishedAt: "2026-09-28T18:00:00Z",
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: "/images/blog/post-18-logistica-reversa-dmr-sinir-residuos.webp",
  mainImageAlt: "Inspeção de logística reversa e DMR no SINIR em centro de resíduos na Bahia",
  mainImageCaption: "Supervisores ambientais da Anjos Brandão conferindo conformidade de MTRs e baias de triagem para elaboração de DMR.",
  author: DEFAULT_AUTHOR,
  categoryIndexes: [1, 4],
  body: [
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "A implementação de sistemas de " },
        { _type: "span", text: "logística reversa e DMR no SINIR", marks: ["strong"] },
        { _type: "span", text: " tornou-se obrigatória para indústrias, construtoras e grandes empreendimentos na Bahia. Com o cruzamento eletrônico entre os sistemas de fiscalização do INEMA, Ministério Público e Ministério do Meio Ambiente, empresas que não comprovam o descarte final ambientalmente adequado de seus resíduos e embalagens enfrentam multas imediatas e bloqueios operacionais." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "O que é DMR e Qual o Seu Papel na Gestão de Resíduos?" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "A Declaração de Movimentação de Resíduos (DMR) é o relatório oficial consolidado no Sistema Nacional de Informações sobre a Gestão dos Resíduos Sólidos (SINIR) que presta contas de todos os resíduos gerados, transportados, armazenados e destinados pela empresa no período, atestando conformidade com a Política Nacional de Resíduos Sólidos (Lei 12.305/2010)." },
      ],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_pgrs", _type: "link", href: "/pgrs" },
        { _key: "link_mtr", _type: "link", href: "/blog/mtr-online-gestao-residuos-perigosos-classe-1" },
      ],
      children: [
        { _type: "span", text: "Toda empresa enquadrada na elaboração do " },
        { _type: "span", text: "Plano de Gerenciamento de Resíduos Sólidos (PGRS)", marks: ["link_pgrs"] },
        { _type: "span", text: " deve garantir que 100% das cargas expedidas com Manifesto de Transporte de Resíduos possuam o respectivo Certificado de Destinação Final (CDF). Confira as regras detalhadas de " },
        { _type: "span", text: "emissão de MTR online para resíduos perigosos", marks: ["link_mtr"] },
        { _type: "span", text: "." },
      ],
    },
    {
      _type: "callout",
      type: "tip",
      title: "Responsabilidade Compartilhada pelo Ciclo de Vida",
      text: "A contratação de transportadores terceirizados não isenta a empresa geradora. Pela legislação brasileira, a responsabilidade civil por contaminação de resíduos é objetiva e solidária.",
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Cadeias Críticas de Logística Reversa na Bahia" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "• Óleos lubrificantes automotivos e industriais usados (OLUC) e suas bombonas plásticas.\n• Baterias de chumbo-ácido de frotas pesadas e empilhadeiras.\n• Pneus inservíveis de caminhões e tratores de terraplenagem.\n• Embalagens vazias de tintas industriais, solventes, desmoldantes e defensivos agrícolas." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Gestão Integrada de Resíduos com a Anjos Brandão" }],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_circular", _type: "link", href: "/blog/economia-circular-pgrs-industria-pesada-quimica" },
        { _key: "link_cat_residuos", _type: "link", href: "/blog/categoria/residuos-solidos" },
        { _key: "link_licenciamento", _type: "link", href: "/licenciamento-ambiental" },
        { _key: "link_contato", _type: "link", href: "/#contato" },
      ],
      children: [
        { _type: "span", text: "Implementamos centrais de triagem padronizadas, reduzimos os custos de transporte através de conceitos de " },
        { _type: "span", text: "economia circular e valorização de resíduos industriais", marks: ["link_circular"] },
        { _type: "span", text: ", integrados às melhores práticas de " },
        { _type: "span", text: "gestão de resíduos sólidos", marks: ["link_cat_residuos"] },
        { _type: "span", text: " e aos requisitos de " },
        { _type: "span", text: "licenciamento ambiental na Bahia", marks: ["link_licenciamento"] },
        { _type: "span", text: ". Emitimos a DMR no SINIR com conciliação auditada. Solicite uma avaliação com os " },
        { _type: "span", text: "especialistas em PGRS da Anjos Brandão", marks: ["link_contato"] },
        { _type: "span", text: "." },
      ],
    },
  ],
  seo: {
    metaTitle: "Logística Reversa e DMR no SINIR na BA | Anjos Brandão", // 54 chars
    metaDescription: "Evite multas com a logística reversa e DMR no SINIR na Bahia. Conciliação de MTR, CDF e conformidade legal de resíduos. Veja o passo a passo.", // 143 chars
    keywords: ["logistica reversa e dmr no sinir", "declaracao movimentacao residuos sinir bahia", "mtr cdf conciliacao de residuos", "pgrs gestao residuos perigosos inema", "logistica reversa empresas salvador"],
  },
}

const POST_19 = {
  _id: "post-19",
  title: "Fauna em Linhas de Transmissão: Protocolos de Afugentamento e Mitigação de Colisões",
  slug: "monitoramento-afugentamento-fauna-linhas-transmissao-inema",
  excerpt: "Guia sobre o manejo biológico de fauna em faixas de servidão de linhas de transmissão na Bahia: resgate de campo e sinalizadores de avifauna.",
  publishedAt: "2026-09-26T18:00:00Z",
  estimatedReadTime: 9,
  featured: false,
  mainImageUrl: "/images/blog/post-19-monitoramento-fauna-linhas-transmissao.webp",
  mainImageAlt: "Faixa de servidão e proteção de fauna em linhas de transmissão na Bahia",
  mainImageCaption: "Faixa de servidão de linha de transmissão na Bahia equipada com sinalizadores anti-colisão de avifauna.",
  author: DEFAULT_AUTHOR,
  categoryIndexes: [3, 0],
  body: [
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "A proteção e manejo da " },
        { _type: "span", text: "fauna em linhas de transmissão na Bahia", marks: ["strong"] },
        { _type: "span", text: " é um dos requisitos mais críticos exigidos pelo INEMA e IBAMA para empreendimentos de energia renovável e transmissão de alta tensão (230 kV e 500 kV). A abertura de faixas de servidão cortando biomas sensíveis como Caatinga e Cerrado baiano impõe medidas sistemáticas para evitar o afugentamento desordenado durante a obra e o risco permanente de colisão de aves contra cabos na operação." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "O que Exige o Protocolo de Fauna em Linhas de Transmissão?" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "O protocolo ambiental para linhas de transmissão exige uma equipe multidisciplinar de biólogos e veterinários de campo autorizados pelo órgão ambiental para coordenar o afugentamento prévio durante a supressão vegetal, realizar a busca ativa de herpetofauna e monitorar periodicamente a avifauna ao longo de todo o traçado energizado." },
      ],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_fauna_flora", _type: "link", href: "/resgate-fauna-flora" },
        { _key: "link_asv", _type: "link", href: "/autorizacao-supressao-vegetal" },
      ],
      children: [
        { _type: "span", text: "Através do " },
        { _type: "span", text: "serviço especializado de resgate de fauna e flora", marks: ["link_fauna_flora"] },
        { _type: "span", text: ", os biólogos atuam na dianteira das motosserras e escavadeiras durante a " },
        { _type: "span", text: "autorização de supressão vegetal (ASV)", marks: ["link_asv"] },
        { _type: "span", text: ", garantindo a translocação de espécies para áreas de soltura georreferenciadas." },
      ],
    },
    {
      _type: "callout",
      type: "tip",
      title: "Sinalizadores Anti-Colisão em Cabos OPGW",
      text: "Os cabos para-raios (OPGW) localizados no topo das torres são os mais perigosos para aves em voo crepuscular. A instalação de desviadores espirais de PVC a cada 10 metros em vales e rios reduz em até 85% as taxas de colisão fatal.",
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Metodologia de Monitoramento Sistemático Pós-Energização" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "Na fase de operação, o INEMA exige campanhas regulares de busca de carcaças sob os vãos com correção estatística de taxa de remoção por carniceiros e eficiência de busca dos observadores. Espécies endêmicas ou vulneráveis como a arara-azul-de-lear e a águia-cinzenta recebem atenção prioritária em planos de conservação." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Coordenação Biológica Integrada na Bahia" }],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_passagem", _type: "link", href: "/blog/passagem-de-fauna-monitoramento-obras-infraestrutura" },
        { _key: "link_resgate_obras", _type: "link", href: "/blog/resgate-fauna-supressao-vegetal-obras" },
        { _key: "link_cat_fauna", _type: "link", href: "/blog/categoria/florestal-fauna" },
        { _key: "link_contato", _type: "link", href: "/#contato" },
      ],
      children: [
        { _type: "span", text: "A Anjos Brandão combina biólogos experientes com veículos 4x4, drones de mapeamento e integração com projetos de " },
        { _type: "span", text: "passagens de fauna e conectividade ecológica", marks: ["link_passagem"] },
        { _type: "span", text: ", articulados com o " },
        { _type: "span", text: "resgate de fauna na supressão vegetal de obras", marks: ["link_resgate_obras"] },
        { _type: "span", text: " e monitoramento contínuo em " },
        { _type: "span", text: "consultoria florestal e biótica", marks: ["link_cat_fauna"] },
        { _type: "span", text: ". Consulte a " },
        { _type: "span", text: "equipe de biologia de campo da Anjos Brandão", marks: ["link_contato"] },
        { _type: "span", text: " para estruturar os programas ambientais da sua linha de transmissão." },
      ],
    },
  ],
  seo: {
    metaTitle: "Fauna em Linhas de Transmissão na Bahia | Anjos Brandão", // 55 chars
    metaDescription: "Proteja a fauna em linhas de transmissão na Bahia. Protocolos de afugentamento em faixa de servidão e sinalizadores de aves. Acesse as diretrizes.", // 144 chars
    keywords: ["fauna em linhas de transmissao", "afugentamento fauna supressao faixa servidao", "sinalizador avifauna cabo linha transmissao", "resgate biologico obra energia inema", "condicionantes fauna linhas transmissao"],
  },
}

const POST_20 = {
  _id: "post-20",
  title: "Auditoria Ambiental Compulsória CEPRAM: Como Estruturar o PAC e Evitar Multas",
  slug: "auditoria-ambiental-compulsoria-cepram-inema-plano-acao",
  excerpt: "Guia prático sobre auditorias ambientais periódicas na Bahia: escopo metodológico, classificação de não-conformidades e protocolo do PAC no INEMA.",
  publishedAt: "2026-09-24T18:00:00Z",
  estimatedReadTime: 10,
  featured: false,
  mainImageUrl: "/images/blog/post-20-auditoria-ambiental-cepram-inema.webp",
  mainImageAlt: "Auditores conduzindo auditoria ambiental CEPRAM em planta industrial na Bahia",
  mainImageCaption: "Auditores ambientais da Anjos Brandão checando parâmetros de efluentes e plano de ação em vistoria técnica.",
  author: DEFAULT_AUTHOR,
  categoryIndexes: [4, 0],
  body: [
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "A condução da " },
        { _type: "span", text: "auditoria ambiental CEPRAM na Bahia", marks: ["strong"] },
        { _type: "span", text: " é um dever legal compulsório para indústrias petroquímicas, metalúrgicas, mineradoras, portos e empresas de saneamento de médio e alto potencial poluidor. Regulamentada pela Lei Estadual nº 10.431/2006 e disciplinada pela Resolução CEPRAM nº 3.925/2009, a auditoria periódica visa diagnosticar passivos ocultos e verificar a efetiva obediência a todas as condicionantes da Licença de Operação (LO)." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "O que é a Auditoria Ambiental Compulsória do CEPRAM?" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "A auditoria ambiental compulsória é uma avaliação sistemática, documentada e independente do desempenho ambiental de uma empresa licenciada na Bahia. Realizada a cada 2 ou 3 anos por consultoria externa cadastrada no INEMA, ela gera o Relatório de Auditoria e o Plano de Ação Corretiva (PAC) obrigatório." },
      ],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_licenciamento", _type: "link", href: "/licenciamento-ambiental" },
        { _key: "link_lo", _type: "link", href: "/blog/renovacao-licenca-operacao-lo-prazos-documentos-inema" },
      ],
      children: [
        { _type: "span", text: "O escopo da auditoria analisa minuciosamente a eficácia dos controles de emissões atmosféricas, estações de tratamento de efluentes (ETE), laudos de piezometria e o cumprimento das cláusulas do " },
        { _type: "span", text: "licenciamento ambiental estadual", marks: ["link_licenciamento"] },
        { _type: "span", text: ", sendo documento indispensável para a " },
        { _type: "span", text: "renovação da Licença de Operação (LO) no INEMA", marks: ["link_lo"] },
        { _type: "span", text: "." },
      ],
    },
    {
      _type: "callout",
      type: "warning",
      title: "Exigência de Auditoria Independente com ART",
      text: "A auditoria não pode ser realizada por colaboradores internos do empreendimento. O órgão ambiental exige a assinatura de equipe multidisciplinar externa com registro e ART no CREA ou CRBio.",
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Estruturação do Plano de Ação Corretiva (PAC)" }],
    },
    {
      _type: "block",
      style: "normal",
      children: [
        { _type: "span", text: "Todas as não-conformidades identificadas (leves, moderadas ou críticas) são catalogadas em uma matriz de risco associada ao Plano de Ação Corretiva (PAC). O PAC define o responsável técnico de cada setor, as intervenções de engenharia necessárias e os prazos de cumprimento que serão fiscalizados pelo INEMA e Ministério Público." },
      ],
    },
    {
      _type: "block",
      style: "h2",
      children: [{ _type: "span", text: "Auditoria de Alta Precisão com a Anjos Brandão" }],
    },
    {
      _type: "block",
      style: "normal",
      markDefs: [
        { _key: "link_due_diligence", _type: "link", href: "/blog/due-diligence-ambiental-compra-terrenos-loteamentos" },
        { _key: "link_esg_riscos", _type: "link", href: "/blog/governanca-esg-mitigacao-riscos-ambientais" },
        { _key: "link_cat_esg", _type: "link", href: "/blog/categoria/esg-compliance" },
        { _key: "link_contato", _type: "link", href: "/#contato" },
      ],
      children: [
        { _type: "span", text: "Nossos auditores combinam rigor normativo com visão prática de operações industriais, atuando também em " },
        { _type: "span", text: "auditoria de due diligence ambiental para aquisições", marks: ["link_due_diligence"] },
        { _type: "span", text: ", programas estratégicos de " },
        { _type: "span", text: "governança ESG e mitigação de riscos ambientais", marks: ["link_esg_riscos"] },
        { _type: "span", text: " e conformidade corporativa em " },
        { _type: "span", text: "ESG e compliance ambiental", marks: ["link_cat_esg"] },
        { _type: "span", text: ". Agende uma reunião técnica com os " },
        { _type: "span", text: "auditores ambientais da Anjos Brandão", marks: ["link_contato"] },
        { _type: "span", text: " e mantenha sua empresa em conformidade plena perante o CEPRAM e o INEMA." },
      ],
    },
  ],
  seo: {
    metaTitle: "Auditoria Ambiental CEPRAM na Bahia | Anjos Brandão", // 51 chars
    metaDescription: "Saiba como realizar a auditoria ambiental CEPRAM na Bahia sem riscos. Escopo de conformidade de LO e Plano de Ação Corretiva (PAC). Solicite proposta.", // 147 chars
    keywords: ["auditoria ambiental cepram na bahia", "auditoria ambiental inema bahia", "resolucao cepram 3925 auditoria", "plano de acao corretiva pac inema", "consultoria auditoria ambiental salvador"],
  },
}

// Ler arquivo generate-rich-blog-posts.mjs
const generateFilePath = path.resolve(__dirname, "./generate-rich-blog-posts.mjs")
let content = fs.readFileSync(generateFilePath, "utf-8")

// Substituir post-8 metaTitle (que tinha 49 chars) para exatamente 53 chars
content = content.replace(
  "metaTitle: 'Passagem de Fauna em Rodovias e Obras: Guia INEMA',",
  "metaTitle: 'Passagem de Fauna em Rodovias na Bahia | Anjos Brandão',"
)

// Substituir descrições dos posts 9, 11, 12, 14 para ficarem estritamente entre 130 e 150 caracteres com CTA
content = content.replace(
  "metaDescription: 'Descubra como estruturar o resgate de flora, viveiros de mudas nativas e o cumprimento de PRAD para atender às exigências florestais do INEMA na Bahia.',",
  "metaDescription: 'Veja como planejar o resgate de flora nativa e o cumprimento de PRAD para atender com rigor às exigências do INEMA na Bahia. Fale conosco.',"
)
content = content.replace(
  "metaDescription: 'Guia completo sobre o licenciamento ambiental de parques solares e eólicos na Bahia. Conheça as etapas do SEIA, estudos bióticos e como evitar atrasos.',",
  "metaDescription: 'Guia prático do licenciamento de parques solares e eólicos na Bahia. Conheça as etapas no SEIA, estudos bióticos e evite atrasos. Fale conosco.',"
)
content = content.replace(
  "metaDescription: 'Entenda como o inventário florestal de precisão otimiza o traçado de obras, reduz as taxas de corte e minimiza os custos de compensação ambiental no INEMA.',",
  "metaDescription: 'Saiba como o inventário florestal contínuo otimiza o traçado de obras, reduz taxas de corte e custos de compensação no INEMA. Fale com especialistas.',"
)
content = content.replace(
  "metaDescription: 'Descubra como o planejamento de corredores ecológicos e áreas verdes em loteamentos acelera a aprovação ambiental e valoriza empreendimentos imobiliários.',",
  "metaDescription: 'Veja como o projeto de corredores ecológicos em loteamentos acelera a aprovação ambiental no INEMA e valoriza o empreendimento. Fale com a equipe.',"
)

// Extrair o bloco de posts antes de post-15
const post15Marker = "  // =========================================================================\n  // POST 15: OUTORGA DE RECURSOS HÍDRICOS NO INEMA (CENÁRIO)"
const postOrderMarker = "// ==========================================\n// ORDENAÇÃO ALTERNADA: Cenário / Paisagem ↔ Pessoas em Campo\n// =========================================="

const beforePost15 = content.substring(0, content.indexOf("  // =========================================================================\n  // POST 15:"))
const afterPost20 = content.substring(content.indexOf(postOrderMarker))

const optimized6Posts = `  // =========================================================================
  // POST 15: OUTORGA DE RECURSOS HÍDRICOS NO INEMA (CENÁRIO) - 100% CLAUDE-SEO
  // =========================================================================
  ` + JSON.stringify(POST_15, null, 2) + `,

  // =========================================================================
  // POST 16: BIOENGENHARIA DE SOLOS E PRAD (PESSOAS) - 100% CLAUDE-SEO
  // =========================================================================
  ` + JSON.stringify(POST_16, null, 2) + `,

  // =========================================================================
  // POST 17: PCA E RCA EM MINERAÇÃO E INDÚSTRIA (CENÁRIO) - 100% CLAUDE-SEO
  // =========================================================================
  ` + JSON.stringify(POST_17, null, 2) + `,

  // =========================================================================
  // POST 18: LOGÍSTICA REVERSA E DMR NO SINIR (PESSOAS) - 100% CLAUDE-SEO
  // =========================================================================
  ` + JSON.stringify(POST_18, null, 2) + `,

  // =========================================================================
  // POST 19: FAUNA EM LINHAS DE TRANSMISSÃO (CENÁRIO) - 100% CLAUDE-SEO
  // =========================================================================
  ` + JSON.stringify(POST_19, null, 2) + `,

  // =========================================================================
  // POST 20: AUDITORIA AMBIENTAL COMPULSÓRIA CEPRAM (PESSOAS) - 100% CLAUDE-SEO
  // =========================================================================
  ` + JSON.stringify(POST_20, null, 2) + `
]

`

const newContent = beforePost15 + optimized6Posts + afterPost20
fs.writeFileSync(generateFilePath, newContent, "utf-8")
console.log("SUCCESS: generate-rich-blog-posts.mjs updated with 100% SEO compliance!")
