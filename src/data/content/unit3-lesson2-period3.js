export const vocab = [
  { id: "do-housework", flag: "🧹", name: "do housework" },
  { id: "go-to-school", flag: "🎒", name: "go to school" },
  { id: "listen-to-music", flag: "🎧", name: "listen to music" },
  { id: "study-at-school", flag: "📚", name: "study at school" },
];

export const matchRightOrder = [
  "study at school",
  "listen to music",
  "do housework",
  "go to school",
];

// Activity 1 (Look, listen and repeat) — the phonics goal targets the "u"
// sound in isolation, in the words "music" and "Sunday," and in the two
// sentences quoted in the objectives.
export const phonicsDrill = [
 { id: "sound-u", flag: "🔤", name: "u", audioText: "yoo" },
  { id: "word-music", flag: "🎧", name: "music" },
  { id: "word-sunday", flag: "📅", name: "Sunday" },
  { id: "sentence-music", flag: "🎧", name: "I listen to music on Saturdays." },
  { id: "sentence-housework", flag: "🧹", name: "I do housework on Sundays." },
];

export const conversations = [
  // Activity 1, Context a — verbatim from the guide. Two blanks (day, then
  // activity), split into sequential single-blank steps.
  {
    id: "act1-context-a-day",
    scene: "Ms Hoa & Nam · day",
    lines: [
      { speaker: "Ms Hoa", text: "What day is it today?" },
      { speaker: "Nam", text: "It's ___." },
    ],
    answer: "Thursday",
    options: ["Thursday", "Tuesday", "Saturday"],
  },
  {
    id: "act1-context-a-activity",
    scene: "Ms Hoa & Nam · activity",
    lines: [
      { speaker: "Ms Hoa", text: "What do you do on Thursdays?" },
      { speaker: "Nam", text: "I ___." },
    ],
    answer: "study at school",
    options: ["study at school", "do housework", "go to school"],
  },
  // Activity 1, Context b — verbatim from the guide.
  {
    id: "act1-context-b",
    scene: "Bill & Mai",
    lines: [
      { speaker: "Bill", text: "What do you do on Saturdays?" },
      { speaker: "Mai", text: "I ___." },
    ],
    answer: "do housework",
    options: ["do housework", "listen to music", "go to school"],
  },

  // Activity 2 — audio script from the guide, verbatim. Each of the 4
  // picture cues has two blanks (day, then activity), split into
  // sequential single-blank steps.
  {
    id: "act2-a-day",
    scene: "Picture a",
    lines: [{ speaker: "A", text: "What do you do on ___?" }],
    answer: "Mondays",
    options: ["Mondays", "Tuesdays", "Wednesdays"],
  },
  {
    id: "act2-a-activity",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What do you do on Mondays?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "study at school",
    options: ["study at school", "go to school", "do housework"],
  },
  {
    id: "act2-b-day",
    scene: "Picture b",
    lines: [{ speaker: "A", text: "What do you do on ___?" }],
    answer: "Wednesdays",
    options: ["Wednesdays", "Mondays", "Fridays"],
  },
  {
    id: "act2-b-activity",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What do you do on Wednesdays?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "go to school",
    options: ["go to school", "study at school", "listen to music"],
  },
  {
    id: "act2-c-day",
    scene: "Picture c",
    lines: [{ speaker: "A", text: "What do you do on ___?" }],
    answer: "Saturdays",
    options: ["Saturdays", "Sundays", "Fridays"],
  },
  {
    id: "act2-c-activity",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What do you do on Saturdays?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "do housework",
    options: ["do housework", "listen to music", "go to school"],
  },
  {
    id: "act2-d-day",
    scene: "Picture d",
    lines: [{ speaker: "A", text: "What do you do on ___?" }],
    answer: "Sundays",
    options: ["Sundays", "Saturdays", "Thursdays"],
  },
  {
    id: "act2-d-activity",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What do you do on Sundays?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "listen to music",
    options: ["listen to music", "do housework", "study at school"],
  },

  // Activity 3 (Let's talk) — the guide names Tuesdays, Fridays, and
  // Sundays as the calendar cues but doesn't specify the girl's actual
  // activities on each, so plausible varied activities are assigned here.
  {
    id: "talk-tue",
    scene: "Tuesdays",
    lines: [
      { speaker: "A", text: "What do you do on Tuesdays?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "go to school",
    options: ["go to school", "do housework", "listen to music"],
  },
  {
    id: "talk-fri",
    scene: "Fridays",
    lines: [
      { speaker: "A", text: "What do you do on Fridays?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "study at school",
    options: ["study at school", "go to school", "listen to music"],
  },
  {
    id: "talk-sun",
    scene: "Sundays",
    lines: [
      { speaker: "A", text: "What do you do on Sundays?" },
      { speaker: "B", text: "I ___." },
    ],
    answer: "listen to music",
    options: ["listen to music", "do housework", "study at school"],
  },
];

// Fun corner: none of the three options are built — Option 1 (mingling
// card-matching game) and Option 3 (hide-and-find flashcard game) both
// need a live physical/movement mechanic, and Option 2 is an external
// YouTube sing-along.