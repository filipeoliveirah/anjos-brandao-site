import { PortableText, PortableTextComponents } from '@portabletext/react'
import { urlForImage } from '../../../lib/sanity'
import styles from './PortableTextRenderer.module.css'

interface PortableTextRendererProps {
  value: any[]
}

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul>{children}</ul>,
    number: ({ children }) => <ol>{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong>{children}</strong>,
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => <code>{children}</code>,
    link: ({ value, children }) => {
      const isExternal = (value?.href || '').startsWith('http')
      return (
        <a
          href={value?.href}
          target={value?.blank || isExternal ? '_blank' : undefined}
          rel={value?.blank || isExternal ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      )
    },
  },
  types: {
    inlineImage: ({ value }) => {
      let imageUrl = value?.asset?.url
      if (!imageUrl && value) {
        const built = urlForImage(value)
        if (built) imageUrl = built.width(1200).auto('format').url()
      }
      if (!imageUrl) return null

      return (
        <figure className={styles.inlineImageContainer}>
          <img
            src={imageUrl}
            alt={value.alt || 'Imagem do artigo'}
            className={styles.inlineImage}
            loading="lazy"
          />
          {value.caption && <figcaption className={styles.imageCaption}>{value.caption}</figcaption>}
        </figure>
      )
    },
    callout: ({ value }) => {
      const type = value?.type || 'info'
      const iconMap: Record<string, string> = {
        info: 'ℹ️',
        warning: '⚠️',
        tip: '💡',
        legal: '⚖️',
      }
      const titleMap: Record<string, string> = {
        info: 'Informação Técnica',
        warning: 'Atenção / Alerta',
        tip: 'Dica Prática',
        legal: 'Base Legal',
      }

      const styleClass =
        type === 'warning'
          ? styles.calloutWarning
          : type === 'tip'
          ? styles.calloutTip
          : type === 'legal'
          ? styles.calloutLegal
          : styles.calloutInfo

      return (
        <aside className={`${styles.callout} ${styleClass}`}>
          <div className={styles.calloutHeader}>
            <span>{iconMap[type] || 'ℹ️'}</span>
            <span>{value.title || titleMap[type] || 'Destaque'}</span>
          </div>
          <p className={styles.calloutText}>{value.text}</p>
        </aside>
      )
    },
  },
}

export default function PortableTextRenderer({ value }: PortableTextRendererProps) {
  if (!value || !Array.isArray(value)) return null

  return (
    <div className={styles.content}>
      <PortableText value={value} components={portableTextComponents} />
    </div>
  )
}
