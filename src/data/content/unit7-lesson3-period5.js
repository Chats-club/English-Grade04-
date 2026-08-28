// Content source: Global Success Grade 4, Unit 7 "Our Timetable", Lesson 3, Period 5
// Student's Book p.54, Audio tracks 75-77, Teacher's guide p.98-99
// Phonics: letter combos se and ce, words Vietnamese/science.

export const phonicsDrill = [
  { id: "sound-se", flag: "🔤", name: "se" },
  { id: "sound-ce", flag: "🔤", name: "ce" },
  { id: "word-vietnamese", flag: "🇻🇳", name: "Vietnamese" },
  { id: "word-science", flag: "🔬", name: "science" },
  { id: "sentence-vietnamese", flag: "🇻🇳", name: "When do you have Vietnamese?" },
  { id: "sentence-science", flag: "🔬", name: "We have science today." },
];

export const conversations = [
  {
    id: "act2-science",
    scene: "Listen · science",
    lines: [{ speaker: "", text: "When do you have ___?" }],
    answer: "science",
    options: ["science", "Vietnamese", "maths"],
  },
  {
    id: "act2-vietnamese",
    scene: "Listen · Vietnamese",
    lines: [{ speaker: "", text: "They have ___ today." }],
    answer: "Vietnamese",
    options: ["Vietnamese", "science", "English"],
  },
];

// Not built:
// - Activity 3 "Let's chant" — lyrics aren't printed in the guide.
// - Fun corner "Listen and clap" (an /s/ vs /z/ sound-discrimination
//   game) — needs live timed-audio playback this app doesn't have.