"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

function GrowthLine() {
  const groupRef = useRef<THREE.Group>(null);

  const points = useMemo(() => {
    const pts: [number, number, number][] = [];
    for (let i = 0; i <= 50; i++) {
      const x = (i / 50) * 4 - 2;
      const y = Math.pow(i / 50, 2) * 2 - 0.5 + Math.sin(i * 0.3) * 0.1;
      pts.push([x, y, 0]);
    }
    return pts;
  }, []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.rotation.z = Math.sin(t * 0.2) * 0.05;
    groupRef.current.position.y = Math.sin(t * 0.5) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} intensity={1} color="#7C3AED" />
      <pointLight position={[-2, -1, 1]} intensity={0.5} color="#06B6D4" />
      <Line points={points} color="#7C3AED" lineWidth={2} />
      {points.map((point, i) =>
        i % 8 === 0 ? (
          <mesh key={i} position={point}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshStandardMaterial
              color={i > 30 ? "#22C55E" : "#06B6D4"}
              emissive={i > 30 ? "#22C55E" : "#06B6D4"}
              emissiveIntensity={0.5}
            />
          </mesh>
        ) : null
      )}
    </group>
  );
}

export default GrowthLine;
