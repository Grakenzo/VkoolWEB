# V-KOOL Indonesia — Website

Premium dark-themed marketing website for V-KOOL Indonesia (automotive & building window film, and Paint Protection Film). Built with pure HTML, CSS, and JavaScript — no frameworks, no build step. Designed for deployment via GitHub Pages.

---

## Quick Start (GitHub Pages Deployment)

1. Upload **all** files in this folder to the **root** of your GitHub repository (not inside a subfolder).
2. Place all image files inside an `images/` folder at the root.
3. In your repo: **Settings → Pages → Source → Deploy from a branch → `main` → `/(root)` → Save**.
4. Your site goes live at `https://USERNAME.github.io/REPO-NAME/`.

The homepage is `index.html` — GitHub Pages serves it automatically as the landing page.

---

## Folder Structure

```
/ (root)
├── index.html                          ← Homepage (landing page)
├── nav-footer.js                       ← Shared navigation + footer (injected into every page)
│
├── vkool_otomotif.html                 ← Automotive window film category
├── vkool_bangunan.html                 ← Building window film category
├── vkool_ppf_final.html                ← PPF (Paint Protection Film) category
├── vkool_ppf_interior_redesign.html    ← PPF Interior product
│
├── vkool_produk_vk40.html              ← Product: VK-40 (automotive)
├── vkool_produk_ique73.html            ← Product: IQUE 73 (building)
├── vkool_produk_ppf_matte.html         ← Product: PPF Matte
├── vkool_produk_ppf_glossy.html        ← Product: PPF Glossy
├── vkool_paket_diamond.html            ← Package: Diamond Series (automotive bundle)
│
├── vkool_tentang_kami.html             ← About Us
├── vkool_dealers.html                  ← Dealer locator
├── vkool_portfolio.html                ← Portfolio gallery
├── vkool_faq.html                      ← FAQ
├── vkool_artikel.html                  ← Articles & News
├── vkool_videos.html                   ← Video gallery
│
├── vkool_cek_harga.html                ← Price estimate (main picker)
├── vkool_cek_harga_otomotif.html       ← Price estimate — automotive
├── vkool_cek_harga_bangunan.html       ← Price estimate — building
├── vkool_cek_harga_ppf.html            ← Price estimate — PPF
├── vkool_cek_garansi.html              ← Warranty check
│
└── images/                             ← All photos (see Image List below)
```

---

## Shared Navigation & Footer — `nav-footer.js`

**This is the most important file.** It injects the navigation bar, the footer, AND all their required CSS into every page. Every page references it with a single line before `</body>`:

```html
<script src="nav-footer.js"></script>
```

For the nav/footer to appear, each page must contain these three things:

```html
<body data-page="KEY">                  <!-- KEY = page identifier, highlights active nav item -->
  <div id="nav-placeholder"></div>       <!-- nav gets injected here -->
  ...page content...
  <div id="footer-placeholder"></div>    <!-- footer gets injected here -->
  <script src="nav-footer.js"></script>  <!-- must be the last script -->
</body>
```

### Registered pages (the `data-page` keys)

| Key | File |
|---|---|
| `home` | index.html |
| `otomotif` | vkool_otomotif.html |
| `bangunan` | vkool_bangunan.html |
| `ppf` | vkool_ppf_final.html |
| `ppf_interior` | vkool_ppf_interior_redesign.html |
| `tentang` | vkool_tentang_kami.html |
| `dealers` | vkool_dealers.html |
| `portfolio` | vkool_portfolio.html |
| `faq` | vkool_faq.html |
| `cek_harga` | vkool_cek_harga.html |
| `cek_garansi` | vkool_cek_garansi.html |
| `artikel` | vkool_artikel.html |
| `videos` | vkool_videos.html |

**Product pages** (VK-40, IQUE 73, PPF Matte, PPF Glossy, Diamond Series) and the **3 Cek Harga sub-pages** are reached via links from their parent category pages — they don't need their own nav entries. They reuse a parent's `data-page` key so the correct nav item stays highlighted.

> **IMPORTANT:** Whenever you add a new page that should appear in the nav, you must add its entry to the `PAGES` object inside `nav-footer.js` and re-upload that file.

---

## Page-to-Page Navigation Flow

- **Logo** → Home
- **Nav bar:** Otomotif · Bangunan · PPF (dropdown: PPF Eksterior, PPF Interior) · Tentang Kami · Dealers · Selengkapnya (dropdown: Artikel, Videos, Cek Garansi, FAQ) · "Cek Harga" button
- **Otomotif** → product cards → VK-40 page; Paket section → Diamond Series page
- **Bangunan** → filter tabs (Seri Clear / Seri Privacy) → IQUE 73 page
- **PPF** → PPF Matte page & PPF Glossy page
- **Footer** links to all major pages

