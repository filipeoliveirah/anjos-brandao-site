import { useEffect, useState } from 'react'
import PostCard from '../../blog/PostCard/PostCard'
import Button from '../../ui/Button/Button'
import { Post } from '../../../types/blog'
import { getRecentPosts } from '../../../data/blog'
import styles from './BlogSection.module.css'

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    getRecentPosts(3).then((res) => {
      setPosts(res)
    })
  }, [])

  if (posts.length === 0) return null

  return (
    <section id="blog" className={`${styles.section} target-section`}>
      <div className="row">
        <div className="column large-full">
          <div className={styles.headerRow}>
            <div className={styles.headingCol}>
              <p className="subhead" data-aos="fade-up">Publicações & Guias Técnicos</p>
              <h2 className={styles.sectionTitle} data-aos="fade-up">Conhecimento que protege seu projeto</h2>
              <p className={styles.sectionSubtitle} data-aos="fade-up">
                Análises regulatórias e metodologias práticas sobre licenciamento, PGRS, ASV e gestão ambiental na Bahia.
              </p>
            </div>
            <div className={styles.ctaCol} data-aos="fade-up">
              <Button variant="stroke" href="/blog">
                Acessar o Blog Completo →
              </Button>
            </div>
          </div>

          <div className={styles.grid}>
            {posts.map((post) => (
              <div key={post._id || post.slug} data-aos="fade-up">
                <PostCard post={post} />
              </div>
            ))}
          </div>

          <div className={styles.mobileCta}>
            <Button variant="stroke" href="/blog">
              Acessar o Blog Completo →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
