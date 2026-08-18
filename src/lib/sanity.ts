import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || ''
export const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
export const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2024-03-01'

export const isSanityConfigured = Boolean(
  projectId && projectId !== 'your-project-id' && projectId !== 'undefined'
)

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null

export function urlForImage(source: any) {
  if (!builder || !source) return null
  return builder.image(source)
}
