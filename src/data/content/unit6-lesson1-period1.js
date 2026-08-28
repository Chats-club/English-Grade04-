// Content source: Global Success Grade 4, Unit 6 "Our School Facilities", Lesson 1, Period 1
// Student's Book p.44, Audio tracks 58-59, Teacher's guide p.78-79
// Target structure: Where's your school? / It's in the ___.

export const vocab = [
  { id: "city", flag: "🏙️", name: "city" },
  { id: "mountains", flag: "⛰️", name: "mountains" },
  { id: "town", flag: "🏘️", name: "town" },
  { id: "village", flag: "🏡", name: "village" },
];

export const matchRightOrder = ["town", "city", "village", "mountains"];

// Activity 1 — verbatim from the guide. (A stray "Minh:" line appears
// before Lucy's question in the source before Context b — likely a
// leftover from an earlier draft, since the dialogue continues Lucy
// speaking to Hung; that line is omitted here.)
export const conversations = [
  {
    id: "act1-a",
    scene: "Hung & Lucy",
    lines: [
      { speaker: "Hung", text: "Where's your school, Lucy?" },
      { speaker: "Lucy", text: "It's in the ___." },
    ],
    answer: "city",
    options: ["city", "town", "village"],
  },
  {
    id: "act1-b",
    scene: "Lucy & Hung",
    lines: [
      { speaker: "Lucy", text: "And where's your school, Hung?" },
      { speaker: "Hung", text: "It's in the ___." },
    ],
    answer: "mountains",
    options: ["mountains", "city", "town"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Where's your school?" },
      { speaker: "B", text: "It's in the ___." },
    ],
    answer: "mountains",
    options: ["mountains", "village", "city"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Where's your school?" },
      { speaker: "B", text: "It's in the ___." },
    ],
    answer: "village",
    options: ["village", "town", "mountains"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Where's your school?" },
      { speaker: "B", text: "It's in the ___." },
    ],
    answer: "city",
    options: ["city", "town", "village"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Where's your school?" },
      { speaker: "B", text: "It's in the ___." },
    ],
    answer: "town",
    options: ["town", "city", "mountains"],
  },
  {
    id: "talk-1",
    scene: "Let's talk · 1",
    lines: [
      { speaker: "A", text: "Where's your school?" },
      { speaker: "B", text: "It's in the ___." },
    ],
    answer: "village",
    options: ["village", "city", "town"],
  },
  {
    id: "talk-2",
    scene: "Let's talk · 2",
    lines: [
      { speaker: "A", text: "Where's your school?" },
      { speaker: "B", text: "It's in the ___." },
    ],
    answer: "city",
    options: ["city", "mountains", "village"],
  },
];

// Fun corner "Doraemon Game" isn't built — needs a live PPT quiz mechanic.