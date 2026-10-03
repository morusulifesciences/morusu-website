"use client";

import { Suspense, useState } from "react";
import dynamic from "next/dynamic";
import { use3DTier } from "./use3DTier";

const DynamicProductModel = dynamic(() => import("./ProductModel").then(m => m.ProductModelScene), {
  ssr: false,
});

export function ProductViewer3D({ model3d, image }: { model3d: string, image?: string }) {
  const [viewMode, setViewMode] = useState<"3d" | "photo">("3d");
  const tier = use3DTier();

  // If no 3D support, force photo
  if (tier === 0) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-ivory-dark/30">
        <span className="text-forest-900/40 text-sm">Static Image: {image}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full group">
      {/* Toggle */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30 bg-white/80 backdrop-blur-md rounded-full border border-forest-900/10 p-1 flex shadow-sm opacity-0 group-hover:opacity-100 transition-opacity focus-within:opacity-100">
        <button 
          onClick={() => setViewMode("3d")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${viewMode === "3d" ? "bg-forest-900 text-white" : "text-forest-900 hover:bg-forest-900/5"}`}
        >
          3D
        </button>
        <button 
          onClick={() => setViewMode("photo")}
          className={`px-4 py-1.5 rounded-full text-xs font-medium transition-colors ${viewMode === "photo" ? "bg-forest-900 text-white" : "text-forest-900 hover:bg-forest-900/5"}`}
        >
          Photo
        </button>
      </div>

      {viewMode === "photo" ? (
        <div className="w-full h-full flex items-center justify-center bg-ivory-dark/30">
          <span className="text-forest-900/40 text-sm">Static Image: {image}</span>
        </div>
      ) : (
        <div className="w-full h-full bg-ivory-dark/30">
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center">Loading 3D...</div>}>
            <DynamicProductModel modelPath={model3d} tier={tier} />
          </Suspense>
        </div>
      )}
    </div>
  );
}
