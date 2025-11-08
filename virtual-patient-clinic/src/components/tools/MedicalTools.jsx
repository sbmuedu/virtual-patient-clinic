"use client";

export function MedicalTools() {
  return (
    <>
      {/* Stethoscope placeholder */}
      <mesh position={[1, 1, 1]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 1, 8]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Medical tray */}
      <mesh position={[1, 0.8, 1]} castShadow>
        <cylinderGeometry args={[0.5, 0.5, 0.1, 16]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
      <mesh position={[1, -0.2, 1]} castShadow>
        <cylinderGeometry args={[0.1, 0.2, 2, 16]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>
    </>
  );
}
