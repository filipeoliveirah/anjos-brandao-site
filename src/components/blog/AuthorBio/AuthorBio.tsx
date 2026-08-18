import { Author } from '../../../types/blog'
import { urlForImage } from '../../../lib/sanity'
import styles from './AuthorBio.module.css'

interface AuthorBioProps {
  author: Author
}

export default function AuthorBio({ author }: AuthorBioProps) {
  if (!author) return null

  let avatarUrl = author.avatarUrl
  if (author.avatar && !avatarUrl) {
    const built = urlForImage(author.avatar)
    if (built) avatarUrl = built.width(200).height(200).auto('format').url()
  }

  const initials = author.name
    .split(' ')
    .slice(0, 2)
    .map((n) => n[0])
    .join('')
    .toUpperCase()

  return (
    <aside className={styles.bioBox} aria-label="Informações sobre o autor">
      <div className={styles.avatarWrapper}>
        {avatarUrl ? (
          <img src={avatarUrl} alt={author.name} className={styles.avatar} />
        ) : (
          <span className={styles.avatarFallback}>{initials || 'AB'}</span>
        )}
      </div>

      <div className={styles.info}>
        <span className={styles.role}>{author.role}</span>
        <h4 className={styles.name}>{author.name}</h4>
        {author.bio && <p className={styles.bioText}>{author.bio}</p>}
        {author.linkedin && (
          <a
            href={author.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinLink}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            Conectar no LinkedIn
          </a>
        )}
      </div>
    </aside>
  )
}
