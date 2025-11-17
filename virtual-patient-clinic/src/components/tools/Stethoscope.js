// components/tools/Stethoscope.js
import { useRef, useEffect } from 'react';
import { useBox } from '@react-three/cannon';
import { useThree } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import usePatientStore from '../../stores/patientStore';

export function Stethoscope({ audioEngine }) {
  const { size, viewport } = useThree();
  const [ref, api] = useBox(() => ({ mass: 1, position: [2, 2, 0] }));
  const examinationArea = usePatientStore((state) => state.examinationArea);

  const bind = useDrag(({ offset: [x, y] }) => {
    const [, , z] = ref.current.position;
    const newPosition = [
      (x / size.width) * viewport.width,
      (-y / size.height) * viewport.height,
      z,
    ];
    api.position.set(...newPosition);
  });
  
  const handleStethoscopePlacement = (bodyPart, position) => {
    audioEngine.stopAllSounds();

    let soundType;
    let soundName;

    switch (bodyPart) {
      case 'chest':
        soundType = 'cardiac';
        soundName = 'normal';
        break;
      // Future implementation will differentiate between lungs and other chest sounds
      case 'lungs':
        soundType = 'respiratory';
        soundName = 'normal';
        break;
      case 'abdomen':
        soundType = 'abdominal';
        soundName = 'normal';
        break;
      default:
        return;
    }

    audioEngine.playSound(soundType, soundName, position);

    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
  };

  useEffect(() => {
    if (examinationArea) {
      handleStethoscopePlacement(examinationArea, ref.current.position);
    } else {
      audioEngine.stopAllSounds();
    }
  }, [examinationArea]);



  return (
    <group ref={ref} {...bind()} castShadow>
      <mesh>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 32]} />
        <meshStandardMaterial color="silver" />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.5, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}
