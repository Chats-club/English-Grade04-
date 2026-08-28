// Content source: Global Success Grade 4, Unit 10 "Our Summer Holidays", Lesson 2, Period 3
// Student's Book p.70, Audio tracks 102-103, Teacher's guide p.129-131
// (Source document mislabels this "Lesson 1 – Period 1"; it is structurally
// the unit's 3rd period, following the standard 6-period pattern.)
// Target structure: Where were you last summer? / I was in ___.

export const vocab = [
  { id: "london", flag: "🏙️", name: "London" },
  { id: "sydney", flag: "🏙️", name: "Sydney" },
  { id: "tokyo", flag: "🏙️", name: "Tokyo" },
  { id: "bangkok", flag: "🏙️", name: "Bangkok" },
];

export const matchRightOrder = ["Tokyo", "London", "Bangkok", "Sydney"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Nam & Mary · a",
    lines: [
      { speaker: "Nam", text: "Were you in London last summer, Mary?" },
      { speaker: "Mary", text: "___" },
    ],
    answer: "No, I wasn't.",
    options: ["No, I wasn't.", "Yes, I was."],
  },
  {
    id: "act1-b",
    scene: "Nam & Mary · b",
    lines: [
      { speaker: "Nam", text: "Where were you last summer?" },
      { speaker: "Mary", text: "I was in ___." },
    ],
    answer: "Tokyo",
    options: ["Tokyo", "London", "Sydney"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Where were you last summer?" },
      { speaker: "B", text: "I was in ___." },
    ],
    answer: "London",
    options: ["London", "Sydney", "Tokyo"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Where were you last summer?" },
      { speaker: "B", text: "I was in ___." },
    ],
    answer: "Sydney",
    options: ["Sydney", "London", "Bangkok"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Where were you last summer?" },
      { speaker: "B", text: "I was in ___." },
    ],
    answer: "Tokyo",
    options: ["Tokyo", "Sydney", "Bangkok"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Where were you last summer?" },
      { speaker: "B", text: "I was in ___." },
    ],
    answer: "Bangkok",
    options: ["Bangkok", "Tokyo", "London"],
  },
  {
    id: "talk-sydney",
    scene: "Let's talk · Sydney",
    lines: [
      { speaker: "A", text: "Where were you last summer?" },
      { speaker: "B", text: "I was in ___." },
    ],
    answer: "Sydney",
    options: ["Sydney", "London", "Tokyo"],
  },
  {
    id: "talk-bangkok",
    scene: "Let's talk · Bangkok",
    lines: [
      { speaker: "A", text: "Where were you last summer?" },
      { speaker: "B", text: "I was in ___." },
    ],
    answer: "Bangkok",
    options: ["Bangkok", "Tokyo", "Sydney"],
  },
];

// Fun corner Options 1-2 aren't built — external ppt game and reflection
// questions with no checkable content.