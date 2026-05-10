"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo } from "react";
import { Vector3 } from "three";
import { cameraSpawns } from "@/data/houseData";
import { useWalkthroughStore } from "@/store/walkthroughStore";

export default function CameraController() {
  const { camera } = useThree();
  const cameraMode = useWalkthroughStore((state) => state.cameraMode);
  const target = useMemo(() => new Vector3(), []);

  useEffect(() => {
    const spawn = cameraSpawns.find((item) => item.id === cameraMode);
    if (!spawn) return;
    camera.position.set(spawn.position[0], spawn.position[1], spawn.position[2]);
    camera.lookAt(spawn.target[0], spawn.target[1], spawn.target[2]);
  }, [camera, cameraMode]);

  useFrame(() => {
    if (cameraMode === "top") {
      target.set(0, 0, 2);
      camera.lookAt(target);
    }
  });

  if (cameraMode === "first") return null;

  return (
    <OrbitControls
      enablePan={false}
      enableZoom={true}
      enableRotate={cameraMode === "orbit"}
      minPolarAngle={cameraMode === "top" ? Math.PI / 2 : 0.6}
      maxPolarAngle={cameraMode === "top" ? Math.PI / 2 : 1.4}
      target={[0, 2.5, 2]}
    />
  );
}
