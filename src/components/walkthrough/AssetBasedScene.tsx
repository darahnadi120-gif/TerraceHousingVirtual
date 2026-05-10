"use client";

import MainHouseSite from "@/components/models/MainHouseSite";

export default function AssetBasedScene() {
  return (
    <group>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.06, 0]} receiveShadow>
        <planeGeometry args={[260, 260]} />
        <meshStandardMaterial color="#cbd5e1" roughness={0.94} />
      </mesh>
      <MainHouseSite />
    </group>
  );
}
