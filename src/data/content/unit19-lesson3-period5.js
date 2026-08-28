// Content source: Global Success Grade 4 (Book 2), Unit 19 "The Animal World", Lesson 3, Period 5
// Student's Book p.62, Teacher's guide p.251-252
// Word stress: 'loudly and 'quickly (stress on the first syllable).

export const phonicsDrill = [
  { id: "word-loudly", flag: "🦁", name: "loudly" },
  { id: "word-quickly", flag: "🏃", name: "quickly" },
  { id: "sentence-loudly", flag: "🦁", name: "These animals are roaring loudly." },
  { id: "sentence-quickly", flag: "🏃", name: "Those animals are running quickly." },
];

export const conversations = [
  {
    id: "act2-quickly",
    scene: "Listen · quickly",
    lines: [{ speaker: "", text: "These giraffes are moving ___." }],
    answer: "quickly",
    options: ["quickly", "loudly"],
  },
  {
    id: "act2-loudly",
    scene: "Listen · loudly",
    lines: [{ speaker: "", text: "Those lions are roaring ___." }],
    answer: "loudly",
    options: ["loudly", "quickly"],
  },
];

// Not built:
// - Activity 3 "Let's chant" — the guide's procedure only references the
//   chant's target word (loudly) without quoting actual lines, so no
//   chant content is available to build from.
// - Fun corner Options 1-3 — a live song-writing activity, a live card
//   game, and reflection questions with no checkable content.