// Content source: Global Success Grade 4, Unit 9 "Our Sports Day", Lesson 2, Period 3
// Student's Book p.64, Audio tracks 92-93, Teacher's guide p.118-119
// Target structure: When's your sports day? / It's in ___.
// These 4 months (September-December) do match the unit's stated objectives.

export const vocab = [
  { id: "september", flag: "📅", name: "September" },
  { id: "october", flag: "📅", name: "October" },
  { id: "november", flag: "📅", name: "November" },
  { id: "december", flag: "📅", name: "December" },
];

export const matchRightOrder = ["November", "September", "December", "October"];

export const conversations = [
  {
    id: "act1-b",
    scene: "Nam & Lucy",
    lines: [
      { speaker: "Nam", text: "When's your sports day?" },
      { speaker: "Lucy", text: "It's in ___." },
    ],
    answer: "October",
    options: ["October", "September", "November"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "When's your sports day?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "September",
    options: ["September", "October", "November"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "When's your sports day?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "October",
    options: ["October", "September", "December"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "When's your sports day?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "November",
    options: ["November", "October", "December"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "When's your sports day?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "December",
    options: ["December", "November", "September"],
  },
  {
    id: "talk-september",
    scene: "Let's talk · September",
    lines: [
      { speaker: "A", text: "When's your sports day?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "September",
    options: ["September", "October", "November"],
  },
  {
    id: "talk-december",
    scene: "Let's talk · December",
    lines: [
      { speaker: "A", text: "When's your sports day?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "December",
    options: ["December", "November", "September"],
  },
];

// Fun corner Options 1-2 aren't built — both need live team/timing
// mechanics this app doesn't have.