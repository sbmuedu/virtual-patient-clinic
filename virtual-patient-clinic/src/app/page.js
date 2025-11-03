"use client";

import { Canvas } from "@react-three/fiber";
import { Experience } from "../components/scene/Experience";
import { ControlPanel } from "../components/ui/ControlPanel";
import { Suspense } from "react";
import { useState, useRef } from "react";

export default function Home() {
  const [activeTool, setActiveTool] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [examinationData, setExaminationData] = useState([]);
  const canvasRef = useRef();

  // Handle body part examination
  const handleBodyPartClick = (bodyPart, tool) => {
    console.log(`Clicked ${bodyPart} with tool: ${tool}`);

    // Always open panel when clicking body parts
    if (!isPanelOpen) {
      setIsPanelOpen(true);
    }

    if (!tool) {
      // If no tool selected, just open panel
      return;
    }
    // Generate examination results based on tool and body part
    const results = performExamination(bodyPart, tool);

    // Add to examination history
    // setExaminationData(prev => [...prev, results])
    setExaminationData((prev) => [...prev.slice(-4), results]); // Keep only last 5 results

    // Show feedback in console
    console.log(`Examined ${bodyPart} with ${tool}: ${results}`);
  };

  // Examination logic
  const performExamination = (bodyPart, tool) => {
    const examinations = {
      stethoscope: {
        chest: "Normal heart sounds, regular rhythm",
        abdomen: "Normal bowel sounds present",
        leftArm: "Radial pulse strong and regular",
        rightArm: "Radial pulse strong and regular",
      },
      pulse: {
        leftArm: "Pulse: 72 BPM, regular rhythm",
        rightArm: "Pulse: 72 BPM, regular rhythm",
        leftLeg: "Pedal pulse present",
        rightLeg: "Pedal pulse present",
      },
      eye: {
        leftEye: "Pupils equal, round, reactive to light",
        rightEye: "Visual acuity normal, no conjunctival injection",
        head: "Extraocular movements intact",
      },
      ear: {
        head: "Tympanic membranes normal, no discharge",
      },
      vitals: {
        chest: "Respiratory rate: 16/min, clear breath sounds",
        head: "Patient alert and oriented x3",
      },
    };

    return (
      examinations[tool]?.[bodyPart] ||
      `No significant findings in ${bodyPart} with ${tool}`
    );
  };

  // Handle canvas click (for opening panel)
  const handleCanvasClick = (event) => {
    // Only open panel if clicking on canvas background, not a 3D object
    if (event.target === event.currentTarget) {
      setIsPanelOpen(true);
    }
  };

  return (
    <main className="h-screen w-full relative">
      {/* Instruction overlay when panel is closed */}
      {!isPanelOpen && (
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-blue-600/80 text-white px-6 py-3 rounded-lg backdrop-blur-sm z-10">
          👆 Click on the patient to open examination panel
        </div>
      )}
      <div
        ref={canvasRef}
        className="w-full h-full"
        onClick={handleCanvasClick}
      >
        <Canvas
          camera={{
            position: [0, 1.5, 4],
            fov: 50,
            near: 0.1,
            far: 1000,
          }}
          shadows
          gl={{
            alpha: true,
            antialias: true,
          }}
          className="w-full h-full"
        >
          <Suspense fallback={null}>
            <Experience
              onBodyPartClick={handleBodyPartClick}
              activeTool={activeTool}
            />
          </Suspense>
        </Canvas>
      </div>

      <ControlPanel
        activeTool={activeTool}
        setActiveTool={setActiveTool}
        isPanelOpen={isPanelOpen}
        setIsPanelOpen={setIsPanelOpen}
        examinationData={examinationData}
      />
    </main>
  );
}

// export default function Home() {
//   return (
//     <main className="h-screen w-full relative">
//       <Canvas
//         camera={{
//           position: [0, 1.5, 4],
//           fov: 50,
//           near: 0.1,
//           far: 1000
//         }}
//         shadows
//         gl={{
//           alpha: true,
//           antialias: true
//         }}
//         className="absolute top-0 left-0"
//       >
//         <Suspense fallback={null}>
//           <Experience />
//         </Suspense>
//       </Canvas>

//       <ControlPanel />
//     </main>
//   )
// }
