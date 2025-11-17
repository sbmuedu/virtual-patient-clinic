// components/PatientModel.js
import { useRef } from 'react';
import { useBox } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';
import usePatientStore from '../stores/patientStore';

export function PatientModel() {
  const { nodes, materials } = useGLTF('/models/patient/patient.glb');
  const setExaminationArea = usePatientStore((state) => state.setExaminationArea);

  const createBodyPart = (name, geometry, material) => {
    const [ref] = useBox(() => ({
      isTrigger: true,
      onCollide: () => setExaminationArea(name),
    }));
    return <mesh ref={ref} geometry={geometry} material={material} />;
  };

  return (
    <group>
      {createBodyPart('head', nodes.head.geometry, materials.skin)}
      {createBodyPart('chest', nodes.chest.geometry, materials.skin)}
      {createBodyPart('leftArm', nodes.leftArm.geometry, materials.skin)}
      {createBodyPart('leftLeg', nodes.leftLeg.geometry, materials.skin)}
    </group>
  );
}
