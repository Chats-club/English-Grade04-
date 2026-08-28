export const conversations = [
  // Activity 4 (Listen and tick) — audio script from the teacher's guide,
  // verbatim. Key: 1.b 2.a
  {
    id: "act4-1",
    scene: "Ms Hoa & Nam",
    lines: [
      { speaker: "Ms Hoa", text: "Hello, Nam." },
      { speaker: "Nam", text: "Hello, Ms Hoa." },
      { speaker: "Ms Hoa", text: "What day is it today?" },
      { speaker: "Nam", text: "It's ___." },
      { speaker: "Ms Hoa", text: "OK." },
    ],
    answer: "Wednesday",
    options: ["Wednesday", "Tuesday", "Thursday"],
  },
  {
    id: "act4-2",
    scene: "Mr Long & Mai",
    lines: [
      { speaker: "Mr Long", text: "Hello, Mai." },
      { speaker: "Mai", text: "Hello, Mr Long." },
      { speaker: "Mr Long", text: "What day is it today?" },
      { speaker: "Mai", text: "It's ___." },
      { speaker: "Mr Long", text: "Good." },
    ],
    answer: "Thursday",
    options: ["Thursday", "Friday", "Wednesday"],
  },

  // Activity 5 (Look, complete and read) — no answer key is printed in the
  // guide this time (unusual — other periods include one). Only the
  // procedure text confirms Picture 1's answer ("Monday"); Pictures 2-4
  // are reconstructed with plausible different days.
  {
    id: "act5-1",
    scene: "Picture 1",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Monday",
    options: ["Monday", "Tuesday", "Sunday"],
  },
  {
    id: "act5-2",
    scene: "Picture 2",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Tuesday",
    options: ["Tuesday", "Monday", "Wednesday"],
  },
  {
    id: "act5-3",
    scene: "Picture 3",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Friday",
    options: ["Friday", "Thursday", "Saturday"],
  },
  {
    id: "act5-4",
    scene: "Picture 4",
    lines: [
      { speaker: "A", text: "What day is it today?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "Saturday",
    options: ["Saturday", "Sunday", "Friday"],
  },
];

// Fun corner, Option 2: a second "Racing Horses" board. Same path-ambiguity
// caveat as Period 1's board — tiles traced in listed order. The source
// text repeats "THE DAY BEFORE SUNDAY" twice verbatim; kept as given rather
// than guessing what the second one was meant to be instead.
export const boardGame = {
  path: [
    { id: "start", type: "start", label: "Start" },
    {
      id: "t1",
      type: "quiz",
      question: "The first day of a week",
      answer: "Monday",
      options: ["Monday", "Sunday", "Tuesday"],
    },
    {
      id: "t2",
      type: "quiz",
      question: "The day before Tuesday",
      answer: "Monday",
      options: ["Monday", "Wednesday", "Sunday"],
    },
    { id: "t3", type: "fun", label: "Ask your partner to sing a song! 🎵" },
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
      question: "The day after Friday",
      answer: "Saturday",
      options: ["Saturday", "Sunday", "Friday"],
    },
    { id: "t7", type: "action", label: "Go forward one space", action: "forward", amount: 1 },
    { id: "t8", type: "action", label: "Go back three spaces", action: "backward", amount: 3 },
    {
      id: "t9",
      type: "quiz",
      question: "Three days after Monday",
      answer: "Thursday",
      options: ["Thursday", "Wednesday", "Friday"],
    },
    {
      id: "t10",
      type: "quiz",
      question: "Six days after Saturday",
      answer: "Friday",
      options: ["Friday", "Thursday", "Saturday"],
    },
    {
      id: "t11",
      type: "quiz",
      question: "Day four, count from Wednesday",
      answer: "Saturday",
      options: ["Saturday", "Friday", "Sunday"],
    },
    { id: "t12", type: "fun", label: "Show a dance! 💃" },
    { id: "t13", type: "action", label: "Go back two spaces", action: "backward", amount: 2 },
    { id: "t14", type: "action", label: "Go forward one space", action: "forward", amount: 1 },
    {
      id: "t15",
      type: "quiz",
      question: "The day after Monday",
      answer: "Tuesday",
      options: ["Tuesday", "Wednesday", "Monday"],
    },
    {
      id: "t16",
      type: "quiz",
      question: "Three days after Monday",
      answer: "Thursday",
      options: ["Thursday", "Wednesday", "Friday"],
    },
    {
      id: "t17",
      type: "quiz",
      question: "The day before Sunday",
      answer: "Saturday",
      options: ["Saturday", "Friday", "Monday"],
    },
    { id: "t18", type: "action", label: "Go back 5 spaces", action: "backward", amount: 5 },
    { id: "t19", type: "fun", label: "Pick a friend to tell a fun story! 📖" },
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
    {
      id: "t22",
      type: "quiz",
      question: "The day that starts with W",
      answer: "Wednesday",
      options: ["Wednesday", "Tuesday", "Thursday"],
    },
    { id: "finish", type: "finish", label: "Finish" },
  ],
};

// Not built:
// - Activity 3 "Let's talk" (actually describes "Slap the board") — needs
//   a live speed-tap mechanic this app doesn't have.
// - Fun corner Option 1 (external eslgamesplus.com link) and Option 3
//   (YouTube sing-along) — external resources, not rebuilt here.