// components/ui/Dashboard.js
import React from 'react';
import usePatientStore from '../../stores/patientStore';

export function Dashboard() {
  const vitals = usePatientStore((state) => state.vitals);

  return (
    <div className="absolute top-4 left-4 bg-gray-800 text-white p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Patient Vitals</h2>
      <ul>
        <li>Heart Rate: {vitals.heartRate} bpm</li>
        <li>Respiration Rate: {vitals.respirationRate} bpm</li>
        <li>Blood Pressure: {vitals.bloodPressure}</li>
        <li>Temperature: {vitals.temperature}°C</li>
      </ul>
    </div>
  );
}
