// Content source: Global Success Grade 4, Unit 8 "My Favourite Subjects", Lesson 3, Period 5
// Student's Book p.60, Audio tracks 85-87, Teacher's guide p.99-111 (page
// numbers as printed in the source, likely a typo for ~109-111)
// Phonics: letter combos ke and te, words like/write.

export const phonicsDrill = [
  { id: "sound-ke", flag: "🔤", name: "ke" },
  { id: "sound-te", flag: "🔤", name: "te" },
  { id: "word-like", flag: "❤️", name: "like" },
  { id: "word-write", flag: "✍️", name: "write" },
  { id: "sentence-like", flag: "❤️", name: "I like English." },
  { id: "sentence-write", flag: "✍️", name: "Let's write." },
];

export const conversations = [
  {
    id: "act2-like",
    scene: "Listen · like",
    lines: [{ speaker: "", text: "I ___ music." }],
    answer: "like",
    options: ["like", "write", "want"],
  },
  {
    id: "act2-write",
    scene: "Listen · write",
    lines: [{ speaker: "", text: "I ___ in English." }],
    answer: "write",
    options: ["write", "like", "want"],
  },
];

// Fun corner, Option 2: "Cross-word game" — this period's own phonics
// target words (like/write) happen to share a letter ("i"), making a
// small real 2-word crossword: WRITE across, LIKE down, crossing at the
// "I" they have in common (WRITE's 3rd letter, LIKE's 2nd letter).
export const crossword = {
  size: { rows: 4, cols: 5 },
  words: [
    {
      id: "write",
      answer: "WRITE",
      hintText: "Let's write.",
      clue: "Let's ___! (5 letters)",
      direction: "across",
      row: 1,
      col: 0,
    },
    {
      id: "like",
      answer: "LIKE",
      hintText: "I like English.",
      clue: "I ___ English. (4 letters)",
      direction: "down",
      row: 0,
      col: 2,
    },
  ],
};

// Not built:
// - Activity 3 "Let's chant" — lyrics aren't printed in the guide.
// - Fun corner Options 1 and 3 — an external spelling-bee game link and
//   a live lip-reading warm-up game.