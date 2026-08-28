// Content source: Global Success Grade 4 (Book 2), Unit 14 "Daily Activities", Lesson 1, Period 1
// Student's Book p.24, Audio tracks 32-33, Teacher's guide p.178-180
// Target structure: When do you watch TV? / I watch TV ___.

export const vocab = [
  { id: "morning", flag: "🌅", name: "in the morning" },
  { id: "noon", flag: "☀️", name: "at noon" },
  { id: "afternoon", flag: "🌤️", name: "in the afternoon" },
  { id: "evening", flag: "🌆", name: "in the evening" },
];

export const matchRightOrder = ["in the afternoon", "at noon", "in the evening", "in the morning"];

export const conversations = [
  {
    id: "act1-b",
    scene: "Ben & Mai",
    lines: [
      { speaker: "Ben", text: "When do you watch TV?" },
      { speaker: "Mai", text: "I watch TV ___." },
    ],
    answer: "in the evening",
    options: ["in the evening", "at noon", "in the morning"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "When do you watch TV?" },
      { speaker: "B", text: "I watch TV ___." },
    ],
    answer: "in the morning",
    options: ["in the morning", "at noon", "in the evening"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "When do you watch TV?" },
      { speaker: "B", text: "I watch TV ___." },
    ],
    answer: "at noon",
    options: ["at noon", "in the morning", "in the afternoon"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "When do you watch TV?" },
      { speaker: "B", text: "I watch TV ___." },
    ],
    answer: "in the afternoon",
    options: ["in the afternoon", "at noon", "in the evening"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "When do you watch TV?" },
      { speaker: "B", text: "I watch TV ___." },
    ],
    answer: "in the evening",
    options: ["in the evening", "in the afternoon", "at noon"],
  },
  {
    id: "talk-morning",
    scene: "Let's talk · morning",
    lines: [
      { speaker: "A", text: "When do you watch TV?" },
      { speaker: "B", text: "I watch TV ___." },
    ],
    answer: "in the morning",
    options: ["in the morning", "in the evening", "at noon"],
  },
  {
    id: "talk-noon",
    scene: "Let's talk · noon",
    lines: [
      { speaker: "A", text: "When do you watch TV?" },
      { speaker: "B", text: "I watch TV ___." },
    ],
    answer: "at noon",
    options: ["at noon", "in the afternoon", "in the morning"],
  },
  {
    id: "inat-1",
    scene: "In or At? · 1",
    lines: [{ speaker: "", text: "I watch TV ___ the morning." }],
    answer: "in",
    options: ["in", "at", "on"],
  },
  {
    id: "inat-2",
    scene: "In or At? · 2",
    lines: [{ speaker: "", text: "I watch TV ___ noon." }],
    answer: "at",
    options: ["at", "in", "on"],
  },
  {
    id: "inat-3",
    scene: "In or At? · 3",
    lines: [{ speaker: "", text: "I watch TV ___ the afternoon." }],
    answer: "in",
    options: ["in", "at", "on"],
  },
  {
    id: "inat-4",
    scene: "In or At? · 4",
    lines: [{ speaker: "", text: "I watch TV ___ the evening." }],
    answer: "in",
    options: ["in", "at", "on"],
  },
];

// Fun corner Options 1-2 aren't built — a live PPT quiz and reflection
// questions with no checkable content.