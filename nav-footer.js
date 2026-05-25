/**
 * V-KOOL — Shared Nav & Footer
 * ─────────────────────────────
 * This file injects the nav and footer into every page automatically.
 * To add a new page link: update PAGES and FOOTER_LINKS below, done.
 *
 * HOW ACTIVE STATE WORKS:
 * Each page sets a `data-page` attribute on its <body> tag.
 * e.g. <body data-page="otomotif">
 * This script reads it and marks the correct nav/footer link as active.
 */

(function () {
  'use strict';

  /* ══════════════════════════════════════════
     PAGE REGISTRY — update here when adding pages
  ══════════════════════════════════════════ */
  const PAGES = {
    home:          'index.html',
    otomotif:      'vkool_otomotif.html',
    bangunan:      'vkool_bangunan.html',
    ppf:           'vkool_ppf_final.html',
    ppf_interior:  'vkool_ppf_interior_redesign.html',
    // tentang:    'vkool_tentang.html',      // ← uncomment when built
    // dealers:    'vkool_dealers.html',       // ← uncomment when built
    // artikel:    'vkool_artikel.html',       // ← uncomment when built
    // faq:        'vkool_faq.html',           // ← uncomment when built
    // garansi:    'vkool_garansi.html',       // ← uncomment when built
  };

  const currentPage = document.body.getAttribute('data-page') || 'home';

  /* helper: returns <a> or <span> depending on whether it's the active page */
  function navLink(pageKey, label, extraClass = '') {
    const href = PAGES[pageKey];
    const cls = `nav-link t-nav${extraClass ? ' ' + extraClass : ''}`;
    if (currentPage === pageKey) {
      return `<span class="${cls} active">${label}</span>`;
    }
    return `<a class="${cls}" href="${href}">${label}</a>`;
  }

  function footerLink(pageKey, label) {
    const href = PAGES[pageKey];
    if (currentPage === pageKey) {
      return `<span class="footer-link active">${label}</span>`;
    }
    return `<a class="footer-link" href="${href}">${label}</a>`;
  }

  /* PPF dropdown trigger — active if on ppf or ppf_interior */
  const ppfActive = (currentPage === 'ppf' || currentPage === 'ppf_interior');
  const ppfTriggerClass = ppfActive ? 'nav-dropdown-trigger t-nav active' : 'nav-dropdown-trigger t-nav';

  /* PPF dropdown items */
  const ppfItem = currentPage === 'ppf'
    ? `<span class="dd-item active-item" style="cursor:default;">
        <div class="dd-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="dd-text"><span class="dd-title" style="color:var(--gold);">PPF</span><span class="dd-sub">Eksterior — paint protection film</span></div>
       </span>`
    : `<a class="dd-item" href="${PAGES.ppf}" role="menuitem">
        <div class="dd-icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
        <div class="dd-text"><span class="dd-title">PPF</span><span class="dd-sub">Eksterior — paint protection film</span></div>
       </a>`;

  const ppfInteriorItem = currentPage === 'ppf_interior'
    ? `<span class="dd-item active-item" style="cursor:default;">
        <div class="dd-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
        <div class="dd-text"><span class="dd-title" style="color:var(--gold);">PPF Interior</span><span class="dd-sub">Proteksi panel kabin premium</span></div>
       </span>`
    : `<a class="dd-item" href="${PAGES.ppf_interior}" role="menuitem">
        <div class="dd-icon"><svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
        <div class="dd-text"><span class="dd-title">PPF Interior</span><span class="dd-sub">Proteksi panel kabin premium</span></div>
       </a>`;

  /* ══════════════════════════════════════════
     NAV HTML
  ══════════════════════════════════════════ */
  const navHTML = `
<nav class="nav" id="nav" role="navigation" aria-label="Main navigation">
  <a class="nav-logo" href="${PAGES.home}" aria-label="V-KOOL Indonesia">V-KOOL</a>
  <div class="nav-links">
    ${navLink('otomotif', 'Otomotif')}
    ${navLink('bangunan', 'Bangunan')}

    <!-- PPF DROPDOWN -->
    <div class="nav-dropdown" aria-label="PPF menu">
      <button class="${ppfTriggerClass}" aria-haspopup="true" aria-expanded="false">
        PPF
        <svg class="nav-chevron" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-dropdown-panel cols-1" style="left:50%;right:auto;transform:translateX(-50%) translateY(-8px);min-width:300px;" role="menu">
        ${ppfItem}
        ${ppfInteriorItem}
      </div>
    </div>

    <a class="nav-link t-nav" href="#">Tentang Kami</a>
    <a class="nav-link t-nav" href="#">Dealers</a>

    <!-- SELENGKAPNYA DROPDOWN -->
    <div class="nav-dropdown" aria-label="Selengkapnya menu">
      <button class="nav-dropdown-trigger t-nav" aria-haspopup="true" aria-expanded="false">
        Selengkapnya
        <svg class="nav-chevron" viewBox="0 0 24 24" aria-hidden="true"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      <div class="nav-dropdown-panel cols-1" role="menu">
        <a class="dd-item" href="#" role="menuitem">
          <div class="dd-icon"><svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div>
          <div class="dd-text"><span class="dd-title">Artikel</span><span class="dd-sub">Berita &amp; panduan produk</span></div>
        </a>
        <a class="dd-item" href="#" role="menuitem">
          <div class="dd-icon"><svg viewBox="0 0 24 24"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg></div>
          <div class="dd-text"><span class="dd-title">Videos</span><span class="dd-sub">Lihat instalasi &amp; review</span></div>
        </a>
        <a class="dd-item" href="#" role="menuitem">
          <div class="dd-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></div>
          <div class="dd-text"><span class="dd-title">Cek Garansi</span><span class="dd-sub">Verifikasi status garansi produk</span></div>
        </a>
        <a class="dd-item" href="#" role="menuitem">
          <div class="dd-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <div class="dd-text"><span class="dd-title">FAQ</span><span class="dd-sub">Pertanyaan yang sering diajukan</span></div>
        </a>
      </div>
    </div>
  </div>

  <div class="nav-right">
    <button class="nav-lang t-label" aria-label="Switch language">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
      IND
    </button>
    <button class="btn-gold-sm t-btn" aria-label="Cek Harga">Cek Harga</button>
  </div>
</nav>`;

  /* ══════════════════════════════════════════
     FOOTER HTML
  ══════════════════════════════════════════ */
  const footerHTML = `
<footer class="footer" role="contentinfo">
  <div class="footer-top">
    <div>
      <div class="footer-logo">V-KOOL</div>
      <p class="footer-tagline">Solusi premium kaca film dan PPF untuk kendaraan dan bangunan Anda di seluruh Indonesia.</p>
    </div>
    <div>
      <div class="footer-col-title">Products</div>
      ${footerLink('otomotif', 'Otomotif')}
      ${footerLink('bangunan', 'Bangunan')}
      ${footerLink('ppf', 'PPF')}
      <a class="footer-link" href="#">Portfolio</a>
      <a class="footer-link" href="#">Cek Harga</a>
    </div>
    <div>
      <div class="footer-col-title">About Us</div>
      <a class="footer-link" href="#">Tentang V-KOOL</a>
      <a class="footer-link" href="#">FAQ</a>
      <a class="footer-link" href="#">Videos</a>
      <a class="footer-link" href="#">Berita &amp; Events</a>
      <a class="footer-link" href="#">Lokasi</a>
    </div>
    <div>
      <div class="footer-col-title">Contact</div>
      <a class="footer-link" href="#">Enquiry</a>
      <a class="footer-link" href="#">Garansi Elektronik</a>
      <a class="footer-link" href="#">Contact Us</a>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy" id="footer-year">Copyright © ${new Date().getFullYear()} V-KOOL INDONESIA — Legal &amp; Privacy Policy</span>
    <div class="footer-social" aria-label="Social media">
      <button class="social-btn" aria-label="Instagram">
        <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
      </button>
      <button class="social-btn" aria-label="YouTube">
        <svg viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20.06 12 20.06 12 20.06s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="var(--dim)"/></svg>
      </button>
      <button class="social-btn" aria-label="Facebook">
        <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
      </button>
      <button class="social-btn" aria-label="X (Twitter)">
        <svg viewBox="0 0 24 24" fill="none"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.988l4.265 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="currentColor" stroke="none"/></svg>
      </button>
    </div>
  </div>
</footer>`;

  /* ══════════════════════════════════════════
     INJECT INTO PAGE
  ══════════════════════════════════════════ */
  const navPlaceholder = document.getElementById('nav-placeholder');
  const footerPlaceholder = document.getElementById('footer-placeholder');

  if (navPlaceholder) navPlaceholder.outerHTML = navHTML;
  if (footerPlaceholder) footerPlaceholder.outerHTML = footerHTML;

  /* ══════════════════════════════════════════
     NAV BEHAVIOUR
  ══════════════════════════════════════════ */
  const nav = document.getElementById('nav');
  if (nav) {
    /* Scroll: add .scrolled */
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    /* Dropdown: aria-expanded sync */
    nav.querySelectorAll('.nav-dropdown').forEach(dd => {
      const trigger = dd.querySelector('.nav-dropdown-trigger');
      dd.addEventListener('mouseenter', () => { if (trigger) trigger.setAttribute('aria-expanded', 'true'); });
      dd.addEventListener('mouseleave', () => { if (trigger) trigger.setAttribute('aria-expanded', 'false'); });
    });
  }

  /* ══════════════════════════════════════════
     FADE-UP SCROLL ANIMATION
  ══════════════════════════════════════════ */
  const fadeEls = document.querySelectorAll('.fade-up');
  if (fadeEls.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    fadeEls.forEach(el => io.observe(el));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      fadeEls.forEach(el => { el.style.transition = 'none'; el.classList.add('visible'); });
    }
  }

  /* ══════════════════════════════════════════
     DYNAMIC FOOTER YEAR
  ══════════════════════════════════════════ */
  const yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = `Copyright © ${new Date().getFullYear()} V-KOOL INDONESIA — Legal & Privacy Policy`;
  }

})();
