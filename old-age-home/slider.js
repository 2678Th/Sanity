// Automated background image slider for header
const images = [
    'img/home1.jpg',
    'img/home2.jpg',
    'img/home3.jpg'
];
let current = 0;
const header = document.getElementById('header-slider');

function setHeaderBg() {
    header.style.backgroundImage = `url('${images[current]}')`;
    header.style.backgroundSize = 'cover';
    header.style.backgroundPosition = 'center';
    header.style.transition = 'background-image 1s ease-in-out';
}

function nextImage() {
    current = (current + 1) % images.length;
    setHeaderBg();
}

if (header) {
    setHeaderBg();
    setInterval(nextImage, 4000);
}
