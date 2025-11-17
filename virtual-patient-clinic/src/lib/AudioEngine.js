// lib/AudioEngine.js
import * as THREE from 'three';
import { PositionalAudio } from '@react-three/drei';

const soundLibrary = {
  cardiac: {
    normal: '/sounds/cardiac/normal.mp3',
    murmur: '/sounds/cardiac/murmur.mp3',
    arrhythmia: '/sounds/cardiac/arrhythmia.mp3',
  },
  respiratory: {
    normal: '/sounds/respiratory/normal.mp3',
    wheezing: '/sounds/respiratory/wheezing.mp3',
    crackles: '/sounds/respiratory/crackles.mp3',
  },
  abdominal: {
    normal: '/sounds/abdominal/normal.mp3',
    hyperactive: '/sounds/abdominal/hyperactive.mp3',
    hypoactive: '/sounds/abdominal/hypoactive.mp3',
  },
};

export function createAudioEngine(camera) {
  const listener = new THREE.AudioListener();
  camera.add(listener);

  const sounds = {};

  return {
    playSound(soundType, soundName, position) {
      if (sounds[soundName]) {
        sounds[soundName].play();
        return;
      }

      const soundPath = soundLibrary[soundType]?.[soundName];
      if (!soundPath) {
        console.warn(`Sound not found: ${soundType}.${soundName}`);
        return;
      }

      const positionalAudio = new PositionalAudio(listener);
      const audioLoader = new THREE.AudioLoader();

      audioLoader.load(soundPath, (buffer) => {
        positionalAudio.setBuffer(buffer);
        positionalAudio.setRefDistance(1);
        positionalAudio.setLoop(true);
        positionalAudio.position.copy(position);
        camera.add(positionalAudio);
        positionalAudio.play();
        sounds[soundName] = positionalAudio;
      });
    },

    stopSound(soundName) {
      if (sounds[soundName]) {
        sounds[soundName].stop();
      }
    },

    stopAllSounds() {
      Object.values(sounds).forEach((sound) => sound.stop());
    },
  };
}
