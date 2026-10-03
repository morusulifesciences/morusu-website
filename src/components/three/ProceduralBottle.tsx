"use client";

import { useMemo, Suspense } from "react";
import * as THREE from "three";
import { useTexture } from "@react-three/drei";

function LabelMesh() {
  const texture = useTexture("/models/onion-shampoo-label.png");
  // Ensure the texture maps properly to a plane
  texture.colorSpace = THREE.SRGBColorSpace;
  return (
    <mesh position={[0, -0.1, 0.405]} rotation={[0, 0, 0]}>
      <planeGeometry args={[0.5, 0.8]} />
      <meshBasicMaterial map={texture} transparent={true} />
    </mesh>
  );
}

export function ProceduralBottle() {
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 10; i++) {
      const v = i / 10;
      const radius = v === 0 ? 0.3 : v === 1 ? 0.1 : v > 0.8 ? 0.15 : 0.4;
      pts.push(new THREE.Vector2(radius, (v - 0.5) * 2)); // map y from -1 to 1
    }
    return pts;
  }, []);

  return (
    <group position={[0, -0.2, 0]}>
      {/* Bottle Body */}
      <mesh castShadow receiveShadow>
        <latheGeometry args={[points, 32]} />
        <meshPhysicalMaterial 
          color="#133621" // forest green
          roughness={0.2}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Cap */}
      <mesh position={[0, 1.1, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.15, 0.3, 32]} />
        <meshStandardMaterial color="#222" roughness={0.5} />
      </mesh>

      <Suspense fallback={null}>
        <LabelMesh />
      </Suspense>
    </group>
  );
}
