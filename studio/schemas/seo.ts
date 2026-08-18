export default {
  name: 'seo',
  title: 'Configurações de SEO',
  type: 'object',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title (Título para o Google)',
      type: 'string',
      description: 'Ideal entre 50-60 caracteres. Se deixado vazio, utilizará o título principal do artigo.',
    },
    {
      name: 'metaDescription',
      title: 'Meta Description (Descrição para o Google)',
      type: 'text',
      rows: 3,
      description: 'Ideal entre 140-160 caracteres. Se deixado vazio, utilizará o resumo (excerpt) do artigo.',
    },
    {
      name: 'shareImage',
      title: 'Imagem de Compartilhamento (Open Graph / WhatsApp / LinkedIn)',
      type: 'image',
      description: 'Recomendado 1200x630px. Se deixada vazia, utilizará a imagem principal da postagem.',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'keywords',
      title: 'Palavras-chave (Tags SEO)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'canonicalUrl',
      title: 'URL Canônica Customizada (Opcional)',
      type: 'url',
    },
  ],
}
