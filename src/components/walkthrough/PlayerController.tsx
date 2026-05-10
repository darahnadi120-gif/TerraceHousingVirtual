"use client";

import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import { Vector3 } from "three";
import { rooms } from "@/data/roomData";
import { detectRoom } from "@/utils/roomDetection";
import { useWalkthroughStore } from "@/store/walkthroughStore";

const FORWARD = new Vector3();
const RIGHT = new Vector3();
const UP = new Vector3(0, 1, 0);
const MOVE = new Vector3();

export default function PlayerController() {
  const keysRef = useRef<Record<string, boolean>>({});
  const { camera } = useThree();
  const cameraMode = useWalkthroughStore((state) => state.cameraMode);
  const teleportTarget = useWalkthroughStore((state) => state.teleportTarget);
  const setTeleportTarget = useWalkthroughStore((state) => state.setTeleportTarget);
  const setPlayerPosition = useWalkthroughStore((state) => state.setPlayerPosition);
  const setActiveRoom = useWalkthroughStore((state) => state.setActiveRoom);
  const guidedTourState = useWalkthroughStore((state) => state.guidedTourState);
  const spawnPoint = useWalkthroughStore((state) => state.spawnPoint);

  useEffect(() => {
    camera.position.set(spawnPoint[0], spawnPoint[1] + 1.06, spawnPoint[2]);
  }, [camera, spawnPoint]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      keysRef.current[event.code] = true;
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      keysRef.current[event.code] = false;
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useFrame((_, delta) => {
    if (teleportTarget) {
      camera.position.set(teleportTarget[0], teleportTarget[1] + 1.06, teleportTarget[2]);
      setTeleportTarget(null);
    }

    if (cameraMode !== "first" || guidedTourState === "playing") return;

    const sprint = keysRef.current["ShiftLeft"] || keysRef.current["ShiftRight"];
    const speed = sprint ? 9.5 : 5.2;

    const forwardInput = (keysRef.current["KeyW"] ? 1 : 0) - (keysRef.current["KeyS"] ? 1 : 0);
    const rightInput = (keysRef.current["KeyD"] ? 1 : 0) - (keysRef.current["KeyA"] ? 1 : 0);
    const upInput = (keysRef.current["Space"] ? 1 : 0) - (keysRef.current["ControlLeft"] ? 1 : 0);

    camera.getWorldDirection(FORWARD);
    FORWARD.normalize();
    RIGHT.crossVectors(FORWARD, camera.up).normalize();

    MOVE.set(0, 0, 0);
    MOVE.addScaledVector(FORWARD, forwardInput);
    MOVE.addScaledVector(RIGHT, rightInput);
    MOVE.addScaledVector(UP, upInput);

    if (MOVE.lengthSq() > 0) {
      MOVE.normalize().multiplyScalar(speed * delta);
      camera.position.add(MOVE);
    }

    setPlayerPosition({ x: camera.position.x, y: camera.position.y - 1.06, z: camera.position.z });
    const room = detectRoom(rooms, { x: camera.position.x, z: camera.position.z });
    setActiveRoom(room ? room.id : null);
  });

  return <>{cameraMode === "first" && <PointerLockControls />}</>;
}
