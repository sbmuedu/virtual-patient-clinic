'use client'

import { createContext, useContext, useRef, useEffect } from 'react'
import * as Tone from 'tone'

const AudioContext = createContext()

export function AudioProvider({ children }) {
  const players = useRef({})
  const analysers = useRef({})

  useEffect(() => {
    // راه‌اندازی Tone.js
    Tone.start()

    // ایجاد پلیرهای صدا برای قسمت‌های مختلف بدن
    const soundFiles = {
      heart: {
        normal: '/sounds/heart/normal.mp3',
        murmur: '/sounds/heart/murmur.mp3',
        arrhythmia: '/sounds/heart/arrhythmia.mp3'
      },
      lungs: {
        normal: '/sounds/lungs/normal.mp3',
        wheezing: '/sounds/lungs/wheezing.mp3',
        crackles: '/sounds/lungs/crackles.mp3'
      },
      abdomen: {
        normal: '/sounds/abdomen/normal.mp3',
        hyperactive: '/sounds/abdomen/hyperactive.mp3'
      }
    }

    // لود صداها
    Object.entries(soundFiles).forEach(([organ, sounds]) => {
      players.current[organ] = {}
      Object.entries(sounds).forEach(([type, url]) => {
        players.current[organ][type] = new Tone.Player({
          url,
          autostart: false,
          loop: true
        }).toDestination()
      })
    })

    return () => {
      // پاکسازی
      Object.values(players.current).forEach(organ => {
        Object.values(organ).forEach(player => player.dispose())
      })
    }
  }, [])

  const playBodySound = (organ, soundType) => {
    if (players.current[organ]?.[soundType]) {
      // توقف تمام صداهای قبلی
      stopAllSounds()
      
      // پخش صدای جدید
      players.current[organ][soundType].start()
    }
  }

  const stopAllSounds = () => {
    Object.values(players.current).forEach(organ => {
      Object.values(organ).forEach(player => {
        player.stop()
      })
    })
  }

  const value = {
    playBodySound,
    stopAllSounds
  }

  return (
    <AudioContext.Provider value={value}>
      {children}
    </AudioContext.Provider>
  )
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider')
  }
  return context
}