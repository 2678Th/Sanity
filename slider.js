// Automated header background image slider for Home page
const images = [
    'img/african-social-worker-helping-senior-woman.jpg',
    'img/book-wall-1151405_640.jpg',
    'img/dementia-8734695_640.jpg',
    'img/full-shot-senior-couple-with-cat-home.jpg',
    'img/fun-activities-in-old-age-home.png',
    'img/house-217260_640.jpg',
    'img/nurse-taking-care-elderly-patient.jpg',
    'img/OIP.webp',
    'img/Old-Age-Home-Delhi.jpg',
    'img/portrait-middle-aged-businesswoman.jpg'
];
let current = 0;
const headerBg = document.getElementById('header-bg');
function setHeaderBg() {
    headerBg.style.backgroundImage = `url('${images[current]}')`;
    headerBg.style.backgroundSize = 'cover';
    headerBg.style.backgroundPosition = 'center';
    headerBg.style.filter = 'blur(2px)';
}
setHeaderBg();
setInterval(() => {
    current = (current + 1) % images.length;
    setHeaderBg();
}, 3500);

