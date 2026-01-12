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
    const minSpeed = 0.5;
    const maxSpeed = 3;
    const acceleration = 0.05;
    const deceleration = 0.03;
    
    // Define dot type with momentum and velocity
    type Direction = { dx: number; dy: number };
    type Dot = {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      velocity: number;
      lastDirection: Direction | null;
      isAccelerating: boolean;
      color: { primary: string; secondary: string };
    };

    // Create multiple dots with different colors
    const createDot = (colorPrimary: string, colorSecondary: string): Dot => {
      // Keep dots one cell away from edges so they're always fully visible
      const maxX = Math.floor((width - gridSize) / gridSize);
      const maxY = Math.floor((height - gridSize) / gridSize);
      const x = (Math.floor(Math.random() * (maxX - 1)) + 1) * gridSize;
      const y = (Math.floor(Math.random() * (maxY - 1)) + 1) * gridSize;
      return {
        x,
        y,
        targetX: x,
        targetY: y,
        velocity: minSpeed + Math.random() * (maxSpeed - minSpeed) / 2,
        lastDirection: null,
        isAccelerating: true,
        color: { primary: colorPrimary, secondary: colorSecondary },
      };
    };

    const dots: Dot[] = [
      createDot("rgba(48, 166, 230, 1)", "rgba(12, 65, 180, 0.5)"),  // Blue
      createDot("rgba(200, 80, 200, 1)", "rgba(120, 40, 140, 0.5)"), // Magenta/Purple
      createDot("rgba(255, 140, 50, 1)", "rgba(180, 80, 20, 0.5)"),  // Orange
      createDot("rgba(80, 220, 120, 1)", "rgba(30, 140, 60, 0.5)"),  // Green
      createDot("rgba(80, 220, 220, 1)", "rgba(30, 140, 140, 0.5)"), // Cyan
      createDot("rgba(255, 80, 100, 1)", "rgba(180, 40, 60, 0.5)"),  // Red/Pink
    ];

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

    const updateDot = (dot: Dot, allDots: Dot[]) => {
      const dx = dot.targetX - dot.x;
      const dy = dot.targetY - dot.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Acceleration/Deceleration logic
      const distToTarget = dist;
      const shouldDecelerate = distToTarget < gridSize * 0.4;
      
      if (shouldDecelerate) {
        // Decelerate as we approach target
        dot.velocity = Math.max(minSpeed, dot.velocity - deceleration);
        dot.isAccelerating = false;
      } else if (dot.isAccelerating) {
        // Accelerate when moving
        dot.velocity = Math.min(maxSpeed, dot.velocity + acceleration);
      }

      if (dist < dot.velocity) {
        dot.x = dot.targetX;
        dot.y = dot.targetY;
        
        // Pick new direction with momentum
        const directions: Direction[] = [
          { dx: gridSize, dy: 0 },
          { dx: -gridSize, dy: 0 },
          { dx: 0, dy: gridSize },
          { dx: 0, dy: -gridSize },
        ];
        
        // Filter out of bounds - keep one grid cell away from edges
        let validDirections = directions.filter(d => {
          const nx = dot.x + d.dx;
          const ny = dot.y + d.dy;
          return nx >= gridSize && nx <= width - gridSize && ny >= gridSize && ny <= height - gridSize;
        });

        // Collision avoidance - filter out directions where another dot is or is heading
        validDirections = validDirections.filter(d => {
          const nextX = dot.x + d.dx;
          const nextY = dot.y + d.dy;
          
          for (const other of allDots) {
            if (other === dot) continue;
            
            // Check if another dot is at or heading to this position
            const otherAtPosition = Math.abs(other.x - nextX) < gridSize / 2 && Math.abs(other.y - nextY) < gridSize / 2;
            const otherHeadingTo = Math.abs(other.targetX - nextX) < gridSize / 2 && Math.abs(other.targetY - nextY) < gridSize / 2;
            
            if (otherAtPosition || otherHeadingTo) {
              return false;
            }
          }
          return true;
        });

        // If no valid directions after collision check, allow any valid boundary direction
        if (validDirections.length === 0) {
          validDirections = directions.filter(d => {
            const nx = dot.x + d.dx;
            const ny = dot.y + d.dy;
            return nx >= gridSize && nx <= width - gridSize && ny >= gridSize && ny <= height - gridSize;
          });
        }

        if (validDirections.length > 0) {
          let chosenDir: Direction;
          
          // Momentum: 70% chance to continue in the same direction if valid
          if (dot.lastDirection && Math.random() < 0.7) {
            const sameDir = validDirections.find(
              d => d.dx === dot.lastDirection!.dx && d.dy === dot.lastDirection!.dy
            );
            if (sameDir) {
              chosenDir = sameDir;
            } else {
              chosenDir = validDirections[Math.floor(Math.random() * validDirections.length)];
            }
          } else {
            chosenDir = validDirections[Math.floor(Math.random() * validDirections.length)];
          }
          
          dot.targetX = dot.x + chosenDir.dx;
          dot.targetY = dot.y + chosenDir.dy;
          dot.lastDirection = chosenDir;
          dot.isAccelerating = true; // Start accelerating towards new target
        }

      } else {
        const angle = Math.atan2(dy, dx);
        dot.x += Math.cos(angle) * dot.velocity;
        dot.y += Math.sin(angle) * dot.velocity;
      }
    };

    const drawDot = (dot: Dot) => {
      // Glow effect
      const gradient = ctx.createRadialGradient(dot.x, dot.y, 1, dot.x, dot.y, 10);
      gradient.addColorStop(0, dot.color.primary);
      gradient.addColorStop(0.5, dot.color.secondary);
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
      dots.forEach(dot => {
        updateDot(dot, dots);
        drawDot(dot);
      });
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
