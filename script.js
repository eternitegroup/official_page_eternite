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
  initNavSearch();
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

  // Ensure mobile menu is fully hidden and non-interactive by default
  mobileMenu.style.display = 'none';
  mobileMenu.style.pointerEvents = 'none';

  let menuOpen = false;

  hamburger.addEventListener('click', (e) => {
    e.stopPropagation();
    menuOpen = !menuOpen;
    hamburger.classList.toggle('open', menuOpen);
    if (menuOpen) {
      mobileMenu.style.display = 'flex';
      mobileMenu.style.pointerEvents = 'auto';
      requestAnimationFrame(() => {
        mobileMenu.classList.add('open');
      });
    } else {
      mobileMenu.classList.remove('open');
      mobileMenu.style.pointerEvents = 'none';
      setTimeout(() => { mobileMenu.style.display = 'none'; }, 350);
    }
  });

  // Close on click outside
  document.addEventListener('click', (e) => {
    if (menuOpen && !hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      menuOpen = false;
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      mobileMenu.style.pointerEvents = 'none';
      setTimeout(() => { mobileMenu.style.display = 'none'; }, 350);
    }
  });
}

/* ── NAV SEARCH ── */
function initNavSearch() {
  const nav = document.querySelector('.menu-nav');
  if (!nav) return;

  // Pages & content to search
  const searchIndex = [
    { name: 'Inicio',           type: 'Página',      url: 'index.html',      icon: 'home' },
    { name: 'Relojes',          type: 'Página',      url: 'relojes.html',    icon: 'clock' },
    { name: 'Servicios',        type: 'Página',      url: 'servicios.html',  icon: 'tool' },
    { name: 'Contacto',         type: 'Página',      url: 'contacto.html',   icon: 'mail' },
    { name: 'Reparación',       type: 'Servicio',    url: 'servicios.html#reparacion',    icon: 'tool' },
    { name: 'Personalización',  type: 'Servicio',    url: 'servicios.html#personalizacion', icon: 'tool' },
    { name: 'Venta',            type: 'Servicio',    url: 'servicios.html#venta',         icon: 'tool' },
    { name: 'Daytona',          type: 'Reloj',       url: 'relojes.html',    icon: 'clock' },
    { name: 'Submariner',       type: 'Reloj',       url: 'relojes.html',    icon: 'clock' },
    { name: 'GMT',              type: 'Reloj',       url: 'relojes.html',    icon: 'clock' },
    { name: 'Datejust',         type: 'Reloj',       url: 'relojes.html',    icon: 'clock' },
    { name: 'Nautilus',         type: 'Reloj',       url: 'relojes.html',    icon: 'clock' },
    { name: 'Royal Oak',        type: 'Reloj',       url: 'relojes.html',    icon: 'clock' },
    { name: 'Santos',           type: 'Reloj',       url: 'relojes.html',    icon: 'clock' },
    { name: 'Instagram',        type: 'Contacto',    url: 'contacto.html',   icon: 'mail' },
    { name: 'Own Your Time',    type: 'Concepto',    url: 'index.html',      icon: 'home' },
    { name: 'Packaging',        type: 'Servicio',    url: 'servicios.html',  icon: 'tool' },
    { name: 'Dedicatoria',      type: 'Servicio',    url: 'servicios.html',  icon: 'tool' },
  ];

  const icons = {
    home:  `<svg viewBox="0 0 24 24"><path d="M3 9.5L12 3l9 6.5V21H15v-5h-6v5H3z"/></svg>`,
    clock: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 15"/></svg>`,
    tool:  `<svg viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    mail:  `<svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  };

  // Build search widget HTML
  const wrapper = document.createElement('div');
  wrapper.className = 'nav-search';
  wrapper.innerHTML = `
    <button class="nav-search-toggle" aria-label="Buscar" id="navSearchToggle">
      <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    </button>
    <div class="nav-search-overlay" id="navSearchOverlay"></div>
    <div class="nav-search-box">
      <div class="nav-search-inner">
        <input class="nav-search-input" id="navSearchInput" type="text" placeholder="Buscar..." autocomplete="off" spellcheck="false">
        <button class="nav-search-clear" id="navSearchClear" aria-label="Borrar">✕</button>
        <div class="nav-search-results" id="navSearchResults">
          <div class="nav-search-no-results">Sin resultados</div>
        </div>
      </div>
    </div>
  `;

  // Insertar en .menu (no dentro de .menu-nav) para que sea visible en móvil
  const menuDiv = document.querySelector('.menu');
  if (menuDiv) {
    menuDiv.appendChild(wrapper);
  } else {
    nav.appendChild(wrapper);
  }

  const toggle = wrapper.querySelector('#navSearchToggle');
  const input  = wrapper.querySelector('#navSearchInput');
  const clear  = wrapper.querySelector('#navSearchClear');
  const results = wrapper.querySelector('#navSearchResults');
  const noResults = wrapper.querySelector('.nav-search-no-results');

  function openSearch() {
    wrapper.classList.add('open');
    setTimeout(() => input.focus(), 50);
  }

  function closeSearch() {
    wrapper.classList.remove('open', 'has-results', 'no-match', 'has-value');
    input.value = '';
    results.innerHTML = '';
    results.appendChild(noResults);
  }

  function renderResults(query) {
    const q = query.trim().toLowerCase();
    results.innerHTML = '';
    results.appendChild(noResults);

    wrapper.classList.remove('has-results', 'no-match');

    if (!q) return;

    const matches = searchIndex.filter(item =>
      item.name.toLowerCase().includes(q) || item.type.toLowerCase().includes(q)
    ).slice(0, 6);

    if (!matches.length) {
      wrapper.classList.add('no-match');
      return;
    }

    wrapper.classList.add('has-results');

    matches.forEach(item => {
      const el = document.createElement('a');
      el.className = 'nav-search-result-item';
      el.href = item.url;
      el.innerHTML = `
        <div class="nav-search-result-icon">${icons[item.icon]}</div>
        <div class="nav-search-result-text">
          <span class="nav-search-result-name">${item.name}</span>
          <span class="nav-search-result-type">${item.type}</span>
        </div>
      `;
      el.addEventListener('click', (e) => {
        e.preventDefault();
        closeSearch();
        irA(item.url);
      });
      results.appendChild(el);
    });
  }

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    wrapper.classList.contains('open') ? closeSearch() : openSearch();
  });

  // Close on overlay click
  const overlay = wrapper.querySelector('#navSearchOverlay');
  if (overlay) {
    overlay.addEventListener('click', closeSearch);
  }

  clear.addEventListener('click', (e) => {
    e.stopPropagation();
    input.value = '';
    wrapper.classList.remove('has-value', 'has-results', 'no-match');
    results.innerHTML = '';
    results.appendChild(noResults);
    input.focus();
  });

  input.addEventListener('input', () => {
    const val = input.value;
    wrapper.classList.toggle('has-value', val.length > 0);
    renderResults(val);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeSearch();
  });

  document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target)) closeSearch();
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
   PDF GENERATION — cpGeneratePDF()
   Uses jsPDF (loaded via CDN in relojes.html)
   ============================================================ */
