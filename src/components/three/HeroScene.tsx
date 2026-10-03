"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, PerformanceMonitor, ContactShadows, useGLTF } from "@react-three/drei";
import { ProceduralBottle } from "./ProceduralBottle";
import { FloatingHerbs } from "./FloatingHerbs";
import type { Tier } from "./use3DTier";
import * as THREE from "three";
import { Suspense } from "react";

function HeroModel({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} position={[0, -1, 0]} scale={0.5} />;
}

interface HeroSceneProps {
  tier: Tier;
  onLoaded: () => void;
}

export function HeroScene({ tier: initialTier, onLoaded }: HeroSceneProps) {
  const [tier, setTier] = useState(initialTier);
  const [dpr, setDpr] = useState(initialTier === 2 ? 2 : 1);
  const [isPlaying, setIsPlaying] = useState(true);

  // Once the bottle renders, we tell the gate we are loaded
  useEffect(() => {
    // A small delay to ensure frame is painted
    const t = setTimeout(() => {
      onLoaded();
    }, 100);
    return () => clearTimeout(t);
  }, [onLoaded]);

  return (
    <>
      <Canvas
        shadows={tier === 2}
        dpr={tier === 2 ? [1, dpr] : 1}
        gl={{ 
          antialias: tier === 2,
          powerPreference: "high-performance",
        }}
        camera={{ position: [0, 0, 5], fov: 35 }}
        style={{ touchAction: "pan-y" }} // Crucial for mobile scroll
        aria-hidden="true"
      >
        <PerformanceMonitor 
          onDecline={() => {
            if (tier === 2) {
              setDpr(1); // Step down resolution first
              setTier(1); // Drop to tier 1
            }
          }}
        />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1} 
          castShadow={tier === 2} 
        />
        <Environment preset="city" />

        {/* Model */}
        <Suspense fallback={<ProceduralBottle />}>
          <HeroModel url="/models/onion-shampoo.glb" />
        </Suspense>

        {/* Instanced Herbs */}
        <FloatingHerbs tier={tier} />

        {/* Shadows */}
        {tier === 2 && (
          <ContactShadows 
            position={[0, -1.2, 0]} 
            opacity={0.5} 
            scale={5} 
            blur={2} 
            far={2} 
            frames={1} // Bake once for performance
          />
        )}
        
        {/* CSS Blob shadow fallback for mobile (handled in DOM via gate or inside procedural bottle HTML if needed) */}

        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.8}
          autoRotate={isPlaying}
          autoRotateSpeed={1.5}
          enableDamping
        />
      </Canvas>

      {/* Accessible Pause/Play Control */}
      <button 
        className="absolute bottom-4 right-4 z-30 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-forest-900 shadow-sm border border-forest-900/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-900"
        onClick={() => setIsPlaying(!isPlaying)}
        aria-label={isPlaying ? "Pause 3D rotation" : "Play 3D rotation"}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </>
  );
}
