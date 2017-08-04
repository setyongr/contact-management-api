Simple Contact Management REST API
---
Requirement:
- Node v8.x

Tested On:
- Ubuntu 16.04
- Node v8.2.1

# Usage
## Server
1. run `npm install`
2. run `npm run dev`

Server secara default berjalan di `localhost:3000`. Untuk mengatur konfigurasi buka file `src/config/env/development.js`

Pastikan mongodb sudah berjalan dan sesuai dengan konfigurasi

Aplikasi ini menggunakan JWT, pastikan untuk menambahkan header `Authorization` dan masukkan `Bearer` token untuk membuka resource yang di proteksi

# API Documentation
Dukumentasi API di generate otomatis dengan [apidoc](http://apidocjs.com/)
Untuk generate dokumentasi baru jalankan `npm run docs`
Dokumentasi berada di folder `docs` dan bisa diakses dengan membuka file `index.html`