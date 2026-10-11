"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface VariableProximityProps {
  text: string;
  className?: string;
  radius?: number;
  falloff?: "linear" | "exponential";
}

export function VariableProximity({ 
  text, 
  className = "", 
  radius = 200,
  falloff = "linear"
}: VariableProximityProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Split text into words and then characters to preserve spaces
  const words = text.split(" ");

  return (
    <div ref={containerRef} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wordIdx) => (
        <div key={wordIdx} className="inline-flex mr-[0.25em]">
          {word.split("").map((char, charIdx) => {
            return (
              <ProximityCharacter
                key={`${wordIdx}-${charIdx}`}
                char={char}
                mousePos={mousePos}
                radius={radius}
                falloff={falloff}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

function ProximityCharacter({ 
  char, 
  mousePos, 
  radius, 
  falloff 
}: { 
  char: string; 
  mousePos: { x: number, y: number }; 
  radius: number;
  falloff: "linear" | "exponential";
}) {
  const charRef = useRef<HTMLSpanElement>(null);
  const [distance, setDistance] = useState(radius + 1);

  useEffect(() => {
    if (!charRef.current) return;
    
    // Calculate center of character
    const rect = charRef.current.getBoundingClientRect();
    const charCenterX = rect.left + rect.width / 2;
    const charCenterY = rect.top + rect.height / 2;
    
    // Calculate distance to mouse
    const dist = Math.sqrt(
      Math.pow(mousePos.x - charCenterX, 2) + 
      Math.pow(mousePos.y - charCenterY, 2)
    );
    
    setDistance(dist);
  }, [mousePos, char]);

  // Calculate intensity based on distance
  let intensity = 0;
  if (distance < radius) {
    if (falloff === "linear") {
      intensity = 1 - (distance / radius);
    } else {
      intensity = Math.pow(1 - (distance / radius), 2);
    }
  }

  // Map intensity to scale and color/weight (since we don't have true variable fonts, we'll use scale and brightness)
  const scale = 1 + (intensity * 0.4); // Scale up to 1.4x
  const yOffset = -intensity * 10; // Move up to 10px

  return (
    <motion.span
      ref={charRef}
      className="inline-block origin-bottom"
      animate={{
        scale,
        y: yOffset,
        color: intensity > 0.5 ? "#D4AF37" : "inherit",
      }}
      transition={{ type: "spring", damping: 15, stiffness: 200, mass: 0.1 }}
    >
      {char}
    </motion.span>
  );
}
