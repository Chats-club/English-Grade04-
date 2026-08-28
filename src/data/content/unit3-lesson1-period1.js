export const vocab = [
  { id: "monday", flag: "📅", name: "Monday" },
  { id: "tuesday", flag: "📅", name: "Tuesday" },
  { id: "wednesday", flag: "📅", name: "Wednesday" },
  { id: "thursday", flag: "📅", name: "Thursday" },
  { id: "friday", flag: "📅", name: "Friday" },
  { id: "saturday", flag: "📅", name: "Saturday" },
  { id: "sunday", flag: "📅", name: "Sunday" },
];

export const matchRightOrder = [
  "Thursday",
  "Sunday",
  "Monday",
  "Friday",
  "Wednesday",
  "Saturday",
  "Tuesday",
];

export const conversations = [
  // Activity 1, Context a — verbatim from the guide.
  {
    id: "act1-context-a",
    scene: "Ms Hoa & Class",
    lines: [
      { speaker: "Ms Hoa", text: "Hi, class. What day is it today?" },
      { speaker: "Class", text: "It's ___." },
    ],
    answer: "Monday",
    options: ["Monday", "Tuesday", "Friday"],
  },
  // Activity 1, Context b — verbatim from the guide.
  {
    id: "act1-context-b",
    scene: "Bill & Lucy",
    lines: [
      { speaker: "Bill", text: "What day is it today?" },
      { speaker: "Lucy", text: "It's ___." },
    ],
    answer: "Friday",
    options: ["Friday", "Monday", "Wednesday"],
  },

  // Activity 2 — audio script from the guide, verbatim.
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Monday",
    options: ["Monday", "Tuesday", "Wednesday"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Tuesday",
    options: ["Tuesday", "Monday", "Thursday"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Wednesday",
    options: ["Wednesday", "Tuesday", "Thursday"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Thursday",
    options: ["Thursday", "Wednesday", "Friday"],
  },

  // Activity 3 (Let's talk) — the four calendar cues named in the guide's
  // picture description (Tuesday, Wednesday, Thursday, Friday).
  {
    id: "talk-tue",
    scene: "Calendar · Tuesday",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Tuesday",
    options: ["Tuesday", "Monday", "Wednesday"],
  },
  {
    id: "talk-wed",
    scene: "Calendar · Wednesday",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Wednesday",
    options: ["Wednesday", "Tuesday", "Thursday"],
  },
  {
    id: "talk-thu",
    scene: "Calendar · Thursday",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Thursday",
    options: ["Thursday", "Wednesday", "Friday"],
  },
  {
    id: "talk-fri",
    scene: "Calendar · Friday",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Friday",
    options: ["Friday", "Thursday", "Saturday"],
  },
];

// Fun corner, Option 2: "Racing Horses" board game — the tile text is given
// verbatim in the guide, but its exact snake-path geometry (which tile
// connects to which) isn't fully clear from the plain-text table
// extraction, same ambiguity as Unit 1's board game image. Tiles are
// traced in the order they're listed, which for a table-extracted source
// like this is more likely to reflect the real path than an image would
// have been — but if the physical board differs, this array is the only
// thing to edit (BoardGameStep just walks whatever path it's given).
export const boardGame = {
  path: [
    { id: "start", type: "start", label: "Start" },
    {
      id: "t1",
      type: "quiz",
      question: "The day after Monday",
      answer: "Tuesday",
      options: ["Tuesday", "Wednesday", "Monday"],
    },
    {
      id: "t2",
      type: "quiz",
      question: "The day before Thursday",
      answer: "Wednesday",
      options: ["Wednesday", "Tuesday", "Friday"],
    },
    { id: "t3", type: "action", label: "Go back two spaces", action: "backward", amount: 2 },
    {
      id: "t4",
      type: "quiz",
      question: "The day after Thursday",
      answer: "Friday",
      options: ["Friday", "Saturday", "Thursday"],
    },
    { id: "t5", type: "fun", label: "Get a gift from the teacher! 🎁" },
    {
      id: "t6",
      type: "quiz",
      question: "The day after Wednesday",
      answer: "Thursday",
      options: ["Thursday", "Friday", "Tuesday"],
    },
    { id: "t7", type: "action", label: "Go forward two spaces", action: "forward", amount: 2 },
    { id: "t8", type: "action", label: "Go back one space", action: "backward", amount: 1 },
    {
      id: "t9",
      type: "quiz",
      question: "Three days after Sunday",
      answer: "Wednesday",
      options: ["Wednesday", "Tuesday", "Thursday"],
    },
    {
      id: "t10",
      type: "quiz",
      question: "Six days after Sunday",
      answer: "Saturday",
      options: ["Saturday", "Friday", "Sunday"],
    },
    {
      id: "t11",
      type: "quiz",
      question: "Four days before Saturday",
      answer: "Tuesday",
      options: ["Tuesday", "Monday", "Wednesday"],
    },
    { id: "t12", type: "fun", label: "Sing a song! 🎵" },
    { id: "t13", type: "action", label: "Go back to the start", action: "goToStart" },
    { id: "t14", type: "action", label: "Go forward one space", action: "forward", amount: 1 },
    {
      id: "t15",
      type: "quiz",
      question: "The day after Tuesday",
      answer: "Wednesday",
      options: ["Wednesday", "Thursday", "Monday"],
    },
    {
      id: "t16",
      type: "quiz",
      question: "Three days after Friday",
      answer: "Monday",
      options: ["Monday", "Sunday", "Tuesday"],
    },
    {
      id: "t17",
      type: "quiz",
      question: "The day before Wednesday",
      answer: "Tuesday",
      options: ["Tuesday", "Monday", "Thursday"],
    },
    { id: "t18", type: "action", label: "Go back 5 spaces", action: "backward", amount: 5 },
    { id: "t19", type: "fun", label: "Pick a friend to sing a song! 🎤" },
    {
      id: "t20",
      type: "quiz",
      question: "The day before Sunday",
      answer: "Saturday",
      options: ["Saturday", "Friday", "Monday"],
    },
    {
      id: "t21",
      type: "quiz",
      question: "The day after Saturday",
      answer: "Sunday",
      options: ["Sunday", "Monday", "Friday"],
    },
    { id: "t22", type: "fun", label: "Two days that start with T: Tuesday & Thursday! 📅" },
    { id: "finish", type: "finish", label: "Finish" },
  ],
};

// Not built:
// - Fun corner Option 1 (external eslgamesplus.com link) — that's a
//   third-party site, not something to embed/rebuild here.
// - Fun corner Option 3 (open discussion questions) — no fixed answer to
//   check, same reasoning as other open-ended activities throughout.