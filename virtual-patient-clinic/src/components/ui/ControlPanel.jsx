'use client'

import { useState } from 'react'

export function ControlPanel({ activeTool, setActiveTool, isPanelOpen, setIsPanelOpen, examinationData }) {
  const [vitalSigns] = useState({
    heartRate: 72,
    bloodPressure: '120/80',
    respiration: 16,
    temperature: 37.0
  })

  const tools = [
    { id: 'stethoscope', name: 'Stethoscope', icon: '🎵' },
    { id: 'pulse', name: 'Pulse', icon: '💓' },
    { id: 'eye', name: 'Eye Exam', icon: '👁️' },
    { id: 'ear', name: 'Ear Exam', icon: '👂' },
    { id: 'vitals', name: 'Vitals', icon: '📊' }
  ]
// console.log("isOpenPanel = ",isPanelOpen)
  if (!isPanelOpen) return null

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/90 backdrop-blur-md border border-gray-600 rounded-2xl p-4 text-white min-w-[400px] shadow-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Medical Examination</h2>
        <button 
          onClick={() => setIsPanelOpen(false)}
          className="text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>
      </div>

      {/* Tools Row */}
      <div className="flex gap-2 justify-center mb-4">
        {tools.map((tool) => (
          <button
            key={tool.id}
            className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all ${
              activeTool === tool.id 
                ? 'border-green-500 bg-green-500/20 transform scale-105' 
                : 'border-transparent bg-gray-700/50 hover:border-blue-500'
            }`}
            onClick={() => setActiveTool(tool.id)}
          >
            <span className="text-xl mb-1">{tool.icon}</span>
            <span className="text-xs">{tool.name}</span>
          </button>
        ))}
      </div>
      
      {/* Examination Results */}
      <div className="bg-gray-800/50 rounded-lg p-3 mb-4">
        <h3 className="text-sm text-gray-400 mb-2">Examination Results</h3>
        <div className="text-sm space-y-1">
          {examinationData.map((result, index) => (
            <div key={index} className="flex items-center">
              <span className="text-green-400 mr-2">✓</span>
              {result}
            </div>
          ))}
          {examinationData.length === 0 && (
            <div className="text-gray-500 text-center py-2">
              No examinations performed yet
            </div>
          )}
        </div>
      </div>

      {/* Vital Signs */}
      <div className="text-center">
        <h3 className="text-sm text-gray-400 mb-2">Vital Signs</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-gray-800/50 rounded p-2">HR: {vitalSigns.heartRate} BPM</div>
          <div className="bg-gray-800/50 rounded p-2">BP: {vitalSigns.bloodPressure}</div>
          <div className="bg-gray-800/50 rounded p-2">Resp: {vitalSigns.respiration}/min</div>
          <div className="bg-gray-800/50 rounded p-2">Temp: {vitalSigns.temperature}°C</div>
        </div>
      </div>

      {/* Active Tool Status */}
      {activeTool && (
        <div className="mt-3 text-center text-blue-400 text-sm">
          Active: {tools.find(t => t.id === activeTool)?.name}
        </div>
      )}
    </div>
  )
}

// export function ControlPanel() {
//   const [activeTool, setActiveTool] = useState('stethoscope')
//   const [vitalSigns, setVitalSigns] = useState({
//     heartRate: 72,
//     bloodPressure: '120/80',
//     respiration: 16,
//     temperature: 37.0
//   })

//   const tools = [
//     { id: 'stethoscope', name: 'Stethoscope', icon: '🎵' },
//     { id: 'pulse', name: 'Pulse Check', icon: '💓' },
//     { id: 'eye', name: 'Eye Exam', icon: '👁️' },
//     { id: 'ear', name: 'Ear Exam', icon: '👂' },
//     { id: 'vitals', name: 'Vital Signs', icon: '📊' }
//   ]

//   return (
//     <div className="control-panel">
//       <div className="tools-container">
//         {tools.map((tool) => (
//           <button
//             key={tool.id}
//             className={`tool-button ${activeTool === tool.id ? 'active' : ''}`}
//             onClick={() => setActiveTool(tool.id)}
//           >
//             <span className="tool-icon">{tool.icon}</span>
//             <span className="tool-name">{tool.name}</span>
//           </button>
//         ))}
//       </div>
      
//       <div className="vital-signs">
//         <h3>Vital Signs</h3>
//         <div className="vitals-grid">
//           <div>Heart Rate: {vitalSigns.heartRate} BPM</div>
//           <div>BP: {vitalSigns.bloodPressure}</div>
//           <div>Respiration: {vitalSigns.respiration}/min</div>
//           <div>Temp: {vitalSigns.temperature}°C</div>
//         </div>
//       </div>

//       <style jsx>{`
//         .control-panel {
//           position: absolute;
//           bottom: 20px;
//           left: 50%;
//           transform: translateX(-50%);
//           background: rgba(15, 23, 42, 0.9);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255, 255, 255, 0.1);
//           border-radius: 16px;
//           padding: 16px;
//           color: white;
//           min-width: 400px;
//         }

//         .tools-container {
//           display: flex;
//           gap: 8px;
//           justify-content: center;
//           margin-bottom: 16px;
//         }

//         .tool-button {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           padding: 12px;
//           border: 2px solid transparent;
//           border-radius: 12px;
//           background: rgba(255, 255, 255, 0.1);
//           color: white;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           min-width: 80px;
//         }

//         .tool-button:hover {
//           border-color: #3b82f6;
//           transform: scale(1.05);
//         }

//         .tool-button.active {
//           border-color: #10b981;
//           background: rgba(16, 185, 129, 0.2);
//         }

//         .tool-icon {
//           font-size: 20px;
//           margin-bottom: 4px;
//         }

//         .tool-name {
//           font-size: 12px;
//           text-align: center;
//         }

//         .vital-signs h3 {
//           margin: 0 0 8px 0;
//           text-align: center;
//           font-size: 14px;
//           color: #94a3b8;
//         }

//         .vitals-grid {
//           display: grid;
//           grid-template-columns: 1fr 1fr;
//           gap: 8px;
//           font-size: 12px;
//         }

//         .vitals-grid div {
//           padding: 4px;
//           background: rgba(255, 255, 255, 0.05);
//           border-radius: 6px;
//           text-align: center;
//         }
//       `}</style>
//     </div>
//   )
// }