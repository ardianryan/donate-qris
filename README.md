# Donate QRIS - Buy Me A Coffee for HonoWA

Halaman donasi interaktif untuk mendukung pengembangan **HonoWA (Hono.js + Unofficial WhatsApp API)** menggunakan pembayaran QRIS dinamis. Sekarang dibangun menggunakan **Hono.js** dan **TypeScript** untuk performa yang lebih baik dan kemudahan pengembangan.

## 🚀 Fitur Utama

- **Hono.js Framework**: Menggunakan Hono.js yang ringan dan cepat.
- **Dynamic QRIS**: Menghasilkan kode QRIS otomatis sesuai dengan nominal yang dipilih menggunakan API pihak ketiga.
- **Modern UI**: Desain responsif berbasis Tailwind CSS dengan dukungan Dark Mode.
- **Material Icons**: Menggunakan Google Material Icons untuk antarmuka yang bersih dan state-of-the-art.
- **SEO & AI Optimized**: Dilengkapi dengan meta tags lengkap untuk Google Search dan AI crawlers (GPTBot, dll).
- **Environment Config**: Pengaturan kode QRIS utama melalui file `.env`.
- **Reference Included**: Menyertakan kode sumber asli dari `qrisdinamis` sebagai referensi logika.

## 🛠️ Persiapan Lokal

### 1. Prasyarat
- Node.js (v18 atau terbaru)
- npm atau yarn

### 2. Instalasi
Clone repositori dan install dependensi:
```bash
npm install
```

### 3. Konfigurasi
Buat file `.env` di direktori akar dan tambahkan kode QRIS utama Anda:

```env
QRIS_UTAMA=00020101021126610014... (kode qris lengkap Anda)
PORT=3000
```

### 4. Jalankan Aplikasi
```bash
npm run dev
```
Buka `http://localhost:3000` di browser Anda.

## ☁️ Deploy ke Vercel

Aplikasi ini dapat di-deploy ke Vercel dengan sangat mudah:

1.  **Push ke GitHub**: Pastikan kode Anda sudah di-push ke repositori GitHub.
2.  **Import ke Vercel**: Buka [Vercel Dashboard](https://vercel.com/new) dan import proyek Anda.
3.  **Environment Variables**: Di Vercel, tambahkan variable environment berikut:
    -   `QRIS_UTAMA`: Kode QRIS utama Anda.
4.  **Deploy**: Klik tombol Deploy. Vercel akan otomatis mengenali konfigurasi dan menjalankan aplikasi.

> [!TIP]
> Jika Anda menggunakan Hono Node Server, pastikan untuk menyesuaikan `entry point` jika diperlukan atau gunakan `vercel.json` untuk routing.

## 📂 Struktur Proyek

- `src/index.ts`: Entry point server Hono.js.
- `public/index.html`: Template utama frontend.
- `qrisdinamis/`: Folder referensi logika generator QRIS.
- `.env`: File konfigurasi (diabaikan oleh git).
- `robots.txt`, `sitemap.xml`, `humans.txt`, `security.txt`: File optimasi SEO dan metadata.

## 🔗 Link Terkait

- **Main Repository**: [HonoWA - WhatsApp API](https://github.com/elianhardyy/hono-wa-web-multidevice/)
- **Official Domain**: [donate.ppti.me](https://donate.ppti.me)

## 📄 Lisensi

Proyek ini merupakan bagian dari ekosistem HonoWA. Pastikan untuk mencantumkan kredit yang sesuai jika digunakan ulang.

---
*Dikembangkan oleh [Ardian Ryan](https://github.com/ardianryan)*
