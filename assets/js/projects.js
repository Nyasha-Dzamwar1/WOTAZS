// projects.js
// Renders the project gallery cards and adds a fade-in animation when
// cards enter the viewport. To add a project, just add an object to the
// `projects` array below.

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  const PLACEHOLDER_IMAGE = 'assets/images/general/image1.jpg';

  const projects = [
    {
      slug: 'resident-house',
      title: 'Resident House',
      location: 'Likoma Island',
      description: 'Modern residential construction delivered with quality workmanship, on time and within budget.',
      image: 'assets/images/projects/resident-house.jpg'
    },
    {
      slug: 'girls-hostels',
      title: 'Girls Hostels',
      location: 'Blantyre, Zingwangwa',
      description: 'Spacious, secure hostel development built to comfortably accommodate students.',
      image: 'assets/images/projects/girls-hostels.jpg'
    },
    {
      slug: 'reinforced-bridge',
      title: 'Reinforced Bridge',
      location: 'Balaka, Chigwede',
      description: 'Structural concrete bridge engineered for strength, safety and long-term durability.',
      image: 'assets/images/projects/reinforced-bridge.jpg'
    },
    {
      slug: 'illovo-factory-warehouse',
      title: 'Illovo Factory Warehouse',
      location: 'Chikwawa, Ntchalo',
      description: 'Large-scale industrial warehouse facility featuring robust steel and concrete construction.',
      image: 'assets/images/projects/illovo-factory-warehouse.jpg'
    },
    {
      slug: 'reinforced-bridge',
      title: 'Reinforced Bridge',
      location: 'Balaka, Chigwede',
      description: 'Engineered bridge construction focused on precision, load capacity and lasting quality.',
      image: 'assets/images/projects/reinforced-bridge.jpg'
    },
    {
      slug: 'illovo-factory-warehouse',
      title: 'Illovo Factory Warehouse',
      location: 'Chikwawa, Ntchalo',
      description: 'Industrial warehouse construction designed for heavy use and efficient logistics.',
      image: 'assets/images/projects/illovo-factory-warehouse.jpg'
    }
  ];

  const cardTemplate = (project, index) => `
    <article class="project-card group bg-white shadow-sm overflow-hidden flex flex-col" style="transition-delay: ${index % 2 * 120}ms">
      <div class="overflow-hidden aspect-[16/10]">
        <img
          src="${project.image}"
          alt="${project.title} — ${project.location}"
          loading="lazy"
          onerror="this.onerror=null;this.src='${PLACEHOLDER_IMAGE}'"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div class="p-6 md:p-8 flex flex-col grow">
        <h3 class="text-xl font-bold uppercase text-gray-900 mb-1">${project.title}</h3>
        <p class="text-darkBlue uppercase text-sm font-semibold tracking-wide mb-4">${project.location}</p>
        <p class="text-gray-700 text-sm leading-relaxed mb-6">${project.description}</p>
        <a href="project-details.html?project=${project.slug}" class="mt-auto bg-darkGreen hover:bg-[#024d16] hover:-translate-y-0.5 text-white font-bold py-3 px-6 flex items-center justify-between w-full rounded-md transition duration-300">
          <span>View Project</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
            <path fill-rule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </article>
  `;

  grid.innerHTML = projects.map(cardTemplate).join('');

  const cards = grid.querySelectorAll('.project-card');

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