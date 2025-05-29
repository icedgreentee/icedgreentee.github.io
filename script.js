const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function updateCarousel() {
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function showPrev() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
}

function showNext() {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Optional: Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') showPrev();
  if (e.key === 'ArrowRight') showNext();
});

// Optional: Touch swipe for mobile
let startX = 0;
carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});
carousel.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 40) showNext();
  else if (endX - startX > 40) showPrev();
});
