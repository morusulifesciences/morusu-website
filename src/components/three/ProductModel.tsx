"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows, useGLTF } from "@react-three/drei";
import type { Tier } from "./use3DTier";
import { ProceduralBottle } from "./ProceduralBottle";
import { Suspense } from "react";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  // Optional: Center the model
  return <primitive object={scene} position={[0, -1, 0]} scale={0.5} />;
}

export function ProductModelScene({ modelPath, tier }: { modelPath: string; tier: Tier | null }) {
  if (!tier) return null;
  
  return (
    <Canvas
      shadows={tier === 2}
      dpr={tier === 2 ? [1, 2] : 1}
      gl={{ antialias: tier === 2 }}
      camera={{ position: [0, 0, 5], fov: 35 }}
      style={{ touchAction: "pan-y" }}
      aria-hidden="true"
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow={tier === 2} />
      <Environment preset="city" />

      <Suspense fallback={<ProceduralBottle />}>
        <Model url={modelPath} />
      </Suspense>

      {tier === 2 && (
        <ContactShadows position={[0, -1.2, 0]} opacity={0.5} scale={5} blur={2} far={2} frames={1} />
      )}

      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1.5} enableDamping />
    </Canvas>
  );
}
