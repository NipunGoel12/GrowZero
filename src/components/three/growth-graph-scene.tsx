"use client";

import dynamic from "next/dynamic";

const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => mod.Canvas),
  { ssr: false }
);

const GrowthLine = dynamic(() => import("@/components/three/growth-graph"), {
  ssr: false,
});

export function GrowthGraphScene() {
  return (
    <Canvas camera={{ position: [0, 0, 3], fov: 50 }} dpr={[1, 1.5]}>
      <GrowthLine />
    </Canvas>
  );
}
