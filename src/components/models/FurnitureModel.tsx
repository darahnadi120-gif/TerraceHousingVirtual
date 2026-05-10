"use client";

import { assets } from "@/data/assetData";
import ModelLoader from "./ModelLoader";

export default function FurnitureModel() {
  return (
    <group>
      <ModelLoader
        path={assets.livingRoom}
        label="Living Room Set"
        position={[-4, 0, 2]}
        scale={[1, 1, 1]}
        placeholderSize={[3, 1.2, 2]}
      />
      <ModelLoader
        path={assets.bedroom}
        label="Bedroom Set"
        position={[-4, 0, -4]}
        scale={[1, 1, 1]}
        placeholderSize={[3, 1.2, 2]}
      />
      <ModelLoader
        path={assets.kitchen}
        label="Kitchen Set"
        position={[4, 0, -6]}
        scale={[1, 1, 1]}
        placeholderSize={[3, 1.2, 2]}
      />
      <ModelLoader
        path={assets.bathroom}
        label="Bathroom Set"
        position={[0, 0, -5]}
        scale={[1, 1, 1]}
        placeholderSize={[2, 1.5, 2]}
      />
      <ModelLoader
        path={assets.dining}
        label="Dining Set"
        position={[4, 0, -2]}
        scale={[1, 1, 1]}
        placeholderSize={[2.5, 1, 2]}
      />
      <ModelLoader
        path={assets.plants}
        label="Plants"
        position={[-6, 0, 9]}
        scale={[1, 1, 1]}
        placeholderSize={[1, 2, 1]}
      />
      <ModelLoader
        path={assets.lamps}
        label="Lamps"
        position={[2, 0, 1]}
        scale={[1, 1, 1]}
        placeholderSize={[1, 2, 1]}
      />
      <ModelLoader
        path={assets.car}
        label="Car"
        position={[6, 0, 8]}
        scale={[1, 1, 1]}
        placeholderSize={[3, 1.5, 2]}
      />
      <ModelLoader
        path={assets.paintings}
        label="Paintings"
        position={[-2, 1.5, 2]}
        scale={[1, 1, 1]}
        placeholderSize={[2, 1, 0.2]}
      />
    </group>
  );
}
