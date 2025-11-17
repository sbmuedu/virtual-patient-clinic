// components/scene/Room.js
import { useGLTF } from '@react-three/drei';

export function Room() {
  const { scene } = useGLTF('/models/room/over_bed-table.glb');
  return <primitive object={scene} />;
}
