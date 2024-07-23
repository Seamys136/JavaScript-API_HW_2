const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg',
    'image6.jpg',
    'image7.jpg',
];

const currentImage = document.getElementById('current-image');
const indicatorsContainer = document.getElementById('indicators');
let currentIndex = 0;

function updateSlider() {
    currentImage.src = images[currentIndex];
    updateIndicators();
}
function updateIndicators() {
    indicatorsContainer.innerHTML = '';
    images.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === currentIndex) {
            indicator.classList.add('active');
        }
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
        indicatorsContainer.appendChild(indicator);
    });
}

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

updateSlider();