// Content source: Global Success Grade 4 (Book 2), Unit 13 "Appearance", Lesson 2, Period 3
// Student's Book p.20, Audio tracks 26-27, Teacher's guide p.171-172
// Target structure: What does he/she look like? / He/She has ___.

export const vocab = [
  { id: "short-hair", flag: "💇", name: "short hair" },
  { id: "long-hair", flag: "👩‍🦱", name: "long hair" },
  { id: "round-face", flag: "🙂", name: "a round face" },
  { id: "big-eyes", flag: "👀", name: "big eyes" },
];

export const matchRightOrder = ["a round face", "short hair", "big eyes", "long hair"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Bill & Mai · a",
    lines: [
      { speaker: "Bill", text: "How old is your brother, Mai?" },
      { speaker: "Mai", text: "He's ___." },
    ],
    answer: "four",
    options: ["four", "five", "six"],
  },
  {
    id: "act1-b",
    scene: "Bill & Mai · b",
    lines: [
      { speaker: "Bill", text: "What does he look like?" },
      { speaker: "Mai", text: "He has ___." },
    ],
    answer: "a round face",
    options: ["a round face", "short hair", "big eyes"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What does he look like?" },
      { speaker: "B", text: "He has ___." },
    ],
    answer: "short hair",
    options: ["short hair", "long hair", "a round face"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What does she look like?" },
      { speaker: "B", text: "She has ___." },
    ],
    answer: "long hair",
    options: ["long hair", "short hair", "big eyes"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What does he look like?" },
      { speaker: "B", text: "He has ___." },
    ],
    answer: "a round face",
    options: ["a round face", "big eyes", "long hair"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What does she look like?" },
      { speaker: "B", text: "She has ___." },
    ],
    answer: "big eyes",
    options: ["big eyes", "a round face", "short hair"],
  },
  {
    id: "talk-shorthair",
    scene: "Let's talk · short hair",
    lines: [
      { speaker: "A", text: "What does he look like?" },
      { speaker: "B", text: "He has ___." },
    ],
    answer: "short hair",
    options: ["short hair", "long hair", "a round face"],
  },
  {
    id: "talk-bigeyes",
    scene: "Let's talk · big eyes",
    lines: [
      { speaker: "A", text: "What does she look like?" },
      { speaker: "B", text: "She has ___." },
    ],
    answer: "big eyes",
    options: ["big eyes", "short hair", "long hair"],
  },
];

// Fun corner Options 1-3 aren't built — a live PPT quiz and a physical
// sentence-puzzle mechanic, plus reflection questions with no checkable
// content.