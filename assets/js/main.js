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

// Back-to-top button (site-wide)
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.createElement('button');
  btn.id = 'back-to-top';
  btn.setAttribute('aria-label', 'Back to top');
  btn.setAttribute('title', 'Back to top');
  btn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:24px;height:24px"><path d="M4.5 15.75 12 8.25l7.5 7.5"/></svg>';

  const hasWhatsApp = !!document.querySelector('a[href^="https://wa.me/"]');
  Object.assign(btn.style, {
    position: 'fixed',
    right: '20px',
    bottom: hasWhatsApp ? '88px' : '24px',
    zIndex: '50',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '9999px',
    backgroundColor: '#036D21',
    color: '#ffffff',
    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)',
    border: 'none',
    cursor: 'pointer',
    opacity: '0',
    pointerEvents: 'none',
    transform: 'translateY(8px)',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
  });
  document.body.appendChild(btn);

  const toggleBackToTop = () => {
    const y = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
    const hidden = y <= 150;
    btn.style.opacity = hidden ? '0' : '1';
    btn.style.pointerEvents = hidden ? 'none' : 'auto';
    btn.style.transform = hidden ? 'translateY(8px)' : 'translateY(0)';
  };
  ['scroll', 'resize'].forEach((ev) => {
    window.addEventListener(ev, toggleBackToTop, { passive: true });
  });
  document.addEventListener('scroll', toggleBackToTop, { passive: true, capture: true });
  toggleBackToTop();

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});