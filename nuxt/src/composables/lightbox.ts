import PhotoSwipeLightbox from 'photoswipe/lightbox'
import PhotoSwipe from 'photoswipe'
import 'photoswipe/style.css'

export function useLightbox (id: string) {
  const lightbox = new PhotoSwipeLightbox({
    pswpModule: PhotoSwipe,
    gallery: `#${id}`,
    children: 'a',
    easing: 'cubic-bezier(.4,0,.6,1)',
    hideAnimationDuration: 261,
    showAnimationDuration: 261,
    zoomAnimationDuration: 261,
  })

  lightbox.on('uiRegister', function () {
    lightbox.pswp?.ui?.registerElement({
      name: 'lightbox-close',
      title: '',
      order: 20,
      isButton: true,
      onClick: 'close',
      html: '<span class="emoji">✖️</span>',
    })
  })

  return lightbox
}
