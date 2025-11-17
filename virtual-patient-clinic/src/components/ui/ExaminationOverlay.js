// components/ui/ExaminationOverlay.js
import React from 'react';
import usePatientStore from '../../stores/patientStore';

export function ExaminationOverlay() {
  const { isOverlayVisible, overlayContent, hideOverlay } = usePatientStore();

  if (!isOverlayVisible) {
    return null;
  }

  return (
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 text-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Examination Findings</h2>
        <p>{overlayContent}</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 rounded-lg"
          onClick={hideOverlay}
        >
          Close
        </button>
      </div>
    </div>
  );
}
