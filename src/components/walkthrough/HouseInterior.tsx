"use client";

import { RigidBody } from "@react-three/rapier";
import { Bed, Cabinet, DiningSet, Sofa, Table } from "./Furniture";

function Wall({ position, size }: { position: [number, number, number]; size: [number, number, number] }) {
  return (
    <RigidBody type="fixed" colliders="cuboid">
      <mesh position={position} castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial color="#f8fafc" roughness={0.7} />
      </mesh>
    </RigidBody>
  );
}

export default function HouseInterior() {
  return (
    <group>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 3.1, -2]} receiveShadow>
          <boxGeometry args={[14, 0.2, 12]} />
          <meshStandardMaterial color="#f8fafc" roughness={0.9} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 0, -2]} receiveShadow>
          <boxGeometry args={[14, 0.2, 12]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.4} metalness={0.1} />
        </mesh>
      </RigidBody>

      <mesh position={[-4.2, 0.12, 2]} receiveShadow>
        <boxGeometry args={[3.6, 0.05, 2.4]} />
        <meshStandardMaterial color="#eab308" roughness={0.7} />
      </mesh>
      <mesh position={[4.2, 0.12, 2]} receiveShadow>
        <boxGeometry args={[3.6, 0.05, 2.4]} />
        <meshStandardMaterial color="#cbd5f5" roughness={0.7} />
      </mesh>

      <Wall position={[0, 1.5, -8]} size={[14, 3, 0.2]} />
      <Wall position={[0, 1.5, 4]} size={[14, 3, 0.2]} />
      <Wall position={[-7, 1.5, -2]} size={[0.2, 3, 12]} />
      <Wall position={[7, 1.5, -2]} size={[0.2, 3, 12]} />
      <Wall position={[0, 1.5, 0]} size={[14, 3, 0.2]} />
      <Wall position={[-2, 1.5, -4]} size={[10, 3, 0.2]} />
      <Wall position={[2, 1.5, -4]} size={[10, 3, 0.2]} />
      <Wall position={[0, 1.5, -6]} size={[14, 3, 0.2]} />
      <Wall position={[0, 1.5, -2]} size={[0.2, 3, 4]} />

      <Sofa position={[-4.5, 0.5, 2]} />
      <Table position={[-2.5, 0.3, 2]} />
      <Sofa position={[4.5, 0.5, 2]} />
      <Cabinet position={[5.5, 0.6, 1]} />
      <DiningSet position={[4, 0.4, -2]} />
      <Bed position={[-4.5, 0.4, -2]} />
      <Bed position={[-4.5, 0.4, -6]} />
      <Cabinet position={[4.8, 0.8, -6]} />

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.8, 0.45, -4.8]} castShadow>
          <boxGeometry args={[2, 0.9, 1]} />
          <meshStandardMaterial color="#0f172a" roughness={0.6} />
        </mesh>
      </RigidBody>

      <pointLight position={[-4, 2.6, 2]} intensity={0.5} color="#fbbf24" />
      <pointLight position={[4, 2.6, 2]} intensity={0.5} color="#fbbf24" />
      <pointLight position={[4, 2.6, -4]} intensity={0.5} color="#fbbf24" />
      <pointLight position={[-4, 2.6, -4]} intensity={0.5} color="#fbbf24" />
    </group>
  );
}
