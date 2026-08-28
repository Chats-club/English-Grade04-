// Content source: Global Success Grade 4, Unit 4 "My Birthday Party", Lesson 1, Period 1
// Student's Book p.28, Audio tracks 37-38, Teacher's guide p.55-57
// Target structure: When's your birthday? / It's in ___.

export const vocab = [
  { id: "january", flag: "📅", name: "January" },
  { id: "february", flag: "📅", name: "February" },
  { id: "march", flag: "📅", name: "March" },
  { id: "april", flag: "📅", name: "April" },
];

export const matchRightOrder = ["March", "January", "April", "February"];

// Activity 1, Context a (Nam/Lucy greeting, no fill-blank content) is
// scene-setting only and isn't included as an exercise — it has no
// language point to check.
export const conversations = [
  {
    id: "act1-context-b",
    scene: "Nam & Lucy",
    lines: [
      { speaker: "Nam", text: "When's your birthday?" },
      { speaker: "Lucy", text: "It's in ___." },
    ],
    answer: "May",
    options: ["May", "April", "March"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "When's your birthday?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "January",
    options: ["January", "February", "March"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "When's your birthday?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "February",
    options: ["February", "January", "April"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "When's your birthday?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "March",
    options: ["March", "April", "February"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "When's your birthday?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "April",
    options: ["April", "March", "January"],
  },
  {
    id: "talk-may",
    scene: "Let's talk",
    lines: [
      { speaker: "A", text: "When's your birthday?" },
      { speaker: "B", text: "It's in ___." },
    ],
    answer: "May",
    options: ["May", "April", "March"],
  },
];

// Fun corner "SpongeBob Game" isn't built — needs a live PPT quiz mechanic
// this app doesn't have.