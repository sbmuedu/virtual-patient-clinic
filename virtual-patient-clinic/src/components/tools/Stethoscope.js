// components/tools/Stethoscope.js
import { useRef, useState } from 'react'
import { useDrag } from '@use-gesture/react'
import { useFrame, useThree } from '@react-three/fiber'
import { useBox } from '@react-three/cannon'

export function Stethoscope() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [2, 2, 0] }))
  const [isListening, setIsListening] = useState(false)
  const [currentSound, setCurrentSound] = useState(null)
  const { gl, camera } = useThree()

  const audioContext = useRef(null)
  const analyser = useRef(null)

  // مقداردهی اولیه Web Audio API
  const initAudio = () => {
    if (!audioContext.current) {
      audioContext.current = new (window.AudioContext || window.webkitAudioContext)()
      analyser.current = audioContext.current.createAnalyser()
    }
  }

  // پخش صداهای مختلف بدن
  const playBodySound = (bodyPart) => {
    initAudio()
    
    const sounds = {
      chest: '/sounds/heartbeat-normal.mp3',
      lungs: '/sounds/breathing-normal.mp3',
      abdomen: '/sounds/bowel-sounds.mp3'
    }

    if (sounds[bodyPart]) {
      const audio = new Audio(sounds[bodyPart])
      audio.loop = true
      audio.play()
      setCurrentSound(audio)
      setIsListening(true)
    }
  }

  // هندلر برای قرار دادن استتوسکوپ روی بدن
  const handleStethoscopePlacement = (bodyPart) => {
    playBodySound(bodyPart)
    
    // ویبره‌ای برای فیدبک لمسی
    if (navigator.vibrate) {
      navigator.vibrate(200)
    }
  }

  useFrame(() => {
    // تشخیص برخورد استتوسکوپ با بدن
    // (پیاده‌سازی collision detection)
  })

  return (
    <mesh ref={ref} castShadow>
      <cylinderGeometry args={[0.05, 0.1, 1, 8]} />
      <meshStandardMaterial color="silver" />
    </mesh>
  )
}