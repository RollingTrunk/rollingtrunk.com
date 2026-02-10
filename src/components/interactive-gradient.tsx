"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function InteractiveGradient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  // Mouse position tracking (relative to container)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor interaction
  const springConfig = { damping: 30, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  if (!isMounted) return null;

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-full overflow-hidden bg-white group"
    >
      {/* Aurora Layer 1 - Deep Blue Ribbon */}
      <motion.div
        animate={{
          x: [-20, 20, -20],
          y: [-10, 10, -10],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-1/4 -left-1/4 w-[120%] h-[60%] bg-linear-to-r from-blue-600/20 via-indigo-500/10 to-transparent blur-[100px] skew-y-12"
      />

      {/* Aurora Layer 2 - Cyan/Teal Ribbon */}
      <motion.div
        animate={{
          x: [20, -20, 20],
          y: [10, -10, 10],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-1/4 w-[120%] h-[50%] bg-linear-to-l from-cyan-400/20 via-teal-400/10 to-transparent blur-[90px] -skew-y-6"
      />

      {/* Aurora Layer 3 - Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/4 w-[60%] h-[60%] bg-purple-400/15 blur-[120px] rounded-full"
      />

      {/* Interactive Vista-style "Glow" following mouse */}
      <motion.div
        style={{
          left: smoothX,
          top: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        className="absolute w-96 h-96 rounded-full bg-linear-to-br from-blue-400/30 via-teal-300/20 to-transparent blur-[80px] pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />

      {/* Additional subtle ribbon for "Vista" flavor */}
      <motion.div
        animate={{
          x: [-50, 50, -50],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/2 -left-1/2 w-[200%] h-[2px] bg-linear-to-r from-transparent via-white/40 to-transparent blur-[4px] rotate-[15deg] opacity-20"
      />

      {/* Grainy Texture for Premium Feel */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      
      {/* Final Glass Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-[10px]" />
    </div>
  );
}
