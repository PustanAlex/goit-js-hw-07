import { galleryItems } from './gallery-items.js';
// Change code below this line
    
document.addEventListener('DOMContentLoaded', function () {
    const gallery = document.querySelector('.gallery');

    function renderGallery() {
        galleryItems.forEach(item => {
            const listItem = document.createElement('li');
            listItem.classList.add('gallery__item');

            const link = document.createElement('a');
            link.classList.add('gallery__link');
            link.href = item.original;

            const img = document.createElement('img');
            img.classList.add('gallery__image');
            img.src = item.preview;
            img.alt = item.description;

            link.appendChild(img);
            listItem.appendChild(link);
            gallery.appendChild(listItem);
        });
    }

    renderGallery();


    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/simplelightbox/2.1.0/simple-lightbox.min.js';
    script.type = 'text/javascript';

    script.onload = function () {
        const lightbox = new SimpleLightbox('.gallery a', {
            captionDelay: 250, // 
        });
    };

    document.head.appendChild(script);
});
console.log(galleryItems);
