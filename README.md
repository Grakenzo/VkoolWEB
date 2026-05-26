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

## How to Update YouTube Videos (`vkool_videos.html`)

All video links use placeholder YouTube ID `dQw4w9WgXcQ`. Replace with real IDs.

**How to find a YouTube Video ID:**
URL: `https://www.youtube.com/watch?v=ABC123xyz`  
Video ID = `ABC123xyz`

**Thumbnail URL format:**
`https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg`

| Edit Point | What to change | Location in file |
|---|---|---|
| **EDIT POINT 1** | Featured video embed | Search `EDIT POINT 1` — replace `dQw4w9WgXcQ` in the `iframe src` |
| **EDIT POINT 2** | Card 1 — Instalasi | Search `EDIT POINT 2` — replace `href` URL + `img src` thumbnail |
| **EDIT POINT 3** | Card 2 — Teknologi | Search `EDIT POINT 3` — replace `href` URL + `img src` thumbnail |
| **EDIT POINT 4** | Card 3 — PPF | Search `EDIT POINT 4` — replace `href` URL + `img src` thumbnail |
| **EDIT POINT 5** | Card 4 — Testimoni | Search `EDIT POINT 5` — replace `href` URL + `img src` thumbnail |
| **EDIT POINT 6** | Card 5 — Event | Search `EDIT POINT 6` — replace `href` URL + `img src` thumbnail |
| **EDIT POINT 7** | Card 6 — Bangunan | Search `EDIT POINT 7` — replace `href` URL + `img src` thumbnail |

**Each card — 2 things to update:**
```html
<!-- 1. The link href -->
<a class="vid-card" href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID">

<!-- 2. The thumbnail src -->
<img src="https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg">

<!-- Optional: Update duration text -->
<span class="vid-duration">4:32</span>

<!-- Optional: Update video title -->
<h3 class="vid-title">Your Video Title Here</h3>
```

**Featured video iframe — update this:**
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID?rel=0&modestbranding=1">
```
