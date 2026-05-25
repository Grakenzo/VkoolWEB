# V-KOOL Indonesia Website

Premium window film & PPF website for V-KOOL Indonesia.

## Folder Structure

```
vkool-site/
├── pages/                              ← All HTML files
│   ├── index.html                      ← Homepage
│   ├── vkool_otomotif.html
│   ├── vkool_bangunan.html
│   ├── vkool_ppf_final.html
│   ├── vkool_ppf_interior_redesign.html
│   └── vkool_page_template.html        ← Dev template for new pages
│
├── images/                             ← All image assets
│   ├── before-headunit.jpg             ✅ Done
│   ├── after-headunit.jpg              ✅ Done
│   ├── before-setir.jpg                ⏳ Pending upload
│   ├── after-setir.jpg                 ⏳ Pending upload
│   ├── before-doorcup.jpg              ⏳ Pending upload
│   ├── after-doorcup.jpg               ⏳ Pending upload
│   ├── before-frameac.jpg              ⏳ Pending upload
│   ├── after-frameac.jpg               ⏳ Pending upload
│   ├── before-konsol.jpg               ⏳ Pending upload
│   └── after-konsol.jpg                ⏳ Pending upload
│
├── README.md
└── .gitignore
```

## Pages

| File | Page | Status |
|---|---|---|
| `index.html` | Homepage | ✅ Done |
| `vkool_otomotif.html` | Kaca Film Otomotif | ✅ Done |
| `vkool_bangunan.html` | Kaca Film Bangunan | ✅ Done |
| `vkool_ppf_final.html` | PPF Eksterior | ✅ Done |
| `vkool_ppf_interior_redesign.html` | PPF Interior | ✅ Done |

## Navigation Map

```
Homepage (index.html)
├── Otomotif      → vkool_otomotif.html
├── Bangunan      → vkool_bangunan.html
├── PPF (dropdown)
│   ├── PPF           → vkool_ppf_final.html
│   └── PPF Interior  → vkool_ppf_interior_redesign.html
├── Tentang Kami  → (pending)
├── Dealers       → (pending)
└── Selengkapnya (dropdown)
    ├── Artikel       → (pending)
    ├── Videos        → (pending)
    ├── Cek Garansi   → (pending)
    └── FAQ           → (pending)
```

## Before/After Images (PPF Interior)

All before/after images go in the `images/` folder.
Named exactly as listed above — HTML references them automatically.

## How to Add a New Page

1. Copy `pages/vkool_page_template.html`
2. Rename it (e.g. `vkool_dealers.html`) and place in `pages/`
3. Update `<title>` tag
4. Mark active nav link as `<span class="nav-link active">` instead of `<a>`
5. Build content inside `<main>`
6. Update nav/footer links in all existing pages

## Tech Stack

- Pure HTML / CSS / JS — no frameworks, no build tools
- Google Fonts: Oswald + Roboto
- Open any HTML file directly in browser to preview
- All pages in same `pages/` folder so navigation works locally
