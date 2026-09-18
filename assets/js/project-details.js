// project-details.js
// Renders the dynamic project detail page shared by all projects.
// Any project in the Projects list can open this template via:
//   project-details.html?project=<slug>
// To add a project, add an entry to the PROJECTS object below (slug -> data).

document.addEventListener('DOMContentLoaded', function () {
  const main = document.getElementById('project-detail');
  if (!main) return;

  const IMG_PATH = '../assets/images/projects/';
  const FALLBACK_IMAGE = '../assets/images/general/image1.jpg';

  const PROJECTS = {
    'resident-house': {
      title: 'RESIDENT HOUSE',
      location: 'LIKOMA ISLAND',
      sections: [
        {
          layout: 'text-left',
          images: ['resident-house.jpg'],
          paragraphs: [
            'Lorem ipsum dolor sit amet consectetur. Amet sagittis sollicitudin pellentesque blandit ipsum. Sed eu justo gravida cursus elit. Massa vel et euismod lectus interdum id purus venenatis facilisi nulla.',
            'Consectetur non libero fames lectus fermentum enim. Et donec pellentesque nulla viverra erat sollicitudin nibh. Tincidunt at eget gravida eget risus et. Eget euismod quis sit ultricies sed ac neque integer urna.',
            'Aliquam tortor imperdiet urna aliquam nisl urna sit arcu tellus. In turpis aliquam feugiat placerat dolor. Eget dolor. Nisl aliquet pellentesque pellentesque vulputate amet.'
          ]
        },
        {
          layout: 'image-left',
          images: ['resident-house-vertical.jpg'],
          paragraphs: [
            'Lorem ipsum dolor sit amet consectetur. Non aliquet venenatis varius nunc consectetur. Adipiscing viverra ipsum risus tempor elit. In amet proin ut nisl aliquet est urna.',
            'Consequat viverra sed vulputate eget mi tellus id ut. Ut enim faucibus dui consequat purus sit aenean. Sed quisque proin justo ultrices et a ut dolor sit dolor vitae enim.'
          ]
        }
      ]
    },

    'girls-hostels': {
      title: 'GIRLS HOSTELS',
      location: 'BLANTYRE, ZINGWANGWA',
      sections: [
        {
          layout: 'text-left',
          images: ['girls-hostels.jpg'],
          paragraphs: [
            'Lorem ipsum dolor sit amet consectetur. Amet sagittis sollicitudin pellentesque blandit ipsum. Sed eu justo gravida cursus elit. Massa vel et euismod lectus interdum id purus venenatis facilisi nulla.',
            'Consectetur non libero fames lectus fermentum enim. Et donec pellentesque nulla viverra erat sollicitudin nibh. Tincidunt at eget gravida eget risus et. Eget euismod quis sit ultricies sed ac neque integer urna.',
            'Aliquam tortor imperdiet urna aliquam nisl urna sit arcu tellus. In turpis aliquam feugiat placerat dolor. Eget dolor. Nisl aliquet pellentesque pellentesque vulputate amet.'
          ]
        },
        {
          layout: 'image-left',
          images: ['girls-hostels-vertical.jpg'],
          paragraphs: [
            'Lorem ipsum dolor sit amet consectetur. Non aliquet venenatis varius nunc consectetur. Adipiscing viverra ipsum risus tempor elit. In amet proin ut nisl aliquet est urna.',
            'Consequat viverra sed vulputate eget mi tellus id ut. Ut enim faucibus dui consequat purus sit aenean. Sed quisque proin justo ultrices et a ut dolor sit dolor vitae enim.'
          ]
        }
      ]
    },

    'reinforced-bridge': {
      title: 'REINFORCED BRIDGE',
      location: 'BALAKA, CHIGWEDE',
      sections: [
        {
          layout: 'text-left',
          images: ['reinforced-bridge.jpg'],
          paragraphs: [
            'Lorem ipsum dolor sit amet consectetur. Amet sagittis sollicitudin pellentesque blandit ipsum. Sed eu justo gravida cursus elit. Massa vel et euismod lectus interdum id purus venenatis facilisi nulla.',
            'Consectetur non libero fames lectus fermentum enim. Et donec pellentesque nulla viverra erat sollicitudin nibh. Tincidunt at eget gravida eget risus et. Eget euismod quis sit ultricies sed ac neque integer urna.',
            'Aliquam tortor imperdiet urna aliquam nisl urna sit arcu tellus. In turpis aliquam feugiat placerat dolor. Eget dolor. Nisl aliquet pellentesque pellentesque vulputate amet.'
          ]
        },
        {
          layout: 'image-left',
          images: ['reinforced-bridge-vertical.jpg'],
          paragraphs: [
            'Lorem ipsum dolor sit amet consectetur. Non aliquet venenatis varius nunc consectetur. Adipiscing viverra ipsum risus tempor elit. In amet proin ut nisl aliquet est urna.',
            'Consequat viverra sed vulputate eget mi tellus id ut. Ut enim faucibus dui consequat purus sit aenean. Sed quisque proin justo ultrices et a ut dolor sit dolor vitae enim.'
          ]
        }
      ]
    },

    'illovo-factory-warehouse': {
      title: 'ILLOVO FACTORY WAREHOUSE',
      location: 'CHIKWAWA, NTCHALO',
      sections: [
        {
          layout: 'text-left',
          images: ['illovo-factory-warehouse.jpg'],
          paragraphs: [
            'The Illovo Factory Warehouse in Chikwawa, Ntchalo is one of WOTAZS Group Construction\u2019s landmark industrial projects. Our team managed the full build from site preparation and excavation through to handover, delivering a facility engineered for heavy, continuous use.',
            'Working directly with Illovo, we carried out deep foundations, steel and concrete superstructure, cladding and roofing across the large warehouse footprint. Every stage followed a strict programme, with quality control and safety procedures maintained throughout.',
            'The completed warehouse provides Illovo with a spacious, durable storage facility, delivered on schedule and within budget, and continues the long-standing relationship between WOTAZS and the agro-industrial sector.'
          ]
        },
        {
          layout: 'image-left',
          images: ['illovo-factory-warehouse-vertical.jpg'],
          paragraphs: [
            'Beyond the structure itself, the project required complete electrical installations, water systems and pump installations to support the facility\u2019s daily operations. Our electrical and plumbing teams worked in parallel with civil operations to keep the programme on track.',
            'From the initial site survey to the final finishing works, the Ntchalo warehouse stands as a demonstration of WOTAZS\u2019 ability to deliver complex industrial projects project confidently, safely and to the highest standard.'
          ]
        }
      ]
    }
  };

  function getProject() {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('project');
    return PROJECTS[slug] || PROJECTS['illovo-factory-warehouse'];
  }

  function renderParagraphs(paragraphs) {
    return paragraphs
      .map(p => `<p class="text-[15px] md:text-base leading-[1.6] text-white">${p}</p>`)
      .join('');
  }

  function renderImage(image, alt, className) {
    return (
      '<img src="' + IMG_PATH + image + '" alt="' + alt + '" loading="lazy" ' +
      'onerror="this.onerror=null;this.src=\'' + FALLBACK_IMAGE + '\'" ' +
      'class="' + className + '" ' +
      'style="display:block;width:100%;object-fit:cover;object-position:center;" />'
    );
  }

  function renderSection(section, altPrefix) {
    const paragraphsHtml = renderParagraphs(section.paragraphs);

    if (section.layout === 'image-left') {
      return (
        '<div class="flex flex-col md:flex-row md:items-center mt-6 md:mt-7">' +
        '<div class="w-full md:w-[38%]">' +
        renderImage(section.images[0], altPrefix, 'w-full h-[340px] md:h-[350px]') +
        '</div>' +
        '<div class="w-full md:w-[62%] px-6 md:pl-12 md:pr-16 pt-6 md:pt-0">' +
        '<div class="space-y-7 md:max-w-[42rem]">' + paragraphsHtml + '</div>' +
        '</div>' +
        '</div>'
      );
    }

    return (
      '<div class="flex flex-col md:flex-row md:items-center">' +
      '<div class="md:w-1/2 px-6 md:pl-10 md:pr-8 pt-10 md:pt-14">' +
      '<div class="space-y-7">' + paragraphsHtml + '</div>' +
      '</div>' +
      '<div class="md:w-1/2 mt-6 md:mt-0">' +
      renderImage(section.images[0], altPrefix, 'w-full h-[280px] md:h-[300px]') +
      '</div>' +
      '</div>'
    );
  }

  const project = getProject();
  const titleHtml =
    '<div class="bg-white px-6 md:px-10 py-8">' +
    '<div class="flex items-center gap-4 md:gap-6">' +
    '<a href="projects.html" aria-label="Back to Projects"' +
    ' class="text-darkBlue hover:text-darkGreen transition-colors duration-200 flex-shrink-0">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">' +
    '<path fill-rule="evenodd" d="M7.28 7.72a.75.75 0 0 1 0 1.06L5.81 10.25H20a.75.75 0 1 1 0 1.5H5.81l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2.75-2.75a.75.75 0 0 1 0-1.06l2.75-2.75a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />' +
    '</svg>' +
    '</a>' +
    '<h1 class="font-bold text-[28px] leading-tight">' +
    '<span class="text-darkBlue">' + project.title + ',</span> ' +
    '<span class="text-darkGreen">' + project.location + '</span>' +
    '</h1>' +
    '</div>' +
    '</div>';

  let sectionsHtml = '';
  const sectionCount = project.sections.length;
  for (let i = 0; i < sectionCount; i += 1) {
    sectionsHtml += renderSection(project.sections[i], project.title + ' project image ' + (i + 1));
  }

  const contentHtml =
    '<section class="bg-darkBlue text-white pb-10 md:pb-14">' + sectionsHtml + '</section>';

  main.innerHTML = titleHtml + contentHtml;
  document.title = 'WOTAZS \u2022 ' + project.title;
});