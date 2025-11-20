// src/app/page.js
// This is the main entry point for the application. It uses the Zustand patient store
// to determine whether to show the patient case selection screen or the main 3D clinic view.
// It conditionally renders the <CaseSelection /> component if no case has been chosen,
// otherwise it renders the main clinic environment with the <Dashboard />, <Canvas />, and other UI components.
'use client';
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { Html } from "@react-three/drei";
import { Experience } from "../components/Experience";
import  Dashboard  from "../components/ui/Dashboard";
import  ToolPalette  from "../components/ui/ToolPalette";
import  {ExaminationOverlay}  from "../components/ui/ExaminationOverlay";
import CaseSelection from "../components/ui/CaseSelection";
import { usePatientStore } from "../stores/patientStore";

export default function Home() {
  const [activeTool, setActiveTool] = useState(null);
  const isCaseSelected = usePatientStore((state) => state.isCaseSelected);

  return (
    <main className="h-screen w-full relative">
      {!isCaseSelected ? (
        <CaseSelection />
      ) : (
        <>
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
            <Suspense fallback={<Html><div>Loading...</div></Html>}>
              <Experience activeTool={activeTool} />
            </Suspense>
          </Canvas>
          <ToolPalette activeTool={activeTool} setActiveTool={setActiveTool} />
          <ExaminationOverlay />
        </>
      )}
    </main>
  );
}
