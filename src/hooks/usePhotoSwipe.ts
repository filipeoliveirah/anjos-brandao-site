import { useEffect } from 'react'
import PhotoSwipeLightbox from 'photoswipe/lightbox'

export function usePhotoSwipe(gallerySelector: string): void {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: gallerySelector,
      children: 'a[data-pswp-width]',
      pswpModule: () => import('photoswipe'),
    })
    lightbox.init()
    return () => lightbox.destroy()
  }, [gallerySelector])
}
