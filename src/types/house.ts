export type PropertyInfo = {
  name: string;
  unit: string;
  landSize: string;
  buildingSize: string;
  floors: number;
  bedrooms: number;
  bathrooms: number;
  style: string;
};

export type RoomBounds = {
  minX: number;
  maxX: number;
  minZ: number;
  maxZ: number;
};

export type Room = {
  id: string;
  name: string;
  shortLabel: string;
  size: string;
  description: string;
  center: { x: number; z: number };
  mapSize: { width: number; depth: number };
  bounds: RoomBounds;
};

export type HotspotCategory =
  | "Area"
  | "Material"
  | "Lighting"
  | "Furniture"
  | "Security"
  | "Design"
  | "Utility";

export type Hotspot = {
  id: string;
  title: string;
  description: string;
  position: [number, number, number];
  room: string;
  category: HotspotCategory;
};

export type GuidedTourPoint = {
  id: string;
  label: string;
  position: [number, number, number];
  narration: string;
};

export type CameraSpawn = {
  id: string;
  label: string;
  position: [number, number, number];
  target: [number, number, number];
};
