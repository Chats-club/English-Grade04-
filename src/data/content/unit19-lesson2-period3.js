// Content source: Global Success Grade 4 (Book 2), Unit 19 "The Animal World", Lesson 2, Period 3
// Student's Book p.60, Teacher's guide p.248-249
// Target structure: Why do you like ___? / Because they ___.

export const vocab = [
  { id: "dance-beautifully", flag: "💃", name: "dance beautifully" },
  { id: "run-quickly", flag: "🏃", name: "run quickly" },
  { id: "roar-loudly", flag: "🦁", name: "roar loudly" },
  { id: "sing-merrily", flag: "🎵", name: "sing merrily" },
];

export const matchRightOrder = ["roar loudly", "dance beautifully", "sing merrily", "run quickly"];

export const conversations = [
  {
    id: "act1-a",
    scene: "Ben & Linh · a",
    lines: [
      { speaker: "Ben", text: "What are these animals?" },
      { speaker: "Linh", text: "They're ___." },
    ],
    answer: "peacocks",
    options: ["peacocks", "giraffes", "lions"],
  },
  {
    id: "act1-b",
    scene: "Linh & Ben · b",
    lines: [
      { speaker: "Linh", text: "Why do you like peacocks?" },
      { speaker: "Ben", text: "Because they ___." },
    ],
    answer: "dance beautifully",
    options: ["dance beautifully", "run quickly", "sing merrily"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "Why do you like peacocks?" },
      { speaker: "B", text: "Because they ___." },
    ],
    answer: "dance beautifully",
    options: ["dance beautifully", "run quickly", "roar loudly"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "Why do you like giraffes?" },
      { speaker: "B", text: "Because they ___." },
    ],
    answer: "run quickly",
    options: ["run quickly", "dance beautifully", "sing merrily"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "Why do you like lions?" },
      { speaker: "B", text: "Because they ___." },
    ],
    answer: "roar loudly",
    options: ["roar loudly", "sing merrily", "run quickly"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "Why do you like birds?" },
      { speaker: "B", text: "Because they ___." },
    ],
    answer: "sing merrily",
    options: ["sing merrily", "roar loudly", "dance beautifully"],
  },
  {
    id: "talk-peacocks",
    scene: "Let's talk · peacocks",
    lines: [
      { speaker: "A", text: "Why do you like peacocks?" },
      { speaker: "B", text: "Because they ___." },
    ],
    answer: "dance beautifully",
    options: ["dance beautifully", "roar loudly", "run quickly"],
  },
  {
    id: "talk-lions",
    scene: "Let's talk · lions",
    lines: [
      { speaker: "A", text: "Why do you like lions?" },
      { speaker: "B", text: "Because they ___." },
    ],
    answer: "roar loudly",
    options: ["roar loudly", "sing merrily", "dance beautifully"],
  },
];

// Fun corner Options 1-2 aren't built — a live PPT quiz and a live
// draw-and-present activity.