window.cpGeneratePDF = function () {
  // Collect data from the form
  const modelo    = document.getElementById('cp-sum-model')    ? document.getElementById('cp-sum-model').textContent    : (document.getElementById('cp-sel-model') ? document.getElementById('cp-sel-model').textContent : '—');
  const variante  = document.getElementById('cp-sum-variante') ? document.getElementById('cp-sum-variante').textContent : (document.getElementById('cp-variante')   ? document.getElementById('cp-variante').value          : '—');
  const muneca    = document.getElementById('cp-sum-wrist')    ? document.getElementById('cp-sum-wrist').textContent    : (document.getElementById('cp-wristVal')   ? document.getElementById('cp-wristVal').textContent    : '—');
  const correa    = document.getElementById('cp-sum-strap')    ? document.getElementById('cp-sum-strap').textContent    : '—';
  const talla     = document.getElementById('cp-sum-size')     ? document.getElementById('cp-sum-size').textContent     : (document.getElementById('cp-sizeResult') ? document.getElementById('cp-sizeResult').textContent  : '—');
  const notas     = document.getElementById('cp-notas')        ? document.getElementById('cp-notas').value              : '';

  const varianteVal = (variante === '—' || variante === '') ? (document.getElementById('cp-variante') ? document.getElementById('cp-variante').value || '—' : '—') : variante;

  // jsPDF
  const { jsPDF } = window.jspdf;
  if (!jsPDF) { alert('Error: no se pudo cargar jsPDF. Comprueba tu conexión.'); return; }

  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const W = 210, H = 297;
  const gold = [180, 145, 80];
  const black = [10, 10, 10];
  const white = [255, 255, 255];
  const grayDark = [30, 30, 30];
  const grayMid  = [60, 60, 60];
  const grayLight = [120, 120, 120];

  // ── Background
  doc.setFillColor(...black);
  doc.rect(0, 0, W, H, 'F');

  // ── Top gold accent bar
  doc.setFillColor(...gold);
  doc.rect(0, 0, W, 3, 'F');

  // ── Left side thin gold line
  doc.setFillColor(...gold);
  doc.rect(14, 20, 0.5, H - 40, 'F');

  // ── Logo area
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(...gold);
  doc.text('ÉTERNITÉ GROUP', 25, 32);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...grayLight);
  doc.setCharSpace(3);
  doc.text('ALTA RELOJERÍA · EDICIÓN EXCLUSIVA', 25, 39);
  doc.setCharSpace(0);

  // Date top right
  const now = new Date();
  const dateStr = now.toLocaleDateString('es-ES', { day: '2-digit', month: 'long', year: 'numeric' });
  doc.setFontSize(8);
  doc.setTextColor(...grayLight);
  doc.text(dateStr, W - 15, 32, { align: 'right' });

  // ── Divider
  doc.setDrawColor(...gold);
  doc.setLineWidth(0.4);
  doc.line(25, 44, W - 15, 44);

  // ── Title block
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(...white);
  doc.setCharSpace(4);
  doc.text('ORDEN DE PEDIDO', 25, 58);
  doc.setCharSpace(0);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8);
  doc.setTextColor(...grayLight);
  doc.text('Este documento resume los detalles de tu pedido. Adjúntalo al contactarnos.', 25, 65);

  // ── Order ID
  const orderId = 'EG-' + now.getFullYear() + '-' + String(now.getMonth()+1).padStart(2,'0') + String(now.getDate()).padStart(2,'0') + '-' + Math.floor(Math.random()*9000+1000);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(...gold);
  doc.text('Referencia: ' + orderId, W - 15, 65, { align: 'right' });

  // ── Section: Detalles del pedido
  let y = 80;

  // Section header bg
  doc.setFillColor(...grayDark);
  doc.rect(25, y - 5, W - 40, 10, 'F');
  doc.setFillColor(...gold);
  doc.rect(25, y - 5, 2, 10, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...gold);
  doc.setCharSpace(2);
  doc.text('DETALLES DEL MODELO', 30, y + 2);
  doc.setCharSpace(0);

  y += 16;

  // Fields
  const fields = [
    { label: 'Colección',        value: modelo },
    { label: 'Variante / Color', value: varianteVal || '—' },
    { label: 'Perímetro muñeca', value: muneca },
    { label: 'Tipo de correa',   value: correa },
    { label: 'Talla recomendada',value: talla },
  ];

  fields.forEach((f, i) => {
    const rowY = y + i * 14;

    // Alternating row bg
    if (i % 2 === 0) {
      doc.setFillColor(20, 20, 20);
      doc.rect(25, rowY - 5, W - 40, 13, 'F');
    }

    // Label
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(...grayLight);
    doc.text(f.label.toUpperCase(), 30, rowY + 1);

    // Value
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(...white);
    doc.text(f.value, W - 15, rowY + 1, { align: 'right' });

    // Bottom line
    doc.setDrawColor(40, 40, 40);
    doc.setLineWidth(0.2);
    doc.line(25, rowY + 7, W - 15, rowY + 7);
  });

  y += fields.length * 14 + 10;

  // ── Section: Notas adicionales
  doc.setFillColor(...grayDark);
  doc.rect(25, y - 5, W - 40, 10, 'F');
  doc.setFillColor(...gold);
  doc.rect(25, y - 5, 2, 10, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...gold);
  doc.setCharSpace(2);
  doc.text('NOTAS ADICIONALES', 30, y + 2);
  doc.setCharSpace(0);

  y += 16;

  const notasText = notas.trim() || 'Sin notas adicionales.';
  doc.setFillColor(20, 20, 20);
  doc.rect(25, y - 5, W - 40, 30, 'F');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(...white);
  const lines = doc.splitTextToSize(notasText, W - 55);
  doc.text(lines.slice(0,3), 30, y + 2);

  y += 40;

  // ── Section: Instrucciones de envío
  doc.setFillColor(...grayDark);
  doc.rect(25, y - 5, W - 40, 10, 'F');
  doc.setFillColor(...gold);
  doc.rect(25, y - 5, 2, 10, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(...gold);
  doc.setCharSpace(2);
  doc.text('CÓMO ENVIAR TU PEDIDO', 30, y + 2);
  doc.setCharSpace(0);

  y += 16;

  const steps = [
    '1.  Guarda este PDF en tu dispositivo.',
    '2.  Abre Instagram y ve a @eternitegroup.',
    '3.  Envía un mensaje directo adjuntando este documento.',
    '4.  Nuestro equipo te responderá en menos de 24 h.',
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(...white);

  steps.forEach((s, i) => {
    doc.setFillColor(i % 2 === 0 ? 20 : 15, i % 2 === 0 ? 20 : 15, i % 2 === 0 ? 20 : 15);
    doc.rect(25, y - 4, W - 40, 12, 'F');
    doc.text(s, 30, y + 3);
    y += 12;
  });

  y += 8;

  // ── Contact bar
  doc.setFillColor(...grayDark);
  doc.rect(25, y, W - 40, 18, 'F');
  doc.setFillColor(...gold);
  doc.rect(25, y, W - 40, 1, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8);
  doc.setTextColor(...gold);
  doc.text('Instagram', 35, y + 7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...white);
  doc.text('@eternitegroup', 35, y + 13);

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(...gold);
  doc.text('Correo electrónico', W/2 - 5, y + 7);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(...white);
  doc.text('contacteternitegroup@gmail.com', W/2 - 5, y + 13);

  // ── Bottom gold bar + footer
  doc.setFillColor(...gold);
  doc.rect(0, H - 15, W, 0.4, 'F');

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7);
  doc.setTextColor(...grayLight);
  doc.text('© ' + now.getFullYear() + ' ÉTERNITÉ GROUP — "Own Your Time"', W / 2, H - 8, { align: 'center' });

  // ── Save
  doc.save('Pedido_EternitéGroup_' + orderId + '.pdf');
};

