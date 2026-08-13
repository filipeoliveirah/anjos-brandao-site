import type { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'stroke' | 'small'
  href?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  fullWidth?: boolean
  className?: string
  children: ReactNode
}

export default function Button({ variant = 'primary', href, type = 'button', onClick, fullWidth = false, className, children }: ButtonProps) {
  const cls = [styles.btn, styles[variant], fullWidth ? styles.fullWidth : '', className]
    .filter(Boolean)
    .join(' ')

  if (href) return <a href={href} className={cls}>{children}</a>
  return <button type={type} className={cls} onClick={onClick}>{children}</button>
}
