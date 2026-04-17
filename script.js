/* ============================================
   XILITLA — JAVASCRIPT
   script.js
   ============================================ */

/* === SCROLL SUAVE === */
function smoothScroll(id) {
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

/* === NAVBAR: cambia estilo al hacer scroll === */
(function () {
  var navbar = document.getElementById('navbar');
  function onScroll() {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

/* === REVEAL EN SCROLL (Intersection Observer) === */
(function () {
  var elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (entry.isIntersecting) {
        var delay = i * 80;
        setTimeout(function () {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(function (el) {
    observer.observe(el);
  });
})();

/* === PARTÍCULAS FLOTANTES EN EL HERO === */
(function () {
  var container = document.getElementById('particles');
  if (!container) return;

  var colors = [
    'rgba(26,107,60,0.7)',
    'rgba(201,162,39,0.6)',
    'rgba(45,184,112,0.5)',
    'rgba(240,201,74,0.5)',
    'rgba(255,255,255,0.3)'
  ];

  var count = 28;

  for (var i = 0; i < count; i++) {
    (function (index) {
      var p = document.createElement('div');
      p.className = 'particle';

      var size = Math.random() * 6 + 3;
      var left = Math.random() * 100;
      var bottom = Math.random() * 40;
      var color = colors[Math.floor(Math.random() * colors.length)];
      var duration = Math.random() * 8 + 6;
      var delay = Math.random() * 10;

      p.style.cssText = [
        'width:' + size + 'px',
        'height:' + size + 'px',
        'left:' + left + '%',
        'bottom:' + bottom + '%',
        'background:' + color,
        'animation-duration:' + duration + 's',
        'animation-delay:' + delay + 's'
      ].join(';');

      container.appendChild(p);
    })(i);
  }
})();

/* === TABS === */
(function () {
  var buttons = document.querySelectorAll('.tab-btn');
  var panels  = document.querySelectorAll('.tab-panel');

  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');

      buttons.forEach(function (b) { b.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });

      btn.classList.add('active');
      var panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
})();

/* === SCROLL SUAVE PARA LINKS INTERNOS DEL NAV === */
(function () {
  var links = document.querySelectorAll('a[href^="#"]');
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var hash = link.getAttribute('href').slice(1);
      var target = document.getElementById(hash);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
