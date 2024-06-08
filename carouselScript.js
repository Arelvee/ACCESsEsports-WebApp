const carouselItems = document.querySelectorAll("#heroCarousel .carousel-item");
let currentIndex = 0;

function showSlide(index) {
    carouselItems.forEach(item => item.style.display = "none"); // Hide all items
    carouselItems[index].style.display = "block"; // Show the selected item
    carouselItems[index].style.opacity = 0; // Start with opacity 0
    
    // Fade in the selected item
    setTimeout(() => {
        carouselItems[index].style.opacity = 1;
    }, 10); // Slight delay for the fade-in effect
}

showSlide(currentIndex); // Initial setup

document.querySelector("#heroCarousel .carousel-control-next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
});

document.querySelector("#heroCarousel .carousel-control-prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
});


// Optionally, for automatic sliding:
setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showSlide(currentIndex);
}, 5000); // Change slide every 5 seconds

