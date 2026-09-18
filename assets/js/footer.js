
document.addEventListener('DOMContentLoaded', function () {
  const footerContainer = document.getElementById('footer-container');

  if (!footerContainer) {
    console.error('footer-container element not found!');
    return;
  }

  console.log('Loading footer...');

  fetch("../../components/footer.html")
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.text();
    })
    .then(html => {
      footerContainer.innerHTML = html;
      console.log('Footer loaded successfully');
      updateFooterYear();
    })
    .catch(err => {
      console.error("Footer failed to load:", err);

      // Fallback footer (very important for UX)
      footerContainer.innerHTML = `
        <footer class="bg-[#0F036D] text-white py-6 text-center">
          <p>Footer failed to load. Please refresh.</p>
        </footer>
      `;
    });

  function updateFooterYear() {
    const yearElements = document.querySelectorAll('.current-year');
    const year = new Date().getFullYear();

    yearElements.forEach(el => {
      el.textContent = year;
    });
  }
});
