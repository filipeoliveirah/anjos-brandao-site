import styles from './Preloader.module.css'

interface PreloaderProps {
  visible: boolean
}

export default function Preloader({ visible }: PreloaderProps) {
  return (
    <div className={`${styles.preloader}${visible ? '' : ` ${styles.hidden}`}`}>
      <div className={styles.loader}>
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}
