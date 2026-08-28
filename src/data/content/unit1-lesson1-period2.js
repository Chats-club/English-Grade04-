// Content source: Global Success Grade 4, Unit 1 "My Friends", Lesson 1, Period 2
// Student's Book p.11, Audio tracks 8-9, Teacher's guide p.21-22
// Adds third-person structure: Where's he/she from? / He's/She's from ___.
//
// NOTE: The teacher's guide gives the audio script for Activity 4 verbatim,
// so that exercise is reproduced exactly. Activity 5 only lists picture cues
// and an answer key (not the printed sentences from the Student's Book), so
// the sentences below are reconstructed to match that key exactly:
// Key: 1. Viet Nam  2. from America  3. Where; Britain  4. from; from Australia

export const characters = [
  { id: "minh", name: "Minh", flag: "🇻🇳", country: "Viet Nam", initial: "M", accent: "navy" },
  { id: "ben", name: "Ben", flag: "🇦🇺", country: "Australia", initial: "B", accent: "mint" },
  { id: "mary", name: "Mary", flag: "🇺🇸", country: "America", initial: "M", accent: "coral" },
  { id: "lucy", name: "Lucy", flag: "🇬🇧", country: "Britain", initial: "L", accent: "gold" },
];

// Activity 4: Listen and number — audio script from the teacher's guide.
export const listenNumber = [
  { id: "ln1", promptText: "I'm from Australia.", correctId: "ben" },
  { id: "ln2", promptText: "I'm from Britain.", correctId: "lucy" },
  { id: "ln3", promptText: "I'm from America.", correctId: "mary" },
  { id: "ln4", promptText: "I'm from Viet Nam.", correctId: "minh" },
];

// Activity 5: Look, complete and read — reconstructed to fit the answer key.
// Key: 1. Viet Nam  2. from America  3. Where; Britain  4. from; from Australia
// Exchanges 3 and 4 have two blanks each, so each is split into two
// sequential single-blank steps (the exercise UI fills one blank at a time).
export const conversations = [
  {
    id: "act5-s1",
    scene: "Minh 🇻🇳",
    lines: [{ speaker: "", text: "He's from ___." }],
    answer: "Viet Nam",
    options: ["Viet Nam", "Australia", "America"],
  },
  {
    id: "act5-s2",
    scene: "Mary 🇺🇸",
    lines: [{ speaker: "", text: "She's ___." }],
    answer: "from America",
    options: ["from America", "from Britain", "from Viet Nam"],
  },
  {
    id: "act5-e3a",
    scene: "Lucy 🇬🇧 · question",
    lines: [{ speaker: "A", text: "___'s she from?" }],
    answer: "Where",
    options: ["Where", "Who", "What"],
  },
  {
    id: "act5-e3b",
    scene: "Lucy 🇬🇧 · answer",
    lines: [
      { speaker: "A", text: "Where's she from?" },
      { speaker: "B", text: "She's from ___." },
    ],
    answer: "Britain",
    options: ["Britain", "America", "Australia"],
  },
  {
    id: "act5-e4a",
    scene: "Ben 🇦🇺 · question",
    lines: [{ speaker: "A", text: "Where's he ___?" }],
    answer: "from",
    options: ["from", "at", "in"],
  },
  {
    id: "act5-e4b",
    scene: "Ben 🇦🇺 · answer",
    lines: [
      { speaker: "A", text: "Where's he from?" },
      { speaker: "B", text: "He's ___." },
    ],
    answer: "from Australia",
    options: ["from Australia", "from Britain", "from Viet Nam"],
  },
];

// Fun corner, Option 2: Board Game (handout attached to the teacher's guide).
// The handout is a physical board with a snaking path; single bordered
// tiles were traced into a linear path below in reading order (perimeter
// ring inward to Finish), skipping decorative art cells ("Learning Through
// Play" illustration, the child figures) that aren't part of the path.
// Country flag for "England" is mapped to 🇬🇧, matching Britain elsewhere
// in this lesson — the handout itself prints "England," not "Britain".
export const boardGame = {
  instructionSentence: "I'm ___. I'm from ___.",
  path: [
    { id: "start", type: "start", label: "Start" },
    { id: "t1", type: "character", name: "Ben", country: "America" },
    { id: "t2", type: "character", name: "Lan", country: "Viet Nam" },
    { id: "t3", type: "character", name: "Lucy", country: "Australia" },
    { id: "t4", type: "action", label: "Move ahead 3 spaces", action: "forward", amount: 3 },
    { id: "t5", type: "character", name: "Tony", country: "England" },
    { id: "t6", type: "character", name: "Lucy", country: "Australia" },
    { id: "t7", type: "character", name: "Hung", country: "Viet Nam" },
    { id: "t8", type: "action", label: "Move back 1 space", action: "backward", amount: 1 },
    { id: "t9", type: "character", name: "Ben", country: "America" },
    { id: "t10", type: "action", label: "Lose 1 turn", action: "loseTurn" },
    { id: "t11", type: "character", name: "Mary", country: "Australia" },
    { id: "t12", type: "character", name: "Tony", country: "England" },
    { id: "t13", type: "action", label: "Go back to the start", action: "goToStart" },
    { id: "t14", type: "action", label: "Move back 2 spaces", action: "backward", amount: 2 },
    { id: "t15", type: "action", label: "Move ahead 2 spaces", action: "forward", amount: 2 },
    { id: "t16", type: "character", name: "Tony", country: "England" },
    { id: "t17", type: "character", name: "Lucy", country: "Australia" },
    { id: "t18", type: "character", name: "Mai", country: "Viet Nam" },
    { id: "finish", type: "finish", label: "Finish" },
  ],
};
