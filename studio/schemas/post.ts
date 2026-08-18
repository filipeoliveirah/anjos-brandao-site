export default {
  name: 'post',
  title: 'Artigo do Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título do Artigo',
      type: 'string',
      validation: (Rule: any) => Rule.required().min(10).max(120),
    },
    {
      name: 'slug',
      title: 'Slug (URL amigável)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Resumo / Linha Fina (Excerpt)',
      type: 'text',
      rows: 3,
      description: 'Breve síntese do artigo (2-3 linhas) exibida nos cards e usada como descrição padrão.',
      validation: (Rule: any) => Rule.required().min(30).max(250),
    },
    {
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Autor / Responsável Técnico',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categorias / Temas',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
      validation: (Rule: any) => Rule.required().min(1),
    },
    {
      name: 'mainImage',
      title: 'Imagem Principal de Capa',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (Alt Text para SEO e Acessibilidade)',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Legenda / Crédito da Imagem',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'estimatedReadTime',
      title: 'Tempo Estimado de Leitura (em minutos)',
      type: 'number',
      description: 'Ex: 5 (significa 5 min de leitura). Se vazio, calculado automaticamente.',
    },
    {
      name: 'featured',
      title: 'Destacar no topo do Blog?',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'body',
      title: 'Conteúdo do Artigo',
      type: 'blockContent',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'seo',
      title: 'Otimização para Mecanismos de Busca (SEO)',
      type: 'seo',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection: any) {
      const { author, date } = selection
      const formattedDate = date ? new Date(date).toLocaleDateString('pt-BR') : ''
      return {
        ...selection,
        subtitle: `${author ? author + ' · ' : ''}${formattedDate}`,
      }
    },
  },
  orderings: [
    {
      title: 'Data de Publicação (Mais Recente)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
}
