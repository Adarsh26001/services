// JavaScript for Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll('.slideshow img');

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = (index === slideIndex) ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides();

// JavaScript for Navigation and Redirection
document.querySelector('.box-services').addEventListener('click', () => {
    window.location.href = 'services.html';
});

document.querySelector('.box-products').addEventListener('click', () => {
    window.location.href = 'https://bezondhiedpvtltd.wordpress.com/';
});

document.querySelector('.box-innovation').addEventListener('click', () => {
    window.location.href = 'https://bezondhiedpvtltd.wordpress.com/';
});

document.querySelector('.box-hiring').addEventListener('click', () => {
    window.location.href = 'https://bezondhiedpvtltd.wordpress.com/';
});

document.querySelector('.box-getintouch').addEventListener('click', () => {
    window.location.href = 'getintouch.html';
});