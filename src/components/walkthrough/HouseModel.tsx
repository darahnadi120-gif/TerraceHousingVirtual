"use client";

import { RigidBody } from "@react-three/rapier";

type HouseModelProps = {
  isNight: boolean;
};

function Wall({
  position,
  size
}: {
  position: [number, number, number];
  size: [number, number, number];
}) {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh position={position} castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial color="#f8fafc" />
      </mesh>
    </RigidBody>
  );
}

export default function HouseModel({ isNight }: HouseModelProps) {
  return (
    <group>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 0, 0]} receiveShadow>
          <boxGeometry args={[18, 0.2, 14]} />
          <meshStandardMaterial color={isNight ? "#1f2937" : "#e2e8f0"} />
        </mesh>
      </RigidBody>

      <Wall position={[0, 1.5, -6.9]} size={[18, 3, 0.2]} />
      <Wall position={[0, 1.5, 6.9]} size={[18, 3, 0.2]} />
      <Wall position={[-8.9, 1.5, 0]} size={[0.2, 3, 14]} />
      <Wall position={[8.9, 1.5, 0]} size={[0.2, 3, 14]} />

      <Wall position={[0, 1.5, -2]} size={[18, 3, 0.2]} />
      <Wall position={[3, 1.5, 2.5]} size={[12, 3, 0.2]} />
      <Wall position={[-3, 1.5, 2.5]} size={[6, 3, 0.2]} />
      <Wall position={[-3, 1.5, -2]} size={[6, 3, 0.2]} />
      <Wall position={[6, 1.5, 1]} size={[0.2, 3, 6]} />
      <Wall position={[-6, 1.5, 1]} size={[0.2, 3, 6]} />

      <mesh position={[-4, 0.6, 3]} castShadow>
        <boxGeometry args={[2.6, 1.2, 1.4]} />
        <meshStandardMaterial color="#94a3b8" />
      </mesh>
      <mesh position={[4, 0.4, -4]} castShadow>
        <boxGeometry args={[2.2, 0.8, 1.2]} />
        <meshStandardMaterial color="#64748b" />
      </mesh>
      <mesh position={[2, 0.35, 4]} castShadow>
        <boxGeometry args={[2.4, 0.7, 1.6]} />
        <meshStandardMaterial color="#a8a29e" />
      </mesh>

      <pointLight position={[-4, 2.6, 3]} intensity={isNight ? 1.6 : 0.6} color="#fbbf24" />
      <pointLight position={[4, 2.6, -4]} intensity={isNight ? 1.4 : 0.5} color="#fbbf24" />
      <pointLight position={[2, 2.6, 4]} intensity={isNight ? 1.2 : 0.4} color="#fbbf24" />
    </group>
  );
}
