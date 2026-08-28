// Content source: Global Success Grade 4 (Book 2), Unit 17 "In the City", Lesson 1, Period 1
// Student's Book p.46, Audio tracks 63-64, Teacher's guide p.219-220
// Target structure: What does it say? / It says '___'.

export const vocab = [
  { id: "stop", flag: "🛑", name: "stop" },
  { id: "go-straight", flag: "⬆️", name: "go straight" },
  { id: "turn-right", flag: "➡️", name: "turn right" },
  { id: "turn-left", flag: "⬅️", name: "turn left" },
];

export const matchRightOrder = ["turn right", "stop", "turn left", "go straight"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Teacher & Bill",
    lines: [
      { speaker: "Teacher", text: "What does it say?" },
      { speaker: "Bill", text: "It says '___'." },
    ],
    answer: "go",
    options: ["go", "stop", "turn left"],
  },
  {
    id: "act1-b",
    scene: "Teacher & Mai",
    lines: [
      { speaker: "Teacher", text: "What does it say?" },
      { speaker: "Mai", text: "It says '___'." },
    ],
    answer: "stop",
    options: ["stop", "go", "turn right"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "stop",
    options: ["stop", "go straight", "turn right"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "go straight",
    options: ["go straight", "stop", "turn left"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "turn right",
    options: ["turn right", "turn left", "go straight"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "turn left",
    options: ["turn left", "turn right", "stop"],
  },
  {
    id: "talk-gostraight",
    scene: "Let's talk · go straight",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "go straight",
    options: ["go straight", "stop", "turn left"],
  },
  {
    id: "talk-turnright",
    scene: "Let's talk · turn right",
    lines: [
      { speaker: "A", text: "What does it say?" },
      { speaker: "B", text: "It says '___'." },
    ],
    answer: "turn right",
    options: ["turn right", "turn left", "stop"],
  },
];

// Fun corner Options 2-3 aren't built — a live PPT quiz and reflection
// questions with no checkable content.