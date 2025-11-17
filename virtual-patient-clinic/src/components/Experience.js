// components/Experience.js
import { useThree } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import { OrbitControls, Environment } from '@react-three/drei';
import { PatientModel } from './PatientModel';
import { Stethoscope } from './tools/Stethoscope';
import { AudioEngine } from './audio/AudioEngine';
import { useMemo } from 'react';

export function Experience() {
  const { camera } = useThree();
  const audioEngine = useMemo(() => new AudioEngine(camera), [camera]);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
      />
      
      <Physics gravity={[0, -9.81, 0]}>
        <PatientModel />
        <Stethoscope audioEngine={audioEngine} />
      </Physics>
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Environment preset="hospital" />
    </>
  );
}
