'use client'

import { useThree, useFrame } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { OrbitControls, Environment, Sky } from '@react-three/drei'
import { PatientModel } from '../patient/PatientModel'
import { MedicalTools } from '../tools/MedicalTools'
import { Room } from './Room'
import { Lighting } from './Lighting'

export function Experience({ onBodyPartClick, activeTool }) {
  return (
    <>
      <Lighting />
      
      <Environment 
        preset="apartment"
        background
        blur={0.5}
      />
      
      <Physics gravity={[0, -9.81, 0]}>
        <PatientModel 
          onBodyPartClick={onBodyPartClick}
          activeTool={activeTool}
        />
        <Room />
        <MedicalTools />
      </Physics>
      
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={1}
        maxDistance={10}
        target={[0, 1, 0]}
      />
    </>
  )
}

// export function Experience() {
//   const { camera } = useThree()

//   useFrame((state) => {
//     // به‌روزرسانی‌های هر فریم
//   })

//   return (
//     <>
//       {/* نورپردازی */}
//       <Lighting />
      
//       {/* محیط */}
//       <Environment 
//         preset="apartment"
//         background
//         blur={0.5}
//       />
      
//       {/* فیزیک */}
//       <Physics gravity={[0, -9.81, 0]}>
//         {/* بیمار */}
//         <PatientModel />
        
//         {/* اتاق معاینه */}
//         <Room />
        
//         {/* ابزار پزشکی */}
//         <MedicalTools />
//       </Physics>
      
//       {/* کنترل‌های دوربین */}
//       <OrbitControls
//         enablePan={true}
//         enableZoom={true}
//         enableRotate={true}
//         minDistance={1}
//         maxDistance={10}
//         target={[0, 1, 0]}
//       />
//     </>
//   )
// }