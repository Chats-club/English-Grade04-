// Content source: Global Success Grade 4, Unit 4 "My Birthday Party", Lesson 3, Period 5
// Student's Book p.32, Audio tracks 44-46, Teacher's guide p.64-65
// Phonics: letters j and w, words jam/water.

export const phonicsDrill = [
  { id: "sound-j", flag: "🔤", name: "j", audioText: "jay" },
  { id: "sound-w", flag: "🔤", name: "w", audioText: "double u" },
  { id: "word-jam", flag: "🍯", name: "jam" },
  { id: "word-water", flag: "💧", name: "water" },
  { id: "sentence-jam", flag: "🍯", name: "I like jam." },
  { id: "sentence-water", flag: "💧", name: "I want some water." },
];

export const conversations = [
  {
    id: "act2-water",
    scene: "Listen · water",
    lines: [{ speaker: "", text: "I want some ___." }],
    answer: "water",
    options: ["water", "juice", "lemonade"],
  },
  {
    id: "act2-jam",
    scene: "Listen · jam",
    lines: [{ speaker: "", text: "There is some ___ on the table." }],
    answer: "jam",
    options: ["jam", "grapes", "chips"],
  },
];

// Not built:
// - Activity 3 "Let's chant" — full lyrics aren't printed, though the
//   guide does quote two chant lines in its procedure text.
// - Fun corner "Minion Game" — needs a live PPT quiz mechanic.