// Content source: Global Success Grade 4 (Book 2), Unit 14 "Daily Activities", Lesson 2, Period 4
// Student's Book p.27, Audio track 38, Teacher's guide p.182-184
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  {
    id: "act4-1",
    scene: "Exchange 1",
    lines: [
      { speaker: "A", text: "What do you do in the morning?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "wash my clothes",
    options: ["wash my clothes", "wash the dishes", "clean the floor"],
  },
  {
    id: "act4-2",
    scene: "Exchange 2",
    lines: [
      { speaker: "A", text: "What do you do at noon?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "wash the dishes",
    options: ["wash the dishes", "wash my clothes", "clean the floor"],
  },
  {
    id: "act4-3",
    scene: "Exchange 3",
    lines: [
      { speaker: "A", text: "What do you do in the afternoon?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "clean the floor",
    options: ["clean the floor", "wash the dishes", "help my mum with the cooking"],
  },
  {
    id: "act4-4",
    scene: "Exchange 4",
    lines: [
      { speaker: "A", text: "What do you do in the evening?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "help my mum with the cooking",
    options: ["help my mum with the cooking", "clean the floor", "wash my clothes"],
  },
  {
    id: "act5-1a",
    scene: "Exchange 1 · question",
    lines: [{ speaker: "A", text: "___ do you do in the morning?" }],
    answer: "What",
    options: ["What", "When", "Where"],
  },
  {
    id: "act5-1b",
    scene: "Exchange 1 · answer",
    lines: [
      { speaker: "A", text: "What do you do in the morning?" },
      { speaker: "B", text: "I wash the ___." },
    ],
    answer: "clothes",
    options: ["clothes", "dishes", "floor"],
  },
  {
    id: "act5-2",
    scene: "Exchange 2",
    lines: [
      { speaker: "A", text: "What do you do at noon?" },
      { speaker: "B", text: "I wash the ___." },
    ],
    answer: "dishes",
    options: ["dishes", "clothes", "floor"],
  },
];

// Not built:
// - Activity 6 "Let's play" (Miming game) — needs a live mime/guess
//   mechanic this app doesn't have.
// - Fun corner Options 1-2 — a live PPT quiz and reflection questions
//   with no checkable content.