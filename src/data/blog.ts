import { sanityClient, isSanityConfigured } from '../lib/sanity'
import { Post, PostDetail, Category } from '../types/blog'

// ==========================================
// GROQ Queries
// ==========================================

export const POSTS_QUERY = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    estimatedReadTime,
    featured,
    mainImage,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    "mainImageCaption": mainImage.caption,
    author->{
      name,
      "slug": slug.current,
      role,
      "avatarUrl": avatar.asset->url,
      bio,
      linkedin
    },
    categories[]->{
      title,
      "slug": slug.current,
      description,
      color
    }
  }
`

export const RECENT_POSTS_QUERY = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    estimatedReadTime,
    featured,
    mainImage,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    author->{
      name,
      "slug": slug.current,
      role,
      "avatarUrl": avatar.asset->url
    },
    categories[]->{
      title,
      "slug": slug.current,
      color
    }
  }
`

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    estimatedReadTime,
    featured,
    mainImage,
    "mainImageUrl": mainImage.asset->url,
    "mainImageAlt": mainImage.alt,
    "mainImageCaption": mainImage.caption,
    author->{
      name,
      "slug": slug.current,
      role,
      "avatarUrl": avatar.asset->url,
      bio,
      linkedin
    },
    categories[]->{
      title,
      "slug": slug.current,
      description,
      color
    },
    body,
    seo {
      metaTitle,
      metaDescription,
      "shareImageUrl": shareImage.asset->url,
      keywords,
      canonicalUrl
    },
    "relatedPosts": *[_type == "post" && slug.current != $slug] | order(publishedAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      estimatedReadTime,
      "mainImageUrl": mainImage.asset->url,
      "mainImageAlt": mainImage.alt,
      author->{
        name,
        role,
        "avatarUrl": avatar.asset->url
      },
      categories[]->{
        title,
        "slug": slug.current,
        color
      }
    }
  }
`

export const CATEGORIES_QUERY = `
  *[_type == "category"] | order(title asc) {
    title,
    "slug": slug.current,
    description,
    color
  }
