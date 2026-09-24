// services.js
// Manages the services accordion: only one card is open at a time,
// clicking another closes the previous one.

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.accordion-item');

  function closeItem(item) {
    item.classList.remove('open');
    const header = item.querySelector('.accordion-header');
    if (header) header.setAttribute('aria-expanded', 'false');
  }

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (!header) return;

    header.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      items.forEach(closeItem);

      if (!isOpen) {
        item.classList.add('open');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // Open the card matching the URL hash (e.g. hero/footer links to #civil-works)
  function openFromHash() {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    if (!target || !target.classList.contains('accordion-item')) return;
    items.forEach(closeItem);
    target.classList.add('open');
    const header = target.querySelector('.accordion-header');
    if (header) header.setAttribute('aria-expanded', 'true');
  }

  openFromHash();
  window.addEventListener('hashchange', openFromHash);
});