/* ── Update summary when navigating steps ── */
window.cpUpdateSummary = function () {
  const m  = document.getElementById('cp-sel-model');
  const w  = document.getElementById('cp-wristVal');
  const v  = document.getElementById('cp-variante');
  const st = document.getElementById('cp-strapType');
  const sz = document.getElementById('cp-sizeResult');

  if (document.getElementById('cp-sum-model')    && m)  document.getElementById('cp-sum-model').textContent    = m.textContent;
  if (document.getElementById('cp-sum-wrist')    && w)  document.getElementById('cp-sum-wrist').textContent    = w.textContent;
  if (document.getElementById('cp-sum-variante') && v)  document.getElementById('cp-sum-variante').textContent = v.value || '—';
  if (document.getElementById('cp-sum-strap')    && st) {
    const opts = { '0': 'Oyster / Jubilee', '5': 'Cuero / Caucho', '10': 'NATO / Tela' };
    document.getElementById('cp-sum-strap').textContent = opts[st.value] || st.value;
  }
  if (document.getElementById('cp-sum-size')     && sz) document.getElementById('cp-sum-size').textContent     = sz.textContent;
};

/* ============================================================
   SERVICIOS PAGE
   ============================================================ */
function initServiciosPage() {
  if (!document.querySelector('.servicios-botones')) return;

  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    mostrarServicio(hash);
  }
}

function mostrarServicio(id) {
  document.querySelectorAll('.servicio-contenido').forEach(el => {
    el.classList.remove('activo');
  });

  document.querySelectorAll('.servicio-btn').forEach(btn => {
    btn.classList.remove('active');
  });

  const target = document.getElementById(id);
  if (target) target.classList.add('activo');

  document.querySelectorAll('.servicio-btn').forEach(btn => {
    if (btn.getAttribute('onclick') && btn.getAttribute('onclick').includes(id)) {
      btn.classList.add('active');
    }
  });
}
