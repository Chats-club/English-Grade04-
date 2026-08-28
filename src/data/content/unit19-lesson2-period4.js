// Content source: Global Success Grade 4 (Book 2), Unit 19 "The Animal World", Lesson 2, Period 4
// Student's Book p.61, Teacher's guide p.249-251
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  {
    id: "act1-1",
    scene: "Dialogue 1",
    lines: [
      { speaker: "A", text: "Look at these animals, Mum. What are they?" },
      { speaker: "B", text: "They're giraffes, dear." },
      { speaker: "A", text: "I like them." },
      { speaker: "B", text: "Why do you like giraffes?" },
      { speaker: "A", text: "Because they ___." },
    ],
    answer: "run quickly",
    options: ["run quickly", "dance beautifully", "roar loudly"],
  },
  {
    id: "act1-2",
    scene: "Dialogue 2",
    lines: [
      { speaker: "A", text: "Oh, look at these peacocks." },
      { speaker: "B", text: "Where?" },
      { speaker: "A", text: "Over there, under the tree. I like them." },
      { speaker: "B", text: "Why do you like peacocks?" },
      { speaker: "A", text: "Because they ___." },
    ],
    answer: "dance beautifully",
    options: ["dance beautifully", "run quickly", "sing merrily"],
  },
  {
    id: "act2-1a",
    scene: "Dialogue 1 · animal",
    lines: [{ speaker: "A", text: "Why do you like ___?" }],
    answer: "lions",
    options: ["lions", "giraffes", "peacocks"],
  },
  {
    id: "act2-1b",
    scene: "Dialogue 1 · reason",
    lines: [
      { speaker: "A", text: "Why do you like lions?" },
      { speaker: "B", text: "___ they roar loudly." },
    ],
    answer: "Because",
    options: ["Because", "Why", "So"],
  },
  {
    id: "act2-2a",
    scene: "Dialogue 2 · question",
    lines: [{ speaker: "A", text: "What are these ___?" }],
    answer: "animals",
    options: ["animals", "birds", "peacocks"],
  },
  {
    id: "act2-2b",
    scene: "Dialogue 2 · question word",
    lines: [{ speaker: "A", text: "___ do you like birds?" }],
    answer: "Why",
    options: ["Why", "What", "How"],
  },
  {
    id: "act2-2c",
    scene: "Dialogue 2 · reason",
    lines: [
      { speaker: "A", text: "Why do you like birds?" },
      { speaker: "B", text: "Because they ___." },
    ],
    answer: "sing merrily",
    options: ["sing merrily", "roar loudly", "run quickly"],
  },
];

// Not built:
// - Activity 3 "Let's play" (Guessing animals) — needs a live team
//   describe-and-guess mechanic this app doesn't have.
// - Fun corner Options 1-3 — a live dice game, a live tic-tac-toe
//   mechanic, and reflection questions with no checkable content.