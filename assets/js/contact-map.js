// contact-map.js - Live interactive Google Map (Maps JavaScript API)
// Renders an interactive full-width map centred on Dossani House, Blantyre.
// Native pan/zoom + clickable POI badges are provided by the Maps JS API
// once a valid API key is set below. Without a key we fall back to Google's
// keyless interactive embed so the section still works during development.
//
// TO ENABLE THE FULL JS API:
//   1. Create a billing project + enable "Maps JavaScript API".
//   2. Create an API key, restrict it to this site.
//   3. Paste it as GOOGLE_MAPS_API_KEY below.
//   4. Load the page with a hard refresh (JS API caches the script tag).

const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY"; // <-- paste your key here
const MAP_KEY_IS_VALID = GOOGLE_MAPS_API_KEY.length > 20 && !GOOGLE_MAPS_API_KEY.startsWith("YOUR_");

const OFFICE = {
  name: "Dossani House",
  address: "Dossani House, Glyn Jones Rd, Blantyre, Malawi",
  lat: -15.7861,
  lng: 35.0058
};

const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent(OFFICE.address) +
  "&travelmode=driving";

document.addEventListener("DOMContentLoaded", function () {
  const mapEl = document.getElementById("contact-map");
  if (!mapEl) return;

  if (!MAP_KEY_IS_VALID) {
    renderEmbedFallback(mapEl);
    return;
  }

  window.initContactMap = initContactMap;

  const script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?key=" +
    GOOGLE_MAPS_API_KEY +
    "&callback=initContactMap";
  script.async = true;
  script.defer = true;
  script.onerror = function () {
    console.error("Google Maps JS API failed to load — check your API key.");
    renderEmbedFallback(mapEl);
  };
  document.head.appendChild(script);
});

function initContactMap() {
  const mapEl = document.getElementById("contact-map");
  if (!mapEl) return;

  const map = new google.maps.Map(mapEl, {
    center: { lat: OFFICE.lat, lng: OFFICE.lng },
    zoom: 17,
    mapId: undefined, // classic vector map; native POI badges remain clickable
    fullscreenControl: true,
    mapTypeControl: true
  });

  // Marker at the office (Dossani House)
  const marker = new google.maps.Marker({
    position: { lat: OFFICE.lat, lng: OFFICE.lng },
    map: map,
    title: OFFICE.name,
    animation: google.maps.Animation.DROP
  });

  const info = new google.maps.InfoWindow({
    content:
      '<div style="font-family: system-ui, sans-serif; padding: 2px 6px;">' +
      "<strong>Dossani House</strong><br />" +
      "Dossani House, Glyn Jones Rd, Blantyre, Malawi<br />" +
      '<a href="' + DIRECTIONS_URL + '" target="_blank" rel="noopener" ' +
      'style="color:#036D21; font-weight:700; text-decoration:underline;">Get Directions →</a>' +
      "</div>"
  });

  info.open(map, marker);
  marker.addListener("click", function () {
    info.open(map, marker);
  });

  // Directions indicator (floating control, top-right under the zoom buttons)
  const dir = document.createElement("div");
  dir.innerHTML =
    '<a href="' + DIRECTIONS_URL + '" target="_blank" rel="noopener" ' +
    'style="display:inline-flex; align-items:center; gap:8px; ' +
    'background:#ffffff; color:#0F036D; font-family:system-ui,sans-serif; ' +
    'font-weight:700; font-size:14px; padding:10px 16px; border-radius:8px; ' +
    'box-shadow:0 2px 8px rgba(0,0,0,.28); text-decoration:none;">' +
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
    '<path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>' +
    "Get Directions" +
    "</a>";
  dir.style.cssText =
    "position:absolute; top:14px; right:70px; z-index:10;";
  mapEl.appendChild(dir);

  dir.addEventListener("click", function (e) {
    e.preventDefault();
    window.open(DIRECTIONS_URL, "_blank", "noopener");
  });
}

// Keyless fallback — Google's interactive embed (pan/zoom + POI badges work).
// Replaced automatically by the full JS API when a key is configured.
function renderEmbedFallback(mapEl) {
  mapEl.innerHTML = "";
  const frame = document.createElement("iframe");
  frame.title = "Google Map - Dossani House, Blantyre";
  frame.src =
    "https://www.google.com/maps?q=" +
    encodeURIComponent(OFFICE.address) +
    "&z=16&output=embed";
  frame.classList.add("w-full", "h-full", "border-0");
  frame.setAttribute("loading", "lazy");
  frame.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
  mapEl.appendChild(frame);

  // const badge = document.createElement("div");
  // badge.className = "absolute bottom-4 left-4 z-20 bg-white text-red-600 text-xs font-semibold px-3 py-1.5 rounded-md shadow";
  // badge.textContent = "Map preview — add a Google Maps API key for full interactive map";
  // mapEl.appendChild(badge);
}
