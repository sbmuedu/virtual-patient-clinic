// components/Experience.js
import { useThree, useFrame } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { OrbitControls, Environment } from '@react-three/drei'
import { PatientModel } from './PatientModel'
import { Stethoscope } from './tools/Stethoscope'
import { ExaminationTools } from './tools/ExaminationTools'

export function Experience() {
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
        <ExaminationTools />
        <Room />
      </Physics>
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Environment preset="hospital" />
    </>
  )
}