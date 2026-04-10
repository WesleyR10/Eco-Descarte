"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function EarthSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.15;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.08;
    }
  });

  const wireframeGeometry = useMemo(() => {
    return new THREE.IcosahedronGeometry(2, 12);
  }, []);

  // Generate floating particles
  const particlesGeometry = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const t = (radius - 2.5) / 1.5;
      colors[i * 3] = 0.1 + t * 0.8;
      colors[i * 3 + 1] = 0.7 - t * 0.5;
      colors[i * 3 + 2] = 0.3;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return geo;
  }, []);

  return (
    <group>
      {/* Main globe wireframe */}
      <mesh ref={meshRef} geometry={wireframeGeometry}>
        <meshBasicMaterial
          color="#10b981"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Inner glow sphere */}
      <Sphere args={[1.95, 32, 32]}>
        <meshBasicMaterial color="#064e3b" transparent opacity={0.3} />
      </Sphere>

      {/* Outer glow */}
      <Sphere args={[2.1, 32, 32]}>
        <meshBasicMaterial
          color="#10b981"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Floating particles */}
      <points ref={particlesRef} geometry={particlesGeometry}>
        <pointsMaterial
          size={0.03}
          vertexColors
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Equator ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.3, 0.005, 16, 100]} />
        <meshBasicMaterial color="#34d399" transparent opacity={0.4} />
      </mesh>

      {/* Second ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.4, 0.003, 16, 100]} />
        <meshBasicMaterial color="#6ee7b7" transparent opacity={0.2} />
      </mesh>
    </group>
  );
}

export default function Globe() {
  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <EarthSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={(2 * Math.PI) / 3}
        />
      </Canvas>
    </div>
  );
}
