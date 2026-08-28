// Content source: Global Success Grade 4 (Book 2), Unit 17 "In the City", Lesson 2, Period 4
// Student's Book p.49, Teacher's guide p.223-225 (page numbers as printed
// in the source, likely mismatched — the doc labels this page "173, 174"
// which appears to be a leftover reference to a different unit)
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  {
    id: "act4-1",
    scene: "Dialogue 1",
    lines: [
      { speaker: "A", text: "How can I get to the swimming pool?" },
      { speaker: "B", text: "___ over there." },
      { speaker: "A", text: "Thank you." },
    ],
    answer: "Turn left",
    options: ["Turn left", "Turn round", "Go straight"],
  },
  {
    id: "act4-2",
    scene: "Dialogue 2",
    lines: [
      { speaker: "A", text: "I want to buy a cake." },
      { speaker: "B", text: "There's a bakery in Park Street." },
      { speaker: "A", text: "How can I get there?" },
      { speaker: "B", text: "___" },
      { speaker: "A", text: "Thank you." },
    ],
    answer: "Turn right.",
    options: ["Turn right.", "Go straight.", "Turn left."],
  },
  {
    id: "act5-1a",
    scene: "Dialogue 1 · place",
    lines: [{ speaker: "A", text: "How can I get to ___?" }],
    answer: "the shopping centre",
    options: ["the shopping centre", "the bakery", "the cinema"],
  },
  {
    id: "act5-1b",
    scene: "Dialogue 1 · direction",
    lines: [
      { speaker: "A", text: "How can I get to the shopping centre?" },
      { speaker: "B", text: "Turn ___." },
    ],
    answer: "left",
    options: ["left", "right", "round"],
  },
  {
    id: "act5-2a",
    scene: "Dialogue 2 · question word",
    lines: [{ speaker: "A", text: "___ can I get to the bakery?" }],
    answer: "How",
    options: ["How", "Where", "What"],
  },
  {
    id: "act5-2b",
    scene: "Dialogue 2 · direction",
    lines: [
      { speaker: "A", text: "How can I get to the bakery?" },
      { speaker: "B", text: "Turn ___." },
    ],
    answer: "right",
    options: ["right", "left", "round"],
  },
];

// Not built:
// - Activity 6 "Let's play" (Memory game) — needs a live flashcard
//   memory-recall mechanic this app doesn't have (already covered by the
//   vocab/match steps in Periods 1 and 3).
// - Fun corner Options 1-2 — a live PPT quiz and a live paired
//   map-directions activity.