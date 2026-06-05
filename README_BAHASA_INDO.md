# V-KOOL Indonesia — Website

Website marketing premium bertema gelap untuk V-KOOL Indonesia (kaca film otomotif, kaca film bangunan, dan Paint Protection Film). Dibangun menggunakan HTML, CSS, dan JavaScript murni — tanpa framework, tanpa proses build. Dirancang untuk di-deploy via GitHub Pages.

---

## Mulai Cepat (Deploy ke GitHub Pages)

1. Upload **semua file** ke folder **root** repositori GitHub Anda (bukan di dalam subfolder).
2. Letakkan semua file gambar di dalam folder `images/` di root.
3. Di repositori: **Settings → Pages → Source → Deploy from a branch → `main` → `/(root)` → Save**.
4. Website akan aktif di `https://USERNAME.github.io/NAMA-REPO/`

Homepage adalah `index.html` — GitHub Pages otomatis menjadikannya halaman utama.

---

## Daftar File Lengkap

```
/ (root)
├── index.html                          ← Halaman utama (homepage)
├── nav-footer.js                       ← Nav + footer bersama (dibutuhkan semua halaman)
│
├── vkool_otomotif.html                 ← Kategori kaca film otomotif
├── vkool_bangunan.html                 ← Kategori kaca film bangunan
├── vkool_ppf_final.html                ← Kategori PPF
├── vkool_ppf_interior_redesign.html    ← PPF Interior
│
├── vkool_produk_vk40.html              ← Produk: VK-40
├── vkool_produk_vk70.html              ← Produk: VK-70
├── vkool_produk_vk30.html              ← Produk: VK-30
├── vkool_produk_vip.html               ← Produk: VIP
├── vkool_produk_x15.html               ← Produk: X15
├── vkool_produk_x05.html               ← Produk: X05
├── vkool_produk_ique73.html            ← Produk: IQUE 73 (bangunan)
├── vkool_produk_ppf_matte.html         ← Produk: PPF Matte
├── vkool_produk_ppf_glossy.html        ← Produk: PPF Glossy
├── vkool_paket_diamond.html            ← Paket: Diamond Series
│
├── vkool_tentang_kami.html             ← Tentang Kami
├── vkool_dealers.html                  ← Lokasi dealer
├── vkool_portfolio.html                ← Galeri portofolio
├── vkool_faq.html                      ← FAQ
├── vkool_artikel.html                  ← Artikel & Berita
├── vkool_videos.html                   ← Galeri video
├── vkool_contact.html                  ← Hubungi Kami / Formulir enquiry
│
├── vkool_cek_harga.html                ← Estimasi harga (utama)
├── vkool_cek_harga_otomotif.html       ← Estimasi harga — otomotif
├── vkool_cek_harga_bangunan.html       ← Estimasi harga — bangunan
├── vkool_cek_harga_ppf.html            ← Estimasi harga — PPF
├── vkool_cek_garansi.html              ← Cek garansi
│
├── TEMPLATE_produk_otomotif.html       ← Template halaman produk otomotif (untuk tim)
├── TEMPLATE_produk_bangunan.html       ← Template halaman produk bangunan (untuk tim)
│
└── images/                             ← Semua aset foto
    ├── vkool-showroom.jpg
    ├── vk40-before.jpg / vk40-after.jpg
    ├── before-headunit.jpg / after-headunit.jpg
    ├── before-setir.jpg / after-setir.jpg
    ├── before-doorcup.jpg / after-doorcup.jpg
    ├── before-frameac.jpg / after-frameac.jpg
    └── before-konsol.jpg / after-konsol.jpg
```

---

## nav-footer.js — File Terpenting

File ini menyuntikkan navigasi, footer, dan semua CSS-nya ke setiap halaman. Setiap halaman membutuhkan:

```html
<body data-page="KUNCI">
  <div id="nav-placeholder"></div>
  ...konten halaman...
  <div id="footer-placeholder"></div>
  <script src="nav-footer.js"></script>  <!-- script terakhir sebelum </body> -->
</body>
```

### Daftar kunci halaman (data-page)

| Kunci | File |
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

Halaman produk (VK-40, VK-70, dll.) menggunakan kunci halaman induknya, misalnya `data-page="otomotif"`.

