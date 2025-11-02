// components/tools/PulseSensor.js
import { useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export function PulseSensor() {
  const [pulseRate, setPulseRate] = useState(72)
  const [isMeasuring, setIsMeasuring] = useState(false)
  const measurementInterval = useRef(null)

  const startPulseMeasurement = () => {
    setIsMeasuring(true)
    
    // شبیه‌سازی ضربان نبض
    measurementInterval.current = setInterval(() => {
      const randomVariation = Math.floor(Math.random() * 10) - 5
      setPulseRate(prev => Math.max(60, Math.min(100, prev + randomVariation)))
    }, 1000)
  }

  const stopPulseMeasurement = () => {
    setIsMeasuring(false)
    if (measurementInterval.current) {
      clearInterval(measurementInterval.current)
    }
  }

  return (
    <group>
      <mesh
        onClick={isMeasuring ? stopPulseMeasurement : startPulseMeasurement}
      >
        <boxGeometry args={[0.3, 0.1, 0.3]} />
        <meshStandardMaterial color={isMeasuring ? 'red' : 'blue'} />
      </mesh>
      
      {/* نمایش ضربان */}
      {isMeasuring && (
        <Text position={[0, 0.2, 0]} fontSize={0.1} color="white">
          Pulse: {pulseRate} BPM
        </Text>
      )}
    </group>
  )
}