---
name: 3D Web Experiences
description: Guidelines for integrating 3D elements using Three.js and React Three Fiber.
---

# 3D Web Experiences

This skill covers the integration of 3D content into web applications, primarily seeking a balance between visual fidelity and performance.

## 1. Core Technology: React Three Fiber (R3F)

R3F is a React renderer for Three.js. It allows you to build your scene declaratively with re-usable components.

- **Canvas**: The entry point for your scene.
  ```jsx
  <Canvas>
    <mesh />
  </Canvas>
  ```
- **Hooks**: `useFrame` (run on every frame), `useThree` (access state), `useLoader` (load assets).

## 2. Model Optimization

3D models are often the bottleneck.

- **Format**: Always use **glTF** (or binary **.glb**). It's the "JPEG of 3D".
- **Compression**: Use **Draco compression**. It drastically reduces file size.
  - Requires a decoder on the client side.
- **Topology**: Reduce polycount. Bake high-poly details into normal maps on low-poly meshes.
- **Textures**: Resize textures. You rarely need 4k textures for web. 1k or 2k is usually sufficient.

## 3. Lighting & Shadows

- **Baking**: For static scenes, "bake" lighting into textures (Lightmaps) in Blender. This costs almost zero performance at runtime.
- **Real-time Lights**:
  - `AmbientLight`: Cheap, flat.
  - `DirectionalLight`: Good for sun.
  - `SpotLight`/`PointLight`: More expensive.
- **Shadows**: Expensive! Enable only where necessary. Consider "fake" blob shadows for moving characters.

## 4. Performance & Best Practices

- **Instancing**: If rendering many identical objects (trees, grass), use `InstancedMesh`. It renders thousands of objects in a single draw call.
- **Damping**: Smooth out camera and object movements for a premium feel.
- **Pixel Ratio**: Cap `dpr` at 2 to avoid overheating high-DPI devices.
  ```jsx
  <Canvas dpr={[1, 2]}>
  ```
- **Dispose**: Clean up resources (Geometries, Materials, Textures) when components unmount to prevent memory leaks (R3F handles most of this automatically).

## 5. Ecosystem Tools

- **Drei**: Essential helpers for R3F (OrbitControls, Environment, Text, etc.).
- **Leva**: GUI controls for tweaking variables in real-time.
- **Glftjsx**: Command line tool to turn GLTF files into re-usable React components.
