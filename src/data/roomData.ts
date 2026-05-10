import type { Room } from "@/types/house";

export const rooms: Room[] = [
  {
    id: "site",
    name: "Terrace House Site",
    shortLabel: "TH",
    size: "Site",
    description: "Area utama menggunakan model GLB terrace house.",
    center: { x: 0, z: 0 },
    mapSize: { width: 40, depth: 40 },
    bounds: { minX: -20, maxX: 20, minZ: -20, maxZ: 20 }
  }
];
