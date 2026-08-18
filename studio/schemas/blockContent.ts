export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2 (Seção Principal)', value: 'h2' },
        { title: 'H3 (Subseção)', value: 'h3' },
        { title: 'H4 (Tópico)', value: 'h4' },
        { title: 'Citação em Destaque', value: 'blockquote' },
      ],
      lists: [
        { title: 'Marcadores (Bullet)', value: 'bullet' },
        { title: 'Numerada', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Negrito', value: 'strong' },
          { title: 'Itálico', value: 'em' },
          { title: 'Código', value: 'code' },
          { title: 'Sublinhado', value: 'underline' },
        ],
        annotations: [
          {
            title: 'Link URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule: any) =>
                  Rule.uri({
                    allowRelative: true,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Abrir em nova aba',
                name: 'blank',
                type: 'boolean',
                initialValue: true,
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      name: 'inlineImage',
      title: 'Imagem no Conteúdo',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo (Acessibilidade e SEO)',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'caption',
          type: 'string',
          title: 'Legenda da Imagem',
        },
      ],
    },
    {
      type: 'object',
      name: 'callout',
      title: 'Caixa de Destaque / Aviso',
      fields: [
        {
          name: 'type',
          type: 'string',
          title: 'Tipo de Destaque',
          options: {
            list: [
              { title: 'ℹ️ Informação / Contexto', value: 'info' },
              { title: '⚠️ Atenção / Alerta Técnico', value: 'warning' },
              { title: '💡 Dica Prática / Recomendação', value: 'tip' },
              { title: '⚖️ Base Legal / Legislação', value: 'legal' },
            ],
            layout: 'radio',
          },
          initialValue: 'info',
        },
        {
          name: 'title',
          type: 'string',
          title: 'Título do Destaque (Opcional)',
        },
        {
          name: 'text',
          type: 'text',
          title: 'Conteúdo do Destaque',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
  ],
}
