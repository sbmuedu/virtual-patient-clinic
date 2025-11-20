// components/PatientModel.js
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useBox, useSphere } from '@react-three/cannon';
import {usePatientStore} from '../stores/patientStore';

export function PatientModel() {
  const setExaminationArea = usePatientStore((state) => state.setExaminationArea);
  const gltf = useGLTF('/models/patient/patient.glb');

  const createBodyPart = (name, args, position, type = 'box') => {
    const [ref] = useBox(() => ({
      isTrigger: true,
      onCollide: () => setExaminationArea(name),
      args,
      position,
    }));
    return (
      <mesh ref={ref} visible={false}>
        <boxGeometry args={args} />
        <meshStandardMaterial color="lightblue" />
      </mesh>
    );
  };

  const createEye = (name, position) => {
    const [ref] = useSphere(() => ({
      isTrigger: true,
      onCollide: () => setExaminationArea(name),
      args: [0.1],
      position,
    }));
    return (
      <mesh ref={ref} visible={false}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="white" />
      </mesh>
    );
  };

  return (
    <group>
      <primitive object={gltf.scene} scale={0.1} position={[0, 0, 0]} />
      {/* Head */}
      {createBodyPart('head', [0.5, 0.5, 0.5], [0, 2, 0])}
      {/* Eyes */}
      {createEye('leftEye', [-0.15, 2.1, 0.25])}
      {createEye('rightEye', [0.15, 2.1, 0.25])}
      {/* Ears */}
      {createBodyPart('leftEar', [0.05, 0.2, 0.1], [-0.3, 2, 0])}
      {createBodyPart('rightEar', [0.05, 0.2, 0.1], [0.3, 2, 0])}
      {/* Nose */}
      {createBodyPart('nose', [0.1, 0.1, 0.1], [0, 2, 0.25])}

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

useGLTF.preload('/models/patient/patient.glb');
