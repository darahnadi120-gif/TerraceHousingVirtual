"use client";

import { RigidBody } from "@react-three/rapier";

export default function GatewayArea() {
  return (
    <group>
      <mesh position={[0, -0.01, 20]} receiveShadow>
        <boxGeometry args={[40, 0.02, 30]} />
        <meshStandardMaterial color="#0b1120" roughness={1} />
      </mesh>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 0, 20]} receiveShadow>
          <boxGeometry args={[30, 0.2, 20]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 0.05, 24]} receiveShadow>
          <boxGeometry args={[30, 0.1, 8]} />
          <meshStandardMaterial color="#1e293b" roughness={0.9} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 0.05, 16]} receiveShadow>
          <boxGeometry args={[6, 0.1, 18]} />
          <meshStandardMaterial color="#1f2937" roughness={0.9} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-5, 2.8, 24]} castShadow>
          <boxGeometry args={[1.6, 5.5, 2]} />
          <meshStandardMaterial color="#e5e7eb" roughness={0.5} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[5, 2.8, 24]} castShadow>
          <boxGeometry args={[1.6, 5.5, 2]} />
          <meshStandardMaterial color="#e5e7eb" roughness={0.5} />
        </mesh>
      </RigidBody>
      <mesh position={[0, 5.6, 24]} castShadow>
        <boxGeometry args={[12, 1, 1]} />
        <meshStandardMaterial color="#f8fafc" roughness={0.4} />
      </mesh>
      <mesh position={[0, 5.6, 23.3]} castShadow>
        <boxGeometry args={[9, 0.4, 0.2]} />
        <meshStandardMaterial color="#d9a441" metalness={0.4} roughness={0.3} />
      </mesh>
      <mesh position={[0, 5.6, 24.6]} castShadow>
        <boxGeometry args={[10, 0.4, 0.2]} />
        <meshStandardMaterial color="#111827" roughness={0.3} />
      </mesh>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.5, 1.2, 22]} castShadow>
          <boxGeometry args={[2.4, 2.4, 2]} />
          <meshStandardMaterial color="#e2e8f0" roughness={0.6} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[4.5, 0.4, 20.8]} castShadow>
          <boxGeometry args={[3.2, 0.8, 3]} />
          <meshStandardMaterial color="#94a3b8" roughness={0.7} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[0, 1.2, 12]} castShadow>
          <boxGeometry args={[14, 0.3, 0.3]} />
          <meshStandardMaterial color="#111827" metalness={0.7} roughness={0.2} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-10, 1.2, 20]} castShadow>
          <boxGeometry args={[0.4, 2.4, 20]} />
          <meshStandardMaterial color="#0f172a" roughness={0.5} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[10, 1.2, 20]} castShadow>
          <boxGeometry args={[0.4, 2.4, 20]} />
          <meshStandardMaterial color="#0f172a" roughness={0.5} />
        </mesh>
      </RigidBody>

      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[-12, 0.4, 20]} castShadow>
          <boxGeometry args={[4, 0.8, 20]} />
          <meshStandardMaterial color="#16a34a" roughness={1} />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh position={[12, 0.4, 20]} castShadow>
          <boxGeometry args={[4, 0.8, 20]} />
          <meshStandardMaterial color="#16a34a" roughness={1} />
        </mesh>
      </RigidBody>

      <mesh position={[-6, 3.5, 18]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 4]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      <mesh position={[-6, 5.6, 18]} castShadow>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.6} />
      </mesh>
      <mesh position={[6, 3.5, 18]} castShadow>
        <cylinderGeometry args={[0.12, 0.12, 4]} />
        <meshStandardMaterial color="#111827" />
      </mesh>
      <mesh position={[6, 5.6, 18]} castShadow>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.6} />
      </mesh>

      <mesh position={[-12, 2.4, 26]} castShadow>
        <cylinderGeometry args={[0.3, 0.4, 4]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[-12, 5, 26]} castShadow>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshStandardMaterial color="#22c55e" roughness={0.9} />
      </mesh>
      <mesh position={[12, 2.4, 26]} castShadow>
        <cylinderGeometry args={[0.3, 0.4, 4]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>
      <mesh position={[12, 5, 26]} castShadow>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshStandardMaterial color="#22c55e" roughness={0.9} />
      </mesh>
    </group>
  );
}
