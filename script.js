document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevBtn = document.querySelector('.carousel-btn.prev');
  const nextBtn = document.querySelector('.carousel-btn.next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? slides.length -1 : currentIndex -1;
    showSlide(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex === slides.length -1) ? 0 : currentIndex +1;
    showSlide(currentIndex);
  });

  showSlide(currentIndex);
});
