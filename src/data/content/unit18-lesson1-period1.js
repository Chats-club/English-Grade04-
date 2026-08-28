// Content source: Global Success Grade 4 (Book 2), Unit 18 "At the Shopping Centre", Lesson 1, Period 1
// Student's Book p.52, Teacher's guide p.253-254
// Target structure: Where's the bookshop? / It's ___.

export const vocab = [
  { id: "near", flag: "📍", name: "near" },
  { id: "opposite", flag: "🔀", name: "opposite" },
  { id: "behind", flag: "👈", name: "behind" },
  { id: "between", flag: "↔️", name: "between" },
];

export const matchRightOrder = ["behind", "near", "between", "opposite"];

export const conversations = [
  {
    id: "act1-b",
    scene: "Bill & Shop assistant",
    lines: [
      { speaker: "Bill", text: "Where's the bakery, please?" },
      { speaker: "Shop assistant", text: "It's near the ___." },
    ],
    answer: "gift shop",
    options: ["gift shop", "bookshop", "sports shop"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Where's the bookshop?" },
      { speaker: "B", text: "It's ___ the bakery." },
    ],
    answer: "near",
    options: ["near", "opposite", "behind"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Where's the bookshop?" },
      { speaker: "B", text: "It's ___ the sports shop." },
    ],
    answer: "opposite",
    options: ["opposite", "near", "between"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Where's the bookshop?" },
      { speaker: "B", text: "It's ___ the bakery." },
    ],
    answer: "behind",
    options: ["behind", "near", "opposite"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Where's the bookshop?" },
      { speaker: "B", text: "It's ___ the gift shop and the bakery." },
    ],
    answer: "between",
    options: ["between", "behind", "near"],
  },
  {
    id: "talk-near",
    scene: "Let's talk · near",
    lines: [
      { speaker: "A", text: "Where's the bakery?" },
      { speaker: "B", text: "It's ___ the bookshop." },
    ],
    answer: "near",
    options: ["near", "behind", "opposite"],
  },
  {
    id: "talk-behind",
    scene: "Let's talk · behind",
    lines: [
      { speaker: "A", text: "Where's the sports shop?" },
      { speaker: "B", text: "It's ___ the bakery." },
    ],
    answer: "behind",
    options: ["behind", "near", "between"],
  },
];

// Fun corner Options 1-2 aren't built — a live PPT quiz and project
// preparation with no checkable content.