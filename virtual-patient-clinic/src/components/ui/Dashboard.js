// components/ui/Dashboard.js
import React from 'react';
import usePatientStore from '../../stores/patientStore';

export function Dashboard() {
  const { vitals, cases, loadCase } = usePatientStore();

  return (
    <div className="absolute top-4 left-4 bg-gray-800 text-white p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Patient Vitals</h2>
      <ul>
        <li>Heart Rate: {vitals.heartRate} bpm</li>
        <li>Respiration Rate: {vitals.respirationRate} bpm</li>
        <li>Blood Pressure: {vitals.bloodPressure}</li>
        <li>Temperature: {vitals.temperature}°C</li>
      </ul>
      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Select Case</h3>
        <select
          className="bg-gray-700 text-white p-2 rounded-lg"
          onChange={(e) => loadCase(e.target.value)}
        >
          {Object.keys(cases).map((caseId) => (
            <option key={caseId} value={caseId}>
              {cases[caseId].name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
