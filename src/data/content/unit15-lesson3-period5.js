// Content source: Global Success Grade 4 (Book 2), Unit 15 "My Family's Weekends", Lesson 3, Period 5
// Student's Book p.34, Audio tracks 49-51, Teacher's guide p.218-219
// Phonics: letters g and s, words go/television.

export const phonicsDrill = [
  { id: "sound-g", flag: "🔤", name: "g" },
  { id: "sound-s", flag: "🔤", name: "s" },
  { id: "word-go", flag: "🎬", name: "go" },
  { id: "word-television", flag: "📺", name: "television" },
  { id: "sentence-go", flag: "🎬", name: "I go to the cinema on Saturdays." },
  { id: "sentence-television", flag: "📺", name: "We watch television on Sundays." },
];

export const conversations = [
  {
    id: "act2-go",
    scene: "Listen · go",
    lines: [{ speaker: "", text: "I ___ to the shopping centre on Saturdays." }],
    answer: "go",
    options: ["go", "goes", "going"],
  },
  {
    id: "act2-television",
    scene: "Listen · television",
    lines: [{ speaker: "", text: "They watch ___ on Sundays." }],
    answer: "television",
    options: ["television", "films", "TV shows"],
  },
];

// Not built:
// - Activity 3 "Let's chant" — the guide's procedure only references the
//   chant's topic (sounds of g and s) without quoting actual lines, so no
//   chant content is available to build from.
// - Fun corner Options 1-3 — a live sticky-ball sound game, a live
//   slap-the-board mechanic, and reflection questions with no checkable
//   content.