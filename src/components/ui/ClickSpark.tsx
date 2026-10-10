"use client";

import React, { useState, useEffect, MouseEvent, ReactNode, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Spark {
  id: string;
  x: number;
  y: number;
  color: string;
  particles: { angle: number; speed: number; size: number }[];
}

interface ClickSparkProps {
  children: ReactNode;
  sparkCount?: number;
  defaultColor?: string;
}

export function ClickSpark({ children, sparkCount = 8, defaultColor = "#D4AF37" }: ClickSparkProps) {
  const [sparks, setSparks] = useState<Spark[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Utility to determine contrasting color based on background
  const getContrastColor = (x: number, y: number): string => {
    try {
      // Find the element at the click position
      const element = document.elementFromPoint(x, y);
      if (!element) return defaultColor;

      // Look up the DOM tree to find an element with a background color
      let currentElement: Element | null = element;
      let bgColor = "rgba(0, 0, 0, 0)";

      while (currentElement) {
        const style = window.getComputedStyle(currentElement);
        bgColor = style.backgroundColor;
        
        // Stop if we found a non-transparent background
        if (bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent") {
          break;
        }
        currentElement = currentElement.parentElement;
      }

      if (bgColor === "rgba(0, 0, 0, 0)" || bgColor === "transparent") {
        return defaultColor;
      }

      // Parse rgb/rgba
      const rgbMatch = bgColor.match(/\d+/g);
      if (rgbMatch && rgbMatch.length >= 3) {
        const r = parseInt(rgbMatch[0], 10);
        const g = parseInt(rgbMatch[1], 10);
        const b = parseInt(rgbMatch[2], 10);

        // Calculate relative luminance
        const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
        
        // If background is light, return dark green (primary-dark), else return gold
        return luminance > 0.5 ? "#243E36" : "#D4AF37"; 
      }

      return defaultColor;
    } catch (e) {
      return defaultColor;
    }
  };

  const handleClick = (e: MouseEvent) => {
    // Determine exact position relative to viewport
    const x = e.clientX;
    const y = e.clientY;

    const sparkColor = getContrastColor(x, y);

    const particles = Array.from({ length: sparkCount }).map(() => ({
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 40 + 20, // distance to travel
      size: Math.random() * 4 + 2, // 2px to 6px
    }));

    const newSpark: Spark = {
      id: Math.random().toString(36).substring(2, 9),
      x,
      y,
      color: sparkColor,
      particles,
    };

    setSparks((prev) => [...prev, newSpark]);

    // Remove the spark after animation completes
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
    }, 800);
  };

  return (
    <>
      <div ref={containerRef} onClick={handleClick} className="w-full h-full" style={{ display: 'contents' }}>
        {children}
      </div>

      {/* Render Sparks inside a portal to ensure they overlay everything perfectly at fixed positions */}
      {typeof window !== "undefined" && (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
          <AnimatePresence>
            {sparks.map((spark) => (
              <div
                key={spark.id}
                className="absolute"
                style={{ left: spark.x, top: spark.y }}
              >
                {spark.particles.map((particle, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
                    animate={{
                      x: Math.cos(particle.angle) * particle.speed,
                      y: Math.sin(particle.angle) * particle.speed,
                      scale: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeOut",
                    }}
                    className="absolute rounded-full"
                    style={{
                      width: particle.size,
                      height: particle.size,
                      backgroundColor: spark.color,
                      left: -particle.size / 2,
                      top: -particle.size / 2,
                    }}
                  />
                ))}
              </div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </>
  );
}
