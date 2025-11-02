'use client'

import { Canvas } from '@react-three/fiber'
import { Experience } from '@/components/scene/Experience'
import { ControlPanel } from '@/components/ui/ControlPanel'
import { Suspense } from 'react'

export default function Home() {
  return (
    <main className="h-screen w-full relative">
      <Canvas
        camera={{ 
          position: [0, 1.5, 4], 
          fov: 50,
          near: 0.1,
          far: 1000 
        }}
        shadows
        gl={{ 
          alpha: true,
          antialias: true 
        }}
        className="absolute top-0 left-0"
      >
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      
      <ControlPanel />
    </main>
  )
}