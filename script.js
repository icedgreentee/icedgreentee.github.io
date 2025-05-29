const carousel = document.querySelector('.carousel');
const items = Array.from(document.querySelectorAll('.carousel-item'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function updateCarousel() {
  const itemWidth = items[0].offsetWidth + 24; // 24px margin approx (12 left + 12 right)
  const containerWidth = document.querySelector('.carousel-container').offsetWidth;
  const offset = (containerWidth / 2) - (itemWidth / 2);

  const translateX = (index * itemWidth) - offset;
  carousel.style.transform = `translateX(-${translateX}px)`;

  // Update center class
  items.forEach(item => item.classList.remove('center'));
  items[index].classList.add('center');
}

// Arrow button handlers
prevBtn.addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

// Initialize carousel
updateCarousel();
