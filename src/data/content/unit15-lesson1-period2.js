// Content source: Global Success Grade 4 (Book 2), Unit 15 "My Family's Weekends", Lesson 1, Period 2
// Student's Book p.31, Audio tracks 43-44, Teacher's guide p.212-213
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  {
    id: "act4-1",
    scene: "Dialogue 1",
    lines: [
      { speaker: "A", text: "Is your sister at home on Saturdays?" },
      { speaker: "B", text: "No, she isn't." },
      { speaker: "A", text: "Where does she go?" },
      { speaker: "B", text: "She goes to the ___." },
    ],
    answer: "swimming pool",
    options: ["swimming pool", "cinema", "shopping centre"],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2",
    lines: [
      { speaker: "A", text: "Is your mother at home on Saturdays?" },
      { speaker: "B", text: "No, she isn't." },
      { speaker: "A", text: "Where does she go?" },
      { speaker: "B", text: "She goes to the ___." },
    ],
    answer: "shopping centre",
    options: ["shopping centre", "swimming pool", "sports centre"],
  },
  {
    id: "act5-1",
    scene: "Sentence 1",
    lines: [{ speaker: "", text: "My brother goes to the ___ on Saturdays." }],
    answer: "swimming pool",
    options: ["swimming pool", "cinema", "sports centre"],
  },
  {
    id: "act5-2",
    scene: "Sentence 2",
    lines: [{ speaker: "", text: "My sister goes to the ___ on Saturdays." }],
    answer: "cinema",
    options: ["cinema", "swimming pool", "shopping centre"],
  },
  {
    id: "act5-3a",
    scene: "Exchange 3 · verb",
    lines: [{ speaker: "", text: "He ___ to the sports centre." }],
    answer: "goes",
    options: ["goes", "go", "going"],
  },
  {
    id: "act5-3b",
    scene: "Exchange 3 · place",
    lines: [{ speaker: "", text: "He goes to the ___." }],
    answer: "sports centre",
    options: ["sports centre", "swimming pool", "cinema"],
  },
  {
    id: "act5-4a",
    scene: "Exchange 4 · question",
    lines: [{ speaker: "A", text: "___ does she go?" }],
    answer: "Where",
    options: ["Where", "When", "What"],
  },
  {
    id: "act5-4b",
    scene: "Exchange 4 · answer",
    lines: [
      { speaker: "A", text: "Where does she go?" },
      { speaker: "B", text: "___" },
    ],
    answer: "She goes to the shopping centre.",
    options: ["She goes to the shopping centre.", "She goes to the cinema."],
  },
];

// Not built:
// - Activity 6 "Let's sing" (song "Where do they go on Saturdays?") —
//   lyrics aren't printed in the guide.
// - Fun corner Options 1-2 — a live PPT quiz and reflection questions
//   with no checkable content.