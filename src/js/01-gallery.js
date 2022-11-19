// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

  
const img = galleryItems
.map(({ preview, original, description }) =>
    `<a class="gallery__item" href="${original}">
        <img 
        class="gallery__image" 
        src="${preview}" 
        alt="${description}"
        />
        </a>`
        ).join("");
gallery.insertAdjacentHTML("beforeend", img);
  
let lightbox = new SimpleLightbox('.gallery a', 
{captionsData: 'alt', captionDelay:'250'});
  
