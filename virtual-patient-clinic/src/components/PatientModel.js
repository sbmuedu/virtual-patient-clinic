// components/PatientModel.js
import { useRef } from 'react';
import { useBox } from '@react-three/cannon';
import usePatientStore from '../stores/patientStore';

export function PatientModel() {
  const setExaminationArea = usePatientStore((state) => state.setExaminationArea);

  const createBodyPart = (name, args, position) => {
    const [ref] = useBox(() => ({
      isTrigger: true,
      onCollide: () => setExaminationArea(name),
      args,
      position,
    }));
    return (
      <mesh ref={ref}>
        <boxGeometry args={args} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    );
  };

  return (
    <group>
      {/* Head */}
      {createBodyPart('head', [0.5, 0.5, 0.5], [0, 2, 0])}
      {/* Chest */}
      {createBodyPart('chest', [1, 1, 0.5], [0, 1, 0])}
      {/* Left Arm */}
      {createBodyPart('leftArm', [0.25, 1, 0.25], [-0.75, 1, 0])}
      {/* Right Arm */}
      {createBodyPart('rightArm', [0.25, 1, 0.25], [0.75, 1, 0])}
      {/* Left Leg */}
      {createBodyPart('leftLeg', [0.25, 1, 0.25], [-0.25, -0.5, 0])}
      {/* Right Leg */}
      {createBodyPart('rightLeg', [0.25, 1, 0.25], [0.25, -0.5, 0])}
    </group>
  );
}
