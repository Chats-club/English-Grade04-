export const phonicsDrill = [
  { id: "sound-u", flag: "🔤", name: "u", audioText: "yoo" },
  { id: "word-music", flag: "🎧", name: "music" },
  { id: "word-sunday", flag: "📅", name: "Sunday" },
  { id: "sentence-music", flag: "🎧", name: "I listen to music on Saturdays." },
  { id: "sentence-housework", flag: "🧹", name: "I do housework on Sundays." },
];

// Activity 2 (Listen and circle) — the guide's own audio script this time
// ("I listen to music." / "I study at school.") doesn't actually mention
// "Sunday" despite the stated goal, but unlike some other periods the
// sentences themselves ARE given verbatim, so these use that text directly
// rather than a reconstruction.
export const conversations = [
  {
    id: "act2-1",
    scene: "Listen · 1",
    lines: [{ speaker: "", text: "I ___." }],
    answer: "listen to music",
    options: ["listen to music", "do housework", "study at school"],
  },
  {
    id: "act2-2",
    scene: "Listen · 2",
    lines: [{ speaker: "", text: "I ___." }],
    answer: "study at school",
    options: ["study at school", "go to school", "listen to music"],
  },
];