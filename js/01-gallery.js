import { galleryItems } from './gallery-items.js';

const refGallery = document.querySelector('.gallery');

refGallery.addEventListener('click', onGetedUrlBigImg)

const innerHTML = renderGalleryItems(galleryItems)

refGallery.innerHTML = innerHTML;


function renderGalleryItems(items) {
    return   items.map(el => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${el.original}">
    <img
      class="gallery__image"
      src="${el.preview}"
      data-source="${el.original}"
      alt="${el.description}"
    />
  </a>
</div>`
    }).join('')
}

function onGetedUrlBigImg(e) {
  e.preventDefault()
  const imgBigSize = e.target.dataset.source
  
  if (e.target.nodeName !== 'IMG') {
    return
  }

  const instance = basicLightbox.create(`
    <img src="${imgBigSize}" width="800" height="600">
  `)
  instance.show()

  const visible = basicLightbox.visible()
 

  if (visible) {
    window.addEventListener('keydown', onKeyPresEskToCloseModal)

    function onKeyPresEskToCloseModal(e) {
      const keyEscape = e.code === `Escape`

      if (keyEscape) {
        instance.close()
      }
    }
  }

  }








