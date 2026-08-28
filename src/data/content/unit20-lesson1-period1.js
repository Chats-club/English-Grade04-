// Content source: Global Success Grade 4 (Book 2), Unit 20 "At Summer Camp", Lesson 1, Period 1
// Student's Book p.64, Audio tracks 93-94, Teacher's guide p.255-256
// Target structure: What's he/she doing? / He's/She's ___.
//
// Vocab expanded beyond the curriculum's core 4 activities (building a
// campfire, putting up a tent, taking a photo, telling a story) with 6
// additional common summer-camp activities (hiking, swimming, fishing,
// roasting marshmallows, canoeing, stargazing) for a richer 10-item
// flashcard set, at the person's request.

export const vocab = [
  { id: "building-campfire", flag: "🔥", name: "building a campfire" },
  { id: "putting-up-tent", flag: "⛺", name: "putting up a tent" },
  { id: "taking-photo", flag: "📸", name: "taking a photo" },
  { id: "telling-story", flag: "📖", name: "telling a story" },
  { id: "hiking", flag: "🥾", name: "hiking" },
  { id: "swimming", flag: "🏊", name: "swimming" },
  { id: "fishing", flag: "🎣", name: "fishing" },
  { id: "roasting-marshmallows", flag: "🍡", name: "roasting marshmallows" },
  { id: "canoeing", flag: "🛶", name: "canoeing" },
  { id: "stargazing", flag: "🌟", name: "stargazing" },
];

export const matchRightOrder = [
  "fishing",
  "putting up a tent",
  "canoeing",
  "telling a story",
  "stargazing",
  "building a campfire",
  "hiking",
  "taking a photo",
  "swimming",
  "roasting marshmallows",
];

export const conversations = [
  {
    id: "act1-b",
    scene: "Bill & Mai",
    lines: [
      { speaker: "Bill", text: "What's he doing?" },
      { speaker: "Mai", text: "He's ___." },
    ],
    answer: "building a campfire",
    options: ["building a campfire", "telling a story", "putting up a tent"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What's he doing?" },
      { speaker: "B", text: "He's ___." },
    ],
    answer: "putting up a tent",
    options: ["putting up a tent", "telling a story", "building a campfire"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What's she doing?" },
      { speaker: "B", text: "She's ___." },
    ],
    answer: "building a campfire",
    options: ["building a campfire", "taking a photo", "putting up a tent"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What's he doing?" },
      { speaker: "B", text: "He's ___." },
    ],
    answer: "telling a story",
    options: ["telling a story", "putting up a tent", "taking a photo"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What's she doing?" },
      { speaker: "B", text: "She's ___." },
    ],
    answer: "taking a photo",
    options: ["taking a photo", "building a campfire", "telling a story"],
  },
  {
    id: "talk-photo",
    scene: "Let's talk · taking a photo",
    lines: [
      { speaker: "A", text: "What's she doing?" },
      { speaker: "B", text: "She's ___." },
    ],
    answer: "taking a photo",
    options: ["taking a photo", "building a campfire", "telling a story"],
  },
  {
    id: "talk-tent",
    scene: "Let's talk · putting up a tent",
    lines: [
      { speaker: "A", text: "What's he doing?" },
      { speaker: "B", text: "He's ___." },
    ],
    answer: "putting up a tent",
    options: ["putting up a tent", "telling a story", "taking a photo"],
  },
  {
    id: "fillblank-telling",
    scene: "Fill in the blank · 1",
    lines: [{ speaker: "", text: "He's ___ a story." }],
    answer: "telling",
    options: ["telling", "building", "taking"],
  },
  {
    id: "fillblank-building",
    scene: "Fill in the blank · 2",
    lines: [{ speaker: "", text: "She's ___ a campfire." }],
    answer: "building",
    options: ["building", "telling", "putting"],
  },
  {
    id: "fillblank-putting",
    scene: "Fill in the blank · 3",
    lines: [{ speaker: "", text: "He's ___ up a tent." }],
    answer: "putting",
    options: ["putting", "building", "taking"],
  },
  {
    id: "fillblank-taking",
    scene: "Fill in the blank · 4",
    lines: [{ speaker: "", text: "She's ___ a photo." }],
    answer: "taking",
    options: ["taking", "telling", "putting"],
  },
  {
    id: "likeing-taking",
    scene: "I like ___-ing · 1",
    lines: [{ speaker: "", text: "I like ___ photos." }],
    answer: "taking",
    options: ["taking", "take", "took"],
  },
  {
    id: "likeing-building",
    scene: "I like ___-ing · 2",
    lines: [{ speaker: "", text: "I like ___ campfires." }],
    answer: "building",
    options: ["building", "build", "built"],
  },
  {
    id: "likeing-telling",
    scene: "I like ___-ing · 3",
    lines: [{ speaker: "", text: "I like ___ stories." }],
    answer: "telling",
    options: ["telling", "tell", "told"],
  },
];

// Fun corner Options 1-3 aren't built — external ppt, an external
// website, and a live spelling game.