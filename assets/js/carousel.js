(function () {
  var slides = document.querySelectorAll('.hero .slide');
  var dots = document.querySelectorAll('.hero .dot');
  // Single (or no) slide: static hero, no rotation/controls needed.
  if (slides.length <= 1) return;

  var current = 0;
  var timer;

  function goToSlide(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetTimer();
  }

  function changeSlide(dir) {
    goToSlide(current + dir);
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(function () { changeSlide(1); }, 5500);
  }

  window.goToSlide = goToSlide;
  window.changeSlide = changeSlide;

  resetTimer();
})();
