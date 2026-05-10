"use client";

import { RigidBody } from "@react-three/rapier";

export function Sofa({ position }: { position: [number, number, number] }) {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh position={position} castShadow>
        <boxGeometry args={[2.4, 0.8, 1]} />
        <meshStandardMaterial color="#475569" roughness={0.7} />
      </mesh>
    </RigidBody>
  );
}

export function Table({ position }: { position: [number, number, number] }) {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh position={position} castShadow>
        <boxGeometry args={[1.4, 0.5, 0.8]} />
        <meshStandardMaterial color="#a16207" roughness={0.6} />
      </mesh>
    </RigidBody>
  );
}

export function Bed({ position }: { position: [number, number, number] }) {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh position={position} castShadow>
        <boxGeometry args={[2.4, 0.6, 2]} />
        <meshStandardMaterial color="#64748b" roughness={0.6} />
      </mesh>
    </RigidBody>
  );
}

export function Cabinet({ position }: { position: [number, number, number] }) {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh position={position} castShadow>
        <boxGeometry args={[1.6, 1.2, 0.6]} />
        <meshStandardMaterial color="#7c3f00" roughness={0.5} />
      </mesh>
    </RigidBody>
  );
}

export function DiningSet({ position }: { position: [number, number, number] }) {
  return (
    <group>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={position} castShadow>
          <boxGeometry args={[1.6, 0.5, 1.2]} />
          <meshStandardMaterial color="#a16207" roughness={0.6} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[position[0] - 1.2, position[1] - 0.1, position[2]]} castShadow>
          <boxGeometry args={[0.5, 0.7, 0.5]} />
          <meshStandardMaterial color="#475569" roughness={0.7} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[position[0] + 1.2, position[1] - 0.1, position[2]]} castShadow>
          <boxGeometry args={[0.5, 0.7, 0.5]} />
          <meshStandardMaterial color="#475569" roughness={0.7} />
        </mesh>
      </RigidBody>
    </group>
  );
}
