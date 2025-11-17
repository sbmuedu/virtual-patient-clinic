// components/tools/Stethoscope.js
import { useRef, useEffect } from 'react';
import { useBox } from '@react-three/cannon';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import { useDrag } from '@use-gesture/react';
import usePatientStore from '../../stores/patientStore';

export function Stethoscope({ audioEngine, activeTool }) {
  const { size, viewport } = useThree();
  const [ref, api] = useBox(() => ({ type: 'Kinematic', position: [2, 2, 0] }));
  const { scene } = useGLTF('/models/stethoscope.glb');
  const { examinationArea, showOverlay, currentCase } = usePatientStore();

  const bind = useDrag(({ offset: [x, y] }) => {
    const [, , z] = ref.current.position;
    const newPosition = [
      (x / size.width) * viewport.width,
      (-y / size.height) * viewport.height,
      z,
    ];
    api.position.set(...newPosition);
  });

  useEffect(() => {
    if (examinationArea && activeTool === 'stethoscope') {
      handleStethoscopePlacement(examinationArea, ref.current.position);
    } else {
      audioEngine.stopAllSounds();
    }
  }, [examinationArea, activeTool]);

  const handleStethoscopePlacement = (bodyPart, position) => {
    audioEngine.stopAllSounds();

    const findings = currentCase.findings[bodyPart];

    if (!findings) {
      return;
    }

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
    showOverlay(findings);

    if (navigator.vibrate) {
      navigator.vibrate(200);
    }
  };

  return <primitive ref={ref} object={scene} {...bind()} castShadow />;
}
