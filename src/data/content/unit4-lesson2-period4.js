// Content source: Global Success Grade 4, Unit 4 "My Birthday Party", Lesson 2, Period 4
// Student's Book p.31, Audio track 43, Teacher's guide p.62-63
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  {
    id: "act4-1",
    scene: "Dialogue 1 · grapes or chips?",
    lines: [
      { speaker: "A", text: "Would you like some chips?" },
      { speaker: "B", text: "No, thanks." },
      { speaker: "A", text: "What do you want to eat?" },
      { speaker: "B", text: "I want some ___." },
    ],
    answer: "grapes",
    options: ["grapes", "chips"],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2 · lemonade or water?",
    lines: [
      { speaker: "A", text: "What do you want to eat?" },
      { speaker: "B", text: "I want some jam." },
      { speaker: "A", text: "What do you want to drink?" },
      { speaker: "B", text: "I want some ___." },
    ],
    answer: "lemonade",
    options: ["lemonade", "water"],
  },
  {
    id: "act5-1a",
    scene: "Dialogue 1 · question",
    lines: [{ speaker: "A", text: "___ do you want to eat, Mary?" }],
    answer: "What",
    options: ["What", "When", "Where"],
  },
  {
    id: "act5-1b",
    scene: "Dialogue 1 · answer",
    lines: [
      { speaker: "A", text: "What do you want to eat, Mary?" },
      { speaker: "B", text: "I want some ___." },
    ],
    answer: "grapes",
    options: ["grapes", "chips", "jam"],
  },
  {
    id: "act5-2a",
    scene: "Dialogue 2 · question",
    lines: [{ speaker: "A", text: "___ do you want to drink?" }],
    answer: "What",
    options: ["What", "When", "Where"],
  },
  {
    id: "act5-2b",
    scene: "Dialogue 2 · answer",
    lines: [
      { speaker: "A", text: "What do you want to drink?" },
      { speaker: "B", text: "I want some ___." },
    ],
    answer: "lemonade",
    options: ["lemonade", "water", "juice"],
  },
];

// Not built:
// - Activity 6 "Let's play" (Board race) — needs a live open-text-entry
//   race mechanic this app doesn't have.
// - Fun corner "Pine Tree Game" — needs a live PPT quiz mechanic.