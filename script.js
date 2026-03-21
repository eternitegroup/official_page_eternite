/* ============================================================
   ÉTERNITÉ GROUP — SCRIPT.JS
   Unified script for all pages
   ============================================================ */

'use strict';

/* ── NAVIGATION ── */
function irA(url) {
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.4s ease';
  setTimeout(() => { window.location.href = url; }, 380);
}

function goToLink(url) { irA(url); }

/* ── PAGE ENTRANCE ── */
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '0';
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '1';
  });

  initHeader();
  initMobileMenu();
  initFadeIn();
  initActiveNav();
  initWatchPage();
  initServiciosPage();
});

/* ── HEADER SCROLL ── */
function initHeader() {
  const header = document.querySelector('header');
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 30);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── MOBILE MENU ── */
function initMobileMenu() {
  const nav = document.querySelector('.menu-nav');
  if (!nav) return;

  // Create hamburger
  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label', 'Menú');
  hamburger.innerHTML = '<span></span><span></span><span></span>';

  // Create mobile menu
  const mobileMenu = document.createElement('nav');
  mobileMenu.className = 'mobile-menu';

  // Clone buttons from nav
  const buttons = nav.querySelectorAll('button');
  buttons.forEach(btn => {
    const clone = btn.cloneNode(true);
    mobileMenu.appendChild(clone);
  });

  // Insert into DOM
  const menuDiv = document.querySelector('.menu');
  if (menuDiv) menuDiv.appendChild(hamburger);
  document.body.insertBefore(mobileMenu, document.body.firstChild.nextSibling);

  let menuOpen = false;

  hamburger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    hamburger.classList.toggle('open', menuOpen);
    mobileMenu.style.display = menuOpen ? 'flex' : 'none';
    requestAnimationFrame(() => {
      mobileMenu.classList.toggle('open', menuOpen);
    });
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (menuOpen && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      menuOpen = false;
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      setTimeout(() => { mobileMenu.style.display = 'none'; }, 350);
    }
  });
}

/* ── FADE IN ON SCROLL ── */
function initFadeIn() {
  const elements = document.querySelectorAll('.fade-in');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ── ACTIVE NAV ITEM ── */
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  const btns = document.querySelectorAll('.menu-nav button, .mobile-menu button');

  btns.forEach(btn => {
    const onclick = btn.getAttribute('onclick') || '';
    const match = onclick.match(/'([^']+)'/);
    if (match && match[1] === path) {
      btn.classList.add('active');
    }
  });
}

/* ============================================================
   WATCH PAGE (plantilla_reloj_*.html)
   ============================================================ */

/* Watch image data per model */
const watchData = {
  // Daytona
  w:      { img: './relojes/daytona.png',  name: 'Panda' },
  b:       { img: './relojes/pantilla de relojes/daytona/rain.png',  name: 'Panda black' },
  bu:       { img: './relojes/pantilla de relojes/daytona/azul.png',  name: 'Blue ice' },
  r:        { img: './relojes/pantilla de relojes/daytona/rose.png',  name: 'Rose gold' },

  // GMT
  batman:       { img: './relojes/pantilla de relojes/gmt/1.png', name: 'Batman' },
  brucewayne:   { img: './relojes/pantilla de relojes/gmt/2.png', name: 'Bruce Wayne' },
  joker:        { img: './relojes/pantilla de relojes/gmt/3.png', name: 'Joker' },
  pepsi:        { img: './relojes/pantilla de relojes/gmt/4.png', name: 'Pepsi' },
  coke:         { img: './relojes/pantilla de relojes/gmt/5.png', name: 'Coke' },
  sprite:       { img: './relojes/pantilla de relojes/gmt/6.png', name: 'Sprite' },
  bluemonarch:  { img: './relojes/pantilla de relojes/gmt/7.png', name: 'Blue Monarch' },
  goldwayne:    { img: './relojes/pantilla de relojes/gmt/8.png', name: 'Gold Wayne' },
  rootbear:     { img: './relojes/pantilla de relojes/gmt/9.png', name: 'Root Bear' },

  // Nautilus
  desert_mirage:   { img: './relojes/pantilla de relojes/na/1.png', name: 'Desert Mirage' },
  rose_panther:    { img: './relojes/pantilla de relojes/na/2.png', name: 'Rose Panther' },
  chocolate_wave:  { img: './relojes/pantilla de relojes/na/3.png', name: 'Chocolate Wave' },
  shadow:          { img: './relojes/pantilla de relojes/na/4.png', name: 'Shadow' },
  poseidon:        { img: './relojes/pantilla de relojes/na/5.png', name: 'Poseidon' },
  tiffany_blue:    { img: './relojes/pantilla de relojes/na/6.png', name: 'Tiffany Blue' },
  green_light:     { img: './relojes/pantilla de relojes/na/7.png', name: 'Green Light' },
  silver_surfer:   { img: './relojes/pantilla de relojes/na/8.png', name: 'Silver Surfer' },
  black_panther:   { img: './relojes/pantilla de relojes/na/9.png', name: 'Black Panther' },

  // Royal Oak
  gold_ro:           { img: './relojes/pantilla de relojes/ro/1.png', name: 'Gold' },
  black_ro:          { img: './relojes/pantilla de relojes/ro/2.png', name: 'Black' },
  chronograph_blue:  { img: './relojes/pantilla de relojes/ro/3.png', name: 'Chronograph Blue' },
  blue_ice_ro:       { img: './relojes/pantilla de relojes/ro/4.png', name: 'Blue Ice' },
  chrono_green:      { img: './relojes/pantilla de relojes/ro/5.png', name: 'Chrono Green' },
  white_ro:          { img: './relojes/pantilla de relojes/ro/6.png', name: 'White' },
  rose_gold_white:   { img: './relojes/pantilla de relojes/ro/7.png', name: 'Rose Gold White' },
  chrono_panda:      { img: './relojes/pantilla de relojes/ro/8.png', name: 'Chrono Panda' },
  pink_ro:           { img: './relojes/pantilla de relojes/ro/9.png', name: 'Pink' },

  // Santos
  white_sa:      { img: './relojes/pantilla de relojes/sa/1.png', name: 'White' },
  black_sa:      { img: './relojes/pantilla de relojes/sa/2.png', name: 'Black' },
  silvergold_sa: { img: './relojes/pantilla de relojes/sa/3.png', name: 'Silver Gold' },
  green_sa:      { img: './relojes/pantilla de relojes/sa/4.png', name: 'Green' },
  ninefive:      { img: './relojes/pantilla de relojes/sa/5.png', name: '95' },

  // Submariner
  black_sub:   { img: './relojes/pantilla de relojes/sub/1.png', name: 'Black Sub' },
  greeny:      { img: './relojes/pantilla de relojes/sub/2.png', name: 'Greeny' },
  smurf:       { img: './relojes/pantilla de relojes/sub/3.png', name: 'Smurf' },
  bluephantom: { img: './relojes/pantilla de relojes/sub/4.png', name: 'Blue Phantom' },
  panter:      { img: './relojes/pantilla de relojes/sub/5.png', name: 'Panter' },
  hulk:        { img: './relojes/pantilla de relojes/sub/6.png', name: 'Hulk' },
  starbucks:   { img: './relojes/pantilla de relojes/sub/7.png', name: 'Starbucks' },
  bluesy:      { img: './relojes/pantilla de relojes/sub/8.png', name: 'Bluesy' },
  sky:         { img: './relojes/pantilla de relojes/sub/9.png', name: 'Sky' },

  // Datejust
  dj_1: { img: './relojes/pantilla de relojes/da/datejust/1.png', name: 'Blue' },
  dj_2: { img: './relojes/pantilla de relojes/da/datejust/2.png', name: 'Ice Blue' },
  dj_4: { img: './relojes/pantilla de relojes/da/datejust/3.png', name: 'Mint Green' },
  dj_6: { img: './relojes/pantilla de relojes/da/datejust/4.png', name: 'Black Classic' },

  // Daydate
  dd_1: { img: './relojes/pantilla de relojes/da/day/5.png', name: 'Blue' },
  dd_2: { img: './relojes/pantilla de relojes/da/day/7.png', name: 'Mint Green' },
  dd_4: { img: './relojes/pantilla de relojes/da/day/6.png', name: 'Ice Blue' },
  dd_6: { img: './relojes/pantilla de relojes/da/day/8.png', name: 'Black Classic' },
};

