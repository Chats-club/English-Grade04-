// Content source: Global Success Grade 4 (Book 2), Unit 16 "Weather", Lesson 1, Period 1
// Student's Book (page not printed in the source), Audio tracks 53-54,
// Teacher's guide p.155-157 (page numbers as printed in the source,
// likely mismatched — probably meant p.207-209 given this is Unit 16)
// Target structure: What was the weather like yesterday/last weekend? / It was ___.
//
// Vocab expanded beyond the curriculum's core 4 weather words (rainy,
// windy, sunny, cloudy) with 6 additional water-themed words (rain,
// cloud, storm, river, ocean, puddle) for a richer 10-item flashcard set,
// at the person's request.

export const vocab = [
  { id: "rainy", flag: "🌧️", name: "rainy" },
  { id: "windy", flag: "💨", name: "windy" },
  { id: "sunny", flag: "☀️", name: "sunny" },
  { id: "cloudy", flag: "☁️", name: "cloudy" },
  { id: "rain", flag: "🌦️", name: "rain" },
  { id: "cloud", flag: "🌥️", name: "cloud" },
  { id: "storm", flag: "⛈️", name: "storm" },
  { id: "river", flag: "🏞️", name: "river" },
  { id: "ocean", flag: "🌊", name: "ocean" },
  { id: "puddle", flag: "💧", name: "puddle" },
];

export const matchRightOrder = [
  "storm",
  "sunny",
  "river",
  "cloudy",
  "puddle",
  "rainy",
  "ocean",
  "windy",
  "cloud",
  "rain",
];

export const conversations = [
  {
    id: "act1-b",
    scene: "Mary & Minh",
    lines: [
      { speaker: "Mary", text: "What was the weather like in Sa Pa?" },
      { speaker: "Minh", text: "It was ___." },
    ],
    answer: "sunny",
    options: ["sunny", "rainy", "windy"],
  },
  {
    id: "act2-a",
    scene: "Picture a",
    lines: [
      { speaker: "A", text: "What was the weather like last weekend?" },
      { speaker: "B", text: "It was ___." },
    ],
    answer: "rainy",
    options: ["rainy", "windy", "sunny"],
  },
  {
    id: "act2-b",
    scene: "Picture b",
    lines: [
      { speaker: "A", text: "What was the weather like last weekend?" },
      { speaker: "B", text: "It was ___." },
    ],
    answer: "windy",
    options: ["windy", "rainy", "cloudy"],
  },
  {
    id: "act2-c",
    scene: "Picture c",
    lines: [
      { speaker: "A", text: "What was the weather like last weekend?" },
      { speaker: "B", text: "It was ___." },
    ],
    answer: "sunny",
    options: ["sunny", "cloudy", "windy"],
  },
  {
    id: "act2-d",
    scene: "Picture d",
    lines: [
      { speaker: "A", text: "What was the weather like last weekend?" },
      { speaker: "B", text: "It was ___." },
    ],
    answer: "cloudy",
    options: ["cloudy", "sunny", "rainy"],
  },
  {
    id: "talk-windy",
    scene: "Let's talk · windy",
    lines: [
      { speaker: "A", text: "What was the weather like yesterday?" },
      { speaker: "B", text: "It was ___." },
    ],
    answer: "windy",
    options: ["windy", "sunny", "rainy"],
  },
  {
    id: "talk-cloudy",
    scene: "Let's talk · cloudy",
    lines: [
      { speaker: "A", text: "What was the weather like yesterday?" },
      { speaker: "B", text: "It was ___." },
    ],
    answer: "cloudy",
    options: ["cloudy", "windy", "sunny"],
  },
  {
    id: "bonus-river",
    scene: "Bonus · river",
    lines: [{ speaker: "", text: "I like walking by the ___." }],
    answer: "river",
    options: ["river", "storm", "puddle"],
  },
  {
    id: "bonus-puddle",
    scene: "Bonus · puddle",
    lines: [{ speaker: "", text: "After the rain there was a big ___." }],
    answer: "puddle",
    options: ["puddle", "ocean", "storm"],
  },
  {
    id: "pastpresent-1",
    scene: "Past or Present? · 1",
    lines: [{ speaker: "", text: "Yesterday it ___ rainy." }],
    answer: "was",
    options: ["was", "is", "were"],
  },
  {
    id: "pastpresent-2",
    scene: "Past or Present? · 2",
    lines: [{ speaker: "", text: "Today it ___ sunny." }],
    answer: "is",
    options: ["is", "was", "were"],
  },
  {
    id: "pastpresent-3",
    scene: "Past or Present? · 3",
    lines: [{ speaker: "", text: "Last weekend it ___ windy." }],
    answer: "was",
    options: ["was", "is", "were"],
  },
  {
    id: "pastpresent-4",
    scene: "Past or Present? · 4",
    lines: [{ speaker: "", text: "Now it ___ cloudy." }],
    answer: "is",
    options: ["is", "was", "were"],
  },
];

// Fun corner Options 1-3 aren't built — external ppt, an external
// website, and a live miming game.