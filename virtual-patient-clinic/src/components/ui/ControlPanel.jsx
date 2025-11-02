'use client'

import { useState } from 'react'

export function ControlPanel() {
  const [activeTool, setActiveTool] = useState('stethoscope')
  const [vitalSigns, setVitalSigns] = useState({
    heartRate: 72,
    bloodPressure: '120/80',
    respiration: 16,
    temperature: 37.0
  })

  const tools = [
    { id: 'stethoscope', name: 'Stethoscope', icon: '🎵' },
    { id: 'pulse', name: 'Pulse Check', icon: '💓' },
    { id: 'eye', name: 'Eye Exam', icon: '👁️' },
    { id: 'ear', name: 'Ear Exam', icon: '👂' },
    { id: 'vitals', name: 'Vital Signs', icon: '📊' }
  ]

  return (
    <div className="control-panel">
      <div className="tools-container">
        {tools.map((tool) => (
          <button
            key={tool.id}
            className={`tool-button ${activeTool === tool.id ? 'active' : ''}`}
            onClick={() => setActiveTool(tool.id)}
          >
            <span className="tool-icon">{tool.icon}</span>
            <span className="tool-name">{tool.name}</span>
          </button>
        ))}
      </div>
      
      <div className="vital-signs">
        <h3>Vital Signs</h3>
        <div className="vitals-grid">
          <div>Heart Rate: {vitalSigns.heartRate} BPM</div>
          <div>BP: {vitalSigns.bloodPressure}</div>
          <div>Respiration: {vitalSigns.respiration}/min</div>
          <div>Temp: {vitalSigns.temperature}°C</div>
        </div>
      </div>

      <style jsx>{`
        .control-panel {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px;
          color: white;
          min-width: 400px;
        }

        .tools-container {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 16px;
        }

        .tool-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 12px;
          border: 2px solid transparent;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          min-width: 80px;
        }

        .tool-button:hover {
          border-color: #3b82f6;
          transform: scale(1.05);
        }

        .tool-button.active {
          border-color: #10b981;
          background: rgba(16, 185, 129, 0.2);
        }

        .tool-icon {
          font-size: 20px;
          margin-bottom: 4px;
        }

        .tool-name {
          font-size: 12px;
          text-align: center;
        }

        .vital-signs h3 {
          margin: 0 0 8px 0;
          text-align: center;
          font-size: 14px;
          color: #94a3b8;
        }

        .vitals-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          font-size: 12px;
        }

        .vitals-grid div {
          padding: 4px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          text-align: center;
        }
      `}</style>
    </div>
  )
}