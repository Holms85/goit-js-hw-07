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
};

function onModalClick(e) {
  
  e.preventDefoult();
  console.log(e.target);
  // console.log(e.target.classList.contains('.gallery__image'));
  const targetElement = e.target.classList.contains("gallery__image");
  if (!targetElement) {
    return;
  } else {
  const instance = basicLightbox.create(`
	<img
      src="${e.target.dataset.source}"
      width="800" height="600"
    />
`);
    instance.show();
  }
};




