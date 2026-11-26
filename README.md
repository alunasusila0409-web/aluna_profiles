# Aluna Profile's - Website Profil Pribadi (3 Halaman)

Website profil resmi 3 halaman milik **Aluna Susila Ramadhani** yang dirancang dengan tata letak modern, responsif, bergaya formal, dan menggunakan palet warna kolaborasi **Kuning & Hijau Pastel (Pastel Light Theme)**.

---

## 📑 Struktur Halaman & Fitur Baru

1. **Halaman Pertama (`index.html` - Beranda)**:
   - Judul menarik: *"Aluna Profile's"*.
   - **Ilustrasi Teknologi**: Dilengkapi ilustrasi vektor bertema siswi teknologi jaringan dengan palet warna pastel kuning dan pastel hijau (`assets/illustration.jpg`).
   - Pembukaan resmi, sorotan keahlian, dan kutipan komitmen di bidang teknologi.
2. **Halaman Kedua (`profile.html` - Profil Pribadi)**:
   - **Foto Profil Resmi**: Foto Aluna Susila Ramadhani berbingkai elegan dengan lencana terverifikasi (`assets/aluna.jpg`).
   - **Nama Lengkap**: Aluna Susila Ramadhani
   - **Umur**: 16 Tahun
   - **Institusi**: SMK Telkom Malang (*Student of SMK Telkom Malang*)
   - **Jurusan / Keahlian**: Teknik Komputer & Jaringan (TKJ)
   - Rincian fokus kompetensi teknis jaringan (arsitektur LAN/WAN, routing, switching, dan administrasi server).
3. **Halaman Ketiga (`contact.html` - Kontak & Media Sosial)**:
   - **Instagram**: [`@butterfliess.o`](https://instagram.com/butterfliess.o)
   - **TikTok**: [`@meltylaff`](https://tiktok.com/@meltylaff)
   - Formulir pesan interaktif untuk komunikasi formal.

---

## 🎨 Tema Desain (Kolaborasi Kuning & Hijau Pastel)
- **Pastel Green**: Nuansa hijau sage dan mint lembut (`#d8f3dc`, `#52b788`, `#2d6a4f`) untuk elemen formal, tombol utama, dan border natural.
- **Pastel Yellow**: Nuansa butter/lemon kuning lembut (`#fefce8`, `#fef08a`, `#b45309`) untuk highlight, aksen usia & jurusan, serta kartu informasi.
- **Tipografi**: Menggunakan font Google *Plus Jakarta Sans* dengan kontras tinggi untuk keterbacaan optimal.

---

## 🚀 Panduan Deploy ke Vercel

Website ini telah disiapkan secara optimal untuk di-deploy ke [Vercel](https://vercel.com/) menggunakan konfigurasi file `vercel.json` (*clean URLs* dan header keamanan terpasang).

### Cara 1: Deploy Melalui GitHub (Paling Direkomendasikan & Otomatis)

1. Masukkan folder project ini ke repositori GitHub:
   ```bash
   git init
   git add .
   git commit -m "Update tema kuning & hijau pastel serta penambahan foto profil & ilustrasi"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/aluna-profile.git
   git push -u origin main
   ```
2. Buka dashboard [Vercel](https://vercel.com/) dan lakukan login.
3. Klik tombol **"Add New..."** lalu pilih **"Project"** dan impor repositori GitHub Anda.
4. Klik **"Deploy"**.

---

### Cara 2: Deploy Langsung Menggunakan Vercel CLI

1. Arahkan terminal ke direktori proyek ini:
   ```bash
   cd "C:\Users\ACER\.gemini\antigravity\scratch\aluna-profile"
   ```
2. Jalankan perintah deploy produksi:
   ```bash
   vercel --prod
   ```
