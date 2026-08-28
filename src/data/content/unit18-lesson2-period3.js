// Content source: Global Success Grade 4 (Book 2), Unit 18 "At the Shopping Centre", Lesson 2, Period 3
// Student's Book p.54, Teacher's guide p.258-260
// Target structure: How much is the ___? / It's ___.

export const vocab = [
  { id: "pen", flag: "✏️", name: "pen" },
  { id: "skirt", flag: "👗", name: "skirt" },
  { id: "t-shirt", flag: "👕", name: "T-shirt" },
  { id: "school-bag", flag: "🎒", name: "school bag" },
];

export const matchRightOrder = ["T-shirt", "pen", "school bag", "skirt"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Linh's mother & Linh · a",
    lines: [
      { speaker: "Linh's mother", text: "How much is the T-shirt, Linh?" },
      { speaker: "Linh", text: "It's ___." },
    ],
    answer: "sixty thousand dong",
    options: ["sixty thousand dong", "seventy thousand dong", "fifty thousand dong"],
  },
  {
    id: "act1-b",
    scene: "Linh & Linh's mother · b",
    lines: [
      { speaker: "Linh", text: "How much is the skirt, Mum?" },
      { speaker: "Linh's mother", text: "It's ___." },
    ],
    answer: "seventy thousand dong",
    options: ["seventy thousand dong", "sixty thousand dong", "eighty thousand dong"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "How much is the pen?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "twenty thousand dong",
    options: ["twenty thousand dong", "fifty thousand dong", "eighty thousand dong"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "How much is the skirt?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "eighty thousand dong",
    options: ["eighty thousand dong", "twenty thousand dong", "ninety thousand dong"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "How much is the T-shirt?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "fifty thousand dong",
    options: ["fifty thousand dong", "eighty thousand dong", "ninety thousand dong"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "How much is the school bag?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "ninety thousand dong",
    options: ["ninety thousand dong", "fifty thousand dong", "twenty thousand dong"],
  },
  {
    id: "talk-tshirt",
    scene: "Let's talk · T-shirt",
    lines: [
      { speaker: "A", text: "How much is the T-shirt?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "fifty thousand dong",
    options: ["fifty thousand dong", "twenty thousand dong", "ninety thousand dong"],
  },
  {
    id: "talk-pen",
    scene: "Let's talk · pen",
    lines: [
      { speaker: "A", text: "How much is the pen?" },
      { speaker: "B", text: "It's ___." },
    ],
    answer: "twenty thousand dong",
    options: ["twenty thousand dong", "eighty thousand dong", "fifty thousand dong"],
  },
];

// Fun corner Option 1 isn't built — a live PPT shopping game.