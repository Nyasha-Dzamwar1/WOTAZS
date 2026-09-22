// main.js
// Reveal animations: fade .project-card and [data-reveal] elements in when
// they enter the viewport.
document.addEventListener('DOMContentLoaded', function () {
  const targets = document.querySelectorAll('.project-card, [data-reveal]');

  if (!targets.length) return;

  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('visible'));
    return;
  }

  targets.forEach((el) => {
    const delay = parseInt(el.dataset.revealDelay || '0', 10);
    if (delay) el.style.transitionDelay = delay + 'ms';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add('visible');
          const delay = parseInt(el.dataset.revealDelay || '0', 10);
          setTimeout(() => {
            el.style.transitionDelay = '';
            el.classList.add('reveal-done');
          }, delay + 900);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
});