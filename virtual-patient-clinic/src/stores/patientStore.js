// src/stores/patientStore.js
import { create } from 'zustand';
import { patientCases } from '../lib/cases';

export const usePatientStore = create((set) => ({
  currentCase: null,
  isCaseSelected: false,
  activeTool: null,
  findingsHistory: [],
  isDiagnosisFinalized: false,

  // Action to set the current patient case
  setCurrentCase: (caseId) => {
    const selectedCase = patientCases.find(c => c.id === caseId);
    set({
      currentCase: selectedCase,
      isCaseSelected: true,
      findingsHistory: [], // Reset history for new case
      isDiagnosisFinalized: false, // Reset diagnosis state
    });
  },

  // Action to set the active medical tool
  setActiveTool: (tool) => set({ activeTool: tool }),

  // Action to add a new finding to the history
  addFinding: (findingText) => {
    set((state) => ({
      findingsHistory: [...state.findingsHistory, findingText],
    }));
  },

  // Action to finalize the diagnosis
  finalizeDiagnosis: () => set({ isDiagnosisFinalized: true }),

  // Action to reset the simulation to the case selection screen
  reset: () => set({
    currentCase: null,
    isCaseSelected: false,
    activeTool: null,
    findingsHistory: [],
    isDiagnosisFinalized: false,
  }),
}));
