// src/components/ui/CaseSelection.js
'use client';
import React from 'react';
import { patientCases } from '../../lib/cases';
import { usePatientStore } from '../../stores/patientStore';

const CaseSelection = () => {
  const { setCurrentCase } = usePatientStore();

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-2xl text-white">
        <h1 className="mb-6 text-3xl font-bold text-center text-cyan-400">Select a Patient Case</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {patientCases.map((pCase) => (
            <div
              key={pCase.id}
              className="p-6 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600 hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setCurrentCase(pCase.id)}
            >
              <h2 className="mb-2 text-xl font-semibold">{pCase.name}</h2>
              <p className="text-sm text-gray-400">{`Age: ${pCase.age}, Gender: ${pCase.gender}`}</p>
              <p className="mt-4 text-gray-300">{pCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseSelection;