> **PENTING:** Upload ulang `nav-footer.js` setiap kali menambahkan halaman baru ke navigasi.

---

## Cara Mengganti Gambar — Per Halaman

Semua gambar placeholder menggunakan URL Unsplash. Ganti dengan foto V-KOOL asli dengan mengedit URL di lokasi yang disebutkan. Untuk file lokal, gunakan `images/nama-foto.jpg`.

---

### `index.html` — Homepage

Cari URL ini dan ganti:

| Bagian | Cari teks ini | Ganti dengan |
|---|---|---|
| Background hero | `photo-1618843479313-40f8afb4b4d8` | Foto hero kendaraan |
| Kartu produk 1 (Otomotif) | `photo-1503376780353-7e6692767b70` | Foto kaca film otomotif |
| Kartu produk 2 (Bangunan) | `photo-1486325212027-8081e485255e` | Foto kaca film bangunan |
| Kartu produk 3 (PPF) | `photo-1558618666-fcd25c85cd64` | Foto PPF |
| Bagian why/trust | `photo-1625047509168-a7026f36de04` | Foto instalasi |

---

### `vkool_otomotif.html` — Kategori Otomotif

| Bagian | Cari teks ini | Ganti dengan |
|---|---|---|
| Background hero | `photo-1503376780353-7e6692767b70` | Foto hero otomotif |
| Gambar teknologi 1 | `photo-1558618666-fcd25c85cd64` | Foto close-up film |
| Gambar teknologi 2 | `photo-1618843479313-40f8afb4b4d8` | Foto interior mobil |

Foto kartu produk saat ini masih berupa teks placeholder. Untuk menambahkan foto asli:
```html
<!-- Cari div prod-card-photo untuk setiap produk, tambahkan tag img: -->
<div class="prod-card-photo">
  <img src="images/foto-produk-anda.jpg" alt="VK-40">
</div>
```

---

### `vkool_bangunan.html` — Kategori Bangunan

| Bagian | Cari teks ini | Ganti dengan |
|---|---|---|
| Background hero | `photo-1486325212027-8081e485255e` | Foto hero bangunan |
| Kartu why 1 | `photo-1600585154340-be6161a56a0c` | Foto interior gedung |
| Kartu why 2 | `photo-1497366216548-37526070297c` | Foto kantor |
| Kartu why 3 | `photo-1441986300917-64674bd600d8` | Foto gedung komersial |

---

### `vkool_ppf_final.html` — Kategori PPF

| Bagian | Cari teks ini | Ganti dengan |
|---|---|---|
| Background hero | `photo-1625047509168-a7026f36de04` | Foto hero PPF |
| Gambar produk PPF Matte | `photo-1603584173870-7f23fdae1b7a` | Foto PPF Matte |
| Gambar produk PPF Glossy | `photo-1502877338535-766e1452684a` | Foto PPF Glossy |

---

### `vkool_ppf_interior_redesign.html` — PPF Interior

| Bagian | Cari teks ini | Ganti dengan |
|---|---|---|
| Background hero | `photo-1555215695-3004980ad54e` | Foto hero interior |
| Bagian why | `photo-1606664515524-ed2f786a0bd6` | Foto detail interior |
| Gambar tab Before/After | `images/before-headunit.jpg` dst. | Foto sebelum/sesudah asli |

5 tab before/after menggunakan file lokal di folder `images/`:
```
before-headunit.jpg / after-headunit.jpg
before-setir.jpg    / after-setir.jpg
before-doorcup.jpg  / after-doorcup.jpg
before-frameac.jpg  / after-frameac.jpg
before-konsol.jpg   / after-konsol.jpg
```
Ganti file di folder `images/` — pertahankan nama file yang sama.

---

### `vkool_produk_vk40.html` — Halaman Produk VK-40

| Bagian | Cara mencari | Ganti dengan |
|---|---|---|
| Slider Before — SEBELUM | Cari `vk40-before.jpg` | `images/sebelum-anda.jpg` |
| Slider Before — SESUDAH | Cari `vk40-after.jpg` | `images/sesudah-anda.jpg` |

---

### `vkool_produk_vk70.html` — Halaman Produk VK-70

