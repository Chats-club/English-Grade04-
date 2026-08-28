// Content source: Global Success Grade 4 (Book 2), Unit 18 "At the Shopping Centre", Lesson 1, Period 2
// Student's Book p.53, Teacher's guide p.256-257
// Review period — no new vocabulary, just fill-in-the-blank practice.

export const conversations = [
  {
    id: "act1-1",
    scene: "Dialogue 1",
    lines: [
      { speaker: "A", text: "Excuse me. Where's the gift shop?" },
      { speaker: "B", text: "It's over there. Can you see it?" },
      { speaker: "A", text: "Yes. I can see it now. The gift shop is ___ the bookshop." },
      { speaker: "B", text: "That's right." },
    ],
    answer: "opposite",
    options: ["opposite", "near", "behind"],
  },
  {
    id: "act1-2",
    scene: "Dialogue 2",
    lines: [
      { speaker: "A", text: "I want to buy some cakes. Where's the bakery?" },
      { speaker: "B", text: "Go straight and turn right. It's ___ the sports shop and the pet shop." },
    ],
    answer: "between",
    options: ["between", "near", "behind"],
  },
  {
    id: "act2-1",
    scene: "Exchange 1",
    lines: [
      { speaker: "A", text: "Where's the bookshop?" },
      { speaker: "B", text: "It's ___ the bakery." },
    ],
    answer: "near",
    options: ["near", "opposite", "between"],
  },
  {
    id: "act2-2",
    scene: "Exchange 2",
    lines: [
      { speaker: "A", text: "Where's the bookshop?" },
      { speaker: "B", text: "It's ___ the gift shop and the bakery." },
    ],
    answer: "between",
    options: ["between", "near", "behind"],
  },
  {
    id: "act2-3a",
    scene: "Exchange 3 · question",
    lines: [{ speaker: "A", text: "Where's the ___?" }],
    answer: "bookshop",
    options: ["bookshop", "gift shop", "bakery"],
  },
  {
    id: "act2-3b",
    scene: "Exchange 3 · answer",
    lines: [
      { speaker: "A", text: "Where's the bookshop?" },
      { speaker: "B", text: "It's ___ the sports shop." },
    ],
    answer: "opposite",
    options: ["opposite", "near", "behind"],
  },
  {
    id: "act2-4a",
    scene: "Exchange 4 · question",
    lines: [{ speaker: "A", text: "___ the bookshop?" }],
    answer: "Where's",
    options: ["Where's", "How's", "What's"],
  },
  {
    id: "act2-4b",
    scene: "Exchange 4 · answer",
    lines: [
      { speaker: "A", text: "Where's the bookshop?" },
      { speaker: "B", text: "It's ___ the bakery." },
    ],
    answer: "behind",
    options: ["behind", "near", "between"],
  },
];

// Not built:
// - Activity 3 (labeled "Let's play" but is really "Let's sing", song
//   "Where's the bookshop?") — lyrics aren't printed in the guide.
// - Fun corner Options 1-3 — external website, and two live
//   PPT box-reveal games.