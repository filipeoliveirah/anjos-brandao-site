import type { ReactNode } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
  variant?: 'primary' | 'stroke' | 'darkStroke' | 'small'
  href?: string
  target?: string
  rel?: string
  type?: 'button' | 'submit' | 'reset'
  onClick?: () => void
  fullWidth?: boolean
  className?: string
  disabled?: boolean
  children: ReactNode
}

export default function Button({
  variant = 'primary',
  href,
  target,
  rel,
  type = 'button',
  onClick,
  fullWidth = false,
  className,
  disabled = false,
  children,
}: ButtonProps) {
  const cls = [styles.btn, styles[variant], fullWidth ? styles.fullWidth : '', className]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={cls} onClick={onClick}>
        {children}
      </a>
    )
  }
  return (
    <button type={type} className={cls} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
