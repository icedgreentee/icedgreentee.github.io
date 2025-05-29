const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function updateCarousel() {
  // Move carousel so center item is visible
  // Each item is ~210px width (200 + margins), so translate by index * 210 minus offset to center the center item
  // Since container width is 650, center item is approx at center: translateX = index * 210 - centerOffset
  // Instead, simpler to translate by index * 210 - half container width + half item width
  const itemWidth = items[0].offsetWidth + 10; // 10px margin approx (5 left + 5 right)
  const containerWidth = document.querySelector('.carousel-container').offsetWidth;
  const offset = (containerWidth / 2) - (itemWidth / 2);

  const translateX = (index * itemWidth) - offset;

  carousel.style.transform = `translateX(-${translateX}px)`;

  // Remove center class from all items, add to the center one
  items.forEach(item => item.classList.remove('center'));
  items[index].classList.add('center');
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

// Initialize carousel on page load
updateCarousel();
