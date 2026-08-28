// Content source: Global Success Grade 4 (Book 2), Unit 16 "Weather", Lesson 2, Period 3
// Student's Book p.42, Audio tracks 57-58, Teacher's guide p.211-213
// Target structure: Do you want to go to the ___? / Great! Let's go. / Sorry, I can't.

export const vocab = [
  { id: "bakery", flag: "🥐", name: "bakery" },
  { id: "bookshop", flag: "📚", name: "bookshop" },
  { id: "food-stall", flag: "🍢", name: "food stall" },
  { id: "supermarket", flag: "🛒", name: "supermarket" },
  { id: "water-park", flag: "💦", name: "water park" },
];

export const matchRightOrder = ["supermarket", "bakery", "water park", "food stall", "bookshop"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Minh's mother & Minh · a",
    lines: [
      { speaker: "Minh's mother", text: "What's the weather like today?" },
      { speaker: "Minh", text: "It's ___, Mum." },
    ],
    answer: "sunny",
    options: ["sunny", "rainy", "windy"],
  },
  {
    id: "act1-b",
    scene: "Minh's mother & Minh · b",
    lines: [
      { speaker: "Minh's mother", text: "Lovely! Do you want to go to the ___ with me?" },
      { speaker: "Minh", text: "Great! Let's go." },
    ],
    answer: "water park",
    options: ["water park", "bakery", "bookshop"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Do you want to go to the food stall?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Great! Let's go.",
    options: ["Great! Let's go.", "Sorry, I can't."],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Do you want to go to the bookshop?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Sorry, I can't.",
    options: ["Sorry, I can't.", "Great! Let's go."],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Do you want to go to the supermarket?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Great! Let's go.",
    options: ["Great! Let's go.", "Sorry, I can't."],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Do you want to go to the bakery?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Sorry, I can't.",
    options: ["Sorry, I can't.", "Great! Let's go."],
  },
  {
    id: "talk-waterpark",
    scene: "Let's talk · water park",
    lines: [
      { speaker: "A", text: "Do you want to go to the water park?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Great! Let's go.",
    options: ["Great! Let's go.", "Sorry, I can't."],
  },
  {
    id: "talk-bakery",
    scene: "Let's talk · bakery",
    lines: [
      { speaker: "A", text: "Do you want to go to the bakery?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Sorry, I can't.",
    options: ["Sorry, I can't.", "Great! Let's go."],
  },
];

// Fun corner Options 1-3 aren't built — external ppt, a live cut-out
// board activity, and an external game link.