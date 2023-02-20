import SimpleLightox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import '../css/common.css';
import '../css/01-gallery.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const imageMarkup = createItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', imageMarkup);

function createItemsMarkup(image) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery">
<li>
<a class="gallery__item" href="${original}">
<img 
class="gallery__image"
src="${preview}"
alt="${description}"
/>
</a>
</li>
</div>`;
    })
    .join('');
}
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionType: 'alt',
});

console.log(galleryItems);
