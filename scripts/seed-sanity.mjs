import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@sanity/client'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Carregar variáveis do .env.local sem dependência externa
const envPath = path.resolve(__dirname, '../.env.local')
const envVars = {}
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, 'utf-8').split('\n')
  for (const line of lines) {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('#')) {
      const idx = trimmed.indexOf('=')
      if (idx !== -1) {
        const key = trimmed.slice(0, idx).trim()
        const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, '')
        envVars[key] = val
      }
    }
  }
}

const projectId = envVars.VITE_SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'jk5fx7sr'
const dataset = envVars.VITE_SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'
const token = envVars.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN

if (!token) {
  console.error('❌ Erro: SANITY_API_TOKEN não encontrado no .env.local.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-03-01',
  token,
  useCdn: false,
})

async function uploadImage(relPath, filename) {
  const fullPath = path.resolve(__dirname, '../public', relPath)
  if (!fs.existsSync(fullPath)) {
    console.warn(`⚠️ Imagem não encontrada em ${fullPath}, continuando sem upload...`)
    return null
  }
  try {
    const stream = fs.createReadStream(fullPath)
    console.log(`📤 Enviando imagem para o CDN da Sanity: ${filename}...`)
    return await client.assets.upload('image', stream, { filename })
  } catch (err) {
    console.warn(`⚠️ Falha ao subir imagem ${filename}:`, err.message)
    return null
  }
}

