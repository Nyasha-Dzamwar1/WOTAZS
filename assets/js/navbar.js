// navbar.js - clean rewrite: loads components/navbar.html, wires the
// mobile hamburger toggle, and highlights the current-page link.
document.addEventListener('DOMContentLoaded', function() {
  function signalNavbarReady() {
    window.dispatchEvent(new Event('navbar-ready'));
  }

  // Page hosts the navbar inside a container; accept either spelling that
  // exists across the pages to stay robust.
  const navbarContainer = document.getElementById('navbar-container') ||
                          document.getElementById('navbar-container');

  if (!navbarContainer) {
    console.error('navbar container element not found!');
    signalNavbarReady();
    return;
  }

  const CANDIDATE_PATHS = [
    'components/navbar.html', // site root serves the component
    'components/navbar.html'  // last resort
  ];

  function tryLoad(idx) {
    if (idx >= CANDIDATE_PATHS.length) {
      console.error('Navbar failed to load from all paths');
      navbarContainer.innerHTML = `
        <nav class="w-full flex justify-between items-center py-4 px-8 bg-darkBlue text-white">
          <a href="index.html" class="text-xl font-bold">WOTAZS GROUP</a>
        </nav>`;
      signalNavbarReady();
      return;
    }

    fetch(CANDIDATE_PATHS[idx])
      .then(res => {
        if (!res.ok) throw new Error('HTTP ' + res.status);
        return res.text();
      })
      .then(html => {
        navbarContainer.innerHTML = html;
        setupMobileMenu();
        highlightActiveLink();
        signalNavbarReady();
      })
      .catch(err => {
        console.warn('Navbar path ' + CANDIDATE_PATHS[idx] + ' failed:', err.message);
        tryLoad(idx + 1);
      });
  }

  // Hamburger <-> X, collapsible menu. Ids match components/navbar.html.
  function setupMobileMenu() {
    const toggle = navbarContainer.querySelector('#menu-toggle');
    const menu = navbarContainer.querySelector('#nav-menu');
    if (!toggle || !menu) return; // desktop-only layout, nothing to bind

    const bars = navbarContainer.querySelectorAll('.menu-bar');

    function setOpen(open) {
      menu.classList.toggle('hidden', !open);

      if (open) {
        bars[0] && bars[0].classList.add('rotate-45', 'translate-y-[6px]');
        bars[1] && bars[1].classList.add('opacity-0');
        bars[2] && bars[2].classList.add('-rotate-45', '-translate-y-[6px]');
      } else {
        bars[0] && bars[0].classList.remove('rotate-45', 'translate-y-[6px]');
        bars[1] && bars[1].classList.remove('opacity-0');
        bars[2] && bars[2].classList.remove('-rotate-45', '-translate-y-[6px]');
      }
    }

    toggle.addEventListener('click', function() {
      const willOpen = menu.classList.contains('hidden');
      setOpen(willOpen);
    });

    // Tap a link -> close the mobile panel
    menu.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() { setOpen(false); });
    });
  }

  function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();

    setTimeout(function() {
      navbarContainer.querySelectorAll('.nav-link').forEach(function(link) {
        const href = link.getAttribute('href');
        if (href && href.includes(currentPage)) {
          link.classList.add('active');
          link.style.fontWeight = 'bold';
          link.style.color = '#fbbf24';
        }
      });
    }, 150);
  }

  tryLoad(0);
});
