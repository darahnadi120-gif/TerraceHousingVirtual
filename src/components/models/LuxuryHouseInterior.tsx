"use client";

import { assets } from "@/data/assetData";
import ModelLoader from "./ModelLoader";

export default function LuxuryHouseInterior() {
  return (
    <ModelLoader
      path={assets.houseInterior}
      label="House Interior"
      position={[0, 0, -2]}
      scale={[1, 1, 1]}
      placeholderSize={[10, 4, 8]}
    />
  );
}
