import type { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'stroke' | 'small'
  href?: string
  onClick?: () => void
  fullWidth?: boolean
  children: ReactNode
}

export default function Button({ variant = 'primary', href, onClick, fullWidth = false, children }: ButtonProps) {
  const cls = [styles.btn, styles[variant], fullWidth ? styles.fullWidth : '']
    .filter(Boolean)
    .join(' ')

  if (href) return <a href={href} className={cls}>{children}</a>
  return <button type="button" className={cls} onClick={onClick}>{children}</button>
}