---

## Design System

- **Fonts:** Oswald (display/headings) + Roboto (body) — loaded from Google Fonts
- **Colors:**
  - Base black `#0A0A0A`, dark `#111111`, mid `#1A1A1A`
  - Gold (primary accent) `#CDB182`, gold-dark `#B89A6A`
  - Text light `#EBEBEB`, muted `#888888`, dim `#555555`
  - Green (positive) `#6B9E78`, red (negative) `#C0565A`
- **Style:** Swiss Modernist / luxury dark editorial
- **Signature interactions:** gold line sweep on card hover, fade-up on scroll, gold underline on nav hover
- **Spacing:** 8pt grid, consistent `--pad` page margin
- **Responsive:** all pages adapt at `1023px` (tablet) and `640px` (mobile) breakpoints

---

## How to Update Content

### Product specs
Each product page lists specs (VLT, IRR, UVR, TSER for film; micron, self-healing, warranty for PPF). To change a value, search the product's `.html` file for the spec label and edit the adjacent value. Keep the product card on the parent category page in sync.

### Articles (`vkool_artikel.html`)
Each article card is an `<a>` linking to an external URL (Tokopedia, V-KOOL site, promo pages). To update, edit the `href` and the card's title/excerpt/date.

### Videos (`vkool_videos.html`)
All videos use placeholder YouTube ID `dQw4w9WgXcQ`. Replace with real IDs:

- **Video ID:** from `https://www.youtube.com/watch?v=ABC123xyz`, the ID is `ABC123xyz`
- **Thumbnail URL format:** `https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`

| Edit Point | What | How |
|---|---|---|
| EDIT POINT 1 | Featured video | Search `EDIT POINT 1`, replace ID in the `iframe src` |
| EDIT POINT 2–7 | Cards 1–6 | Search `EDIT POINT N`, replace the `href` URL + `img src` thumbnail |

### Prices (`vkool_cek_harga*.html`)
Price estimates and the contact button live in these files. Update the WhatsApp number in `href="https://wa.me/..."` and any displayed price ranges.

### Energy calculator (`vkool_produk_ique73.html`)
The "Kalkulator Penghematan Energi" estimates building energy savings. Its model constants (W/m² heat rejection, install cost per m², PLN CO2 factor) are in the page's `<script>` — adjust there if rates change.

---

## Image List (place all in `images/` folder)

| File | Used on |
|---|---|
| `vkool-showroom.jpg` | Tentang Kami hero |
| `vk40-before.jpg`, `vk40-after.jpg` | VK-40 before/after slider |
| `before-headunit.jpg` / `after-headunit.jpg` | PPF Interior — Headunit tab |
| `before-setir.jpg` / `after-setir.jpg` | PPF Interior — Setir tab |
| `before-doorcup.jpg` / `after-doorcup.jpg` | PPF Interior — Door Cup tab |
| `before-frameac.jpg` / `after-frameac.jpg` | PPF Interior — Frame AC tab |
| `before-konsol.jpg` / `after-konsol.jpg` | PPF Interior — Konsol tab |

Other photos (dealers, portfolio, articles, hero backgrounds) currently use external Unsplash URLs — swap them for real V-KOOL photography when available by editing the `url(...)` or `<img src>` references.

---

## Tech Notes

- **No build step.** Pure static files — edit and upload directly.
- **No external dependencies** except Google Fonts.
- **Browser support:** all modern browsers (Chrome, Safari, Firefox, Edge).
- **Page JavaScript is null-safe** regarding the injected nav — page scripts run before `nav-footer.js`, so any nav references are guarded with `if(nav)` checks. Keep this pattern when editing page scripts.
- **No backend / no storage** — this is a static marketing site.

---

## Maintenance Checklist (when adding a new page)

1. Start from an existing similar page as a template.
2. Set `<body data-page="KEY">` (use a parent key if it's a sub-page).
3. Include `<div id="nav-placeholder"></div>` and `<div id="footer-placeholder"></div>`.
4. Add `<script src="nav-footer.js"></script>` as the last line before `</body>`.
5. If it should appear in the nav, add it to the `PAGES` object in `nav-footer.js` and re-upload.
6. Use breadcrumb separator `&mdash;` styled `color:#555555`.
7. Keep product specs consistent between the product page and its parent category card.
8. Test responsiveness by narrowing the browser to phone width.

---

## Files NOT to upload (stale / internal)

These were superseded during development — do not deploy them:

- `vkool_homepage_v2.html` — replaced by `index.html`
- `tentang-kami.html` — replaced by `vkool_tentang_kami.html`
- `vkool_paket_rekomendasi.html` — replaced by the Otomotif → Diamond Series flow
- `vkool_page_template.html` — internal scaffolding template
