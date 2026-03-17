"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useTheme } from "next-themes";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function FloatingKnot({ color, emissive }: { color: string; emissive: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.2;
    meshRef.current.rotation.y += delta * 0.25;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.5} floatIntensity={0.8}>
      <mesh ref={meshRef} scale={1.8}>
        <torusKnotGeometry args={[1, 0.35, 200, 32]} />
        <MeshDistortMaterial
          color={color}
          emissive={emissive}
          emissiveIntensity={0.6}
          roughness={0.2}
          metalness={0.7}
          distort={0.35}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
}

export default function ThreeHeroBackground() {
  const { resolvedTheme } = useTheme();
  const palette = useMemo(() => {
    const isDark = resolvedTheme === "dark";
    return {
      knot: isDark ? "#f8fafc" : "#111827",
      emissive: isDark ? "#38bdf8" : "#2563eb",
    };
  }, [resolvedTheme]);

  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[6, 6, 6]} intensity={1.1} />
        <Stars radius={50} depth={20} count={900} factor={3} fade speed={1} />
        <FloatingKnot color={palette.knot} emissive={palette.emissive} />
      </Canvas>
    </div>
  );
}
