const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let index = 0;

function updateCarousel() {
  // Calculate width of one item + marginRight dynamically
  const itemStyle = getComputedStyle(items[0]);
  const itemWidth = items[0].offsetWidth + parseInt(itemStyle.marginRight);

  // Translate carousel container
  carousel.style.transform = `translateX(-${index * itemWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
  } else {
    index = items.length - 1;
  }
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  if (index < items.length - 1) {
    index++;
  } else {
    index = 0;
  }
  updateCarousel();
});

// Initialize on load
updateCarousel();
