Konsep Aplikasi

Nama ide aplikasinya bisa:

Virtual House Walkthrough 3D

Aplikasi Next.js untuk developer perumahan agar calon pembeli bisa masuk dan berjalan-jalan secara virtual di dalam rumah melalui website. Jadi bukan cuma lihat foto rumah, tapi user bisa merasakan seakan-akan sedang keliling rumah sungguhan.

Teknologi yang cocok:

Next.js + TypeScript untuk website utama. Next.js App Router adalah router modern yang direkomendasikan di dokumentasi Next.js.
React Three Fiber untuk membuat scene 3D karena library ini adalah renderer React untuk Three.js dan memungkinkan pembuatan scene 3D secara deklaratif.
Drei untuk helper 3D seperti camera controls, environment, text, dan komponen siap pakai untuk React Three Fiber.
Rapier / react-three-rapier untuk collision/physics supaya user tidak bisa menembus tembok. Rapier memang ditujukan untuk kebutuhan real-time physics seperti game, animasi, dan simulasi.
Fitur Utama Aplikasi
1. Landing Page Developer Rumah

Halaman awal seperti website properti.

Isinya:

Nama perumahan.
Foto/render rumah.
Harga rumah.
Luas tanah dan bangunan.
Tombol “Mulai Tour 3D”.
Tombol “Lihat Denah”.
Tombol “Hubungi Developer”.

Contoh teks:

Rasakan pengalaman melihat rumah secara langsung melalui Virtual Walkthrough 3D. Jelajahi ruang tamu, kamar tidur, dapur, kamar mandi, dan halaman rumah secara interaktif.

2. Mode Jalan-Jalan 3D di Dalam Rumah

Ini fitur paling penting.

User bisa:

Jalan maju, mundur, kiri, kanan pakai tombol W A S D.
Melihat sekitar pakai mouse.
Masuk ke ruang tamu, kamar, dapur, kamar mandi.
Tidak bisa menembus tembok.
Melihat interior rumah dari sudut pandang orang pertama.

Untuk tugas grafika komputer, ini bagus karena menunjukkan:

Kamera perspektif.
Transformasi posisi kamera.
Collision detection.
Object 3D.
Lighting.
Material dan tekstur.
Interaksi real-time.
3. Mini Map / Denah Kecil

Di pojok kanan atas ada denah kecil rumah.

Fungsinya:

Menunjukkan posisi user saat ini.
Menampilkan nama ruangan.
Ada titik merah sebagai posisi user.
User bisa klik ruangan untuk teleport ke ruangan itu.

Contoh ruangan:

Ruang Tamu
Kamar Tidur 1
Kamar Tidur 2
Dapur
Kamar Mandi
Garasi
Taman Belakang
4. Hotspot Informasi

Di dalam rumah ada titik-titik interaktif.

Misalnya user melihat icon kecil di ruang tamu. Ketika diklik, muncul informasi:

Ruang tamu memiliki ukuran 3 x 4 meter, cocok untuk sofa 3 seat dan meja tamu minimalis.

Hotspot bisa dipasang di:

Dinding
Lantai
Jendela
Kamar
Dapur
Kamar mandi
Area listrik
Area ventilasi

Ini membuat aplikasinya lebih terasa seperti aplikasi properti profesional.

5. Mode Siang dan Malam

User bisa mengganti suasana rumah:

Mode pagi
Mode siang
Mode malam

Efeknya:

Cahaya matahari berubah.
Lampu rumah menyala saat malam.
Bayangan berubah.

Ini bagus banget untuk materi grafika komputer karena menunjukkan konsep:

Lighting
Shadow
Environment
Material response terhadap cahaya
6. Toggle Furniture

User bisa memilih:

Rumah kosong
Rumah dengan furniture
Interior minimalis
Interior modern

Contoh:

Klik tombol “Tampilkan Furniture”, maka sofa, meja, tempat tidur, lemari, dan kitchen set muncul.

Ini membuat aplikasinya lebih menarik untuk client karena client bisa membayangkan rumah setelah ditempati.

7. Guided Tour Mode

Selain user jalan sendiri, ada juga mode otomatis.

Ketika user klik “Mulai Tur Otomatis”, kamera berjalan otomatis:

Masuk dari pintu depan.
Menampilkan ruang tamu.
Masuk ke kamar utama.
Masuk ke dapur.
Masuk ke kamar mandi.
Keluar ke taman belakang.

Ini cocok untuk client yang tidak terbiasa mengontrol game.

8. Fitur Screenshot

User bisa klik tombol:

Ambil Screenshot

Lalu aplikasi menyimpan tampilan ruangan yang sedang dilihat.

