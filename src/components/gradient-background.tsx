"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

function GradientBubble({ position, color, speed, distort, scale }: { position: [number, number, number], color: string, speed: number, distort: number, scale: number }) {
  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          envMapIntensity={0.75}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.1}
          speed={speed} // Animation speed
          distort={distort} // Strength, 0 disables distortion (makes it normal materia
          radius={1}
        />
      </mesh>
    </Float>
  );
}

export function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 w-full h-full bg-white bg-gradient-to-br from-orange-50 to-amber-50">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]} // optimization for high dpi
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -5, -5]} intensity={1} color="#ffedd5" />

        {/* Floating gradient/liquid blobs */}
        <group position={[0,0,-2]}>
             <GradientBubble 
                position={[2, 1, 0]} 
                scale={3.5} 
                color="#f1caa5ff"
                speed={2} 
                distort={0.4} 
            />
            <GradientBubble 
                position={[-3, -1, -1]} 
                scale={4} 
                color="#ffd5e2ff"
                speed={1.5} 
                distort={0.5} 
            />
             <GradientBubble 
                position={[0, 3, -3]} 
                scale={3} 
                color="#9a7326ff"
                speed={2.5} 
                distort={0.3} 
            />
             <GradientBubble 
                position={[3, -3, -2]} 
                scale={4.5} 
                color="#edf7ffff" 
                speed={1} 
                distort={0.6} 
            />
        </group>
      </Canvas>
      
      {/* Overlay to blend it more softly if needed */}
      <div className="absolute inset-0 bg-white/30 backdrop-blur-[50px] pointer-events-none" />
    </div>
  );
}
