'use client'

import { useRef, useState } from 'react'
import { useBox } from '@react-three/cannon'

export function PatientModel() {
  const [ref] = useBox(() => ({ mass: 0, position: [0, 0, 0] }))
  const [activePart, setActivePart] = useState(null)

  const handleBodyPartClick = (partName, event) => {
    event.stopPropagation()
    setActivePart(partName)
    console.log(`Examining: ${partName}`)
  }

  return (
    <group ref={ref}>
      {/* Head */}
      <mesh
        position={[0, 1.5, 0]}
        onClick={(e) => handleBodyPartClick('head', e)}
        scale={activePart === 'head' ? [1.1, 1.1, 1.1] : [1, 1, 1]}
        castShadow
      >
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      
      {/* Chest */}
      <mesh
        position={[0, 1, 0]}
        onClick={(e) => handleBodyPartClick('chest', e)}
        scale={activePart === 'chest' ? [1.15, 1.15, 1.15] : [1, 1, 1]}
        castShadow
      >
        <boxGeometry args={[0.8, 0.4, 0.3]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      
      {/* Abdomen */}
      <mesh
        position={[0, 0.7, 0]}
        onClick={(e) => handleBodyPartClick('abdomen', e)}
        scale={activePart === 'abdomen' ? [1.1, 1.1, 1.1] : [1, 1, 1]}
        castShadow
      >
        <boxGeometry args={[0.7, 0.3, 0.25]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      
      {/* Arms */}
      <mesh
        position={[-0.6, 1, 0]}
        onClick={(e) => handleBodyPartClick('leftArm', e)}
        castShadow
      >
        <cylinderGeometry args={[0.08, 0.08, 0.8, 8]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      <mesh
        position={[0.6, 1, 0]}
        onClick={(e) => handleBodyPartClick('rightArm', e)}
        castShadow
      >
        <cylinderGeometry args={[0.08, 0.08, 0.8, 8]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      
      {/* Legs */}
      <mesh
        position={[-0.25, 0.2, 0]}
        onClick={(e) => handleBodyPartClick('leftLeg', e)}
        castShadow
      >
        <cylinderGeometry args={[0.09, 0.09, 1, 8]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
      <mesh
        position={[0.25, 0.2, 0]}
        onClick={(e) => handleBodyPartClick('rightLeg', e)}
        castShadow
      >
        <cylinderGeometry args={[0.09, 0.09, 1, 8]} />
        <meshStandardMaterial color="#ffb6c1" />
      </mesh>
    </group>
  )
}