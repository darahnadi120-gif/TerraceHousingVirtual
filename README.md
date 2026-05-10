# Virtual House Walkthrough 3D

Asset visual utama pada project ini menggunakan GLB/GLTF, bukan primitive cube.  
Kalau file model belum tersedia, scene tetap jalan dengan placeholder yang rapi dan siap diganti otomatis.

## Struktur Asset

Tempatkan file di folder berikut:

```text
public/
  models/
    environment/
      luxury_gateway.glb
      road.glb
      security_post.glb
      street_lamp.glb
      garden_props.glb
    houses/
      luxury_house_exterior.glb
      luxury_house_interior.glb
    furniture/
      living_room_set.glb
      bedroom_set.glb
      kitchen_set.glb
      bathroom_set.glb
      dining_set.glb
    props/
      plants.glb
      lamps.glb
      paintings.glb
      car.glb
  textures/
    marble/
    wood/
    concrete/
    grass/
    asphalt/
    ceramic/
```

## Asset Download Checklist (Rename + Folder)

1. Download model gateway perumahan, rename jadi `luxury_gateway.glb`, taruh di `public/models/environment/`.
2. Download model jalan komplek, rename jadi `road.glb`, taruh di `public/models/environment/`.
3. Download model pos security, rename jadi `security_post.glb`, taruh di `public/models/environment/`.
4. Download model lampu jalan, rename jadi `street_lamp.glb`, taruh di `public/models/environment/`.
5. Download model taman/dekorasi luar, rename jadi `garden_props.glb`, taruh di `public/models/environment/`.
6. Download model rumah mewah exterior, rename jadi `luxury_house_exterior.glb`, taruh di `public/models/houses/`.
7. Download model rumah interior (atau shell interior), rename jadi `luxury_house_interior.glb`, taruh di `public/models/houses/`.
8. Download model set ruang tamu + sofa, rename jadi `living_room_set.glb`, taruh di `public/models/furniture/`.
9. Download model set kamar tidur + kasur, rename jadi `bedroom_set.glb`, taruh di `public/models/furniture/`.
10. Download model kitchen set, rename jadi `kitchen_set.glb`, taruh di `public/models/furniture/`.
11. Download model bathroom set (toilet/shower), rename jadi `bathroom_set.glb`, taruh di `public/models/furniture/`.
12. Download model meja makan + kursi, rename jadi `dining_set.glb`, taruh di `public/models/furniture/`.
13. Download model tanaman, rename jadi `plants.glb`, taruh di `public/models/props/`.
14. Download model lampu interior/dekoratif, rename jadi `lamps.glb`, taruh di `public/models/props/`.
15. Download model dekorasi dinding/lukisan, rename jadi `paintings.glb`, taruh di `public/models/props/`.
16. Download model mobil, rename jadi `car.glb`, taruh di `public/models/props/`.

Begitu file dengan nama di atas sudah ada, komponen `ModelLoader` langsung memuat asset asli tanpa perlu ubah kode scene.

## Blender Workflow (Legal + Optimized)

1. Download asset dari sumber legal: Sketchfab, Poly Haven, Kenney, Quaternius, ambientCG.
2. Cek lisensi agar boleh digunakan.
3. Buka model di Blender.
4. Rapikan scale, rotation, dan posisi.
5. Hapus object/material yang tidak diperlukan.
6. Kurangi polygon bila terlalu berat.
7. Pastikan origin benar dan ukuran konsisten dengan scene.
8. Export sebagai `.glb`.
9. Taruh file hasil export ke folder `public/models` sesuai nama pada checklist.
10. Jalankan `npm run dev`.

## Catatan Teknis

- Primitive geometry dipakai hanya untuk collider, hotspot trigger, boundary, helper object, dan minimap sederhana.
- Sistem collision menggunakan collider ringan (`CuboidCollider`), bukan mesh collider detail GLB.
- Semua path asset terpusat di `src/data/assetData.ts`.
- `ModelLoader` otomatis preload path asset dan memberi fallback placeholder kalau file belum tersedia.