Untuk tugas kuliah, ini bisa jadi fitur tambahan keren.

Versi MVP yang Masuk Akal untuk Tugas

Jangan langsung bikin terlalu kompleks. Untuk tugas grafika komputer, versi yang realistis:

Minimal yang harus ada
Landing page sederhana.
Scene rumah 3D.
User bisa jalan pakai WASD.
Kamera first-person.
Ada tembok, lantai, pintu, jendela.
Ada lampu dan bayangan.
Ada 3 sampai 5 ruangan.
Ada hotspot informasi.
Ada mini map sederhana.
Ada tombol reset posisi.

Itu sudah cukup kuat untuk tugas.

Struktur Halaman Website
/
├── Landing page
├── Informasi rumah
├── Tombol mulai tour

/walkthrough
├── Canvas 3D
├── Kontrol jalan
├── Mini map
├── Hotspot info
├── Tombol mode siang/malam
├── Tombol guided tour
Struktur Folder Next.js
src/
├── app/
│   ├── page.tsx
│   ├── walkthrough/
│   │   └── page.tsx
│   └── globals.css
│
├── components/
│   ├── landing/
│   │   ├── HeroSection.tsx
│   │   ├── HouseInfo.tsx
│   │   └── CTASection.tsx
│   │
│   ├── walkthrough/
│   │   ├── WalkthroughScene.tsx
│   │   ├── PlayerController.tsx
│   │   ├── HouseModel.tsx
│   │   ├── Room.tsx
│   │   ├── Hotspot.tsx
│   │   ├── MiniMap.tsx
│   │   ├── UIOverlay.tsx
│   │   └── GuidedTour.tsx
│
├── data/
│   └── houseData.ts
│
└── types/
    └── house.ts
Objek 3D yang Perlu Ada

Untuk versi tugas, rumahnya tidak harus super realistis. Bisa dibuat dari bentuk dasar:

Lantai: box/cube tipis
Dinding: box panjang
Pintu: box tipis
Jendela: plane transparan
Sofa: gabungan box
Meja: box kecil
Kasur: box besar
Lampu: sphere kecil + point light
Atap: optional

Jadi tidak wajib pakai model Blender dulu. Bisa dibuat langsung pakai primitive object dari Three.js/React Three Fiber.

Nilai Plus untuk Presentasi Tugas

Kamu bisa jelaskan seperti ini ke dosen:

Aplikasi ini menerapkan konsep grafika komputer dalam bentuk simulasi virtual walkthrough rumah 3D berbasis web. User dapat bergerak di dalam lingkungan 3D menggunakan kamera perspektif first-person. Sistem menggunakan objek geometri 3D seperti lantai, dinding, pintu, furniture, dan pencahayaan. Selain itu, aplikasi memiliki interaksi berupa hotspot informasi, mini map, mode siang/malam, serta collision agar user tidak menembus objek.

Prompt AI Agent untuk Membuat Website

Pakai prompt ini untuk AI agent seperti Cursor, Windsurf, v0, atau Lovable:

Buatkan aplikasi web menggunakan Next.js App Router, TypeScript, Tailwind CSS, React Three Fiber, Drei, dan react-three-rapier.

Nama aplikasi: Virtual House Walkthrough 3D.

Tujuan aplikasi:
Aplikasi ini digunakan oleh developer perumahan untuk menampilkan rumah yang akan dijual dalam bentuk virtual walkthrough 3D. Calon pembeli dapat berjalan-jalan di dalam rumah melalui website seakan-akan sedang melihat rumah secara langsung.

Buat aplikasi dengan dua halaman utama:

1. Landing Page
- Desain modern, elegan, dan cocok untuk website properti.
- Tampilkan nama rumah: "Green Harmoni Residence".
- Tampilkan deskripsi singkat rumah.
- Tampilkan informasi:
  - Luas Bangunan: 72 m²
  - Luas Tanah: 90 m²
  - 2 Kamar Tidur
  - 1 Kamar Mandi
  - 1 Dapur
  - 1 Ruang Tamu
- Tampilkan tombol utama "Mulai Tour 3D".
- Ketika tombol diklik, arahkan user ke halaman /walkthrough.

2. Halaman Walkthrough 3D
- Buat scene 3D menggunakan React Three Fiber.
- Buat rumah sederhana dari objek 3D primitive, bukan model eksternal.
- Rumah minimal terdiri dari:
  - Ruang tamu
  - Kamar tidur utama
  - Kamar tidur anak
  - Dapur
  - Kamar mandi
- Buat lantai, dinding, pintu, jendela, dan beberapa furniture sederhana.
- Gunakan warna dan material yang rapi.
- Tambahkan lighting:
  - Ambient light
  - Directional light sebagai matahari
  - Point light di beberapa ruangan
