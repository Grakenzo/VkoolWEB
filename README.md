# V-KOOL Indonesia — Website

Premium dark-themed marketing website for V-KOOL Indonesia (automotive & building window film, and Paint Protection Film). Built with pure HTML, CSS, and JavaScript — no frameworks, no build step. Deployed via GitHub Pages.

---

## Quick Start (GitHub Pages Deployment)

1. Upload **all** files to the **root** of your GitHub repository.
2. Place all image files inside an `images/` folder at the root.
3. In your repo: **Settings → Pages → Source → Deploy from a branch → `main` → `/(root)` → Save**.
4. Live at `https://USERNAME.github.io/REPO-NAME/`

The homepage is `index.html` — GitHub Pages serves it automatically.

---

## Complete File List

```
/ (root)
├── index.html                          ← Homepage
├── nav-footer.js                       ← Shared nav + footer (required by every page)
│
├── vkool_otomotif.html                 ← Automotive window film category
├── vkool_bangunan.html                 ← Building window film category
├── vkool_ppf_final.html                ← PPF category
├── vkool_ppf_interior_redesign.html    ← PPF Interior
│
├── vkool_produk_vk40.html              ← Product: VK-40
├── vkool_produk_vk70.html              ← Product: VK-70
├── vkool_produk_vk30.html              ← Product: VK-30
├── vkool_produk_vip.html               ← Product: VIP
├── vkool_produk_x15.html               ← Product: X15
├── vkool_produk_x05.html               ← Product: X05
├── vkool_produk_ique73.html            ← Product: IQUE 73 (building)
├── vkool_produk_ppf_matte.html         ← Product: PPF Matte
├── vkool_produk_ppf_glossy.html        ← Product: PPF Glossy
├── vkool_paket_diamond.html            ← Package: Diamond Series
│
├── vkool_tentang_kami.html             ← About Us
├── vkool_dealers.html                  ← Dealer locator
├── vkool_portfolio.html                ← Portfolio gallery
├── vkool_faq.html                      ← FAQ
├── vkool_artikel.html                  ← Articles & News
├── vkool_videos.html                   ← Video gallery
├── vkool_contact.html                  ← Contact Us / Enquiry form
│
├── vkool_cek_harga.html                ← Price estimate (main)
├── vkool_cek_harga_otomotif.html       ← Price estimate — automotive
├── vkool_cek_harga_bangunan.html       ← Price estimate — building
├── vkool_cek_harga_ppf.html            ← Price estimate — PPF
├── vkool_cek_garansi.html              ← Warranty check
│
└── images/                             ← All photo assets
    ├── vkool-showroom.jpg
    ├── vk40-before.jpg
    ├── vk40-after.jpg
    ├── before-headunit.jpg / after-headunit.jpg
    ├── before-setir.jpg / after-setir.jpg
    ├── before-doorcup.jpg / after-doorcup.jpg
    ├── before-frameac.jpg / after-frameac.jpg
    └── before-konsol.jpg / after-konsol.jpg
```

---

## nav-footer.js — The Most Important File

Injects nav, footer, and all their CSS into every page. Every page needs:

```html
<body data-page="KEY">
  <div id="nav-placeholder"></div>
  ...page content...
  <div id="footer-placeholder"></div>
  <script src="nav-footer.js"></script>  <!-- last script before </body> -->
</body>
```

### Page keys

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
| `contact` | vkool_contact.html |

Product pages (VK-40, VK-70, etc.) use their parent's key (e.g. `data-page="otomotif"`).

> **Re-upload nav-footer.js whenever you add a page to the nav.**

---

## How to Replace Images — Page by Page

All placeholder images use Unsplash URLs. Replace with real V-KOOL photos by editing the URL in the location shown below. For local files, use `images/your-photo.jpg` instead.

---

### `index.html` — Homepage

Search for these URLs and replace:

