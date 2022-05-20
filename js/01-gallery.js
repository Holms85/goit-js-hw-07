import { galleryItems } from "./gallery-items.js";
const galleryRefs = document.querySelector(".gallery");
const newElement = createElement(galleryItems);

galleryRefs.insertAdjacentHTML("beforeend", newElement);
function createElement(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}
const originImgClick = (e) => {
  e.preventDefoult();
  console.log(e);
  // console.log(e.target.classList.contains('.gallery__image'));
  const targetElement = e.target.classList.contains("gallery__image");
  if (!targetElement) {
    return;
  } else {
    const instance = basicLightbox.create(`
	<img
      src="${e.target.dataset.source}"
      alt="${description}"
    />
`);
    instance.show();
  }
};
galleryRefs.addEventListener("click", originImgClick);

