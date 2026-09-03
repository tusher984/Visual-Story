/* ==========================================================================
   Facebook post kit — turns packages.js into posts you can copy and paste.
   Built as separate posts on purpose: one giant price list stops being read
   halfway down. The menu post goes up first, the detail posts follow.
   ========================================================================== */

(function () {
  'use strict';

  var D = window.VS;
  var NL = '\n';

  function money(n) { return D.CURRENCY + n.toLocaleString('en-US'); }

  function packagesIn(id) {
    return D.PACKAGES.filter(function (p) { return p.cat === id; });
  }

  function range(id) {
    var prices = packagesIn(id).map(function (p) { return p.price; });
    var lo = Math.min.apply(null, prices);
    var hi = Math.max.apply(null, prices);
    return lo === hi ? money(lo) : money(lo) + ' – ' + money(hi);
  }

  /* ---- post 1: the menu -------------------------------------------------- */

  function menuPost() {
    var lines = [
      'VISUAL STORY 2026',
      'Photography • Cinematography • Portraits • Portfolios • Weddings',
      '',
      'Every story deserves to be seen beautifully.',
      '',
      'Here is where our 2026 packages start:',
      ''
    ];
    D.CATEGORIES.forEach(function (c) {
      lines.push(c.fbTitle + '  ' + range(c.id));
    });
    lines.push('');
    lines.push('Full details for each group are in the posts below.');
    lines.push('');
    lines.push('📩 ' + D.CONTACT.ask);
    return lines.join(NL);
  }

  /* ---- posts 2-5: one per category --------------------------------------- */

  function categoryPost(c) {
    var lines = [c.fbTitle, '', c.lead, ''];
    packagesIn(c.id).forEach(function (p, i) {
      if (i) lines.push('');
      lines.push(p.name.toUpperCase() + ' — ' + money(p.price) +
        (p.priceSuffix ? ' ' + p.priceSuffix : ''));
      p.includes.forEach(function (line) { lines.push('• ' + line); });
      if (p.note) lines.push(p.note);
    });
    lines.push('');
    lines.push('📩 ' + D.CONTACT.ask);
    return lines.join(NL);
  }

  /* ---- post 6: terms ----------------------------------------------------- */

  function termsPost() {
    var lines = ['BOOKING & TERMS — VISUAL STORY 2026', ''];
    D.TERMS.forEach(function (t) { lines.push(t.term.toUpperCase() + NL + t.text + NL); });
    lines.push('📩 ' + D.CONTACT.ask);
    return lines.join(NL);
  }

  /* ---- post 7: the experience -------------------------------------------- */

  function experiencePost() {
    var lines = ['THE VISUAL STORY EXPERIENCE', '', D.EXPERIENCE.lead, ''];
    D.EXPERIENCE.items.forEach(function (i) { lines.push('• ' + i); });
    lines.push('');
    lines.push(D.EXPERIENCE.note);
    lines.push('');
    lines.push('📩 ' + D.CONTACT.ask);
    return lines.join(NL);
  }

  /* ---- render ------------------------------------------------------------- */

  function esc(s) {
    return String(s).replace(/[&<>]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c];
    });
  }

  function postBlock(title, hint, text) {
    return (
      '<article class="post">' +
      '<header class="post__top">' +
      '<span class="post__title">' + esc(title) + '</span>' +
      '<button class="copy" type="button" data-state="idle">Copy post</button>' +
      '<span class="post__len">' + text.length.toLocaleString('en-US') + ' characters</span>' +
      '</header>' +
      '<p class="post__text">' + esc(text) + '</p>' +
      (hint ? '<p class="post__hint">' + esc(hint) + '</p>' : '') +
      '</article>'
    );
  }

  function start() {
    var host = document.querySelector('[data-kit]');
    if (!host) return;

    var posts = [
      { t: 'Post 1 — the menu', h: 'Pin this one to the top of the page. It is the only post most people will read all the way through.', x: menuPost() },
      { t: 'Post 6 — the Visual Story Experience', h: null, x: experiencePost() },
      { t: 'Post 7 — booking & terms', h: null, x: termsPost() }
    ];

    D.CATEGORIES.forEach(function (c, i) {
      posts.splice(1 + i, 0, {
        t: 'Post ' + (i + 2) + ' — ' + c.short.toLowerCase(),
        h: null,
        x: categoryPost(c)
      });
    });

    host.innerHTML = posts.map(function (p) { return postBlock(p.t, p.h, p.x); }).join('');

    host.querySelectorAll('.copy').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var body = btn.closest('.post').querySelector('.post__text');
        copy(body.textContent).then(function () {
          btn.textContent = 'Copied';
          btn.dataset.state = 'done';
          setTimeout(function () {
            btn.textContent = 'Copy post';
            btn.dataset.state = 'idle';
          }, 2200);
        }).catch(function () {
          /* Clipboard access refused. Select the post instead, so the only
             thing left to do is press the copy key. */
          selectAll(body);
          btn.textContent = 'Now press ' + copyKey();
          btn.dataset.state = 'blocked';
        });
      });
    });
  }

  function copyKey() {
    return /mac|iphone|ipad/i.test(navigator.platform || navigator.userAgent) ? '⌘C' : 'Ctrl+C';
  }

  function selectAll(el) {
    var sel = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(el);
    sel.removeAllRanges();
    sel.addRange(range);
  }

  function copy(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.cssText = 'position:fixed;top:-9999px';
      document.body.appendChild(ta);
      ta.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
      document.body.removeChild(ta);
      ok ? resolve() : reject(new Error('copy blocked'));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
