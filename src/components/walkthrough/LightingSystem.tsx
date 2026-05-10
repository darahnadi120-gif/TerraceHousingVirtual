"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Color, type AmbientLight, type DirectionalLight } from "three";
import { useWalkthroughStore } from "@/store/walkthroughStore";

export default function LightingSystem() {
  const isNight = useWalkthroughStore((state) => state.isNight);
  const sunRef = useRef<DirectionalLight | null>(null);
  const ambientRef = useRef<AmbientLight | null>(null);

  const dayColor = useMemo(() => new Color("#ffffff"), []);
  const nightColor = useMemo(() => new Color("#1e293b"), []);

  useFrame(() => {
    if (!sunRef.current || !ambientRef.current) return;
    const targetSun = isNight ? 0.18 : 1.25;
    const targetAmbient = isNight ? 0.22 : 0.85;
    sunRef.current.intensity += (targetSun - sunRef.current.intensity) * 0.05;
    ambientRef.current.intensity += (targetAmbient - ambientRef.current.intensity) * 0.05;
    sunRef.current.color.lerp(isNight ? nightColor : dayColor, 0.05);
  });

  return (
    <>
      <ambientLight ref={ambientRef} intensity={0.6} />
      <directionalLight
        ref={sunRef}
        position={[14, 20, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0002}
      />
      <hemisphereLight intensity={isNight ? 0.12 : 0.38} color="#e2e8f0" groundColor="#1e293b" />
      <pointLight position={[0, 5, 24]} intensity={isNight ? 1.5 : 0.28} color="#fbbf24" />
      <pointLight position={[-6, 4, 10]} intensity={isNight ? 1.3 : 0.22} color="#fbbf24" />
      <pointLight position={[6, 4, 10]} intensity={isNight ? 1.3 : 0.22} color="#fbbf24" />
      <spotLight
        position={[0, 8, 6]}
        angle={0.4}
        penumbra={0.6}
        intensity={isNight ? 1.1 : 0.32}
        color="#fef3c7"
        castShadow
      />
    </>
  );
}
