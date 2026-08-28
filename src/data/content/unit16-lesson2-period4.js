// Content source: Global Success Grade 4 (Book 2), Unit 16 "Weather", Lesson 2, Period 4
// Student's Book p.43, Audio track 59, Teacher's guide p.213-215
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  {
    id: "act4-ben",
    scene: "Ben",
    lines: [
      { speaker: "A", text: "What's the weather like today, Ben?" },
      { speaker: "B", text: "It's sunny." },
      { speaker: "A", text: "Nice! Do you want to go to the bakery?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Great! Let's go.",
    options: ["Great! Let's go.", "Sorry, I can't."],
  },
  {
    id: "act4-lucy",
    scene: "Lucy",
    lines: [
      { speaker: "A", text: "Do you want to go to the water park, Lucy?" },
      { speaker: "B", text: "Sorry, I can't. I can't swim." },
      { speaker: "A", text: "Let's go to the bookshop." },
      { speaker: "B", text: "___" },
    ],
    answer: "OK. Let's go",
    options: ["OK. Let's go", "Sorry, I can't"],
  },
  {
    id: "act5-1a",
    scene: "Exchange 1 · weather",
    lines: [
      { speaker: "A", text: "What's the weather like today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "sunny",
    options: ["sunny", "rainy", "windy"],
  },
  {
    id: "act5-1b",
    scene: "Exchange 1 · response",
    lines: [
      { speaker: "A", text: "Do you want to go to the bakery?" },
      { speaker: "B", text: "___! Let's go." },
    ],
    answer: "Great",
    options: ["Great", "Sorry", "Yes"],
  },
  {
    id: "act5-2a",
    scene: "Exchange 2 · place",
    lines: [{ speaker: "A", text: "Do you want to go to the ___?" }],
    answer: "water park",
    options: ["water park", "bookshop", "bakery"],
  },
  {
    id: "act5-2b",
    scene: "Exchange 2 · response",
    lines: [{ speaker: "B", text: "Sorry, ___." }],
    answer: "I can't",
    options: ["I can't", "let's go", "great"],
  },
];

// Not built:
// - Activity 6 "Let's play" (Slap the board) — needs a live team
//   race-to-the-board mechanic this app doesn't have.
// - Fun corner Options 1-3 — external ppt and two live guessing games.