| Bagian | Cara mencari | Ganti dengan |
|---|---|---|
| Slider SEBELUM | Cari `vk40-before.jpg` | `images/vk70-sebelum.jpg` |
| Slider SESUDAH | Cari `vk40-after.jpg` | `images/vk70-sesudah.jpg` |

> Saat ini masih menggunakan gambar VK-40 sebagai placeholder. Upload foto VK-70 sendiri dan perbarui nama file.

---

### `vkool_produk_vk30.html` / `vkool_produk_vip.html` / `vkool_produk_x15.html` / `vkool_produk_x05.html`

Pola yang sama — semua saat ini menggunakan gambar VK-40 sebagai placeholder.

| Bagian | Cari | Ganti dengan |
|---|---|---|
| Slider SEBELUM | `vk40-before.jpg` | `images/KODEPRODUK-sebelum.jpg` |
| Slider SESUDAH | `vk40-after.jpg` | `images/KODEPRODUK-sesudah.jpg` |

Contoh untuk VK-30: upload `vk30-sebelum.jpg` dan `vk30-sesudah.jpg` ke folder `images/`, lalu ubah dua baris tersebut di `vkool_produk_vk30.html`.

---

### `vkool_produk_ppf_matte.html` — Halaman Produk PPF Matte

| Bagian | Cari | Ganti dengan |
|---|---|---|
| Slider SEBELUM | `photo-1605559424843-9e4c228bf1c2` | Foto mobil tanpa PPF |
| Slider SESUDAH | `photo-1486262715619-67b85e0b08d3` | Foto mobil dengan PPF Matte |

---

### `vkool_produk_ique73.html` — Halaman Produk IQUE 73

| Bagian | Cari | Ganti dengan |
|---|---|---|
| Background hero kanan | `photo-1545324418-cc1a3fa10c00` | Foto bangunan dengan kaca film |

---

### `vkool_tentang_kami.html` — Tentang Kami

| Bagian | Cari | Ganti dengan |
|---|---|---|
| Background hero | `images/vkool-showroom.jpg` | Ganti file di folder `images/` |
| Bagian penghargaan | `photo-1540575467063-178a50c2df87` | Foto event/penghargaan |

---

### `vkool_dealers.html` — Dealer

6 kartu dealer + 6 kartu tersembunyi menggunakan foto Unsplash sebagai `<img src="...">`.
Cari `images.unsplash.com` di dalam elemen `.dealer-card` dan ganti setiap `src` dengan foto lokasi dealer asli.

---

### `vkool_portfolio.html` — Portofolio

9 kartu portofolio menggunakan Unsplash `<img src="...">` di dalam elemen `.port-card`.
Ganti setiap `src` dengan foto instalasi V-KOOL asli.

---

### `vkool_artikel.html` — Artikel

| Bagian | Lokasi | Ganti dengan |
|---|---|---|
| Gambar artikel unggulan | CSS `background:url(...)` di `.featured-img` | Foto promo/event |
| Gambar kartu artikel 1–6 | `<img src="...">` di setiap `.art-card` | Foto thumbnail artikel |

Juga perbarui `href` di setiap kartu artikel ke URL asli (Tokopedia, website V-KOOL, halaman kampanye).

---

### `vkool_videos.html` — Videos

Semua video menggunakan ID YouTube placeholder `dQw4w9WgXcQ`.

**Cara mengganti:**
1. Ambil ID Video YouTube dari URL: `youtube.com/watch?v=`**`ABC123xyz`**
2. Cari `EDIT POINT 1` hingga `EDIT POINT 7` di dalam file
3. Ganti `dQw4w9WgXcQ` dengan ID video asli di `href` dan `img src`

Format thumbnail: `https://img.youtube.com/vi/ID_VIDEO_ANDA/maxresdefault.jpg`

| Edit Point | Bagian |
|---|---|
| EDIT POINT 1 | Video unggulan (iframe) |
| EDIT POINT 2 | Kartu 1 — Instalasi |
| EDIT POINT 3 | Kartu 2 — Teknologi |
| EDIT POINT 4 | Kartu 3 — PPF |
| EDIT POINT 5 | Kartu 4 — Testimoni |
| EDIT POINT 6 | Kartu 5 — Event |
| EDIT POINT 7 | Kartu 6 — Bangunan |