| What | Search for | Replace with |
|---|---|---|
| Hero background | `photo-1618843479313-40f8afb4b4d8` | Your hero car photo |
| Product card 1 (Otomotif) | `photo-1503376780353-7e6692767b70` | Automotive film photo |
| Product card 2 (Bangunan) | `photo-1486325212027-8081e485255e` | Building film photo |
| Product card 3 (PPF) | `photo-1558618666-fcd25c85cd64` | PPF photo |
| Why section image | `photo-1625047509168-a7026f36de04` | Installation photo |

---

### `vkool_otomotif.html` — Automotive Category

| What | Search for | Replace with |
|---|---|---|
| Hero background | `photo-1503376780353-7e6692767b70` | Automotive hero photo |
| Tech section image 1 | `photo-1558618666-fcd25c85cd64` | Film close-up photo |
| Tech section image 2 | `photo-1618843479313-40f8afb4b4d8` | Car interior photo |

Product card photos are currently placeholder text labels. To add real photos:
```html
<!-- Find the prod-card-photo div for each product, add an img tag: -->
<div class="prod-card-photo">
  <img src="images/your-product-photo.jpg" alt="VK-40">
</div>
```

---

### `vkool_bangunan.html` — Building Category

| What | Search for | Replace with |
|---|---|---|
| Hero background | `photo-1486325212027-8081e485255e` | Building hero photo |
| Why card 1 | `photo-1600585154340-be6161a56a0c` | Building interior photo |
| Why card 2 | `photo-1497366216548-37526070297c` | Office photo |
| Why card 3 | `photo-1441986300917-64674bd600d8` | Commercial building photo |

---

### `vkool_ppf_final.html` — PPF Category

| What | Search for | Replace with |
|---|---|---|
| Hero background | `photo-1625047509168-a7026f36de04` | PPF hero photo |
| PPF Matte product image | `photo-1603584173870-7f23fdae1b7a` | PPF Matte photo |
| PPF Glossy product image | `photo-1502877338535-766e1452684a` | PPF Glossy photo |

---

### `vkool_ppf_interior_redesign.html` — PPF Interior

| What | Search for | Replace with |
|---|---|---|
| Hero background | `photo-1555215695-3004980ad54e` | Interior hero photo |
| Why section | `photo-1606664515524-ed2f786a0bd6` | Interior detail photo |
| Before/After Tab images | `images/before-headunit.jpg` etc. | Real before/after photos |

The 5 before/after tabs use local files in `images/`:
```
before-headunit.jpg / after-headunit.jpg
before-setir.jpg    / after-setir.jpg
before-doorcup.jpg  / after-doorcup.jpg
before-frameac.jpg  / after-frameac.jpg
before-konsol.jpg   / after-konsol.jpg
```
Replace the files in your `images/` folder — keep the same filenames.

---

### `vkool_produk_vk40.html` — VK-40 Product Page

| What | How to find | Replace with |
|---|---|---|
| Before/After — BEFORE image | Search `vk40-before.jpg` | `images/your-before.jpg` |
| Before/After — AFTER image | Search `vk40-after.jpg` | `images/your-after.jpg` |

Hero visual is CSS-rendered (no photo). To add a real hero photo:
```html
<!-- Find .hero-right in CSS, add a background-image: -->
.hero-right { background: url('images/vk40-hero.jpg') center/cover; }
```

---

### `vkool_produk_vk70.html` — VK-70 Product Page

| What | How to find | Replace with |
|---|---|---|
| Before/After — BEFORE | Search `vk40-before.jpg` | `images/vk70-before.jpg` |
| Before/After — AFTER | Search `vk40-after.jpg` | `images/vk70-after.jpg` |

> Currently reuses the VK-40 before/after images as placeholders. Upload your own VK-70 shots and update the filenames.

---

### `vkool_produk_vk30.html` / `vkool_produk_vip.html` / `vkool_produk_x15.html` / `vkool_produk_x05.html`

Same pattern as VK-70 — all currently reuse the VK-40 before/after images.

| What | Search for | Replace with |
|---|---|---|
| Before/After — BEFORE | `vk40-before.jpg` | `images/PRODUCTCODE-before.jpg` |
| Before/After — AFTER | `vk40-after.jpg` | `images/PRODUCTCODE-after.jpg` |

