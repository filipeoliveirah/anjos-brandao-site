import styles from './SectionIntro.module.css'

interface SectionIntroProps {
  num: string
  subhead: string
  title: string
}

export default function SectionIntro({ num, subhead, title }: SectionIntroProps) {
  return (
    <div className={styles.intro} data-num={num} data-aos="fade-up">
      <h3 className="subhead">{subhead}</h3>
      <h1 className="display-1">{title}</h1>
    </div>
  )
}
