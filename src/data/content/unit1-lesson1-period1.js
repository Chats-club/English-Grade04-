// Content source: Global Success Grade 4, Unit 1 "My Friends", Lesson 1, Period 1
// Student's Book p.10, Audio tracks 6-7
// Target structure: Where are you from? / I'm from ___.

export const vocab = [
  { id: "america", flag: "🇺🇸", name: "America" },
  { id: "australia", flag: "🇦🇺", name: "Australia" },
  { id: "britain", flag: "🇬🇧", name: "Britain" },
  { id: "vietnam", flag: "🇻🇳", name: "Viet Nam" },
];

export const matchRightOrder = ["Britain", "Viet Nam", "America", "Australia"];

export const conversations = [
  {
    id: "conv1",
    scene: "Minh meets Mary",
    lines: [
      { speaker: "Minh", text: "Hello. I'm Minh. I'm from Viet Nam. Where are you from?" },
      { speaker: "Mary", text: "Hello, Minh. I'm Mary. I'm from ___." },
    ],
    answer: "America",
    options: ["America", "Australia", "Britain"],
  },
  {
    id: "conv2",
    scene: "Lucy meets Ben",
    lines: [
      { speaker: "Lucy", text: "Hi. I'm Lucy. I'm from Britain. Where are you from?" },
      { speaker: "Ben", text: "Hi, Lucy. I'm Ben. I'm from ___." },
    ],
    answer: "Australia",
    options: ["America", "Australia", "Viet Nam"],
  },
];

export const pictureCued = [
  { character: "Mary", initial: "M", accent: "coral", flag: "🇺🇸", answer: "America" },
  { character: "Ben", initial: "B", accent: "mint", flag: "🇦🇺", answer: "Australia" },
  { character: "Lucy", initial: "L", accent: "gold", flag: "🇬🇧", answer: "Britain" },
  { character: "Minh", initial: "M", accent: "navy", flag: "🇻🇳", answer: "Viet Nam" },
];

export const optionsPool = ["America", "Australia", "Britain", "Viet Nam"];