---

### `vkool_contact.html` — Hubungi Kami

Tidak ada foto — hanya formulir dan informasi kontak.

Perbarui nomor WhatsApp (digunakan di formulir dan tombol kontak langsung):
```js
// Di blok <script>, cari:
const WA_NUMBER = '6221000000';
// Ganti dengan nomor asli (kode negara, tanpa tanda +):
const WA_NUMBER = '628123456789';
```

Juga perbarui nomor telepon, email, dan alamat kantor yang ditampilkan (cari `+62 21 0000 000`).

---

## Panduan Tim — Baca Sebelum Melakukan Perubahan

---

### 1. Memperbarui Spesifikasi Produk — Baca Ini Dulu

**Setiap produk memiliki spesifikasi di hingga 4 tempat.** Jika mengubah satu nilai, semua tempat harus diperbarui agar tidak ada angka yang tidak konsisten.

Untuk kaca film otomotif (VLT, IRR, UVR, TSER):

| Lokasi | Yang perlu diperbarui |
|---|---|
| `vkool_otomotif.html` | Sel spec-bar di kartu produk (`.spec-val`) |
| `vkool_produk_KODEPRODUK.html` | Stats strip, tabel spesifikasi, posisi bar VLT, stats BA |
| Halaman produk LAIN | Rail Lihat Juga yang menampilkan produk ini |
| `vkool_paket_diamond.html` | Jika produk muncul di kartu spesifikasi Diamond Series |

**Rumus posisi bar VLT** (untuk slider di halaman produk):
```
Posisi bar % = (VLT% - 5) / (70 - 5) × 100
```
Contoh: VLT 40% → (40-5)/65×100 = **54%**

Setelah menghitung, perbarui keduanya:
- `<div class="vlt-pin" style="left:XX%">`
- `vltFill.style.width = 'XX%'`

Untuk kaca film bangunan, bar menggunakan skala 0–100%, jadi posisi = VLT% langsung.

---

### 2. Menambahkan Halaman Produk Otomotif Baru

Gunakan file `TEMPLATE_produk_otomotif.html` sebagai titik awal.

**Langkah-langkah:**

1. **Salin file template**
   ```
   TEMPLATE_produk_otomotif.html → vkool_produk_KODEPRODUK.html
   ```

2. **Isi semua `[PLACEHOLDER]`** — setiap spot yang perlu diubah sudah ditandai dengan jelas

3. **Hitung posisi bar VLT** menggunakan rumus di atas

4. **Tulis 4 kartu Keunggulan Utama** dengan bahasa berbasis manfaat (bukan spesifikasi):
   - ✅ "Kabin tetap sejuk bahkan tanpa AC"
   - ❌ "IRR 92%"

5. **Tentukan status Aplikasi** berdasarkan tingkat kegelapan:
   - VLT 70%+ → Kaca Depan: Paling Ideal
   - VLT 30–40% → Semua kaca: Direkomendasikan/Tersedia
   - VLT 20% ke bawah → Kaca Depan: Tidak Direkomendasikan
   - VLT 5% → Kaca Depan + Sunroof: Tidak Direkomendasikan

6. **Perbarui rail Lihat Juga** — jangan pernah memasukkan produk halaman ini ke railnya sendiri

7. **Sambungkan di `vkool_otomotif.html`** — ubah `href="#"` di kartu produk menjadi `href="vkool_produk_KODEPRODUK.html"`

8. **Atur `data-positions`** di kartu otomotif dengan benar:
   ```html
   data-positions="depan,samping,belakang,sunroof"
   ```
   Nilai yang tersedia: `depan` · `samping` · `belakang` · `sunroof`

---

### 3. Menambahkan Halaman Produk Bangunan Baru

Gunakan file `TEMPLATE_produk_bangunan.html` sebagai titik awal.

Sama seperti di atas, tetapi:
- Bar VLT menggunakan skala 0–100%: posisi bar = VLT% langsung
- Kartu "4 Perubahan Nyata" menggantikan kartu jendela Aplikasi
- Manfaat berfokus pada: penghematan energi, pengurangan silau, perlindungan UV, kejernihan
- Sambungkan kartu di `vkool_bangunan.html` dengan `data-positions="clear"` atau `data-positions="privacy"`

