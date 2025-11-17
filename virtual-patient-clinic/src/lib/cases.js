// lib/cases.js
export const patientCases = {
  case1: {
    name: 'Standard Healthy Patient',
    vitals: {
      heartRate: 75,
      respirationRate: 16,
      bloodPressure: '120/80',
      temperature: 37,
    },
    findings: {
      chest: 'Normal heart sounds, regular rhythm.',
      lungs: 'Clear breath sounds bilaterally.',
      abdomen: 'Normal bowel sounds.',
      leftEye: 'Pupils equal, round, reactive to light.',
      rightEye: 'Pupils equal, round, reactive to light.',
      leftEar: 'Tympanic membrane clear.',
      rightEar: 'Tympanic membrane clear.',
    },
  },
  case2: {
    name: 'Patient with Pneumonia',
    vitals: {
      heartRate: 95,
      respirationRate: 24,
      bloodPressure: '130/85',
      temperature: 38.5,
    },
    findings: {
      chest: 'Tachycardia, regular rhythm.',
      lungs: 'Crackles in the right lower lobe.',
      abdomen: 'Normal bowel sounds.',
      leftEye: 'Pupils equal, round, reactive to light.',
      rightEye: 'Pupils equal, round, reactive to light.',
      leftEar: 'Tympanic membrane clear.',
      rightEar: 'Tympanic membrane clear.',
    },
  },
};
