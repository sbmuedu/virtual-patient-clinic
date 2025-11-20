// components/PatientModel.js
import { useGLTF } from '@react-three/drei';
import {usePatientStore} from '../stores/patientStore';

export function PatientModel() {
  const setExaminationArea = usePatientStore((state) => state.setExaminationArea);
  const gltf = useGLTF('/models/patient/patient.glb');

  return (
    <group>
      <primitive object={gltf.scene} scale={1} position={[0, 0, 0]} />
    </group>
  );
}

useGLTF.preload('/models/patient/patient.glb');
