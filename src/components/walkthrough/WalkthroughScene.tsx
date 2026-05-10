"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { Suspense } from "react";
import LightingSystem from "@/components/walkthrough/LightingSystem";
import PlayerController from "@/components/walkthrough/PlayerController";
import GuidedTour from "@/components/walkthrough/GuidedTour";
import Hotspot from "@/components/walkthrough/Hotspot";
import AssetBasedScene from "@/components/walkthrough/AssetBasedScene";
import Colliders from "@/components/walkthrough/Colliders";
import { hotspots } from "@/data/hotspotData";
import { useWalkthroughStore } from "@/store/walkthroughStore";

export default function WalkthroughScene() {
  const spawnPoint = useWalkthroughStore((state) => state.spawnPoint);

  return (
    <Canvas
      shadows
      camera={{ position: [spawnPoint[0], spawnPoint[1] + 0.72, spawnPoint[2]], fov: 65 }}
      gl={{ antialias: true }}
      className="h-full w-full"
    >
      <color attach="background" args={["#c7d2fe"]} />
      <fog attach="fog" args={["#dbeafe", 24, 90]} />
      <Suspense fallback={null}>
        <LightingSystem />
        <Environment preset="city" />
        <Physics gravity={[0, 0, 0]}>
          <AssetBasedScene />
          <Colliders />
          <PlayerController />
          {hotspots.map((spot) => (
            <Hotspot key={spot.id} spot={spot} />
          ))}
        </Physics>
        <GuidedTour />
      </Suspense>
    </Canvas>
  );
}
