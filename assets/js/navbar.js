// navbar.js - Fixed version
document.addEventListener('DOMContentLoaded', function() {
  const navbarContainer = document.getElementById('navbar-container');
  if (!navbarContainer) {
    console.error('navbar-container element not found!');
    return;
  }
  
  console.log('Loading navbar...');
  
  fetch("../components/navbar.html")
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.text();
    })
    .then(html => {
      navbarContainer.innerHTML = html;
      console.log('Navbar loaded successfully');
      highlightActiveLink();
    })
    .catch(err => {
      console.error("Navbar failed to load:", err);
      // Fallback navbar
      navbarContainer.innerHTML = `
        <nav class="w-full flex justify-between items-center py-4 px-8 bg-darkBlue text-white">
          <a href="../pages/index.html" class="text-xl font-bold">WOTAZS GROUP</a>
          <div class="text-red-500">Navbar Error - Check Console</div>
        </nav>
      `;
    });
  
  function highlightActiveLink() {
    const currentPage = window.location.pathname.split("/").pop();
    console.log('Current page:', currentPage);
    
    // Wait a bit for DOM to be fully updated
    setTimeout(() => {
      const links = document.querySelectorAll(".nav-link");
      console.log('Found links:', links.length);
      
      links.forEach(link => {
        const linkHref = link.getAttribute('href');
        console.log('Checking link:', linkHref, 'against:', currentPage);
        
        if (linkHref && linkHref.includes(currentPage)) {
          link.classList.add("active");
          link.style.fontWeight = "bold";
          link.style.color = "#fbbf24";
          console.log('Active link set:', linkHref);
        }
      });
    }, 100);
  }
});