let currentCollection = 'datejust';

function initWatchPage() {
  const watchImage = document.getElementById('watchImage');
  if (!watchImage) return;

  // Zoom on click
  const zoomContainer = document.getElementById('zoomContainer');
  if (zoomContainer) {
    zoomContainer.addEventListener('click', () => {
      zoomContainer.classList.toggle('zoomed');
    });

    // Track mouse for zoom direction
    zoomContainer.addEventListener('mousemove', (e) => {
      if (!zoomContainer.classList.contains('zoomed')) return;
      const rect = zoomContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      watchImage.style.transformOrigin = `${x}% ${y}%`;
    });
  }
}

function changeWatch(key) {
  const data = watchData[key];
  if (!data) return;

  const img = document.getElementById('watchImage');
  const nameEl = document.getElementById('watchName');
  const zoomContainer = document.getElementById('zoomContainer');

  // Unzoom if zoomed
  if (zoomContainer) zoomContainer.classList.remove('zoomed');

  // Animate transition
  if (img) {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.96)';
    setTimeout(() => {
      img.src = data.img;
      img.onload = () => {
        img.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
      };
      img.onerror = () => {
        // fallback: just show it
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
      };
    }, 200);
  }

  if (nameEl) {
    nameEl.style.opacity = '0';
    setTimeout(() => {
      nameEl.textContent = data.name;
      nameEl.style.transition = 'opacity 0.3s ease';
      nameEl.style.opacity = '1';
    }, 200);
  }

  // Update swatch selection
  document.querySelectorAll('.color').forEach(el => el.classList.remove('selected'));
  const clickedSwatch = document.querySelector(`.color[onclick*="${key}"]`);
  if (clickedSwatch) clickedSwatch.classList.add('selected');
}

/* Datejust / Daydate toggle */
function setCollection(col) {
  currentCollection = col;

  // Update toggle buttons
  document.querySelectorAll('.watch-toggle button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(col));
  });

  // Update h1
  const h1 = document.querySelector('.info-box h1');
  if (h1) h1.textContent = col === 'datejust' ? 'Datejust' : 'Day-Date';

  // Load first variant of the collection
  const firstKey = col === 'datejust' ? 'dj_1' : 'dd_1';
  changeWatch(firstKey);
}

/* ============================================================
   SERVICIOS PAGE
   ============================================================ */
function initServiciosPage() {
  // Only run on servicios page
  if (!document.querySelector('.servicios-botones')) return;

  // If URL has hash, activate that tab
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    mostrarServicio(hash);
  }
}

function mostrarServicio(id) {
  // Hide all
  document.querySelectorAll('.servicio-contenido').forEach(el => {
    el.classList.remove('activo');
  });

  // Deactivate all buttons
  document.querySelectorAll('.servicio-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  // Show selected
  const target = document.getElementById(id);
  if (target) target.classList.add('activo');

  // Activate matching button
  document.querySelectorAll('.servicio-btn').forEach(btn => {
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(id)) {
      btn.classList.add('active');
    }
  });
}
