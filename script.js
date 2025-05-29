document.addEventListener('DOMContentLoaded', function() {
  // Carousel functionality
  const carousel = document.querySelector('.carousel');
  const items = document.querySelectorAll('.carousel-item');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let currentIndex = 0;
  const itemWidth = items[0].offsetWidth + 16; // Includes gap

  function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  }

  // Button navigation
  prevBtn.addEventListener('click', function() {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
  });

  nextBtn.addEventListener('click', function() {
    currentIndex = Math.min(currentIndex + 1, items.length - 1);
    updateCarousel();
  });

  // Touch support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, {passive: true});

  carousel.addEventListener('touchend', function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, {passive: true});

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) { // Swipe left
      currentIndex = Math.min(currentIndex + 1, items.length - 1);
    } else if (touchEndX > touchStartX + 50) { // Swipe right
      currentIndex = Math.max(currentIndex - 1, 0);
    }
    updateCarousel();
  }

  // Auto-advance carousel (optional)
  /*
  setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    updateCarousel();
  }, 5000);
  */
});const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * (items[0].offsetWidth + 16)}px)`;
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

//
