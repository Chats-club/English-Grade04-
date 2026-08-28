// Content source: Global Success Grade 4 (Book 2), Unit 16 "Weather", Lesson 3, Period 5
// Student's Book p.44, Audio tracks 60-62, Teacher's guide p.215-217
// Word stress on 'sunny and 'rainy.

export const phonicsDrill = [
  { id: "word-sunny", flag: "☀️", name: "sunny" },
  { id: "word-rainy", flag: "🌧️", name: "rainy" },
  { id: "sentence-sunny", flag: "☀️", name: "It's sunny today." },
  { id: "sentence-rainy", flag: "🌧️", name: "I don't like rainy weather." },
];

export const conversations = [
  {
    id: "act2-rainy",
    scene: "Listen · rainy",
    lines: [{ speaker: "", text: "It's ___ in Ho Chi Minh City." }],
    answer: "rainy",
    options: ["rainy", "sunny", "windy"],
  },
  {
    id: "act2-sunny",
    scene: "Listen · sunny",
    lines: [{ speaker: "", text: "I like ___ weather." }],
    answer: "sunny",
    options: ["sunny", "rainy", "cloudy"],
  },
];

export const crossword = {
  size: { rows: 5, cols: 5 },
  words: [
    {
      id: "sunny",
      answer: "SUNNY",
      hintText: "It's sunny today.",
      clue: "It's ___ today! (5 letters)",
      direction: "across",
      row: 3,
      col: 0,
    },
    {
      id: "rainy",
      answer: "RAINY",
      hintText: "I don't like rainy weather.",
      clue: "I don't like ___ weather. (5 letters)",
      direction: "down",
      row: 0,
      col: 3,
    },
  ],
};

// Not built:
// - Activity 3 "Let's chant" — the guide's procedure only references the
//   chant's target words (sunny, cloudy, windy, rainy) without quoting
//   actual lines, so no chant content is available to build from.
// - Fun corner Options 1-3 — an unspecified external game, a live miming
//   game, and a live word-substitution chant activity.