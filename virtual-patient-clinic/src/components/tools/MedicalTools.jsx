'use client'

export function MedicalTools() {
  return (
    <>
      {/* Stethoscope placeholder */}
      <mesh position={[3, 1, 0]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
        <meshStandardMaterial color="silver" />
      </mesh>
      
      {/* Medical tray */}
      <mesh position={[2, 0.8, 2]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 16]} />
        <meshStandardMaterial color="gray" />
      </mesh>
    </>
  )
}