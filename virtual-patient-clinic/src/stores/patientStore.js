// stores/patientStore.js
import { create } from 'zustand';
import { patientCases } from '../lib/cases';

const usePatientStore = create((set) => ({
  cases: patientCases,
  currentCase: patientCases.case1,
  loadCase: (caseId) => set({ currentCase: patientCases[caseId] }),

  vitals: patientCases.case1.vitals,
  examinationArea: null,
  setExaminationArea: (area) => set({ examinationArea: area }),

  isOverlayVisible: false,
  overlayContent: null,
  showOverlay: (content) => set({ isOverlayVisible: true, overlayContent: content }),
  hideOverlay: () => set({ isOverlayVisible: false, overlayContent: null }),
}));

export default usePatientStore;