async function runSeed() {
  console.log(`🚀 [Sanity Seed] Conectado ao projeto ${projectId} (${dataset}).`)
  console.log('📦 Iniciando migração dos artigos, categorias e autor...')

  // 1. Upload de Imagens
  const avatarAsset = await uploadImage('images/profile-pic.webp', 'profile-pic.webp')
  const imgLicenciamento = await uploadImage('images/services/hero-licenciamento.webp', 'hero-licenciamento.webp')
  const imgPgrs = await uploadImage('images/services/hero-pgrs.webp', 'hero-pgrs.webp')
  const imgInventario = await uploadImage('images/services/hero-inventario.webp', 'hero-inventario.webp')

  // 2. Criar / Atualizar Autor
  console.log('👤 Criando autor no Sanity...')
  const authorDoc = {
    _id: 'author-coordenacao-tecnica',
    _type: 'author',
    name: 'Coordenação Técnica Anjos Brandão',
    slug: { _type: 'slug', current: 'coordenacao-tecnica' },
    role: 'Equipe de Engenharia e Consultoria Ambiental',
    bio: 'Especialistas em coordenação ambiental integrada para construção civil, infraestrutura e indústria em toda a Bahia.',
    linkedin: 'https://www.linkedin.com/company/anjos-brandao-solucoes-ambientais',
    ...(avatarAsset ? {
      avatar: {
        _type: 'image',
        asset: { _type: 'reference', _ref: avatarAsset._id },
        alt: 'Coordenação Técnica Anjos Brandão',
      }
    } : {}),
  }
  await client.createOrReplace(authorDoc)

  // 3. Criar / Atualizar Categorias
  console.log('🏷️ Criando categorias no Sanity...')
  const categories = [
    { id: 'cat-licenciamento', title: 'Licenciamento Ambiental', slug: 'licenciamento-ambiental', desc: 'LP, LI, LO e regularização junto ao INEMA e IBAMA' },
    { id: 'cat-pgrs', title: 'PGRS & Resíduos', slug: 'pgrs-residuos', desc: 'Gestão de resíduos na construção civil e indústria' },
    { id: 'cat-asv', title: 'Inventário & ASV', slug: 'inventario-asv', desc: 'Inventário florestal e autorização de supressão vegetal' },
    { id: 'cat-fauna-flora', title: 'Fauna e Flora', slug: 'fauna-flora', desc: 'Resgate, afugentamento e monitoramento biótico em campo' },
    { id: 'cat-esg', title: 'ESG & Compliance', slug: 'esg-compliance', desc: 'Governança ambiental, mitigação de riscos e sustentabilidade' },
  ]

  for (const cat of categories) {
    await client.createOrReplace({
      _id: cat.id,
      _type: 'category',
      title: cat.title,
      slug: { _type: 'slug', current: cat.slug },
      description: cat.desc,
    })
  }

  // 4. Criar / Atualizar Artigos
  console.log('📝 Criando artigos no Sanity...')

  const posts = [
    {
      _id: 'post-licenciamento-inema-bahia',
      _type: 'post',
      title: 'Guia do Licenciamento Ambiental no INEMA (Bahia): Da LP à LO sem embargos',
      slug: { _type: 'slug', current: 'guia-licenciamento-ambiental-inema-bahia' },
      excerpt: 'Entenda o passo a passo completo das etapas de Licença Prévia (LP), Instalação (LI) e Operação (LO) junto ao órgão ambiental da Bahia e como antecipar condicionantes.',
      publishedAt: '2026-08-10T10:00:00.000Z',
      estimatedReadTime: 7,
      featured: true,
      author: { _type: 'reference', _ref: 'author-coordenacao-tecnica' },
      categories: [
        { _key: 'c1', _type: 'reference', _ref: 'cat-licenciamento' },
        { _key: 'c2', _type: 'reference', _ref: 'cat-esg' },
      ],
      ...(imgLicenciamento ? {
        mainImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imgLicenciamento._id },
          alt: 'Operação técnica de coordenação e licenciamento ambiental em empreendimento na Bahia',
          caption: 'Acompanhamento técnico presencial para cumprimento rigoroso das condicionantes da LI e LO.',
        }
      } : {}),
      body: [
        {
          _key: 'b1',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 's1',
              _type: 'span',
              text: 'O licenciamento ambiental na Bahia, conduzido primariamente pelo Instituto do Meio Ambiente e Recursos Hídricos (INEMA), é uma etapa crítica para a viabilidade de obras de infraestrutura, empreendimentos imobiliários e instalações industriais. Um processo mal instruído pode acarretar atrasos de meses no cronograma executivo e riscos de autuações gravíssimas.',
            },
          ],
        },
        {
          _key: 'b2',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 's2', _type: 'span', text: 'As Três Fases Essenciais do Licenciamento' }],
        },
        {
          _key: 'b3',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 's3',
              _type: 'span',
              text: 'O rito ordinário trifásico do licenciamento ambiental é composto por três marcos regulatórios que acompanham a evolução física e jurídica do empreendimento:',
            },
          ],
        },
        {
          _key: 'b4',
          _type: 'block',
          listItem: 'bullet',
          style: 'normal',
          children: [
            {
              _key: 's4',
              _type: 'span',
              text: 'Licença Prévia (LP): Concedida na fase de planejamento preliminar, atesta a viabilidade locacional e ambiental do projeto e estabelece os requisitos básicos para as próximas fases.',
            },
          ],
        },
        {
          _key: 'b5',
          _type: 'block',
          listItem: 'bullet',
          style: 'normal',
          children: [
            {
              _key: 's5',
              _type: 'span',
              text: 'Licença de Instalação (LI): Autoriza o início da implantação do canteiro de obras e execução física do empreendimento de acordo com os planos aprovados (PBA/PCA).',
            },
          ],
        },
        {
          _key: 'b6',
          _type: 'block',
          listItem: 'bullet',
          style: 'normal',
          children: [
            {
              _key: 's6',
              _type: 'span',
              text: 'Licença de Operação (LO): Autoriza o início efetivo das atividades operacionais após a comprovação do cumprimento de todas as condicionantes da LI.',
            },
          ],
        },
        {
          _key: 'b7',
          _type: 'callout',
          type: 'warning',
          title: 'Atenção aos Prazos de Renovação',
          text: 'A renovação da LO deve ser solicitada com antecedência mínima de 120 dias antes do vencimento para manter a licença vigente durante a análise técnica pelo órgão ambiental.',
        },
        {
          _key: 'b8',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 's7', _type: 'span', text: 'Como Antecipar e Gerenciar Condicionantes Ambientais' }],
        },
        {
          _key: 'b9',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 's8',
              _type: 'span',
              text: 'O maior gargalo na gestão de obras reside na negligência do acompanhamento das condicionantes. Criar uma matriz de monitoramento contínuo com relatórios de cumprimento entregues pontualmente ao INEMA garante segurança jurídica inabalável aos investidores e executores da obra.',
            },
          ],
        },
      ],
      seo: {
        metaTitle: 'Licenciamento Ambiental no INEMA Bahia: Guia LP, LI e LO | Anjos Brandão',
        metaDescription: 'Guia completo sobre as etapas do licenciamento ambiental no INEMA na Bahia. Evite embargos e atrasos na sua obra com coordenação ambiental integrada.',
      },
    },
    {
      _id: 'post-pgrs-construcao-civil',
      _type: 'post',
      title: 'PGRS na Construção Civil: Como Reduzir Custos e Garantir Conformidade',
      slug: { _type: 'slug', current: 'pgrs-construcao-civil-reducao-custos-conformidade' },
      excerpt: 'Descubra como um Plano de Gerenciamento de Resíduos Sólidos estruturado transforma resíduos de classe A a D em economia operacional e conformidade legal.',
      publishedAt: '2026-08-04T14:30:00.000Z',
      estimatedReadTime: 5,
      featured: false,
      author: { _type: 'reference', _ref: 'author-coordenacao-tecnica' },
      categories: [
        { _key: 'c1', _type: 'reference', _ref: 'cat-pgrs' },
        { _key: 'c2', _type: 'reference', _ref: 'cat-esg' },
      ],
      ...(imgPgrs ? {
        mainImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imgPgrs._id },
          alt: 'Gestão de resíduos sólidos e PGRS em canteiro de obras',
          caption: 'Segregação na fonte reduz custos logísticos de destinação de resíduos.',
        }
      } : {}),
      body: [
        {
          _key: 'b1',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 's1',
              _type: 'span',
              text: 'A gestão adequada de resíduos da construção civil (RCC) deixou de ser apenas uma obrigação legal estipulada pela Resolução CONAMA nº 307/2002 e pela Lei Federal nº 12.305/2010 (PNRS) para se tornar uma poderosa alavanca de redução de custos em canteiros de obras.',
            },
          ],
        },
        {
          _key: 'b2',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 's2', _type: 'span', text: 'Classificação Estratégica dos Resíduos' }],
        },
        {
          _key: 'b3',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 's3',
              _type: 'span',
              text: 'O PGRS bem elaborado categoriza com precisão os materiais gerados no canteiro, viabilizando reciclagem, reaproveitamento interno e destinação licenciada com Manifestos de Transporte de Resíduos (MTR).',
            },
          ],
        },
        {
          _key: 'b4',
          _type: 'callout',
          type: 'tip',
          title: 'Oportunidade de Economia',
          text: 'A segregação correta dos resíduos de Classe A (alvenaria, concreto, argamassas) viabiliza britagem local e reuso como sub-base de pavimentação, reduzindo custos de transporte e compra de agregados virgens.',
        },
      ],
      seo: {
        metaTitle: 'PGRS na Construção Civil: Redução de Custos e Normas | Anjos Brandão',
        metaDescription: 'Como implementar o PGRS no canteiro de obras, cumprir as resoluções do CONAMA e otimizar custos de destinação de resíduos na Bahia.',
      },
    },
    {
      _id: 'post-inventario-florestal-asv',
      _type: 'post',
      title: 'Inventário Florestal e ASV: Estratégias para Supressão Vegetal Segura',
      slug: { _type: 'slug', current: 'inventario-florestal-asv-supressao-vegetal-segura' },
      excerpt: 'Passo a passo técnico para levantamento fitossociológico, solicitação de ASV e programas de afugentamento e resgate de fauna e flora.',
      publishedAt: '2026-07-28T09:15:00.000Z',
      estimatedReadTime: 6,
      featured: false,
      author: { _type: 'reference', _ref: 'author-coordenacao-tecnica' },
      categories: [
        { _key: 'c1', _type: 'reference', _ref: 'cat-asv' },
        { _key: 'c2', _type: 'reference', _ref: 'cat-fauna-flora' },
      ],
      ...(imgInventario ? {
        mainImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: imgInventario._id },
          alt: 'Inventário florestal e equipe técnica em campo na Bahia',
          caption: 'Levantamento de campo com identificação botânica e cubagem de biomassa vegetal.',
        }
      } : {}),
      body: [
        {
          _key: 'b1',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 's1',
              _type: 'span',
              text: 'Antes de iniciar a limpeza de terreno ou terraplenagem em áreas com cobertura vegetal nativa, a obtenção da Autorização de Supressão de Vegetação (ASV) é indispensável. O processo exige um inventário florestal rigoroso que quantifique o volume de madeira e identifique espécies imunes ao corte ou ameaçadas de extinção.',
            },
          ],
        },
        {
          _key: 'b2',
          _type: 'block',
          style: 'h2',
          children: [{ _key: 's2', _type: 'span', text: 'Integração entre ASV e Resgate de Fauna' }],
        },
        {
          _key: 'b3',
          _type: 'block',
          style: 'normal',
          children: [
            {
              _key: 's3',
              _type: 'span',
              text: 'A supressão vegetal deve ser precedida e acompanhada por biólogos e veterinários de campo. As frentes de máquinas avançam em coordenação com a equipe de resgate, garantindo o afugentamento direcionado para áreas de preservação adjacentes.',
            },
          ],
        },
        {
          _key: 'b4',
          _type: 'callout',
          type: 'legal',
          title: 'Base Legal',
          text: 'A Lei da Mata Atlântica (Lei Federal nº 11.428/2006) estabelece critérios rigorosos para intervenção em vegetação nos estágios inicial, médio e avançado de regeneração.',
        },
      ],
      seo: {
        metaTitle: 'Inventário Florestal e ASV na Bahia: Guia Completo | Anjos Brandão',
        metaDescription: 'Entenda como conduzir o inventário florestal e obter a ASV sem embargos para obras na Bahia. Atuação integrada de fauna e flora.',
      },
    },
  ]

  for (const post of posts) {
    console.log(`📄 Enviando artigo: "${post.title}"...`)
    await client.createOrReplace(post)
  }

  console.log('🎉 [Sanity Seed] Migração concluída com sucesso! Todos os artigos, autor e categorias estão publicados no Sanity.')
}

runSeed().catch((err) => {
  console.error('❌ Erro na migração para o Sanity:', err)
  process.exit(1)
})
