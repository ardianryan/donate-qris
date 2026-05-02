# Donate QRIS - Buy Me A Coffee for HonoWA

Halaman donasi interaktif untuk mendukung pengembangan **HonoWA (Hono.js + Unofficial WhatsApp API)** menggunakan pembayaran QRIS dinamis.

## 🚀 Fitur Utama

- **Dynamic QRIS**: Menghasilkan kode QRIS otomatis sesuai dengan nominal yang dipilih menggunakan API pihak ketiga.
- **Modern UI**: Desain responsif berbasis Tailwind CSS dengan dukungan Dark Mode.
- **Material Icons**: Menggunakan Google Material Icons untuk antarmuka yang bersih dan state-of-the-art.
- **SEO & AI Optimized**: Dilengkapi dengan meta tags lengkap untuk Google Search dan AI crawlers (GPTBot, dll).
- **Environment Config**: Pengaturan kode QRIS utama melalui file `.env`.
- **Reference Included**: Menyertakan kode sumber asli dari `qrisdinamis` sebagai referensi logika.

## 🛠️ Persiapan

### 1. Prasyarat
- PHP 7.4 atau versi terbaru.
- Web Server (Apache/Nginx) atau bisa dijalankan langsung dengan PHP built-in server.

### 2. Konfigurasi
Buat file `.env` di direktori akar dan tambahkan kode QRIS utama Anda:

```env
QRIS_UTAMA=00020101021126610014... (kode qris lengkap Anda)
```

### 3. Jalankan Aplikasi
Jika menggunakan PHP built-in server:
```bash
php -S localhost:8000
```
Buka `http://localhost:8000` di browser Anda.

## 📂 Struktur Proyek

- `index.php`: Halaman utama dengan logika PHP & JavaScript.
- `qrisdinamis/`: Folder referensi logika generator QRIS.
- `.env`: File konfigurasi (diabaikan oleh git).
- `robots.txt`, `sitemap.xml`, `humans.txt`: File optimasi SEO dan metadata.

## 🔗 Link Terkait

- **Main Repository**: [HonoWA - WhatsApp API](https://github.com/elianhardyy/hono-wa-web-multidevice/)
- **Official Domain**: [donate.ppti.me](https://donate.ppti.me)

## 📄 Lisensi

Proyek ini merupakan bagian dari ekosistem HonoWA. Pastikan untuk mencantumkan kredit yang sesuai jika digunakan ulang.

---
*Dikembangkan oleh [Ardian Ryan](https://github.com/ardianryan)*
