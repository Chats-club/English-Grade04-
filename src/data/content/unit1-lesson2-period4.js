// Content source: Global Success Grade 4, Unit 1 "My Friends", Lesson 2, Period 4
// Student's Book p.13, Audio track 12, Teacher's guide p.24-26
// Wrap-up period for Lesson 2 — revises all vocab from Lessons 1 and 2.

// Activity 6 ("Let's play — Find someone who is from...") is a physical
// mingling/interview game where pupils use flashcards to ask classmates
// "Where are you from?" That doesn't translate to a single-player web app,
// so it's repurposed here as a full 8-country vocabulary review (all
// countries taught across Lesson 1 + Lesson 2) using the same flashcard +
// matching exercises already built for single lessons.
export const vocab = [
  { id: "america", flag: "🇺🇸", name: "America" },
  { id: "australia", flag: "🇦🇺", name: "Australia" },
  { id: "britain", flag: "🇬🇧", name: "Britain" },
  { id: "vietnam", flag: "🇻🇳", name: "Viet Nam" },
  { id: "japan", flag: "🇯🇵", name: "Japan" },
  { id: "malaysia", flag: "🇲🇾", name: "Malaysia" },
  { id: "singapore", flag: "🇸🇬", name: "Singapore" },
  { id: "thailand", flag: "🇹🇭", name: "Thailand" },
];

export const matchRightOrder = [
  "Thailand",
  "America",
  "Japan",
  "Britain",
  "Singapore",
  "Viet Nam",
  "Australia",
  "Malaysia",
];

export const conversations = [
  // Activity 4 (Listen and tick) — two contexts, each choosing between two
  // pictures. Represented as a 2-option fill-in-the-blank, matching how
  // other "listening" tasks in this app are shown as text (no dialogue
  // audio is wired up, only single-word vocab has real audio).
  {
    id: "act4-1",
    scene: "Boy · Malaysia or Singapore?",
    lines: [
      { speaker: "A", text: "Who's that?" },
      { speaker: "B", text: "It's my new friend." },
      { speaker: "A", text: "Where's he from?" },
      { speaker: "B", text: "He's from ___." },
    ],
    answer: "Malaysia",
    options: ["Malaysia", "Singapore"],
  },
  {
    id: "act4-2",
    scene: "Girl · Thailand or Japan?",
    lines: [
      { speaker: "A", text: "Who's that?" },
      { speaker: "B", text: "It's my new friend." },
      { speaker: "A", text: "Where's she from?" },
      { speaker: "B", text: "She's from ___." },
    ],
    answer: "Thailand",
    options: ["Thailand", "Japan"],
  },

  // Activity 5 (Look, complete and read) — reconstructed to fit the
  // answer key: "1. Japan  2. from Singapore  3. Where's; from Thailand
  // 4. he from; He's from" (the guide's key for #4 is garbled/OCR-damaged
  // in the source; a grammatically sound two-blank exchange is used here
  // instead of guessing at the broken text).
  {
    id: "act5-s1",
    scene: "Boy 🇯🇵",
    lines: [{ speaker: "", text: "He's from ___." }],
    answer: "Japan",
    options: ["Japan", "Malaysia", "Thailand"],
  },
  {
    id: "act5-s2",
    scene: "Boy 🇸🇬",
    lines: [{ speaker: "", text: "He's ___." }],
    answer: "from Singapore",
    options: ["from Singapore", "from Malaysia", "from Japan"],
  },
  {
    id: "act5-e3a",
    scene: "Girl 🇹🇭 · question",
    lines: [{ speaker: "A", text: "___ she from?" }],
    answer: "Where's",
    options: ["Where's", "Who's", "What's"],
  },
  {
    id: "act5-e3b",
    scene: "Girl 🇹🇭 · answer",
    lines: [
      { speaker: "A", text: "Where's she from?" },
      { speaker: "B", text: "She's ___." },
    ],
    answer: "from Thailand",
    options: ["from Thailand", "from Japan", "from Malaysia"],
  },
  {
    id: "act5-e4a",
    scene: "Boy 🇲🇾 · question",
    lines: [{ speaker: "A", text: "Where's ___ from?" }],
    answer: "he",
    options: ["he", "she", "they"],
  },
  {
    id: "act5-e4b",
    scene: "Boy 🇲🇾 · answer",
    lines: [
      { speaker: "A", text: "Where's he from?" },
      { speaker: "B", text: "He's from ___." },
    ],
    answer: "Malaysia",
    options: ["Malaysia", "Singapore", "Thailand"],
  },
];

// Fun corner offers "Among us" (team quiz, no concrete question set given)
// and Role-play (open-ended, not exercise-able) — neither is built, same
// reasoning as the unbuilt fun-corner games in Periods 2 and 3.