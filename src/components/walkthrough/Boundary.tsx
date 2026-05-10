"use client";

import { RigidBody } from "@react-three/rapier";

export default function Boundary() {
  return (
    <group>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 1.5, 28]}>
          <boxGeometry args={[40, 3, 0.4]} />
          <meshStandardMaterial color="#0f172a" transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 1.5, -20]}>
          <boxGeometry args={[40, 3, 0.4]} />
          <meshStandardMaterial color="#0f172a" transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-20, 1.5, 4]}>
          <boxGeometry args={[0.4, 3, 48]} />
          <meshStandardMaterial color="#0f172a" transparent opacity={0.2} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[20, 1.5, 4]}>
          <boxGeometry args={[0.4, 3, 48]} />
          <meshStandardMaterial color="#0f172a" transparent opacity={0.2} />
        </mesh>
      </RigidBody>
    </group>
  );
}
