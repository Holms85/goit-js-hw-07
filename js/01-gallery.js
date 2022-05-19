import { galleryItems } from './gallery-items.js';
const galleryRefs = document.querySelector('.gallery');
const newElement = createElement(galleryItems);
galleryRefs.addEventListener('click', originImgClick);
galleryRefs.insertAdjacentHTML('beforeend', newElement);
function createElement(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" rel="nofollov">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join("");
};
function originImgClick(e) {
    // e.preventDefoult();
    console.log(e);
    console.log(e.target.classList.contains('gallery__image'));
    if (!e.target.classList.contains('gallery__image')) {
        return
    } else {
        const instance = basicLightbox.create(`
	<img
      src="${e.target.dataset.source}"
    />
`);
        instance.show()
    }
    
    
}
// instance.show()
originImgClick()



// console.log(newElement);
