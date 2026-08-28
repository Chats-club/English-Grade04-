// Content source: Global Success Grade 4 (Book 2), Unit 15 "My Family's Weekends", Lesson 2, Period 3
// Student's Book p.32, Teacher's guide p.214-216
// Target structure: What does he/she do on Sundays? / He/She ___.

export const vocab = [
  { id: "cook-meals", flag: "🍳", name: "cooks meals" },
  { id: "do-yoga", flag: "🧘", name: "does yoga" },
  { id: "play-tennis", flag: "🎾", name: "plays tennis" },
  { id: "watch-films", flag: "🎥", name: "watches films" },
];

export const matchRightOrder = ["plays tennis", "does yoga", "watches films", "cooks meals"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Ben & Linh · a",
    lines: [
      { speaker: "Ben", text: "Where does your father go on Sundays?" },
      { speaker: "Linh", text: "He goes to the ___." },
    ],
    answer: "sports centre",
    options: ["sports centre", "cinema", "swimming pool"],
  },
  {
    id: "act1-b",
    scene: "Ben & Linh · b",
    lines: [
      { speaker: "Ben", text: "What does he do there?" },
      { speaker: "Linh", text: "He ___." },
    ],
    answer: "plays tennis",
    options: ["plays tennis", "does yoga", "cooks meals"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What does she do on Sundays?" },
      { speaker: "B", text: "She ___." },
    ],
    answer: "cooks meals",
    options: ["cooks meals", "does yoga", "watches films"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What does he do on Sundays?" },
      { speaker: "B", text: "He ___." },
    ],
    answer: "plays tennis",
    options: ["plays tennis", "cooks meals", "watches films"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What does he do on Sundays?" },
      { speaker: "B", text: "He ___." },
    ],
    answer: "watches films",
    options: ["watches films", "plays tennis", "does yoga"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What does she do on Sundays?" },
      { speaker: "B", text: "She ___." },
    ],
    answer: "does yoga",
    options: ["does yoga", "cooks meals", "watches films"],
  },
  {
    id: "talk-tennis",
    scene: "Let's talk · plays tennis",
    lines: [
      { speaker: "A", text: "What does he do on Sundays?" },
      { speaker: "B", text: "He ___." },
    ],
    answer: "plays tennis",
    options: ["plays tennis", "watches films", "cooks meals"],
  },
  {
    id: "talk-yoga",
    scene: "Let's talk · does yoga",
    lines: [
      { speaker: "A", text: "What does she do on Sundays?" },
      { speaker: "B", text: "She ___." },
    ],
    answer: "does yoga",
    options: ["does yoga", "cooks meals", "plays tennis"],
  },
  {
    id: "mine-tennis",
    scene: "About you · tennis",
    lines: [
      { speaker: "A", text: "What do you do at the weekend?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "play tennis",
    options: ["play tennis", "watch films", "do yoga"],
  },
  {
    id: "mine-films",
    scene: "About you · films",
    lines: [
      { speaker: "A", text: "What do you do at the weekend?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "watch films",
    options: ["watch films", "play tennis", "cook meals"],
  },
];

// Games section isn't built — a live team-based wheel game and a live
// pair-talk-then-report activity.