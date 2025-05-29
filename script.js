const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function updateCarousel() {
  // Calculate width of one item + marginRight
  const itemStyle = getComputedStyle(items[0]);
  const itemWidth = items[0].offsetWidth + parseInt(itemStyle.marginRight);
  
  carousel.style.transform = `translateX(-${index * itemWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % items.length;
  updateCarousel();
});

// Initialize carousel position
updateCarousel();
