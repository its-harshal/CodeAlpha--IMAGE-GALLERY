

const images = [
   " https://www.shutterstock.com/image-illustration/black-modern-car-headlights-front-600nw-771184300.jpg",
    "https://i.pinimg.com/736x/4f/64/88/4f6488df8fea82e9091020db17f12d39.jpg",
    "https://i.pinimg.com/736x/c2/59/4a/c2594a1e1091c09b3880dc6279a775c6.jpg" // Add more image URLs here
];


let currentIndex = 0;

function navigateGallery(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('galleryImage').src = images[currentIndex];
}

function changeImage(index) {
    currentIndex = index;
    document.getElementById('galleryImage').src = images[currentIndex];
}
