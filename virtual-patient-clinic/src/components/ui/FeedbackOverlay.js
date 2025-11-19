// src/components/ui/FeedbackOverlay.js
'use client';
import React from 'react';
import { usePatientStore } from '../../stores/patientStore';

const FeedbackOverlay = () => {
  const { isDiagnosisFinalized, currentCase, reset } = usePatientStore();

  if (!isDiagnosisFinalized || !currentCase) {
    return null;
  }

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="w-full max-w-2xl p-8 bg-gray-800 rounded-lg shadow-2xl text-white text-center">
        <h1 className="mb-4 text-3xl font-bold text-cyan-400">Diagnosis Feedback</h1>
        <div className="p-6 bg-gray-700 rounded-lg">
          <h2 className="mb-2 text-xl font-semibold">Correct Diagnosis:</h2>
          <p className="text-2xl font-bold text-green-400">{currentCase.diagnosis}</p>
          <p className="mt-4 text-gray-300">
            Based on the patient's presentation and findings, the most likely diagnosis is {currentCase.diagnosis}.
          </p>
        </div>
        <button
          onClick={reset}
          className="mt-6 px-6 py-3 font-semibold bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
        >
          Select Another Case
        </button>
      </div>
    </div>
  );
};

export default FeedbackOverlay;
