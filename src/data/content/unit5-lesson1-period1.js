// Content source: Global Success Grade 4, Unit 5 "Things We Can Do", Lesson 1, Period 1
// Student's Book p.34, Audio tracks 46-47, Teacher's guide p.68-70
// Target structure: Can you ___? / Yes, I can. / No, I can't.

export const vocab = [
  { id: "ride-a-bike", flag: "🚲", name: "ride a bike" },
  { id: "ride-a-horse", flag: "🐴", name: "ride a horse" },
  { id: "play-the-piano", flag: "🎹", name: "play the piano" },
  { id: "play-the-guitar", flag: "🎸", name: "play the guitar" },
];

export const matchRightOrder = [
  "play the piano",
  "ride a bike",
  "play the guitar",
  "ride a horse",
];

export const conversations = [
  {
    id: "act1-a-mary",
    scene: "Mary",
    lines: [{ speaker: "Mary", text: "I can ___." }],
    answer: "fly a kite",
    options: ["fly a kite", "skip", "ride a bike"],
  },
  {
    id: "act1-a-mai",
    scene: "Mai",
    lines: [{ speaker: "Mai", text: "I can ___." }],
    answer: "skip",
    options: ["skip", "fly a kite", "ride a bike"],
  },
  {
    id: "act1-b-mary",
    scene: "Minh & Mary",
    lines: [
      { speaker: "Minh", text: "Can you ride a bike?" },
      { speaker: "Mary", text: "___" },
    ],
    answer: "Yes, I can.",
    options: ["Yes, I can.", "No, I can't."],
  },
  {
    id: "act1-b-mai",
    scene: "Minh & Mai",
    lines: [
      { speaker: "Minh", text: "Can you ride a bike?" },
      { speaker: "Mai", text: "___" },
    ],
    answer: "No, I can't.",
    options: ["No, I can't.", "Yes, I can."],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Can you ride a bike?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, I can.",
    options: ["Yes, I can.", "No, I can't."],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Can you ride a horse?" },
      { speaker: "B", text: "___" },
    ],
    answer: "No, I can't.",
    options: ["No, I can't.", "Yes, I can."],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Can you play the piano?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, I can.",
    options: ["Yes, I can.", "No, I can't."],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Can you play the guitar?" },
      { speaker: "B", text: "___" },
    ],
    answer: "No, I can't.",
    options: ["No, I can't.", "Yes, I can."],
  },
  {
    id: "talk-1",
    scene: "Let's talk · 1",
    lines: [
      { speaker: "A", text: "Can you ride a bike?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, I can.",
    options: ["Yes, I can.", "No, I can't."],
  },
  {
    id: "talk-2",
    scene: "Let's talk · 2",
    lines: [
      { speaker: "A", text: "Can you ride a horse?" },
      { speaker: "B", text: "___" },
    ],
    answer: "No, I can't.",
    options: ["No, I can't.", "Yes, I can."],
  },
];

// Fun corner "Lucky number" isn't built — needs a live PPT quiz mechanic.