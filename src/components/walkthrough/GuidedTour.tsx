"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Vector3 } from "three";
import { Vector3 as ThreeVector } from "three";
import { guidedTourPoints } from "@/data/tourData";
import { useWalkthroughStore } from "@/store/walkthroughStore";

export default function GuidedTour() {
  const { camera } = useThree();
  const progressRef = useRef(0);
  const currentIndexRef = useRef(0);
  const tempTarget = useMemo(() => new ThreeVector(), []);
  const guidedTourState = useWalkthroughStore((state) => state.guidedTourState);
  const setGuidedTourState = useWalkthroughStore((state) => state.setGuidedTourState);
  const setToast = useWalkthroughStore((state) => state.setToast);

  useFrame((_, delta) => {
    if (guidedTourState !== "playing") return;

    const current = guidedTourPoints[currentIndexRef.current];
    const next = guidedTourPoints[(currentIndexRef.current + 1) % guidedTourPoints.length];

    progressRef.current += delta * 0.12;
    if (progressRef.current >= 1) {
      progressRef.current = 0;
      currentIndexRef.current += 1;
      if (currentIndexRef.current >= guidedTourPoints.length) {
        currentIndexRef.current = 0;
        setGuidedTourState("idle");
        return;
      }
      setToast(next.narration);
    }

    tempTarget
      .copy(new ThreeVector(...current.position))
      .lerp(new ThreeVector(...next.position), progressRef.current);
    camera.position.lerp(tempTarget as Vector3, 0.1);
    camera.lookAt(tempTarget.x, tempTarget.y, tempTarget.z - 1.2);
  });

  return null;
}
