# V-KOOL Indonesia Website

Live at: `https://YOUR_USERNAME.github.io/vkool-site/`

## Folder Structure

```
vkool-site/
├── index.html                          ← Homepage
├── vkool_otomotif.html
├── vkool_bangunan.html
├── vkool_ppf_final.html
├── vkool_ppf_interior_redesign.html
├── vkool_tentang_kami.html
├── vkool_page_template.html            ← Dev template for new pages
├── nav-footer.js                       ← SHARED NAV & FOOTER (update here only)
│
├── images/
│   ├── vkool-showroom.jpg              ✅ Tentang Kami hero
│   ├── before-headunit.jpg             ✅
│   ├── after-headunit.jpg              ✅
│   ├── before-setir.jpg                ✅
│   ├── after-setir.jpg                 ✅
│   ├── before-doorcup.jpg              ✅
│   ├── after-doorcup.jpg               ✅
│   ├── before-frameac.jpg              ✅
│   ├── after-frameac.jpg               ✅
│   ├── before-konsol.jpg               ✅
│   └── after-konsol.jpg                ✅
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
| `vkool_tentang_kami.html` | Tentang Kami | ✅ Done |

## Nav System

All pages use `nav-footer.js` for shared nav and footer.
To add a new page: update the `PAGES` object in `nav-footer.js` only.
Each page has `<body data-page="pagename">` for active state detection.

## Deploy on GitHub Pages

1. Upload all files keeping the structure above
2. Settings → Pages → Deploy from branch → main → / (root)
3. Live at: `https://YOUR_USERNAME.github.io/vkool-site/`
