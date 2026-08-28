// Content source: Global Success Grade 4 (Book 2), Unit 15 "My Family's Weekends", Lesson 2, Period 4
// Student's Book p.33, Teacher's guide p.212-213 (page numbers as printed
// in the source, likely mismatched from the actual Period 4 content)
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  {
    id: "act4-brother",
    scene: "Brother",
    lines: [
      { speaker: "A", text: "What does your brother do on Sundays?" },
      { speaker: "B", text: "He ___." },
    ],
    answer: "plays tennis",
    options: ["plays tennis", "cooks meals", "watches films"],
  },
  {
    id: "act4-sister",
    scene: "Sister",
    lines: [
      { speaker: "A", text: "What does your sister do on Sundays?" },
      { speaker: "B", text: "She ___." },
    ],
    answer: "cooks meals",
    options: ["cooks meals", "does yoga", "plays tennis"],
  },
  {
    id: "act4-father",
    scene: "Father",
    lines: [
      { speaker: "A", text: "What does your father do on Sundays?" },
      { speaker: "B", text: "He ___." },
    ],
    answer: "watches films",
    options: ["watches films", "plays tennis", "cooks meals"],
  },
  {
    id: "act4-mother",
    scene: "Mother",
    lines: [
      { speaker: "A", text: "What does your mother do on Sundays?" },
      { speaker: "B", text: "She ___." },
    ],
    answer: "does yoga",
    options: ["does yoga", "cooks meals", "watches films"],
  },
  {
    id: "act5-1a",
    scene: "Exchange 1 · place",
    lines: [{ speaker: "", text: "He goes to the ___." }],
    answer: "sports centre",
    options: ["sports centre", "cinema", "swimming pool"],
  },
  {
    id: "act5-1b",
    scene: "Exchange 1 · question verb",
    lines: [{ speaker: "A", text: "What does he ___ there?" }],
    answer: "do",
    options: ["do", "does", "doing"],
  },
  {
    id: "act5-1c",
    scene: "Exchange 1 · activity",
    lines: [{ speaker: "", text: "He plays ___." }],
    answer: "tennis",
    options: ["tennis", "yoga", "films"],
  },
  {
    id: "act5-2a",
    scene: "Exchange 2 · location",
    lines: [{ speaker: "A", text: "Is she at ___ on Saturdays?" }],
    answer: "home",
    options: ["home", "school", "work"],
  },
  {
    id: "act5-2b",
    scene: "Exchange 2 · question word",
    lines: [{ speaker: "A", text: "___ does she do?" }],
    answer: "What",
    options: ["What", "Where", "When"],
  },
  {
    id: "act5-2c",
    scene: "Exchange 2 · activity",
    lines: [{ speaker: "", text: "She ___." }],
    answer: "cooks meals",
    options: ["cooks meals", "does yoga", "watches films"],
  },
];

// Not built:
// - Activity 6 "Let's play" (Matching game) — needs a live card-flip
//   memory-match mechanic this app doesn't have (already covered by the
//   vocab/match steps in Periods 1 and 3).
// - Fun corner Options 1-2 — a live PPT "build the city" game and
//   reflection questions with no checkable content.