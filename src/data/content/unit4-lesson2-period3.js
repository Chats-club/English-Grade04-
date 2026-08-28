// Content source: Global Success Grade 4, Unit 4 "My Birthday Party", Lesson 2, Period 3
// Student's Book p.30, Audio tracks 41-42, Teacher's guide p.59-62
// Target structure: What do you want to eat/drink? / I want ___.
//
// NOTE: this period's own objectives list "chips, grapes, jam, juice,
// lemonade" (no water), but Activity 2's picture cues are actually chips/
// grapes/lemonade/water (no juice pictured — juice only appears via
// Activity 1's dialogue). Vocab below reflects the 6 words actually used
// in this period's content, matching Period 4's objectives too.

export const vocab = [
  { id: "chips", flag: "🍟", name: "chips" },
  { id: "grapes", flag: "🍇", name: "grapes" },
  { id: "jam", flag: "🍯", name: "jam" },
  { id: "juice", flag: "🧃", name: "juice" },
  { id: "lemonade", flag: "🍋", name: "lemonade" },
  { id: "water", flag: "💧", name: "water" },
];

export const matchRightOrder = ["lemonade", "chips", "water", "jam", "grapes", "juice"];

export const conversations = [
  {
    id: "act1-context-b-eat",
    scene: "Lucy & Nam · eat",
    lines: [
      { speaker: "Lucy", text: "What do you want to eat, Nam?" },
      { speaker: "Nam", text: "I want some ___." },
    ],
    answer: "jam",
    options: ["jam", "chips", "grapes"],
  },
  {
    id: "act1-context-b-drink",
    scene: "Lucy & Nam · drink",
    lines: [
      { speaker: "Lucy", text: "What do you want to drink?" },
      { speaker: "Nam", text: "I want some ___." },
    ],
    answer: "juice",
    options: ["juice", "water", "lemonade"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What do you want to eat?" },
      { speaker: "B", text: "I want some ___." },
    ],
    answer: "chips",
    options: ["chips", "grapes", "jam"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What do you want to eat?" },
      { speaker: "B", text: "I want some ___." },
    ],
    answer: "grapes",
    options: ["grapes", "chips", "jam"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What do you want to drink?" },
      { speaker: "B", text: "I want some ___." },
    ],
    answer: "lemonade",
    options: ["lemonade", "water", "juice"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What do you want to drink?" },
      { speaker: "B", text: "I want some ___." },
    ],
    answer: "water",
    options: ["water", "lemonade", "juice"],
  },
  {
    id: "talk-chips",
    scene: "Let's talk · eat",
    lines: [
      { speaker: "A", text: "What do you want to eat?" },
      { speaker: "B", text: "I want some ___." },
    ],
    answer: "chips",
    options: ["chips", "grapes", "jam"],
  },
  {
    id: "talk-juice",
    scene: "Let's talk · drink",
    lines: [
      { speaker: "A", text: "What do you want to drink?" },
      { speaker: "B", text: "I want some ___." },
    ],
    answer: "juice",
    options: ["juice", "water", "lemonade"],
  },
];

// Fun corner "Bomb Star Game" isn't built — needs a live PPT quiz mechanic.