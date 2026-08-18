export default {
  name: 'category',
  title: 'Categoria',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Nome da Categoria',
      type: 'string',
      description: 'Ex: Licenciamento Ambiental, Gestão de Resíduos (PGRS), Supressão Vegetal (ASV), ESG, Fauna e Flora',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      rows: 2,
    },
    {
      name: 'color',
      title: 'Cor de Destaque / Badge (Opcional)',
      type: 'string',
      description: 'Código hex ou nome (ex: #3B6951). Padrão do site será verde institucional.',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}