---

### 4. Sistem Filter — Cara Kerjanya

Halaman `vkool_otomotif.html` dan `vkool_bangunan.html` menggunakan sistem filter berbasis atribut `data-positions`.

**Filter Otomotif:** `depan` · `samping` · `belakang` · `sunroof`
**Filter Bangunan:** `clear` · `privacy`

Setiap kartu bisa memiliki beberapa nilai dipisah koma:
```html
<a class="prod-card" data-positions="depan,samping,belakang">
```

JavaScript membaca atribut ini dan menampilkan/menyembunyikan kartu saat tab filter diklik. Jika kartu baru tidak memiliki `data-positions`, kartu akan selalu tampil terlepas dari filter aktif — ini tidak benar.

3 kartu pertama selalu ditampilkan. Kartu dengan `class="prod-card hidden"` tersembunyi sampai tombol "Lihat Semua" diklik.

---

### 5. Aturan Cross-Link Lihat Juga

Saat menambahkan atau memperbarui halaman produk, ikuti aturan ini:

- Halaman produk **tidak boleh** menautkan ke dirinya sendiri di Lihat Juga
- Tautkan ke **film alternatif terdekat**
- Saat membangun halaman produk baru, perbarui rail Lihat Juga di halaman produk lain untuk menyertakan yang baru

---

### 6. Menulis Kartu Keunggulan Utama

Setiap halaman produk memiliki 4 kartu manfaat. Tulis dengan bahasa berbasis hasil pengguna:

| ❌ Salah (spesifikasi dulu) | ✅ Benar (manfaat dulu) |
|---|---|
| IRR 92% | Kabin tetap sejuk meski AC dimatikan |
| VLT 15% | Privasi hampir absolut dari segala sudut |
| TSER 70% | Tagihan bensin lebih hemat setiap hari |
| UVR 99% | Kulit dan interior terlindungi sepanjang perjalanan |

---

### 7. Checklist Sebelum Diluncurkan

Ganti semua yang masih placeholder sebelum website go-live:

**Nomor telepon / WhatsApp**
- `vkool_contact.html` → cari `6221000000` → ganti dengan nomor asli
- `nav-footer.js` → cari `wa.me/6221` → perbarui link WhatsApp di footer
- Semua `href="https://wa.me/6221000000"` di seluruh halaman

**Spesifikasi produk (masih placeholder 70%)**
- `vkool_bangunan.html` — semua spek kartu produk bangunan
- `vkool_produk_ique73.html` — semua spesifikasi
- Rail Lihat Juga di halaman produk lain yang menampilkan produk bangunan

**Halaman produk yang belum dibangun**
- VK-40 PRO → kartu di `vkool_otomotif.html` masih `href="#"`
- BLACK SERIES → kartu di `vkool_otomotif.html` masih `href="#"`
- K14, SILVER 20, IQUE 50 (bangunan) → kartu di `vkool_bangunan.html` masih `href="#"`

**Video**
- `vkool_videos.html` → semua 7 Edit Point masih menggunakan ID YouTube placeholder `dQw4w9WgXcQ`

**Artikel**
- `vkool_artikel.html` → semua `href` kartu artikel mengarah ke URL placeholder

**Informasi dealer**
- `vkool_dealers.html` → nama, alamat, nomor telepon, dan foto dealer masih placeholder

**Portofolio**
- `vkool_portfolio.html` → semua 9 foto masih Unsplash placeholder

**Alamat kantor & email**
- `vkool_contact.html` → cari `Jakarta, Indonesia` dan `info@vkool-indonesia.com`

---

### 8. Aturan Keamanan JavaScript

Setiap halaman menjalankan JavaScript-nya **sebelum** `nav-footer.js` menyuntikkan nav. Artinya, setiap referensi ke elemen nav harus dilindungi null-check.

**Selalu tulis seperti ini:**
```js
// Aman — tidak akan crash jika nav belum dimuat
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', scrollY > 40);
}, { passive: true });
```

**Jangan tulis seperti ini:**
```js
// BERBAHAYA — melempar error di setiap scroll, merusak semua JS di bawahnya
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40));
```

