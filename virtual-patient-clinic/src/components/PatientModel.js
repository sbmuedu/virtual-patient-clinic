// components/PatientModel.js
import { useGLTF } from '@react-three/drei';
import {usePatientStore} from '../stores/patientStore';

export function PatientModel(props) {
  const setExaminationArea = usePatientStore((state) => state.setExaminationArea);
  const gltf = useGLTF('/models/patient/patient.glb');
  const { actions } = useAnimations(gltf.animations, gltf.scene);
  
  // Example: auto-play first animation
  useEffect(() => {
    const first = Object.values(actions)[0];
    if (first) first.play();
  }, [actions]);

  return (
    <group>
      <primitive object={gltf.scene} scale={1} position={[0, 0, 0]} {...props} />
    </group>
  );
}

useGLTF.preload('/models/patient/patient.glb');
