// components/ui/ToolPalette.js
import React from 'react';

export function ToolPalette({ activeTool, setActiveTool }) {
  const tools = ['stethoscope', 'otoscope', 'ophthalmoscope'];

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-4 rounded-lg flex space-x-4">
      {tools.map((tool) => (
        <button
          key={tool}
          className={`px-4 py-2 rounded-lg ${
            activeTool === tool ? 'bg-blue-500' : 'bg-gray-700'
          }`}
          onClick={() => setActiveTool(tool)}
        >
          {tool.charAt(0).toUpperCase() + tool.slice(1)}
        </button>
      ))}
    </div>
  );
}
