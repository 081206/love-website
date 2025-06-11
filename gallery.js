document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const items = document.querySelectorAll('.gallery-item');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;

    // Set up gallery
    function setupGallery() {
        items.forEach((item, index) => {
            item.style.transform = `translateX(${index * 100}%)`;
        });
    }

    // Move to next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % items.length;
        updateGallery();
    }

    // Move to previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateGallery();
    }

    // Update gallery position
    function updateGallery() {
        items.forEach((item, index) => {
            const offset = (index - currentIndex) * 100;
            item.style.transform = `translateX(${offset}%)`;
        });
    }

    // Add event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto-advance slides every 5 seconds
    setInterval(nextSlide, 5000);

    // Initialize gallery
    setupGallery();
}); 