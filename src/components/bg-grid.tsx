"use client";

import { useEffect, useRef } from "react";

export function BgGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const gridSize = 120;
    const dot = { x: 0, y: 0, targetX: 0, targetY: 0, speed: 1.5 };
    
    // Initialize dot position
    dot.x = Math.floor(Math.random() * (width / gridSize)) * gridSize;
    dot.y = Math.floor(Math.random() * (height / gridSize)) * gridSize;
    dot.targetX = dot.x;
    dot.targetY = dot.y;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
      ctx.lineWidth = 1;

      for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    };

    const updateDot = () => {
      const dx = dot.targetX - dot.x;
      const dy = dot.targetY - dot.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < dot.speed) {
        dot.x = dot.targetX;
        dot.y = dot.targetY;
        
        // Pick new random direction
        const directions = [
          { dx: gridSize, dy: 0 },
          { dx: -gridSize, dy: 0 },
          { dx: 0, dy: gridSize },
          { dx: 0, dy: -gridSize },
        ];
        
        // Filter out of bounds
        const validDirections = directions.filter(d => {
          const nx = dot.x + d.dx;
          const ny = dot.y + d.dy;
          return nx >= 0 && nx <= width && ny >= 0 && ny <= height;
        });

        if (validDirections.length > 0) {
            const dir = validDirections[Math.floor(Math.random() * validDirections.length)];
            dot.targetX = dot.x + dir.dx;
            dot.targetY = dot.y + dir.dy;
        }

      } else {
         const angle = Math.atan2(dy, dx);
         dot.x += Math.cos(angle) * dot.speed;
         dot.y += Math.sin(angle) * dot.speed;
      }
    };

    const drawDot = () => {
      // Glow effect
      const gradient = ctx.createRadialGradient(dot.x, dot.y, 1, dot.x, dot.y, 10);
      gradient.addColorStop(0, "rgba(48, 166, 230, 1)");
      gradient.addColorStop(0.5, "rgba(12, 65, 180, 0.5)");
      gradient.addColorStop(1, "rgba(0, 50, 0, 0)");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2);
      ctx.fill();

      // Core
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      updateDot();
      drawDot();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 bg-neutral-950"
    />
  );
}
