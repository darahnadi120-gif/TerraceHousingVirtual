"use client";

import { assets } from "@/data/assetData";
import ModelLoader from "./ModelLoader";

export default function LuxuryHouseExterior() {
  return (
    <ModelLoader
      path={assets.houseExterior}
      label="House Exterior"
      position={[0, 0, 6]}
      scale={[1, 1, 1]}
      placeholderSize={[10, 6, 8]}
    />
  );
}
