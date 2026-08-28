// Content source: Global Success Grade 4 (Book 2), Unit 19 "The Animal World", Lesson 1, Period 1
// Student's Book p.58, Teacher's guide p.243-245
// Target structure: What are these animals? / They're ___.

export const vocab = [
  { id: "giraffes", flag: "🦒", name: "giraffes" },
  { id: "hippos", flag: "🦛", name: "hippos" },
  { id: "lions", flag: "🦁", name: "lions" },
  { id: "crocodiles", flag: "🐊", name: "crocodiles" },
];

export const matchRightOrder = ["lions", "giraffes", "crocodiles", "hippos"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Ben & Ben's mother · a",
    lines: [
      { speaker: "Ben", text: "Mum, what are these animals?" },
      { speaker: "Ben's mother", text: "They're ___, dear." },
    ],
    answer: "giraffes",
    options: ["giraffes", "hippos", "lions"],
  },
  {
    id: "act1-b",
    scene: "Ben & Ben's mother · b",
    lines: [
      { speaker: "Ben", text: "And what are these animals?" },
      { speaker: "Ben's mother", text: "They're ___." },
    ],
    answer: "hippos",
    options: ["hippos", "giraffes", "crocodiles"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What are these animals?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "giraffes",
    options: ["giraffes", "hippos", "lions"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What are these animals?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "hippos",
    options: ["hippos", "crocodiles", "giraffes"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What are these animals?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "lions",
    options: ["lions", "hippos", "crocodiles"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What are these animals?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "crocodiles",
    options: ["crocodiles", "lions", "giraffes"],
  },
  {
    id: "talk-lions",
    scene: "Let's talk · lions",
    lines: [
      { speaker: "A", text: "What are these animals?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "lions",
    options: ["lions", "giraffes", "hippos"],
  },
  {
    id: "talk-crocodiles",
    scene: "Let's talk · crocodiles",
    lines: [
      { speaker: "A", text: "What are these animals?" },
      { speaker: "B", text: "They're ___." },
    ],
    answer: "crocodiles",
    options: ["crocodiles", "lions", "hippos"],
  },
];

// Games section isn't built — a live team quiz, a live memory-recall
// game, and reflection questions with no checkable content.