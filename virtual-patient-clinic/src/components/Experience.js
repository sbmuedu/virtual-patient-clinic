// src/components/Experience.js
// This component sets up the main 3D scene using React Three Fiber.
// It includes lighting, physics (via @react-three/cannon), environment presets,
// and the core components of the simulation like the <PatientModel /> and <Stethoscope />.
// It also initializes the audio engine that provides sounds for the medical tools.
import { useThree } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { OrbitControls, Environment } from '@react-three/drei';
import { PatientModel } from './PatientModel';
import { Stethoscope } from './tools/Stethoscope';
import { createAudioEngine } from '../lib/AudioEngine';
import { useMemo } from 'react';

export function Experience() {
  const { camera } = useThree();
  const audioEngine = useMemo(() => createAudioEngine(camera), [camera]);

  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1.5}
      />
      
      <Physics gravity={[0, -9.81, 0]}>
        <PatientModel />
        <Stethoscope audioEngine={audioEngine} />
      </Physics>
      
      <OrbitControls />
      <Environment preset="apartment" />
    </>
  );
}
