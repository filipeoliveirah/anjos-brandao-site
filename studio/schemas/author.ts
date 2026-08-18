export default {
  name: 'author',
  title: 'Autor / Especialista',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome Completo',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'role',
      title: 'Cargo / Especialidade Técnica',
      type: 'string',
      description: 'Ex: Coordenador de Licenciamento Ambiental, Engenheiro Florestal, Especialista em ESG',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Foto de Perfil',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
        },
      ],
    },
    {
      name: 'bio',
      title: 'Mini Biografia',
      type: 'text',
      rows: 3,
      description: 'Breve resumo da trajetória profissional e expertise.',
    },
    {
      name: 'linkedin',
      title: 'Perfil no LinkedIn',
      type: 'url',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'avatar',
    },
  },
}
