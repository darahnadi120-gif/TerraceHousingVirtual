import type {
  CameraSpawn,
  GuidedTourPoint,
  Hotspot,
  PropertyInfo,
  Room
} from "@/types/house";

export const propertyInfo: PropertyInfo = {
  name: "Aurora Grand Residence",
  unit: "Type Magnolia 120",
  landSize: "160 m2",
  buildingSize: "120 m2",
  floors: 2,
  bedrooms: 3,
  bathrooms: 2,
  style: "Modern Luxury"
};

export const rooms: Room[] = [
  {
    id: "gateway",
    name: "Gateway",
    shortLabel: "GW",
    size: "10 x 6 m",
    description: "Titik awal kawasan hunian premium dengan identitas visual kuat.",
    center: { x: 0, z: 24 },
    mapSize: { width: 10, depth: 6 },
    bounds: { minX: -5, maxX: 5, minZ: 20, maxZ: 28 }
  },
  {
    id: "front-yard",
    name: "Front Yard",
    shortLabel: "FY",
    size: "12 x 8 m",
    description: "Area transisi luar menuju rumah utama dan carport.",
    center: { x: 0, z: 10 },
    mapSize: { width: 12, depth: 8 },
    bounds: { minX: -6, maxX: 6, minZ: 6, maxZ: 14 }
  },
  {
    id: "living-room",
    name: "Ruang Tamu",
    shortLabel: "RT",
    size: "4 x 5 m",
    description: "Area penerima tamu dengan konsep modern luxury.",
    center: { x: -4, z: 2 },
    mapSize: { width: 6, depth: 4 },
    bounds: { minX: -7, maxX: -1, minZ: 0, maxZ: 4 }
  },
  {
    id: "family-room",
    name: "Ruang Keluarga",
    shortLabel: "RK",
    size: "4 x 4 m",
    description: "Area santai utama dengan pencahayaan hangat.",
    center: { x: 4, z: 2 },
    mapSize: { width: 6, depth: 4 },
    bounds: { minX: 1, maxX: 7, minZ: 0, maxZ: 4 }
  },
  {
    id: "dining-room",
    name: "Ruang Makan",
    shortLabel: "RM",
    size: "3 x 4 m",
    description: "Ruang makan dekat dapur untuk aktivitas keluarga.",
    center: { x: 4, z: -2 },
    mapSize: { width: 5, depth: 4 },
    bounds: { minX: 1, maxX: 7, minZ: -4, maxZ: 0 }
  },
  {
    id: "kitchen",
    name: "Dapur",
    shortLabel: "DP",
    size: "3 x 3 m",
    description: "Dapur modern compact dengan kitchen set fungsional.",
    center: { x: 4, z: -6 },
    mapSize: { width: 4, depth: 3 },
    bounds: { minX: 2, maxX: 6, minZ: -8, maxZ: -4 }
  },
  {
    id: "master-bedroom",
    name: "Kamar Tidur Utama",
    shortLabel: "KU",
    size: "4 x 4 m",
    description: "Area istirahat utama dengan pencahayaan lembut.",
    center: { x: -4, z: -2 },
    mapSize: { width: 6, depth: 4 },
    bounds: { minX: -7, maxX: -1, minZ: -4, maxZ: 0 }
  },
  {
    id: "kids-bedroom",
    name: "Kamar Tidur Anak",
    shortLabel: "KA",
    size: "3 x 3 m",
    description: "Area belajar dan istirahat yang ringkas.",
    center: { x: -4, z: -6 },
    mapSize: { width: 4, depth: 3 },
    bounds: { minX: -6, maxX: -2, minZ: -8, maxZ: -4 }
  },
  {
    id: "bathroom",
    name: "Kamar Mandi",
    shortLabel: "KM",
    size: "2 x 2 m",
    description: "Konsep modern minimalis dengan area basah dan kering.",
    center: { x: 0, z: -5 },
    mapSize: { width: 3, depth: 2 },
    bounds: { minX: -1, maxX: 1, minZ: -6, maxZ: -4 }
  },
  {
    id: "stairs",
    name: "Tangga",
    shortLabel: "TG",
    size: "2 x 3 m",
    description: "Penghubung lantai dengan railing modern.",
    center: { x: 0, z: -1 },
    mapSize: { width: 2, depth: 3 },
    bounds: { minX: -1, maxX: 1, minZ: -2, maxZ: 1 }
  },
  {
    id: "balcony",
    name: "Balkon",
    shortLabel: "BK",
    size: "4 x 2 m",
    description: "Area santai lantai dua dengan view luar rumah.",
    center: { x: 0, z: -10 },
    mapSize: { width: 4, depth: 2 },
    bounds: { minX: -2, maxX: 2, minZ: -12, maxZ: -8 }
  },
  {
    id: "backyard",
    name: "Backyard",
    shortLabel: "BY",
    size: "10 x 6 m",
    description: "Taman belakang untuk area terbuka dan relaksasi.",
    center: { x: 0, z: -14 },
    mapSize: { width: 10, depth: 6 },
    bounds: { minX: -5, maxX: 5, minZ: -18, maxZ: -10 }
  }
];

