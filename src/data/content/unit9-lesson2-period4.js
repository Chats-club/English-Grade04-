// Content source: Global Success Grade 4, Unit 9 "Our Sports Day", Lesson 2, Period 4
// Student's Book p.65, Audio track 94, Teacher's guide p.120-121
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  {
    id: "act1-1",
    scene: "Dialogue 1",
    lines: [
      { speaker: "A", text: "Is your sports day in December?" },
      { speaker: "B", text: "No, it isn't." },
      { speaker: "A", text: "When's your sports day?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "October",
    options: ["October", "December", "September"],
  },
  {
    id: "act1-2",
    scene: "Dialogue 2",
    lines: [
      { speaker: "A", text: "When's your sports day? In November?" },
      { speaker: "B", text: "No, it isn't. It's in ___." },
      { speaker: "A", text: "Oh, it's soon." },
    ],
    answer: "September",
    options: ["September", "November", "October"],
  },
  {
    id: "act2-1a",
    scene: "Dialogue 1 · confirm",
    lines: [{ speaker: "A", text: "___, is your sports day in November?" }],
    answer: "Yes",
    options: ["Yes", "No", "Oh"],
  },
  {
    id: "act2-1b",
    scene: "Dialogue 1 · month",
    lines: [
      { speaker: "A", text: "Is your sports day in November?" },
      { speaker: "B", text: "Yes, it is. It's in ___." },
    ],
    answer: "November",
    options: ["November", "October", "September"],
  },
  {
    id: "act2-2a",
    scene: "Dialogue 2 · question 1",
    lines: [{ speaker: "A", text: "___ your sports day in December?" }],
    answer: "Is",
    options: ["Is", "When's", "Was"],
  },
  {
    id: "act2-2b",
    scene: "Dialogue 2 · question 2",
    lines: [{ speaker: "A", text: "___ your sports day?" }],
    answer: "When's",
    options: ["When's", "Is", "Where's"],
  },
  {
    id: "act2-2c",
    scene: "Dialogue 2 · answer",
    lines: [
      { speaker: "A", text: "When's your sports day?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "December",
    options: ["December", "November", "September"],
  },
];

// Not built:
// - Activity 3 "Let's play" (Bingo) — needs a live grid-marking mechanic
//   this app doesn't have (though the vocab it reviews is already
//   covered by the flashcard/matching steps in Periods 1 and 3).
// - Fun corner Options 1-2 — both need live PPT/team mechanics.