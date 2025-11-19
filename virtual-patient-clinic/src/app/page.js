// src/app/page.js
'use client';

import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/Experience";
import { Dashboard } from "../components/ui/Dashboard";
import { ToolPalette } from "../components/ui/ToolPalette";
import { ExaminationOverlay } from "../components/ui/ExaminationOverlay";
import { Suspense } from "react";
import { useState } from "react";

export default function Home() {
  const [activeTool, setActiveTool] = useState(null);

  return (
    <main className="h-screen w-full relative">
      <Dashboard />
      <Canvas
        camera={{
          position: [0, 1.5, 4],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        shadows
        gl={{
          alpha: true,
          antialias: true,
        }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <Experience activeTool={activeTool} />
        </Suspense>
      </Canvas>
      <ToolPalette activeTool={activeTool} setActiveTool={setActiveTool} />
      <ExaminationOverlay />
    </main>
  );
}
