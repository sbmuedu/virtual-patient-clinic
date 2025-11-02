// components/PatientModel.js
import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useBox, useSphere } from '@react-three/cannon'
import { useGLTF, useTexture } from '@react-three/drei'

export function PatientModel() {
  const [ref, api] = useBox(() => ({ mass: 0, position: [0, 0, 0] }))
  const { nodes, materials } = useGLTF('/models/patient.glb')
  const [activePart, setActivePart] = useState(null)

  // هندلر برای لمس قسمت‌های بدن
  const handleBodyPartClick = (partName, event) => {
    event.stopPropagation()
    setActivePart(partName)
    
    // بزرگ‌نمایی قسمت مورد نظر
    api.position.set(0, 0.5, 0)
    api.velocity.set(0, 0.2, 0)
  }

  return (
    <group ref={ref}>
      {/* سر */}
      <mesh
        geometry={nodes.head.geometry}
        material={materials.skin}
        onClick={(e) => handleBodyPartClick('head', e)}
        scale={activePart === 'head' ? [1.1, 1.1, 1.1] : [1, 1, 1]}
      />
      
      {/* قفسه سینه */}
      <mesh
        geometry={nodes.chest.geometry}
        material={materials.skin}
        onClick={(e) => handleBodyPartClick('chest', e)}
        scale={activePart === 'chest' ? [1.15, 1.15, 1.15] : [1, 1, 1]}
      />
      
      {/* دست‌ها */}
      <mesh
        geometry={nodes.leftArm.geometry}
        material={materials.skin}
        onClick={(e) => handleBodyPartClick('leftArm', e)}
      />
      
      {/* پاها */}
      <mesh
        geometry={nodes.leftLeg.geometry}
        material={materials.skin}
        onClick={(e) => handleBodyPartClick('leftLeg', e)}
      />
    </group>
  )
}