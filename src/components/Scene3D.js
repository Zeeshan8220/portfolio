"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

function DistortedSphere() {
  const meshRef = useRef();
  const materialRef = useRef();

  const positions = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(1.8, 64);
    return geo.attributes.position.array;
  }, []);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.25;

      const positions = meshRef.current.geometry.attributes.position;
      const time = clock.getElapsedTime();
      for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const y = positions.getY(i);
        const z = positions.getZ(i);
        const dist = Math.sqrt(x * x + y * y + z * z);
        const noise = Math.sin(dist * 3 - time * 1.5) * 0.12;
        const normX = x / dist;
        const normY = y / dist;
        const normZ = z / dist;
        const newDist = dist + noise;
        positions.setXYZ(i, normX * newDist, normY * newDist, normZ * newDist);
      }
      positions.needsUpdate = true;
    }
    if (materialRef.current) {
      materialRef.current.emissiveIntensity =
        0.4 + Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.8, 64]} />
      <meshStandardMaterial
        ref={materialRef}
        color="#F43F5E"
        emissive="#8B5CF6"
        emissiveIntensity={0.4}
        wireframe={false}
        roughness={0.2}
        metalness={0.8}
        transparent
        opacity={0.85}
      />
    </mesh>
  );
}

function StarField() {
  const positions = useMemo(() => {
    const stars = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000 * 3; i++) {
      stars[i] = (Math.random() - 0.5) * 100;
    }
    return stars;
  }, []);

  const ref = useRef();
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={3000}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        color="#ffffff"
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-5, -5, -5]} intensity={0.3} color="#3B82F6" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#F43F5E" />
        <StarField />
        <DistortedSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
}
