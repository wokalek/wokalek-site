import PhotoSwipeLightbox from 'photoswipe/lightbox'
import PhotoSwipe from 'photoswipe'
import 'photoswipe/style.css'

export function useLightbox (id: string) {
  const lightbox = new PhotoSwipeLightbox({
    pswpModule: PhotoSwipe,
    arrowPrev: false,
    arrowNext: false,
    zoom: false,
    close: false,
    counter: false,
    gallery: `#${id}`,
    children: 'a',
    easing: 'cubic-bezier(.4,0,.6,1)',
    hideAnimationDuration: 261,
    showAnimationDuration: 261,
    zoomAnimationDuration: 261,
  })

  lightbox.on('uiRegister', function () {
    lightbox.pswp?.ui?.registerElement({ name: 'custom-close', title: 'Закрыть', order: 20, isButton: true, onClick: 'close', html: '<span class="emoji">❌</span>'})
  })

  return lightbox
}
