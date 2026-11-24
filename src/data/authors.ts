// Perfis de autoria do blog. Os dados vêm da Anjos Brandão; a assinatura curta
// (nome, cargo, bio, foto e LinkedIn) também é enviada ao Sanity em sync-all-to-sanity.mjs.

export interface AuthorEducation {
  course: string
  institution: string
  year: number
  credential: 'graduação' | 'pós-graduação'
}

export interface AuthorProfile {
  slug: string
  name: string
  role: string
  organization: string
  registry: string
  bio: string
  photoUrl: string
  photoAlt: string
  linkedin: string
  education: AuthorEducation[]
  areas: string[]
}

export const AUTHORS: Record<string, AuthorProfile> = {
  'patricia-brandao': {
    slug: 'patricia-brandao',
    name: 'Patrícia Brandão',
    role: 'Diretora Técnica',
    organization: 'Anjos Brandão Soluções Ambientais',
    registry: 'CRBio 122.212/08-D',
    bio: 'Patrícia Brandão é bióloga, gestora ambiental e pós-graduada em Ecologia e Biodiversidade. Na Anjos Brandão Soluções Ambientais, coordena o planejamento e o acompanhamento de projetos ambientais, unindo conhecimento técnico e orientação prática para ajudar empresas a organizar suas demandas e atender às exigências ambientais.',
    photoUrl: '/images/autores/patricia-brandao.webp',
    photoAlt: 'Patrícia Brandão, diretora técnica da Anjos Brandão Soluções Ambientais',
    linkedin: 'https://www.linkedin.com/in/j%C3%A1rdina-brand%C3%A3o',
    education: [
      { course: 'Pós-graduação em Ecologia e Biodiversidade', institution: 'Única', year: 2022, credential: 'pós-graduação' },
      { course: 'Biologia', institution: 'UNIME', year: 2017, credential: 'graduação' },
      { course: 'Gestão Ambiental', institution: 'IFPE', year: 2014, credential: 'graduação' },
    ],
    areas: [
      'Licenciamento ambiental',
      'Gestão de resíduos',
      'Recuperação de áreas degradadas',
      'Educação ambiental',
    ],
  },
}

export function getAuthorProfile(slug: string): AuthorProfile | null {
  return AUTHORS[slug] || null
}

export function authorPagePath(slug?: string): string | null {
  return slug && AUTHORS[slug] ? `/blog/autores/${slug}` : null
}