---

### 9. Aturan Desain Responsif

Semua halaman memiliki breakpoint di `1023px` (tablet) dan `640px` (mobile). Saat mengedit CSS:
- Jangan gunakan lebar piksel tetap pada container layout — gunakan `%`, `fr`, atau `clamp()`
- Uji dengan menyempitkan jendela browser setelah perubahan layout apapun
- Variabel CSS `--pad` mengontrol margin halaman: `56px` desktop → `20px` mobile

---

## Panduan Pengembangan Lanjutan

Bagian ini menjelaskan apa yang perlu diubah jika tim ingin mengembangkan website melebihi kemampuan HTML statis.

---

### Arsitektur Saat Ini vs Yang Dibutuhkan

Website saat ini berjalan sebagai **HTML statis murni di GitHub Pages**. Artinya:
- Tidak ada server, database, atau backend
- Semua konten dikodekan langsung di file HTML
- Formulir mengarahkan ke WhatsApp, bukan menyimpan data
- Halaman `vkool_cek_garansi.html` hanya tampilan UI — tidak benar-benar memverifikasi apapun

Ini baik-baik saja untuk peluncuran awal. Namun seiring bisnis berkembang, keterbatasan ini akan menjadi masalah nyata.

---

### Jalur Upgrade Per Fitur

#### 1. Cek Garansi — Butuh Backend (Prioritas Tinggi)

**Kondisi saat ini:** Formulir menerima kode garansi tapi tidak melakukan apa-apa — hanya tampilan.

**Yang dibutuhkan untuk cek garansi nyata:**
- Tabel database: `kartu_garansi (nomor_seri, nama_pelanggan, tanggal_instalasi, dealer, produk, tanggal_kedaluwarsa)`
- API endpoint backend: menerima nomor seri → query DB → mengembalikan hasil
- Formulir HTML mengirim kode ke API dan menampilkan hasilnya

**Pendekatan yang direkomendasikan:**
```
Opsi A — Backend penuh (terbaik jangka panjang):
  Hosting: VPS / cloud server (DigitalOcean, AWS, dll.)
  Backend: Node.js / PHP / Python
  Database: MySQL atau PostgreSQL

Opsi B — Tanpa server (lebih cepat dibangun):
  Database: Google Sheets atau Airtable (tim dealer mengisinya)
  Jembatan API: SheetDB.io atau Airtable API
  Formulir HTML memanggil API langsung
  Biaya: ~Rp0–Rp300.000/bulan
```

Opsi B bisa dibangun dalam 1–2 hari dan memungkinkan tim dealer mendaftarkan garansi di spreadsheet tanpa perlu coding.

---

#### 2. Spesifikasi Produk — Integrasi CMS (Prioritas Menengah)

**Kondisi saat ini:** Setiap spesifikasi (VLT, IRR, UVR, TSER) dikodekan langsung di HTML. Mengubah satu spesifikasi memerlukan pengeditan 4+ file secara manual.

**Pendekatan yang direkomendasikan:**
```
Google Sheets → SheetDB API → JavaScript fetch saat halaman dimuat

Struktur kolom sheet:
  kode_produk | vlt | irr | uvr | tser | tagline | deskripsi

Setiap halaman produk mengambil baris datanya sendiri dan mengisi nilainya.
Tim memperbarui spek di sheet — website otomatis terupdate.
```

Artinya:
- Satu sumber kebenaran untuk semua spesifikasi
- Non-developer bisa memperbarui spek tanpa menyentuh HTML
- Tidak perlu lagi menyinkronkan 4 file setiap kali nilai berubah

---

#### 3. Cek Harga — Upgrade Opsional (Prioritas Rendah)

**Kondisi saat ini:** Estimator harga statis dengan rentang tetap. Berfungsi baik untuk sebagian besar kasus.

**Kapan perlu upgrade:** Jika V-KOOL ingin harga real-time (misalnya harga berbeda per kota, per dealer, atau per periode promosi).

**Pendekatan yang direkomendasikan:**
```
Google Sheets dengan tabel harga → API fetch saat halaman dimuat
Kolom: produk | kota | harga_min | harga_max | tanggal_update
```

---

#### 4. Formulir Kontak — Simpan Pengiriman (Prioritas Menengah)