export const hotspots: Hotspot[] = [
  {
    id: "gateway-info",
    title: "Gateway Info",
    description:
      "Aurora Grand Residence dirancang sebagai kawasan hunian premium dengan konsep modern, aman, dan nyaman. Gateway utama menjadi identitas visual kawasan sekaligus titik awal pengalaman virtual tour.",
    position: [0, 3.2, 24],
    room: "gateway",
    category: "Design"
  },
  {
    id: "security-post-info",
    title: "Security Post Info",
    description:
      "Area pos security disediakan sebagai sistem keamanan 24 jam. Pada konsep perumahan nyata, area ini dapat dilengkapi CCTV, sistem akses kartu, dan pencatatan tamu.",
    position: [4.2, 2, 22],
    room: "gateway",
    category: "Security"
  },
  {
    id: "street-lighting-info",
    title: "Street Lighting",
    description:
      "Lampu jalan dirancang untuk memberikan pencahayaan malam hari sekaligus meningkatkan keamanan dan estetika lingkungan perumahan.",
    position: [-4.5, 2.4, 18],
    room: "front-yard",
    category: "Lighting"
  },
  {
    id: "facade-info",
    title: "Facade Info",
    description:
      "Fasad rumah menggunakan konsep modern luxury dengan kombinasi bidang geometris, kaca besar, dan aksen material kayu untuk memberikan kesan elegan serta hangat.",
    position: [0, 3, 8],
    room: "front-yard",
    category: "Design"
  },
  {
    id: "main-door-info",
    title: "Main Door",
    description:
      "Pintu utama dibuat besar sebagai focal point rumah. Desain ini memberi kesan megah dan meningkatkan pengalaman pertama ketika memasuki hunian.",
    position: [0, 2.2, 6.5],
    room: "front-yard",
    category: "Design"
  },
  {
    id: "carport-info",
    title: "Carport",
    description:
      "Carport dirancang cukup luas untuk satu mobil keluarga. Area ini dilengkapi kanopi modern dan akses langsung menuju pintu utama.",
    position: [5.5, 2, 8],
    room: "front-yard",
    category: "Utility"
  },
  {
    id: "front-garden-info",
    title: "Front Garden",
    description:
      "Taman depan memberikan ruang hijau yang mempercantik tampilan rumah sekaligus membantu menciptakan suasana hunian yang lebih nyaman.",
    position: [-5.5, 1.5, 8],
    room: "front-yard",
    category: "Area"
  },
  {
    id: "balcony-info",
    title: "Balcony",
    description:
      "Balkon lantai dua memberikan area santai tambahan dan memperkuat kesan rumah modern bertingkat.",
    position: [0, 4.8, 4.5],
    room: "balcony",
    category: "Design"
  },
  {
    id: "foyer-info",
    title: "Foyer",
    description:
      "Area foyer menjadi ruang transisi dari luar ke dalam rumah. Area ini memberi kesan pertama yang rapi dan nyaman sebelum memasuki ruang utama.",
    position: [0, 1.8, 4.5],
    room: "living-room",
    category: "Area"
  },
  {
    id: "living-room-info",
    title: "Ruang Tamu",
    description:
      "Ruang tamu dirancang sebagai area penerima tamu dengan konsep modern elegan. Penempatan sofa, pencahayaan, dan jendela besar membuat ruangan terasa luas dan nyaman.",
    position: [-4, 1.6, 2],
    room: "living-room",
    category: "Furniture"
  },
  {
    id: "family-room-info",
    title: "Ruang Keluarga",
    description:
      "Ruang keluarga menjadi pusat aktivitas penghuni rumah. Area ini dibuat lebih santai dengan pencahayaan hangat dan furniture yang nyaman.",
    position: [4, 1.6, 2],
    room: "family-room",
    category: "Furniture"
  },
  {
    id: "dining-room-info",
    title: "Ruang Makan",
    description:
      "Ruang makan ditempatkan dekat dapur agar aktivitas makan dan memasak lebih efisien. Lampu gantung digunakan untuk menciptakan suasana hangat.",
    position: [4, 1.6, -2],
    room: "dining-room",
    category: "Lighting"
  },
  {
    id: "kitchen-info",
    title: "Dapur",
    description:
      "Dapur menggunakan konsep modern compact dengan kitchen set yang fungsional. Area kerja dibuat efisien agar aktivitas memasak lebih nyaman.",
    position: [4.5, 1.6, -6],
    room: "kitchen",
    category: "Utility"
  },
  {
    id: "master-bedroom-info",
    title: "Kamar Tidur Utama",
    description:
      "Kamar tidur utama dirancang sebagai area istirahat yang nyaman, luas, dan privat. Pencahayaan lembut serta material hangat memberikan kesan relaksasi.",
    position: [-4, 1.6, -2],
    room: "master-bedroom",
    category: "Area"
  },
  {
    id: "kids-bedroom-info",
    title: "Kamar Tidur Anak",
    description:
      "Kamar tidur anak menggabungkan fungsi istirahat dan belajar. Penataan furniture dibuat ringkas agar ruangan tetap terasa lega.",
    position: [-4, 1.6, -6],
    room: "kids-bedroom",
    category: "Furniture"
  },
  {
    id: "bathroom-info",
    title: "Kamar Mandi",
    description:
      "Kamar mandi menggunakan konsep modern minimalis dengan pembagian area basah dan kering. Material lantai dibuat berbeda untuk menunjukkan fungsi ruang.",
    position: [0, 1.6, -5],
    room: "bathroom",
    category: "Material"
  },
  {
    id: "stairs-info",
    title: "Tangga",
    description:
      "Tangga menjadi penghubung antar lantai sekaligus elemen visual interior. Railing modern memberikan keamanan dan memperkuat estetika rumah.",
    position: [0, 1.8, -1],
    room: "stairs",
    category: "Design"
  },
  {
    id: "backyard-info",
    title: "Taman Belakang",
    description:
      "Taman belakang memberikan ruang terbuka tambahan untuk bersantai, berkumpul, atau menambah ventilasi alami pada rumah.",
    position: [0, 1.2, -14],
    room: "backyard",
    category: "Area"
  }
];

