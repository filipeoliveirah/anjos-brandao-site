/// <reference types="vite/client" />

declare module 'aos' {
  interface AosOptions {
    duration?: number
    once?: boolean
    offset?: number
    easing?: string
    delay?: number
    disable?: 'mobile' | 'phone' | 'tablet' | boolean | (() => boolean)
    startEvent?: string
    initClassName?: string
    animatedClassName?: string
    useClassNames?: boolean
    disableMutationObserver?: boolean
    debounceDelay?: number
    throttleDelay?: number
  }
  const AOS: {
    init(options?: AosOptions): void
    refresh(initialize?: boolean): void
    refreshHard(): void
  }
  export default AOS
}
