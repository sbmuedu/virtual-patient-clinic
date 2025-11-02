// components/tools/EyeExaminer.js
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function EyeExaminer() {
  const [pupilSize, setPupilSize] = useState(3)
  const [eyeResponse, setEyeResponse] = useState('normal')

  const examineEye = (eyeType) => {
    // شبیه‌سازی واکنش مردمک به نور
    setPupilSize(prev => eyeType === 'light' ? 2 : 4)
    
    // واکنش‌های مختلف چشم
    const responses = {
      light: 'Pupil constricts normally',
      dark: 'Pupil dilates normally',
      follow: 'Eye follows movement normally'
    }
    
    setEyeResponse(responses[eyeType] || 'Normal response')
  }

  return (
    <group>
      <mesh onClick={() => examineEye('light')}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="white" />
        
        {/* مردمک */}
        <mesh position={[0, 0, 0.1]}>
          <circleGeometry args={[pupilSize / 20, 32]} />
          <meshStandardMaterial color="black" />
        </mesh>
      </mesh>
      
      <Text position={[0, -0.3, 0]} fontSize={0.08}>
        {eyeResponse}
      </Text>
    </group>
  )
}