- Tambahkan shadow agar terlihat realistis.

Fitur interaksi:
- User dapat berjalan menggunakan tombol W A S D.
- User dapat melihat sekitar menggunakan mouse.
- Gunakan sudut pandang first-person camera.
- Tambahkan collision sederhana agar user tidak menembus dinding.
- Tambahkan tombol reset posisi.
- Tambahkan mini map di pojok kanan atas.
- Mini map menampilkan denah sederhana dan titik posisi user.
- Tambahkan hotspot informasi di setiap ruangan.
- Ketika hotspot diklik, tampilkan modal/card informasi ruangan.
- Tambahkan tombol mode siang/malam.
- Ketika mode malam aktif, cahaya matahari berkurang dan lampu ruangan lebih terang.
- Tambahkan tombol "Guided Tour" yang membuat kamera berpindah otomatis dari ruang tamu ke kamar, dapur, lalu kamar mandi.

Desain UI:
- Gunakan Tailwind CSS.
- Tampilan harus modern, bersih, dan cocok untuk presentasi tugas grafika komputer.
- Tambahkan overlay instruksi:
  "Gunakan W A S D untuk bergerak, mouse untuk melihat sekitar."
- Tambahkan tombol kembali ke landing page.

Struktur komponen:
- WalkthroughScene.tsx
- PlayerController.tsx
- HouseModel.tsx
- Hotspot.tsx
- MiniMap.tsx
- UIOverlay.tsx
- GuidedTour.tsx
- houseData.ts

Kriteria kode:
- Gunakan TypeScript.
- Komponen harus rapi dan terpisah.
- Jangan gunakan backend dulu.
- Semua data rumah disimpan di file houseData.ts.
- Pastikan aplikasi bisa langsung dijalankan dengan npm run dev.
- Hindari error hydration di Next.js dengan memastikan komponen Canvas 3D berjalan sebagai client component menggunakan "use client".
- Buat tampilan responsive untuk desktop dan laptop.
- Prioritaskan performa agar scene tidak terlalu berat.

Tambahkan juga komentar kode singkat agar mudah dijelaskan saat presentasi tugas.
Fitur Keren Tambahan Kalau Mau Lebih Menonjol

Kalau mau nilainya kelihatan lebih tinggi, tambahkan:

1. Sistem Pengukuran Ruangan

User klik tombol “Lihat Ukuran”, lalu muncul label:

Ruang Tamu: 3 x 4 m
Kamar Utama: 3 x 3 m
Dapur: 2 x 3 m
2. Mode Kamera

Ada 3 mode:

First Person
Top View
Orbit View

First Person untuk berjalan, Top View untuk melihat denah, Orbit View untuk melihat rumah dari luar.

3. Pilih Warna Cat

User bisa mengganti warna dinding:

Putih
Cream
Abu-abu
Biru muda

Ini menunjukkan manipulasi material dalam grafika komputer.

4. Simulasi Cahaya Matahari

Ada slider waktu:

Pagi — Siang — Sore — Malam

Semakin malam, cahaya matahari redup dan lampu rumah menyala.

5. Label Nama Ruangan

Saat user masuk ruangan, muncul teks:

Anda sedang berada di Ruang Tamu

Ide Judul Tugas

Beberapa pilihan judul:

Implementasi Virtual Walkthrough Rumah 3D Berbasis Web Menggunakan Next.js dan React Three Fiber
Simulasi Jelajah Rumah 3D Interaktif untuk Developer Properti Berbasis Web
Penerapan Grafika Komputer pada Aplikasi Virtual Tour Rumah 3D
Aplikasi Interaktif First-Person Walkthrough Rumah 3D untuk Promosi Properti
Visualisasi Rumah 3D Berbasis Web dengan Kontrol Kamera Interaktif

Yang paling bagus menurut saya:

Implementasi Virtual Walkthrough Rumah 3D Berbasis Web Menggunakan Next.js dan React Three Fiber

Versi Cerita Presentasi

Kamu bisa presentasikan begini:

Permasalahan yang diangkat adalah calon pembeli rumah biasanya hanya melihat rumah melalui foto, video, atau brosur. Cara ini kurang memberikan pengalaman nyata tentang ukuran dan suasana rumah. Oleh karena itu, dibuat aplikasi Virtual House Walkthrough 3D berbasis web yang memungkinkan user berjalan di dalam rumah secara interaktif. Aplikasi ini memanfaatkan konsep grafika komputer seperti pemodelan objek 3D, kamera perspektif, pencahayaan, material, tekstur, transformasi, collision detection, dan interaksi user secara real-time.