"use client";

import { useEffect, useMemo, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { CuboidCollider, MeshCollider, RigidBody } from "@react-three/rapier";
import { Box3, Vector3, type Mesh } from "three";
import { assets } from "@/data/assetData";
import { useWalkthroughStore } from "@/store/walkthroughStore";

export default function MainHouseSite() {
  const gltf = useGLTF(assets.houseExterior);
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  const colliderScene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);
  const didPlaceRef = useRef(false);
  const setSpawnPoint = useWalkthroughStore((state) => state.setSpawnPoint);
  const setSecondFloorPoint = useWalkthroughStore((state) => state.setSecondFloorPoint);
  const setThirdFloorPoint = useWalkthroughStore((state) => state.setThirdFloorPoint);
  const setTeleportTarget = useWalkthroughStore((state) => state.setTeleportTarget);

  const { modelOffset, initialSpawn, size } = useMemo(() => {
    const box = new Box3().setFromObject(scene, true);
    const center = box.getCenter(new Vector3());
    const size = box.getSize(new Vector3());
    const min = box.min.clone();

    const offset: [number, number, number] = [-center.x, -min.y, -center.z];
    const spawn: [number, number, number] = [0, 1.85, Math.max(size.z * 0.22 + 2.6, 4.8)];

    return { modelOffset: offset, initialSpawn: spawn, size };
  }, [scene]);

  const halfX = Math.max(size.x * 0.5, 6);
  const halfZ = Math.max(size.z * 0.5, 7);
  const wallHeight = 2.8;
  const wallThickness = 0.18;
  const frontGap = Math.min(Math.max(size.x * 0.2, 2.4), 4.5);
  const sideGap = Math.min(Math.max(size.z * 0.2, 2.4), 4.2);
  const sideGapCenterZ = halfZ * 0.38;
  const sideSegment = Math.max((halfZ - sideGap) * 0.5, 1.1);
  const sideWallCenterOffset = sideGap * 0.5 + sideSegment * 0.5;

  const stairPathX = halfX * 0.62;
  const stairPathFrontZ = halfZ * 0.9;
  const stairPathTopZ = halfZ * 0.1;
  const stairMidZ = (stairPathFrontZ + stairPathTopZ) * 0.5;

  scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    }
  });

  const secondFloorPoint: [number, number, number] = [stairPathX, 3.95, stairPathTopZ - 1.1];
  const thirdFloorPoint: [number, number, number] = [stairPathX, 6.2, stairPathTopZ - 1.1];

  useEffect(() => {
    setSpawnPoint(initialSpawn);
    setSecondFloorPoint(secondFloorPoint);
    setThirdFloorPoint(thirdFloorPoint);
    if (!didPlaceRef.current) {
      setTeleportTarget(initialSpawn);
      didPlaceRef.current = true;
    }
  }, [initialSpawn, secondFloorPoint, setSecondFloorPoint, setSpawnPoint, setTeleportTarget, setThirdFloorPoint, thirdFloorPoint]);

  return (
    <group position={modelOffset} rotation={[0, 0, 0]} scale={[1, 1, 1]}>
      <primitive object={scene} />
      <RigidBody type="fixed" colliders={false}>
        <MeshCollider type="trimesh">
          <primitive object={colliderScene} visible={false} />
        </MeshCollider>
        <CuboidCollider args={[halfX, 0.08, halfZ]} position={[0, 0.08, 0]} />
        <CuboidCollider
          args={[Math.max((halfX - frontGap) * 0.5, 0.9), wallHeight, wallThickness]}
          position={[-(frontGap * 0.5 + (halfX - frontGap) * 0.5), wallHeight, halfZ]}
        />
        <CuboidCollider
          args={[Math.max((halfX - frontGap) * 0.5, 0.9), wallHeight, wallThickness]}
          position={[frontGap * 0.5 + (halfX - frontGap) * 0.5, wallHeight, halfZ]}
        />
        <CuboidCollider args={[halfX, wallHeight, wallThickness]} position={[0, wallHeight, -halfZ]} />
        <CuboidCollider args={[wallThickness, wallHeight, halfZ]} position={[-halfX, wallHeight, 0]} />
        <CuboidCollider
          args={[wallThickness, wallHeight, sideSegment]}
          position={[halfX, wallHeight, sideGapCenterZ + sideWallCenterOffset]}
        />
        <CuboidCollider
          args={[wallThickness, wallHeight, sideSegment]}
          position={[halfX, wallHeight, sideGapCenterZ - sideWallCenterOffset]}
        />
        <CuboidCollider
          args={[1.45, 0.2, 5.2]}
          position={[stairPathX, 1.7, stairMidZ]}
          rotation={[-0.5, 0, 0]}
        />
        <CuboidCollider args={[3.8, 0.45, 3.8]} position={[stairPathX, 3.55, stairPathTopZ - 1.1]} />
        <CuboidCollider args={[3.8, 0.45, 3.8]} position={[stairPathX, 5.85, stairPathTopZ - 1.1]} />
      </RigidBody>
    </group>
  );
}

useGLTF.preload(assets.houseExterior);
