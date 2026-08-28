// Content source: Global Success Grade 4, Unit 10 "Our Summer Holidays", Lesson 1, Period 1
// Student's Book p.68, Audio tracks 98-99, Teacher's guide p.125-127
// Target structure: Were you ___ last weekend? / Yes, I was. / No, I wasn't.

export const vocab = [
  { id: "campsite", flag: "⛺", name: "at the campsite" },
  { id: "zoo", flag: "🦁", name: "at the zoo" },
  { id: "countryside", flag: "🌾", name: "in the countryside" },
  { id: "beach", flag: "🏖️", name: "on the beach" },
];

export const matchRightOrder = ["at the zoo", "on the beach", "in the countryside", "at the campsite"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Bill & Mai · a",
    lines: [
      { speaker: "Bill", text: "Were you in the mountains last weekend?" },
      { speaker: "Mai", text: "___" },
    ],
    answer: "Yes, I was.",
    options: ["Yes, I was.", "No, I wasn't."],
  },
  {
    id: "act1-b",
    scene: "Mai & Bill · b",
    lines: [
      { speaker: "Mai", text: "Were you in the mountains last weekend, too?" },
      { speaker: "Bill", text: "No, I wasn't. I was at the ___." },
    ],
    answer: "zoo",
    options: ["zoo", "campsite", "beach"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Were you at the zoo last weekend?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, I was.",
    options: ["Yes, I was.", "No, I wasn't."],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Were you on the beach last weekend?" },
      { speaker: "B", text: "___" },
    ],
    answer: "No, I wasn't.",
    options: ["No, I wasn't.", "Yes, I was."],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Were you at the campsite last weekend?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes. I was.",
    options: ["Yes. I was.", "No, I wasn't."],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Were you in the countryside last weekend?" },
      { speaker: "B", text: "___" },
    ],
    answer: "No, I wasn't",
    options: ["No, I wasn't", "Yes, I was."],
  },
  {
    id: "talk-beach",
    scene: "Let's talk · beach",
    lines: [
      { speaker: "A", text: "Were you on the beach last weekend?" },
      { speaker: "B", text: "___" },
    ],
    answer: "Yes, I was.",
    options: ["Yes, I was.", "No, I wasn't."],
  },
  {
    id: "talk-countryside",
    scene: "Let's talk · countryside",
    lines: [
      { speaker: "A", text: "Were you in the countryside last weekend?" },
      { speaker: "B", text: "___" },
    ],
    answer: "No, I wasn't.",
    options: ["No, I wasn't.", "Yes, I was."],
  },
];

// Fun corner Options 1-2 aren't built — external ppt game and reflection
// questions with no checkable content.