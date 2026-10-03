"use client";

import { useState, useEffect } from "react";

export type Tier = 0 | 1 | 2; // 0 = Static, 1 = Lite 3D, 2 = Full 3D

export function use3DTier(): Tier | null {
  const [tier, setTier] = useState<Tier | null>(null);

  useEffect(() => {
    // Basic checks
    if (typeof window === "undefined") return;

    // 1. Reduced motion check -> Tier 0
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setTier(0);
      return;
    }

    // 2. Data saver / Connection check -> Tier 0
    if ("connection" in navigator) {
      const conn = (navigator as any).connection;
      if (conn.saveData === true || conn.effectiveType === "2g" || conn.effectiveType === "3g") {
        setTier(0);
        return;
      }
    }

    // 3. Hardware concurrency & Device Memory (approximate mobile/low-end check)
    const cores = navigator.hardwareConcurrency || 4;
    const memory = (navigator as any).deviceMemory || 4;
    
    // Very low end -> Tier 0
    if (cores <= 2 || memory <= 2) {
      setTier(0);
      return;
    }

    // 4. WebGL Support
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        setTier(0);
        return;
      }
    } catch (e) {
      setTier(0);
      return;
    }

    // Mid-range mobile / tablet -> Tier 1
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile || cores < 8 || memory < 8) {
      setTier(1);
      return;
    }

    // Desktop / High-end -> Tier 2
    setTier(2);
  }, []);

  return tier;
}
