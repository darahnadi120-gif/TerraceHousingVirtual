"use client";

import { RigidBody } from "@react-three/rapier";

export default function HouseExterior() {
  return (
    <group>
      <mesh position={[0, -0.02, 6]} receiveShadow>
        <boxGeometry args={[22, 0.04, 16]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.9} />
      </mesh>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 0, 6]} receiveShadow>
          <boxGeometry args={[18, 0.2, 12]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.7} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 0.05, 10]} receiveShadow>
          <boxGeometry args={[10, 0.1, 4]} />
          <meshStandardMaterial color="#111827" roughness={0.8} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 3, 4]} castShadow>
          <boxGeometry args={[12, 6, 8]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.5} />
        </mesh>
      </RigidBody>

      <mesh position={[0, 1.6, 8.2]} castShadow>
        <boxGeometry args={[10.8, 3.2, 0.12]} />
        <meshStandardMaterial color="#0f172a" transparent opacity={0.25} />
      </mesh>

      <mesh position={[0, 4.5, 6.2]} castShadow>
        <boxGeometry args={[6, 3, 0.2]} />
        <meshStandardMaterial color="#94a3b8" roughness={0.3} metalness={0.2} />
      </mesh>

      <mesh position={[-4, 2.2, 8.2]} castShadow>
        <boxGeometry args={[2.4, 2.6, 0.1]} />
        <meshStandardMaterial color="#0f172a" transparent opacity={0.35} />
      </mesh>
      <mesh position={[4, 2.2, 8.2]} castShadow>
        <boxGeometry args={[2.4, 2.6, 0.1]} />
        <meshStandardMaterial color="#0f172a" transparent opacity={0.35} />
      </mesh>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 2.2, 8.4]} castShadow>
          <boxGeometry args={[2.2, 2.8, 0.2]} />
          <meshStandardMaterial color="#7c3f00" roughness={0.5} />
        </mesh>
      </RigidBody>

      <mesh position={[0, 0.4, 9.2]} castShadow>
        <boxGeometry args={[3.6, 0.3, 1.2]} />
        <meshStandardMaterial color="#d1d5db" roughness={0.8} />
      </mesh>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[6, 1.2, 8]} castShadow>
          <boxGeometry args={[4, 2.4, 4]} />
          <meshStandardMaterial color="#e5e7eb" roughness={0.6} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[6, 2.2, 6.2]} castShadow>
          <boxGeometry args={[0.4, 2, 0.4]} />
          <meshStandardMaterial color="#111827" metalness={0.6} roughness={0.3} />
        </mesh>
      </RigidBody>
      <mesh position={[6, 2.6, 8]} castShadow>
        <boxGeometry args={[4.4, 0.2, 4.4]} />
        <meshStandardMaterial color="#111827" metalness={0.6} roughness={0.3} />
      </mesh>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 6.4, 4]} castShadow>
          <boxGeometry args={[13, 0.4, 8.4]} />
          <meshStandardMaterial color="#0f172a" roughness={0.4} />
        </mesh>
      </RigidBody>

      <mesh position={[0, 6.7, 3.5]} castShadow>
        <boxGeometry args={[13.6, 0.15, 9.2]} />
        <meshStandardMaterial color="#111827" roughness={0.2} metalness={0.3} />
      </mesh>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 5.2, 6.8]} castShadow>
          <boxGeometry args={[6, 0.2, 2]} />
          <meshStandardMaterial color="#111827" metalness={0.7} roughness={0.2} />
        </mesh>
      </RigidBody>

      <mesh position={[0, 5.4, 5.9]} castShadow>
        <boxGeometry args={[6, 0.1, 0.1]} />
        <meshStandardMaterial color="#0f172a" metalness={0.8} roughness={0.2} />
      </mesh>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-6.5, 0.5, 6]} castShadow>
          <boxGeometry args={[3, 1, 4]} />
          <meshStandardMaterial color="#16a34a" roughness={0.9} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-6.5, 0.5, 9]} castShadow>
          <boxGeometry args={[2, 1, 2]} />
          <meshStandardMaterial color="#22c55e" roughness={0.9} />
        </mesh>
      </RigidBody>

      <mesh position={[-8, 1.4, 8]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 2.8]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[-8, 3.4, 8]} castShadow>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial color="#22c55e" roughness={0.9} />
      </mesh>
    </group>
  );
}
