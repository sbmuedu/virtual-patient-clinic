// src/components/ui/Dashboard.js
'use client';
import React from 'react';
import { usePatientStore } from '../../stores/patientStore';

const Dashboard = () => {
  const { currentCase, findingsHistory } = usePatientStore();

  if (!currentCase) {
    return null;
  }

  return (
    <div className="absolute top-4 left-4 z-10 p-4 bg-gray-800 bg-opacity-80 text-white rounded-lg shadow-lg w-80">
      <h2 className="text-lg font-bold border-b border-gray-600 pb-2 mb-2">{currentCase.name}</h2>
      <div className="text-sm">
        <p><span className="font-semibold">Age:</span> {currentCase.age}</p>
        <p><span className="font-semibold">Gender:</span> {currentCase.gender}</p>
        <p className="mt-2">{currentCase.description}</p>
      </div>
      <div className="mt-4">
        <h3 className="font-bold text-md mb-2">Patient Vitals</h3>
        <ul className="list-disc list-inside">
          <li>Heart Rate: {currentCase.vitals.heartRate} bpm</li>
          <li>Blood Pressure: {currentCase.vitals.bloodPressure} mmHg</li>
          <li>Respiration: {currentCase.vitals.respirationRate} bpm</li>
          <li>Temperature: {currentCase.vitals.temperature}°C</li>
        </ul>
      </div>
       <div className="mt-4">
        <h3 className="font-bold text-md mb-2">Examination Findings</h3>
        <div className="h-24 overflow-y-auto bg-gray-900 p-2 rounded">
            {findingsHistory.length > 0 ? (
                <ul>
                    {findingsHistory.map((finding, index) => (
                        <li key={index} className="text-xs">{finding}</li>
                    ))}
                </ul>
            ) : (
                <p className="text-xs text-gray-400">No findings yet. Use a tool to examine the patient.</p>
            )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
