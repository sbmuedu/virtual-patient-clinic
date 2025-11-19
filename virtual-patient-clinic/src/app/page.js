// src/app/page.js
'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Experience } from '../components/scene/Experience';
import { usePatientStore } from '../stores/patientStore';
import CaseSelection from '../components/ui/CaseSelection';
import Dashboard from '../components/ui/Dashboard';
import ToolPalette from '../components/ui/ToolPalette';
import FeedbackOverlay from '../components/ui/FeedbackOverlay';

export default function Home() {
  const { isCaseSelected, isDiagnosisFinalized } = usePatientStore();

  return (
    <main className="h-screen w-full relative bg-gray-900">
      {!isCaseSelected ? (
        <CaseSelection />
      ) : (
        <>
          <Dashboard />
          <ToolPalette />
          {isDiagnosisFinalized && <FeedbackOverlay />}

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
              <Experience />
            </Suspense>
          </Canvas>
        </>
      )}
    </main>
  );
}
