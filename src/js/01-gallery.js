//  Імпорт бібліотеки
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryConteinerRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryCards(galleryItems);


galleryConteinerRef.insertAdjacentHTML('beforeend', galleryMarkup);

galleryConteinerRef.addEventListener('click', onOpenLightbox);

function onOpenLightbox(event) {

    event.preventDefault();

    if (event.target.nodeName !== 'IMG'){
        return
    }
    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: '250',
 });
}

function createGalleryCards (galleryItems) {
    return galleryItems.map( ({preview, original, description}) => {
    return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`
    }).join("");
}
