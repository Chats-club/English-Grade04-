// Content source: Global Success Grade 4 (Book 2), Unit 13 "Appearance", Lesson 3, Period 5
// Student's Book p.22, Audio tracks 29-31, Teacher's guide p.174-175
// Phonics: letters l and r, words long/round.

export const phonicsDrill = [
  { id: "sound-l", flag: "🔤", name: "l" },
  { id: "sound-r", flag: "🔤", name: "r" },
  { id: "word-long", flag: "👩‍🦱", name: "long" },
  { id: "word-round", flag: "🙂", name: "round" },
  { id: "sentence-long", flag: "👩‍🦱", name: "My sister has long hair." },
  { id: "sentence-round", flag: "🙂", name: "My brother has round eyes." },
];

export const conversations = [
  {
    id: "act2-round",
    scene: "Listen · round",
    lines: [{ speaker: "", text: "My grandfather has a ___ face." }],
    answer: "round",
    options: ["round", "long", "big"],
  },
  {
    id: "act2-long",
    scene: "Listen · long",
    lines: [{ speaker: "", text: "My brother has ___ hands." }],
    answer: "long",
    options: ["long", "round", "short"],
  },
  {
    id: "chant-1",
    scene: "Chant · verse 1",
    lines: [{ speaker: "", text: "He's got ___ hair." }],
    answer: "long",
    options: ["long", "short", "round"],
  },
  {
    id: "chant-2",
    scene: "Chant · verse 2",
    lines: [{ speaker: "", text: "She's got a ___ face." }],
    answer: "round",
    options: ["round", "long", "big"],
  },
];

// Fun corner Options 1-3 aren't built — a live dice/scoring mechanic, a
// live slap-the-board sound-discrimination game, and reflection questions
// with no checkable content.