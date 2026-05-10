"use client";

import React, { useEffect, useMemo, useState } from "react";
import { useGLTF } from "@react-three/drei";
import type { Mesh } from "three";
import AssetPlaceholder from "./AssetPlaceholder";
import { assets } from "@/data/assetData";

type ModelLoaderProps = {
  path: string;
  label: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  castShadow?: boolean;
  receiveShadow?: boolean;
  placeholderSize?: [number, number, number];
};

class ModelErrorBoundary extends React.Component<{
  fallback: JSX.Element;
  children?: React.ReactNode;
}, { hasError: boolean }> {
  constructor(props: { fallback: JSX.Element; children?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function ModelMesh({
  path,
  position,
  rotation,
  scale,
  castShadow,
  receiveShadow
}: Omit<ModelLoaderProps, "label" | "placeholderSize">) {
  const gltf = useGLTF(path);
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

  scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const mesh = child as Mesh;
      mesh.castShadow = castShadow ?? true;
      mesh.receiveShadow = receiveShadow ?? true;
    }
  });

  return <primitive object={scene} position={position} rotation={rotation} scale={scale} />;
}

export default function ModelLoader({
  path,
  label,
  position,
  rotation,
  scale,
  castShadow,
  receiveShadow,
  placeholderSize
}: ModelLoaderProps) {
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let mounted = true;

    const checkAsset = async () => {
      try {
        const response = await fetch(path, { method: "HEAD" });
        if (mounted) setIsAvailable(response.ok);
      } catch {
        if (mounted) setIsAvailable(false);
      }
    };

    void checkAsset();

    return () => {
      mounted = false;
    };
  }, [path]);

  const fallback = (
    <group position={position} rotation={rotation} scale={scale}>
      <AssetPlaceholder label={label} size={placeholderSize} />
    </group>
  );

  if (isAvailable === false) return fallback;

  return (
    <ModelErrorBoundary fallback={fallback}>
      <ModelMesh
        path={path}
        position={position}
        rotation={rotation}
        scale={scale}
        castShadow={castShadow}
        receiveShadow={receiveShadow}
      />
    </ModelErrorBoundary>
  );
}

Object.values(assets).forEach((path) => {
  useGLTF.preload(path);
});
