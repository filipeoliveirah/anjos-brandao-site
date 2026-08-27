import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@sanity/client'
import { RICH_POSTS } from './generate-rich-blog-posts.mjs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Carregar variáveis do .env.local
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

function ensureKeys(body) {
  return body.map((block, bIdx) => {
    const bKey = block._key || `block_${bIdx + 1}_${Math.random().toString(36).slice(2, 7)}`
    if (block._type === 'callout') {
      return {
        _key: bKey,
        _type: 'callout',
        type: block.type || 'info',
        title: block.title || '',
        text: block.text || '',
      }
    }

    if (block.style === 'bullet') {
      return {
        _key: bKey,
        _type: 'block',
        listItem: 'bullet',
        style: 'normal',
        children: (block.children || []).map((child, cIdx) => ({
          _key: child._key || `span_${bIdx}_${cIdx}_${Math.random().toString(36).slice(2, 7)}`,
          _type: 'span',
          text: child.text || '',
          marks: child.marks || [],
        })),
      }
    }

    return {
      _key: bKey,
      _type: block._type || 'block',
      style: block.style || 'normal',
      children: (block.children || []).map((child, cIdx) => ({
        _key: child._key || `span_${bIdx}_${cIdx}_${Math.random().toString(36).slice(2, 7)}`,
        _type: 'span',
        text: child.text || '',
        marks: child.marks || [],
      })),
    }
  })
}

async function runSync() {
  console.log(`🚀 [Sanity Sync] Conectando ao projeto ${projectId} (${dataset})...`)

  // 1. Upload de Imagens dos Serviços e Blog
  const avatarAsset = await uploadImage('images/profile-pic.webp', 'profile-pic.webp')
  const imgPost1 = await uploadImage('images/blog/post-1-licenciamento-inema.webp', 'post-1-licenciamento-inema.webp')
  const imgPost2 = await uploadImage('images/blog/post-2-pgrs-construcao-civil.webp', 'post-2-pgrs-construcao-civil.webp')
  const imgPost3 = await uploadImage('images/blog/post-3-inventario-florestal-asv.webp', 'post-3-inventario-florestal-asv.webp')
  const imgPost4 = await uploadImage('images/blog/post-4-renovacao-licenca-lo.webp', 'post-4-renovacao-licenca-lo.webp')
  const imgPost5 = await uploadImage('images/blog/post-5-resgate-fauna-supressao.webp', 'post-5-resgate-fauna-supressao.webp')
  const imgPost6 = await uploadImage('images/blog/post-6-mtr-residuos-perigosos.webp', 'post-6-mtr-residuos-perigosos.webp')
  const imgPost7 = await uploadImage('images/blog/post-7-due-diligence-terrenos.webp', 'post-7-due-diligence-terrenos.webp')

  const imageMap = {
    '/images/blog/post-1-licenciamento-inema.webp': imgPost1,
    '/images/blog/post-2-pgrs-construcao-civil.webp': imgPost2,
    '/images/blog/post-3-inventario-florestal-asv.webp': imgPost3,
    '/images/blog/post-4-renovacao-licenca-lo.webp': imgPost4,
    '/images/blog/post-5-resgate-fauna-supressao.webp': imgPost5,
    '/images/blog/post-6-mtr-residuos-perigosos.webp': imgPost6,
    '/images/blog/post-7-due-diligence-terrenos.webp': imgPost7,
  }

  // 2. Criar / Atualizar Autor
  console.log('👤 Sincronizando autor...')
  const authorDoc = {
    _id: 'author-coordenacao-tecnica',
    _type: 'author',
    name: 'Coordenação Técnica Anjos Brandão',
    slug: { _type: 'slug', current: 'coordenacao-tecnica' },
    role: 'Equipe de Engenharia e Consultoria Ambiental',
    bio: 'Especialistas em coordenação ambiental integrada para construção civil, infraestrutura e indústria em toda a Bahia.',
    linkedin: 'https://www.linkedin.com/company/anjos-brandao-solucoes-ambientais',
    ...(avatarAsset
      ? {
          avatar: {
            _type: 'image',
            asset: { _type: 'reference', _ref: avatarAsset._id },
            alt: 'Coordenação Técnica Anjos Brandão',
          },
        }
      : {}),
  }
  await client.createOrReplace(authorDoc)

  // 3. Criar / Atualizar Categorias
  console.log('🏷️ Sincronizando categorias...')
  const categoryIds = [
    'cat-licenciamento',
    'cat-pgrs',
    'cat-asv',
    'cat-fauna-flora',
    'cat-esg',
  ]
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

  // 4. Sincronizar todos os 7 artigos ricos
  console.log('📝 Sincronizando artigos expandidos (1000+ palavras) no Sanity...')
  for (const post of RICH_POSTS) {
    const postCategories = post.categoryIndexes.map((idx, cIdx) => ({
      _key: `cat_ref_${cIdx}`,
      _type: 'reference',
      _ref: categoryIds[idx],
    }))

    const uploadedImg = imageMap[post.mainImageUrl]

    const formattedDoc = {
      _id: post._id,
      _type: 'post',
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      excerpt: post.excerpt,
      publishedAt: post.publishedAt,
      estimatedReadTime: post.estimatedReadTime,
      featured: post.featured || false,
      author: { _type: 'reference', _ref: 'author-coordenacao-tecnica' },
      categories: postCategories,
      ...(uploadedImg
        ? {
            mainImage: {
              _type: 'image',
              asset: { _type: 'reference', _ref: uploadedImg._id },
              alt: post.mainImageAlt,
              caption: post.mainImageCaption,
            },
          }
        : {}),
      body: ensureKeys(post.body),
      seo: {
        metaTitle: post.seo?.metaTitle,
        metaDescription: post.seo?.metaDescription,
        keywords: post.seo?.keywords || [],
      },
    }

    console.log(`📄 Enviando para o Sanity: "${post.title}" (ID: ${post._id})...`)
    await client.createOrReplace(formattedDoc)
  }

  console.log('🎉 [Sanity Sync] Sucesso! Todos os 7 artigos (1000+ palavras), categorias e autor foram atualizados no Sanity!')
}

runSync().catch((err) => {
  console.error('❌ Erro na sincronização com o Sanity:', err)
  process.exit(1)
})
