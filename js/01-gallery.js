import { galleryItems } from "./gallery-items.js";
const galleryRefs = document.querySelector(".gallery");
galleryRefs.addEventListener("click", onModalClick);

galleryRefs.insertAdjacentHTML("beforeend", createElement(galleryItems));

function createElement(gallery) {
  return gallery
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
let instance;

function onModalClick(e) {
  e.preventDefault();
  if (!e.target.classList.contains("gallery__image")) {
    return;
  }
  instance = basicLightbox.create(`
	<img
      src="${e.target.dataset.source}"
      
    />
`);
  
  window.addEventListener("keydown", clotheEscModal);
  instance.show();
}

function clotheEscModal(e) {
  if (e.key === "Escape") {
    instance.close();
    window.removeEventListener("keydown", clotheEscModal);
  }
}