export const guidedTourPoints: GuidedTourPoint[] = [
  {
    id: "tour-gateway",
    label: "Gateway",
    position: [0, 2.2, 24],
    narration:
      "Selamat datang di Aurora Grand Residence. Tur dimulai dari gateway utama kawasan hunian premium."
  },
  {
    id: "tour-road",
    label: "Jalan Masuk",
    position: [0, 1.8, 16],
    narration: "Kita memasuki jalan komplek dengan lampu jalan dan landscape modern."
  },
  {
    id: "tour-facade",
    label: "Tampak Depan",
    position: [0, 2.2, 8],
    narration:
      "Sekarang berada di depan Type Magnolia 120, rumah modern dua lantai dengan konsep luxury minimalis."
  },
  {
    id: "tour-living",
    label: "Ruang Tamu",
    position: [-4, 1.6, 2],
    narration: "Area ruang tamu dibuat luas dengan bukaan kaca besar untuk pencahayaan alami."
  },
  {
    id: "tour-family",
    label: "Ruang Keluarga",
    position: [4, 1.6, 2],
    narration: "Ruang keluarga menjadi pusat aktivitas dengan furniture nyaman dan hangat."
  },
  {
    id: "tour-kitchen",
    label: "Dapur & Makan",
    position: [4, 1.6, -4],
    narration: "Dapur dan ruang makan terintegrasi untuk aktivitas harian yang efisien."
  },
  {
    id: "tour-master",
    label: "Kamar Utama",
    position: [-4, 1.6, -2],
    narration: "Kamar utama menawarkan suasana privat dan relaksasi maksimal."
  },
  {
    id: "tour-kids",
    label: "Kamar Anak",
    position: [-4, 1.6, -6],
    narration: "Kamar anak dirancang ringkas dengan area belajar yang terintegrasi."
  },
  {
    id: "tour-bath",
    label: "Kamar Mandi",
    position: [0, 1.6, -5],
    narration: "Kamar mandi modern minimalis dengan pembagian area basah dan kering."
  },
  {
    id: "tour-backyard",
    label: "Taman Belakang",
    position: [0, 1.8, -14],
    narration: "Taman belakang menghadirkan ruang terbuka untuk bersantai bersama keluarga."
  }
];

export const cameraSpawns: CameraSpawn[] = [
  {
    id: "first-person",
    label: "First Person",
    position: [0, 1.6, 18],
    target: [0, 1.6, 10]
  },
  {
    id: "orbit",
    label: "Orbit Exterior",
    position: [14, 8, 10],
    target: [0, 3, 2]
  },
  {
    id: "top",
    label: "Top View",
    position: [0, 18, 2],
    target: [0, 0, 2]
  }
];

export const featureList = [
  "Virtual walkthrough 3D",
  "Mode siang dan malam",
  "Informasi ruangan interaktif",
  "Mini map posisi user",
  "Guided tour otomatis",
  "Simulasi cahaya rumah",
  "Tampilan gateway perumahan",
  "Desain rumah mewah"
];
