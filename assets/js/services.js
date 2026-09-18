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
});