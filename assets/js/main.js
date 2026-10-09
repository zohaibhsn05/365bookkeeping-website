/* Site behaviour. Testimonials data lives in testimonials.js */
(function () {
  // Mobile menu
  var t = document.querySelector('.menu-toggle'), n = document.getElementById('nav');
  if (t && n) t.addEventListener('click', function () {
    var o = n.classList.toggle('open'); t.setAttribute('aria-expanded', o); t.textContent = o ? 'Close' : 'Menu';
  });

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (e) { e.textContent = new Date().getFullYear(); });

  // Hero reconciliation: counts the books balance up until the difference is $0.00
  var r = document.querySelector('.recon');
  if (r) {
    var target = 48215.07, start = 46890.12, cleared = r.querySelector('[data-cleared]'), diff = r.querySelector('[data-diff]');
    var fmt = function (v) { return '$' + v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); };
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var finish = function () { cleared.textContent = fmt(target); diff.textContent = '$0.00'; r.classList.add('done'); };
    if (reduce) finish(); else {
      var t0 = null, dur = 1600;
      var tick = function (ts) {
        if (!t0) t0 = ts; var k = Math.min(1, (ts - t0) / dur), e = 1 - Math.pow(1 - k, 3), v = start + (target - start) * e;
        cleared.textContent = fmt(v); diff.textContent = fmt(target - v);
        if (k < 1) requestAnimationFrame(tick); else finish();
      };
      setTimeout(function () { requestAnimationFrame(tick); }, 500);
    }
  }

  // Testimonials
  var V = window.VIDEOS || [], T = window.TEXTS || [];
  var esc = function (s) { return String(s || '').replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var quoteHTML = function (q) {
    return '<figure class="quote"><blockquote>\u201C' + esc(q.quote) + '\u201D</blockquote><cite><strong>' + esc(q.name) + '</strong>' +
      (q.company ? ', ' + esc(q.company) : '') + '<br>' + esc(q.project) + (q.bookkeeper ? ' \u2014 bookkeeper: ' + esc(q.bookkeeper) : '') + '</cite></figure>';
  };
  var videoHTML = function (v) {
    var id = esc(v.youtubeId);
    return '<figure class="video"><div class="video-frame"><button type="button" data-yt="' + id + '" aria-label="Play video testimonial from ' + esc(v.name) + '">' +
      '<img src="https://i.ytimg.com/vi/' + id + '/hqdefault.jpg" alt="" loading="lazy"><span class="play"></span></button></div>' +
      '<figcaption><strong>' + esc(v.name) + '</strong>' + esc([v.role, v.company].filter(Boolean).join(', ')) +
      (v.quote ? '<q>' + esc(v.quote) + '</q>' : '') + '</figcaption></figure>';
  };
  var fill = function (sel, items, fn) {
    document.querySelectorAll(sel).forEach(function (el) {
      if (!items.length) { var w = el.closest('[data-hide-empty]'); (w || el).classList.add('hidden'); return; }
      el.innerHTML = items.map(fn).join('');
    });
  };
  var homeV = V.filter(function (v) { return v.home; }).slice(0, 1);
  fill('[data-t="home-video"]', homeV, videoHTML);
  var homeBox = document.querySelector('.t-home'); if (homeBox && !homeV.length) homeBox.classList.add('no-video');
  fill('[data-t="home-text"]', T.filter(function (q) { return q.home; }).slice(0, 3), quoteHTML);
  fill('[data-t="all-video"]', V, videoHTML);
  fill('[data-t="all-text"]', T, quoteHTML);
  fill('[data-t="cpa-video"]', V.filter(function (v) { return v.cpa; }), videoHTML);
  fill('[data-t="cpa-text"]', T.filter(function (q) { return q.cpa; }), quoteHTML);
  document.querySelectorAll('[data-t-industry]').forEach(function (el) {
    var k = el.getAttribute('data-t-industry'), q = T.filter(function (x) { return x.industry === k; })[0];
    if (q) el.innerHTML = quoteHTML(q); else el.remove();
  });
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-yt]'); if (!b) return;
    var f = document.createElement('iframe');
    f.src = 'https://www.youtube-nocookie.com/embed/' + b.getAttribute('data-yt') + '?autoplay=1&rel=0';
    f.title = 'Client video testimonial'; f.allow = 'autoplay; encrypted-media; picture-in-picture'; f.allowFullscreen = true;
    b.replaceWith(f);
  });
})();

/* Contact form: sends to Web3Forms, then opens the thank-you page */
(function () {
  var f = document.getElementById('contact-form'); if (!f) return;
  var status = document.getElementById('form-status');
  f.addEventListener('submit', function (e) {
    e.preventDefault();
    var key = f.querySelector('[name=access_key]').value;
    if (!key || key.indexOf('YOUR_ACCESS_KEY') === 0) { status.textContent = 'This form is not connected yet. Please email info@365bookkeepingllc.com.'; return; }
    var data = {}; new FormData(f).forEach(function (v, k) { if (k === 'redirect') return; data[k] = data[k] ? data[k] + ', ' + v : v; });
    var btn = f.querySelector('button[type=submit]'); btn.disabled = true; btn.textContent = 'Sending...'; status.textContent = '';
    fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) })
      .then(function (r) { return r.json(); })
      .then(function (j) {
        if (j.success) { window.location.href = 'thank-you.html'; return; }
        throw new Error(j.message || 'error');
      })
      .catch(function () {
        btn.disabled = false; btn.textContent = 'Get My Free Review';
        status.textContent = 'Your message could not be sent. Please try again, or email info@365bookkeepingllc.com.';
      });
  });
})();
