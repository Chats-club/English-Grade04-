// Content source: Global Success Grade 4 (Book 2), Unit 13 "Appearance", Lesson 1, Period 1
// Student's Book p.18, Audio tracks 22-23, Teacher's guide p.167-168
// Target structure: What does he/she look like? / He's/She's ___.

export const vocab = [
  { id: "tall", flag: "📏", name: "tall" },
  { id: "short", flag: "📉", name: "short" },
  { id: "slim", flag: "🥒", name: "slim" },
  { id: "big", flag: "🐘", name: "big" },
];

export const matchRightOrder = ["slim", "tall", "big", "short"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Nam & Lucy · a",
    lines: [
      { speaker: "Nam", text: "Do you have a brother, Lucy?" },
      { speaker: "Lucy", text: "___" },
    ],
    answer: "Yes, I do.",
    options: ["Yes, I do.", "No, I don't."],
  },
  {
    id: "act1-b",
    scene: "Nam & Lucy · b",
    lines: [
      { speaker: "Nam", text: "What does he look like?" },
      { speaker: "Lucy", text: "He's ___." },
    ],
    answer: "tall",
    options: ["tall", "short", "slim"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What does she look like?" },
      { speaker: "B", text: "She's ___." },
    ],
    answer: "tall",
    options: ["tall", "short", "big"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What does he look like?" },
      { speaker: "B", text: "He's ___." },
    ],
    answer: "short",
    options: ["short", "tall", "slim"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What does she look like?" },
      { speaker: "B", text: "She's ___." },
    ],
    answer: "slim",
    options: ["slim", "big", "tall"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What does he look like?" },
      { speaker: "B", text: "He's ___." },
    ],
    answer: "big",
    options: ["big", "slim", "short"],
  },
  {
    id: "talk-tall",
    scene: "Let's talk · tall",
    lines: [
      { speaker: "A", text: "What does he look like?" },
      { speaker: "B", text: "He's ___." },
    ],
    answer: "tall",
    options: ["tall", "short", "big"],
  },
  {
    id: "talk-big",
    scene: "Let's talk · big",
    lines: [
      { speaker: "A", text: "What does she look like?" },
      { speaker: "B", text: "She's ___." },
    ],
    answer: "big",
    options: ["big", "slim", "tall"],
  },
  {
    id: "dodoes-1",
    scene: "Do/Does · 1",
    lines: [{ speaker: "A", text: "___ you have a sister?" }],
    answer: "Do",
    options: ["Do", "Does", "Is"],
  },
  {
    id: "dodoes-2",
    scene: "Do/Does · 2",
    lines: [{ speaker: "A", text: "___ he have a brother?" }],
    answer: "Does",
    options: ["Does", "Do", "Is"],
  },
  {
    id: "dodoes-3",
    scene: "Do/Does · 3",
    lines: [{ speaker: "A", text: "___ she look tall?" }],
    answer: "Does",
    options: ["Does", "Do", "Are"],
  },
  {
    id: "dodoes-4",
    scene: "Do/Does · 4",
    lines: [
      { speaker: "A", text: "Do you have a brother?" },
      { speaker: "B", text: "Yes, I ___." },
    ],
    answer: "do",
    options: ["do", "does", "am"],
  },
  {
    id: "dodoes-5",
    scene: "Do/Does · 5",
    lines: [
      { speaker: "A", text: "Does he have short hair?" },
      { speaker: "B", text: "Yes, he ___." },
    ],
    answer: "does",
    options: ["does", "do", "is"],
  },
];

// Fun corner Options 1-2 aren't built — a live PPT quiz and a physical
// spinner-plate game (this unit's Period 1 wheel game below is a digital
// take on the same "spin and describe" idea).
export const wheelJudgeIcon = {
  segments: [
    { word: "tall", icon: "📏" },
    { word: "short", icon: "📉" },
    { word: "slim", icon: "🥒" },
    { word: "big", icon: "🐘" },
  ],
  rounds: [
    { id: "r1", targetWord: "tall", audioText: "tall", isMatch: true },
    { id: "r2", targetWord: "short", audioText: "tall", isMatch: false, suggestedOptions: ["short", "slim", "big"] },
    { id: "r3", targetWord: "slim", audioText: "slim", isMatch: true },
    { id: "r4", targetWord: "big", audioText: "short", isMatch: false, suggestedOptions: ["big", "tall", "slim"] },
    { id: "r5", targetWord: "tall", audioText: "big", isMatch: false, suggestedOptions: ["tall", "short", "slim"] },
    { id: "r6", targetWord: "short", audioText: "short", isMatch: true },
  ],
};