`

// ==========================================
// Fallback / Initial Seed Data
// ==========================================

export const INITIAL_CATEGORIES: Category[] = [
  { title: 'Licenciamento Ambiental', slug: 'licenciamento-ambiental', description: 'LP, LI, LO e regularização junto ao INEMA e IBAMA' },
  { title: 'PGRS & Resíduos', slug: 'pgrs-residuos', description: 'Gestão de resíduos na construção civil e indústria' },
  { title: 'Inventário & ASV', slug: 'inventario-asv', description: 'Inventário florestal e autorização de supressão vegetal' },
  { title: 'Fauna e Flora', slug: 'fauna-flora', description: 'Resgate, afugentamento e monitoramento biótico em campo' },
  { title: 'ESG & Compliance', slug: 'esg-compliance', description: 'Governança ambiental, mitigação de riscos e sustentabilidade' },
]

export const INITIAL_POSTS: PostDetail[] = [
  {
    _id: 'post-1',
    title: 'Guia do Licenciamento Ambiental no INEMA (Bahia): Da LP à LO sem embargos',
    slug: 'guia-licenciamento-ambiental-inema-bahia',
    excerpt: 'Entenda o passo a passo completo das etapas de Licença Prévia (LP), Instalação (LI) e Operação (LO) junto ao órgão ambiental da Bahia e como antecipar condicionantes.',
    publishedAt: '2026-08-10T10:00:00Z',
    estimatedReadTime: 7,
    featured: true,
    mainImageUrl: '/images/hero-bg-3000.webp',
    mainImageAlt: 'Operação técnica de coordenação e licenciamento ambiental em empreendimento na Bahia',
    author: {
      name: 'Coordenação Técnica Anjos Brandão',
      role: 'Equipe de Engenharia e Consultoria Ambiental',
      bio: 'Especialistas em coordenação ambiental integrada para construção civil, infraestrutura e indústria em toda a Bahia.',
      linkedin: 'https://linkedin.com',
    },
    categories: [INITIAL_CATEGORIES[0], INITIAL_CATEGORIES[4]],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'O licenciamento ambiental na Bahia, conduzido primariamente pelo Instituto do Meio Ambiente e Recursos Hídricos (INEMA), é uma etapa crítica para a viabilidade de obras de infraestrutura, empreendimentos imobiliários e instalações industriais. Um processo mal instruído pode acarretar atrasos de meses no cronograma executivo e riscos de autuações gravíssimas.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'As Três Fases Essenciais do Licenciamento' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'O rito ordinário trifásico do licenciamento ambiental é composto por três marcos regulatórios que acompanham a evolução física e jurídica do empreendimento:',
          },
        ],
      },
      {
        _type: 'block',
        style: 'bullet',
        children: [
          {
            _type: 'span',
            text: 'Licença Prévia (LP): Concedida na fase de planejamento preliminar, atesta a viabilidade locacional e ambiental do projeto e estabelece os requisitos básicos para as próximas fases.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'bullet',
        children: [
          {
            _type: 'span',
            text: 'Licença de Instalação (LI): Autoriza o início da implantação do canteiro de obras e execução física do empreendimento de acordo com os planos aprovados (PBA/PCA).',
          },
        ],
      },
      {
        _type: 'block',
        style: 'bullet',
        children: [
          {
            _type: 'span',
            text: 'Licença de Operação (LO): Autoriza o início efetivo das atividades operacionais após a comprovação do cumprimento de todas as condicionantes da LI.',
          },
        ],
      },
      {
        _type: 'callout',
        type: 'warning',
        title: 'Atenção aos Prazos de Renovação',
        text: 'A renovação da LO deve ser solicitada com antecedência mínima de 120 dias antes do vencimento para manter a licença vigente durante a análise técnica pelo órgão ambiental.',
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Como Antecipar e Gerenciar Condicionantes Ambientais' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
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
    _id: 'post-2',
    title: 'PGRS na Construção Civil: Como Reduzir Custos e Garantir Conformidade',
    slug: 'pgrs-construcao-civil-reducao-custos-conformidade',
    excerpt: 'Descubra como um Plano de Gerenciamento de Resíduos Sólidos estruturado transforma resíduos de classe A a D em economia operacional e conformidade legal.',
    publishedAt: '2026-08-04T14:30:00Z',
    estimatedReadTime: 5,
    featured: false,
    mainImageUrl: '/images/hero-bg-3000.webp',
    mainImageAlt: 'Gestão de resíduos sólidos e PGRS em canteiro de obras',
    author: {
      name: 'Coordenação Técnica Anjos Brandão',
      role: 'Equipe de Engenharia e Consultoria Ambiental',
      bio: 'Especialistas em coordenação ambiental integrada para construção civil, infraestrutura e indústria em toda a Bahia.',
      linkedin: 'https://linkedin.com',
    },
    categories: [INITIAL_CATEGORIES[1], INITIAL_CATEGORIES[4]],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'A gestão adequada de resíduos da construção civil (RCC) deixou de ser apenas uma obrigação legal estipulada pela Resolução CONAMA nº 307/2002 e pela Lei Federal nº 12.305/2010 (PNRS) para se tornar uma poderosa alavanca de redução de custos em canteiros de obras.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Classificação Estratégica dos Resíduos' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'O PGRS bem elaborado categoriza com precisão os materiais gerados no canteiro, viabilizando reciclagem, reaproveitamento interno e destinação licenciada com Manifestos de Transporte de Resíduos (MTR).',
          },
        ],
      },
      {
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
    _id: 'post-3',
    title: 'Inventário Florestal e ASV: Estratégias para Supressão Vegetal Segura',
    slug: 'inventario-florestal-asv-supressao-vegetal-segura',
    excerpt: 'Passo a passo técnico para levantamento fitossociológico, solicitação de ASV e programas de afugentamento e resgate de fauna e flora.',
    publishedAt: '2026-07-28T09:15:00Z',
    estimatedReadTime: 6,
    featured: false,
    mainImageUrl: '/images/hero-bg-3000.webp',
    mainImageAlt: 'Inventário florestal e equipe técnica em campo na Bahia',
    author: {
      name: 'Coordenação Técnica Anjos Brandão',
      role: 'Equipe de Engenharia e Consultoria Ambiental',
      bio: 'Especialistas em coordenação ambiental integrada para construção civil, infraestrutura e indústria em toda a Bahia.',
      linkedin: 'https://linkedin.com',
    },
    categories: [INITIAL_CATEGORIES[2], INITIAL_CATEGORIES[3]],
    body: [
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'Antes de iniciar a limpeza de terreno ou terraplenagem em áreas com cobertura vegetal nativa, a obtenção da Autorização de Supressão de Vegetação (ASV) é indispensável. O processo exige um inventário florestal rigoroso que quantifique o volume de madeira e identifique espécies imunes ao corte ou ameaçadas de extinção.',
          },
        ],
      },
      {
        _type: 'block',
        style: 'h2',
        children: [{ _type: 'span', text: 'Integração entre ASV e Resgate de Fauna' }],
      },
      {
        _type: 'block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            text: 'A supressão vegetal deve ser precedida e acompanhada por biólogos e veterinários de campo. As frentes de máquinas avançam em coordenação com a equipe de resgate, garantindo o afugentamento direcionado para áreas de preservação adjacentes.',
          },
        ],
      },
      {
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

// ==========================================
// Service Functions with Sanity + Fallback
// ==========================================

export async function getAllPosts(): Promise<Post[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const posts = await sanityClient.fetch<Post[]>(POSTS_QUERY)
      if (posts && posts.length > 0) {
        return posts
      }
    } catch (err) {
      console.warn('Falha ao buscar posts no Sanity, usando dados locais de fallback:', err)
    }
  }
  return INITIAL_POSTS
}

export async function getRecentPosts(limit = 3): Promise<Post[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const posts = await sanityClient.fetch<Post[]>(RECENT_POSTS_QUERY)
      if (posts && posts.length > 0) {
        return posts.slice(0, limit)
      }
    } catch (err) {
      console.warn('Falha ao buscar posts recentes no Sanity, usando dados locais de fallback:', err)
    }
  }
  return INITIAL_POSTS.slice(0, limit)
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  if (isSanityConfigured && sanityClient) {
    try {
      const post = await sanityClient.fetch<PostDetail>(POST_BY_SLUG_QUERY, { slug })
      if (post) {
        return post
      }
    } catch (err) {
      console.warn(`Falha ao buscar post slug "${slug}" no Sanity:`, err)
    }
  }
  const local = INITIAL_POSTS.find((p) => p.slug === slug)
  if (local) {
    return {
      ...local,
      relatedPosts: INITIAL_POSTS.filter((p) => p.slug !== slug).slice(0, 3),
    }
  }
  return null
}

export async function getAllCategories(): Promise<Category[]> {
  if (isSanityConfigured && sanityClient) {
    try {
      const categories = await sanityClient.fetch<Category[]>(CATEGORIES_QUERY)
      if (categories && categories.length > 0) {
        return categories
      }
    } catch (err) {
      console.warn('Falha ao buscar categorias no Sanity:', err)
    }
  }
  return INITIAL_CATEGORIES
}
