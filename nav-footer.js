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
    tentang:       'vkool_tentang_kami.html',
    dealers:       'vkool_dealers.html',
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

    ${navLink('tentang', 'Tentang Kami')}
    ${navLink('dealers', 'Dealers')}

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
      ${footerLink('tentang', 'Tentang V-KOOL')}
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
     INJECT NAV CSS (for pages that don't have it)
  ══════════════════════════════════════════ */
  if (!document.getElementById('vkool-nav-css')) {
    const style = document.createElement('style');
    style.id = 'vkool-nav-css';
    style.textContent = `
      .nav{position:fixed;top:0;left:0;right:0;z-index:200;height:var(--nav-h,68px);display:flex;align-items:center;justify-content:space-between;padding:0 56px;background:rgba(10,10,10,0.97);border-bottom:0.5px solid var(--line,#222);transition:background 0.4s ease,border-color 0.4s ease;}
      .nav.scrolled{background:rgba(10,10,10,1);border-bottom-color:var(--line2,#2e2e2e);}
      .nav-logo{font-family:'Oswald',sans-serif;font-size:17px;letter-spacing:.30em;font-weight:500;color:var(--gold,#CDB182);text-transform:uppercase;flex-shrink:0;text-decoration:none;}
      .nav-logo:hover{color:var(--gold,#CDB182);}
      .nav-links{display:flex;gap:36px;align-items:center;height:100%;}
      .nav-link{color:rgba(235,235,235,0.75);transition:color .25s;position:relative;padding-bottom:2px;white-space:nowrap;text-decoration:none;font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.10em;font-weight:400;text-transform:uppercase;}
      .nav-link::after{content:'';position:absolute;bottom:-2px;left:0;right:100%;height:0.5px;background:var(--gold,#CDB182);transition:right .35s ease;}
      .nav-link:hover{color:#fff;}
      .nav-link:hover::after,.nav-link.active::after{right:0;}
      .nav-link.active{color:var(--gold,#CDB182);}
      .t-nav{font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.10em;font-weight:400;text-transform:uppercase;}
      .t-label{font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.20em;text-transform:uppercase;font-weight:400;}
      .t-btn{font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.10em;text-transform:uppercase;font-weight:400;}
      .nav-dropdown{position:relative;display:flex;align-items:center;height:100%;}
      .nav-dropdown-trigger{display:flex;align-items:center;gap:6px;color:rgba(235,235,235,0.75);font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.10em;font-weight:400;text-transform:uppercase;cursor:pointer;position:relative;padding-bottom:2px;white-space:nowrap;transition:color .25s;background:none;border:none;}
      .nav-dropdown-trigger::after{content:'';position:absolute;bottom:-2px;left:0;right:100%;height:0.5px;background:var(--gold,#CDB182);transition:right .35s ease;}
      .nav-dropdown:hover .nav-dropdown-trigger{color:#fff;}
      .nav-dropdown:hover .nav-dropdown-trigger::after{right:0;}
      .nav-dropdown-trigger.active{color:var(--gold,#CDB182)!important;}
      .nav-dropdown-trigger.active::after{right:0!important;}
      .nav-chevron{width:10px;height:10px;stroke:currentColor;fill:none;stroke-width:2;flex-shrink:0;transition:transform .35s ease;}
      .nav-dropdown:hover .nav-chevron{transform:rotate(180deg);}
      .nav-dropdown-panel{position:absolute;top:calc(var(--nav-h,68px) - 1px);left:50%;transform:translateX(-50%) translateY(-8px);background:#0e0d0b;border:0.5px solid var(--line2,#2e2e2e);border-top:1px solid var(--gold,#CDB182);display:grid;gap:0;min-width:460px;opacity:0;visibility:hidden;pointer-events:none;transition:opacity .3s ease,transform .3s ease,visibility .3s;}
      .nav-dropdown:hover .nav-dropdown-panel{opacity:1;visibility:visible;pointer-events:auto;transform:translateX(-50%) translateY(0);}
      .nav-dropdown-panel.cols-1{grid-template-columns:1fr;min-width:280px;left:auto;right:0;transform:translateY(-8px);}
      .nav-dropdown:hover .nav-dropdown-panel.cols-1{transform:translateY(0);}
      .dd-item{display:flex;align-items:flex-start;gap:16px;padding:22px 24px;border-bottom:0.5px solid var(--line,#222);border-right:0.5px solid var(--line,#222);position:relative;cursor:pointer;transition:background .25s;text-decoration:none;color:inherit;overflow:hidden;}
      .cols-1 .dd-item:last-child{border-bottom:none;}
      .cols-1 .dd-item{border-right:none;}
      .dd-item:hover{background:rgba(205,177,130,0.05);}
      .dd-item::before{content:'';position:absolute;left:0;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,var(--gold,#CDB182),var(--gold2,#b89a6a));transform:scaleY(0);transform-origin:top center;transition:transform .35s ease;}
      .dd-item:hover::before{transform:scaleY(1);}
      .dd-icon{width:34px;height:34px;flex-shrink:0;border:0.5px solid rgba(205,177,130,0.3);background:rgba(205,177,130,0.06);display:flex;align-items:center;justify-content:center;border-radius:2px;transition:border-color .25s,background .25s;}
      .dd-item:hover .dd-icon{border-color:rgba(205,177,130,0.7);background:rgba(205,177,130,0.12);}
      .dd-icon svg{width:15px;height:15px;stroke:var(--gold,#CDB182);fill:none;stroke-width:1.4;}
      .dd-text{display:flex;flex-direction:column;gap:4px;}
      .dd-title{font-family:'Oswald',sans-serif;font-size:13px;letter-spacing:.08em;font-weight:400;text-transform:uppercase;color:#EBEBEB;transition:color .25s;}
      .dd-item:hover .dd-title{color:var(--gold,#CDB182);}
      .dd-sub{font-size:11px;color:var(--dim,#555);letter-spacing:.02em;font-weight:300;line-height:1.5;}
      .nav-right{display:flex;gap:12px;align-items:center;flex-shrink:0;}
      .nav-lang{display:flex;align-items:center;gap:6px;color:var(--dim,#555);border:0.5px solid var(--line2,#2e2e2e);padding:5px 12px;border-radius:2px;font-size:11px;letter-spacing:.08em;cursor:pointer;transition:border-color .25s,color .25s;background:none;}
      .nav-lang svg{width:14px;height:14px;stroke:currentColor;fill:none;stroke-width:1.5;}
      .nav-lang:hover{color:#EBEBEB;border-color:var(--dim,#555);}
      .btn-gold-sm{background:var(--gold,#CDB182);color:#0a0a0a;padding:9px 20px;border-radius:2px;font-family:'Oswald',sans-serif;font-size:12px;letter-spacing:.10em;text-transform:uppercase;font-weight:400;transition:background .25s;min-height:44px;display:flex;align-items:center;border:none;cursor:pointer;}
      .btn-gold-sm:hover{background:var(--gold2,#b89a6a);}
      .footer{background:var(--black,#0a0a0a);border-top:0.5px solid var(--line,#222);padding:64px 56px 32px;}
      .footer-top{display:grid;grid-template-columns:1.6fr 1fr 1fr 1fr;gap:56px;margin-bottom:56px;}
      .footer-logo{font-family:'Oswald',sans-serif;font-size:15px;letter-spacing:.28em;color:var(--gold,#CDB182);font-weight:400;margin-bottom:14px;}
      .footer-tagline{font-size:13px;color:var(--dim,#555);line-height:1.65;max-width:220px;font-weight:300;}
      .footer-col-title{font-family:'Oswald',sans-serif;font-size:11px;letter-spacing:.16em;color:#EBEBEB;text-transform:uppercase;font-weight:400;margin-bottom:18px;}
      .footer-link{font-size:13px;color:var(--dim,#555);display:block;margin-bottom:17px;transition:color .25s;font-weight:300;text-decoration:none;}
      .footer-link:hover,.footer-link.active{color:var(--gold,#CDB182);}
      .footer-bottom{border-top:0.5px solid var(--line,#222);padding-top:24px;display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;}
      .footer-copy{font-size:12px;color:#555555;font-weight:300;}
      .footer-social{display:flex;gap:10px;}
      .social-btn{width:34px;height:34px;border-radius:50%;border:0.5px solid var(--line2,#2e2e2e);display:flex;align-items:center;justify-content:center;cursor:pointer;transition:border-color .25s;background:none;}
      .social-btn:hover{border-color:var(--gold,#CDB182);}
      .social-btn svg{width:13px;height:13px;stroke:var(--dim,#555);fill:none;stroke-width:1.5;transition:stroke .25s,fill .25s;}
      .social-btn:hover svg{stroke:var(--gold,#CDB182);}
      .social-btn svg path[fill="currentColor"]{fill:var(--dim,#555);stroke:none;}
      .social-btn:hover svg path[fill="currentColor"]{fill:var(--gold,#CDB182);stroke:none;}
      .fade-up{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease;}
      .fade-up.visible{opacity:1;transform:translateY(0);}
      @media(max-width:1023px){.nav-links,.nav-right{display:none;}}
    `;
    document.head.appendChild(style);
  }

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
