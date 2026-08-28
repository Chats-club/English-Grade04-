export const conversations = [
  // Activity 4 (Listen and tick) — audio script from the teacher's guide,
  // verbatim. Key: 1.b 2.b
  {
    id: "act4-1",
    scene: "Dialogue 1 · 9:00 or 9:15?",
    lines: [
      { speaker: "A", text: "Let's play a game." },
      { speaker: "B", text: "OK!" },
      { speaker: "A", text: "Look. What time is it?" },
      { speaker: "B", text: "It's ___." },
      { speaker: "A", text: "Very good!" },
    ],
    answer: "nine fifteen",
    options: ["nine o'clock", "nine fifteen"],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2 · 4:00 or 4:30?",
    lines: [
      { speaker: "A", text: "Now what time is it?" },
      { speaker: "B", text: "It's four o'clock." },
      { speaker: "A", text: "No it isn't. It's ___." },
    ],
    answer: "four thirty",
    options: ["four o'clock", "four thirty"],
  },

  // Activity 5 (Look, complete and read) — reconstructed to fit the answer
  // key: "1. ten  2. is it  3. What time; thirty  4. What time; four
  // forty-five". Items 3 and 4 have two blanks each, split into sequential
  // single-blank steps per the established pattern.
  {
    id: "act5-1",
    scene: "Clock · 10:00",
    lines: [{ speaker: "", text: "It's ___ o'clock." }],
    answer: "ten",
    options: ["ten", "nine", "eleven"],
  },
  {
    id: "act5-2",
    scene: "Clock · complete the question",
    lines: [
      { speaker: "A", text: "What time ___?" },
      { speaker: "B", text: "It's nine o'clock." },
    ],
    answer: "is it",
    options: ["is it", "was it", "will it"],
  },
  {
    id: "act5-3a",
    scene: "Clock · 10:30 · question",
    lines: [{ speaker: "A", text: "___ is it?" }],
    answer: "What time",
    options: ["What time", "When", "What"],
  },
  {
    id: "act5-3b",
    scene: "Clock · 10:30 · answer",
    lines: [
      { speaker: "A", text: "What time is it?" },
      { speaker: "B", text: "It's ten ___." },
    ],
    answer: "thirty",
    options: ["thirty", "fifteen", "forty-five"],
  },
  {
    id: "act5-4a",
    scene: "Clock · 4:45 · question",
    lines: [{ speaker: "A", text: "___ is it?" }],
    answer: "What time",
    options: ["What time", "When", "Where"],
  },
  {
    id: "act5-4b",
    scene: "Clock · 4:45 · answer",
    lines: [
      { speaker: "A", text: "What time is it?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "four forty-five",
    options: ["four forty-five", "four thirty", "five o'clock"],
  },
];

// Activity 6 (Let's play — "Which clock says...?") — a shared board of six
// lettered clocks, kept the same across rounds (matching the guide's note
// that "all the clocks on the board are kept for later use"). Round 3 uses
// clock E at 3:15 to match the guide's own worked example verbatim ("Minh
// says It's three fifteen... points at it and says It's clock E!").
export const clockBoard = [
  { letter: "A", time: "09:00" },
  { letter: "B", time: "09:15" },
  { letter: "C", time: "10:00" },
  { letter: "D", time: "10:30" },
  { letter: "E", time: "03:15" },
  { letter: "F", time: "04:30" },
];

export const clockFinder = {
  instruction: "Listen to the time, then tap the clock that shows it.",
  rounds: [
    { id: "r1", promptText: "nine fifteen", correctLetter: "B" },
    { id: "r2", promptText: "four thirty", correctLetter: "F" },
    { id: "r3", promptText: "three fifteen", correctLetter: "E" },
  ],
};

// Fun corner Option 1 ("Reorder the words") isn't built — needs a live
// drag-and-drop word-tile mechanic this app doesn't have yet.