import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'anjos-brandao',
  title: 'Anjos Brandão · Gestão de Conteúdo',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'jk5fx7sr',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})