Example for VK-30: upload `vk30-before.jpg` and `vk30-after.jpg` to `images/`, then change the two lines in `vkool_produk_vk30.html`.

---

### `vkool_produk_ppf_matte.html` — PPF Matte Product Page

| What | Search for | Replace with |
|---|---|---|
| Before/After — BEFORE | `photo-1605559424843-9e4c228bf1c2` | Real car without PPF photo |
| Before/After — AFTER | `photo-1486262715619-67b85e0b08d3` | Real car with PPF Matte photo |

---

### `vkool_produk_ppf_glossy.html` — PPF Glossy Product Page

Hero and body are CSS/text only — no background photos currently.

---

### `vkool_produk_ique73.html` — IQUE 73 Product Page

| What | Search for | Replace with |
|---|---|---|
| Hero right background | `photo-1545324418-cc1a3fa10c00` | Real building with film photo |

---

### `vkool_paket_diamond.html` — Diamond Series Package

Hero and specs are CSS/text only — no background photos currently.

---

### `vkool_tentang_kami.html` — About Us

| What | Search for | Replace with |
|---|---|---|
| Hero background | `images/vkool-showroom.jpg` | Replace the file in `images/` folder |
| Awards section | `photo-1540575467063-178a50c2df87` | Event/awards photo |

---

### `vkool_dealers.html` — Dealers

6 dealer cards + 6 hidden cards all use Unsplash photos as `<img src="...">`.
Search for `images.unsplash.com` inside the `.dealer-card` elements and replace each `src` with your real dealer location photos.

---

### `vkool_portfolio.html` — Portfolio

9 portfolio cards use Unsplash `<img src="...">` inside `.port-card` elements.
Replace each `src` with your real V-KOOL installation photos.

---

### `vkool_artikel.html` — Articles

| What | Where | Replace with |
|---|---|---|
| Featured article image | CSS `background:url(...)` in `.featured-card .featured-img` | Real promo/event photo |
| Article card 1–6 images | `<img src="..." >` inside each `.art-card` | Real article thumbnail photos |

Also update article card `href` links to real URLs (Tokopedia, V-KOOL site, campaign pages).

---

### `vkool_videos.html` — Videos

All videos use placeholder YouTube ID `dQw4w9WgXcQ`.

**How to replace:**
1. Get the YouTube Video ID from the URL: `youtube.com/watch?v=`**`ABC123xyz`**
2. Search `EDIT POINT 1` through `EDIT POINT 7` in the file
3. Replace `dQw4w9WgXcQ` with your real video ID in both the `href` and `img src`

Thumbnail format: `https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg`

| Edit Point | Section |
|---|---|
| EDIT POINT 1 | Featured video iframe |
| EDIT POINT 2 | Card 1 — Instalasi |
| EDIT POINT 3 | Card 2 — Teknologi |
| EDIT POINT 4 | Card 3 — PPF |
| EDIT POINT 5 | Card 4 — Testimoni |
| EDIT POINT 6 | Card 5 — Event |
| EDIT POINT 7 | Card 6 — Bangunan |

---

### `vkool_contact.html` — Contact Us

No photos — form and contact info only.

Update the WhatsApp number (used in both the form submission and the direct contact link):
```js
// In the <script> block, find:
const WA_NUMBER = '6221000000';
// Replace with real number (country code, no + sign):
const WA_NUMBER = '628123456789';
```

Also update the displayed phone/email/address in the right column (search for `+62 21 0000 000`).

---

## Design System

- **Fonts:** Oswald (headings) + Roboto (body) — Google Fonts
- **Colors:** Black `#0A0A0A` · Dark `#111111` · Gold `#CDB182` · Text `#EBEBEB` · Muted `#888` · Dim `#555`
- **Responsive breakpoints:** `1023px` (tablet) and `640px` (mobile)
- **Signature animations:** gold line sweep on hover · fade-up on scroll · VLT bar animation

