// src/components/ui/ToolPalette.js
'use client';
import React from 'react';
import { usePatientStore } from '../../stores/patientStore';

const TOOLS = ['Stethoscope', 'Otoscope', 'Ophthalmoscope'];

const ToolPalette = () => {
  const { activeTool, setActiveTool, finalizeDiagnosis } = usePatientStore();

  return (
    <div className="absolute top-4 right-4 z-10 p-2 bg-gray-800 bg-opacity-80 rounded-lg shadow-lg">
      <div className="flex items-center space-x-2">
        {TOOLS.map((tool) => (
          <button
            key={tool}
            onClick={() => setActiveTool(tool)}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
              activeTool === tool
                ? 'bg-cyan-500 text-white shadow-lg'
                : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
            }`}
          >
            {tool}
          </button>
        ))}
        <button
            onClick={finalizeDiagnosis}
            className="px-4 py-2 text-sm font-semibold bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
            Finalize Diagnosis
        </button>
      </div>
    </div>
  );
};

export default ToolPalette;
