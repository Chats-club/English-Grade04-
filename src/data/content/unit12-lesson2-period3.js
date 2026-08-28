// Content source: Global Success Grade 4 (Book 2), Unit 12 "Jobs", Lesson 2, Period 3
// Student's Book p.14, Audio tracks 16-17, Teacher's guide p.159-160
// Target structure: Where does he/she work? / He/She works ___.

export const vocab = [
  { id: "nursing-home", flag: "🏥", name: "at a nursing home" },
  { id: "factory", flag: "🏭", name: "at a factory" },
  { id: "school", flag: "🏫", name: "at a school" },
  { id: "farm", flag: "🌾", name: "on a farm" },
];

export const matchRightOrder = ["at a school", "on a farm", "at a nursing home", "at a factory"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Bill & Mai · a",
    lines: [
      { speaker: "Bill", text: "What does your mother do?" },
      { speaker: "Mai", text: "She's ___." },
    ],
    answer: "a nurse",
    options: ["a nurse", "a farmer", "a policeman"],
  },
  {
    id: "act1-b",
    scene: "Bill & Mai · b",
    lines: [
      { speaker: "Bill", text: "Where does she work?" },
      { speaker: "Mai", text: "She works ___." },
    ],
    answer: "at a nursing home",
    options: ["at a nursing home", "at a factory", "on a farm"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Where does she work?" },
      { speaker: "B", text: "She works ___." },
    ],
    answer: "at a nursing home",
    options: ["at a nursing home", "at a school", "on a farm"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Where does he work?" },
      { speaker: "B", text: "He works ___." },
    ],
    answer: "at a factory",
    options: ["at a factory", "at a nursing home", "on a farm"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Where does she work?" },
      { speaker: "B", text: "She works ___." },
    ],
    answer: "at a school",
    options: ["at a school", "at a factory", "at a nursing home"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Where does he work?" },
      { speaker: "B", text: "He works ___." },
    ],
    answer: "on a farm",
    options: ["on a farm", "at a school", "at a factory"],
  },
  {
    id: "talk-factory",
    scene: "Let's talk · factory",
    lines: [
      { speaker: "A", text: "Where does he work?" },
      { speaker: "B", text: "He works ___." },
    ],
    answer: "at a factory",
    options: ["at a factory", "on a farm", "at a school"],
  },
  {
    id: "talk-farm",
    scene: "Let's talk · farm",
    lines: [
      { speaker: "A", text: "Where does he work?" },
      { speaker: "B", text: "He works ___." },
    ],
    answer: "on a farm",
    options: ["on a farm", "at a factory", "at a nursing home"],
  },
];

// Fun corner Options 1-3 aren't built — external ppt, external website,
// and a live flashcard-swap mechanic.