---

## Maintenance — Adding a New Page

1. Copy an existing similar page as a starting point.
2. Set `<body data-page="KEY">`.
3. Keep `<div id="nav-placeholder"></div>` and `<div id="footer-placeholder"></div>`.
4. Keep `<script src="nav-footer.js"></script>` as the very last script.
5. If it needs a nav link, add it to `PAGES` in `nav-footer.js` and re-upload that file.
6. Breadcrumb separator: `&mdash;` with `style="color:#555555;"`.
7. Any nav references in page JS must be null-safe: `if(nav) nav.classList.toggle(...)`.
8. Test by dragging browser window narrow to verify responsive layout.

---

## Do NOT Upload These Files

Stale/internal files — keep out of the GitHub repo:

- `vkool_homepage_v2.html` → replaced by `index.html`
- `tentang-kami.html` → replaced by `vkool_tentang_kami.html`
- `vkool_paket_rekomendasi.html` → replaced by Otomotif → Diamond flow
- `vkool_page_template.html` → internal scaffolding only

---

## Team Handoff Guide

This section covers everything the team needs to know before making edits — especially for updating product information or adding new pages.

---

### 1. Updating Product Specs — Read This First

**Every product has specs in up to 4 places.** If you change a spec in one place, you must update ALL of them or the site will show inconsistent numbers.

For automotive films (VLT, IRR, UVR, TSER):

| Location | What to update |
|---|---|
| `vkool_otomotif.html` | The spec-bar cells inside the product card (`.spec-val`) |
| `vkool_produk_PRODUCTCODE.html` | Stats strip, spec table, VLT bar position, BA stats |
| `vkool_produk_PRODUCTCODE.html` | Lihat Juga rail on OTHER product pages that list this product |
| `vkool_paket_diamond.html` | If the product appears in the Diamond Series spec cards |

**VLT bar position formula** (for the sliding bar in product pages):
```
Bar position % = (VLT% - 5) / (70 - 5) × 100
```
Example: VLT 40% → (40-5)/65×100 = **54%**
After calculating, update both:
- `<div class="vlt-pin" style="left:XX%">`
- `vltFill.style.width = 'XX%'`

For building films (IQUE 73 etc.), the bar uses 0–100% scale so position = VLT% directly.

---

### 2. Adding a New Automotive Product Page

Use `vkool_produk_vk70.html` as the base template — it's the cleanest starting point.

**Step-by-step:**

1. **Copy the file**
   ```
   vkool_produk_vk70.html → vkool_produk_NEWPRODUCT.html
   ```

2. **Find and replace these items** (search each term, replace throughout):

   | Find | Replace with |
   |---|---|
   | `VK-70` | Your product code (e.g. `VK-40 PRO`) |
   | `VK70` | No-dash version (e.g. `VK40PRO`) — used in watermark |
   | `VK-<span class="g">70</span>` | `VK-40 <span class="g">PRO</span>` |
   | `70%` (in stats strip) | New VLT value |
   | `60%` (in stats strip) | New IRR value |
   | `40%` (in stats strip TSER) | New TSER value |
   | Hero tagline text | New tagline for this product |
   | Spec table values | All 4 new specs |
   | VLT bar `left:95%` | Recalculated bar position |
   | `vltFill.style.width = '95%'` | Recalculated bar position |

3. **Update the 4 Keunggulan Utama benefit cards**
   Write outcome-focused language (what the user feels/gains), not spec language.
   - ✅ "Kabin tetap sejuk bahkan tanpa AC"
   - ❌ "IRR 92%"

4. **Update the Aplikasi section**
   Set which windows are "Paling Ideal", "Direkomendasikan", "Tersedia", or "Tidak Direkomendasikan" based on the product's darkness level:
   - VLT 70%+ → Kaca Depan ideal
   - VLT 30–40% → Semua windows tersedia
   - VLT 20% or below → Kaca Depan tidak direkomendasikan

