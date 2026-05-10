"use client";

import { CuboidCollider } from "@react-three/rapier";

export default function Colliders() {
  return (
    <group>
      <CuboidCollider args={[130, 0.05, 130]} position={[0, -0.06, 0]} />
      <CuboidCollider args={[140, 3, 0.2]} position={[0, 3, 140]} />
      <CuboidCollider args={[140, 3, 0.2]} position={[0, 3, -140]} />
      <CuboidCollider args={[0.2, 3, 140]} position={[-140, 3, 0]} />
      <CuboidCollider args={[0.2, 3, 140]} position={[140, 3, 0]} />
    </group>
  );
}
