import { galleryItems } from './gallery-items.js';



// Change code below this line
console.log(galleryItems);
const refGallery = document.querySelector('.gallery');
const innerHTML = renderGalleryItems(galleryItems)

refGallery.innerHTML = innerHTML;


function renderGalleryItems(items) {
    return   items.map(el => {
        return `<a class="gallery__item" href="${el.original}">
  <img class="gallery__image" src="${el.preview}" alt="${el.description}" />
</a>`
    }).join('')
}
var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
    captionDelay: 250
  });
console.log(lightbox);



