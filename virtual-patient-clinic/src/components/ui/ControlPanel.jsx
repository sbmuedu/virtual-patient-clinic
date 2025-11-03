'use client'

import { useState, useEffect } from 'react'

export function ControlPanel({ activeTool, setActiveTool, isPanelOpen, setIsPanelOpen, examinationData }) {
  const [vitalSigns] = useState({
    heartRate: 72,
    bloodPressure: '120/80',
    respiration: 16,
    temperature: 37.0
  })

  const tools = [
    { id: 'stethoscope', name: 'Stethoscope', icon: '🎵', description: 'Listen to heart and lungs' },
    { id: 'pulse', name: 'Pulse', icon: '💓', description: 'Check pulse rate' },
    { id: 'eye', name: 'Eye Exam', icon: '👁️', description: 'Examine eyes and vision' },
    { id: 'ear', name: 'Ear Exam', icon: '👂', description: 'Examine ears and hearing' },
    { id: 'vitals', name: 'Vitals', icon: '📊', description: 'Check vital signs' }
  ]

  // Close panel when clicking outside (optional)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isPanelOpen && !event.target.closest('.control-panel') && !event.target.closest('canvas')) {
        setIsPanelOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isPanelOpen, setIsPanelOpen])

  if (!isPanelOpen) return null

  return (
    <div className="control-panel absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900/95 backdrop-blur-md border border-gray-600 rounded-2xl p-4 text-white min-w-[450px] shadow-2xl z-20">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-700">
        <h2 className="text-lg font-semibold">Medical Examination Panel</h2>
        <button 
          onClick={() => setIsPanelOpen(false)}
          className="text-gray-400 hover:text-white text-xl transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Tools Selection */}
      <div className="mb-4">
        <h3 className="text-sm text-gray-400 mb-2">Select Examination Tool:</h3>
        <div className="flex gap-2 justify-center">
        {tools.map((tool) => (
          <button
            key={tool.id}
              className={`flex flex-col items-center p-3 rounded-lg border-2 transition-all duration-200 ${
              activeTool === tool.id 
                  ? 'border-green-500 bg-green-500/20 transform scale-105 shadow-lg' 
                  : 'border-transparent bg-gray-700/50 hover:border-blue-500 hover:bg-gray-600/50'
            }`}
              onClick={() => {
                setActiveTool(tool.id)
                console.log(`Selected tool: ${tool.id}`)
              }}
              title={tool.description}
          >
            <span className="text-xl mb-1">{tool.icon}</span>
              <span className="text-xs font-medium">{tool.name}</span>
          </button>
        ))}
      </div>
      </div>

      {/* Active Tool Status */}
      {activeTool && (
        <div className="mb-4 p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
          <div className="text-center text-blue-300 text-sm">
            <strong>Active Tool:</strong> {tools.find(t => t.id === activeTool)?.name}
          </div>
          <div className="text-center text-blue-200 text-xs mt-1">
            {tools.find(t => t.id === activeTool)?.description}
          </div>
        </div>
      )}
      
      {/* Examination Results */}
      <div className="bg-gray-800/50 rounded-lg p-3 mb-4 max-h-32 overflow-y-auto">
        <h3 className="text-sm text-gray-400 mb-2">Examination Results:</h3>
        <div className="text-sm space-y-1">
          {examinationData.map((result, index) => (
            <div key={index} className="flex items-start p-2 bg-gray-700/30 rounded">
              <span className="text-green-400 mr-2 mt-0.5">✓</span>
              <span className="text-gray-200">{result}</span>
            </div>
          ))}
          {examinationData.length === 0 && (
            <div className="text-gray-500 text-center py-4 italic">
              No examinations performed yet. Select a tool and click on body parts.
            </div>
          )}
        </div>
      </div>

      {/* Vital Signs */}
      <div className="text-center bg-gray-800/30 rounded-lg p-3">
        <h3 className="text-sm text-gray-400 mb-2">Patient Vital Signs</h3>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="bg-gray-700/50 rounded p-2">
            <div className="text-gray-400 text-xs">Heart Rate</div>
            <div className="text-green-400 font-semibold">{vitalSigns.heartRate} BPM</div>
          </div>
          <div className="bg-gray-700/50 rounded p-2">
            <div className="text-gray-400 text-xs">Blood Pressure</div>
            <div className="text-green-400 font-semibold">{vitalSigns.bloodPressure}</div>
          </div>
          <div className="bg-gray-700/50 rounded p-2">
            <div className="text-gray-400 text-xs">Respiration</div>
            <div className="text-green-400 font-semibold">{vitalSigns.respiration}/min</div>
          </div>
          <div className="bg-gray-700/50 rounded p-2">
            <div className="text-gray-400 text-xs">Temperature</div>
            <div className="text-green-400 font-semibold">{vitalSigns.temperature}°C</div>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="mt-3 text-center text-xs text-gray-400">
        Click on patient body parts to examine with selected tool
        </div>
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