// hero-slider.js
// Crossfades the stacked hero slideshow layers on the home page.
// The layers live in #hero-slides (see index.html). Only one slide is
// visible at a time; this script cycles through them with a fade.
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('#hero-slides .hero-slide');

  if (!slides.length) return;

  const INTERVAL_MS = 6500;
  let current = 0;

  const fadeTo = index => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('opacity-100', i === index);
      slide.classList.toggle('opacity-0', i !== index);
    });
  };

  fadeTo(0);

  setInterval(() => {
    current = (current + 1) % slides.length;
    fadeTo(current);
  }, INTERVAL_MS);
});
