// Content source: Global Success Grade 4 (Book 2), Unit 15 "My Family's Weekends", Lesson 1, Period 1
// Student's Book p.30, Audio tracks 42-43, Teacher's guide p.209-211
// Target structure: Where does he/she go on Saturdays? / He/She goes to the ___.

export const vocab = [
  { id: "cinema", flag: "🎬", name: "cinema" },
  { id: "shopping-centre", flag: "🛍️", name: "shopping centre" },
  { id: "sports-centre", flag: "🏟️", name: "sports centre" },
  { id: "swimming-pool", flag: "🏊", name: "swimming pool" },
];

export const matchRightOrder = ["sports centre", "cinema", "swimming pool", "shopping centre"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Mary & Mai · a",
    lines: [
      { speaker: "Mary", text: "Where does your father go on Saturdays?" },
      { speaker: "Mai", text: "He goes to the ___." },
    ],
    answer: "gym",
    options: ["gym", "cinema", "swimming pool"],
  },
  {
    id: "act1-b",
    scene: "Mary & Mai · b",
    lines: [
      { speaker: "Mary", text: "What about your mother? Where does she go on Saturdays?" },
      { speaker: "Mai", text: "She goes to the ___." },
    ],
    answer: "shopping centre",
    options: ["shopping centre", "sports centre", "cinema"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Where does he go on Saturdays?" },
      { speaker: "B", text: "He goes to the ___." },
    ],
    answer: "sports centre",
    options: ["sports centre", "swimming pool", "cinema"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Where does she go on Saturdays?" },
      { speaker: "B", text: "She goes to the ___." },
    ],
    answer: "shopping centre",
    options: ["shopping centre", "sports centre", "cinema"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Where does he go on Saturdays?" },
      { speaker: "B", text: "He goes to the ___." },
    ],
    answer: "swimming pool",
    options: ["swimming pool", "sports centre", "shopping centre"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Where does she go on Saturdays?" },
      { speaker: "B", text: "She goes to the ___." },
    ],
    answer: "cinema",
    options: ["cinema", "swimming pool", "shopping centre"],
  },
  {
    id: "talk-cinema",
    scene: "Let's talk · cinema",
    lines: [
      { speaker: "A", text: "Where does he go on Saturdays?" },
      { speaker: "B", text: "He goes to the ___." },
    ],
    answer: "cinema",
    options: ["cinema", "sports centre", "shopping centre"],
  },
  {
    id: "talk-pool",
    scene: "Let's talk · swimming pool",
    lines: [
      { speaker: "A", text: "Where does she go on Saturdays?" },
      { speaker: "B", text: "She goes to the ___." },
    ],
    answer: "swimming pool",
    options: ["swimming pool", "cinema", "shopping centre"],
  },
  {
    id: "mine-cinema",
    scene: "About you · cinema",
    lines: [
      { speaker: "A", text: "Where do you go at the weekend?" },
      { speaker: "B", text: "I go to the ___." },
    ],
    answer: "cinema",
    options: ["cinema", "sports centre", "shopping centre"],
  },
  {
    id: "mine-pool",
    scene: "About you · swimming pool",
    lines: [
      { speaker: "A", text: "Where do you go at the weekend?" },
      { speaker: "B", text: "I go to the ___." },
    ],
    answer: "swimming pool",
    options: ["swimming pool", "cinema", "shopping centre"],
  },
];

export const cardPick = {
  cards: [
    { id: "cinema", word: "cinema", correct: "rạp chiếu phim", distractors: ["bể bơi", "trung tâm mua sắm"] },
    { id: "shopping-centre", word: "shopping centre", correct: "trung tâm mua sắm", distractors: ["rạp chiếu phim", "trung tâm thể thao"] },
    { id: "sports-centre", word: "sports centre", correct: "trung tâm thể thao", distractors: ["bể bơi", "rạp chiếu phim"] },
    { id: "swimming-pool", word: "swimming pool", correct: "bể bơi", distractors: ["trung tâm thể thao", "trung tâm mua sắm"] },
    { id: "gym", word: "gym", correct: "phòng tập gym", distractors: ["bể bơi", "trung tâm thể thao"] },
    { id: "cook-meals", word: "cooks meals", correct: "nấu ăn", distractors: ["tập yoga", "chơi tennis"] },
    { id: "do-yoga", word: "does yoga", correct: "tập yoga", distractors: ["nấu ăn", "xem phim"] },
    { id: "play-tennis", word: "plays tennis", correct: "chơi tennis", distractors: ["tập yoga", "xem phim"] },
    { id: "watch-films", word: "watches films", correct: "xem phim", distractors: ["chơi tennis", "nấu ăn"] },
    { id: "television", word: "television", correct: "ti vi", distractors: ["rạp chiếu phim", "xem phim"] },
    { id: "saturday", word: "Saturday", correct: "thứ Bảy", distractors: ["chủ Nhật", "thứ Hai"] },
    { id: "sunday", word: "Sunday", correct: "chủ Nhật", distractors: ["thứ Bảy", "thứ Sáu"] },
  ],
};

// Not built:
// - Fun corner Option 2 — reflection questions with no checkable content.