5. **Update Lihat Juga rail**
   - Remove the current product from the rail (it shouldn't link to itself)
   - The other 6 cards should link to the other existing product pages

6. **Wire it in `vkool_otomotif.html`**
   Find the product's card and change `href="#"` to `href="vkool_produk_NEWPRODUCT.html"`

7. **Add `data-positions` correctly on the otomotif card**
   This drives the filter tabs. Use any combination of: `depan`, `samping`, `belakang`, `sunroof`
   ```html
   <a class="prod-card" href="vkool_produk_vk40pro.html"
      data-positions="depan,samping,belakang,sunroof">
   ```

8. **No nav-footer.js update needed**
   Product pages are not in the nav — they're reached from the category page only.

---

### 3. Adding a New Building Product Page

Use `vkool_produk_ique73.html` as the base template.

Same process as above but:
- Specs are VLT, IRR, UVR, TSER (same 4)
- VLT bar uses 0–100% scale: bar position = VLT% directly
- The "4 Perubahan Nyata" cards replace the Aplikasi window cards
- Benefits should focus on: energy savings, glare reduction, UV protection, clarity
- Wire the card in `vkool_bangunan.html` with `data-positions="clear"` or `data-positions="privacy"`

---

### 4. The Filter System — How It Works

Both `vkool_otomotif.html` and `vkool_bangunan.html` use a filter system driven by the `data-positions` attribute on each product card.

**Otomotif filters:** `depan` · `samping` · `belakang` · `sunroof`
**Bangunan filters:** `clear` · `privacy`

Each card can have multiple values separated by commas:
```html
<a class="prod-card" data-positions="depan,samping,belakang">
```

The JavaScript reads this attribute and shows/hides cards when a filter tab is clicked. If you add a new product card and don't set `data-positions`, it will always show regardless of the active filter — which is wrong.

The first 3 cards always show. Cards marked `class="prod-card hidden"` are hidden until the "Lihat Semua" expand button is clicked.

---

### 5. The Lihat Juga Cross-Link Rule

When you add or update a product page, follow this rule:

- A product page must **never link to itself** in Lihat Juga
- A product page should link to its **closest alternatives** in Lihat Juga
- When you build a new product page, update the other product pages' Lihat Juga rails to include the new one

**Example:** VK-30 is in the Lihat Juga rail of VK-40, VK-70, VIP, X15, X05. When you add VK-40 PRO, add it to the Lihat Juga rails of the related products.

---

### 6. Writing Benefit Cards (Keunggulan Utama)

Each product page has 4 benefit cards that appear above the spec table. These are the most visible piece of copy on the page — write them carefully.

**The rule: user outcome first, spec as evidence.**

| ❌ Wrong (spec-first) | ✅ Right (outcome-first) |
|---|---|
| IRR 92% | Kabin tetap sejuk meski AC dimatikan |
| VLT 15% | Privasi hampir absolut dari segala sudut |
| TSER 70% | Tagihan bensin lebih hemat setiap hari |
| UVR 99% | Kulit dan interior terlindungi sepanjang perjalanan |

Each benefit card has:
- An SVG icon (pick from the existing set in other product pages)
- A title (3–5 words, uppercase via CSS)
- A description (1–2 sentences max, conversational Indonesian)

---

### 7. What Is Still Placeholder — Pre-Launch Checklist

Before going live, the team should replace all of the following:

**Phone / WhatsApp numbers**
- `vkool_contact.html` → search `6221000000` → replace with real number
- `nav-footer.js` → search `wa.me/6221` → update footer WhatsApp link
- All `href="https://wa.me/6221000000"` across cek_harga and other pages

**Product specs (marked 70% placeholder)**
- `vkool_bangunan.html` — all building product card specs
- `vkool_produk_ique73.html` — all specs (VLT, IRR, UVR, TSER)
- `vkool_produk_vip.html` (bangunan version in lihat juga)
- `vkool_produk_ppf_matte.html` — micron thickness if different from 200

**Product pages not yet built**
- VK-40 PRO → `vkool_otomotif.html` card still `href="#"`
- BLACK SERIES → `vkool_otomotif.html` card still `href="#"`
- K14, SILVER 20, IQUE 50 (bangunan) → `vkool_bangunan.html` cards still `href="#"`

**Videos**
- `vkool_videos.html` → all 7 Edit Points still use placeholder YouTube ID `dQw4w9WgXcQ`

**Articles**
- `vkool_artikel.html` → all article card `href` links point to placeholder URLs

**Dealer information**
- `vkool_dealers.html` → dealer names, addresses, phone numbers, and photos are placeholder

**Portfolio**
- `vkool_portfolio.html` → all 9 photos are Unsplash placeholders

**Office address & email**
- `vkool_contact.html` → search `Jakarta, Indonesia` and `info@vkool-indonesia.com`

**Copyright year**
- Automatically set by JavaScript — no action needed

---

### 8. JavaScript Safety Rule

Every page runs its own JavaScript **before** `nav-footer.js` injects the nav. This means any reference to the nav element must be null-safe.

**Always write:**
```js
// Safe — won't crash if nav hasn't loaded yet
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', scrollY > 40);
}, { passive: true });
```

**Never write:**
```js
// Unsafe — throws error on every scroll, breaks all JS below it
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40));
```

---

### 9. Responsive Design Rules

All pages have breakpoints at `1023px` (tablet) and `640px` (mobile). When editing CSS:
- Never use fixed pixel widths on layout containers — use `%`, `fr`, or `clamp()`
- Test by dragging the browser window narrow after any layout change
- The `--pad` CSS variable controls page margins: `56px` desktop → `20px` mobile (set in the `640px` breakpoint)


---

## Future Development Guide

This section explains what needs to change if the team wants to scale beyond static HTML — including real warranty checking, live pricing, and product content management.

---

### Current Architecture vs What's Needed

The site currently runs as **pure static HTML on GitHub Pages**. This means:
- No server, no database, no backend
- Every piece of content is hardcoded in HTML files
- Forms redirect to WhatsApp instead of storing submissions
- The warranty checker (`vkool_cek_garansi.html`) is a UI only — it doesn't actually verify anything

This is fine for launch. But as the business grows, these limitations will become real problems.

---

### Feature-by-Feature Upgrade Path

#### 1. Cek Garansi — Needs Real Backend (High Priority)

**Current state:** The form accepts a warranty code but does nothing with it — it's visual only.

**What's needed for a real warranty check:**
- A database table: `warranty_cards (serial_number, customer_name, install_date, dealer, product, expiry_date)`
- A backend API endpoint: receives serial number → queries DB → returns result
- The HTML form sends the code to the API and displays the result

**Recommended approach:**
```
Option A — Full backend (best long-term):
  Hosting: VPS / cloud server (DigitalOcean, AWS, etc.)
  Backend: Node.js / PHP / Python
  Database: MySQL or PostgreSQL

Option B — No-server approach (faster to build):
  Database: Google Sheets or Airtable (dealer team fills it in)
  API bridge: SheetDB.io or Airtable API
  The HTML form calls the API directly
  Cost: ~$0–$20/month
```

Option B can be built in 1–2 days and lets the dealer team register warranties in a spreadsheet without any coding.

---

#### 2. Product Specs — CMS Integration (Medium Priority)

**Current state:** Every spec (VLT, IRR, UVR, TSER) is hardcoded in HTML. Changing one spec requires editing 4+ files manually.

**What's needed:**
- A content source (Google Sheets, Airtable, or a proper CMS like Contentful/Sanity)
- A build step that reads the content and generates HTML — or a script that fetches it on page load

**Recommended approach for V-KOOL:**
```
Google Sheets → SheetDB API → JavaScript fetch on page load

Structure:
  Sheet columns: product_code | vlt | irr | uvr | tser | tagline | description
  Each product page fetches its own row and fills in the values
  Dealers update specs in the sheet — site updates automatically
```

This means:
- One source of truth for all specs
- Non-developers can update specs without touching HTML
- No more syncing 4 files every time a value changes

---

#### 3. Cek Harga — Optional Upgrade (Low Priority)

**Current state:** Static price estimator with fixed ranges. Works fine for most use cases.

**When to upgrade:** If V-KOOL wants real-time pricing (e.g. prices change by city, by dealer, or by promotion period).

**Recommended approach:**
```
Google Sheets with price table → API fetch on page load
Columns: product | city | price_min | price_max | updated_date
```

The estimator then shows live prices instead of hardcoded ranges. Promotions can be added/removed without touching HTML.

---

#### 4. Contact Form — Store Submissions (Medium Priority)

**Current state:** The form builds a WhatsApp message and opens it. No record is kept if WhatsApp is closed or the message isn't sent.

**Options:**
```
Option A — Formspree (easiest, no code):
  Sign up at formspree.io
  Add action="https://formspree.io/f/YOUR_ID" to the <form> tag
  Submissions arrive by email and are stored in Formspree dashboard
  Free tier: 50 submissions/month

Option B — Google Forms embed:
  Create a Google Form, embed it or redirect to it
  All submissions go to a Google Sheet automatically
  Free, no limits

Option C — Full backend:
  POST to your own server
  Store in database
  Send email notification
  Required if you want a custom admin dashboard
```

Formspree (Option A) can be set up in 10 minutes and is the fastest real upgrade.

---

#### 5. Articles & Videos — CMS (Medium Priority)

**Current state:** Each article card is hardcoded HTML. Adding a new article means editing `vkool_artikel.html` directly.

**Recommended approach:**
```
Headless CMS options:
  - Contentful (free tier: 25,000 records)
  - Sanity.io (free tier: generous)
  - Notion as CMS (via Notion API)

How it works:
  Content team adds articles in the CMS dashboard (no coding)
  JavaScript fetches the latest articles when the page loads
  New articles appear automatically without touching HTML
```

For videos, the same approach applies — store YouTube video IDs and titles in the CMS, fetch and render on page load.

---

### Hosting Migration (When GitHub Pages Is No Longer Enough)

GitHub Pages is free but has limits:
- No server-side code (no PHP, Node.js, Python)
- No database connections
- No form processing
- 1GB storage limit, 100GB/month bandwidth

**When to migrate:** As soon as you need the warranty checker to actually work, or the contact form to store submissions.

**Recommended hosting path:**

| Stage | Hosting | Cost | Suitable for |
|---|---|---|---|
| Now | GitHub Pages | Free | Static marketing site |
| Next | Vercel or Netlify | Free–$20/mo | Static + serverless functions (APIs) |
| Grown | DigitalOcean / AWS | $20–$100/mo | Full backend + database |

**Vercel** is the easiest first step — it hosts the same static files as GitHub Pages but also supports serverless API functions, which is what you need for the warranty checker and form storage.

Migration from GitHub Pages to Vercel takes less than an hour and requires no code changes to the HTML files.

---

### Summary — What to Build First

If budget and time are limited, prioritize in this order:

1. **Cek Garansi (real warranty check)** — using Google Sheets + SheetDB API. This is the feature users expect to actually work. Currently it's broken (UI only).

2. **Contact form storage** — Formspree integration. 10 minutes to set up, prevents lost enquiries.

3. **Product specs via Google Sheets** — eliminates the risk of inconsistent specs across pages when someone forgets to update 4 files.

4. **Articles/Videos CMS** — when content is updated more than once a month.

5. **Full backend + database** — when the business needs a proper admin panel, dealer portal, or customer accounts.

---

### Developer Notes

- All HTML, CSS, and JavaScript in this repo is framework-free — no React, no Vue, no build step. Any developer can read and edit it directly.
- When adding a backend, the HTML pages can call APIs using `fetch()` — no framework migration needed.
- The design system (CSS variables, class names, typography) is fully documented in the Design System section above — any new pages or components should follow the same tokens.
- Keep `nav-footer.js` as the single source for nav and footer — do not duplicate nav HTML into individual pages.
