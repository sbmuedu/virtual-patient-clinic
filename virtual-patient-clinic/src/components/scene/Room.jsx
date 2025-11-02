'use client'

export function Room() {
  return (
    <>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#4b5563" />
      </mesh>
      
      {/* Walls */}
      <mesh position={[0, 2, -5]} receiveShadow>
        <planeGeometry args={[20, 6]} />
        <meshStandardMaterial color="#374151" />
      </mesh>
      
      {/* Medical bed */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} castShadow>
        <boxGeometry args={[2, 0.5, 1]} />
        <meshStandardMaterial color="#9ca3af" />
      </mesh>
      
      {/* Bed legs */}
      <mesh position={[-0.8, -0.5, -0.4]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
      <mesh position={[0.8, -0.5, -0.4]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
      <mesh position={[-0.8, -0.5, 0.4]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
      <mesh position={[0.8, -0.5, 0.4]} castShadow>
        <boxGeometry args={[0.1, 1, 0.1]} />
        <meshStandardMaterial color="#6b7280" />
      </mesh>
    </>
  )
}