**Kondisi saat ini:** Formulir membangun pesan WhatsApp dan membukanya. Tidak ada catatan yang tersimpan jika WhatsApp ditutup.

**Pilihan:**
```
Opsi A — Formspree (termudah, tanpa kode):
  Daftar di formspree.io
  Tambahkan action="https://formspree.io/f/ID_ANDA" ke tag <form>
  Pengiriman masuk via email dan tersimpan di dashboard Formspree
  Tier gratis: 50 pengiriman/bulan

Opsi B — Google Forms:
  Buat Google Form, embed atau redirect ke sana
  Semua pengiriman otomatis masuk ke Google Sheet
  Gratis, tanpa batas

Opsi C — Backend penuh:
  POST ke server sendiri
  Simpan di database
  Kirim notifikasi email
  Diperlukan jika ingin dashboard admin kustom
```

Formspree (Opsi A) bisa diatur dalam 10 menit dan merupakan upgrade nyata tercepat.

---

#### 5. Artikel & Video — CMS (Prioritas Menengah)

**Kondisi saat ini:** Setiap kartu artikel dikodekan langsung di HTML. Menambahkan artikel baru berarti mengedit `vkool_artikel.html` secara langsung.

**Pendekatan yang direkomendasikan:**
```
Pilihan CMS:
  - Contentful (tier gratis: 25.000 record)
  - Sanity.io (tier gratis: cukup besar)
  - Notion sebagai CMS (via Notion API)

Cara kerjanya:
  Tim konten menambahkan artikel di dashboard CMS (tanpa coding)
  JavaScript mengambil artikel terbaru saat halaman dimuat
  Artikel baru muncul otomatis tanpa menyentuh HTML
```

---

### Migrasi Hosting (Ketika GitHub Pages Tidak Lagi Cukup)

GitHub Pages gratis tapi terbatas:
- Tidak ada kode sisi server (tanpa PHP, Node.js, Python)
- Tidak ada koneksi database
- Tidak ada pemrosesan formulir
- Batas penyimpanan 1GB, bandwidth 100GB/bulan

**Jalur hosting yang direkomendasikan:**

| Tahap | Hosting | Biaya | Cocok untuk |
|---|---|---|---|
| Sekarang | GitHub Pages | Gratis | Website marketing statis |
| Selanjutnya | Vercel atau Netlify | Gratis–$20/bulan | Statis + fungsi serverless (API) |
| Berkembang | DigitalOcean / AWS | $20–$100/bulan | Backend penuh + database |

**Vercel** adalah langkah pertama termudah — hosting file statis yang sama seperti GitHub Pages tetapi juga mendukung fungsi API serverless, yang dibutuhkan untuk cek garansi dan penyimpanan formulir.

Migrasi dari GitHub Pages ke Vercel memakan waktu kurang dari satu jam dan tidak memerlukan perubahan kode pada file HTML.

---

### Ringkasan — Apa yang Harus Dibangun Pertama

Jika anggaran dan waktu terbatas, prioritaskan dalam urutan ini:

1. **Cek Garansi (verifikasi nyata)** — menggunakan Google Sheets + SheetDB API. Ini adalah fitur yang diharapkan pengguna benar-benar berfungsi. Saat ini masih rusak (UI saja).

2. **Penyimpanan formulir kontak** — integrasi Formspree. 10 menit untuk diatur, mencegah hilangnya enquiry.

3. **Spesifikasi produk via Google Sheets** — menghilangkan risiko spesifikasi tidak konsisten antar halaman.

4. **CMS untuk Artikel/Video** — ketika konten diperbarui lebih dari sekali sebulan.

5. **Backend penuh + database** — ketika bisnis membutuhkan panel admin, portal dealer, atau akun pelanggan.

---

## File yang TIDAK Boleh Di-upload

File usang/internal — jangan masukkan ke repositori GitHub:

- `vkool_homepage_v2.html` → digantikan oleh `index.html`
- `tentang-kami.html` → digantikan oleh `vkool_tentang_kami.html`
- `vkool_paket_rekomendasi.html` → digantikan oleh alur Otomotif → Diamond Series
- `vkool_page_template.html` → hanya scaffolding internal
