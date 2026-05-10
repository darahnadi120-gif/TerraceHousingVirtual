"use client";

import { assets } from "@/data/assetData";
import ModelLoader from "./ModelLoader";

export default function GatewayModel() {
  return (
    <group>
      <ModelLoader
        path={assets.gateway}
        label="Gateway"
        position={[0, 0, 24]}
        scale={[1, 1, 1]}
        placeholderSize={[8, 5, 2]}
      />
      <ModelLoader
        path={assets.road}
        label="Road"
        position={[0, 0, 16]}
        scale={[1, 1, 1]}
        placeholderSize={[10, 0.2, 16]}
      />
      <ModelLoader
        path={assets.securityPost}
        label="Security Post"
        position={[4.5, 0, 22]}
        scale={[1, 1, 1]}
        placeholderSize={[2, 2, 2]}
      />
      <ModelLoader
        path={assets.streetLamp}
        label="Street Lamp"
        position={[-6, 0, 18]}
        scale={[1, 1, 1]}
        placeholderSize={[0.5, 4, 0.5]}
      />
      <ModelLoader
        path={assets.gardenProps}
        label="Garden Props"
        position={[0, 0, 12]}
        scale={[1, 1, 1]}
        placeholderSize={[6, 1, 3]}
      />
    </group>
  );
}
