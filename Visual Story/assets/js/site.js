/* ==========================================================================
   VISUAL STORY 2026 — builds the page from assets/js/packages.js
   Nothing here needs editing to change prices. Edit packages.js instead.
   ========================================================================== */

(function () {
  'use strict';

  var D = window.VS;
  var PACKAGES = D.PACKAGES;
  var CATEGORIES = D.CATEGORIES;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function money(n) {
    return D.CURRENCY + n.toLocaleString('en-US');
  }

  function packagesIn(catId) {
    return PACKAGES.filter(function (p) { return p.cat === catId; });
  }

  function range(list) {
    var prices = list.map(function (p) { return p.price; });
    var lo = Math.min.apply(null, prices);
    var hi = Math.max.apply(null, prices);
    return lo === hi ? money(lo) : money(lo) + ' – ' + money(hi);
  }

  /* ---- the four groups, with their price range --------------------------- */

  function renderSummary() {
    var host = document.querySelector('[data-summary]');
    if (!host) return;

    host.innerHTML = CATEGORIES.map(function (c) {
      var list = packagesIn(c.id);
      return (
        '<li><a href="#' + c.id + '">' +
        '<span class="n">' + esc(c.name) + '</span>' +
        '<span class="c">' + list.length +
        (list.length === 1 ? ' package' : ' packages') + '</span>' +
        '<span class="p">' + range(list) + '</span>' +
        '</a></li>'
      );
    }).join('');
  }

  /* ---- one card per package, everything visible -------------------------- */

  function renderCategories() {
    CATEGORIES.forEach(function (c) {
      var host = document.querySelector('[data-cat="' + c.id + '"]');
      if (!host) return;

      host.innerHTML = packagesIn(c.id).map(function (p) {
        return (
          '<article class="card">' +
          '<div class="card__top">' +
          '<h3>' + esc(p.name) + '</h3>' +
          '<p class="price">' + money(p.price) +
          (p.priceSuffix ? '<small>' + esc(p.priceSuffix) + '</small>' : '') +
          '</p></div>' +
          '<p class="blurb">' + esc(p.blurb) + '</p>' +
          '<ul>' + p.includes.map(function (line) {
            return '<li>' + esc(line) + '</li>';
          }).join('') + '</ul>' +
          (p.note ? '<p class="note">' + esc(p.note) + '</p>' : '') +
          '</article>'
        );
      }).join('');
    });
  }

  /* ---- experience & terms ----------------------------------------------- */

  function renderExperience() {
    var host = document.querySelector('[data-experience]');
    if (!host) return;
    host.innerHTML = D.EXPERIENCE.items.map(function (i) {
      return '<li>' + esc(i) + '</li>';
    }).join('');
  }

  function renderTerms() {
    var host = document.querySelector('[data-terms]');
    if (!host) return;
    host.innerHTML = D.TERMS.map(function (t) {
      return '<div><dt>' + esc(t.term) + '</dt><dd>' + esc(t.text) + '</dd></div>';
    }).join('');
  }

  /* ---- photo slots ------------------------------------------------------
     Frames start empty and name the file they are waiting for, so an
     unfinished gallery reads as a set of mounts rather than broken images. */

  function wireFrames() {
    document.querySelectorAll('.frame').forEach(function (frame) {
      var img = frame.querySelector('img');
      if (!img) return;
      function filled() { frame.dataset.empty = 'false'; }
      function blank() { frame.dataset.empty = 'true'; }
      if (img.complete) { img.naturalWidth > 0 ? filled() : blank(); }
      img.addEventListener('load', filled);
      img.addEventListener('error', blank);
    });
  }

  /* ---- which section am I in ------------------------------------------- */

  function wireNav() {
    var links = Array.prototype.slice.call(document.querySelectorAll('.top nav a[href^="#"]'));
    if (!links.length || !('IntersectionObserver' in window)) return;
    var sections = links.map(function (a) {
      return document.getElementById(a.getAttribute('href').slice(1));
    });

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        links.forEach(function (a, i) {
          a.setAttribute('aria-current', sections[i] === e.target ? 'true' : 'false');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { if (s) obs.observe(s); });
  }

  /* ---- go ---------------------------------------------------------------- */

  function start() {
    renderSummary();
    renderCategories();
    renderExperience();
    renderTerms();
    wireFrames();
    wireNav();

    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = PACKAGES.length;
    });

    document.querySelectorAll('[data-lowest]').forEach(function (el) {
      el.textContent = money(Math.min.apply(null, PACKAGES.map(function (p) {
        return p.price;
      })));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
