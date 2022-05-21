import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRefs = document.querySelector(".gallery");
// galleryRefs.addEventListener("click", onModalClick);

galleryRefs.insertAdjacentHTML("beforeend", createElement(galleryItems));

function createElement(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join("");
}
new SimpleLightbox('.gallery a', { captionsData: "alt", captionsDelay: 250 });

