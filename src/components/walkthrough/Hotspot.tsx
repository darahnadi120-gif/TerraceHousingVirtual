"use client";

import { Html } from "@react-three/drei";
import { useEffect, useMemo } from "react";
import type { Hotspot as HotspotType } from "@/types/house";
import { useWalkthroughStore } from "@/store/walkthroughStore";

export default function Hotspot({ spot }: { spot: HotspotType }) {
  const playerPosition = useWalkthroughStore((state) => state.playerPosition);
  const openHotspot = useWalkthroughStore((state) => state.openHotspot);
  const setToast = useWalkthroughStore((state) => state.setToast);

  const distance = useMemo(() => {
    const dx = playerPosition.x - spot.position[0];
    const dz = playerPosition.z - spot.position[2];
    return Math.sqrt(dx * dx + dz * dz);
  }, [playerPosition.x, playerPosition.z, spot.position]);

  const isNear = distance < 2.2;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code !== "KeyE") return;
      if (!isNear) return;
      openHotspot(spot.id);
      setToast(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isNear, openHotspot, setToast, spot.id]);

  return (
    <group position={spot.position}>
      <mesh onClick={() => openHotspot(spot.id)}>
        <sphereGeometry args={[0.18, 20, 20]} />
        <meshStandardMaterial color="#0ea5e9" emissive="#0ea5e9" emissiveIntensity={0.6} />
      </mesh>
      <Html center distanceFactor={10}>
        <div className="flex flex-col items-center gap-2">
          <div className="relative">
            <span className="absolute inset-0 rounded-full bg-sky-400/40 blur-md animate-pulse-glow" />
            <span className="relative h-3 w-3 rounded-full bg-sky-400 shadow-glass" />
          </div>
          {isNear && (
            <span className="rounded-full border border-white/30 bg-black/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              Tekan E untuk membaca informasi
            </span>
          )}
        </div>
      </Html>
    </group>
  );
}
