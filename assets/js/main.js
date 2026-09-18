// main.js
// Fade-in animation for .project-card elements when they enter the viewport.
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.project-card');

  if (!cards.length) return;

  if (!('IntersectionObserver' in window)) {
    cards.forEach(card => card.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  cards.forEach(card => observer.observe(card));
});