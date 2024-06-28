const images = document.querySelectorAll('.image');
let currentImageIndex = 0;

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    return { x, y };
}

function changeImage() {
    images.forEach((image, index) => {
        image.style.opacity = '0';
    });

    const currentImage = images[currentImageIndex];
    const position = getRandomPosition();
    currentImage.style.left = `${position.x}px`;
    currentImage.style.top = `${position.y}px`;
    currentImage.style.opacity = '1';

    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Muda a imagem a cada 5 segundos
setInterval(changeImage, 5000);

// Inicializa a primeira imagem
changeImage();