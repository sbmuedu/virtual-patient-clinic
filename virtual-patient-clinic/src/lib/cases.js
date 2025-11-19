// src/lib/cases.js
export const patientCases = [
    {
      id: 1,
      name: "John Smith",
      age: 58,
      gender: "Male",
      description: "Presents with a 3-day history of fever, productive cough, and shortness of breath. Reports feeling weak and fatigued.",
      vitals: {
        heartRate: 105, // bpm
        bloodPressure: "130/85", // mmHg
        respirationRate: 24, // bpm
        temperature: 38.5, // °C
      },
      findings: {
        cardiac: {
          location: "apex",
          sound: "/audio/heart_murmur.mp3",
          text: "Auscultation reveals a systolic murmur at the apex.",
        },
        respiratory: {
          location: "right-lower-lobe",
          sound: "/audio/lung_crackles.mp3",
          text: "Crackles heard in the right lower lobe, suggestive of consolidation.",
        },
        abdominal: {
          location: "ruq",
          sound: "/audio/bowel_sounds_normal.mp3",
          text: "Bowel sounds are normoactive.",
        },
      },
      diagnosis: "Pneumonia",
    },
    {
      id: 2,
      name: "Emily Johnson",
      age: 45,
      gender: "Female",
      description: "Complains of intermittent chest pain and palpitations, especially during exertion. Symptoms have been present for 2 months.",
      vitals: {
        heartRate: 90,
        bloodPressure: "140/90",
        respirationRate: 18,
        temperature: 37.0,
      },
      findings: {
        cardiac: {
          location: "apex",
          sound: "/audio/heart_arrhythmia.mp3",
          text: "Irregular heart rhythm with occasional skipped beats.",
        },
        respiratory: {
          location: "left-upper-lobe",
          sound: "/audio/lung_clear.mp3",
          text: "Lungs are clear to auscultation bilaterally.",
        },
        abdominal: {
            location: "luq",
            sound: "/audio/bowel_sounds_normal.mp3",
            text: "Abdomen is soft, non-tender.",
        },
      },
      diagnosis: "Atrial Fibrillation",
    },
    {
        id: 3,
        name: "Michael Brown",
        age: 62,
        gender: "Male",
        description: "Presents with a chronic cough and increased wheezing over the past week. Long-term smoker.",
        vitals: {
            heartRate: 95,
            bloodPressure: "135/88",
            respirationRate: 22,
            temperature: 37.2,
        },
        findings: {
            cardiac: {
                location: "base",
                sound: "/audio/heart_normal.mp3",
                text: "Heart sounds are regular and clear.",
            },
            respiratory: {
                location: "bilateral",
                sound: "/audio/lung_wheezing.mp3",
                text: "Expiratory wheezes heard throughout both lung fields.",
            },
            abdominal: {
                location: "epigastric",
                sound: "/audio/bowel_sounds_normal.mp3",
                text: "No abdominal tenderness or distention.",
            },
        },
        diagnosis: "COPD Exacerbation",
    }
  ];
