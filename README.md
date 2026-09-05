# Donate QRIS - Support Our Project

An interactive, high-performance donation page designed to support ongoing project and open-source software development using dynamic QRIS payments. Built with **Hono.js**, **TypeScript**, and modern web standards.

## 🚀 Key Features

- **Hono.js Framework**: Lightweight, blazing fast server runtime.
- **Dynamic QRIS**: Generates instant QRIS payment codes with custom amounts on the fly.
- **Mobile QR Download**: Easily save/download QRIS images directly to mobile photo galleries for seamless scanning in banking and e-wallet apps.
- **Auto Dark & Light Mode**: Automatically detects and synchronizes with system theme preference (`prefers-color-scheme`) with optional manual toggle.
- **Modern Responsive UI**: Built with Tailwind CSS and Google Material Icons.
- **SEO & Crawler Optimized**: Full metadata suite with Open Graph, Twitter cards, and JSON-LD Schema.
- **Configurable**: Easy configuration via `.env` files.

## 🛠️ Getting Started Locally

### 1. Prerequisites
- Node.js (v18 or newer)
- npm or pnpm

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Configuration
Create a `.env` file in the project root:
```env
QRIS_UTAMA=00020101021126610014... (your master static QRIS string)
PORT=3000
```

### 4. Run Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

## ☁️ Deploy to Vercel

1. **Push to GitHub**: Push your changes to your GitHub repository.
2. **Import to Vercel**: Connect your repository in the Vercel Dashboard.
3. **Environment Variables**: Add `QRIS_UTAMA` in Vercel Project Settings.
4. **Deploy**: Deploy directly without extra build setup.

## 📂 Project Structure

- `src/index.ts`: Hono.js server entry point.
- `public/index.html`: Main frontend application template.
- `public/`: Static assets (`robots.txt`, `sitemap.xml`, `humans.txt`, `security.txt`).
- `.env`: Environment variables (git-ignored).

---
*Developed with ❤️ by [Ardian Ryan](https://github.com/ardianryan)*
