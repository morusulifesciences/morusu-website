"use client";

import { Suspense, useState, useEffect, startTransition } from "react";
import dynamic from "next/dynamic";
import { use3DTier } from "./use3DTier";

// Dynamically import the Heavy 3D scene (Canvas) only when needed.
const DynamicHeroScene = dynamic(() => import("./HeroScene").then(m => m.HeroScene), {
  ssr: false,
});

export function Scene3DGate() {
  const tier = use3DTier();
  const [mounted, setMounted] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    // Delay mounting slightly to ensure static LCP finishes and main thread is idle
    if (tier !== null && tier > 0) {
      const idleCallback = (window as any).requestIdleCallback 
        ? (window as any).requestIdleCallback 
        : (cb: any) => setTimeout(cb, 300);
        
      idleCallback(() => {
        startTransition(() => {
          setMounted(true);
        });
      });
    }
  }, [tier]);

  return (
    <div className="absolute inset-0 w-full h-full">
      {/* 
        Static Image fallback (Tier 0 or while loading). 
        Always server-rendered, LCP element.
      */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 z-10 ${
          modelLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-hidden={modelLoaded ? "true" : "false"}
      >
        <div className="w-2/3 h-2/3 bg-forest-900/10 rounded-[40px] flex items-center justify-center border-2 border-dashed border-forest-900/20">
          {/* We'd use next/image with priority here normally */}
          <span className="text-forest-900/50 font-medium">Static Image LCP</span>
        </div>
      </div>

      {/* 3D Canvas */}
      {mounted && tier && tier > 0 && (
        <div className="absolute inset-0 z-20">
          <Suspense fallback={null}>
            <DynamicHeroScene 
              tier={tier} 
              onLoaded={() => setModelLoaded(true)} 
            />
          </Suspense>
        </div>
      )}
    </div>
  );
}
