// Content source: Global Success Grade 4 (Book 2), Unit 14 "Daily Activities", Lesson 2, Period 3
// Student's Book p.26, Audio tracks 36-37, Teacher's guide p.182-184
// Target structure: What do you do in the morning? / I ___.

export const vocab = [
  { id: "wash-clothes", flag: "🧺", name: "wash the clothes" },
  { id: "clean-floor", flag: "🧹", name: "clean the floor" },
  { id: "help-cooking", flag: "🍳", name: "help with the cooking" },
  { id: "wash-dishes", flag: "🍽️", name: "wash the dishes" },
];

export const matchRightOrder = ["clean the floor", "wash the dishes", "wash the clothes", "help with the cooking"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Bill & Linh",
    lines: [
      { speaker: "Bill", text: "What do you do on Sundays, Linh?" },
      { speaker: "Linh", text: "I ___." },
    ],
    answer: "do the housework",
    options: ["do the housework", "wash the dishes", "clean the floor"],
  },
  {
    id: "act1-b",
    scene: "Bill & Mai",
    lines: [
      { speaker: "Bill", text: "What do you do in the morning?" },
      { speaker: "Mai", text: "I ___." },
    ],
    answer: "clean the floor",
    options: ["clean the floor", "wash the clothes", "wash the dishes"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What do you do in the morning?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "wash the clothes",
    options: ["wash the clothes", "clean the floor", "wash the dishes"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What do you do in the morning?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "clean the floor",
    options: ["clean the floor", "wash the clothes", "help with the cooking"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What do you do in the morning?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "help with the cooking",
    options: ["help with the cooking", "wash the dishes", "clean the floor"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What do you do in the morning?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "wash the dishes",
    options: ["wash the dishes", "wash the clothes", "help with the cooking"],
  },
  {
    id: "talk-cleanfloor",
    scene: "Let's talk · clean the floor",
    lines: [
      { speaker: "A", text: "What do you do in the afternoon?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "clean the floor",
    options: ["clean the floor", "wash the clothes", "wash the dishes"],
  },
  {
    id: "talk-washdishes",
    scene: "Let's talk · wash the dishes",
    lines: [
      { speaker: "A", text: "What do you do in the evening?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "wash the dishes",
    options: ["wash the dishes", "help with the cooking", "clean the floor"],
  },
];

// Fun corner Options 1-2 aren't built — a live PPT quiz and reflection
// questions with no checkable content.