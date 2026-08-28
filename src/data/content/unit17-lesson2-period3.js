// Content source: Global Success Grade 4 (Book 2), Unit 17 "In the City", Lesson 2, Period 3
// Student's Book p.48, Teacher's guide p.223-225
// Target structure: How can I get to the ___? / ___.
// (Same 3 direction words from Period 1 reused here in a new sentence
// structure, plus "turn round" as the one genuinely new word.)

export const vocab = [
  { id: "go-straight", flag: "⬆️", name: "go straight" },
  { id: "turn-right", flag: "➡️", name: "turn right" },
  { id: "turn-left", flag: "⬅️", name: "turn left" },
  { id: "turn-round", flag: "🔄", name: "turn round" },
];

export const matchRightOrder = ["turn round", "go straight", "turn left", "turn right"];

export const conversations = [
  {
    id: "act1-b",
    scene: "Mary & Man",
    lines: [
      { speaker: "Mary", text: "How can we get there?" },
      { speaker: "Man", text: "___" },
      { speaker: "Mary", text: "Thank you." },
    ],
    answer: "Go straight and turn left.",
    options: ["Go straight and turn left.", "Turn right.", "Turn round."],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "How can I get to the bookshop?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Go straight.",
    options: ["Go straight.", "Turn right.", "Turn left."],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "How can I get to the supermarket?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Turn right.",
    options: ["Turn right.", "Go straight.", "Turn round."],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "How can I get to the cinema?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Turn left.",
    options: ["Turn left.", "Turn right.", "Go straight."],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "How can I get to the bakery?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Turn round.",
    options: ["Turn round.", "Turn left.", "Go straight."],
  },
  {
    id: "talk-cinema",
    scene: "Let's talk · cinema",
    lines: [
      { speaker: "A", text: "How can I get to the cinema?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Turn left.",
    options: ["Turn left.", "Turn right.", "Go straight."],
  },
  {
    id: "talk-bakery",
    scene: "Let's talk · bakery",
    lines: [
      { speaker: "A", text: "How can I get to the bakery?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Turn round.",
    options: ["Turn round.", "Turn right.", "Go straight."],
  },
];

// Games section isn't built — a live team-race board mechanic and a live
// miming/guessing game.