// stores/patientStore.js
import { create } from 'zustand';

const usePatientStore = create((set) => ({
  vitals: {
    heartRate: 75,
    respirationRate: 16,
    bloodPressure: '120/80',
    temperature: 37,
  },
  examinationArea: null,
  setExaminationArea: (area) => set({ examinationArea: area }),
}));

export default usePatientStore;
