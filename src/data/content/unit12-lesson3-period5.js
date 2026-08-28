// Content source: Global Success Grade 4 (Book 2), Unit 12 "Jobs", Lesson 3, Period 5
// Student's Book p.16, Audio tracks 19-21, Teacher's guide p.163-164
// Phonics: letters ar and ur, words farmer/nurse.

export const phonicsDrill = [
  { id: "sound-ar", flag: "🔤", name: "ar" },
  { id: "sound-ur", flag: "🔤", name: "ur" },
  { id: "word-farmer", flag: "🌾", name: "farmer" },
  { id: "word-nurse", flag: "🏥", name: "nurse" },
  { id: "sentence-farmer", flag: "🌾", name: "My father is a farmer." },
  { id: "sentence-nurse", flag: "🏥", name: "My mother is a nurse." },
];

export const conversations = [
  {
    id: "act2-nurse",
    scene: "Listen · nurse",
    lines: [{ speaker: "", text: "His mother is a ___." }],
    answer: "nurse",
    options: ["nurse", "farmer", "actor"],
  },
  {
    id: "act2-farmer",
    scene: "Listen · farmer",
    lines: [{ speaker: "", text: "Her father is a ___." }],
    answer: "farmer",
    options: ["farmer", "nurse", "policeman"],
  },
  {
    id: "chant-1",
    scene: "Chant · verse 1a",
    lines: [{ speaker: "", text: "My father is a farmer. He works on a ___." }],
    answer: "farm",
    options: ["farm", "nursing home", "factory"],
  },
  {
    id: "chant-2",
    scene: "Chant · verse 1b",
    lines: [{ speaker: "", text: "My mother is a nurse. She works at a ___." }],
    answer: "nursing home",
    options: ["nursing home", "farm", "school"],
  },
  {
    id: "chant-3",
    scene: "Chant · verse 2a",
    lines: [{ speaker: "", text: "Our father is a nurse. He works at a ___." }],
    answer: "nursing home",
    options: ["nursing home", "farm", "factory"],
  },
  {
    id: "chant-4",
    scene: "Chant · verse 2b",
    lines: [{ speaker: "", text: "Our mother is a farmer. She works on a ___." }],
    answer: "farm",
    options: ["farm", "nursing home", "school"],
  },
];

// Fun corner Options 1-3 aren't built — external quiz site, a live
// sketch-and-guess game, and external ppt.