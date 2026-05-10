"use client";

import type { ReactNode } from "react";

type AssetPlaceholderProps = {
  label: string;
  size?: [number, number, number];
  children?: ReactNode;
};

export default function AssetPlaceholder({ label, size = [2, 2, 2], children }: AssetPlaceholderProps) {
  const normalized = label.toLowerCase();
  const isRoad = normalized.includes("road");
  const isLamp = normalized.includes("lamp");
  const isPlant = normalized.includes("plant") || normalized.includes("garden");
  const isCar = normalized.includes("car");
  const isPainting = normalized.includes("painting");

  const color = isRoad
    ? "#3f3f46"
    : isPlant
      ? "#3f6212"
      : isLamp
        ? "#52525b"
        : isCar
          ? "#0f172a"
          : isPainting
            ? "#1f2937"
            : "#374151";

  const roughness = isRoad ? 0.95 : 0.55;
  const metalness = isLamp || isCar ? 0.5 : 0.15;
  const accentY = isRoad ? 0.16 : size[1] / 2 + 0.25;

  return (
    <group>
      <mesh castShadow receiveShadow>
        <boxGeometry args={size} />
        <meshStandardMaterial color={color} roughness={roughness} metalness={metalness} />
      </mesh>
      {!isRoad && (
        <mesh position={[0, size[1] / 2 + 0.08, 0]} castShadow receiveShadow>
          <boxGeometry args={[size[0] * 0.82, 0.08, size[2] * 0.82]} />
          <meshStandardMaterial color="#e5e7eb" roughness={0.35} metalness={0.1} />
        </mesh>
      )}
      {children}
      <mesh position={[0, accentY, 0]} castShadow>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.45} />
      </mesh>
      {/* Replace this placeholder with a GLB asset in public/models */}
    </group>
  );
}
