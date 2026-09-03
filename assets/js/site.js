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

  /* One price if a group has one package, otherwise lowest to highest. */
  function range(list) {
    var prices = list.map(function (p) { return p.price; });
    var lo = Math.min.apply(null, prices);
    var hi = Math.max.apply(null, prices);
    return lo === hi ? money(lo) : money(lo) + ' – ' + money(hi);
  }

  /* ---- the price index in the hero ---------------------------------------
     Four rows, four numbers, right-aligned: the whole studio at a glance
     before you have read a single package name. */

  function renderIndex() {
    var host = document.querySelector('[data-index]');
    if (!host) return;

    host.innerHTML = CATEGORIES.map(function (c) {
      var list = packagesIn(c.id);
      return (
        '<a href="#' + c.id + '">' +
        '<span class="index__name">' + esc(c.name) + '</span>' +
        '<span class="index__n">' + list.length +
        (list.length === 1 ? ' package' : ' packages') + '</span>' +
        '<span class="index__p">' + range(list) + '</span>' +
        '</a>'
      );
    }).join('');
  }

  /* ---- the range that sits opposite each group heading ------------------- */

  function renderMeta() {
    CATEGORIES.forEach(function (c) {
      var host = document.querySelector('[data-meta="' + c.id + '"]');
      if (!host) return;
      host.textContent = range(packagesIn(c.id));
    });
  }

  /* ---- one entry per package, nothing hidden ----------------------------
     Name and price share a baseline; the price is set in the serif with
     tabular figures, so every number in a column lines up by itself. */

  function renderCategories() {
    CATEGORIES.forEach(function (c) {
      var host = document.querySelector('[data-cat="' + c.id + '"]');
      if (!host) return;

      host.innerHTML = packagesIn(c.id).map(function (p) {
        return (
          '<article class="item" id="' + esc(p.id) + '">' +
          '<div class="item__head">' +
          '<h3 class="item__name">' + esc(p.name) + '</h3>' +
          '<p class="item__price">' + money(p.price) +
          (p.priceSuffix ? '<small>' + esc(p.priceSuffix) + '</small>' : '') +
          '</p>' +
          '</div>' +
          '<p class="item__blurb">' + esc(p.blurb) + '</p>' +
          '<ul class="item__inc">' + p.includes.map(function (line) {
            return '<li>' + esc(line) + '</li>';
          }).join('') + '</ul>' +
          (p.note ? '<p class="item__note">' + esc(p.note) + '</p>' : '') +
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

  /* ---- photo mounts ------------------------------------------------------
     Frames start empty and name the file they are waiting for, so a gallery
     with nothing in it yet reads as a set of mounts, not broken images. */

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

  /* ---- which section am I in --------------------------------------------- */

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
    renderIndex();
    renderMeta();
    renderCategories();
    renderExperience();
    renderTerms();
    wireFrames();
    wireNav();

    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = PACKAGES.length;
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
